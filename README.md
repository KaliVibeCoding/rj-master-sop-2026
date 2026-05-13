# RJ Business Solutions — Master SOP 2026 Operations Engine

![RJ Business Solutions](https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg)

**Built by RJ Business Solutions**
📍 1342 NM 333, Tijeras, New Mexico 87059
🌐 https://rjbusinesssolutions.org
**Build Date:** 2026-05-01

---

## Overview

Full autopilot operations engine for RJ Business Solutions credit repair operations.
62 SOPs across 7 business phases, 3 AI agents, 239+ templates, and 30 tracked
legal changes for 2026 — all accessible via API and the Operations Command Center.

## Production URLs

- **Dashboard**: https://rj-master-sop-2026.pages.dev
- **Funnel**: https://rj-master-sop-2026.pages.dev/funnel
- **API Base**: https://rj-master-sop-2026.pages.dev/api
- **GitHub**: https://github.com/rjbizsolution23-wq/rj-master-sop-2026

## Active Integrations

| Service | Status | Purpose | API Routes |
|---------|--------|---------|------------|
| MFSN (MyFreeScoreNow) | ✅ | 3-bureau credit reports | `/api/mfsn/*` |
| Twilio | ✅ | SMS + Voice calls | `/api/twilio/*` |
| SendGrid | ✅ | Transactional email | `/api/email/sendgrid` |
| Resend | ✅ | Transactional email (backup) | `/api/email/resend` |
| Stripe | ✅ | Payment processing | Coming |
| Cloudflare D1 | ✅ | SQLite database (17 tables) | `/api/ops/*` |
| Speed-to-Lead | ✅ | Auto SMS + Email on new lead | `/api/speed-to-lead` |

## API Endpoints (70+)

### SOP Library
- `GET /api/phases` — 7 business phases
- `GET /api/sops` — All 62 SOPs (filter: ?phase=&category=&search=)
- `GET /api/sops/:id` — Full SOP detail
- `GET /api/stats` — System stats
- `GET /api/legal-changes-2026` — 30 legal changes
- `GET /api/templates` — 239+ templates

### Operations
- `CRUD /api/ops/clients` — Client pipeline
- `CRUD /api/ops/disputes` — Dispute tracker
- `CRUD /api/ops/workflows` — Workflow engine
- `CRUD /api/ops/tasks` — Task queue
- `POST /api/ops/execute-sop` — Execute any SOP as workflow

### MFSN Credit Reports
- `POST /api/mfsn/fetch-3b` — Pull 3-bureau report + store in D1
- `GET /api/mfsn/reports/:clientId` — Client's credit reports
- `GET /api/mfsn/score-history/:clientId` — Score tracking

### Communications
- `POST /api/twilio/sms` — Send SMS
- `POST /api/twilio/call` — Voice call
- `POST /api/email/sendgrid` — SendGrid email
- `POST /api/email/resend` — Resend email
- `POST /api/speed-to-lead` — Auto SMS + Email
- `GET /api/communications` — Communication log

### System
- `GET /api/integrations/status` — All service health

## Database (17 Tables)

clients, client_documents, disputes, workflows, workflow_steps,
tasks, compliance_items, notifications, kpi_snapshots, team_members,
automations, audit_log, transactions,
credit_reports, credit_report_accounts, credit_score_history, communications

## Agent Integration

See `AGENT_INTEGRATION_FORMAT.md` for copy-paste integration formats for:
- Cursor / Windsurf / Claude / GPT system prompts
- API client code examples
- MFSN credit report client
- Quick reference card

See `.cursorrules` for the compact agent rules file.

## Deployment

- **Platform**: Cloudflare Pages
- **Database**: Cloudflare D1 (SQLite) — binding `DB`
- **Storage**: Cloudflare R2 (documents) — binding `DOCS`
- **Cache / Rate Limit**: Cloudflare KV — binding `RATE_LIMIT`
- **Queue**: Cloudflare Queues for webhook retries — binding `WEBHOOK_QUEUE`
- **Runtime**: Hono + Cloudflare Workers
- **Build**: Vite SSR bundle

### Quick commands

```bash
npm run build              # Build production bundle
npm run dev                # Local Vite dev server
npm run migrate:local      # Apply all SQL migrations to local D1
npm run seed:local         # Seed local D1
npm run migrate:remote     # Apply migrations to production D1
npm run seed:remote        # Seed production D1
npm run secrets:push       # Push all .dev.vars to CF Pages secrets
npm run smoke              # Run endpoint smoke tests against $BASE_URL
npm run deploy             # Full pipeline: build → migrate → deploy → smoke
npm run deploy:quick       # Build + deploy only
pm2 start ecosystem.config.cjs   # Local PM2 process
```

### First-time setup

1. `cp .dev.vars.example .dev.vars` and fill in keys.
2. `npm run migrate:local && npm run seed:local`
3. `pm2 start ecosystem.config.cjs` — service runs at http://localhost:3000.
4. `npm run smoke` — verify all endpoints respond.
5. Create production resources in CF dashboard: D1, R2 bucket `rj-sop-documents`,
   KV namespace `RATE_LIMIT`, Queue `rj-sop-webhook-retries` + DLQ `rj-sop-webhook-dlq`.
6. Update `wrangler.jsonc` with real KV namespace IDs (replace `REPLACE_ME` placeholders).
7. `npm run secrets:push` to upload all `.dev.vars` to Pages secrets.
8. `npm run deploy` — runs migrations + deploys + smoke tests.

### Cron triggers (configured in wrangler.jsonc)

| Schedule       | Endpoint                              | Purpose                         |
|----------------|---------------------------------------|---------------------------------|
| 09:00 UTC daily| `/api/cron/process-sequences`         | Email + SMS drip                |
| 10:00 UTC daily| `/api/cron/generate-kpis`             | Daily KPI snapshot              |
| 11:00 UTC m1   | `/api/cron/pull-reports`              | Monthly MFSN report refresh     |
| 12:00 UTC daily| `/api/cron/compliance-check` + deadlines | Compliance + deadline checks |
| Every 30 min   | `/api/cron/run-pending-analyses`      | Process pending AI analyses     |

### Security

- All `/api/*` endpoints (except public funnel, webhooks, SOP library reads) require
  `X-API-Key` header **or** active staff session cookie.
- Per-key rate limit: 600 req/min (KV-backed).
- TOTP 2FA scaffolding on staff login (`/api/auth/2fa/*`).
- SMS double opt-in (TCPA) via `/api/sms/opt-in/*`.
- Cron endpoints require `X-Cron-Secret` matching `CRON_SECRET`.
- Webhook retries with exponential backoff + dead-letter queue.
- Security headers on every response (HSTS, X-Frame-Options, CSP-lite, Referrer-Policy).

## Tech Stack

Hono 4.12+ • TypeScript • Vite 6 • Cloudflare D1 • Cloudflare R2 • Cloudflare KV
Cloudflare Queues • Tailwind CSS • Chart.js • MFSN API v1.0.0
Twilio SMS/Voice • SendGrid • Resend • Stripe • OpenRouter/Groq/OpenAI

---

**RJ Business Solutions** | Zero-defect. Production-only. Ships perfect. 🔥
