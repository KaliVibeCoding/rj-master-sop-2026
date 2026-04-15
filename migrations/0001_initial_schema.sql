-- ============================================================
-- RJ BUSINESS SOLUTIONS — MASTER SOP 2026 OPERATIONS DATABASE
-- Full autopilot operational state management
-- ============================================================

-- CLIENTS: Full client lifecycle tracking
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  status TEXT NOT NULL DEFAULT 'lead' CHECK(status IN ('lead','onboarding','active','paused','graduated','cancelled')),
  credit_score_start INTEGER,
  credit_score_current INTEGER,
  credit_score_goal INTEGER,
  source TEXT DEFAULT 'direct',
  assigned_agent TEXT,
  onboarding_date TEXT,
  graduation_date TEXT,
  monthly_fee REAL DEFAULT 0,
  total_paid REAL DEFAULT 0,
  notes TEXT,
  risk_score INTEGER DEFAULT 0 CHECK(risk_score BETWEEN 0 AND 100),
  last_contact_date TEXT,
  next_contact_date TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- CLIENT DOCUMENTS: Track uploaded/generated docs per client
CREATE TABLE IF NOT EXISTS client_documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  document_type TEXT NOT NULL,
  document_name TEXT NOT NULL,
  template_used TEXT,
  status TEXT DEFAULT 'draft' CHECK(status IN ('draft','sent','received','filed','archived')),
  sent_date TEXT,
  tracking_number TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- DISPUTES: Individual dispute items per client
CREATE TABLE IF NOT EXISTS disputes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  bureau TEXT NOT NULL CHECK(bureau IN ('experian','equifax','transunion')),
  account_name TEXT NOT NULL,
  account_number TEXT,
  dispute_reason TEXT NOT NULL,
  dispute_round INTEGER DEFAULT 1,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','drafted','sent','investigating','deleted','verified','escalated')),
  fcra_section TEXT,
  letter_template TEXT,
  sent_date TEXT,
  response_due_date TEXT,
  response_date TEXT,
  result TEXT,
  tracking_number TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- WORKFLOWS: SOP execution instances — tracks running autopilot workflows
CREATE TABLE IF NOT EXISTS workflows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sop_id TEXT NOT NULL,
  sop_title TEXT NOT NULL,
  client_id INTEGER,
  assigned_to TEXT,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','running','paused','completed','failed','cancelled')),
  priority TEXT DEFAULT 'normal' CHECK(priority IN ('critical','high','normal','low')),
  trigger_type TEXT DEFAULT 'manual' CHECK(trigger_type IN ('manual','scheduled','event','auto')),
  current_step INTEGER DEFAULT 0,
  total_steps INTEGER DEFAULT 0,
  started_at TEXT,
  completed_at TEXT,
  due_date TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- WORKFLOW STEPS: Individual step execution within a workflow
CREATE TABLE IF NOT EXISTS workflow_steps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  workflow_id INTEGER NOT NULL,
  step_number INTEGER NOT NULL,
  step_description TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','in_progress','completed','skipped','failed','blocked')),
  assigned_to TEXT,
  started_at TEXT,
  completed_at TEXT,
  completion_notes TEXT,
  blockers TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (workflow_id) REFERENCES workflows(id) ON DELETE CASCADE
);

-- TASKS: Action items generated from SOPs, workflows, or manual creation
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  sop_id TEXT,
  workflow_id INTEGER,
  client_id INTEGER,
  assigned_to TEXT,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','in_progress','completed','overdue','cancelled')),
  priority TEXT DEFAULT 'normal' CHECK(priority IN ('critical','high','normal','low')),
  category TEXT,
  due_date TEXT,
  completed_at TEXT,
  recurrence TEXT CHECK(recurrence IN (NULL,'daily','weekly','biweekly','monthly','quarterly','annually')),
  next_recurrence_date TEXT,
  parent_task_id INTEGER,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (workflow_id) REFERENCES workflows(id) ON DELETE SET NULL,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL,
  FOREIGN KEY (parent_task_id) REFERENCES tasks(id) ON DELETE SET NULL
);

-- COMPLIANCE TRACKER: Regulatory deadlines, license renewals, audit schedules
CREATE TABLE IF NOT EXISTS compliance_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  sop_id TEXT,
  category TEXT NOT NULL CHECK(category IN ('license','registration','filing','audit','insurance','bond','training','report','renewal','legal')),
  jurisdiction TEXT,
  status TEXT DEFAULT 'active' CHECK(status IN ('active','expiring_soon','expired','renewed','not_applicable')),
  effective_date TEXT,
  expiration_date TEXT,
  renewal_date TEXT,
  reminder_days_before INTEGER DEFAULT 90,
  last_audit_date TEXT,
  next_audit_date TEXT,
  responsible_party TEXT,
  cost REAL,
  notes TEXT,
  auto_renew INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- NOTIFICATIONS: System-generated alerts, reminders, escalations
CREATE TABLE IF NOT EXISTS notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipient TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('alert','reminder','escalation','milestone','compliance','task','workflow','system')),
  channel TEXT DEFAULT 'in_app' CHECK(channel IN ('in_app','email','sms','all')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  severity TEXT DEFAULT 'info' CHECK(severity IN ('info','warning','critical','success')),
  related_type TEXT,
  related_id INTEGER,
  read_at TEXT,
  sent_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- KPI SNAPSHOTS: Daily/weekly/monthly metric snapshots for dashboards
CREATE TABLE IF NOT EXISTS kpi_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  period_type TEXT NOT NULL CHECK(period_type IN ('daily','weekly','monthly')),
  period_date TEXT NOT NULL,
  metric_name TEXT NOT NULL,
  metric_value REAL NOT NULL,
  metric_unit TEXT,
  sop_id TEXT,
  category TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- AUDIT LOG: Every action, every change, full traceability
CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor TEXT NOT NULL DEFAULT 'system',
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id INTEGER,
  details TEXT,
  ip_address TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- TEAM MEMBERS: Staff/agent roster
CREATE TABLE IF NOT EXISTS team_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('owner','manager','dispute_coordinator','csm','sdr','admin','contractor')),
  status TEXT DEFAULT 'active' CHECK(status IN ('active','inactive','onboarding','terminated')),
  hire_date TEXT,
  phone TEXT,
  capacity INTEGER DEFAULT 25,
  current_load INTEGER DEFAULT 0,
  specialization TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- SCHEDULED AUTOMATIONS: Cron-like triggers that fire SOP workflows
CREATE TABLE IF NOT EXISTS automations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  sop_id TEXT NOT NULL,
  trigger_type TEXT NOT NULL CHECK(trigger_type IN ('schedule','event','threshold','date_based')),
  trigger_config TEXT NOT NULL,
  action_type TEXT NOT NULL CHECK(action_type IN ('create_workflow','create_task','send_notification','update_status','generate_report')),
  action_config TEXT NOT NULL,
  is_active INTEGER DEFAULT 1,
  last_triggered TEXT,
  next_trigger TEXT,
  run_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- FINANCIAL TRANSACTIONS: Payment tracking per client
CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('payment','refund','adjustment','fee')),
  amount REAL NOT NULL,
  status TEXT DEFAULT 'completed' CHECK(status IN ('pending','completed','failed','refunded')),
  method TEXT CHECK(method IN ('stripe','cash','check','other')),
  description TEXT,
  invoice_number TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- INDEXES for performance
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);
CREATE INDEX IF NOT EXISTS idx_clients_assigned ON clients(assigned_agent);
CREATE INDEX IF NOT EXISTS idx_disputes_client ON disputes(client_id);
CREATE INDEX IF NOT EXISTS idx_disputes_status ON disputes(status);
CREATE INDEX IF NOT EXISTS idx_disputes_bureau ON disputes(bureau);
CREATE INDEX IF NOT EXISTS idx_workflows_status ON workflows(status);
CREATE INDEX IF NOT EXISTS idx_workflows_sop ON workflows(sop_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_due ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned ON tasks(assigned_to);
CREATE INDEX IF NOT EXISTS idx_compliance_expiry ON compliance_items(expiration_date);
CREATE INDEX IF NOT EXISTS idx_compliance_status ON compliance_items(status);
CREATE INDEX IF NOT EXISTS idx_notifications_recipient ON notifications(recipient);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(read_at);
CREATE INDEX IF NOT EXISTS idx_kpi_period ON kpi_snapshots(period_type, period_date);
CREATE INDEX IF NOT EXISTS idx_audit_entity ON audit_log(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_audit_actor ON audit_log(actor);
CREATE INDEX IF NOT EXISTS idx_automations_active ON automations(is_active);
CREATE INDEX IF NOT EXISTS idx_transactions_client ON transactions(client_id);
