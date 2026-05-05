# Regulatory Compliance Reference
**RJ Business Solutions**
**Version:** 2026.1 | **Last Updated:** May 5, 2026

---

## Overview

RJ Business Solutions operates as a Credit Repair Organization (CRO) under federal law and is subject to multiple federal statutes governing credit reporting, debt collection, telecommunications, and consumer protection. This document outlines each applicable law, our compliance posture, and operational procedures for each.

**This document is for internal operational reference. Clients receive a simplified version via the CROA disclosure at signup.**

---

## 1. Credit Repair Organizations Act (CROA)
**15 U.S.C. §§ 1679 – 1679j**

### Requirements
| Requirement | Our Implementation |
|---|---|
| Written contract before any service | Captured at `/signup` — digital signature logged with timestamp and IP |
| 3-day right of cancellation | Disclosed at signup; no billing until day 4 |
| Prohibited from charging before services rendered | Enforced in Stripe billing (4-day delay after contract) |
| Prohibited from advising clients to make false statements | Strictly prohibited in staff SOPs |
| Prohibited from creating new credit identity (file segregation) | Prohibited by Terms of Service §8 |
| Required CROA disclosure statement | Auto-generated at signup, stored in D1 with client record |
| Right to sue CRO for violations | Disclosed in Terms of Service |

### Penalties for Violation
- Civil liability: Actual damages, punitive damages, attorney fees
- Criminal: Fines and imprisonment under 18 U.S.C. § 1001

### Our Compliance Controls
1. Digital CROA disclosure signed at every new client signup
2. Billing delay enforced in Stripe subscription creation (trial period = 3 business days)
3. Staff training via SOP-601 (FCRA Compliance Framework)
4. Dispute templates reviewed to ensure no fabricated dispute reasons
5. CROA compliance rules engine active in platform (`/api/compliance/croa-rules`)

---

## 2. Fair Credit Reporting Act (FCRA)
**15 U.S.C. §§ 1681 – 1681x**

### Key Sections and Our Compliance

**§ 604 — Permissible Purposes**
- We pull credit reports only with written client authorization, obtained at signup
- Authorization stored with client record and audit log

**§ 605(a) — Obsolete Information**
- We monitor all negative accounts for 7-year reporting limit
- Dispute templates include obsolescence arguments when DOFD + 7 years has passed
- Bankruptcies: 10-year limit monitored separately

**§ 605(c) — Running of Reporting Period**
- Date of First Delinquency (DOFD) analysis included in every Metro 2 audit
- Hyperion Agent #3 (Metro 2 Audit) flags DOFD manipulation automatically

**§ 607(b) — Accuracy Requirements (Furnisher Duties)**
- Dispute letters to furnishers cite §623(a)(1)(A) — prohibition on furnishing known inaccurate information
- Method of Verification (MOV) requests sent when initial disputes are "verified" without investigation

**§ 609 — Consumer Disclosure Rights**
- Client portal shows full account data from every credit report pull
- Clients can export their dispute history at any time

**§ 611 — Dispute Procedures**
- Dispute letters filed via certified mail (Click2Mail) with USPS tracking
- 30-day bureau investigation window tracked in `dispute_rounds` table
- Follow-up letters auto-scheduled if no response in 35 days

**§ 623(a) — Furnisher Accuracy Obligations**
- Dual-track disputes filed simultaneously at bureau AND furnisher when violations detected
- CFPB complaint drafts prepared for non-responsive furnishers

### Metro 2® Format Compliance
All accounts are audited against Metro 2® Credit Reporting Resource Guide (CRRG) specifications via Hyperion Agent #3, including:
- Account Status codes
- Payment Rating field accuracy
- Compliance Condition codes (XB, XC, XR, etc.)
- Date of First Delinquency accuracy
- Balance consistency

---

## 3. Fair Debt Collection Practices Act (FDCPA)
**15 U.S.C. §§ 1692 – 1692p**

### Applicability
The FDCPA applies to third-party debt collectors. We educate clients on their FDCPA rights and prepare correspondence asserting those rights.

### Key Client Rights We Enforce

**§ 809(b) — Debt Validation**
- Clients instructed to send written validation requests within 30 days of initial contact
- Validation request templates included in dispute letter library
- Failure to validate = grounds for deletion under §809(b)

**§ 807 — False or Misleading Representations**
- Dispute letters identify specific misrepresentations by collectors
- Documentation: original creditor name, amount, date — must match exactly

**§ 808 — Unfair Practices**
- Documented instances (adding fees not in original contract, etc.) included in dispute/complaint letters

**§ 805 — Communication Restrictions**
- Clients can request in writing that collectors cease contact
- Cease and desist template available in platform

