# Standard Operating Procedures — Master Reference
**RJ Business Solutions**
**Version:** 2026.1 | **Classification:** Internal Staff Only

---

## Overview

This document covers the core internal operational procedures for running RJ Business Solutions. The full SOP library (62 SOPs) is available in the platform at `/sop-library` and is AI-executable. This document provides the human-readable operational reference for daily business functions.

---

## SOP-001: Lead Intake Process

### Trigger
New lead submits form at `/funnel` (Apply Now section) or is added manually.

### Steps

1. **Lead Created** — System auto-creates lead in CRM (`/api/leads`), records source, name, email, phone, credit score goal
2. **Immediate Auto-Response** — System sends welcome SMS (Twilio) + email (SendGrid) within 60 seconds
3. **Lead Scoring** — AI assigns lead score based on score goal, urgency indicators, and lead source
4. **Staff Review** (within 4 business hours) — Staff views lead at `/leads`
5. **Qualification Call** — Staff calls lead using the consultation call SOP
6. **CRM Update** — Lead status updated (qualified/unqualified/no-contact)
7. **Pipeline Move** — Qualified leads moved to "Consultation Scheduled" stage
8. **Convert or Close** — Post-consultation, convert to client via `POST /api/leads/:id/convert` or mark closed with reason

### KPIs
- Lead response time: < 60 seconds (automated) + < 4 hours (human)
- Lead-to-consultation rate: Target > 40%
- Consultation-to-client rate: Target > 30%

---

## SOP-002: Client Onboarding

### Trigger
Lead converted to client OR self-service signup completed at `/signup`

### Steps

1. **Client Record Created** — System creates client with status `onboarding`
2. **Stripe Customer Created** — Auto-run via `POST /api/stripe/create-customer`
3. **Payment Setup** — Stripe payment link sent; billing begins day 4 (CROA compliance)
4. **CROA Disclosure** — Digital signature captured and logged (timestamp + IP)
5. **Welcome Package Sent** — Email with portal link, onboarding guide PDF, what-to-expect timeline
6. **ID Verification** — Client uploads ID + proof of address to portal
7. **ID Review** (within 1 business day) — Staff verifies documents, marks verified
8. **MFSN Report Pull** — Run `POST /api/mfsn/fetch-3b` with client credentials
9. **Hyperion Analysis** — Auto-triggered; runs all 12 AI agents (~60-90 seconds)
10. **Roadmaps Ready** — Staff reviews analysis; sends personalized summary to client
11. **Round 1 Letters Prepared** — Staff reviews AI-generated dispute letters, approves
12. **Letters Mailed** — Click2Mail certified mail submission; tracking numbers logged
13. **Client Notified** — SMS + email confirmation of letters sent
14. **Status Updated** — Client status changed to `active`

### KPIs
- Time from signup to first report pull: < 48 hours
- Time from report pull to letters sent: < 5 business days
- Onboarding completion rate: Target > 90%

---

## SOP-003: Monthly Dispute Round Management

### Trigger
1st of each month for all active clients, OR after bureau response received

### Steps

1. **Active Client List** — Pull all clients with status `active` from `/api/clients`
2. **Response Review** — Check for bureau response letters uploaded since last round
3. **Results Processing** — Log deleted/updated items in dispute tracking system
4. **Score Update** — Pull new MFSN scores; log score change in `credit_reports`
5. **Next Round Prep** — Prepare Round N+1 letters based on:
   - Items still reporting (not deleted)
   - New violations found in bureau responses
   - Escalation opportunities (MOV demands, CFPB complaints)
6. **Letter Review** — Staff approves all letters before send
7. **Mail Submission** — Click2Mail batch submission; tracking logged
8. **Client Update** — Monthly email summary of: items deleted, score change, next steps
9. **Billing Verification** — Confirm all active clients billed; follow up on failed payments

### KPIs
- Days between rounds: 30-35 days (matches bureau investigation window)
- Items deleted per round: Track and report
- Score improvement per month: Average across all active clients

---

## SOP-004: Bureau Response Handling

### Trigger
Client uploads bureau response letter to portal

### Steps

1. **Response Received Alert** — Staff notified via system dashboard
2. **Response Categorized**:
   - **Deleted** → Mark dispute as `deleted`, log score expected improvement
   - **Updated/Modified** → Mark as `updated`, log what changed
   - **Verified** → Escalate to Method of Verification demand
   - **No Response (35+ days)** → Auto-deletion demand letter
3. **MOV Process (if Verified)**:
   - Prepare MOV demand letter (§611(a)(7) — "Please provide us with the name, address, and telephone number of each person contacted regarding this item")
   - If MOV reveals inadequate investigation → CFPB complaint + demand deletion
4. **Updated Score Pull** — Pull fresh MFSN report after each round's responses
5. **Client Communication** — Notify client of results with plain-language summary

---

## SOP-005: Payment Failure Handling

### Trigger
Stripe webhook `invoice.payment_failed` event received

### Auto-Response (System)
- Day 0: Twilio SMS sent automatically: "Your RJ Business Solutions payment failed. Please update your payment method at [billing portal link]."
- Day 0: Email sent with billing portal link
- Day 3: Stripe auto-retries payment

### Staff Response
- Day 1: Staff reviews failed payment list in dashboard
- Day 5 (if still unpaid): Staff calls client
- Day 7: Service suspended (access restricted, no new dispute rounds)
- Day 14: Account marked `suspended`; data retained 30 days

### Resolution
- Client updates card → Stripe auto-processes → Webhook re-activates account
- Staff manually reactivates if needed: Update client status to `active`

---

## SOP-006: Cancellation and Offboarding

### Trigger
Client requests cancellation OR payment fails permanently

### Steps

1. **Cancellation Request Received** — Log in CRM with date and reason
2. **Retention Attempt** (within 4 hours):
   - If financial hardship: Offer payment pause (up to 90 days)
   - If results disappointment: Schedule strategy call, review roadmap
   - If competitor: Emphasize AI advantage, offer plan downgrade
3. **3-Day Window Check** — If within 3 business days of signup: full refund, no questions
4. **Stripe Subscription Cancel** — Cancel via Stripe API; access continues through paid period
5. **Final Report** — Send client exit report: items removed, score improvement, roadmaps
6. **Data Retention** — Retain records per privacy policy (7 years for service records)
7. **Referral Ask** — Send referral request email: "Know someone who needs credit repair?"
8. **Status Update** — Mark client as `cancelled` in CRM; add cancellation reason tag

---

## SOP-007: Compliance Review

### Trigger
Monthly (first Monday of each month) or when triggered by CFPB/legal activity

### Steps

1. **CROA Compliance Audit** — Run `POST /api/compliance/croa-check` on recent signups
2. **Dispute Review** — Verify no fabricated dispute reasons in recent letters
3. **Billing Compliance** — Verify no charges before 3-day window on new signups
4. **TCPA Review** — Verify all SMS recipients have current TCPA consent
5. **Email Compliance** — Check unsubscribe requests processed within 10 days
6. **Staff Training Check** — Verify staff SOPs reviewed quarterly
7. **Incident Log Review** — Review any compliance incidents from prior month
8. **Update Rules Engine** — Add any new compliance rules to system

---

## SOP-008: Affiliate Management

### Trigger
New affiliate application received OR monthly affiliate payout

### Steps

1. **Application Review** — Review affiliate application within 3 business days
2. **Agreement Execution** — Send affiliate agreement; receive signed copy
3. **Account Creation** — Create affiliate record in system
4. **Dashboard Access** — Generate affiliate portal link
5. **Training** — Send affiliate training materials
6. **Monthly Payout** — Run affiliate commission report; process Stripe payouts
7. **Performance Review** — Monthly review of affiliate conversion rates; offer support to top performers

### Commission Structure
- Standard: 20% of first month's payment per referred client
- Premium Affiliate (10+ referrals/month): 25% recurring for 3 months
- Super Affiliate (25+ referrals/month): 30% recurring for 6 months
