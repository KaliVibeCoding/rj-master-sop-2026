-- ============================================================
-- RJ BUSINESS SOLUTIONS — PHASE 2 EXPANSION
-- Magic link intake, e-signatures, compliance engine,
-- certified mail, DNC, call center, business credit
-- ============================================================

-- MAGIC TOKENS: One-time login/intake tokens
CREATE TABLE IF NOT EXISTS magic_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  token TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  phone TEXT,
  client_id INTEGER,
  token_type TEXT NOT NULL DEFAULT 'intake' CHECK(token_type IN ('intake','portal','signature','password_reset','verification')),
  expires_at TEXT NOT NULL,
  used_at TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- INTAKE SESSIONS: Track full intake workflow progress
CREATE TABLE IF NOT EXISTS intake_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_token TEXT NOT NULL UNIQUE,
  client_id INTEGER,
  email TEXT NOT NULL,
  phone TEXT,
  step TEXT NOT NULL DEFAULT 'start' CHECK(step IN ('start','verified','info','disclosures','documents','signing','complete')),
  ip_address TEXT,
  user_agent TEXT,
  referral_source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  data_json TEXT,
  completed_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- CONSENT RECORDS: TCPA, CROA, privacy, communication consent
CREATE TABLE IF NOT EXISTS consent_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  consent_type TEXT NOT NULL CHECK(consent_type IN ('tcpa_sms','tcpa_call','tcpa_email','croa_disclosure','privacy_policy','service_agreement','cancellation_notice','credit_auth','limited_poa','marketing','recording')),
  consented INTEGER NOT NULL DEFAULT 0,
  consent_text TEXT,
  consent_version TEXT,
  ip_address TEXT,
  user_agent TEXT,
  collected_via TEXT DEFAULT 'web' CHECK(collected_via IN ('web','sms','voice','email','paper','staff')),
  witnessed_by TEXT,
  revoked_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- OPT OUTS: STOP/UNSUBSCRIBE/DNC tracking
CREATE TABLE IF NOT EXISTS opt_outs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER,
  phone TEXT,
  email TEXT,
  channel TEXT NOT NULL CHECK(channel IN ('sms','email','call','all')),
  reason TEXT,
  source TEXT DEFAULT 'self' CHECK(source IN ('self','staff','twilio','sendgrid','complaint')),
  opted_back_in_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- DNC LIST: Do Not Call registry
CREATE TABLE IF NOT EXISTS dnc_list (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phone TEXT NOT NULL UNIQUE,
  client_id INTEGER,
  reason TEXT,
  source TEXT DEFAULT 'self' CHECK(source IN ('self','federal','state','complaint','staff')),
  added_by TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- E-SIGNATURES: Audit trail for all electronic signatures
CREATE TABLE IF NOT EXISTS e_signatures (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  document_type TEXT NOT NULL CHECK(document_type IN ('service_agreement','croa_disclosure','cancellation_notice','privacy_policy','credit_auth','limited_poa','communication_consent','custom')),
  document_version TEXT NOT NULL DEFAULT '1.0',
  signature_data TEXT,
  signature_method TEXT DEFAULT 'drawn' CHECK(signature_method IN ('drawn','typed','click')),
  ip_address TEXT,
  user_agent TEXT,
  signed_at TEXT DEFAULT (datetime('now')),
  witness_email TEXT,
  hash TEXT,
  status TEXT NOT NULL DEFAULT 'signed' CHECK(status IN ('pending','signed','voided')),
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- LEGAL TEMPLATE VERSIONS: Version-controlled compliance documents
CREATE TABLE IF NOT EXISTS legal_template_versions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  template_name TEXT NOT NULL,
  template_type TEXT NOT NULL CHECK(template_type IN ('service_agreement','croa_disclosure','cancellation_notice','privacy_policy','credit_auth','limited_poa','dispute_letter','custom')),
  version TEXT NOT NULL,
  content TEXT NOT NULL,
  effective_date TEXT,
  approved_by TEXT,
  approved_at TEXT,
  is_active INTEGER DEFAULT 0,
  change_notes TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- COMPLIANCE SOURCES: Official sources checked for updates
CREATE TABLE IF NOT EXISTS compliance_sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_name TEXT NOT NULL,
  source_url TEXT NOT NULL,
  source_type TEXT NOT NULL CHECK(source_type IN ('cfpb','ftc','fcc','federal_register','ecfr','state_ag','state_cso','other')),
  state_code TEXT,
  last_checked_at TEXT,
  last_update_found_at TEXT,
  check_frequency TEXT DEFAULT 'daily',
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

-- COMPLIANCE RULE VERSIONS: Versioned compliance rules
CREATE TABLE IF NOT EXISTS compliance_rule_versions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rule_code TEXT NOT NULL,
  rule_name TEXT NOT NULL,
  rule_category TEXT NOT NULL CHECK(rule_category IN ('croa','fcra','fdcpa','tcpa','tsr','can_spam','ecoa','fcba','state','general')),
  version TEXT NOT NULL DEFAULT '1.0',
  rule_text TEXT NOT NULL,
  source_citation TEXT,
  effective_date TEXT,
  is_active INTEGER DEFAULT 1,
  supersedes_version TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- COMPLIANCE UPDATES: Detected changes requiring review
CREATE TABLE IF NOT EXISTS compliance_updates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id INTEGER,
  update_title TEXT NOT NULL,
  update_summary TEXT,
  update_url TEXT,
  update_category TEXT CHECK(update_category IN ('croa','fcra','fdcpa','tcpa','tsr','can_spam','ecoa','fcba','state','general','ai_guardrail')),
  severity TEXT DEFAULT 'info' CHECK(severity IN ('info','low','medium','high','critical')),
  requires_review INTEGER DEFAULT 1,
  reviewed_by TEXT,
  reviewed_at TEXT,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','reviewed','approved','rejected','applied')),
  raw_content TEXT,
  detected_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (source_id) REFERENCES compliance_sources(id)
);

-- COMPLIANCE ALERTS: Admin notifications for compliance issues
CREATE TABLE IF NOT EXISTS compliance_alerts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  alert_type TEXT NOT NULL CHECK(alert_type IN ('rule_change','deadline','violation_risk','template_outdated','license_expiry','audit_due','new_update')),
  severity TEXT DEFAULT 'medium' CHECK(severity IN ('low','medium','high','critical')),
  title TEXT NOT NULL,
  description TEXT,
  related_update_id INTEGER,
  resolved_by TEXT,
  resolved_at TEXT,
  status TEXT DEFAULT 'open' CHECK(status IN ('open','acknowledged','resolved')),
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (related_update_id) REFERENCES compliance_updates(id)
);

