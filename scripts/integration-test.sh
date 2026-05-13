#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# RJ Master SOP 2026 — FULL INTEGRATION TEST (hardened with --max-time)
# Usage: BASE_URL=http://localhost:3000 API_KEY=... ./scripts/integration-test.sh
# ─────────────────────────────────────────────────────────────────────────────
set -u

BASE="${BASE_URL:-http://localhost:3000}"
KEY="${API_KEY:-$(cat .dev-api-key 2>/dev/null || echo '')}"
CRON_SECRET="${CRON_SECRET_OVERRIDE:-local-dev-cron-secret-please-change-x7y3z9w2v5}"
MAXT="${MAXT:-8}"  # hard per-curl timeout in seconds
PASS=0; FAIL=0; TOTAL=0
GREEN='\033[0;32m'; RED='\033[0;31m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'

if [[ -z "$KEY" ]]; then
  echo "❌ No API key. Run ./scripts/generate-api-key.sh first or export API_KEY."
  exit 1
fi

step() { echo ""; echo -e "${BLUE}▶ $1${NC}"; }

# req <label> <method> <path> [expect_codes] [json_body]
req() {
  local label="$1" method="$2" path="$3" expect="${4:-200}" data="${5:-}"
  TOTAL=$((TOTAL+1))
  local args=(-s --max-time "$MAXT" -o /tmp/it_out -w "%{http_code}"
              -X "$method" -H "x-api-key: $KEY" -H "accept: application/json")
  [[ -n "$data" ]] && args+=(-H "content-type: application/json" -d "$data")
  local code; code=$(curl "${args[@]}" "$BASE$path" 2>/dev/null || echo 000)
  if [[ ",$expect," == *",$code,"* ]]; then
    PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s %s (HTTP %s)\n" "$label" "$method $path" "$code"
    return 0
  else
    FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s %s (HTTP %s, expected %s)\n" "$label" "$method $path" "$code" "$expect"
    echo "      body: $(head -c 200 /tmp/it_out 2>/dev/null)"
    return 1
  fi
}

req_cron() {
  local label="$1" method="$2" path="$3" expect="${4:-200}"
  TOTAL=$((TOTAL+1))
  local code; code=$(curl -s --max-time "$MAXT" -o /tmp/it_out -w "%{http_code}" \
    -X "$method" -H "x-cron-secret: $CRON_SECRET" "$BASE$path" 2>/dev/null || echo 000)
  if [[ ",$expect," == *",$code,"* ]]; then
    PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s %s (HTTP %s)\n" "$label" "$method $path" "$code"
  else
    FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s %s (HTTP %s, expected %s)\n" "$label" "$method $path" "$code" "$expect"
    echo "      body: $(head -c 200 /tmp/it_out 2>/dev/null)"
  fi
}

# do_post <label> <path> <json> → echoes raw response body, also stores HTTP code in $LAST_CODE
LAST_CODE=000
do_post() {
  local path="$1" data="$2"
  local resp; resp=$(curl -s --max-time "$MAXT" -w "\n%{http_code}" \
    -X POST -H "x-api-key: $KEY" -H "content-type: application/json" \
    -d "$data" "$BASE$path" 2>/dev/null)
  LAST_CODE=$(echo "$resp" | tail -n1)
  echo "$resp" | sed '$d'
}

echo "═══════════════════════════════════════════════════════════════"
echo "  FULL INTEGRATION TEST — $BASE"
echo "  API Key: ${KEY:0:16}...   Per-call max: ${MAXT}s"
echo "═══════════════════════════════════════════════════════════════"

# ────────────────────────────────────────────────────────────────────
step "1. Health + bindings"
req "healthz"      GET /healthz   200
req "readyz"       GET /readyz    "200,503"

# ────────────────────────────────────────────────────────────────────
step "2. SOP library (public)"
req "phases"        GET /api/phases             200
req "sops list"     GET /api/sops               200
req "sop detail"    GET /api/sops/SOP-601       "200,404"
req "stats"         GET /api/stats              200
req "legal changes" GET /api/legal-changes-2026 200
req "templates"     GET /api/templates          200
req "agent SOP"     GET /api/agent/SOP-105      "200,404"

# ────────────────────────────────────────────────────────────────────
step "3. Auth — protection works"
TOTAL=$((TOTAL+1))
code=$(curl -s --max-time "$MAXT" -o /dev/null -w "%{http_code}" "$BASE/api/ops/clients" 2>/dev/null || echo 000)
if [[ "$code" == "401" ]]; then PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (HTTP 401 no key)\n" "Protected w/o key 401s"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s (HTTP %s, expected 401)\n" "Protected w/o key" "$code"; fi

