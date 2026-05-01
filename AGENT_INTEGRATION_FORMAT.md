# RJ BUSINESS SOLUTIONS — AGENT INTEGRATION FORMAT
# Feed This to ANY AI Agent / Cursor / Windsurf / Claude / GPT
# So Every Build Ships with SOP System + Full Integration Support
# Updated: 2026-05-01
# ═══════════════════════════════════════════════════════════════

## HOW TO USE THIS DOCUMENT

Copy-paste the relevant section into your AI agent's system prompt,
custom instructions, or project rules file (.cursorrules, .windsurfrules, etc.)

There are 4 formats depending on your use case:

1. **FULL SYSTEM PROMPT INJECTION** — For agents building RJ Business Solutions projects
2. **API INTEGRATION BLOCK** — For agents that need to call the SOP API
3. **MFSN CREDIT REPORT CLIENT** — For agents pulling 3-bureau credit reports
4. **QUICK REFERENCE CARD** — For context windows with limited space

---

## FORMAT 1: FULL SYSTEM PROMPT INJECTION

```
# ═══════════════════════════════════════════════════════════════
# RJ BUSINESS SOLUTIONS — MASTER SOP 2026 + INTEGRATIONS
# Production: https://rj-master-sop-2026.pages.dev
# GitHub: https://github.com/rjbizsolution23-wq/rj-master-sop-2026
# Updated: 2026-05-01
# ═══════════════════════════════════════════════════════════════

## SYSTEM OVERVIEW

62-SOP autopilot system • 7 phases • 3 AI agents • 239+ templates
30 tracked legal changes for 2026 • D1 SQLite database • Hono backend

## ACTIVE INTEGRATIONS

| Service           | Status | Purpose                          |
|-------------------|--------|----------------------------------|
| MFSN              | ✅     | 3-bureau credit report pulling   |
| Twilio            | ✅     | SMS + Voice calls                |
| SendGrid          | ✅     | Transactional email              |
| Resend            | ✅     | Transactional email (backup)     |
| Stripe            | ✅     | Payment processing               |
| Cloudflare D1     | ✅     | Database (13+ tables)            |
| Cloudflare Pages  | ✅     | Edge deployment                  |

## API ENDPOINTS (70+)

Base URL: https://rj-master-sop-2026.pages.dev

### SOP Library
GET /api/phases              → 7 business phases
GET /api/sops                → All 62 SOPs (filter: ?phase=&category=&search=)
GET /api/sops/:id            → Full SOP detail
GET /api/stats               → System statistics
GET /api/legal-changes-2026  → 30 legal changes
GET /api/agent/:sopId        → Agent instructions for SOP
GET /api/templates           → 239+ templates
GET /api/templates/:name     → Single template content

### Operations (D1 Database)
GET/POST/PUT /api/ops/clients       → Client CRUD
GET/POST/PUT /api/ops/disputes      → Dispute CRUD
GET/POST     /api/ops/workflows     → Workflow management
GET/POST/PUT /api/ops/tasks         → Task management
GET/POST     /api/ops/compliance    → Compliance tracking
GET/PUT      /api/ops/notifications → Notification management
GET          /api/ops/team          → Team & AI agents
GET          /api/ops/kpis          → KPI snapshots
GET          /api/ops/dashboard     → Full dashboard data
POST         /api/ops/execute-sop   → Execute SOP as workflow
POST         /api/ops/run-automations → Trigger all active automations
GET          /api/ops/audit         → Audit log
GET          /api/ops/transactions  → Financial transactions

### Lead Capture
POST /api/leads              → Capture new lead (→ task + notification)
GET  /api/leads/stats        → Lead statistics

### MFSN Credit Reports
POST /api/mfsn/login                  → Authenticate with MFSN API
POST /api/mfsn/fetch-3b               → Pull 3B report + store in D1
  Body: { client_email, client_token, client_id? }
GET  /api/mfsn/reports/:clientId      → Client credit reports
GET  /api/mfsn/score-history/:clientId → Score history over time
GET  /api/mfsn/reports/:id/accounts   → Accounts from specific report

### Twilio (SMS + Voice)
POST /api/twilio/sms         → Send SMS
  Body: { to, message, client_id?, template_name?, sop_id? }
POST /api/twilio/call        → Initiate voice call
  Body: { to, twiml?, client_id?, sop_id? }

### Email (SendGrid + Resend)
POST /api/email/sendgrid     → Send via SendGrid
POST /api/email/resend       → Send via Resend
  Body: { to, subject, html_body?, text_body?, client_id?, template_name?, sop_id? }

### Speed-to-Lead
POST /api/speed-to-lead      → Auto SMS + Email on new lead
  Body: { client_id, first_name, phone, email }

### Communications
GET  /api/communications     → Communication log (filter: ?client_id=&channel=)

### System Health
GET  /api/integrations/status → All service config status

## D1 DATABASE (13+ Tables)

clients, client_documents, disputes, workflows, workflow_steps,
tasks, compliance_items, notifications, kpi_snapshots, team_members,
automations, audit_log, transactions,
credit_reports, credit_report_accounts, credit_score_history, communications

## THE 7 PHASES

Phase 1: ⚖️  Legal & Regulatory Foundations (10 SOPs)
Phase 2: 💰 Financial Systems & Tax Strategy (3 SOPs)
Phase 3: 📈 Strategic Planning & Growth (2 SOPs)
Phase 4: 👥 Human Capital & Org Development (7 SOPs)
Phase 5: ⚙️  Operations & Tech Stack (18 SOPs) ← CORE
Phase 6: 📢 Marketing & Sales (16 SOPs)
Phase 7: 🏆 Client Retention & Growth (6 SOPs)

## 3 AI AGENTS

Alpha → dispute_coordinator → Dispute Filing & Bureau Response (100 cap)
Beta  → csm → Client Communication & Retention (100 cap)
Gamma → admin → Compliance & Scheduling (100 cap)

## CRITICAL COMPLIANCE (2026)

SOP-601: FCRA — medical debt STILL reportable (CFPB rule vacated)
SOP-602: CROA — never collect before services, 3-day cancellation right
SOP-205: CROA billing — post-service only, milestone-based
```

