#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Bulk-set Cloudflare Pages secrets from .dev.vars
# Skips empty values. Run: ./scripts/set-secrets.sh
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

PROJECT="rj-master-sop-2026"
ENV_FILE="${1:-.dev.vars}"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ $ENV_FILE not found. Copy .dev.vars.example to .dev.vars and fill in values."
  exit 1
fi

echo "▶ Pushing secrets from $ENV_FILE → Cloudflare Pages project '$PROJECT'..."

while IFS='=' read -r key value; do
  # Skip comments and blank lines
  [[ "$key" =~ ^[[:space:]]*# ]] && continue
  [[ -z "${key// }" ]] && continue
  [[ -z "${value// }" ]] && { echo "  skip $key (empty)"; continue; }
  # Trim surrounding quotes/whitespace
  value="${value%\"}"; value="${value#\"}"
  value="${value%\'}"; value="${value#\'}"
  echo "  → $key"
  echo -n "$value" | npx wrangler pages secret put "$key" --project-name "$PROJECT" >/dev/null
done < "$ENV_FILE"

echo "✅ Secrets pushed."
