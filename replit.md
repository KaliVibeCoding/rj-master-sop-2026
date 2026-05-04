# RJ Business Solutions — Master SOP 2026 Operations Engine

## Overview
A full-stack credit repair business operations platform + complete SaaS infrastructure. Built with Hono (Cloudflare Workers/Pages). Features 62 SOPs, 239+ templates, automated workflows, AI autopilot, Stripe billing, multi-tenant white-label, course/certification engine, CROA/FCRA compliance, affiliate program, client portal, CRM pipeline, email/SMS sequences, scheduling, analytics, staff management, dispute rounds, webhook management, API keys, import/export, GoHighLevel integration, and credit monitoring.

**An AI agent or employee can run the entire company through the API.**

## Architecture
- **Framework**: [Hono](https://hono.dev/) v4 with JSX rendering (SSR)
- **Runtime Target**: Cloudflare Workers / Pages
- **Dev Server**: Vite v6 with `@hono/vite-dev-server` (Cloudflare adapter)
- **Language**: TypeScript
- **Database**: Cloudflare D1 (SQLite-based edge database) — binding name `DB`
- **Styling**: Tailwind CSS (CDN in dev)

## Stats
- **190 route handlers** across 28 feature groups
- **6,238 lines** of TypeScript in `src/index.tsx`
- **33 database tables** across 6 migrations
- **90 environment variables** across 12 categories
- **62 SOPs** across 7 phases
- **239+ templates** in `src/templates.ts`
- **6 email sequences** + **5 SMS sequences** (seeded)
- **4 staff users** (seeded)

## New Features (Migration 0006)
- **Staff Auth** — `/login` page, `POST /api/auth/login` (SHA-256 + D1 sessions, HTTPOnly cookie, 8hr expiry), logout, `/api/auth/me`, `/api/auth/sessions`
- **Client Detail Page** — `GET /clients/:id` — full SSR dashboard with score cards, dispute table, MFSN section, quick-file modal, schedule call, portal generation, edit form, report history, communications log
- **Dispute Letter Printer** — `GET /dispute/letter/:disputeId` — print-ready FCRA dispute letter with bureau addresses, FCRA citations, round-specific escalation language, print button
- **Client Onboarding Wizard** — `GET /onboarding/:clientId` — 6-step guided wizard: client info → CROA disclosure → pull report → dispute plan → email sequences → portal setup
- **Bulk Dispute Filing** — `POST /api/disputes/bulk` — create disputes for multiple accounts/bureaus in one API call
- **Stripe Payment Link** — `POST /api/stripe/payment-link` — generates Stripe Checkout Session URL per client/plan (requires STRIPE_SECRET_KEY)
- **Inbound Twilio Webhook** — `POST /api/twilio/inbound` — handles incoming SMS, logs to communications, creates staff notification, auto-replies for STOP/HELP/STATUS
- **Email Event Tracking** — `POST /api/email/events` — SendGrid/Resend webhook handler for open/click/bounce/deliver events, updates communication status
- **Cron Jobs** — `POST /api/cron/process-sequences` (email+SMS drip), `POST /api/cron/generate-kpis` (daily KPI snapshot), `POST /api/cron/pull-reports` (monthly MFSN refresh), `GET /api/cron/status`
- **Mobile CSS** — `GET /static/mobile.css` — responsive overrides for phones

## Auth Notes
- Login at `/login` — form POST to `POST /api/auth/login`
- Password: env var `ADMIN_PASSWORD` (default: `rjbs2026`)
- Sessions stored in `staff_sessions` D1 table, 8hr expiry, HTTPOnly cookie `rjbs_session`
- All staff must exist in `staff_users` table with `is_active = 1`

## Cron Job Setup
Secure endpoints with `X-Cron-Secret` header matching `CRON_SECRET` env var. Use cron-job.org, Cloudflare Workers Cron, or any HTTP scheduler:
- Daily 9am → `POST /api/cron/process-sequences` + `POST /api/cron/generate-kpis`
- Monthly 1st → `POST /api/cron/pull-reports` (requires MFSN credentials)

## Project Structure
```
src/
  index.tsx      — Main Hono app (4548 lines, 156 route handlers)
  renderer.tsx   — JSX renderer for HTML responses
  templates.ts   — 239+ letter/checklist/contract templates
migrations/
  0001_initial_schema.sql      — 17-table core schema (clients, disputes, workflows, audit_log, etc.)
  0002_mfsn_credit_reports.sql — Credit report tables (credit_reports, credit_report_scores, accounts)
  0003_saas_full_expansion.sql — 11 SaaS tables (tenants, client_subscriptions, stripe_events, ai_jobs,
                                  course_modules, course_enrollments, bureau_responses, compliance_audits,
                                  lead_scores, affiliates, referrals)
  0004_full_platform.sql       — 13 platform tables (portal_tokens, email_sends, email_sequences,
                                  sequence_enrollments, crm_leads, staff_users, dispute_rounds,
                                  sms_sequences, sms_enrollments, appointments, webhook_configs,
                                  api_keys, score_alerts, ghl_sync_log)
  0005_mfsn_full.sql           — 3 MFSN analysis tables (mfsn_tokens, credit_report_inquiries,
                                  credit_report_public_records)
public/
  static/style.css  — Global styles
wrangler.jsonc   — Cloudflare Pages + D1 config
vite.config.ts   — Vite config (port 5000, allowedHosts true, hmr false)
```

## Development
- **Start**: `npm run dev` (port 5000)
- **Build**: `npm run build`
- **Migrate local**: `npx wrangler d1 execute DB --local --file migrations/000X_name.sql`
- **Migrate remote**: `npx wrangler d1 execute DB --remote --file migrations/000X_name.sql`
- **Deploy**: `npm run deploy`

## Key Clients Table Schema
```
id, first_name, last_name, email, phone, status, credit_score_start, credit_score_current,
credit_score_goal, source, assigned_agent, onboarding_date, graduation_date, monthly_fee,
total_paid, notes, risk_score, last_contact_date, next_contact_date, created_at, updated_at
```

## Key Disputes Table Schema
```
id, client_id, bureau, account_name, account_number, dispute_reason, dispute_round,
status, fcra_section, letter_template, sent_date, response_due_date, response_date,
result, tracking_number, notes, created_at, updated_at
```

## Complete API Reference — 156 Route Handlers

### Dashboard & Core (7)
- `GET /` — Operations dashboard (SSR HTML, 10 tabs)
- `GET /api/phases` — 7 business phases
- `GET /api/sops` — All 62 SOPs
- `GET /api/sops/:id` — SOP detail
- `GET /api/legal-changes-2026` — Compliance tracker
- `GET /api/agent/:sopId` — AI agent instructions
- `GET /api/stats` — SOP statistics

### Templates (2)
- `GET /api/templates/:name` — Template content
- `GET /api/templates` — All template names

### Operations — Clients (4)
- `GET /api/ops/clients` — List clients with filters
- `GET /api/ops/clients/:id` — Client detail
- `POST /api/ops/clients` — Create client
- `PUT /api/ops/clients/:id` — Update client

### Operations — Disputes (3)
- `GET /api/ops/disputes` — List disputes
- `POST /api/ops/disputes` — Create dispute
- `PUT /api/ops/disputes/:id` — Update dispute

### Operations — Workflows & Tasks (6)
- `GET /api/ops/workflows` — List workflows
- `GET /api/ops/workflows/:id` — Workflow detail
- `POST /api/ops/workflows` — Create workflow
- `POST /api/ops/workflows/:id/advance` — Advance step
- `GET /api/ops/tasks` — List tasks
- `POST /api/ops/tasks` — Create task
- `PUT /api/ops/tasks/:id` — Update task

### Operations — Team & KPIs (4)
- `GET /api/ops/team` — Team list
- `GET /api/ops/kpis` — KPI metrics
- `GET /api/ops/dashboard` — Full dashboard data
- `GET /api/ops/audit` — Audit log

### Operations — Automations (5)
- `GET /api/ops/automations` — List automations
- `PUT /api/ops/automations/:id/toggle` — Toggle on/off
- `POST /api/ops/run-automations` — Run all active
- `POST /api/ops/run-compliance-check` — Compliance flags
- `POST /api/ops/generate-kpi-snapshot` — Generate KPIs

### Operations — Other (4)
- `GET /api/ops/compliance` — Compliance items
- `POST /api/ops/compliance` — Create compliance item
- `GET /api/ops/notifications` — Notifications
- `POST /api/ops/notifications` — Create notification
- `PUT /api/ops/notifications/:id/read` — Mark read
- `GET /api/ops/transactions` — Transaction log
- `POST /api/ops/auto-assign` — Auto-assign clients to staff
- `POST /api/ops/execute-sop` — Execute SOP as workflow

### CRM / Leads Pipeline (7)
- `POST /api/leads` — Funnel lead capture (speed-to-lead)
- `GET /api/leads` — List all CRM leads with filters
- `GET /api/leads/stats` — Lead stats
- `GET /api/leads/pipeline` — Kanban pipeline view (7 stages)
- `PUT /api/leads/:id` — Update lead / move stage
- `DELETE /api/leads/:id` — Delete lead
- `POST /api/leads/:id/convert` — Convert lead → client

### Client Portal (3)
- `GET /portal/:token` — **SSR client portal page** (scores, disputes, rounds, plan)
- `POST /api/portal/generate` — Generate portal token for client
- `GET /api/portal/data/:token` — Portal JSON data

### MFSN Credit Reports + Full Analysis (27)
**Core Pull**
- `POST /api/mfsn/login` — MFSN auth
- `POST /api/mfsn/fetch-3b` — Pull 3-bureau report → store in D1 (accounts, inquiries, public records all parsed)
- `GET /api/mfsn/reports/:clientId` — Report history
- `GET /api/mfsn/score-history/:clientId` — Score tracking
- `GET /api/mfsn/reports/:reportId/accounts` — All tradelines for a report
- `GET /api/mfsn/docs` — API docs
- `GET /api/mfsn/content` — Integration notes
- `GET /api/mfsn/schemas` — 42 OpenAPI schemas
- `GET /api/mfsn/html-files` — 106 HTML doc files
- `GET /api/mfsn/endpoints` — Endpoint definitions

**Token Management**
- `POST /api/mfsn/tokens` — Save MFSN member token for a client (enables auto-refresh)
- `GET /api/mfsn/tokens/:clientId` — Get stored token status

**Report Analysis**
- `GET /api/mfsn/reports/:reportId/full` — Full parsed report (scores + accounts + inquiries + public records + score factors)
- `GET /api/mfsn/reports/:reportId/negatives` — Negative accounts prioritized for dispute (with severity + score impact estimate)
- `GET /api/mfsn/reports/:reportId/inquiries` — Hard inquiries with age annotation
- `GET /api/mfsn/reports/:reportId/public-records` — Bankruptcies, liens, judgments with dispute approach
- `GET /api/mfsn/reports/:reportId/score-factors` — Score factor codes by bureau
- `POST /api/mfsn/reports/:reportId/auto-dispute` — Auto-create dispute records for all negative accounts
- `GET /api/mfsn/compare?report1_id=&report2_id=` — Compare two reports side-by-side (score diff, negative diff)

**Client Intelligence**
- `GET /api/mfsn/clients/:clientId/latest` — Latest report summary + score progress
- `GET /api/mfsn/clients/:clientId/score-trend` — Score history chart data (labels, EFX/TU/EXP arrays)
- `GET /api/mfsn/clients/:clientId/dispute-candidates` — Undisputed negatives from latest report, prioritized
- `GET /api/mfsn/clients/:clientId/summary` — Full credit profile (scores, reports, disputes, MFSN status)
- `GET /api/mfsn/clients/:clientId/all-accounts` — All accounts across all reports, deduplicated
- `POST /api/mfsn/clients/:clientId/refresh` — Re-pull 3B using stored token, update D1 + score history

**Member Enrollment**
- `POST /api/mfsn/enroll` — Enroll new MFSN member (pass-through to MFSN API, stores token on success)

**HTML Report Viewer**
- `GET /mfsn/report/:reportId` — Full 3-bureau report rendered as a styled HTML page (scores, accounts, inquiries, public records, score factors, print/PDF ready)

### Email Engine (5)
- `POST /api/email/sendgrid` — Send via SendGrid
- `POST /api/email/resend` — Send via Resend
- `GET /api/email/sequences` — List drip sequences (6 seeded)
- `POST /api/email/sequences` — Create sequence
- `POST /api/email/sequences/enroll` — Enroll client in sequence
- `POST /api/email/sequences/process` — Process pending sends
- `GET /api/email/history/:clientId` — Send history

### SMS Sequences (4)
- `GET /api/sms/sequences` — List sequences (5 seeded)
- `POST /api/sms/sequences` — Create sequence
- `POST /api/sms/sequences/enroll` — Enroll client
- `POST /api/sms/sequences/process` — Process pending (queue for Twilio)

### Twilio (3)
- `POST /api/twilio/sms` — Send SMS
- `POST /api/twilio/call` — Voice call
- `GET /api/communications` — Communication history

### Scheduling / Appointments (4)
- `GET /api/appointments` — List appointments (filter: status, upcoming)
- `POST /api/appointments` — Book appointment
- `PUT /api/appointments/:id` — Update appointment
- `POST /api/appointments/send-reminders` — Send 24hr reminders via SMS

### Analytics & Reporting (5)
- `GET /api/analytics/overview` — Master KPI snapshot
- `GET /api/analytics/revenue` — MRR/ARR trends, churn
- `GET /api/analytics/disputes` — Success rates by bureau + round
- `GET /api/analytics/clients` — Score gains, graduation rate
- `GET /api/analytics/leads` — Conversion funnel by source

### Staff Management (4)
- `GET /api/staff` — List staff with client/task counts
- `POST /api/staff` — Create staff (roles: admin/manager/agent/viewer)
- `PUT /api/staff/:id` — Update role/permissions
- `GET /api/staff/:id/workload` — Assigned clients, tasks, leads

### Dispute Rounds (5)
- `GET /api/disputes/rounds/:clientId` — Round history with summary
- `POST /api/disputes/rounds` — File a round (R1/R2/R3/R4/R5)
- `POST /api/disputes/rounds/auto-generate` — Auto-create next round per bureau
- `PUT /api/disputes/rounds/:id` — Update status/outcome/tracking
- `GET /api/disputes/round-stats` — Stats by round + overdue list

### Webhook Management (5)
- `GET /api/webhooks/configs` — List configs + available events
- `POST /api/webhooks/configs` — Create outbound webhook
- `DELETE /api/webhooks/configs/:id` — Delete config
- `POST /api/webhooks/test/:id` — Test fire with sample payload
- `POST /api/webhooks/trigger` — Internal trigger (fires matching configs)

**Events**: `client.created`, `client.graduated`, `dispute.filed`, `dispute.response`, `payment.received`, `payment.failed`, `lead.created`, `lead.converted`, `round.filed`, `score.updated`, `appointment.scheduled`

### API Key Management (3)
- `GET /api/api-keys` — List keys (filter by tenant)
- `POST /api/api-keys` — Generate key (SHA-256 hashed, prefixed `rjbs_`)
- `DELETE /api/api-keys/:id` — Revoke key

### Import / Export (4)
- `POST /api/import/clients` — CSV import (header row + data)
- `GET /api/export/clients` — Export clients CSV (14 columns)
- `GET /api/export/disputes` — Export disputes CSV (14 columns)
- `GET /api/export/report` — Business intelligence JSON report

### Stripe Billing (8)
- `GET /api/stripe/plans` — 4 tiers: basic $99, standard $179, premium $299, autopilot $499
- `POST /api/stripe/create-customer` — Create Stripe customer
- `POST /api/stripe/create-subscription` — Subscribe client
- `POST /api/stripe/cancel-subscription` — Cancel
- `GET /api/stripe/subscription/:clientId` — Status
- `POST /api/stripe/webhook` — Webhook handler (payment_failed → SMS)
- `POST /api/stripe/billing-portal` — Self-service portal session
- `GET /api/stripe/revenue` — MRR/ARR by plan

### AI Autopilot (7)
- `GET /api/ai/models` — Routing: OpenRouter → Groq → OpenAI
- `POST /api/ai/generate-dispute-letter` — AI FCRA dispute letter
- `POST /api/ai/analyze-credit-report` — Dispute plan from accounts
- `POST /api/ai/run-autopilot` — Full autopilot run
- `POST /api/ai/draft-email` — AI email drafts (6 types)
- `POST /api/ai/score-lead` — Lead scoring (grade A–F, LTV, plan)
- `GET /api/ai/jobs/:clientId` — Job history + cost tracking

### Multi-Tenant / White-Label SaaS (5)
- `GET /api/tenants` — List tenants with stats
- `POST /api/tenants` — Create white-label tenant (14-day trial)
- `GET /api/tenants/:id` — Tenant detail
- `PUT /api/tenants/:id` — Update branding/settings
- `GET /api/tenants/:id/stats` — Per-tenant MRR, AI spend

### Course / Certification Engine (5)
- `GET /api/course/modules` — 10 SOP modules + CCRS exam
- `POST /api/course/enroll` — Enroll client
- `GET /api/course/progress/:clientId` — Progress %
- `PUT /api/course/complete/:enrollmentId` — Mark complete with score
- `GET /api/course/certificate/:clientId` — CCRS certificate data

### CROA / FCRA Compliance Engine (6)
- `GET /api/compliance/croa-rules` — 12 rules (7 CROA, 4 FCRA, 1 FDCPA)
- `POST /api/compliance/croa-check` — Real-time compliance check
- `GET /api/compliance/fcra-rights` — Required consumer disclosure
- `POST /api/compliance/bureau-response` — Log response → suggest next SOP
- `GET /api/compliance/bureau-responses/:clientId` — Response history
- `GET /api/compliance/audit/:clientId` — Full audit trail

### Affiliate Program (4)
- `POST /api/affiliates` — Create affiliate with referral code
- `GET /api/affiliates` — List all affiliates
- `POST /api/affiliates/track` — Track referral click
- `GET /api/affiliates/:id/stats` — Referral history + payout

### Credit Monitoring (4)
- `POST /api/monitoring/check/:clientId` — Run score check → generate alerts
- `GET /api/monitoring/alerts` — All alerts (filter: unactioned=1)
- `GET /api/monitoring/alerts/:clientId` — Client alerts + summary
- `PUT /api/monitoring/alerts/:id/action` — Mark actioned

### GoHighLevel Integration (3)
- `GET /api/ghl/status` — Connection status + setup instructions
- `POST /api/ghl/sync-contact` — Sync client to GHL (requires GHL_API_KEY)
- `POST /api/ghl/webhook` — Receive GHL lead webhooks → create crm_lead

### Speed-to-Lead (1)
- `POST /api/speed-to-lead` — Emergency lead capture with 5-min callback task

### Config & Status (7)
- `GET /api/integrations/status` — Basic 6-service health check
- `GET /api/integrations/full-status` — Full 16-category status
- `GET /api/config/variables-version` — All 90 env vars with set/preview
- `GET /api/cloudflare/config` — Full Cloudflare platform config
- `GET /api/cloudflare/services` — All 12 services with doc URLs
- `GET /api/cloudflare/email` — Email routing + automations
- `GET /api/cloudflare/twilio` — Twilio config + SOP mappings

### Marketing Funnel (1)
- `GET /funnel` — Lead capture landing page (SSR HTML)

## Monetization Tiers Built
| Tier | Price | Route |
|---|---|---|
| Basic Credit Repair | $99/mo | /api/stripe/plans |
| Standard Credit Repair | $179/mo | /api/stripe/plans |
| Premium + AI Letters | $299/mo | /api/stripe/plans |
| AI Autopilot | $499/mo | /api/stripe/plans |
| White-Label Starter | $497/mo | /api/tenants |
| White-Label Professional | $997/mo | /api/tenants |
| White-Label Enterprise | $2,970/mo | /api/tenants |
| Course Individual Module | $997 | /api/course/modules |
| Course Full Bundle + CCRS | $2,997 | /api/course/modules |
| Affiliate Commission | 20–25% | /api/affiliates |

## Environment Variables Required
Set in `.dev.vars` locally, Cloudflare dashboard for production:

| Service | Key Variables |
|---|---|
| Stripe (billing) | STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET |
| AI Autopilot | OPENROUTER_API_KEY (preferred), GROQ_API_KEY, OPENAI_API_KEY |
| Twilio (SMS/Voice) | TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER |
| MFSN (credit pulls) | MFSN_API_EMAIL, MFSN_API_PASSWORD, MFSN_API_URL |
| Email | SENDGRID_API_KEY or RESEND_API_KEY |
| GoHighLevel | GHL_API_KEY, GHL_LOCATION_ID |

## Production Deployment Checklist
1. Run all 4 migrations against remote D1: `npx wrangler d1 execute DB --remote --file migrations/000X.sql`
2. Set all required secrets in Cloudflare dashboard
3. Configure Stripe webhook pointing to `https://yourdomain.com/api/stripe/webhook`
4. Deploy: `npm run deploy`

## Notes
- Without D1 connected, dashboard shows "SOP Library only" — expected in local dev
- AI endpoints return error without at least one AI key set
- The CROA compliance check runs in real-time on any action string
- Dispute rounds support R1–R5 per bureau with letter type escalation
- Client portal is accessible at `/portal/:token` — tokens expire (default 365 days)
- CSV import accepts header row with: first_name, last_name, email, phone, monthly_fee
- All webhooks require HTTPS URLs
- API keys are SHA-256 hashed — shown only once at creation
