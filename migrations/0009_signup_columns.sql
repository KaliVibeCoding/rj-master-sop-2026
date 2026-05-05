-- Migration 0009: Add columns required for self-service signup flow
-- Adds plan, stripe_customer_id, tcpa/croa consent fields to clients
-- Adds total_clicks, referral_type, commission_rate, first_name, last_name to affiliates

ALTER TABLE clients ADD COLUMN plan TEXT DEFAULT 'standard';
ALTER TABLE clients ADD COLUMN stripe_customer_id TEXT;
ALTER TABLE clients ADD COLUMN tcpa_consent INTEGER DEFAULT 0;
ALTER TABLE clients ADD COLUMN tcpa_consent_date TEXT;
ALTER TABLE clients ADD COLUMN croa_disclosure_signed INTEGER DEFAULT 0;
ALTER TABLE clients ADD COLUMN croa_disclosure_date TEXT;

ALTER TABLE affiliates ADD COLUMN total_clicks INTEGER DEFAULT 0;
ALTER TABLE affiliates ADD COLUMN referral_type TEXT;
ALTER TABLE affiliates ADD COLUMN commission_rate REAL DEFAULT 0.20;
ALTER TABLE affiliates ADD COLUMN first_name TEXT;
ALTER TABLE affiliates ADD COLUMN last_name TEXT;
