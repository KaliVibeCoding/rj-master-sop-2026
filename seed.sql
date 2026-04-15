-- ============================================================
-- RJ BUSINESS SOLUTIONS — SEED DATA
-- Demo data for autopilot operations system
-- ============================================================

-- Team Members
INSERT OR IGNORE INTO team_members (name, email, role, status, hire_date, capacity, current_load, specialization) VALUES
  ('Rick Jefferson', 'rjbizsolution23@gmail.com', 'owner', 'active', '2024-01-01', 50, 12, 'Strategy & Compliance'),
  ('AI Agent Alpha', 'agent-alpha@rjbusiness.ai', 'dispute_coordinator', 'active', '2026-01-01', 100, 0, 'Dispute Filing & Bureau Response'),
  ('AI Agent Beta', 'agent-beta@rjbusiness.ai', 'csm', 'active', '2026-01-01', 100, 0, 'Client Communication & Retention'),
  ('AI Agent Gamma', 'agent-gamma@rjbusiness.ai', 'admin', 'active', '2026-01-01', 100, 0, 'Compliance & Scheduling');

-- Sample Clients
INSERT OR IGNORE INTO clients (first_name, last_name, email, phone, status, credit_score_start, credit_score_current, credit_score_goal, source, assigned_agent, onboarding_date, monthly_fee, notes) VALUES
  ('Marcus', 'Thompson', 'marcus.t@email.com', '505-555-0101', 'active', 520, 585, 700, 'google_ads', 'AI Agent Alpha', '2026-03-01', 149.99, 'Round 2 disputes in progress. 3 deletions from Round 1.'),
  ('Sarah', 'Williams', 'sarah.w@email.com', '505-555-0102', 'active', 480, 540, 680, 'referral', 'AI Agent Alpha', '2026-02-15', 149.99, 'Medical debt focus. 5 items disputed Round 1.'),
  ('James', 'Rodriguez', 'james.r@email.com', '505-555-0103', 'onboarding', 610, 610, 750, 'website', 'AI Agent Beta', NULL, 99.99, 'Inquiry removal + late payment goodwill. Quick fix case.'),
  ('Lisa', 'Chen', 'lisa.c@email.com', '505-555-0104', 'active', 440, 520, 650, 'google_ads', 'AI Agent Alpha', '2026-01-10', 199.99, 'Complex case: collections + charge-offs + identity theft items.'),
  ('David', 'Brown', 'david.b@email.com', '505-555-0105', 'lead', NULL, NULL, 700, 'facebook_ads', NULL, NULL, 0, 'Scheduled consultation for April 20.'),
  ('Angela', 'Martinez', 'angela.m@email.com', '505-555-0106', 'graduated', 490, 710, 700, 'referral', 'AI Agent Beta', '2025-09-01', 0, 'SUCCESS: 490→710 in 7 months. 12 deletions. Now in monitoring phase.'),
  ('Robert', 'Jackson', 'robert.j@email.com', '505-555-0107', 'paused', 550, 590, 680, 'direct', 'AI Agent Alpha', '2026-02-01', 149.99, 'Paused — missed 2 payments. Reactivation workflow triggered.');

-- Disputes for Active Clients
INSERT OR IGNORE INTO disputes (client_id, bureau, account_name, account_number, dispute_reason, dispute_round, status, fcra_section, letter_template, sent_date, response_due_date, tracking_number) VALUES
  (1, 'experian', 'Capital One', 'XXXX-1234', 'Account not mine — identity theft', 2, 'sent', '§611(a)', 'Identity Theft Affidavit', '2026-04-01', '2026-05-01', 'EX-9920041001'),
  (1, 'equifax', 'Capital One', 'XXXX-1234', 'Account not mine — identity theft', 2, 'sent', '§611(a)', 'Identity Theft Affidavit', '2026-04-01', '2026-05-01', 'EQ-9920041002'),
  (1, 'transunion', 'Midland Credit', 'XXXX-5678', 'Debt not validated — no original contract', 1, 'deleted', '§809(b)', 'Debt Validation Letter', '2026-03-05', '2026-04-04', 'TU-9920030501'),
  (2, 'experian', 'Providence Medical', 'MED-001', 'Medical debt reporting error — paid in full', 1, 'investigating', '§611(a)', 'Medical Debt Dispute', '2026-03-20', '2026-04-19', 'EX-9920032001'),
  (2, 'equifax', 'Collections Plus', 'COL-445', 'Not my account — no permissible purpose', 1, 'sent', '§604', 'Cease and Desist Letter', '2026-04-10', '2026-05-10', 'EQ-9920041001'),
  (2, 'transunion', 'AT&T Collections', 'ATT-789', 'Duplicate entry — already reported by original creditor', 1, 'deleted', '§611(a)', 'Dispute Letter', '2026-03-20', '2026-04-19', 'TU-9920032002'),
  (4, 'experian', 'Wells Fargo', 'WF-2233', 'Charge-off amount incorrect', 2, 'escalated', '§623(b)', 'Direct Dispute Letter', '2026-03-15', '2026-04-14', 'EX-9920031501'),
  (4, 'equifax', 'Synchrony Bank', 'SYN-889', 'Account closed — still reporting as open', 1, 'sent', '§611(a)', 'Dispute Letter', '2026-04-05', '2026-05-05', 'EQ-9920040501'),
  (4, 'transunion', 'Unknown Collection', 'UNK-001', 'Cannot identify account — identity theft suspected', 1, 'sent', '§605B', 'Identity Theft Affidavit', '2026-04-05', '2026-05-05', 'TU-9920040501');

