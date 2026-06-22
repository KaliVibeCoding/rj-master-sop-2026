-- ═══════════════════════════════════════════════════════════════
-- RJ BUSINESS SOLUTIONS — Production Hardening
-- Migration: 0010_hardening
--   - TOTP (2FA) columns on staff_users
--   - SMS double opt-in table (TCPA compliance)
--   - Webhook delivery log (for queue retries)
--   - API key indices + last_used_at
-- ═══════════════════════════════════════════════════════════════

-- 2FA on staff
ALTER TABLE staff_users ADD COLUMN totp_secret TEXT;
ALTER TABLE staff_users ADD COLUMN totp_enabled INTEGER DEFAULT 0;

-- SMS double opt-in (TCPA)
CREATE TABLE IF NOT EXISTS sms_opt_in (
  phone TEXT PRIMARY KEY,
  client_id INTEGER,
  code TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'confirmed', 'revoked')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  confirmed_at DATETIME,
  revoked_at DATETIME
);
CREATE INDEX IF NOT EXISTS idx_sms_opt_in_client ON sms_opt_in(client_id);
CREATE INDEX IF NOT EXISTS idx_sms_opt_in_status ON sms_opt_in(status);

-- Webhook delivery log
CREATE TABLE IF NOT EXISTS webhook_deliveries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  config_id INTEGER,
  url TEXT NOT NULL,
  event TEXT,
  payload TEXT,
  status TEXT NOT NULL CHECK(status IN ('queued', 'sent', 'failed', 'dlq')),
  attempts INTEGER DEFAULT 0,
  last_status_code INTEGER,
  last_error TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  delivered_at DATETIME
);
CREATE INDEX IF NOT EXISTS idx_webhook_deliveries_status ON webhook_deliveries(status);
CREATE INDEX IF NOT EXISTS idx_webhook_deliveries_config ON webhook_deliveries(config_id);

-- API keys: ensure last_used_at exists (safe no-op if already there)
-- SQLite doesn't support IF NOT EXISTS on ALTER TABLE — wrap in pragma trick.
-- We just create idempotent indices.
CREATE INDEX IF NOT EXISTS idx_api_keys_key_hash ON api_keys(key_hash);
CREATE INDEX IF NOT EXISTS idx_api_keys_tenant ON api_keys(tenant_id);

-- Idempotency cache (used by /api/* handlers for POST replay protection)
CREATE TABLE IF NOT EXISTS idempotency_keys (
  key TEXT PRIMARY KEY,
  response_status INTEGER,
  response_body TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_idempotency_created ON idempotency_keys(created_at);