---

## FORMAT 2: MFSN CREDIT REPORT API CLIENT

```typescript
// MFSN (MyFreeScoreNow) — 3-Bureau Credit Report Integration
// API Spec: MFSN-REPORTS v1.0.0 (OpenAPI 3.0.3)
// Base: https://api.myfreescorenow.com
// Docs: https://myfreescorenow.portal.swaggerhub.com/reporting/docs/mfsn-reports-v-1-0-0

// STEP 1: Login
const loginRes = await fetch('https://api.myfreescorenow.com/api/auth/login', {
  method: 'POST',
  body: new FormData().append('email', MFSN_EMAIL).append('password', MFSN_PASSWORD)
});
// Returns: { success: true, message: '...', data: { token, user } }

// STEP 2: Fetch 3B Report
const reportRes = await fetch('https://api.myfreescorenow.com/api/auth/fetch-3B-json', {
  method: 'POST',
  body: new FormData().append('email', clientEmail).append('client_token', clientToken)
});
// Returns: { success, message, data: { providerViews: [...] } }

// OR use our server-side proxy (recommended — keeps tokens secure):
const res = await fetch('/api/mfsn/fetch-3b', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ client_email: 'user@example.com', client_token: 'MAPIK#...', client_id: 1 })
});

// Key MFSN Data Models:
// CreditReportSummary → per bureau: scores, accounts, inquiries, public records
// CreditReportAccount → account details: status, balances, payment history
// CreditScore → score value, reasons (code + description + HELPING|HURTING)
// PersonSubject → name, address, DOB, phone, employers
// PublicRecords → bankruptcies, liens, judgments, consumer statements
// PaymentHistory → month-by-month payment status per account per year

// Provider Values: EFX (Equifax), TU (TransUnion), EXP (Experian)
// Account Status Values: PAYS_AS_AGREED, LATE_30_DAYS, LATE_60_DAYS, LATE_90_DAYS,
//   COLLECTION_OR_CHARGEOFF, BANKRUPTCY_OR_WAGE_EARNER_PLAN, FORECLOSURE, etc.
```

