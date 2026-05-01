-- ═══════════════════════════════════════════════════════════════
-- RJ BUSINESS SOLUTIONS — MFSN Credit Report Storage
-- Migration: 0002_mfsn_credit_reports
-- Stores 3-bureau credit report data from MyFreeScoreNow API
-- ═══════════════════════════════════════════════════════════════

-- Credit report pulls — one row per 3B fetch
CREATE TABLE IF NOT EXISTS credit_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  mfsn_member_email TEXT,
  report_type TEXT DEFAULT 'US_3B' CHECK(report_type IN ('US_3B', 'US_EFX')),
  pull_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  -- Scores per bureau
  score_efx INTEGER,
  score_tu INTEGER,
  score_exp INTEGER,
  -- Report metadata
  efx_report_id TEXT,
  tu_report_id TEXT,
  exp_report_id TEXT,
  efx_freeze_flag BOOLEAN DEFAULT 0,
  tu_freeze_flag BOOLEAN DEFAULT 0,
  exp_freeze_flag BOOLEAN DEFAULT 0,
  -- Summary counts
  total_accounts INTEGER DEFAULT 0,
  total_open_accounts INTEGER DEFAULT 0,
  total_negative_accounts INTEGER DEFAULT 0,
  total_inquiries INTEGER DEFAULT 0,
  total_public_records INTEGER DEFAULT 0,
  total_collections INTEGER DEFAULT 0,
  -- History
  credit_history_months INTEGER DEFAULT 0,
  avg_account_age_months INTEGER DEFAULT 0,
  oldest_account_date TEXT,
  oldest_account_name TEXT,
  newest_account_date TEXT,
  newest_account_name TEXT,
  -- Raw JSON (full provider views stored for analysis)
  raw_response_json TEXT,
  -- Audit
  pulled_by TEXT DEFAULT 'system',
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'archived', 'error')),
  error_message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Individual accounts from credit reports
CREATE TABLE IF NOT EXISTS credit_report_accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  credit_report_id INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  provider TEXT NOT NULL CHECK(provider IN ('EFX', 'TU', 'EXP', 'UNKNOWN')),
  account_name TEXT,
  account_number TEXT,
  account_status TEXT,
  account_open BOOLEAN DEFAULT 1,
  account_type TEXT,
  loan_type TEXT,
  date_opened TEXT,
  date_reported TEXT,
  date_closed TEXT,
  -- Amounts (stored as cents for precision)
  balance_amount INTEGER DEFAULT 0,
  credit_limit_amount INTEGER DEFAULT 0,
  high_credit_amount INTEGER DEFAULT 0,
  monthly_payment INTEGER DEFAULT 0,
  past_due_amount INTEGER DEFAULT 0,
  charge_off_amount INTEGER DEFAULT 0,
  -- Payment history
  payment_status TEXT,
  worst_payment_status TEXT,
  times_30_days_late INTEGER DEFAULT 0,
  times_60_days_late INTEGER DEFAULT 0,
  times_90_days_late INTEGER DEFAULT 0,
  -- Dispute tracking
  is_disputed BOOLEAN DEFAULT 0,
  dispute_id INTEGER,
  -- Contact info
  creditor_phone TEXT,
  creditor_address TEXT,
  -- Raw JSON for this account
  raw_account_json TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (credit_report_id) REFERENCES credit_reports(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Score history for tracking progress
CREATE TABLE IF NOT EXISTS credit_score_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  credit_report_id INTEGER,
  score_efx INTEGER,
  score_tu INTEGER,
  score_exp INTEGER,
  score_avg INTEGER,
  recorded_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  source TEXT DEFAULT 'mfsn' CHECK(source IN ('mfsn', 'manual', 'monitoring')),
  notes TEXT,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Communication log for Twilio + Email tracking
CREATE TABLE IF NOT EXISTS communications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER,
  channel TEXT NOT NULL CHECK(channel IN ('sms', 'voice', 'email', 'whatsapp')),
  direction TEXT NOT NULL CHECK(direction IN ('outbound', 'inbound')),
  provider TEXT NOT NULL CHECK(provider IN ('twilio', 'sendgrid', 'resend', 'cloudflare')),
  from_address TEXT,
  to_address TEXT,
  subject TEXT,
  body TEXT,
  status TEXT DEFAULT 'sent' CHECK(status IN ('queued', 'sent', 'delivered', 'failed', 'bounced', 'opened', 'clicked')),
  external_id TEXT,
  template_name TEXT,
  sop_id TEXT,
  error_message TEXT,
  metadata TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_credit_reports_client ON credit_reports(client_id);
CREATE INDEX IF NOT EXISTS idx_credit_reports_date ON credit_reports(pull_date);
CREATE INDEX IF NOT EXISTS idx_credit_report_accounts_report ON credit_report_accounts(credit_report_id);
CREATE INDEX IF NOT EXISTS idx_credit_report_accounts_client ON credit_report_accounts(client_id);
CREATE INDEX IF NOT EXISTS idx_credit_score_history_client ON credit_score_history(client_id);
CREATE INDEX IF NOT EXISTS idx_communications_client ON communications(client_id);
CREATE INDEX IF NOT EXISTS idx_communications_channel ON communications(channel);
