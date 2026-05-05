# Deployment Guide
**RJ Business Solutions**
**Version:** 2026.1 | **Classification:** Internal Technical

---

## Architecture Summary

- **Runtime:** Cloudflare Workers (via Cloudflare Pages Functions)
- **Dev Server:** Vite 6 + `@hono/vite-dev-server` on port 5000
- **Database:** Cloudflare D1 — database name: `rj-sop-operations`
- **Framework:** Hono v4, TypeScript

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- npm or pnpm
- Cloudflare account with Workers and D1 access

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.dev.vars` in the project root (DO NOT commit to git):
```bash
# Copy the template
cp .dev.vars.example .dev.vars
# Edit with your actual keys
```

**Critical keys for dev:**
```
OPENROUTER_API_KEY=sk-or-v1-...
GROQ_API_KEY=gsk_...
OPENAI_API_KEY=sk-proj-...
STRIPE_SECRET_KEY=sk_test_... (use TEST key for dev)
STRIPE_PUBLISHABLE_KEY=pk_test_...
MFSN_API_URL=https://api.myfreescorenow.com/api
MFSN_AID=RickJeffersonSolutions
MFSN_DEFAULT_PID=49914
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
SENDGRID_API_KEY=SG....
CLICK2MAIL_AUTH_BASIC=...
COMPANY_NAME=RJ Business Solutions
```

### 3. Set Up Local D1 Database
```bash
# Apply all migrations in order
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0001_initial_schema.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0002_mfsn_credit_reports.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0003_saas_full_expansion.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0004_full_platform.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0005_mfsn_full.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0006_auth_sessions.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0007_phase2_expansion.sql
npx wrangler d1 execute rj-sop-operations --local --file=migrations/0008_hyperion_analysis.sql

# Seed initial data
npx wrangler d1 execute rj-sop-operations --local --file=migrations/seed.sql
```

### 4. Start Development Server
```bash
npm run dev
# App runs at http://localhost:5000
```

### 5. Verify Setup
```bash
# Check AI keys loaded
curl http://localhost:5000/api/ai/models

# Check DB connected
curl http://localhost:5000/api/clients

# Check SOP library
curl http://localhost:5000/api/sop/list | python3 -c "import sys,json; d=json.load(sys.stdin); print('SOPs:', d['total'])"
```

---

## Production Deployment (Cloudflare Pages)

### Step 1: Create Cloudflare Pages Project
```bash
# First time only
npx wrangler pages project create rj-master-sop-2026
```

### Step 2: Create Production D1 Database
```bash
# Create D1 database
npx wrangler d1 create rj-sop-operations

# Note the database_id from output and update wrangler.jsonc
```

### Step 3: Apply Migrations to Production
```bash
# Remove --local flag for production
npx wrangler d1 execute rj-sop-operations --file=migrations/0001_initial_schema.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0002_mfsn_credit_reports.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0003_saas_full_expansion.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0004_full_platform.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0005_mfsn_full.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0006_auth_sessions.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0007_phase2_expansion.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/0008_hyperion_analysis.sql
npx wrangler d1 execute rj-sop-operations --file=migrations/seed.sql
```

### Step 4: Set Production Secrets
**NEVER put secrets in wrangler.jsonc or commit to git. Always use `wrangler secret put`:**

```bash
npx wrangler secret put OPENROUTER_API_KEY
npx wrangler secret put GROQ_API_KEY
npx wrangler secret put OPENAI_API_KEY
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_PUBLISHABLE_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put MFSN_API_URL
npx wrangler secret put MFSN_AID
npx wrangler secret put MFSN_DEFAULT_PID
npx wrangler secret put TWILIO_ACCOUNT_SID
npx wrangler secret put TWILIO_AUTH_TOKEN
npx wrangler secret put TWILIO_PHONE_NUMBER
npx wrangler secret put SENDGRID_API_KEY
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CLICK2MAIL_AUTH_BASIC
npx wrangler secret put CLICK2MAIL_API_URL
npx wrangler secret put SESSION_SECRET
npx wrangler secret put COMPANY_NAME
npx wrangler secret put COMPANY_EMAIL
```

### Step 5: Build and Deploy
```bash
# Build the application
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=rj-master-sop-2026
```

### Step 6: Configure Custom Domain
1. Cloudflare Dashboard → Pages → rj-master-sop-2026 → Custom Domains
2. Add: `app.rjbusinesssolutions.org` (or your preferred subdomain)
3. DNS automatically configured if domain is on Cloudflare

### Step 7: Configure Stripe Webhook
1. Stripe Dashboard → Developers → Webhooks → Add Endpoint
2. URL: `https://app.rjbusinesssolutions.org/api/stripe/webhook`
3. Events to listen for:
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `checkout.session.completed`
4. Copy the Webhook Signing Secret
5. `npx wrangler secret put STRIPE_WEBHOOK_SECRET`

### Step 8: Verify Production
```bash
# Test production endpoints
curl https://app.rjbusinesssolutions.org/api/ai/models
curl https://app.rjbusinesssolutions.org/api/sop/list | python3 -c "import sys,json; print(json.load(sys.stdin)['total'], 'SOPs')"

# Test landing page
curl -s -o /dev/null -w "%{http_code}" https://app.rjbusinesssolutions.org/funnel
# Expect: 200

# Test portal
curl -s -o /dev/null -w "%{http_code}" https://app.rjbusinesssolutions.org/
# Expect: 200 or 302
```

---

## wrangler.jsonc Reference

```jsonc
{
  "name": "rj-master-sop-2026",
  "compatibility_date": "2024-01-01",
  "pages_build_output_dir": "dist",
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "rj-sop-operations",
      "database_id": "YOUR_D1_DATABASE_ID_HERE"
    }
  ]
}
```

---

## CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: 58250b56ae5b45d940cd6e4b64314c01
          projectName: rj-master-sop-2026
          directory: dist

      - name: Apply DB Migrations
        run: |
          npx wrangler d1 execute rj-sop-operations \
            --file=migrations/latest.sql
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

**GitHub Secrets required:**
- `CLOUDFLARE_API_TOKEN` — Your Cloudflare API token

---

## Rollback Procedure

```bash
# List recent deployments
npx wrangler pages deployment list --project-name=rj-master-sop-2026

# Rollback to specific deployment
npx wrangler pages deployment rollback [DEPLOYMENT_ID] \
  --project-name=rj-master-sop-2026
```

**Database rollback:** D1 does not support point-in-time recovery natively. Always take a backup before migrations (see maintenance.md).

---

## Environment Differences

| Setting | Development | Production |
|---|---|---|
| DB | Local D1 (`--local`) | Cloudflare D1 (remote) |
| Stripe Keys | `sk_test_...` | `sk_live_...` |
| AI Keys | `.dev.vars` | Wrangler Secrets |
| Domain | `localhost:5000` | `app.rjbusinesssolutions.org` |
| MFSN | Real API (use test credentials) | Live credentials |
| Error Detail | Verbose | Minimal (no stack traces) |
