# Automation Flows
**RJ Business Solutions**
**Version:** 2026.1 | **Classification:** Internal — Confidential

---

## Overview

Every revenue-critical flow in RJ Business Solutions is automated. Humans handle exceptions; the system handles the routine. This document maps every automated flow, trigger, action, and expected outcome.

---

## Flow 1: Lead Capture → Consultation Booked

### Trigger
New lead submits form at `/funnel` (Apply section) OR `/signup`

### Automated Sequence

```
T+0s:    Lead record created in D1
         Lead score calculated by AI

T+30s:   SMS #1 (Twilio): "Hey [Name]! This is RJ Business Solutions.
         Thanks for applying — you're one step closer to the credit score
         you deserve. We'll call you within the hour. Reply STOP to opt out."

T+60s:   Email #1 (SendGrid): "Welcome email" with:
         - What to expect
         - Free credit tip PDF
         - Calendar link to book consultation

T+24h:   If no consultation booked:
         SMS #2: "Still thinking it over? Your credit situation isn't going
         to fix itself — let's get on a 15-min call. [Calendar Link]"

T+48h:   If no consultation booked:
         Email #2: "The cost of waiting" — shows mortgage rate comparison
         at their current vs. target score (personalized with their stated goal)

T+72h:   If no consultation booked:
         SMS #3: Final follow-up with social proof (testimonial)

T+7d:    If still no action:
         Move to "Cold" nurture sequence (monthly educational content)
```

### Expected Outcomes
- 40% of leads book consultation within 48 hours
- 60% respond to at least one touchpoint

---

## Flow 2: Consultation → Signup Conversion

### Trigger
Consultation call completed (staff updates CRM)

### Automated Sequence

```
T+0:     Post-call email: "So great speaking with you, [Name]!"
         Includes: personalized recap, their specific credit challenges,
         what we'll do in the first 30 days, plan recommendation, payment link

T+4h:    If payment link not clicked:
         SMS: "Quick reminder — your portal and first report pull are ready
         the moment you sign up. [Signup Link]"

T+24h:   If no signup:
         Email: "Case study" email showing client who had similar situation
         (anonymized) and their results at 30/60/90 days

T+48h:   If no signup:
         SMS: "Your 3-day cancellation guarantee means zero risk. Try us
         for 3 days, and if it's not right, we'll refund everything. [Link]"

T+72h:   If no signup:
         Staff alert: "48-hour follow-up needed — [Lead Name] hasn't signed up"

T+7d:    Move to Monthly Nurture sequence if still no signup
```

---

## Flow 3: Signup → Active Client (Onboarding Automation)

### Trigger
Client completes signup at `/signup`

### Automated Sequence

```
T+0:     Account created; CROA disclosure logged; Stripe customer created
         Email: "Welcome! Here's how to get started" (portal link + checklist)
         SMS: "Welcome to RJ Business Solutions! Your portal is ready:
         [Portal Link]. Step 1: Upload your ID to get started."

T+1d:    If ID not uploaded:
         SMS: "Don't forget — upload your ID to unlock your free AI credit
         analysis. Takes 2 minutes: [Portal Link]"

T+2d:    Staff task auto-created: "Review uploaded ID — [Client Name]"

T+3d:    ID verified → Credit report pulled automatically
         SMS: "🎉 Your credit report is in! Your AI analysis is running now.
         You'll receive a summary within 2 hours."

T+3d+2h: Analysis complete →
         Email: "Your Hyperion Credit Analysis is ready"
         - Credit health grade (A-F)
         - Top 3 findings
         - Score projection at 30/60/90 days
         - Link to full analysis in portal

T+4d:    Billing begins (first charge)
         Email: "Your subscription is now active — here's what happens next"

T+5d:    Round 1 letters prepared
         Staff task: "Review and approve Round 1 letters — [Client Name]"

T+7d:    Letters approved and mailed
         SMS: "✉️ Your dispute letters are in the mail! Certified tracking:
         [Tracking Numbers]. Bureaus have 30 days to respond."
```

---

## Flow 4: Monthly Client Engagement (Active Client Nurture)

### Trigger
1st of each month, for all active clients

### Automated Sequence