-- APPROVAL LOGS: Track approvals for compliance changes
CREATE TABLE IF NOT EXISTS approval_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_type TEXT NOT NULL CHECK(entity_type IN ('compliance_update','legal_template','ai_guardrail','campaign','letter')),
  entity_id INTEGER NOT NULL,
  action TEXT NOT NULL CHECK(action IN ('submitted','approved','rejected','applied','reverted')),
  performed_by TEXT NOT NULL,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- CERTIFIED MAIL RECORDS: USPS certified mail tracking
CREATE TABLE IF NOT EXISTS certified_mail_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  dispute_id INTEGER,
  recipient_name TEXT NOT NULL,
  recipient_address TEXT NOT NULL,
  bureau TEXT,
  tracking_number TEXT UNIQUE,
  mail_date TEXT,
  delivery_date TEXT,
  delivery_status TEXT DEFAULT 'pending' CHECK(delivery_status IN ('pending','in_transit','delivered','returned','failed','unknown')),
  response_deadline TEXT,
  letter_type TEXT DEFAULT 'dispute',
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
  FOREIGN KEY (dispute_id) REFERENCES disputes(id) ON DELETE SET NULL
);

-- DEADLINES: All tracked regulatory and operational deadlines
CREATE TABLE IF NOT EXISTS deadlines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  dispute_id INTEGER,
  certified_mail_id INTEGER,
  deadline_type TEXT NOT NULL CHECK(deadline_type IN ('bureau_response','furnisher_response','cancellation_window','reinvestigation','validation_response','escalation','custom')),
  deadline_date TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'open' CHECK(status IN ('open','met','missed','extended','waived')),
  reminder_sent_at TEXT,
  resolved_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- CALL RECORDINGS: Twilio call log + recording consent
CREATE TABLE IF NOT EXISTS call_recordings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER,
  call_sid TEXT UNIQUE,
  from_number TEXT,
  to_number TEXT,
  direction TEXT DEFAULT 'inbound' CHECK(direction IN ('inbound','outbound')),
  duration_seconds INTEGER,
  recording_url TEXT,
  recording_sid TEXT,
  consent_given INTEGER DEFAULT 0,
  consent_method TEXT,
  transcription TEXT,
  ai_summary TEXT,
  status TEXT DEFAULT 'completed' CHECK(status IN ('initiated','ringing','in-progress','completed','busy','no-answer','failed','canceled')),
  call_type TEXT DEFAULT 'support' CHECK(call_type IN ('support','intake','sales','follow_up','dispute_update','collections','voicemail')),
  staff_id INTEGER,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- BUSINESS CREDIT PROFILES: EIN/DUNS/business credit tracking
