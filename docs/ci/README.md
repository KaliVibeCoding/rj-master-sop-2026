# GitHub Actions Workflows

These workflow files cannot be created automatically by AI bots (GitHub requires
the `workflows` permission, which most app tokens don't have). To install them:

```bash
mkdir -p .github/workflows
cp docs/ci/ci.yml.example     .github/workflows/ci.yml
cp docs/ci/deploy.yml.example .github/workflows/deploy.yml
git add .github/workflows
git commit -m "ci: add GitHub Actions workflows"
git push
```

## Files

- **`ci.yml.example`** — runs on every push/PR: build, apply local migrations,
  start dev server, run `scripts/smoke-test.sh`.
- **`deploy.yml.example`** — runs on push to `main`: build, apply remote
  D1 migrations, deploy to Cloudflare Pages.

## Required GitHub repository secrets

- `CLOUDFLARE_API_TOKEN` — token with Pages + D1 edit rights
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID
