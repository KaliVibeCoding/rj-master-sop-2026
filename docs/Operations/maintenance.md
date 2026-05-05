# System Maintenance Guide
**RJ Business Solutions**
**Version:** 2026.1 | **Classification:** Internal Staff

---

## Daily Checks (Every Business Day)

| Check | How | Action if Failing |
|---|---|---|
| Application is running | Visit rjbusinesssolutions.org — expect 200 response | Restart Cloudflare Worker via Wrangler |
| AI agents responding | `GET /api/ai/models` — verify configured: true | Check .dev.vars API keys; check provider status pages |
| Pending analyses queue | `GET /api/reports/pending` — should be < 5 pending | Run `POST /api/cron/run-pending-analyses` |
| Failed payments | Stripe dashboard → Payments → Failed | Follow SOP-005 payment failure protocol |
| New leads | `/leads` dashboard — respond within 4 hours | Assign to available staff |
| Uploaded documents | Client portal — check for pending ID verifications | Review and approve/reject within 1 business day |

---

## Weekly Checks (Every Monday)

### 1. Database Health
```bash
# Check D1 database size and table row counts
npx wrangler d1 execute rj-sop-operations --local \
  --command="SELECT name, COUNT(*) FROM sqlite_master WHERE type='table' GROUP BY name"
```

### 2. AI Cost Monitoring
- Check OpenRouter dashboard for weekly AI spend
- Target: < $50/week for 50 active clients
- If over budget: Review which agents are running most frequently; consider batching

### 3. Stripe Reconciliation
- Export weekly payment report from Stripe
- Cross-reference with `payments` table in D1
- Flag any discrepancies for manual review

### 4. MFSN API Health
- Verify MFSN token for at least 3 clients still valid
- Run test report pull on a test account
- Check MFSN dashboard for API rate limit status

### 5. Email/SMS Deliverability
- SendGrid dashboard: Check bounce rate (should be < 2%), spam rate (< 0.1%)
- Twilio: Check message delivery rate (should be > 95%)
- If bounce rate high: Clean email list; verify SPF/DKIM records

---

## Monthly Maintenance

### 1. Migration Check
```bash
# Verify all migrations applied
npx wrangler d1 execute rj-sop-operations --local \
  --command="SELECT * FROM d1_migrations ORDER BY id DESC LIMIT 10"
```

### 2. Database Backup
```bash
# Export full D1 database
npx wrangler d1 export rj-sop-operations --output=backup_$(date +%Y%m%d).sql
# Upload to R2 for safe storage
npx wrangler r2 object put rj-backups/db/backup_$(date +%Y%m%d).sql \
  --file=backup_$(date +%Y%m%d).sql
```

### 3. API Key Rotation
Review all API keys for expiration:
- CLōD API: Check expiry in JWT (`iat`/`exp` fields)
- OpenRouter: No expiry, but rotate every 6 months for security
- Stripe: Restricted keys; rotate if compromised
- MFSN: Check with provider for token expiry policy

### 4. Compliance Review
- Run `GET /api/compliance/violations` — review any flagged events
- Verify CROA disclosures properly captured for all new signups this month
- Verify all cancelled clients received proper notice

### 5. Security Audit
- Review `auth_sessions` table — delete sessions > 7 days old
- Review `audit_log` for any unusual activity patterns
- Verify staff with separated employment have access revoked

---

## Deployment Procedure (Production Updates)

### Pre-Deployment
1. Test all changes locally with `npm run dev`
2. Run TypeScript type check: `npx tsc --noEmit`
3. Test critical paths: login, MFSN fetch, Stripe webhook, AI agent
4. Back up D1 database before any migration

### Deploy to Cloudflare Pages

```bash
# Deploy via Wrangler
npx wrangler pages deploy dist --project-name=rj-master-sop-2026

# Apply any new migrations to production D1
npx wrangler d1 execute rj-sop-operations \
  --file=migrations/000X_new_migration.sql
# NOTE: Remove --local flag for production
```

### Apply Secrets to Production
```bash
# Set production secrets (NOT from .dev.vars — that's dev only)
npx wrangler secret put OPENROUTER_API_KEY
npx wrangler secret put GROQ_API_KEY
npx wrangler secret put OPENAI_API_KEY
npx wrangler secret put STRIPE_SECRET_KEY
# ... (repeat for all sensitive keys)
```

### Post-Deployment Verification
1. Hit production URL — verify 200 response
2. Test login flow
3. Test `GET /api/ai/models` — verify keys loaded
4. Test one MFSN fetch for a real client (use test client)
5. Verify Stripe webhook still receiving (check Stripe dashboard)

---

## Environment Variable Reference

### Critical for AI (App won't work without these)
- `OPENROUTER_API_KEY` — Primary AI provider
- `GROQ_API_KEY` — AI fallback
- `OPENAI_API_KEY` — AI final fallback

### Critical for Payments
- `STRIPE_SECRET_KEY` — All Stripe operations
- `STRIPE_WEBHOOK_SECRET` — Webhook verification (get from Stripe dashboard)

### Critical for Credit Data
- `MFSN_API_URL` — MFSN API endpoint
- `MFSN_AID` — Your MFSN affiliate ID
- `MFSN_DEFAULT_PID` — Default product ID

### Critical for Communications
- `TWILIO_ACCOUNT_SID` + `TWILIO_AUTH_TOKEN` — SMS
- `SENDGRID_API_KEY` — Email
- `CLICK2MAIL_AUTH_BASIC` — Physical mail

---

## Monitoring & Alerting

### Current Monitoring (Manual)
All monitoring is currently manual. Recommended additions:

1. **Uptime Monitor:** Set up Cloudflare Health Check or UptimeRobot for rjbusinesssolutions.org
2. **Error Alerting:** Add Sentry or similar for JavaScript error tracking
3. **AI Cost Alert:** Set spend alert in OpenRouter dashboard at $30/week
4. **Stripe Failed Payment Alert:** Stripe webhook for `invoice.payment_failed` already implemented

### Cron Jobs (Manual Trigger for Now)
These should eventually be automated via Cloudflare Cron Triggers:

```
POST /api/cron/send-overdue-reminders     — Daily, 9am MT
POST /api/cron/check-deadlines            — Daily, 9am MT  
POST /api/cron/run-pending-analyses       — Every 2 hours
POST /api/cron/monthly-score-update       — 1st of month, 8am MT
```

To add Cloudflare Cron Triggers, add to `wrangler.jsonc`:
```json
"triggers": {
  "crons": ["0 15 * * *", "0 */2 * * *"]
}
```
