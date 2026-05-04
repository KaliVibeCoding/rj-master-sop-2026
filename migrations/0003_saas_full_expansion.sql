-- ============================================================
-- MIGRATION 0003: Full SaaS Expansion
-- White-label tenants, Stripe subscriptions, AI autopilot,
-- course/certification engine, bureau responses, CROA compliance
-- ============================================================

-- ---- WHITE-LABEL TENANTS ----
CREATE TABLE IF NOT EXISTS tenants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  owner_name TEXT,
  owner_email TEXT NOT NULL,
  plan TEXT NOT NULL DEFAULT 'starter' CHECK(plan IN ('starter','professional','enterprise')),
  plan_price INTEGER DEFAULT 49700,
  custom_domain TEXT,
  brand_color TEXT DEFAULT '#2563eb',
  logo_url TEXT,
  company_address TEXT,
  company_phone TEXT,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  subscription_status TEXT DEFAULT 'trialing',
  trial_ends_at TEXT,
  max_clients INTEGER DEFAULT 50,
  max_agents INTEGER DEFAULT 2,
  features TEXT DEFAULT '["sop_library","dispute_tracking","client_management"]',
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- ---- CLIENT STRIPE SUBSCRIPTIONS ----
CREATE TABLE IF NOT EXISTS client_subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  tenant_id INTEGER REFERENCES tenants(id),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT UNIQUE,
  stripe_payment_method_id TEXT,
  plan_name TEXT NOT NULL CHECK(plan_name IN ('basic','standard','premium','autopilot')),
  plan_price INTEGER NOT NULL,
  status TEXT DEFAULT 'active' CHECK(status IN ('trialing','active','past_due','canceled','unpaid','paused')),
  current_period_start TEXT,
  current_period_end TEXT,
  trial_end TEXT,
  cancel_at_period_end INTEGER DEFAULT 0,
  canceled_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- ---- STRIPE WEBHOOK EVENTS ----
CREATE TABLE IF NOT EXISTS stripe_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id TEXT UNIQUE NOT NULL,
  event_type TEXT NOT NULL,
  processed INTEGER DEFAULT 0,
  error TEXT,
  raw_json TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- ---- AI AUTOPILOT JOBS ----
CREATE TABLE IF NOT EXISTS ai_jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  tenant_id INTEGER REFERENCES tenants(id),
  job_type TEXT NOT NULL CHECK(job_type IN ('dispute_letter','report_analysis','sop_execution','full_autopilot','email_draft','sms_draft','compliance_check','lead_scoring')),
  sop_id TEXT,
  dispute_id INTEGER REFERENCES disputes(id),
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','running','completed','failed')),
  model_used TEXT DEFAULT 'openai/gpt-4o-mini',
  system_prompt TEXT,
  user_prompt TEXT,
  ai_response TEXT,
  tokens_input INTEGER DEFAULT 0,
  tokens_output INTEGER DEFAULT 0,
  cost_cents INTEGER DEFAULT 0,
  error TEXT,
  metadata TEXT,
  started_at TEXT,
  completed_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- ---- COURSE MODULES (SOP-based certification) ----
CREATE TABLE IF NOT EXISTS course_modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sop_id TEXT,
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT DEFAULT 'text' CHECK(content_type IN ('text','video','quiz','worksheet','certification')),
  content_body TEXT,
  content_url TEXT,
  duration_minutes INTEGER DEFAULT 15,
  phase INTEGER,
  category TEXT,
  prerequisites TEXT DEFAULT '[]',
  sort_order INTEGER DEFAULT 0,
  is_published INTEGER DEFAULT 1,
  is_required INTEGER DEFAULT 0,
  passing_score INTEGER DEFAULT 80,
  created_at TEXT DEFAULT (datetime('now'))
);

-- ---- COURSE ENROLLMENTS ----
CREATE TABLE IF NOT EXISTS course_enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  module_id INTEGER REFERENCES course_modules(id),
  enrolled_at TEXT DEFAULT (datetime('now')),
  started_at TEXT,
  completed_at TEXT,
  progress_pct INTEGER DEFAULT 0,
  score INTEGER,
  attempts INTEGER DEFAULT 0,
  certificate_id TEXT,
  certificate_url TEXT,
  status TEXT DEFAULT 'enrolled' CHECK(status IN ('enrolled','in_progress','completed','failed')),
  notes TEXT
);

