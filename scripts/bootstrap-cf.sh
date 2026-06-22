#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# RJ Master SOP 2026 — Cloudflare resource bootstrap
# Creates R2 bucket, KV namespace, Queue + DLQ, and patches wrangler.jsonc.
# Run AFTER `wrangler login` or with CLOUDFLARE_API_TOKEN/ACCOUNT_ID exported.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

R2_BUCKET="rj-sop-documents"
R2_PREVIEW="rj-sop-documents-preview"
KV_TITLE="rj-sop-rate-limit"
QUEUE="rj-sop-webhook-retries"
DLQ="rj-sop-webhook-dlq"

echo "▶ Verifying Cloudflare auth..."
npx wrangler whoami | tail -3

# R2 buckets
echo "▶ Creating R2 buckets..."
npx wrangler r2 bucket create "$R2_BUCKET" 2>&1 | tail -3 || echo "  (exists)"
npx wrangler r2 bucket create "$R2_PREVIEW" 2>&1 | tail -3 || echo "  (exists)"

# KV namespaces
echo "▶ Creating KV namespaces..."
KV_OUT=$(npx wrangler kv namespace create "$KV_TITLE" 2>&1 || true)
echo "$KV_OUT" | tail -5
KV_ID=$(echo "$KV_OUT" | grep -oE 'id = "[^"]+"' | head -1 | cut -d'"' -f2 || true)

KV_PREVIEW_OUT=$(npx wrangler kv namespace create "$KV_TITLE" --preview 2>&1 || true)
echo "$KV_PREVIEW_OUT" | tail -5
KV_PREVIEW_ID=$(echo "$KV_PREVIEW_OUT" | grep -oE 'preview_id = "[^"]+"' | head -1 | cut -d'"' -f2 || true)
[[ -z "$KV_PREVIEW_ID" ]] && KV_PREVIEW_ID=$(echo "$KV_PREVIEW_OUT" | grep -oE 'id = "[^"]+"' | head -1 | cut -d'"' -f2 || true)

# Queues
echo "▶ Creating Queues..."
npx wrangler queues create "$QUEUE" 2>&1 | tail -3 || echo "  (exists)"
npx wrangler queues create "$DLQ" 2>&1 | tail -3 || echo "  (exists)"

# Patch wrangler.jsonc with real KV IDs (if discovered)
if [[ -n "$KV_ID" ]]; then
  echo "▶ Patching wrangler.jsonc with KV id $KV_ID..."
  sed -i.bak "s/RATE_LIMIT_KV_ID_REPLACE_ME/$KV_ID/" wrangler.jsonc
fi
if [[ -n "$KV_PREVIEW_ID" ]]; then
  echo "▶ Patching wrangler.jsonc with KV preview id $KV_PREVIEW_ID..."
  sed -i.bak "s/RATE_LIMIT_KV_PREVIEW_ID_REPLACE_ME/$KV_PREVIEW_ID/" wrangler.jsonc
fi
rm -f wrangler.jsonc.bak

echo ""
echo "✅ Cloudflare resources bootstrapped."
echo ""
echo "Next:"
echo "  npm run secrets:push   # upload .dev.vars secrets to CF Pages"
echo "  npm run deploy         # build + migrate remote D1 + deploy"
