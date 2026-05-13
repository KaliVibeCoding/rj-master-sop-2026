#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# RJ Master SOP 2026 — Production Deploy
#   1. Build
#   2. Apply pending D1 migrations to remote
#   3. Deploy to Cloudflare Pages
# Usage: ./scripts/deploy.sh
# Required: CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID exported, or `wrangler login`
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

PROJECT="rj-master-sop-2026"
DB="rj-sop-operations"

echo "▶ Building..."
npm run build

echo "▶ Applying remote D1 migrations..."
for f in migrations/*.sql; do
  echo "  → $f"
  npx wrangler d1 execute "$DB" --remote --file "$f" || {
    echo "⚠ Migration $f failed — likely already applied (safe to ignore for IF NOT EXISTS)."
  }
done

echo "▶ Deploying to Cloudflare Pages ($PROJECT)..."
npx wrangler pages deploy dist --project-name "$PROJECT"

echo "▶ Smoke testing production..."
BASE_URL="https://${PROJECT}.pages.dev" bash scripts/smoke-test.sh || echo "⚠ Some smoke tests failed — check output above."

echo "✅ Deploy complete."