---

## FORMAT 3: API INTEGRATION BLOCK

```javascript
// RJ Business Solutions API Client — use in any project
const RJ_API = 'https://rj-master-sop-2026.pages.dev/api';

// Get all SOPs
const sops = await fetch(`${RJ_API}/sops`).then(r => r.json());

// Get specific SOP with full details
const sop = await fetch(`${RJ_API}/sops/SOP-601`).then(r => r.json());

// Execute a SOP as workflow
await fetch(`${RJ_API}/ops/execute-sop`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    sop_id: 'SOP-101',
    client_id: 1,
    assigned_to: 'AI Agent Alpha',
    priority: 'high',
    actor: 'Rick Jefferson'
  })
});

// Pull credit report
await fetch(`${RJ_API}/mfsn/fetch-3b`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    client_email: 'client@example.com',
    client_token: 'MAPIK#abc123',
    client_id: 1
  })
});

// Send SMS
await fetch(`${RJ_API}/twilio/sms`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: '+15551234567',
    message: 'Your dispute update: 2 items deleted from Experian!',
    client_id: 1,
    sop_id: 'SOP-106'
  })
});

// Send email
await fetch(`${RJ_API}/email/resend`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'client@example.com',
    subject: 'Your Monthly Credit Report Update',
    html_body: '<h1>Great news!</h1><p>2 items removed this month.</p>',
    client_id: 1,
    sop_id: 'SOP-401'
  })
});

// Speed-to-lead (auto SMS + email on new lead)
await fetch(`${RJ_API}/speed-to-lead`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    client_id: 5,
    first_name: 'Maria',
    phone: '+15551234567',
    email: 'maria@example.com'
  })
});
```

---

## FORMAT 4: QUICK REFERENCE CARD

```
RJ BUSINESS SOLUTIONS — QUICK REF
==================================
Production: https://rj-master-sop-2026.pages.dev
GitHub: https://github.com/rjbizsolution23-wq/rj-master-sop-2026
Stack: Hono + CF Workers + D1 + Vite

62 SOPs | 7 Phases | 3 AI Agents | 239 Templates | 30 Legal Changes

INTEGRATIONS:
  MFSN → 3-bureau credit reports → /api/mfsn/*
  Twilio → SMS/Voice → /api/twilio/*
  SendGrid/Resend → Email → /api/email/*
  Stripe → Payments
  D1 → 13+ tables

KEY APIS:
  GET  /api/sops                → All SOPs
  POST /api/ops/execute-sop     → Run a SOP
  POST /api/mfsn/fetch-3b       → Pull credit report
  POST /api/twilio/sms          → Send SMS
  POST /api/email/resend        → Send email
  POST /api/speed-to-lead       → Auto-notify new lead
  GET  /api/integrations/status → Health check

COMPLIANCE:
  FCRA (SOP-601) — medical debt still reportable
  CROA (SOP-602) — no advance payments, 3-day cancel
  Always use certified mail for disputes
  Never guarantee score improvements
```

---

## ENVIRONMENT VARIABLES (for .dev.vars or wrangler secret put)

```
# MFSN
MFSN_API_URL=https://api.myfreescorenow.com
MFSN_API_EMAIL=<your-mfsn-api-email>
MFSN_API_PASSWORD=<your-mfsn-password>

# Twilio
TWILIO_ACCOUNT_SID=<sid>
TWILIO_AUTH_TOKEN=<token>
TWILIO_PHONE_NUMBER=+18667524618

# Email
SENDGRID_API_KEY=<key>
RESEND_API_KEY=<key>

# Stripe
STRIPE_SECRET_KEY=<key>
STRIPE_PUBLISHABLE_KEY=<key>
```