-- Active Workflows
INSERT OR IGNORE INTO workflows (sop_id, sop_title, client_id, assigned_to, status, priority, trigger_type, current_step, total_steps, started_at, due_date) VALUES
  ('SOP-005', 'Client Onboarding & Intake', 3, 'AI Agent Beta', 'running', 'high', 'event', 3, 8, '2026-04-14', '2026-04-21'),
  ('SOP-101', 'Credit Report Analysis', 1, 'AI Agent Alpha', 'running', 'normal', 'auto', 5, 7, '2026-04-10', '2026-04-17'),
  ('SOP-103', 'Dispute Strategy Development', 2, 'AI Agent Alpha', 'running', 'normal', 'auto', 2, 6, '2026-04-12', '2026-04-19'),
  ('SOP-106', 'Bureau Response Processing', 1, 'AI Agent Alpha', 'paused', 'normal', 'event', 0, 5, NULL, '2026-05-01'),
  ('SOP-601', 'FCRA Compliance Verification', NULL, 'AI Agent Gamma', 'running', 'critical', 'scheduled', 3, 6, '2026-04-01', '2026-04-30'),
  ('SOP-401', 'Monthly Client Check-In', 6, 'AI Agent Beta', 'completed', 'normal', 'scheduled', 7, 7, '2026-04-01', '2026-04-07'),
  ('SOP-405', 'Proactive Churn Prevention', 7, 'AI Agent Beta', 'running', 'high', 'event', 2, 7, '2026-04-13', '2026-04-15');

-- Workflow Steps for James Rodriguez Onboarding (workflow_id=1)
INSERT OR IGNORE INTO workflow_steps (workflow_id, step_number, step_description, status, assigned_to, started_at, completed_at) VALUES
  (1, 1, 'Initial consultation call — set expectations, explain CROA rights', 'completed', 'AI Agent Beta', '2026-04-14 09:00', '2026-04-14 09:45'),
  (1, 2, 'Collect signed service agreement + CROA disclosure + ID verification', 'completed', 'AI Agent Beta', '2026-04-14 10:00', '2026-04-14 10:30'),
  (1, 3, 'Pull credit reports from all 3 bureaus (with permissible purpose)', 'in_progress', 'AI Agent Alpha', '2026-04-14 11:00', NULL),
  (1, 4, 'Complete credit report analysis (SOP-101)', 'pending', 'AI Agent Alpha', NULL, NULL),
  (1, 5, 'Develop dispute strategy (SOP-103)', 'pending', 'AI Agent Alpha', NULL, NULL),
  (1, 6, 'Set up client portal access', 'pending', 'AI Agent Beta', NULL, NULL),
  (1, 7, 'Send welcome email with timeline + login credentials', 'pending', 'AI Agent Beta', NULL, NULL),
  (1, 8, 'Schedule first check-in call (7 days)', 'pending', 'AI Agent Beta', NULL, NULL);

