# RJ BUSINESS SOLUTIONS — AGENT INTEGRATION FORMAT
# Feed This to ANY AI Agent / Cursor / Windsurf / Claude / GPT
# So Every Build Ships with SOP System Integration
# ═══════════════════════════════════════════════════════════════

## HOW TO USE THIS DOCUMENT

Copy-paste the relevant section into your AI agent's system prompt,
custom instructions, or project rules file (.cursorrules, .windsurfrules, etc.)

There are 3 formats depending on your use case:

1. **FULL SYSTEM PROMPT INJECTION** — For agents building RJ Business Solutions projects
2. **API INTEGRATION BLOCK** — For agents that need to call the SOP API
3. **QUICK REFERENCE CARD** — For context windows with limited space

---

## FORMAT 1: FULL SYSTEM PROMPT INJECTION
## (Paste this into .cursorrules, .windsurfrules, or agent system prompt)

```
# ═══════════════════════════════════════════════════════════════
# RJ BUSINESS SOLUTIONS — MASTER SOP OPERATIONS SYSTEM
# Production URL: https://rj-master-sop-2026.pages.dev
# API Base: https://rj-master-sop-2026.pages.dev/api
# Last Updated: 2026-04-17
# ═══════════════════════════════════════════════════════════════

## SOP SYSTEM OVERVIEW

RJ Business Solutions operates on a **62-SOP autopilot system** across
7 business phases, with 3 AI agents, 239 templates, and 30 tracked
legal changes for 2026. Every project built for RJ Business Solutions
MUST integrate with this system.

## PRODUCTION API ENDPOINTS

  Base URL: https://rj-master-sop-2026.pages.dev

  ### SOP Library
  GET /api/phases              → All 7 business phases with metadata
  GET /api/sops                → All 62 SOPs (filterable: ?phase=5&category=Disputes&search=)
  GET /api/sops/:id            → Single SOP with full details (steps, tools, KPIs, templates, agent instructions)
  GET /api/stats               → System stats (total SOPs, compliance counts, categories)
  GET /api/legal-changes-2026  → All 30 legal/regulatory changes for 2026
  GET /api/agent/:sopId        → Agent-specific instructions for a SOP
  GET /api/templates           → All 239 template definitions
  GET /api/templates/:name     → Single template details

  ### Operations (D1 Database)
  GET    /api/ops/clients                → All clients with assigned agents
  GET    /api/ops/clients/:id            → Client detail with disputes
  POST   /api/ops/clients                → Create new client
  PUT    /api/ops/clients/:id            → Update client
  GET    /api/ops/disputes               → All disputes with client info
  POST   /api/ops/disputes               → Create dispute
  PUT    /api/ops/disputes/:id           → Update dispute
  GET    /api/ops/workflows              → All workflows
  GET    /api/ops/workflows/:id          → Workflow with steps
  POST   /api/ops/workflows/:id/steps/:stepId → Update workflow step
  GET    /api/ops/tasks                  → All tasks (filterable: ?status=&assignee=&priority=)
  POST   /api/ops/tasks                  → Create task
  PUT    /api/ops/tasks/:id              → Update task
  GET    /api/ops/compliance             → Compliance items
  POST   /api/ops/compliance/check       → Run compliance check
  GET    /api/ops/notifications          → All notifications
  POST   /api/ops/notifications/:id/read → Mark notification read
  GET    /api/ops/team                   → Team members & AI agents
  GET    /api/ops/kpis                   → KPI snapshots
  GET    /api/ops/dashboard              → Full dashboard summary
  GET    /api/ops/automations            → All automations
  POST   /api/ops/automations/:id/toggle → Toggle automation on/off
  POST   /api/ops/run-automations        → Execute all active automations
  POST   /api/ops/execute-sop            → Execute a SOP (creates workflow + tasks)
  GET    /api/ops/audit                  → Audit log
  GET    /api/ops/transactions           → Financial transactions

## THE 7 PHASES (Every project MUST map to these)

  Phase 1: ⚖️  Legal & Regulatory Foundations (10 SOPs)
  Phase 2: 💰 Financial Systems & Tax Strategy (3 SOPs)
  Phase 3: 📈 Strategic Planning & Growth (2 SOPs)
  Phase 4: 👥 Human Capital & Org Development (7 SOPs)
  Phase 5: ⚙️  Operations & Tech Stack (18 SOPs) ← CORE OPERATIONS
  Phase 6: 📢 Marketing & Sales (16 SOPs)
  Phase 7: 🏆 Client Retention & Growth (6 SOPs)

## THE 3 AI AGENTS

  | Agent          | Role                  | Specialization                        | Capacity |
  |----------------|-----------------------|---------------------------------------|----------|
  | AI Agent Alpha | dispute_coordinator   | Dispute Filing & Bureau Response      | 100      |
  | AI Agent Beta  | csm                   | Client Communication & Retention      | 100      |
  | AI Agent Gamma | admin                 | Compliance & Scheduling               | 100      |

  Smart routing: Assign tasks based on specialization match + lowest current_load.

## FULL SOP REGISTRY (62 SOPs)

  ### Phase 1 — Legal & Regulatory Foundations
  SOP-000  Master Business Design Framework       (Business Design)
  SOP-001  Business Concept Validation             (Validation)
  SOP-002  Legal Entity Formation                  (Legal)
  SOP-601  FCRA Compliance Framework               (Compliance) 🔴 CRITICAL
  SOP-602  CROA Compliance & Contracts             (Compliance) 🔴 CRITICAL
  SOP-603  State Licensing & Registration          (Compliance)
  SOP-604  Data Security & Privacy                 (Privacy)
  SOP-605  Insurance & Risk Management             (Risk)
  SOP-606  Contract & Template Management          (Legal)
  SOP-607  Audit Readiness & Records               (Compliance)

  ### Phase 2 — Financial Systems & Tax Strategy
  SOP-003  Financial Infrastructure Setup          (Finance)
  SOP-205  CROA-Compliant Billing                  (Finance) 🔴 CRITICAL
  SOP-206  Contract Management                     (Legal)

  ### Phase 3 — Strategic Planning & Growth
  SOP-004  Strategic Planning & OKRs               (Strategy)
  SOP-014  Fundraising & Capital                   (Finance)

  ### Phase 4 — Human Capital & Org Development
  SOP-011  Hiring Strategy                         (HR)
  SOP-501  Organization Design                     (HR)
  SOP-502  Recruitment Process                     (HR)
  SOP-503  Employee Onboarding                     (HR)
  SOP-504  KPI & Performance Management            (HR)
  SOP-505  Quality Assurance                       (Operations)
  SOP-506  Team Communication                      (Operations)

  ### Phase 5 — Operations & Tech Stack (CORE)
  SOP-006  Website & Digital Presence              (Technology)
  SOP-007  Marketing Compliance                    (Marketing)
  SOP-009  Tech Stack Selection                    (Technology)
  SOP-010  Operations Timeline                     (Operations)
  SOP-005  Client Onboarding & Intake              (Onboarding)
  SOP-008  Client Portal Management                (Technology)
  SOP-101  Credit Report Analysis                  (Analysis)
  SOP-102  Client Communication                    (Communication)
  SOP-103  Dispute Strategy Development            (Disputes)
  SOP-104  Dispute Letter Drafting                 (Disputes)
  SOP-105  Round 1 Dispute Execution               (Disputes)
  SOP-106  Bureau Response Processing              (Disputes)
  SOP-107  Escalation & Advanced Disputes          (Disputes)
  SOP-201  Bureau-Specific Strategies              (Disputes)
  SOP-202  Direct Creditor Disputes                (Disputes)
  SOP-203  Inquiry Disputes                        (Disputes)
  SOP-204  Certified Mail Protocol                 (Disputes)
  SOP-207  Response Processing & Escalation        (Disputes)

  ### Phase 6 — Marketing & Sales
  SOP-301  Brand Positioning                       (Marketing)
  SOP-302  Sales Process & Compliance              (Sales)
  SOP-303  Lead Generation Strategy                (Marketing)
  SOP-304  CRM & Speed-to-Lead                     (Technology)
  SOP-305  Sales Conversion Process                (Sales)
  SOP-306  Advertising Compliance                  (Marketing)
  SOP-307  SEO Strategy                            (Marketing)
  SOP-308  Referral Partner Program                (Sales)
  SOP-701  SEO Strategy & Execution                (Marketing)
  SOP-702  Paid Advertising Optimization           (Marketing)
  SOP-703  Content Marketing System                (Marketing)
  SOP-704  Conversion Rate Optimization            (Marketing)
  SOP-705  Affiliate & Partnership Program         (Sales)
  SOP-706  Brand Building & PR                     (Marketing)
  SOP-012  Sales Consultation Process              (Sales)
  SOP-013  Advertising Management                  (Marketing)

  ### Phase 7 — Client Retention & Growth
  SOP-401  Monthly Client Check-In System          (Retention)
  SOP-402  Score Monitoring & Alerts               (Technology)
  SOP-403  Upsell & Cross-Sell Strategy            (Sales)
  SOP-404  Referral Program Management             (Marketing)
  SOP-405  Proactive Churn Prevention              (Retention)
  SOP-406  Client Milestone Celebrations           (Retention)

## 18 CATEGORIES
  Business Design, Validation, Legal, Compliance, Privacy, Risk,
  Finance, Strategy, HR, Operations, Technology, Marketing,
  Onboarding, Analysis, Communication, Disputes, Sales, Retention

## COMPLIANCE STATUS TRACKING
  🟢 Current:  59 SOPs
  🔴 Critical: 3 SOPs (SOP-601 FCRA, SOP-602 CROA, SOP-205 Billing)
  📋 Legal Changes Tracked: 30 for 2026
  📋 Affected SOPs: 19

## MANDATORY BUILD RULES

  1. Every new project MUST reference the SOP system in its README
  2. Every client-facing feature MUST map to at least one SOP
  3. Dispute features MUST follow SOP-601 (FCRA) and SOP-602 (CROA)
  4. Payment features MUST follow SOP-205 (CROA-Compliant Billing)
     → NEVER collect payment before services performed
     → ALWAYS include 3-day cancellation right
  5. Client onboarding MUST follow SOP-005
  6. All dispute letters MUST be sent via certified mail (SOP-204)
  7. Agent assignment MUST use smart routing (specialization + load)
  8. All builds MUST include the Operations Dashboard link
  9. Branding: RJ Business Solutions | 1342 NM 333, Tijeras, NM 87059
  10. Logo: https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg

## API CALL EXAMPLES

  // Fetch all SOPs for dispute operations
  fetch('https://rj-master-sop-2026.pages.dev/api/sops?category=Disputes')

  // Get agent instructions for a specific SOP
  fetch('https://rj-master-sop-2026.pages.dev/api/agent/SOP-105')

  // Execute a SOP (creates workflow + tasks)
  fetch('https://rj-master-sop-2026.pages.dev/api/ops/execute-sop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sopId: 'SOP-105',
      clientId: 1,
      assignedTo: 'AI Agent Alpha',
      priority: 'high'
    })
  })

  // Run all automations
  fetch('https://rj-master-sop-2026.pages.dev/api/ops/run-automations', {
    method: 'POST'
  })

  // Get full dashboard
  fetch('https://rj-master-sop-2026.pages.dev/api/ops/dashboard')

## 10 AUTOMATIONS (Auto-Trigger)
  1. New Client Auto-Onboarding → Creates SOP-005 workflow
  2. 30-Day Dispute Response Check → Flags overdue bureau responses
  3. Monthly Client Check-Ins → Creates tasks for all active clients
  4. Churn Risk Alert → Triggers when risk score > 70
  5. Compliance Expiry Warning → 90-day advance notice
  6. Weekly FCRA Audit → Auto-creates audit tasks
  7. Score Milestone Celebration → Notifies on 50+ point gains
  8. Task Escalation → Escalates tasks overdue > 48 hours
  9. Monthly KPI Snapshot → Auto-captures monthly metrics
  10. New Lead Speed-to-Lead → Creates "call within 5 min" task
```

