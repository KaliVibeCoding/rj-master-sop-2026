-- ============================================================
-- MIGRATION 0004: FULL PLATFORM EXPANSION
-- Client portal, email sequences, CRM leads, staff, dispute rounds,
-- SMS sequences, scheduling, webhooks, API keys, monitoring, GHL
-- ============================================================

-- Client portal access tokens
CREATE TABLE IF NOT EXISTS portal_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  last_accessed TEXT,
  access_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Email send history
CREATE TABLE IF NOT EXISTS email_sends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER,
  to_email TEXT NOT NULL,
  from_name TEXT DEFAULT 'RJ Business Solutions',
  subject TEXT NOT NULL,
  body TEXT,
  template_name TEXT,
  status TEXT DEFAULT 'pending',
  provider TEXT,
  provider_id TEXT,
  opened_at TEXT,
  clicked_at TEXT,
  error TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Email drip sequences
CREATE TABLE IF NOT EXISTS email_sequences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  trigger_event TEXT NOT NULL,
  delay_days INTEGER DEFAULT 0,
  subject TEXT NOT NULL,
  body_template TEXT NOT NULL,
  is_active INTEGER DEFAULT 1,
  send_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Sequence enrollments
CREATE TABLE IF NOT EXISTS sequence_enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  sequence_id INTEGER NOT NULL,
  status TEXT DEFAULT 'active',
  next_send_at TEXT,
  sends_completed INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- CRM leads pipeline
CREATE TABLE IF NOT EXISTS crm_leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  source TEXT DEFAULT 'organic',
  stage TEXT DEFAULT 'new',
  score INTEGER DEFAULT 0,
  score_grade TEXT DEFAULT 'F',
  ltv_estimate INTEGER DEFAULT 0,
  notes TEXT,
  assigned_staff_id INTEGER,
  affiliate_id INTEGER,
  converted_client_id INTEGER,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  lost_reason TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Staff users with roles
CREATE TABLE IF NOT EXISTS staff_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  role TEXT DEFAULT 'agent',
  permissions TEXT DEFAULT '["read"]',
  max_clients INTEGER DEFAULT 50,
  is_active INTEGER DEFAULT 1,
  last_login TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Dispute round tracking (R1, R2, R3 per bureau)