-- Tasks
INSERT OR IGNORE INTO tasks (title, description, sop_id, workflow_id, client_id, assigned_to, status, priority, category, due_date, recurrence, next_recurrence_date) VALUES
  ('Follow up on Marcus Round 2 responses', 'Check Experian + Equifax response status — due May 1', 'SOP-106', 4, 1, 'AI Agent Alpha', 'pending', 'high', 'Disputes', '2026-05-01', NULL, NULL),
  ('Monthly check-in: Sarah Williams', 'Review dispute progress, update on Round 1 results', 'SOP-401', NULL, 2, 'AI Agent Beta', 'pending', 'normal', 'Retention', '2026-04-20', 'monthly', '2026-05-20'),
  ('Complete James onboarding', 'Finish credit pull + analysis + portal setup', 'SOP-005', 1, 3, 'AI Agent Beta', 'in_progress', 'high', 'Onboarding', '2026-04-21', NULL, NULL),
  ('CFPB escalation: Lisa — Wells Fargo', 'Prepare CFPB complaint for Wells Fargo charge-off dispute', 'SOP-107', NULL, 4, 'AI Agent Alpha', 'pending', 'critical', 'Disputes', '2026-04-18', NULL, NULL),
  ('Consultation call: David Brown', 'Scheduled lead consultation — April 20', 'SOP-012', NULL, 5, 'Rick Jefferson', 'pending', 'high', 'Sales', '2026-04-20', NULL, NULL),
  ('Reactivation outreach: Robert Jackson', 'Personal call from manager — address payment issues', 'SOP-405', 7, 7, 'AI Agent Beta', 'in_progress', 'high', 'Retention', '2026-04-15', NULL, NULL),
  ('Weekly FCRA compliance audit', 'Review 10% of active client files for FCRA compliance', 'SOP-601', NULL, NULL, 'AI Agent Gamma', 'pending', 'critical', 'Compliance', '2026-04-19', 'weekly', '2026-04-26'),
  ('CROA disclosure verification', 'Verify all new contracts have proper CROA disclosures', 'SOP-602', NULL, NULL, 'AI Agent Gamma', 'pending', 'critical', 'Compliance', '2026-04-20', 'monthly', '2026-05-20'),
  ('Monthly financial reconciliation', 'Reconcile all client payments vs services delivered', 'SOP-501', NULL, NULL, 'Rick Jefferson', 'pending', 'high', 'Finance', '2026-04-30', 'monthly', '2026-05-30'),
  ('Update marketing content calendar', 'Plan May content: 4 blog posts + 4 videos + social', 'SOP-703', NULL, NULL, 'AI Agent Beta', 'pending', 'normal', 'Marketing', '2026-04-25', 'monthly', '2026-05-25'),
  ('Quarterly business review', 'Q2 planning: review KPIs, adjust strategy, set targets', 'SOP-006', NULL, NULL, 'Rick Jefferson', 'pending', 'high', 'Strategy', '2026-04-30', 'quarterly', '2026-07-30'),
  ('Daily dispute status check', 'Review all pending disputes, process responses, update clients', 'SOP-106', NULL, NULL, 'AI Agent Alpha', 'in_progress', 'high', 'Disputes', '2026-04-15', 'daily', '2026-04-16');

-- Compliance Items
INSERT OR IGNORE INTO compliance_items (title, description, sop_id, category, jurisdiction, status, effective_date, expiration_date, renewal_date, reminder_days_before, responsible_party, cost) VALUES
  ('New Mexico Credit Repair License', 'State credit repair organization registration', 'SOP-603', 'license', 'New Mexico', 'active', '2026-01-15', '2027-01-15', '2026-10-15', 90, 'Rick Jefferson', 250.00),
  ('Surety Bond — $25,000', 'Credit repair surety bond — NM requirement', 'SOP-603', 'bond', 'New Mexico', 'active', '2026-01-01', '2027-01-01', '2026-10-01', 90, 'Rick Jefferson', 375.00),
  ('General Liability Insurance', 'Business general liability — $1M/$2M', 'SOP-605', 'insurance', 'National', 'active', '2026-03-01', '2027-03-01', '2026-12-01', 90, 'Rick Jefferson', 1200.00),
  ('E&O Insurance', 'Errors & Omissions professional liability', 'SOP-605', 'insurance', 'National', 'active', '2026-03-01', '2027-03-01', '2026-12-01', 90, 'Rick Jefferson', 800.00),
  ('Cyber Liability Insurance', 'Data breach + cyber incident coverage', 'SOP-605', 'insurance', 'National', 'active', '2026-03-01', '2027-03-01', '2026-12-01', 90, 'Rick Jefferson', 600.00),
  ('Annual FCRA Training', 'Mandatory FCRA compliance training for all staff', 'SOP-601', 'training', 'Federal', 'active', '2026-01-10', '2027-01-10', '2026-10-10', 90, 'AI Agent Gamma', 0),
  ('CROA Disclosure Review', 'Quarterly review of all CROA disclosures and contracts', 'SOP-602', 'audit', 'Federal', 'active', '2026-04-01', '2026-07-01', '2026-06-01', 30, 'AI Agent Gamma', 0),
  ('Delaware LLC Annual Report', 'Annual report filing for RJ Business Solutions LLC', 'SOP-000', 'filing', 'Delaware', 'active', '2026-06-01', '2026-06-01', '2026-05-01', 30, 'Rick Jefferson', 300.00),
  ('IRS Quarterly Tax Estimate — Q2', 'Estimated quarterly tax payment', 'SOP-501', 'filing', 'Federal', 'active', '2026-06-15', '2026-06-15', '2026-06-01', 14, 'Rick Jefferson', 0),
  ('BOI Report Status Check', 'Corporate Transparency Act — check enforcement status', 'SOP-000', 'filing', 'Federal', 'active', '2026-01-01', '2026-12-31', '2026-06-01', 60, 'AI Agent Gamma', 0),
  ('Privacy Policy Annual Review', 'Review + update privacy policy for 2026 state laws', 'SOP-604', 'legal', 'National', 'active', '2026-01-01', '2027-01-01', '2026-10-01', 90, 'AI Agent Gamma', 0),
  ('Google Workspace Security Audit', 'Audit access controls, 2FA, sharing settings', 'SOP-604', 'audit', 'Internal', 'active', '2026-04-01', '2026-07-01', '2026-06-15', 14, 'AI Agent Gamma', 0);

