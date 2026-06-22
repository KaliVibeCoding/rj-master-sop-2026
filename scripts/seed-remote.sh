#!/usr/bin/env bash
# Seed remote D1 with initial data.
set -euo pipefail
DB="rj-sop-operations"
echo "▶ Seeding remote D1..."
npx wrangler d1 execute "$DB" --remote --file seed.sql
echo "✅ Remote seed complete."