CREATE TABLE IF NOT EXISTS dispute_rounds (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  round_number INTEGER NOT NULL DEFAULT 1,
  bureau TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  items_disputed TEXT NOT NULL DEFAULT '[]',
  sent_at TEXT,
  response_due TEXT,
  response_received TEXT,
  outcome TEXT,
  letter_content TEXT,
  tracking_number TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- SMS drip sequences
CREATE TABLE IF NOT EXISTS sms_sequences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  trigger_event TEXT NOT NULL,
  delay_hours INTEGER DEFAULT 0,
  message_template TEXT NOT NULL,
  is_active INTEGER DEFAULT 1,
  send_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- SMS sequence enrollments
CREATE TABLE IF NOT EXISTS sms_enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  sequence_id INTEGER NOT NULL,
  status TEXT DEFAULT 'active',
  next_send_at TEXT,
  sends_completed INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Appointments / scheduling
CREATE TABLE IF NOT EXISTS appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER,
  lead_id INTEGER,
  staff_id INTEGER,
  type TEXT DEFAULT 'consultation',
  scheduled_at TEXT NOT NULL,
  duration_minutes INTEGER DEFAULT 30,
  status TEXT DEFAULT 'scheduled',
  notes TEXT,
  meeting_link TEXT,
  reminder_sent INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Outbound webhook configurations
CREATE TABLE IF NOT EXISTS webhook_configs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  events TEXT NOT NULL DEFAULT '[]',
  secret TEXT,
  is_active INTEGER DEFAULT 1,
  last_fired_at TEXT,
  total_fired INTEGER DEFAULT 0,
  fail_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Tenant API keys (for white-label access)
CREATE TABLE IF NOT EXISTS api_keys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tenant_id INTEGER,
  name TEXT NOT NULL,
  key_hash TEXT NOT NULL UNIQUE,
  key_prefix TEXT NOT NULL,
  permissions TEXT DEFAULT '["read"]',
  request_count INTEGER DEFAULT 0,
  last_used_at TEXT,
  expires_at TEXT,
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Credit monitoring / score alerts
CREATE TABLE IF NOT EXISTS score_alerts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  alert_type TEXT NOT NULL,
  bureau TEXT,
  old_value INTEGER,
  new_value INTEGER,
  change_amount INTEGER,
  description TEXT,
  is_actioned INTEGER DEFAULT 0,
  actioned_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- GoHighLevel sync log
CREATE TABLE IF NOT EXISTS ghl_sync_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  local_id INTEGER,
  action TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  response_body TEXT,
  error TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Seed default email sequences
INSERT OR IGNORE INTO email_sequences (name, trigger_event, delay_days, subject, body_template) VALUES
  ('Welcome Sequence D0', 'onboarding', 0, 'Welcome to RJ Business Solutions — Let''s Fix Your Credit', 'Hi {{name}},\n\nWelcome! We have received your enrollment and are pulling your credit reports from all 3 bureaus.\n\nHere is what happens next:\n- Days 1-2: Credit report analysis\n- Days 3-5: Dispute strategy built\n- Day 6-7: Round 1 disputes filed\n\nYou will receive updates every step of the way.\n\nTo your financial freedom,\nRJ Business Solutions'),
  ('Welcome Sequence D3', 'onboarding', 3, 'Your Credit Analysis Is Ready', 'Hi {{name}},\n\nGreat news — we have completed your 3-bureau credit analysis.\n\nOur team has identified negative items to dispute and is preparing your Round 1 dispute letters.\n\nExpect your next update in 2-3 days when Round 1 is filed.\n\nRJ Business Solutions'),
  ('Dispute Filed D0', 'dispute_round_1', 0, 'Round 1 Disputes Filed — 30-Day Clock Starts Now', 'Hi {{name}},\n\nWe have officially filed your Round 1 disputes with the credit bureaus.\n\nUnder the FCRA, bureaus have 30 days to respond. We will monitor responses and update you immediately.\n\nRJ Business Solutions'),
  ('Bureau Response', 'bureau_response', 0, 'Update on Your Credit Dispute', 'Hi {{name}},\n\nWe received a response from the credit bureau regarding your disputes.\n\nOur team is reviewing it now and will provide a detailed update within 48 hours.\n\nRJ Business Solutions'),
  ('Progress Check D30', 'onboarding', 30, '30-Day Credit Repair Check-In', 'Hi {{name}},\n\nIt has been 30 days since we started working on your credit. Here is a quick status update on your account.\n\nOur team is actively monitoring your progress and preparing next-round disputes as needed.\n\nRJ Business Solutions'),
  ('Graduation', 'graduation', 0, 'Congratulations — Your Credit Goals Are Met!', 'Hi {{name}},\n\nThis is the email we love sending most. Congratulations — you have achieved your credit goals!\n\nThank you for trusting RJ Business Solutions with your financial journey.\n\nPlease consider leaving us a review and referring friends/family.\n\nRJ Business Solutions');

-- Seed default SMS sequences
INSERT OR IGNORE INTO sms_sequences (name, trigger_event, delay_hours, message_template) VALUES
  ('Welcome SMS', 'onboarding', 0, 'Welcome {{name}}! We''re on it. Your 3-bureau credit pull is in progress. You''ll hear from us in 24 hours. - RJ Business Solutions'),
  ('Dispute Filed SMS', 'dispute_round_1', 0, 'Round 1 disputes filed {{name}}! The 30-day clock is ticking. We''ll update you on every bureau response. - RJ Business'),
  ('30-Day Check-in', 'onboarding', 720, 'Hi {{name}}, 30-day check-in! Our team is reviewing your bureau responses and preparing next steps. Reply STOP to opt out. - RJ Business'),
  ('Payment Reminder', 'payment_due', 0, 'Hi {{name}}, your payment is due. Keep your account active so we can keep fighting for your credit. - RJ Business Solutions'),
  ('Score Update', 'score_update', 0, 'Great news {{name}}! We see positive changes on your credit report. Log in to your portal to view details. - RJ Business');

-- Seed default staff
INSERT OR IGNORE INTO staff_users (name, email, role, permissions, max_clients) VALUES
  ('Admin', 'admin@rjbusinesssolutions.org', 'admin', '["read","write","delete","billing","compliance","admin"]', 9999),
  ('Operations Manager', 'ops@rjbusinesssolutions.org', 'manager', '["read","write","compliance","billing"]', 200),
  ('Dispute Coordinator', 'disputes@rjbusinesssolutions.org', 'agent', '["read","write","disputes"]', 75),
  ('Client Success Manager', 'csm@rjbusinesssolutions.org', 'agent', '["read","write","clients"]', 60);