CREATE TABLE IF NOT EXISTS business_credit_profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  business_name TEXT NOT NULL,
  ein TEXT,
  duns_number TEXT,
  nav_score INTEGER,
  paydex_score INTEGER,
  business_type TEXT,
  state_incorporated TEXT,
  date_incorporated TEXT,
  years_in_business REAL,
  annual_revenue REAL,
  num_employees INTEGER,
  business_address TEXT,
  business_phone TEXT,
  business_email TEXT,
  website TEXT,
  funding_stage TEXT DEFAULT 'tier1' CHECK(funding_stage IN ('tier1','tier2','tier3','tier4','ready')),
  no_pg_ready INTEGER DEFAULT 0,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- VENDOR ACCOUNTS: Net30 and tradeline tracking for business credit
CREATE TABLE IF NOT EXISTS vendor_accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  profile_id INTEGER NOT NULL,
  vendor_name TEXT NOT NULL,
  account_type TEXT NOT NULL CHECK(account_type IN ('net30','net60','net90','revolving','installment','secured')),
  credit_limit REAL,
  balance REAL DEFAULT 0,
  payment_terms TEXT,
  reports_to TEXT,
  tier INTEGER DEFAULT 1 CHECK(tier BETWEEN 1 AND 4),
  account_number TEXT,
  open_date TEXT,
  status TEXT DEFAULT 'active' CHECK(status IN ('active','closed','applied','denied','pending')),
  on_time_payments INTEGER DEFAULT 0,
  late_payments INTEGER DEFAULT 0,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (profile_id) REFERENCES business_credit_profiles(id) ON DELETE CASCADE
);

-- CREDIT ACCOUNTS: Parsed from credit reports (extended)
CREATE TABLE IF NOT EXISTS credit_accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  credit_report_id INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  bureau TEXT NOT NULL CHECK(bureau IN ('experian','equifax','transunion')),
  creditor_name TEXT,
  account_number TEXT,
  account_type TEXT,
  account_status TEXT,
  balance REAL,
  credit_limit REAL,
  high_credit REAL,
  monthly_payment REAL,
  payment_status TEXT,
  open_date TEXT,
  close_date TEXT,
  last_payment_date TEXT,
  last_activity_date TEXT,
  reported_date TEXT,
  late_30 INTEGER DEFAULT 0,
  late_60 INTEGER DEFAULT 0,
  late_90 INTEGER DEFAULT 0,
  is_negative INTEGER DEFAULT 0,
  is_collection INTEGER DEFAULT 0,
  is_charge_off INTEGER DEFAULT 0,
  dispute_flag INTEGER DEFAULT 0,
  dispute_reason TEXT,
  metro2_issues TEXT,
  raw_data TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (credit_report_id) REFERENCES credit_reports(id) ON DELETE CASCADE,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- Seed compliance sources
INSERT OR IGNORE INTO compliance_sources (source_name, source_url, source_type, check_frequency) VALUES
  ('CFPB Newsroom', 'https://www.consumerfinance.gov/about-us/newsroom/', 'cfpb', 'daily'),
  ('FTC News & Events', 'https://www.ftc.gov/news-events', 'ftc', 'daily'),
  ('FCC News', 'https://www.fcc.gov/news-events/latest-news', 'fcc', 'daily'),
  ('Federal Register Credit', 'https://www.federalregister.gov/documents/search?conditions%5Bagencies%5D%5B%5D=consumer-financial-protection-bureau', 'federal_register', 'daily'),
  ('eCFR Title 12', 'https://www.ecfr.gov/current/title-12', 'ecfr', 'weekly');

