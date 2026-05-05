# RJ Business Solutions — System Architecture
**Version:** 2026.1 | **Author:** Rick Jefferson | **Classification:** Internal Technical Reference

---

## Overview

RJ Business Solutions is a full-stack credit repair SaaS built on Cloudflare's edge network. The system processes credit reports, generates AI-powered dispute letters, manages client subscriptions, and automates the full credit repair lifecycle — all from a single Cloudflare Workers deployment backed by D1 (SQLite at the edge).

---

## Stack

| Layer | Technology |
|---|---|
| Runtime | Cloudflare Workers (V8 isolates) |
| Framework | Hono v4 (TypeScript) |
| Database | Cloudflare D1 (SQLite) |
| File Storage | Cloudflare R2 |
| AI Models | OpenRouter → Groq → OpenAI (auto-fallback) |
| Payments | Stripe (subscriptions + webhooks) |
| SMS/Voice | Twilio |
| Email | SendGrid / Resend |
| Physical Mail | Click2Mail API |
| Credit Data | MyFreeScoreNow (MFSN) 3-bureau pull |
| Frontend | SSR HTML via Hono (no separate frontend build) |
| Dev Server | Vite 6 + @hono/vite-dev-server |
| Deploy | Cloudflare Pages (wrangler) |

---

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                  CLOUDFLARE EDGE NETWORK                 │
│                                                          │
│  ┌──────────────┐    ┌─────────────────────────────┐    │
│  │  Client      │    │   Cloudflare Workers         │    │
│  │  Browser /   │───▶│   (Hono v4 — 270 routes)    │    │
│  │  Portal      │    │   src/index.tsx — 8,543 LOC │    │
│  └──────────────┘    └──────────┬──────────────────┘    │
│                                 │                        │
│          ┌──────────────────────┼──────────────────┐    │
│          │                      │                  │    │
│          ▼                      ▼                  ▼    │
│  ┌──────────────┐   ┌──────────────────┐  ┌──────────┐ │
│  │ Cloudflare   │   │  Cloudflare R2   │  │  KV /    │ │
│  │ D1 (SQLite)  │   │  (File Storage)  │  │  Cache   │ │
│  │ 53 tables    │   │  IDs, uploads    │  │          │ │
│  └──────────────┘   └──────────────────┘  └──────────┘ │
└─────────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────────────┐
          │              │                      │
          ▼              ▼                      ▼
  ┌──────────────┐ ┌──────────────┐   ┌──────────────────┐
  │  AI Engine   │ │    Stripe    │   │  Comms Layer     │
  │  OpenRouter  │ │  Payments +  │   │  Twilio SMS/Call │
  │  Groq        │ │  Webhooks    │   │  SendGrid Email  │
  │  OpenAI      │ │  Billing     │   │  Click2Mail      │
  └──────────────┘ └──────────────┘   └──────────────────┘
          │
  ┌──────────────────────────────────────────┐
  │          HYPERION ANALYSIS ENGINE        │
  │  12 AI Agents — parallel Promise.all     │
  │  8 Roadmaps per report                   │
  │  Metro 2 Audit | FCRA Audit | Score Sim  │
  └──────────────────────────────────────────┘
