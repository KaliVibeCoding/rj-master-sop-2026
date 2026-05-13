#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# RJ Master SOP 2026 — Endpoint Smoke Test
# Usage: BASE_URL=http://localhost:3000 API_KEY=... ./scripts/smoke-test.sh
# ─────────────────────────────────────────────────────────────────────────────
set -u

BASE="${BASE_URL:-http://localhost:3000}"
KEY="${API_KEY:-}"
PASS=0
FAIL=0
TOTAL=0

GREEN='\033[0;32m'; RED='\033[0;31m'; YELLOW='\033[1;33m'; NC='\033[0m'

check() {
  local name="$1" method="$2" path="$3" expect="${4:-200}" body="${5:-}"
  TOTAL=$((TOTAL+1))
  local hdrs=(-H "accept: application/json")
  [[ -n "$KEY" ]] && hdrs+=(-H "x-api-key: $KEY")
  [[ -n "$body" ]] && hdrs+=(-H "content-type: application/json")
  local code
  if [[ -n "$body" ]]; then
    code=$(curl -s -o /dev/null -w "%{http_code}" -X "$method" "${hdrs[@]}" -d "$body" "$BASE$path" || echo 000)
  else
    code=$(curl -s -o /dev/null -w "%{http_code}" -X "$method" "${hdrs[@]}" "$BASE$path" || echo 000)
  fi
  if [[ "$code" == "$expect" ]] || [[ ",$expect," == *",$code,"* ]]; then
    PASS=$((PASS+1)); printf "${GREEN}✓${NC} %-50s %s (HTTP %s)\n" "$name" "$method $path" "$code"
  else
    FAIL=$((FAIL+1)); printf "${RED}✗${NC} %-50s %s (HTTP %s, expected %s)\n" "$name" "$method $path" "$code" "$expect"
  fi
}

echo "═══ Smoke testing $BASE ═══"

# Health
check "healthz"                GET  /healthz                       200
check "readyz"                 GET  /readyz                        "200,503"

# Public SOP library (no key required)
check "SOP phases"             GET  /api/phases                    200
check "SOP list"               GET  /api/sops                      200
check "SOP detail SOP-601"     GET  /api/sops/SOP-601               200
check "SOP stats"              GET  /api/stats                     200
check "Legal changes 2026"     GET  /api/legal-changes-2026        200
check "Templates list"         GET  /api/templates                 200
check "Agent SOP-105"          GET  /api/agent/SOP-105              200

# Public funnel pages
check "Funnel page"            GET  /funnel                        200
check "Dashboard"              GET  /                              200
check "Login"                  GET  /login                         200
check "Intake page"            GET  /intake                        200
check "Signup page"            GET  /signup                        200
check "Terms"                  GET  /terms                         200
check "Privacy"                GET  /privacy                       200
check "SOP library page"       GET  /sop-library                   200
check "Agents page"            GET  /agents                        200

# API-key protected (should 401 without)
check "Clients list (no key)"  GET  /api/ops/clients               401
check "Disputes list (no key)" GET  /api/ops/disputes              401
check "AI models (no key)"     GET  /api/ai/models                 401

# Public lead capture
check "Speed-to-lead"          POST /api/speed-to-lead             "200,400" '{"client_id":0,"first_name":"Smoke","phone":"+15551234567","email":"smoke@test.com"}'
check "Funnel lead"            POST /api/leads                     "200,400" '{"first_name":"Smoke","email":"smoke@test.com"}'

# Cron endpoints (should 401 without CRON_SECRET)
check "Cron status"            GET  /api/cron/status               "200,401"

# Static
check "Mobile CSS"             GET  /static/mobile.css             200

echo ""
echo "═══ Results: ${GREEN}${PASS} passed${NC} / ${RED}${FAIL} failed${NC} / ${TOTAL} total ═══"
[[ $FAIL -eq 0 ]] && exit 0 || exit 1