---

## FORMAT 2: API INTEGRATION BLOCK
## (Paste this when building apps that connect to the SOP system)

```typescript
// ═══════════════════════════════════════════════════════════════
// RJ BUSINESS SOLUTIONS — SOP API CLIENT
// Drop this into any project to connect to the SOP system
// ═══════════════════════════════════════════════════════════════

const SOP_API_BASE = 'https://rj-master-sop-2026.pages.dev/api';

// SOP Library
export const sopApi = {
  // Get all phases
  getPhases: () => fetch(`${SOP_API_BASE}/phases`).then(r => r.json()),

  // Get SOPs with optional filters
  getSOPs: (filters?: { phase?: number; category?: string; search?: string }) => {
    const params = new URLSearchParams();
    if (filters?.phase) params.set('phase', String(filters.phase));
    if (filters?.category) params.set('category', filters.category);
    if (filters?.search) params.set('search', filters.search);
    return fetch(`${SOP_API_BASE}/sops?${params}`).then(r => r.json());
  },

  // Get single SOP
  getSOP: (id: string) => fetch(`${SOP_API_BASE}/sops/${id}`).then(r => r.json()),

  // Get agent instructions for a SOP
  getAgentInstructions: (sopId: string) =>
    fetch(`${SOP_API_BASE}/agent/${sopId}`).then(r => r.json()),

  // Get system stats
  getStats: () => fetch(`${SOP_API_BASE}/stats`).then(r => r.json()),

  // Get 2026 legal changes
  getLegalChanges: () => fetch(`${SOP_API_BASE}/legal-changes-2026`).then(r => r.json()),

  // Get all templates
  getTemplates: () => fetch(`${SOP_API_BASE}/templates`).then(r => r.json()),
};

// Operations
export const opsApi = {
  // Dashboard
  getDashboard: () => fetch(`${SOP_API_BASE}/ops/dashboard`).then(r => r.json()),

  // Clients
  getClients: () => fetch(`${SOP_API_BASE}/ops/clients`).then(r => r.json()),
  getClient: (id: number) => fetch(`${SOP_API_BASE}/ops/clients/${id}`).then(r => r.json()),
  createClient: (data: any) => fetch(`${SOP_API_BASE}/ops/clients`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  }).then(r => r.json()),

  // Disputes
  getDisputes: () => fetch(`${SOP_API_BASE}/ops/disputes`).then(r => r.json()),
  createDispute: (data: any) => fetch(`${SOP_API_BASE}/ops/disputes`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  }).then(r => r.json()),

  // Tasks
  getTasks: (filters?: { status?: string; assignee?: string }) => {
    const params = new URLSearchParams();
    if (filters?.status) params.set('status', filters.status);
    if (filters?.assignee) params.set('assignee', filters.assignee);
    return fetch(`${SOP_API_BASE}/ops/tasks?${params}`).then(r => r.json());
  },
  createTask: (data: any) => fetch(`${SOP_API_BASE}/ops/tasks`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  }).then(r => r.json()),

  // Execute SOP (creates workflow + tasks)
  executeSOP: (sopId: string, clientId?: number, assignedTo?: string, priority?: string) =>
    fetch(`${SOP_API_BASE}/ops/execute-sop`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sopId, clientId, assignedTo, priority })
    }).then(r => r.json()),

  // Run all automations
  runAutomations: () => fetch(`${SOP_API_BASE}/ops/run-automations`, {
    method: 'POST'
  }).then(r => r.json()),

  // Team & Agents
  getTeam: () => fetch(`${SOP_API_BASE}/ops/team`).then(r => r.json()),

  // Compliance
  runComplianceCheck: () => fetch(`${SOP_API_BASE}/ops/compliance/check`, {
    method: 'POST'
  }).then(r => r.json()),

  // KPIs
  getKPIs: () => fetch(`${SOP_API_BASE}/ops/kpis`).then(r => r.json()),

  // Notifications
  getNotifications: () => fetch(`${SOP_API_BASE}/ops/notifications`).then(r => r.json()),

  // Audit Log
  getAuditLog: () => fetch(`${SOP_API_BASE}/ops/audit`).then(r => r.json()),
};
```