-- ---- BUREAU RESPONSES ----
CREATE TABLE IF NOT EXISTS bureau_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  dispute_id INTEGER REFERENCES disputes(id),
  bureau TEXT NOT NULL CHECK(bureau IN ('equifax','transunion','experian')),
  response_type TEXT CHECK(response_type IN ('deleted','verified','updated','no_response','stale')),
  response_date TEXT,
  received_date TEXT DEFAULT (datetime('now')),
  items_deleted INTEGER DEFAULT 0,
  items_verified INTEGER DEFAULT 0,
  items_updated INTEGER DEFAULT 0,
  tracking_number TEXT,
  response_method TEXT CHECK(response_method IN ('mail','portal','phone','fax')),
  raw_response TEXT,
  next_action TEXT,
  sop_triggered TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- ---- COMPLIANCE AUDITS (CROA / FCRA) ----
CREATE TABLE IF NOT EXISTS compliance_audits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  tenant_id INTEGER REFERENCES tenants(id),
  action_type TEXT NOT NULL,
  law TEXT DEFAULT 'CROA' CHECK(law IN ('CROA','FCRA','FDCPA','ECOA','TILA','state')),
  section_reference TEXT,
  compliant INTEGER DEFAULT 1,
  risk_level TEXT DEFAULT 'low' CHECK(risk_level IN ('low','medium','high','critical')),
  notes TEXT,
  remediation TEXT,
  checked_by TEXT DEFAULT 'system',
  checked_at TEXT DEFAULT (datetime('now'))
);

-- ---- LEAD SCORES ----
CREATE TABLE IF NOT EXISTS lead_scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER REFERENCES clients(id),
  score INTEGER NOT NULL DEFAULT 0,
  grade TEXT CHECK(grade IN ('A','B','C','D','F')),
  factors TEXT,
  predicted_ltv INTEGER DEFAULT 0,
  predicted_plan TEXT,
  likelihood_to_close_pct INTEGER DEFAULT 0,
  scored_by TEXT DEFAULT 'ai',
  scored_at TEXT DEFAULT (datetime('now'))
);

-- ---- AFFILIATE REFERRALS ----
CREATE TABLE IF NOT EXISTS affiliates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  referral_code TEXT UNIQUE NOT NULL,
  commission_pct INTEGER DEFAULT 20,
  total_referrals INTEGER DEFAULT 0,
  total_earned_cents INTEGER DEFAULT 0,
  total_paid_cents INTEGER DEFAULT 0,
  stripe_account_id TEXT,
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS referrals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  affiliate_id INTEGER REFERENCES affiliates(id),
  client_id INTEGER REFERENCES clients(id),
  referral_code TEXT,
  source_url TEXT,
  commission_pct INTEGER DEFAULT 20,
  commission_cents INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','qualified','paid','clawed_back')),
  qualified_at TEXT,
  paid_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- ---- INDEXES ----
CREATE INDEX IF NOT EXISTS idx_tenants_slug ON tenants(slug);
CREATE INDEX IF NOT EXISTS idx_tenants_owner ON tenants(owner_email);
CREATE INDEX IF NOT EXISTS idx_client_subs_client ON client_subscriptions(client_id);
CREATE INDEX IF NOT EXISTS idx_client_subs_stripe ON client_subscriptions(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_stripe_events_id ON stripe_events(event_id);
CREATE INDEX IF NOT EXISTS idx_ai_jobs_client ON ai_jobs(client_id);
CREATE INDEX IF NOT EXISTS idx_ai_jobs_status ON ai_jobs(status);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_client ON course_enrollments(client_id);
CREATE INDEX IF NOT EXISTS idx_bureau_responses_client ON bureau_responses(client_id);
CREATE INDEX IF NOT EXISTS idx_bureau_responses_dispute ON bureau_responses(dispute_id);
CREATE INDEX IF NOT EXISTS idx_compliance_audits_client ON compliance_audits(client_id);
CREATE INDEX IF NOT EXISTS idx_lead_scores_client ON lead_scores(client_id);
CREATE INDEX IF NOT EXISTS idx_referrals_affiliate ON referrals(affiliate_id);
CREATE INDEX IF NOT EXISTS idx_referrals_code ON referrals(referral_code);
