# RJ Business Solutions — Master SOP 2026 Operations Engine

## Overview
A comprehensive credit repair business operations platform built with Hono (Cloudflare Workers/Pages), featuring 62 SOPs, 239+ templates, and automated workflows. Designed as an agent-executable framework.

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
  index.tsx      — Main Hono app (2600+ lines): routes, SOP data, API handlers, SSR dashboard
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

## External Integrations (via Cloudflare secrets / `.dev.vars`)
- **Cloudflare D1**: `DB` binding — required for full operations mode
- **MFSN**: `MFSN_API_URL`, `MFSN_API_EMAIL`, `MFSN_API_PASSWORD`
- **Twilio**: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`
- **Email**: `SENDGRID_API_KEY`, `RESEND_API_KEY`
- **Stripe**: `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`

## Notes
- Without D1 connected, the dashboard shows "SOP Library only" mode — this is expected in dev
- The app is designed for Cloudflare Workers environment; some APIs (D1Database) are Cloudflare-specific
- `wrangler.jsonc` contains the D1 database ID for the production `rj-sop-operations` database