-- Seed baseline compliance rules
INSERT OR IGNORE INTO compliance_rule_versions (rule_code, rule_name, rule_category, rule_text, source_citation, is_active) VALUES
  ('CROA-1', 'No Advance Fees', 'croa', 'A credit services organization may not charge or receive money before fully performing services. 15 U.S.C. § 1679b(b).', '15 U.S.C. § 1679b', 1),
  ('CROA-2', 'Written Contract Required', 'croa', 'Every contract for credit services must be in writing, signed by consumer, contain 3-day right to cancel. 15 U.S.C. § 1679d.', '15 U.S.C. § 1679d', 1),
  ('CROA-3', 'Disclosure Required Before Contract', 'croa', 'Organization must provide consumer rights disclosure before executing contract. 15 U.S.C. § 1679c.', '15 U.S.C. § 1679c', 1),
  ('FCRA-611', 'Consumer Dispute Rights', 'fcra', 'Consumers may dispute inaccurate information. CRA must reinvestigate within 30 days (45 if consumer submits additional info). 15 U.S.C. § 1681i.', '15 U.S.C. § 1681i', 1),
  ('FCRA-623', 'Furnisher Dispute Rights', 'fcra', 'Consumers may dispute directly with furnisher. Furnisher must investigate and report results. 15 U.S.C. § 1681s-2(a)(8).', '15 U.S.C. § 1681s-2', 1),
  ('TCPA-1', 'SMS Consent Required', 'tcpa', 'Prior express written consent required for autodialed SMS to cell phones. 47 U.S.C. § 227(b)(1)(A).', '47 U.S.C. § 227', 1),
  ('TCPA-2', 'STOP Opt-Out', 'tcpa', 'Must honor STOP, UNSUBSCRIBE, CANCEL, QUIT, END, REVOKE opt-out requests within 10 business days.', 'FCC Rules', 1),
  ('FDCPA-1', 'No False Representations', 'fdcpa', 'Debt collectors may not use false, deceptive, or misleading representations. 15 U.S.C. § 1692e.', '15 U.S.C. § 1692e', 1),
  ('TSR-1', 'No Advance Fees Telemarketing', 'tsr', 'Telemarketers of credit repair services may not request payment before services are fully performed. 16 C.F.R. § 310.4(a)(2).', '16 C.F.R. § 310', 1),
  ('CAN-SPAM-1', 'Opt-Out Mechanism', 'can_spam', 'Commercial email must include clear opt-out mechanism honored within 10 business days. 15 U.S.C. § 7704.', '15 U.S.C. § 7704', 1);

-- Seed legal templates (active versions)
INSERT OR IGNORE INTO legal_template_versions (template_name, template_type, version, content, is_active, effective_date) VALUES
  ('CROA Disclosure', 'croa_disclosure', '1.0',
   'CONSUMER CREDIT FILE RIGHTS UNDER STATE AND FEDERAL LAW

You have a right to dispute inaccurate information in your credit report by contacting the credit reporting agency directly. However, neither you nor any credit repair company or credit repair organization has the right to have accurate, current, and verifiable information removed from your credit report. The credit reporting agency must remove accurate, negative information from your report only if it is over 7 years old. Bankruptcy information can be reported for 10 years.

You have a right to obtain a copy of your credit report from a credit reporting agency. You may be charged a reasonable fee. There is no fee, however, if you have been turned down for credit, employment, insurance, or a rental dwelling because of information in your credit report within the preceding 60 days. The credit reporting agency must provide someone to help you interpret the information in your credit file.

You have a right to a free copy of your credit report if you are unemployed and intend to apply for employment in the next 60 days, if you are a recipient of public welfare assistance, or if you have reason to believe that there is inaccurate information in your credit report due to fraud.

You have a right to sue a credit repair organization that violates the Credit Repair Organizations Act. This law prohibits deceptive practices by credit repair organizations.

You have the right to cancel your contract with any credit repair organization for any reason within 3 business days from the date you signed it.

Credit reporting agencies are required to follow reasonable procedures to ensure that the information they report is accurate. However, mistakes may occur.

You may, on your own, notify a credit reporting agency in writing that you dispute the accuracy of information in your credit file. The credit reporting agency must then reinvestigate and modify or remove inaccurate or incomplete information. The credit reporting agency may not charge any fee for this service. Any pertinent information and copies of all documents you have concerning an error should be given to the credit reporting agency.

If the credit reporting agency''s reinvestigation does not resolve the dispute to your satisfaction, you may send a brief statement to the credit reporting agency to keep in your file, explaining why you think the record is inaccurate. The credit reporting agency must include a summary of your statement about disputed information with any report it issues about you.', 1, date('now')),

  ('Three-Day Cancellation Notice', 'cancellation_notice', '1.0',
   'NOTICE OF CANCELLATION

You may cancel this contract without any penalty or obligation within 3 business days from the date you signed it.

If you cancel, any amounts you paid for services which were not provided will be returned to you within 10 days of receiving your notice of cancellation.

To cancel this transaction, mail or deliver a signed and dated copy of this cancellation notice or any other written notice to:

RJ Business Solutions
[Address]
[City, State ZIP]

I hereby cancel this transaction.

Date: _______________

Consumer Signature: _______________', 1, date('now'));
