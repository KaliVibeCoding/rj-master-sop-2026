-- ============================================================
-- MIGRATION 0008: HYPERION ANALYSIS ENGINE
-- Full multi-roadmap analysis, SOP execution tracking,
-- AI agent job results, strategy plans
-- ============================================================

-- Full analysis reports (one per credit_report pull)
CREATE TABLE IF NOT EXISTS analysis_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  credit_report_id INTEGER,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','running','completed','failed')),
  -- Executive Summary
  overall_health_score INTEGER,
  health_grade TEXT,
  top_findings TEXT,
  immediate_actions TEXT,
  -- Score Analysis
  score_analysis TEXT,
  score_projection_30d INTEGER,
  score_projection_60d INTEGER,
  score_projection_90d INTEGER,
  score_projection_12mo INTEGER,
  score_projection_24mo INTEGER,
  projected_score_conservative INTEGER,
  projected_score_moderate INTEGER,
  projected_score_aggressive INTEGER,
  -- FICO Factor Analysis
  factor_payment_history TEXT,
  factor_utilization TEXT,
  factor_credit_age TEXT,
  factor_account_mix TEXT,
  factor_new_credit TEXT,
  utilization_pct REAL,
  -- Legal Audit Results
  metro2_violations TEXT,
  fcra_violations TEXT,
  fdcpa_violations TEXT,
  total_violations INTEGER DEFAULT 0,
  -- 90-Day Action Plan
  action_plan_90day TEXT,
  phase1_actions TEXT,
  phase2_actions TEXT,
  phase3_actions TEXT,
  -- Financial Projections
  interest_savings_annual REAL,
  interest_savings_lifetime REAL,
  estimated_score_gain INTEGER,
  -- Product Matching
  product_matches TEXT,
  -- Behavioral Profile
  behavior_profile TEXT,
  -- Full JSON outputs per agent
  executive_summary TEXT,
  debt_analysis TEXT,
  inquiry_analysis TEXT,
  public_record_analysis TEXT,
  -- Timestamps
  started_at TEXT,
  completed_at TEXT,
  duration_ms INTEGER,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Individual roadmap results (one row per roadmap type per client)
CREATE TABLE IF NOT EXISTS roadmap_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  credit_report_id INTEGER,
  analysis_report_id INTEGER,
  roadmap_type TEXT NOT NULL CHECK(roadmap_type IN (
    'auto_loan','mortgage','business_funding','debt_removal',
    'score_optimization','inquiry_removal','product_match',
    'rate_optimization','90_day_plan','executive_summary'
  )),
  title TEXT,
  content TEXT,
  key_metrics TEXT,
  timeline TEXT,
  probability_score INTEGER,
  estimated_impact TEXT,
  status TEXT DEFAULT 'completed',
  generated_at TEXT DEFAULT (datetime('now')),
  created_at TEXT DEFAULT (datetime('now'))
);

-- SOP execution log
CREATE TABLE IF NOT EXISTS sop_executions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sop_id TEXT NOT NULL,
  sop_title TEXT,
  client_id INTEGER,
  executed_by TEXT DEFAULT 'system',
  trigger_event TEXT,
  input_context TEXT,
  ai_output TEXT,
  status TEXT DEFAULT 'completed' CHECK(status IN ('pending','running','completed','failed')),
  duration_ms INTEGER,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Strategy plans (90-day transformation plans)
CREATE TABLE IF NOT EXISTS strategy_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  plan_name TEXT NOT NULL,
  start_date TEXT,
  target_date TEXT,
  target_score INTEGER,
  current_score INTEGER,
  projected_score_30d INTEGER,
  projected_score_60d INTEGER,
  projected_score_90d INTEGER,
  success_probability REAL,
  estimated_annual_savings REAL,
  phase1_actions TEXT,
  phase2_actions TEXT,
  phase3_actions TEXT,
  completed_actions TEXT,
  status TEXT DEFAULT 'active' CHECK(status IN ('active','completed','paused','abandoned')),
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_analysis_reports_client ON analysis_reports(client_id);
CREATE INDEX IF NOT EXISTS idx_analysis_reports_report ON analysis_reports(credit_report_id);
CREATE INDEX IF NOT EXISTS idx_roadmap_results_client ON roadmap_results(client_id);
CREATE INDEX IF NOT EXISTS idx_roadmap_results_type ON roadmap_results(roadmap_type);
CREATE INDEX IF NOT EXISTS idx_sop_executions_client ON sop_executions(client_id);
CREATE INDEX IF NOT EXISTS idx_sop_executions_sop ON sop_executions(sop_id);
CREATE INDEX IF NOT EXISTS idx_strategy_plans_client ON strategy_plans(client_id);
