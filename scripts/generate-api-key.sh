#!/usr/bin/env bash
# Generate a new API key, store its hash in D1, and print the raw key (shown once).
# Usage: ./scripts/generate-api-key.sh [name] [local|remote]
set -euo pipefail

NAME="${1:-master-key}"
TARGET="${2:-local}"

API_KEY="rjbs_$(openssl rand -hex 24)"
HASH=$(echo -n "$API_KEY" | sha256sum | cut -d' ' -f1)
PREFIX="${API_KEY:0:12}"

FLAG="--local"
[[ "$TARGET" == "remote" ]] && FLAG="--remote"

npx wrangler d1 execute rj-sop-operations $FLAG --command \
  "INSERT INTO api_keys (name, key_hash, key_prefix, permissions, is_active) VALUES ('$NAME', '$HASH', '$PREFIX', '[\"all\"]', 1);" >/dev/null

echo ""
echo "✅ API key created ($TARGET)"
echo "   Name:   $NAME"
echo "   Prefix: $PREFIX"
echo ""
echo "   RAW KEY (save now — not shown again):"
echo "   $API_KEY"
echo ""
echo "Test: curl -H 'X-API-Key: $API_KEY' \$BASE_URL/api/ops/clients"
