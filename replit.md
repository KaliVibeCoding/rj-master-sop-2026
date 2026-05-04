# RJ Business Solutions — Master SOP 2026 Operations Engine

## Overview
A comprehensive credit repair business operations platform built with Hono (Cloudflare Workers/Pages), featuring 62 SOPs, 239+ templates, and automated workflows. Designed as a fully agent-executable framework — an agent can run the entire company through the API.

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
  index.tsx      — Main Hono app (2800+ lines): Bindings type (90+ vars), routes, SOP data, API handlers, SSR dashboard
  renderer.tsx   — JSX renderer for HTML responses
  templates.ts   — 236+ letter/checklist/contract templates
migrations/
  0001_initial_schema.sql  — 17-table schema (clients, disputes, workflows, tasks, etc.)
public/
  static/style.css  — Global styles
wrangler.jsonc   — Cloudflare Pages + D1 config
vite.config.ts   — Vite config with Hono dev server plugin
```

## Development
- **Start**: `npm run dev` (runs Vite on port 5000)
- **Build**: `npm run build` (Vite build → dist/)
- **Preview**: `wrangler pages dev` (local Cloudflare Pages preview)
- **Deploy**: `npm run deploy` (build + wrangler pages deploy)

## Replit Configuration
- Dev server runs on `0.0.0.0:5000` with `allowedHosts: true` for proxy compatibility
- Workflow: "Start application" → `npm run dev` → port 5000 (webview)
- Deployment: static build via `npm run build`, serving `dist/`

## TypeScript Bindings — 90 Environment Variables (16 Categories)
The `Bindings` type in `src/index.tsx` maps all env vars injected by Cloudflare:

| Category | Count | Key Variables |
|---|---|---|
| MFSN (Credit Reports) | 5 | MFSN_API_URL, MFSN_API_EMAIL, MFSN_API_PASSWORD, MFSN_API_KEY, MFSN_AFFILIATE_ID |
| Twilio (SMS/Voice) | 6 | TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, TWILIO_API_KEY_SID, TWILIO_API_KEY_SECRET, TWILIO_VOICE_WEBHOOK_URL |
| Email | 2 | SENDGRID_API_KEY, RESEND_API_KEY |
| Stripe | 3 | STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET |
| Cloudflare | 12 | CF_ACCOUNT_ID, CF_API_TOKEN, CF_ZONE_ID, CF_D1_DATABASE_ID, CF_R2_BUCKET_NAME, CF_KV_NAMESPACE_ID, CF_STREAM_CUSTOMER_CODE, CF_IMAGES_ACCOUNT_HASH, CF_TURNSTILE_SITE_KEY, CF_TURNSTILE_SECRET_KEY, CF_EMAIL_ROUTING_ADDRESS, CF_WORKERS_TOKEN |
| AI Models | 13 | OPENROUTER_API_KEY, GROQ_API_KEY, OPENAI_API_KEY, ANTHROPIC_API_KEY, GOOGLE_GEMINI_API_KEY, MISTRAL_API_KEY, COHERE_API_KEY, TOGETHER_API_KEY, PERPLEXITY_API_KEY, DEEPSEEK_API_KEY, XAI_API_KEY, NOVITA_API_KEY, HUGGINGFACE_API_KEY |
| Google Services | 6 | GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_ANALYTICS_ID, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_TAG_MANAGER_ID |
| Facebook / Meta | 6 | FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_ACCESS_TOKEN, FACEBOOK_PIXEL_ID, FACEBOOK_AD_ACCOUNT_ID, META_BUSINESS_SUITE_ID |
| Vector DB (Pinecone) | 4 | PINECONE_API_KEY, PINECONE_INDEX_NAME, PINECONE_ENVIRONMENT, PINECONE_PROJECT_ID |
| Media AI | 5 | STABILITY_API_KEY, RUNWAY_API_KEY, ELEVENLABS_API_KEY, HEYGEN_API_KEY, SYNTHESIA_API_KEY |
| Deployment | 7 | NODE_ENV, APP_BASE_URL, APP_VERSION, REPLIT_APP_URL, CLOUDFLARE_PAGES_URL, CUSTOM_DOMAIN, WEBHOOK_SECRET |
| Company Info | 10 | COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, COMPANY_WEBSITE, COMPANY_LINKEDIN, COMPANY_TWITTER, COMPANY_TIKTOK, OWNER_NAME, OWNER_EMAIL |

## Complete API Endpoint Reference

### Core
- `GET /` — Operations dashboard (SSR HTML)
- `GET /api/sops` — All 62 SOPs
- `GET /api/sops/:id` — Single SOP detail
- `GET /api/templates/:name` — Template content
- `GET /api/legal-changes-2026` — Compliance change tracker

### MFSN (Credit Reports)
- `POST /api/mfsn/login` — MFSN authentication
- `POST /api/mfsn/fetch-3b` — Pull 3-bureau credit report + store in D1
- `GET /api/mfsn/reports/:clientId` — Client report history
- `GET /api/mfsn/score-history/:clientId` — Score tracking over time
- `GET /api/mfsn/reports/:reportId/accounts` — Tradeline accounts for a report
- `GET /api/mfsn/docs` — Full MFSN API documentation reference
- `GET /api/mfsn/content` — Integration notes + agent instructions
- `GET /api/mfsn/schemas` — 42 OpenAPI schema catalog
- `GET /api/mfsn/html-files` — 106 HTML documentation files catalog
- `GET /api/mfsn/endpoints` — Full endpoint definitions with request/response shapes

### Cloudflare Config
- `GET /api/cloudflare/config` — Full platform configuration + service status
- `GET /api/cloudflare/services` — All 12 Cloudflare services with doc URLs
- `GET /api/cloudflare/email` — Email routing, templates, automations
- `GET /api/cloudflare/twilio` — Twilio integration config + SOP mappings

### Twilio (SMS/Voice)
- `POST /api/twilio/sms` — Send SMS
- `POST /api/twilio/call` — Make voice call

### Operations (require D1)
- `GET /api/ops/dashboard` — Full ops dashboard data
- `GET/POST /api/ops/clients` — Client management
- `GET /api/ops/clients/:id` — Client detail with workflows/tasks
- `POST /api/ops/execute-sop` — Execute SOP as workflow
- `POST /api/ops/workflows/:id/advance` — Advance workflow step
- `GET /api/ops/workflows/:id` — Workflow detail
- `PUT /api/ops/tasks/:id` — Update task status
- `POST /api/ops/tasks` — Create task
- `PUT /api/ops/automations/:id/toggle` — Toggle automation
- `POST /api/ops/run-automations` — Run all active automations
- `POST /api/ops/run-compliance-check` — Check compliance deadlines
- `POST /api/ops/generate-kpi-snapshot` — Generate KPI metrics
- `PUT /api/ops/notifications/:id/read` — Mark notification read

### Config / Status
- `GET /api/integrations/status` — Basic 6-service health check
- `GET /api/integrations/full-status` — Full status across all 16 service categories
- `GET /api/config/variables-version` — All 90 env vars with set/not-set status + previews

## Notes
- Without D1 connected, the dashboard shows "SOP Library only" mode — expected in local dev
- The app is designed for Cloudflare Workers environment; D1Database type is Cloudflare-specific
- `wrangler.jsonc` contains the D1 database ID for the production `rj-sop-operations` database
- Set env vars in `.dev.vars` locally (never commit); use Cloudflare dashboard secrets for production
- All new documentation endpoints (`/api/mfsn/docs`, `/api/cloudflare/*`, `/api/config/variables-version`) require no DB and respond immediately