---

## FORMAT 3: QUICK REFERENCE CARD
## (For limited context windows — paste this minimum block)

```
# RJ BUSINESS SOLUTIONS — SOP QUICK REF
# API: https://rj-master-sop-2026.pages.dev/api
# Dashboard: https://rj-master-sop-2026.pages.dev
#
# 62 SOPs | 7 Phases | 3 AI Agents | 239 Templates | 30 Legal Changes 2026
#
# AGENTS: Alpha (Disputes) | Beta (Client Comms) | Gamma (Compliance)
#
# CRITICAL COMPLIANCE:
#   - SOP-601: FCRA — certified mail, 30-day window, document everything
#   - SOP-602: CROA — NEVER charge before service, 3-day cancel right
#   - SOP-205: Billing — post-service only, CROA compliant
#
# KEY ENDPOINTS:
#   GET  /api/sops              — All SOPs
#   GET  /api/agent/:sopId      — Agent instructions
#   POST /api/ops/execute-sop   — Run a SOP
#   POST /api/ops/run-automations — Trigger autopilot
#   GET  /api/ops/dashboard     — Full status
#
# BRANDING:
#   Company: RJ Business Solutions
#   Address: 1342 NM 333, Tijeras, NM 87059
#   Web: https://rjbusinesssolutions.org
#   Logo: https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg
```