```
Day 1:   Score check — pull MFSN scores
         If score improved: Celebration email + SMS with exact point gain
         If score unchanged: Educational email "Why scores sometimes pause"
         If score decreased: Staff alert + client email with explanation

Day 5:   Monthly strategy email:
         - Current score vs. goal
         - Items disputed this month
         - Items deleted/updated
         - Items remaining
         - Next 30-day focus

Day 15:  Mid-month check-in SMS:
         "Halfway through the month — any bureau mail we should know about?
         Upload responses at [Portal Link]"

Day 28:  End of month wrap-up:
         - Progress summary
         - Next round preview
         - Upsell trigger (if score approaching threshold)
```

### Upsell Triggers (Auto-Detected)

| Condition | Automated Action |
|---|---|
| Score crosses 650 | Email: "You're now eligible for [specific auto loan]. Here's how to apply." |
| Score crosses 680 | Email: Auto loan roadmap + car payment comparison |
| Score crosses 620 | Email: FHA mortgage eligibility notification |
| Score crosses 740 | Email: "You've hit prime rate territory — here's your mortgage roadmap" |
| Score improves 50+ points | SMS: Celebration + referral request |
| Month 3 active | Email: Annual plan upsell (save 2 months) |
| Month 4 active | Email: Business funding roadmap introduction |
| Score goal achieved | Email: "You did it!" + next goal setting + referral ask |

---

## Flow 5: Payment Failure Recovery

### Trigger
Stripe `invoice.payment_failed` webhook

### Automated Sequence

```
Hour 0:  SMS: "Your RJ Business Solutions payment didn't go through.
         Update your payment method to keep your credit repair active:
         [Billing Portal Link]. Reply STOP to opt out."

Hour 0:  Email: "Action required — payment update needed"
         Includes: billing portal link, amount due, next retry date

Hour 72: Stripe auto-retries

Hour 96 (if still failed):
         Staff task: "Call client re: payment — [Name]"
         SMS #2: "We want to keep working on your credit! Let's get your
         payment sorted — call us at (866) 752-4618 or update here: [Link]"

Day 7 (if still failed):
         Account suspended
         Email: "Your account has been paused. Reactivate here: [Link]"
         SMS: "Your credit repair is paused. Don't let your progress stop
         here — reactivate at [Portal Link]"

Day 14: Account marked cancelled (data retained 30 days)
         Offboarding email sent
```

---

## Flow 6: Referral & Re-Engagement

### Trigger A: Score milestone hit (50+ points or goal achieved)
### Trigger B: Item deletion confirmed

### Referral Sequence

```
T+0:     Celebration email/SMS with milestone
T+24h:   Referral ask email:
         "You just hit [milestone]! Know someone who needs the same results?
         Send them your referral link and earn $50 for every client you refer:
         [Referral Link]"

T+72h:   SMS: "Your referral link is ready! Share with anyone who wants to
         fix their credit: [Referral Link]"
```

### Re-Engagement Sequence (Cancelled Clients — 90-Day Post-Cancel)

```
Day 90:  Email: "We've been thinking about you, [Name]"
         - Reminder of progress made while they were a client
         - New features available
         - Special re-enrollment offer (20% off first month back)

Day 120: SMS: "Still working on that credit goal? We're here when you're
         ready. [Signup Link]"

Day 180: Final re-engagement email
         "Last chance — our re-enrollment offer expires soon"
```

---

## Flow 7: Affiliate Referral Tracking

### Trigger
Visitor clicks affiliate link → reaches `/signup?ref=[affiliate_code]`

### Automated Sequence

```
Click:   Affiliate code captured + stored with lead/client record
         Affiliate dashboard updated with new click (pending)

Signup:  Affiliate dashboard updated with "signup — pending payment"
         Affiliate notification email: "You have a new referral!"

Day 4:   Client first payment confirmed
         Affiliate commission calculated
         Affiliate notification: "Commission earned: $[Amount]"
         Commission added to affiliate balance

Month-end: Stripe payout to affiliate (if balance > $50)
           Affiliate monthly statement email
```

---

## Technical Implementation Notes

All automation flows are implemented via:
- **Email sequences:** Seeded in `email_sequences` + `email_sequence_steps` tables
- **SMS:** Twilio API calls via worker endpoints
- **Triggers:** Webhook events (Stripe) or cron jobs (`/api/cron/*`)
- **Task creation:** Auto-inserted into `tasks` table with assigned staff

Current active automation routes:
- `POST /api/automation/trigger` — Manual trigger any flow
- `POST /api/cron/send-overdue-reminders` — Payment follow-ups
- `POST /api/cron/check-deadlines` — Dispute round deadlines
- `POST /api/cron/run-pending-analyses` — Process queued Hyperion analyses
- `GET /api/email-sequences` — View all active sequences
