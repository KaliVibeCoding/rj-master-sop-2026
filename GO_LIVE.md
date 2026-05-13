# Go-Live Runbook — RJ Master SOP 2026

This is the single document you follow to take the app from "code in repo" to "running in production at rj-master-sop-2026.pages.dev".

## Prerequisites (one-time, on your local machine)

1. **Node 20+** and **npm** installed
2. **Cloudflare account** with Pages, D1, R2, KV, Queues enabled
3. **wrangler logged in**: `npx wrangler login`
4. **Repo cloned**: `git clone https://github.com/KaliVibeCoding/rj-master-sop-2026 && cd rj-master-sop-2026`
5. **Dependencies**: `npm ci`

## Local development (verify it works on your machine first)

```bash
cp .dev.vars.example .dev.vars     # then edit to fill in real keys
npm run migrate:local              # apply all 10 D1 migrations
npm run seed:local                 # load seed data
./scripts/generate-api-key.sh dev-key local   # creates an API key, prints it once
npm run build
pm2 start ecosystem.config.cjs     # service on http://localhost:3000
npm run smoke                      # 25/25 should pass
```

Test a protected endpoint:
```bash
curl -H "X-API-Key: <your-key>" http://localhost:3000/api/ops/clients
```

## Production deploy (one command after first-time setup)

### First time only

```bash
# 1. Create CF resources (R2 bucket, KV namespace, Queues) and patch wrangler.jsonc
./scripts/bootstrap-cf.sh

# 2. Push your filled-in secrets to Cloudflare Pages
./scripts/secrets:push        # or: bash scripts/set-secrets.sh

# 3. Create the Pages project (one-time)
npx wrangler pages project create rj-master-sop-2026 --production-branch=main

# 4. Generate a production API key
./scripts/generate-api-key.sh prod-master-key remote
```

### Every deploy after that

```bash
npm run deploy
```

This script:
1. Builds the worker bundle
2. Applies all `migrations/*.sql` to remote D1
3. Deploys `dist/` to Cloudflare Pages
4. Runs smoke tests against the live URL

### Install GitHub Actions (one-time, locally — bots can't push these)

```bash
./scripts/install-workflows.sh
git add .github/workflows
git commit -m "ci: add GitHub Actions workflows"
git push
```

Then in **GitHub → Settings → Secrets and variables → Actions**, add:
- `CLOUDFLARE_API_TOKEN` — token with **Pages: Edit** + **D1: Edit** + **R2: Edit** + **KV: Edit** + **Queues: Edit** rights
- `CLOUDFLARE_ACCOUNT_ID` — found in CF dashboard URL or sidebar

After that, every push to `main` auto-deploys; every PR runs the smoke tests.

## Verifying production

```bash
BASE_URL=https://rj-master-sop-2026.pages.dev API_KEY=<your-prod-key> npm run smoke
curl https://rj-master-sop-2026.pages.dev/healthz
curl https://rj-master-sop-2026.pages.dev/readyz
```

## Webhook endpoints to register externally

After deploy, register these in each provider's dashboard:

| Provider     | Webhook URL                                                       |
|--------------|-------------------------------------------------------------------|
| Stripe       | `https://rj-master-sop-2026.pages.dev/api/stripe/webhook`         |
| Twilio SMS   | `https://rj-master-sop-2026.pages.dev/api/twilio/inbound`         |
| Twilio Voice | `https://rj-master-sop-2026.pages.dev/api/twilio/voice`           |
| SendGrid     | `https://rj-master-sop-2026.pages.dev/api/email/events`           |
| Resend       | `https://rj-master-sop-2026.pages.dev/api/email/events`           |
| GoHighLevel  | `https://rj-master-sop-2026.pages.dev/api/ghl/webhook`            |

## Domain authentication checklist

- **SendGrid / Resend**: SPF + DKIM + DMARC records for your sending domain
- **Twilio**: A2P 10DLC brand + campaign registration for US SMS at scale
- **Stripe**: register webhook URL above and copy the signing secret into `STRIPE_WEBHOOK_SECRET`
- **Domain**: optional — point `rjbusinesssolutions.org` CNAME to Pages or use custom domain in CF dashboard

## Cron triggers (already configured in wrangler.jsonc)

| Schedule         | Endpoint                                |
|------------------|-----------------------------------------|
| Daily 09:00 UTC  | `/api/cron/process-sequences`           |
| Daily 10:00 UTC  | `/api/cron/generate-kpis`               |
| Monthly 1st 11   | `/api/cron/pull-reports`                |
| Daily 12:00 UTC  | `/api/cron/compliance-check` + deadlines|
| Every 30 min     | `/api/cron/run-pending-analyses`        |

These fire automatically once deployed — no external scheduler needed.

## Troubleshooting

- **`401 Invalid API key`** on protected endpoints → generate a new key with `./scripts/generate-api-key.sh`
- **`503 DB not bound`** → run `npm run migrate:remote`
- **Bundle size warning** (`dist/_worker.js` close to 1 MB) → consider Workers Paid plan ($5/mo, 10 MB limit) or code-split before adding new features
- **Cron not firing** → verify `triggers.crons` is in `wrangler.jsonc` AND that you're on Workers Paid (free tier doesn't run scheduled events)
- **R2/KV/Queue binding errors** → run `./scripts/bootstrap-cf.sh` to create them

## Support

- Repo: https://github.com/KaliVibeCoding/rj-master-sop-2026
- Production: https://rj-master-sop-2026.pages.dev (after first deploy)
- Health: `/healthz` + `/readyz`