```

---

## Database Schema (53 Tables — 8 Migrations)

### Core CRM
- `clients` — Primary client records, scores, goals, status
- `leads` — Lead pipeline with source tracking
- `tasks` — Staff task management
- `notes` — Client notes
- `communications` — Email/SMS/call log
- `audit_log` — Full immutable audit trail

### Credit Data
- `credit_reports` — 3-bureau report metadata (EFX/TU/EXP scores)
- `credit_report_accounts` — All tradeline accounts
- `credit_report_inquiries` — Hard/soft inquiry records
- `credit_report_public_records` — Judgments, bankruptcies, liens
- `mfsn_tokens` — MFSN authentication per client

### Dispute System
- `disputes` — Individual dispute records per bureau
- `dispute_rounds` — Grouped dispute rounds
- `dispute_letters` — AI-generated letter content
- `dispute_tracking` — USPS certified mail tracking

### AI / Analysis
- `analysis_reports` — Full Hyperion analysis output
- `roadmap_results` — 8 roadmap types per analysis
- `sop_executions` — SOP run history
- `strategy_plans` — 90-day credit plans

### Financials
- `invoices` — Client billing records
- `payments` — Payment history
- `client_subscriptions` — Stripe subscription state
- `stripe_events` — Webhook event log

### Operations
- `staff` — Internal staff accounts
- `auth_sessions` — Staff login sessions
- `portal_tokens` — Client portal magic links
- `cron_log` — Automated job history
- `compliance_rules` — FCRA/FDCPA/CROA rules engine
- `affiliate_referrals` — Affiliate tracking

---

## AI Engine Architecture

### callAI() Function
Primary AI orchestration function with automatic fallback chain:
1. **OpenRouter** (primary) — GPT-4o-mini via OpenRouter API
2. **Groq** (fallback) — Llama 3.1 8B Instant (free, ultra-fast)
3. **OpenAI** (final fallback) — Direct OpenAI API

### Hyperion Analysis Engine
Triggered automatically on every MFSN credit report import.

```
MFSN Report Import
      │
      ▼
analysis_reports record (status: 'pending')
      │
      ▼ POST /api/reports/analyze/:reportId
      │
      ├── Agent 1: Executive Summary
      ├── Agent 2: Score Projection (3/6/12/24 months)
      ├── Agent 3: Metro 2® Compliance Audit
      ├── Agent 4: FCRA/FDCPA Legal Audit
      ├── Agent 5: Debt Analysis & Payoff Strategy
      ├── Agent 6: Auto Loan Roadmap
      ├── Agent 7: Mortgage Qualification Roadmap
      ├── Agent 8: Business Funding Roadmap
      ├── Agent 9: Debt Removal Roadmap
      ├── Agent 10: 90-Day Action Plan
      ├── Agent 11: Product Matching
      └── Agent 12: Behavioral Profile
            │
            ▼ (Promise.allSettled — resilient parallel execution)
            │
      ├── analysis_reports table (full text columns)
      └── roadmap_results table (8 roadmap rows)
```

---

## Security Architecture

### Authentication
- **Staff:** SHA-256 password hashing + D1 session tokens (HTTPOnly cookie, 8hr expiry)
- **Client Portal:** UUID magic links (24hr expiry, stored in `portal_tokens`)
- **API Keys:** Stored in Cloudflare `.dev.vars` (dev) and Cloudflare Workers Secrets (production)

### Data Protection
- All AI calls use HTTPS to external providers
- D1 database is isolated per Cloudflare account
- No PII stored in logs (only entity IDs)
- Audit log is append-only (no UPDATE/DELETE)
- CROA disclosure signature captured at signup

### Compliance Layers
- FCRA compliance rules engine (10 active rules)
- CROA disclosure required before service begins
- TCPA consent captured for SMS
- CAN-SPAM compliance on all email sequences

---

## Scalability Strategy

Cloudflare Workers scales to millions of requests automatically with no cold starts. D1 handles read-heavy workloads well; for write-heavy production loads:

1. **Batch writes** — Group audit log writes using `waitUntil()`
2. **Read replicas** — D1 global replication is handled by Cloudflare automatically
3. **AI rate limits** — OpenRouter has per-key rate limiting; rotate to Groq for burst capacity
4. **Queue system** — Hyperion analysis uses `analysis_reports` as a job queue; cron route `POST /api/cron/run-pending-analyses` processes up to 3 at a time
5. **R2 for files** — All document uploads go to R2, never D1 BLOBs

---

## Route Summary (270 Routes)

| Category | Route Count |
|---|---|
| Client CRM | 24 |
| Credit Reports / MFSN | 31 |
| Dispute System | 28 |
| AI Agents | 15 |
| Hyperion Analysis | 8 |
| SOP Execution | 6 |
| Stripe/Payments | 12 |
| Portal (client-facing) | 8 |
| Onboarding/Signup | 6 |
| Staff Auth | 5 |
| Email/SMS Automation | 18 |
| Compliance | 9 |
| Analytics/Reporting | 14 |
| Affiliate | 7 |
| Cron/Automation | 11 |
| SSR Pages | 68 |
