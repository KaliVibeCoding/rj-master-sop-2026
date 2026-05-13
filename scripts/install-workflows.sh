#!/usr/bin/env bash
# Install GitHub Actions workflows from docs/ci/ templates.
# Bot tokens can't push workflow files — run this locally to install them.
set -euo pipefail

mkdir -p .github/workflows
cp docs/ci/ci.yml.example     .github/workflows/ci.yml
cp docs/ci/deploy.yml.example .github/workflows/deploy.yml

echo "✅ Workflows installed."
echo ""
echo "Next:"
echo "  git add .github/workflows"
echo "  git commit -m 'ci: add GitHub Actions workflows'"
echo "  git push"
echo ""
echo "Don't forget to add these secrets in GitHub repo settings:"
echo "  CLOUDFLARE_API_TOKEN"
echo "  CLOUDFLARE_ACCOUNT_ID"
