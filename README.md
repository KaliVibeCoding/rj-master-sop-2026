# RJ Business Solutions — Operations Command Center 2026

**Full Autopilot System for Credit Repair Operations**

Production: https://rj-master-sop-2026.pages.dev

## System Overview

Complete operations management platform that runs your credit repair company on autopilot. 44 SOPs, 239 templates, D1 database with full operational state, and an automation engine that processes business rules automatically.

## What It Does

### Autopilot Engine (one-click)
- **Run Autopilot** button in header processes ALL 10 automation rules simultaneously
- Auto-creates workflows, tasks, and notifications based on business triggers
- Compliance checks flag expiring licenses, bonds, insurance
- Overdue dispute detection with FCRA violation flagging
- Churn risk alerting when client risk scores spike
- Speed-to-lead automation for new prospects
- Score improvement celebration notifications

### 11 Operational Tabs

| Tab | Purpose |
|-----|---------|
| **Dashboard** | Real-time KPIs, active workflows, pending tasks, notifications, audit trail |
| **Clients** | Full pipeline view (Lead→Onboarding→Active→Graduated), click-to-drilldown with disputes/workflows/tasks per client |
| **Disputes** | Bureau tracker with status filtering (pending/sent/investigating/deleted/escalated), per-bureau color coding |
| **Tasks** | Priority-sorted task queue with checkbox completion, SOP-linked, recurring task support |
| **Workflows** | SOP execution engine — click any workflow to see step-by-step progress with advance controls |
| **Compliance** | Regulatory deadline tracker — licenses, bonds, insurance, filings with countdown timers |
| **Automations** | 10 autopilot rules with live toggle, trigger configs, run counts, last-fired timestamps |
| **Team** | AI Agent roster with workload bars (Alpha=Disputes, Beta=Communication, Gamma=Compliance) |
| **KPIs** | Chart.js visualizations (client pipeline doughnut, dispute status doughnut), metric history table, snapshot generator |
| **Alerts** | Notification center with severity levels (critical/warning/info/success), mark-all-read |
| **SOPs** | Full 44-SOP library with 7 phases, search, legal changes panel, template viewer with copy/download |

## API Endpoints

### SOP Library
- `GET /api/phases` — 7 phases with SOP counts
- `GET /api/sops` — Filterable SOP list (phase, category, compliance, search)
- `GET /api/sops/:id` — Full SOP detail
- `GET /api/agent/:sopId` — Agent instructions for any SOP
- `GET /api/templates` — All 239 templates
- `GET /api/templates/:name` — Individual template content
- `GET /api/legal-changes-2026` — All 2026 regulatory changes
- `GET /api/stats` — System statistics

### Operations (D1 Database)
- `GET/POST /api/ops/clients` — Client CRUD
- `GET /api/ops/clients/:id` — Client detail with disputes, workflows, tasks, transactions
- `PUT /api/ops/clients/:id` — Update client
- `GET/POST /api/ops/disputes` — Dispute CRUD
- `PUT /api/ops/disputes/:id` — Update dispute
- `GET/POST /api/ops/workflows` — Workflow management
- `GET /api/ops/workflows/:id` — Workflow detail with steps
- `POST /api/ops/workflows/:id/advance` — Advance workflow step
- `GET/POST /api/ops/tasks` — Task management
- `PUT /api/ops/tasks/:id` — Update task
- `GET/POST /api/ops/compliance` — Compliance tracker
- `GET/POST /api/ops/notifications` — Notification system
- `PUT /api/ops/notifications/:id/read` — Mark notification read
- `GET /api/ops/team` — Team members
- `GET /api/ops/kpis` — KPI snapshots
- `GET /api/ops/dashboard` — Full dashboard summary
- `GET /api/ops/automations` — Automation rules
- `PUT /api/ops/automations/:id/toggle` — Enable/disable automation
- `GET /api/ops/audit` — Audit log
- `GET /api/ops/transactions` — Financial transactions

### Automation Engine
- `POST /api/ops/execute-sop` — Execute any SOP as a live workflow with auto-generated tasks
- `POST /api/ops/run-automations` — Run ALL active automation rules (autopilot)
- `POST /api/ops/run-compliance-check` — Check all compliance items for expiration
- `POST /api/ops/auto-assign` — Smart agent routing based on specialization + capacity
- `POST /api/ops/generate-kpi-snapshot` — Generate current KPI metrics snapshot

## Data Architecture

### D1 Database Tables (14 tables)
- `clients` — Full lifecycle tracking (lead→graduated)
- `client_documents` — Document tracking per client
- `disputes` — Individual dispute items per bureau
- `workflows` — SOP execution instances
- `workflow_steps` — Step-by-step progress within workflows
- `tasks` — Action items from SOPs/workflows
- `compliance_items` — Regulatory deadlines, licenses, insurance
- `notifications` — System alerts, reminders, escalations
- `kpi_snapshots` — Daily/weekly/monthly metric snapshots
- `audit_log` — Full traceability for every action
- `team_members` — Staff and AI agent roster
- `automations` — Cron-like triggers for autopilot
- `transactions` — Payment tracking per client

### Automation Rules (10 active)
1. New Client Auto-Onboarding (event trigger)
2. 30-Day Dispute Response Check (daily cron)
3. Monthly Client Check-Ins (monthly cron)
4. Churn Risk Alert (threshold: risk_score > 70)
5. Compliance Expiry Warning (date-based: 90 days before expiry)
6. Weekly Compliance Audit (weekly cron)
7. Score Improvement Celebration (threshold: 50+ points)
8. Overdue Task Escalation (daily cron)
9. Auto-Generate Monthly Report (monthly cron)
10. New Lead Speed-to-Lead (event trigger)

## Tech Stack
- **Backend**: Hono 4.12 on Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite at the edge)
- **Frontend**: Tailwind CSS + Chart.js + FontAwesome
- **Deployment**: Cloudflare Pages
- **Templates**: 239 full-content business templates

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: LIVE
- **Production URL**: https://rj-master-sop-2026.pages.dev
- **D1 Database**: rj-sop-operations (62b785bb-c601-4271-b7a3-ad7efc7605ae)
- **Last Updated**: 2026-04-15

## RJ Business Solutions
- 1342 NM 333, Tijeras, New Mexico 87059
- https://rjbusinesssolutions.org
- v2026.4 Operations Engine
