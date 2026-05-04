-- ═══════════════════════════════════════════════════════════════
-- RJ BUSINESS SOLUTIONS — Staff Auth Sessions
-- Migration: 0006_auth_sessions
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS staff_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  token TEXT NOT NULL UNIQUE,
  staff_id INTEGER,
  staff_email TEXT NOT NULL,
  staff_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'viewer',
  ip_address TEXT,
  user_agent TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME NOT NULL,
  last_seen DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cron_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  job_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('success', 'error', 'skipped')),
  records_processed INTEGER DEFAULT 0,
  duration_ms INTEGER DEFAULT 0,
  details TEXT,
  error_message TEXT,
  triggered_by TEXT DEFAULT 'scheduler',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_sessions_token ON staff_sessions(token);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON staff_sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_cron_log_job ON cron_log(job_name);