-- Automations (autopilot rules)
INSERT OR IGNORE INTO automations (name, description, sop_id, trigger_type, trigger_config, action_type, action_config, is_active) VALUES
  ('New Client Auto-Onboarding', 'When client status changes to onboarding, launch SOP-005 workflow', 'SOP-005', 'event', '{"event":"client_status_change","to":"onboarding"}', 'create_workflow', '{"sop_id":"SOP-005","priority":"high","assign":"AI Agent Beta"}', 1),
  ('30-Day Dispute Response Check', 'Check for overdue bureau responses every day', 'SOP-106', 'schedule', '{"cron":"0 9 * * *"}', 'create_task', '{"title":"Check overdue dispute responses","category":"Disputes","priority":"high"}', 1),
  ('Monthly Client Check-Ins', 'Generate check-in tasks for all active clients monthly', 'SOP-401', 'schedule', '{"cron":"0 8 1 * *"}', 'create_task', '{"title":"Monthly check-in","category":"Retention","recurrence":"monthly"}', 1),
  ('Churn Risk Alert', 'Alert when client risk score exceeds 70', 'SOP-405', 'threshold', '{"metric":"client_risk_score","operator":">","value":70}', 'send_notification', '{"type":"escalation","severity":"critical","message":"High churn risk detected"}', 1),
  ('Compliance Expiry Warning', 'Alert 90 days before any license/insurance/bond expires', 'SOP-603', 'date_based', '{"days_before":90,"field":"expiration_date","table":"compliance_items"}', 'send_notification', '{"type":"compliance","severity":"warning","message":"Compliance item expiring soon"}', 1),
  ('Weekly Compliance Audit', 'Auto-generate weekly FCRA audit task', 'SOP-601', 'schedule', '{"cron":"0 8 * * 1"}', 'create_task', '{"title":"Weekly FCRA compliance audit","category":"Compliance","priority":"critical"}', 1),
  ('Score Improvement Celebration', 'Notify when client score increases 50+ points', 'SOP-406', 'threshold', '{"metric":"score_improvement","operator":">=","value":50}', 'send_notification', '{"type":"milestone","severity":"success","message":"Client score improved 50+ points!"}', 1),
  ('Overdue Task Escalation', 'Escalate tasks overdue by 48+ hours', 'SOP-010', 'schedule', '{"cron":"0 10 * * *"}', 'send_notification', '{"type":"escalation","severity":"warning","message":"Task overdue — escalation required"}', 1),
  ('Auto-Generate Monthly Report', 'Create monthly KPI snapshot on 1st of month', 'SOP-007', 'schedule', '{"cron":"0 6 1 * *"}', 'generate_report', '{"report_type":"monthly_kpi","period":"previous_month"}', 1),
  ('New Lead Speed-to-Lead', 'When new lead created, assign task to call within 5 min', 'SOP-012', 'event', '{"event":"client_created","status":"lead"}', 'create_task', '{"title":"Speed-to-lead: call new prospect","priority":"critical","category":"Sales"}', 1);