### Our Limitations
We do not represent clients in legal proceedings. For FDCPA lawsuits, we recommend referring clients to a consumer law attorney (our platform includes referral suggestions).

---

## 4. CAN-SPAM Act
**15 U.S.C. §§ 7701 – 7713**

### Requirements and Our Compliance

| Requirement | Implementation |
|---|---|
| No false/misleading headers | All emails sent from support@rjbusinesssolutions.org with authenticated SPF/DKIM |
| No deceptive subject lines | Email templates reviewed for compliance |
| Identify as commercial email | All marketing emails include "This is a commercial message" footer |
| Include physical postal address | 1342 NM 333, Tijeras, NM 87059 in every email footer |
| Opt-out mechanism | Unsubscribe link in every email; processed within 10 business days |
| Honor opt-out requests | Unsubscribes logged in D1; suppression list applied to all sequences |
| No charge for opt-out | Opt-out is free and immediate |

### Penalties
Up to $51,744 per email in violation (FTC enforcement as of 2024).

---

## 5. Telephone Consumer Protection Act (TCPA)
**47 U.S.C. § 227**

### Requirements and Our Compliance

| Requirement | Implementation |
|---|---|
| Written prior express consent for autodialed/SMS | TCPA consent checkbox required at signup |
| Consent documented with timestamp and IP | Stored in clients table (`tcpa_consent_date`) |
| Time-of-day restrictions (8am–9pm local) | Twilio sending logic restricted to client's local timezone |
| Do-Not-Call list compliance | DNC check before outbound campaigns |
| Opt-out processing | STOP reply triggers immediate suppression in Twilio |

### High-Risk Operations (2026 Updates)
The FCC's 2024 one-to-one consent rule (effective Jan 2025) requires:
- Consent must be obtained separately for each company
- Pre-checked boxes for SMS consent are prohibited
- Our signup form uses unchecked opt-in boxes for SMS

### Penalties
$500–$1,500 per illegal call or text; class action exposure.

---

## 6. Gramm-Leach-Bliley Act (GLBA)
**15 U.S.C. §§ 6801 – 6827**

### Applicability
As a financial services company handling consumer financial data, GLBA applies to our operations.

### Requirements

**Privacy Notice (Reg P)**
- Annual privacy notice sent to all active clients
- Opt-out rights disclosed (we do not share data for marketing without consent)

**Safeguards Rule (Updated FTC Rule, effective 2023)**
- Designated Information Security Officer: Rick Jefferson
- Written information security plan maintained
- Risk assessment conducted annually
- Multi-factor authentication on all admin systems
- Encryption of all client financial data in transit and at rest
- Vendor oversight program (all processors must maintain security controls)
- Incident response plan documented (see `docs/Operations/incident-response.md`)
- Board-level security reporting (annual)

---

## 7. Electronic Sign in Global and National Commerce Act (E-SIGN)
**15 U.S.C. §§ 7001 – 7031**

### Compliance for Digital Contracts
All client contracts are executed digitally using compliant methods:
- Client's name, date, timestamp, and IP address recorded at contract acceptance
- CROA disclosure presented in full before signature
- Copy of signed disclosure stored in D1 and available for download
- Email confirmation of contract sent immediately after signing

---

## 8. State-Specific Compliance

### States with Credit Repair Organization Laws
The following states have additional requirements beyond CROA:

| State | Key Additional Requirements |
|---|---|
| California (CSOA) | Bond requirement; registration with CA DOJ |
| Florida | Bond required; surety bond or letter of credit |
| Texas | Bond required; registration with TX SOS |
| Georgia | Registration required; prohibited practices |
| New Mexico (our home state) | Follow federal CROA; no additional state registration currently required |

**Action Item:** Verify current registration and bond requirements in all states where clients reside. Consult with licensed attorney in each state.

---

## 9. CFPB Supervision

As a Credit Repair Organization, we may be subject to CFPB examination. Compliance posture:

- All client complaints logged in D1
- Response timeline target: 5 business days
- Escalation protocol: disputes → CFPB complaint → state AG if unresolved
- Staff trained via SOP-601, SOP-602, SOP-603
- CROA disclosure and contract templates reviewed by legal counsel annually

---

## 10. Compliance Monitoring

The platform includes an active compliance rules engine:
- `GET /api/compliance/rules` — View all active compliance rules
- `POST /api/compliance/croa-check` — Run CROA compliance check on any client action
- `GET /api/compliance/violations` — View flagged compliance events
- Audit log captures every staff action with actor, timestamp, and entity

**Annual compliance review date:** January of each year.
**Legal counsel contact:** Update with licensed credit repair attorney contact.