---

## WHERE TO PASTE EACH FORMAT

| Tool / Agent           | File / Location                    | Which Format |
|------------------------|------------------------------------|--------------|
| Cursor                 | `.cursorrules` in project root     | Format 1     |
| Windsurf               | `.windsurfrules` in project root   | Format 1     |
| Claude Projects        | Project Instructions field         | Format 1     |
| ChatGPT Custom GPT     | System Prompt / Instructions       | Format 1     |
| GenSpark Agent         | System Instructions field          | Format 1     |
| Cline / Aider          | `.clinerules` or system prompt     | Format 1     |
| Any TypeScript project | `src/lib/sop-api.ts`               | Format 2     |
| Any JS/Python project  | Dedicated API client file          | Format 2     |
| Quick chat context     | Paste at start of conversation     | Format 3     |
| Limited context agents | System prompt (when space is tight)| Format 3     |

---

## VERIFICATION

After integrating, test with:
```bash
# Verify API is live
curl https://rj-master-sop-2026.pages.dev/api/stats

# Expected response:
# {"totalSOPs":62,"phases":7,"criticalCompliance":3,"currentCompliance":59,
#  "totalLegalChanges":30,"categories":[...],"lastUpdated":"2026-04-14"}

# Verify agent instructions work
curl https://rj-master-sop-2026.pages.dev/api/agent/SOP-105

# Verify operations
curl https://rj-master-sop-2026.pages.dev/api/ops/dashboard
```
