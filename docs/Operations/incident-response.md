# Incident Response Plan
**RJ Business Solutions**
**Version:** 2026.1 | **Classification:** Internal — Confidential

---

## Incident Classification

| Severity | Definition | Response Time | Escalation |
|---|---|---|---|
| **P1 — Critical** | Data breach, system down, legal action | 1 hour | Rick Jefferson immediately |
| **P2 — High** | Payment processing down, mass client impact | 4 hours | Senior staff |
| **P3 — Medium** | Feature outage, individual client dispute | 24 hours | Assigned staff |
| **P4 — Low** | Minor bug, single user issue | 72 hours | Support queue |

---

## Incident 1: Data Security Breach

### Definition
Unauthorized access to client PII including SSN, credit data, payment information, or any combination thereof.

### Immediate Response (0-1 hours)

1. **Isolate:** Identify and isolate the compromised system or endpoint
   - If Cloudflare Workers: Disable the affected route via Wrangler immediately
   - If D1 database: Contact Cloudflare support immediately (+1-888-993-5273)
   - If third-party processor: Notify provider (Stripe, Twilio, etc.) immediately

2. **Preserve:** Do NOT delete any logs or affected records — this is evidence
   - Export audit_log for affected time period
   - Screenshot all relevant system states

3. **Assess Scope:**
   - Which client records were affected?
   - What data types were exposed (SSN, payment, credit data)?
   - How long was the breach active?
   - Is the breach ongoing?

4. **Contain:** Deploy fix or disable feature to stop ongoing exposure

### Notification Timeline (72-hour rule)

- **Hour 1:** Internal team notified
- **Hour 4:** Legal counsel notified
- **Hour 24:** Affected clients notified via email (required by most state laws)
- **Hour 72:** Regulatory notification if required (FTC, state AGs)

### Client Notification Template

> Subject: Important Security Notice from RJ Business Solutions
>
> Dear [Client Name],
>
> We are writing to inform you of a security incident that may have affected your personal information. On [DATE], we detected [BRIEF DESCRIPTION OF INCIDENT].
>
> **Information that may have been affected:** [LIST DATA TYPES]
>
> **What we have done:** [STEPS TAKEN]
>
> **What you should do:**
> - Place a credit freeze at all three bureaus (free at equifax.com, experian.com, transunion.com)
> - Monitor your credit report for unusual activity
> - Consider placing a fraud alert
>
> We deeply regret this incident and have taken immediate steps to prevent recurrence. We are offering [FREE CREDIT MONITORING / IDENTITY PROTECTION] at no cost.
>
> Questions: support@rjbusinesssolutions.org | (866) 752-4618

---

## Incident 2: Payment Processing Outage

### Definition
Stripe API unavailable, webhooks failing, or mass payment failures.

### Response Steps

1. **Verify Outage:** Check status.stripe.com; check Cloudflare Workers logs
2. **Pause Billing Attempts:** Contact Stripe support to pause retry attempts during outage
3. **Client Communication:** Send proactive email if outage affects client billing dates
4. **Manual Processing:** Prepare manual invoicing backup (Stripe Dashboard manual payment requests)
5. **Webhook Recovery:** Once restored, manually process any missed webhook events
   - Check `stripe_events` table for unprocessed events
   - Re-run `POST /api/stripe/webhook` for missed events if needed
6. **Post-Incident:** Audit all subscriptions affected; verify billing resumed correctly

### SLA Impact
Payment outages do NOT extend client subscription periods unless outage exceeds 48 hours. For outages >48 hours, credit affected clients one day per day of outage.

---

## Incident 3: AI/Analysis System Failure

### Definition
AI agents returning errors, analysis_reports stuck in 'running' state, or incorrect output.

### Response Steps

1. **Identify Failing Agent:** Check analysis_reports table for failed records
2. **Check API Keys:** Verify OPENROUTER_API_KEY, GROQ_API_KEY, OPENAI_API_KEY in `.dev.vars`
3. **Check Provider Status:** openrouter.ai/status, status.groq.com, status.openai.com
4. **Fallback Activation:** System automatically falls back OpenRouter → Groq → OpenAI
5. **Manual Override:** If all providers down, manually update analysis_reports status to 'pending' for re-processing when providers restore
6. **Client Impact:** If client analysis delayed >24 hours, notify client and offer explanation

---

## Incident 4: Legal Complaint or Regulatory Action

### Definition
CFPB complaint received, state AG investigation, class action threat, or cease-and-desist.

### Immediate Response (0-4 hours)

1. **Preserve All Records:** Immediately preserve all records related to the complained-about client(s)
2. **Legal Counsel:** Contact licensed credit repair attorney IMMEDIATELY — do not respond to regulators without counsel
3. **Document Gathering:** Pull complete client record:
   - Signed CROA disclosure and contract
   - All dispute letters sent (with dates and tracking numbers)
   - All bureau responses received
   - All communications with client
   - Payment history
4. **Do NOT Destroy Records:** This constitutes obstruction

### CFPB Complaint Response (Required: 15 calendar days)

1. Review the complaint in the CFPB portal (consumerfinance.gov/complaint)
2. Prepare response with all supporting documentation
3. Response must include: what happened, what we did, resolution offered
4. All responses reviewed by legal counsel before submission

### State AG Response
- Respond within their stated timeline (typically 20-30 days)
- Engage licensed attorney in that state
- Provide complete documentation

---

## Incident 5: Client Dispute Escalation

### Definition
Client threatening legal action, escalating to social media, or filing complaint.

### Response Steps

1. **Acknowledge Within 4 Hours:** "We've received your concern and are reviewing it immediately."
2. **Do NOT:** Argue via email, offer unauthorized refunds, or make promises you can't keep
3. **Review Account:** Pull complete history — what disputes were sent, what results achieved
4. **Escalate to Rick Jefferson:** All legal threats reviewed by ownership
5. **Resolution Options (in order of preference):**
   - Schedule strategy call to explain timeline and results
   - Offer free additional dispute round
   - Offer plan downgrade/pause
   - Issue partial credit
   - Full refund if CROA violation occurred
6. **Document Resolution:** All resolved complaints logged with outcome

---

## Contact List

| Role | Contact | Available |
|---|---|---|
| Owner/Escalation | Rick Jefferson | 24/7 for P1 |
| Support | support@rjbusinesssolutions.org | M-F 9am-6pm MT |
| Legal Counsel | [Attorney Name/Firm] | Business hours |
| Cloudflare Support | +1-888-993-5273 | 24/7 (Enterprise) |
| Stripe Support | dashboard.stripe.com/support | 24/7 |
| Twilio Support | help.twilio.com | 24/7 |