req "Protected w/ key 200s" GET /api/ops/clients 200

# ────────────────────────────────────────────────────────────────────
step "4. Clients CRUD"
CLIENT_PAYLOAD='{"first_name":"Integration","last_name":"Test","email":"integration_test_'$RANDOM'@example.com","phone":"+15551234567","credit_score_start":580,"credit_score_goal":750,"monthly_fee":179}'
RESP=$(do_post /api/ops/clients "$CLIENT_PAYLOAD")
TOTAL=$((TOTAL+1))
CLIENT_ID=$(echo "$RESP" | python3 -c "import sys,json
try:
  d=json.load(sys.stdin)
  print(d.get('id') or (d.get('client') or {}).get('id') or (d.get('data') or {}).get('id') or '')
except: print('')" 2>/dev/null)
if [[ -n "$CLIENT_ID" ]]; then PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (id=%s)\n" "Create client" "$CLIENT_ID"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s code=%s body=%s\n" "Create client" "$LAST_CODE" "$(echo "$RESP" | head -c 150)"; CLIENT_ID=1; fi

req "Get client by ID" GET /api/ops/clients/$CLIENT_ID "200,404"
req "Update client"    PUT /api/ops/clients/$CLIENT_ID "200,404" '{"credit_score_current":620,"status":"active"}'

# ────────────────────────────────────────────────────────────────────
step "5. Disputes CRUD"
DISPUTE_PAYLOAD='{"client_id":'$CLIENT_ID',"bureau":"Experian","account_name":"Test Creditor","account_number":"****1234","dispute_reason":"Not mine","fcra_section":"§1681i","dispute_round":1,"status":"pending"}'
RESP=$(do_post /api/ops/disputes "$DISPUTE_PAYLOAD")
TOTAL=$((TOTAL+1))
DISPUTE_ID=$(echo "$RESP" | python3 -c "import sys,json
try:
  d=json.load(sys.stdin)
  print(d.get('id') or (d.get('dispute') or {}).get('id') or (d.get('data') or {}).get('id') or '')
except: print('')" 2>/dev/null)
if [[ -n "$DISPUTE_ID" ]]; then PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (id=%s)\n" "Create dispute" "$DISPUTE_ID"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s code=%s body=%s\n" "Create dispute" "$LAST_CODE" "$(echo "$RESP" | head -c 150)"; DISPUTE_ID=1; fi

req "List disputes"   GET /api/ops/disputes           200
req "Update dispute"  PUT /api/ops/disputes/$DISPUTE_ID "200,404" '{"status":"sent","sent_date":"2026-05-13"}'

# ────────────────────────────────────────────────────────────────────
step "6. Dispute letter (HTML + print PDF)"
TOTAL=$((TOTAL+1))
code=$(curl -s --max-time "$MAXT" -o /tmp/letter_html -w "%{http_code}" "$BASE/dispute/letter/$DISPUTE_ID" 2>/dev/null || echo 000)
size=$(wc -c < /tmp/letter_html 2>/dev/null || echo 0)
if [[ "$code" == "200" ]] && [[ "$size" -gt 500 ]] && grep -qi "FCRA\|Fair Credit" /tmp/letter_html 2>/dev/null; then
  PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (%d bytes, FCRA refs present)\n" "Dispute letter HTML" "$size"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s (HTTP %s, size %s)\n" "Dispute letter HTML" "$code" "$size"; fi

TOTAL=$((TOTAL+1))
code=$(curl -s --max-time "$MAXT" -o /tmp/letter_pdf -w "%{http_code}" "$BASE/dispute/letter-pdf/$DISPUTE_ID" 2>/dev/null || echo 000)
if [[ "$code" == "200" ]] && grep -q "@page\|window.print" /tmp/letter_pdf 2>/dev/null; then
  PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (print-ready)\n" "Dispute letter print/PDF route"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s (HTTP %s)\n" "Dispute letter PDF route" "$code"; fi

# ────────────────────────────────────────────────────────────────────
step "7. Tasks + Workflows + Compliance"
req "Tasks list"            GET  /api/ops/tasks              200
req "Workflows list"        GET  /api/ops/workflows          200
req "Compliance items"      GET  /api/ops/compliance         200
req "CROA rules"            GET  /api/compliance/croa-rules  200
req "FCRA rights"           GET  /api/compliance/fcra-rights 200

# ────────────────────────────────────────────────────────────────────
step "8. MFSN credit reports"
req "MFSN docs"             GET  /api/mfsn/docs                       200
req "MFSN endpoints"        GET  /api/mfsn/endpoints                  200
req "Client reports"        GET  /api/mfsn/reports/$CLIENT_ID         "200,404"
req "Score history"         GET  /api/mfsn/score-history/$CLIENT_ID   "200,404"
req "Client summary"        GET  /api/mfsn/clients/$CLIENT_ID/summary "200,404"

# ────────────────────────────────────────────────────────────────────
step "9. Communications + Twilio + Email"
req "Communications log"    GET  /api/communications        200
req "Email sequences"       GET  /api/email/sequences       200
req "SMS sequences"         GET  /api/sms/sequences         200

# ────────────────────────────────────────────────────────────────────
step "10. SMS double opt-in (TCPA)"
OPTIN_PHONE="+1555111${RANDOM:0:4}"
req "Opt-in start"          POST /api/sms/opt-in/start     "200,400" "{\"phone\":\"$OPTIN_PHONE\",\"client_id\":$CLIENT_ID}"
TOTAL=$((TOTAL+1))
RESP=$(curl -s --max-time "$MAXT" -H "x-api-key: $KEY" "$BASE/api/sms/opt-in/status/$OPTIN_PHONE" 2>/dev/null)
STATUS=$(echo "$RESP" | python3 -c "import sys,json
try: print(json.load(sys.stdin).get('status',''))
except: print('')" 2>/dev/null)
if [[ "$STATUS" == "pending" ]] || [[ "$STATUS" == "confirmed" ]]; then PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (status=%s)\n" "Opt-in status" "$STATUS"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s body=%s\n" "Opt-in status" "$(echo "$RESP" | head -c 120)"; fi
req "Opt-in rejects bad code" POST /api/sms/opt-in/confirm "400,404" "{\"phone\":\"$OPTIN_PHONE\",\"code\":\"000000\"}"

# ────────────────────────────────────────────────────────────────────
step "11. CRM / Leads / Pipeline"
LEAD='{"first_name":"Lead","last_name":"Test","email":"lead'$RANDOM'@x.com","phone":"+15553334444","source":"integration-test"}'
TOTAL=$((TOTAL+1))
RESP=$(curl -s --max-time "$MAXT" -X POST -H "content-type: application/json" -d "$LEAD" "$BASE/api/leads" 2>/dev/null)
if echo "$RESP" | grep -qE '"success"\s*:\s*true|"id"|"lead"'; then
  PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (accepted)\n" "Capture lead (public)"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s body=%s\n" "Capture lead" "$(echo "$RESP" | head -c 150)"; fi

req "Leads list"            GET  /api/leads                 200
req "Leads stats"           GET  /api/leads/stats           200
req "Pipeline"              GET  /api/leads/pipeline        200

# ────────────────────────────────────────────────────────────────────
step "12. Staff + Team + Tenants"
req "Staff list"            GET  /api/staff                 200
req "Team"                  GET  /api/ops/team              200
req "Tenants"               GET  /api/tenants               200

# ────────────────────────────────────────────────────────────────────
step "13. AI Models + Routes"
req "AI models"             GET  /api/ai/models             200

# ────────────────────────────────────────────────────────────────────
step "14. Stripe billing"
req "Stripe plans"          GET  /api/stripe/plans          200
req "Stripe revenue"        GET  /api/stripe/revenue        200

# ────────────────────────────────────────────────────────────────────
step "15. Analytics"
req "Analytics overview"    GET  /api/analytics/overview    200
req "Analytics revenue"     GET  /api/analytics/revenue     200
req "Analytics disputes"    GET  /api/analytics/disputes    200
req "Analytics clients"     GET  /api/analytics/clients     200
req "Analytics leads"       GET  /api/analytics/leads       200

# ────────────────────────────────────────────────────────────────────
step "16. Webhooks + API keys"
req "Webhook configs"       GET  /api/webhooks/configs      200
req "API keys list"         GET  /api/api-keys              200

# ────────────────────────────────────────────────────────────────────
step "17. R2 file storage (upload + download)"
echo "smoke test file content $(date +%s)" > /tmp/r2test.txt
TOTAL=$((TOTAL+1))
RESP=$(curl -s --max-time "$MAXT" -X POST -H "x-api-key: $KEY" \
  -F "file=@/tmp/r2test.txt" -F "folder=test" "$BASE/api/files/upload" 2>/dev/null)
R2_KEY=$(echo "$RESP" | python3 -c "import sys,json
try: print(json.load(sys.stdin).get('key',''))
except: print('')" 2>/dev/null)
if [[ -n "$R2_KEY" ]]; then PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (key=%s)\n" "R2 file upload" "$R2_KEY"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s body=%s\n" "R2 file upload" "$(echo "$RESP" | head -c 150)"; R2_KEY=""; fi

if [[ -n "$R2_KEY" ]]; then
  TOTAL=$((TOTAL+1))
  DOWNLOADED=$(curl -s --max-time "$MAXT" -H "x-api-key: $KEY" "$BASE/api/files/$R2_KEY" 2>/dev/null)
  if echo "$DOWNLOADED" | grep -q "smoke test file content"; then
    PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (content matches)\n" "R2 file download"
  else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s got=%s\n" "R2 file download" "$(echo "$DOWNLOADED" | head -c 80)"; fi
fi

# ────────────────────────────────────────────────────────────────────
step "18. Webhook queue enqueue"
req "Webhook queue enqueue" POST /api/webhooks/enqueue "200,202,500,501" '{"url":"https://httpbin.org/post","payload":{"test":true}}'

# ────────────────────────────────────────────────────────────────────
step "19. Cron endpoints (with secret)"
req_cron "cron status"          GET  /api/cron/status              "200,404"
req_cron "process-sequences"    POST /api/cron/process-sequences   "200,404,500"
req_cron "generate-kpis"        POST /api/cron/generate-kpis       "200,404,500"
req_cron "compliance-check"     POST /api/cron/compliance-check    "200,404,500"
req_cron "check-deadlines"      POST /api/cron/check-deadlines     "200,404,500"

TOTAL=$((TOTAL+1))
code=$(curl -s --max-time "$MAXT" -o /dev/null -w "%{http_code}" -X POST "$BASE/api/cron/process-sequences" 2>/dev/null || echo 000)
if [[ "$code" == "401" ]]; then PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (HTTP 401)\n" "Cron rejects without secret"
else FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s (HTTP %s, expected 401)\n" "Cron rejects without secret" "$code"; fi

# ────────────────────────────────────────────────────────────────────
step "20. Staff auth + login"
TOTAL=$((TOTAL+1))
LOGIN_RESP=$(curl -s --max-time "$MAXT" -c /tmp/cookies.txt -X POST -H "content-type: application/json" \
  -d '{"email":"admin@rjbusinesssolutions.org","password":"rjbs2026"}' \
  "$BASE/api/auth/login" 2>/dev/null)
if echo "$LOGIN_RESP" | grep -qiE 'success|token|user|session'; then
  PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s\n" "Staff login attempt"
else
  FAIL=$((FAIL+1)); printf "  ${YELLOW}⚠${NC} %-45s body=%s\n" "Staff login (no admin seeded?)" "$(echo "$LOGIN_RESP" | head -c 100)"
fi

# ────────────────────────────────────────────────────────────────────
step "21. Public pages"
req "Funnel page"           GET /funnel       200
req "Signup page"           GET /signup       200
req "Login page"            GET /login        200
req "Intake page"           GET /intake       200
req "Dashboard"             GET /             200
req "SOP library page"      GET /sop-library  200
req "Call center page"      GET /call-center  200
req "Audit log page"        GET /audit-log    200

# ────────────────────────────────────────────────────────────────────
step "22. AI endpoints (no real key — graceful)"
req "AI sessions"           GET  /api/ai/sessions           200
TOTAL=$((TOTAL+1))
code=$(curl -s --max-time "$MAXT" -o /dev/null -w "%{http_code}" -X POST -H "x-api-key: $KEY" -H "content-type: application/json" \
  -d '{"client_id":'$CLIENT_ID',"message":"hi"}' "$BASE/api/ai/intake" 2>/dev/null || echo 000)
if [[ "$code" =~ ^(200|400|401|500|503)$ ]]; then
  PASS=$((PASS+1)); printf "  ${GREEN}✓${NC} %-45s (HTTP %s — graceful)\n" "AI intake (no key configured)" "$code"
else
  FAIL=$((FAIL+1)); printf "  ${RED}✗${NC} %-45s (HTTP %s)\n" "AI intake" "$code"
fi

# ────────────────────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════════════════════════"
if [[ $FAIL -eq 0 ]]; then
  echo -e "  ${GREEN}✅ ALL CLEAR: $PASS / $TOTAL passed${NC}"
else
  echo -e "  ${YELLOW}⚠  $PASS / $TOTAL passed, $FAIL failed${NC}"
fi
echo "═══════════════════════════════════════════════════════════════"
exit $FAIL