-- Notifications
INSERT OR IGNORE INTO notifications (recipient, type, channel, title, message, severity, related_type, related_id) VALUES
  ('Rick Jefferson', 'milestone', 'in_app', 'Angela Martinez — GRADUATED!', 'Angela has reached her 700+ goal! Score: 490→710 in 7 months. 12 items deleted. Referral request sent.', 'success', 'client', 6),
  ('AI Agent Alpha', 'task', 'in_app', 'CFPB Escalation Required', 'Wells Fargo dispute for Lisa Chen — bureau failed to respond within 30 days. Escalate to CFPB complaint.', 'critical', 'dispute', 7),
  ('AI Agent Beta', 'escalation', 'in_app', 'Churn Risk: Robert Jackson', 'Robert has missed 2 payments and hasnt logged into portal in 21 days. Risk score: 85. Immediate outreach required.', 'critical', 'client', 7),
  ('Rick Jefferson', 'compliance', 'in_app', 'Q2 Tax Estimate Due June 15', 'IRS quarterly estimated tax payment due in 60 days. Review with accountant.', 'warning', 'compliance', 9),
  ('AI Agent Gamma', 'reminder', 'in_app', 'CROA Quarterly Review Due', 'Quarterly CROA disclosure review due by July 1. Begin audit of all active contracts.', 'info', 'compliance', 7);

-- KPI Snapshots (sample data)
INSERT OR IGNORE INTO kpi_snapshots (period_type, period_date, metric_name, metric_value, metric_unit, category) VALUES
  ('monthly', '2026-03-01', 'active_clients', 5, 'count', 'Growth'),
  ('monthly', '2026-03-01', 'new_clients', 2, 'count', 'Growth'),
  ('monthly', '2026-03-01', 'churned_clients', 0, 'count', 'Retention'),
  ('monthly', '2026-03-01', 'monthly_revenue', 749.95, 'usd', 'Finance'),
  ('monthly', '2026-03-01', 'disputes_filed', 18, 'count', 'Operations'),
  ('monthly', '2026-03-01', 'disputes_deleted', 5, 'count', 'Operations'),
  ('monthly', '2026-03-01', 'deletion_rate', 27.8, 'percent', 'Operations'),
  ('monthly', '2026-03-01', 'avg_score_improvement', 42, 'points', 'Operations'),
  ('monthly', '2026-03-01', 'client_satisfaction', 4.7, 'rating', 'Retention'),
  ('monthly', '2026-03-01', 'compliance_score', 98, 'percent', 'Compliance'),
  ('monthly', '2026-04-01', 'active_clients', 5, 'count', 'Growth'),
  ('monthly', '2026-04-01', 'new_clients', 1, 'count', 'Growth'),
  ('monthly', '2026-04-01', 'churned_clients', 0, 'count', 'Retention'),
  ('monthly', '2026-04-01', 'monthly_revenue', 749.95, 'usd', 'Finance'),
  ('monthly', '2026-04-01', 'disputes_filed', 12, 'count', 'Operations'),
  ('monthly', '2026-04-01', 'disputes_deleted', 3, 'count', 'Operations'),
  ('monthly', '2026-04-01', 'deletion_rate', 25.0, 'percent', 'Operations'),
  ('monthly', '2026-04-01', 'avg_score_improvement', 38, 'points', 'Operations'),
  ('monthly', '2026-04-01', 'client_satisfaction', 4.8, 'rating', 'Retention'),
  ('monthly', '2026-04-01', 'compliance_score', 100, 'percent', 'Compliance');

-- Audit Log entries
INSERT OR IGNORE INTO audit_log (actor, action, entity_type, entity_id, details) VALUES
  ('AI Agent Alpha', 'dispute_sent', 'dispute', 1, 'Round 2 dispute sent to Experian for Marcus Thompson — Capital One identity theft'),
  ('AI Agent Alpha', 'dispute_deleted', 'dispute', 3, 'Midland Credit item DELETED from TransUnion for Marcus Thompson'),
  ('AI Agent Beta', 'workflow_started', 'workflow', 1, 'Onboarding workflow initiated for James Rodriguez'),
  ('AI Agent Gamma', 'compliance_audit', 'compliance', 1, 'Weekly FCRA compliance audit completed — all files compliant'),
  ('system', 'automation_fired', 'automation', 4, 'Churn risk alert triggered for Robert Jackson — risk score 85'),
  ('AI Agent Beta', 'client_graduated', 'client', 6, 'Angela Martinez graduated — 490→710, 12 deletions over 7 months'),
  ('Rick Jefferson', 'task_completed', 'task', 11, 'Q1 quarterly business review completed — on track for targets');
