# RJ Business Solutions — Master SOP 2026 Operations Engine

## Overview
A full-stack credit repair business operations platform + SaaS infrastructure. Built with Hono (Cloudflare Workers/Pages). Features 62 SOPs, 239+ templates, automated workflows, AI autopilot, Stripe billing, multi-tenant white-label, course/certification engine, CROA/FCRA compliance engine, and affiliate program. An AI agent can run the entire company through the API.

## Architecture
- **Framework**: [Hono](https://hono.dev/) v4 with JSX rendering (SSR)
- **Runtime Target**: Cloudflare Workers / Pages
- **Dev Server**: Vite v6 with `@hono/vite-dev-server` (Cloudflare adapter)
- **Language**: TypeScript
- **Database**: Cloudflare D1 (SQLite-based edge database) — binding name `DB`
- **Styling**: Tailwind CSS (CDN in dev)

## Project Structure
```
src/
  index.tsx      — Main Hono app (3745 lines, 102 route handlers)
  renderer.tsx   — JSX renderer for HTML responses
  templates.ts   — 236+ letter/checklist/contract templates
migrations/
  0001_initial_schema.sql      — 17-table core schema
  0002_mfsn_credit_reports.sql — Credit report tables
  0003_saas_full_expansion.sql — 11 new tables: tenants, client_subscriptions, stripe_events,
                                  ai_jobs, course_modules, course_enrollments, bureau_responses,
                                  compliance_audits, lead_scores, affiliates, referrals
public/
  static/style.css  — Global styles
wrangler.jsonc   — Cloudflare Pages + D1 config
vite.config.ts   — Vite config with Hono dev server plugin
```

## Development
- **Start**: `npm run dev` (runs Vite on port 5000)
- **Build**: `npm run build` (Vite build → dist/)
- **Migrate (local)**: `npx wrangler d1 execute DB --local --file migrations/000X_name.sql`
- **Migrate (prod)**: `npx wrangler d1 execute DB --remote --file migrations/000X_name.sql`
- **Deploy**: `npm run deploy` (build + wrangler pages deploy)

## TypeScript Bindings — 90 Environment Variables (12 Categories)
Set in `.dev.vars` locally; Cloudflare dashboard secrets for production.

| Category | Count | Key Variables |
|---|---|---|
| MFSN | 5 | MFSN_API_URL, MFSN_API_EMAIL, MFSN_API_PASSWORD, MFSN_API_KEY, MFSN_AFFILIATE_ID |
| Twilio | 6 | TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, TWILIO_API_KEY_SID, TWILIO_API_KEY_SECRET, TWILIO_VOICE_WEBHOOK_URL |
| Email | 2 | SENDGRID_API_KEY, RESEND_API_KEY |
| Stripe | 3 | STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET |
| Cloudflare | 12 | CF_ACCOUNT_ID, CF_API_TOKEN, CF_ZONE_ID, CF_D1_DATABASE_ID, CF_R2_BUCKET_NAME, CF_KV_NAMESPACE_ID, CF_STREAM_CUSTOMER_CODE, CF_IMAGES_ACCOUNT_HASH, CF_TURNSTILE_SITE_KEY, CF_TURNSTILE_SECRET_KEY, CF_EMAIL_ROUTING_ADDRESS, CF_WORKERS_TOKEN |
| AI Models | 13 | OPENROUTER_API_KEY, GROQ_API_KEY, OPENAI_API_KEY, ANTHROPIC_API_KEY, GOOGLE_GEMINI_API_KEY, MISTRAL_API_KEY, COHERE_API_KEY, TOGETHER_API_KEY, PERPLEXITY_API_KEY, DEEPSEEK_API_KEY, XAI_API_KEY, NOVITA_API_KEY, HUGGINGFACE_API_KEY |
| Google | 6 | GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_ANALYTICS_ID, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_TAG_MANAGER_ID |
| Meta/Facebook | 6 | FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_ACCESS_TOKEN, FACEBOOK_PIXEL_ID, FACEBOOK_AD_ACCOUNT_ID, META_BUSINESS_SUITE_ID |
| Pinecone | 4 | PINECONE_API_KEY, PINECONE_INDEX_NAME, PINECONE_ENVIRONMENT, PINECONE_PROJECT_ID |
| Media AI | 5 | STABILITY_API_KEY, RUNWAY_API_KEY, ELEVENLABS_API_KEY, HEYGEN_API_KEY, SYNTHESIA_API_KEY |
| Deployment | 7 | NODE_ENV, APP_BASE_URL, APP_VERSION, REPLIT_APP_URL, CLOUDFLARE_PAGES_URL, CUSTOM_DOMAIN, WEBHOOK_SECRET |
| Company | 10 | COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, COMPANY_WEBSITE, COMPANY_LINKEDIN, COMPANY_TWITTER, COMPANY_TIKTOK, OWNER_NAME, OWNER_EMAIL |

## Complete API Reference — 102 Route Handlers

### Dashboard & Core
- `GET /` — Operations dashboard (SSR HTML, 10 tabs)
- `GET /api/sops` — All 62 SOPs
- `GET /api/sops/:id` — SOP detail
- `GET /api/templates/:name` — Template content
- `GET /api/legal-changes-2026` — Compliance tracker

### MFSN Credit Reports
- `POST /api/mfsn/login` — MFSN auth
- `POST /api/mfsn/fetch-3b` — Pull 3-bureau report → store in D1
- `GET /api/mfsn/reports/:clientId` — Report history
- `GET /api/mfsn/score-history/:clientId` — Score tracking
- `GET /api/mfsn/reports/:reportId/accounts` — Tradelines
- `GET /api/mfsn/docs` — Full API docs
- `GET /api/mfsn/content` — Integration notes
- `GET /api/mfsn/schemas` — 42 OpenAPI schemas
- `GET /api/mfsn/html-files` — 106 HTML doc files
- `GET /api/mfsn/endpoints` — Endpoint definitions

### Stripe Billing (Direct + SaaS)
- `GET /api/stripe/plans` — 4 tiers: basic $99, standard $179, premium $299, autopilot $499
- `POST /api/stripe/create-customer` — Create Stripe customer
- `POST /api/stripe/create-subscription` — Subscribe client to a plan
- `POST /api/stripe/cancel-subscription` — Cancel with end-of-period or immediately
- `GET /api/stripe/subscription/:clientId` — Subscription status
- `POST /api/stripe/webhook` — Stripe webhook handler (payment_failed → SMS, events logged)
- `POST /api/stripe/billing-portal` — Customer billing portal session
- `GET /api/stripe/revenue` — MRR/ARR by plan

### AI Autopilot
- `GET /api/ai/models` — Model routing: OpenRouter → Groq → OpenAI fallback
- `POST /api/ai/generate-dispute-letter` — AI-generated FCRA-compliant dispute letter
- `POST /api/ai/analyze-credit-report` — AI credit report analysis + dispute plan
- `POST /api/ai/run-autopilot` — Full autopilot: score lead → flag overdue → create tasks
- `POST /api/ai/draft-email` — AI email drafts (welcome, dispute_filed, progress, bureau_response, graduation, payment_failed)
- `POST /api/ai/score-lead` — AI lead scoring with grade, LTV, recommended plan
- `GET /api/ai/jobs/:clientId` — AI job history + cost tracking

### Multi-Tenant / White-Label SaaS
- `GET /api/tenants` — List all tenants with stats
- `POST /api/tenants` — Create white-label tenant (14-day trial, branded URL)
- `GET /api/tenants/:id` — Tenant details
- `PUT /api/tenants/:id` — Update branding/settings
- `GET /api/tenants/:id/stats` — MRR, client count, AI spend per tenant

### Course / Certification Engine
- `GET /api/course/modules` — 10 SOP-based modules + certification exam
- `POST /api/course/enroll` — Enroll client in module
- `GET /api/course/progress/:clientId` — Progress % + completion status
- `PUT /api/course/complete/:enrollmentId` — Mark complete with score
- `GET /api/course/certificate/:clientId` — CCRS certificate data + verify URL

### CROA / FCRA Compliance Engine
- `GET /api/compliance/croa-rules` — 12 rules (7 CROA, 4 FCRA, 1 FDCPA) with risk levels
- `POST /api/compliance/croa-check` — Real-time action compliance check (catches advance fees, guarantees, CPNs)
- `GET /api/compliance/fcra-rights` — Required FCRA consumer disclosure + bureau contacts
- `POST /api/compliance/bureau-response` — Log bureau response → update dispute status → suggest next SOP
- `GET /api/compliance/bureau-responses/:clientId` — Response history + stats
- `GET /api/compliance/audit/:clientId` — Full compliance audit trail

### Affiliate Program
- `POST /api/affiliates` — Create affiliate with unique referral code
- `GET /api/affiliates` — List all affiliates
- `POST /api/affiliates/track` — Track referral (link code → client)
- `GET /api/affiliates/:id/stats` — Referral history + payout due

### Twilio (SMS/Voice)
- `POST /api/twilio/sms` — Send SMS (auto-logged to D1)
- `POST /api/twilio/call` — Make voice call with TwiML

### Operations (require D1)
- `GET /api/ops/dashboard` — Full ops data (clients, disputes, tasks, workflows, KPIs)
- `GET /POST /api/ops/clients` — Client management
- `GET /api/ops/clients/:id` — Client detail
- `POST /api/ops/execute-sop` — Execute SOP as workflow
- `POST /api/ops/workflows/:id/advance` — Advance workflow step
- `GET /api/ops/workflows/:id` — Workflow detail
- `PUT /api/ops/tasks/:id` — Update task
- `POST /api/ops/tasks` — Create task
- `PUT /api/ops/automations/:id/toggle` — Toggle automation
- `POST /api/ops/run-automations` — Run all active automations
- `POST /api/ops/run-compliance-check` — Flag expiring compliance items
- `POST /api/ops/generate-kpi-snapshot` — Generate KPI metrics

### Config & Status
- `GET /api/integrations/status` — Basic 6-service health check
- `GET /api/integrations/full-status` — Full 16-category status
- `GET /api/config/variables-version` — All 90 env vars with set/preview
- `GET /api/cloudflare/config` — Full Cloudflare platform config
- `GET /api/cloudflare/services` — All 12 services with doc URLs
- `GET /api/cloudflare/email` — Email routing + automations
- `GET /api/cloudflare/twilio` — Twilio config + SOP mappings

## Monetization Tiers Built
| Tier | Price | How |
|---|---|---|
| Basic | $99/mo | Direct credit repair subscription |
| Standard | $179/mo | Direct credit repair, 3 bureaus |
| Premium | $299/mo | Direct + AI letters + compliance |
| AI Autopilot | $499/mo | Fully automated client handling |
| White-Label Starter | $497/mo | Per-agency SaaS license |
| White-Label Pro | $997/mo | Per-agency, more clients |
| White-Label Enterprise | $2,970/mo | Unlimited clients + custom domain |
| Course (Basic) | $997 one-time | SOP library as certification |
| Course (Bundle) | $2,997 one-time | Full CCRS certification |
| Affiliate Commission | 20-25% | Referral partner program |

## Notes
- Without D1 connected, dashboard shows "SOP Library only" — expected in local dev
- AI autopilot requires at least one AI key: OPENROUTER_API_KEY (preferred), GROQ_API_KEY, or OPENAI_API_KEY
- Stripe webhook endpoint at POST /api/stripe/webhook — configure in Stripe dashboard
- Run ALL migrations in order (0001 → 0002 → 0003) against both local and remote D1
- CROA compliance check runs in real-time on any action string — catches advance fee violations, guarantee language, CPN schemes automatically
