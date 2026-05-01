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
- **Database**: Cloudflare D1 (SQLite)
- **Runtime**: Hono + Cloudflare Workers
- **Build**: Vite SSR bundle

```bash
npm run build                    # Build
pm2 start ecosystem.config.cjs  # Local dev
wrangler pages deploy dist       # Production deploy
```

## Tech Stack

Hono 4.12+ • TypeScript • Vite 6 • Cloudflare D1 • Tailwind CSS • Chart.js
MFSN API v1.0.0 • Twilio SMS/Voice • SendGrid • Resend • Stripe

---

**RJ Business Solutions** | Zero-defect. Production-only. Ships perfect. 🔥
