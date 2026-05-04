-- ═══════════════════════════════════════════════════════════════
-- RJ BUSINESS SOLUTIONS — MFSN Full Integration Expansion
-- Migration: 0005_mfsn_full
-- Adds: MFSN token storage, hard inquiries, public records tables
-- ═══════════════════════════════════════════════════════════════

-- Store MFSN member credentials per client (so we can refresh without re-entering)
CREATE TABLE IF NOT EXISTS mfsn_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL UNIQUE,
  mfsn_email TEXT NOT NULL,
  mfsn_token TEXT NOT NULL,
  last_pull_date DATETIME,
  total_pulls INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Hard inquiries from credit reports (per bureau)
CREATE TABLE IF NOT EXISTS credit_report_inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  credit_report_id INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  provider TEXT NOT NULL CHECK(provider IN ('EFX', 'TU', 'EXP', 'UNKNOWN')),
  inquirer_name TEXT,
  inquiry_date TEXT,
  inquiry_type TEXT DEFAULT 'hard' CHECK(inquiry_type IN ('hard', 'soft', 'unknown')),
  inquiry_purpose TEXT,
  industry_code TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (credit_report_id) REFERENCES credit_reports(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Public records from credit reports (bankruptcies, liens, judgments)
CREATE TABLE IF NOT EXISTS credit_report_public_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  credit_report_id INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  provider TEXT NOT NULL CHECK(provider IN ('EFX', 'TU', 'EXP', 'UNKNOWN')),
  record_type TEXT,
  court_name TEXT,
  filing_date TEXT,
  status TEXT,
  satisfied_date TEXT,
  amount INTEGER DEFAULT 0,
  reference_number TEXT,
  plaintiff TEXT,
  attorney TEXT,
  raw_json TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (credit_report_id) REFERENCES credit_reports(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE INDEX IF NOT EXISTS idx_mfsn_tokens_client ON mfsn_tokens(client_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_report ON credit_report_inquiries(credit_report_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_client ON credit_report_inquiries(client_id);
CREATE INDEX IF NOT EXISTS idx_pub_records_report ON credit_report_public_records(credit_report_id);
CREATE INDEX IF NOT EXISTS idx_pub_records_client ON credit_report_public_records(client_id);
