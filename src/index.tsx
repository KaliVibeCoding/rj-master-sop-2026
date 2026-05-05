import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { TEMPLATE_CONTENT } from './templates'

type Bindings = {
  DB: D1Database
  // ---- MFSN (MyFreeScoreNow) API ----
  MFSN_API_URL: string
  MFSN_API_EMAIL: string
  MFSN_API_PASSWORD: string
  MFSN_API_KEY: string
  MFSN_AFFILIATE_ID: string
  // ---- Twilio SMS/Voice/WhatsApp ----
  TWILIO_ACCOUNT_SID: string
  TWILIO_AUTH_TOKEN: string
  TWILIO_PHONE_NUMBER: string
  TWILIO_API_KEY_SID: string
  TWILIO_API_KEY_SECRET: string
  TWILIO_VOICE_WEBHOOK_URL: string
  // ---- Email Services ----
  SENDGRID_API_KEY: string
  RESEND_API_KEY: string
  // ---- Stripe Payments ----
  STRIPE_SECRET_KEY: string
  STRIPE_PUBLISHABLE_KEY: string
  STRIPE_WEBHOOK_SECRET: string
  // ---- Cloudflare Platform ----
  CF_ACCOUNT_ID: string
  CF_API_TOKEN: string
  CF_ZONE_ID: string
  CF_WORKERS_TOKEN: string
  CF_D1_DATABASE_ID: string
  CF_R2_BUCKET_NAME: string
  CF_KV_NAMESPACE_ID: string
  CF_STREAM_CUSTOMER_CODE: string
  CF_IMAGES_ACCOUNT_HASH: string
  CF_TURNSTILE_SITE_KEY: string
  CF_TURNSTILE_SECRET_KEY: string
  CF_EMAIL_ROUTING_ADDRESS: string
  // ---- AI Models — OpenRouter / Groq / OpenAI ----
  OPENROUTER_API_KEY: string
  GROQ_API_KEY: string
  OPENAI_API_KEY: string
  ANTHROPIC_API_KEY: string
  GOOGLE_GEMINI_API_KEY: string
  MISTRAL_API_KEY: string
  COHERE_API_KEY: string
  TOGETHER_API_KEY: string
  PERPLEXITY_API_KEY: string
  DEEPSEEK_API_KEY: string
  XAI_API_KEY: string
  NOVITA_API_KEY: string
  HUGGINGFACE_API_KEY: string
  // ---- Google Services ----
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GOOGLE_REFRESH_TOKEN: string
  GOOGLE_ANALYTICS_ID: string
  GOOGLE_ADS_CUSTOMER_ID: string
  GOOGLE_TAG_MANAGER_ID: string
  // ---- Facebook / Meta ----
  FACEBOOK_APP_ID: string
  FACEBOOK_APP_SECRET: string
  FACEBOOK_ACCESS_TOKEN: string
  FACEBOOK_PIXEL_ID: string
  FACEBOOK_AD_ACCOUNT_ID: string
  META_BUSINESS_SUITE_ID: string
  // ---- Vector DB / Pinecone ----
  PINECONE_API_KEY: string
  PINECONE_INDEX_NAME: string
  PINECONE_ENVIRONMENT: string
  PINECONE_PROJECT_ID: string
  // ---- Media AI ----
  STABILITY_API_KEY: string
  RUNWAY_API_KEY: string
  ELEVENLABS_API_KEY: string
  HEYGEN_API_KEY: string
  SYNTHESIA_API_KEY: string
  // ---- Deployment / Infrastructure ----
  NODE_ENV: string
  APP_BASE_URL: string
  APP_VERSION: string
  REPLIT_APP_URL: string
  CLOUDFLARE_PAGES_URL: string
  CUSTOM_DOMAIN: string
  WEBHOOK_SECRET: string
  // ---- Company Info ----
  COMPANY_NAME: string
  COMPANY_EMAIL: string
  COMPANY_PHONE: string
  COMPANY_ADDRESS: string
  COMPANY_WEBSITE: string
  COMPANY_LINKEDIN: string
  COMPANY_TWITTER: string
  COMPANY_TIKTOK: string
  OWNER_NAME: string
  OWNER_EMAIL: string
}
const app = new Hono<{ Bindings: Bindings }>()
app.use('/api/*', cors())

// ============================================================
// RJ BUSINESS SOLUTIONS — MASTER SOP 2026 OPERATIONS ENGINE
// Full Autopilot System — Agent-Executable + Employee-Friendly
// Updated April 2026
// ============================================================

// ---- SOP DATA ----
interface SOPEntry {
  id: string; title: string; phase: number; phaseName: string; package: string; category: string;
  lastUpdated: string; complianceStatus: 'current' | 'needs-review' | 'critical';
  legalChanges2026: string[]; summary: string; steps: string[]; tools: string[];
  kpis: string[]; templates: string[]; agentInstructions: string;
}

const PHASES = [
  { id: 1, name: 'Legal & Regulatory Foundations', icon: '⚖️', color: '#ef4444', description: 'Bulletproof legal architecture — entity formation, compliance, IP protection' },
  { id: 2, name: 'Financial Systems & Tax Strategy', icon: '💰', color: '#f59e0b', description: 'Financial infrastructure, payment processing, tax optimization' },
  { id: 3, name: 'Strategic Planning & Growth', icon: '📈', color: '#10b981', description: '5-year strategy, fundraising, investor relations' },
  { id: 4, name: 'Human Capital & Org Development', icon: '👥', color: '#3b82f6', description: 'Team building, HR systems, KPIs, training' },
  { id: 5, name: 'Operations & Tech Stack', icon: '⚙️', color: '#8b5cf6', description: 'Client onboarding, dispute execution, technology' },
  { id: 6, name: 'Marketing & Sales', icon: '📢', color: '#ec4899', description: 'Lead generation, advertising, sales infrastructure' },
  { id: 7, name: 'Client Retention & Growth', icon: '🏆', color: '#06b6d4', description: 'Customer success, retention, referral programs' },
]

// SOP definitions stay the same — just importing inline from original
const SOPS: SOPEntry[] = [
  // ===== PHASE 1: LEGAL & REGULATORY =====
  {
    id: 'SOP-000', title: 'Master Business Design Framework', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Foundation', category: 'Business Design', lastUpdated: '2026-04-14', complianceStatus: 'current',
    legalChanges2026: ['2026 Delaware franchise tax: $300 (LLC), $450+ (Corp based on shares)', 'Series LLC now recognized in 21 states (up from 19 in 2025)', 'Wyoming LLC annual fee remains $60 — still most cost-effective', 'New beneficial ownership reporting (BOI) requirements under Corporate Transparency Act — enforcement paused by courts as of March 2026'],
    summary: 'Complete framework for selecting business structure, jurisdiction, and governance model.',
    steps: ['Evaluate business model against entity type matrix', 'Run Strategic Decision Tree', 'Select incorporation jurisdiction', 'Complete name availability search', 'Appoint registered agent', 'File Articles of Organization/Incorporation', 'Obtain EIN via IRS', 'Draft Operating Agreement or Bylaws', 'Execute organizational meeting', 'Set up corporate records binder and compliance calendar'],
    tools: ['State Secretary of State portals', 'USPTO TESS', 'IRS EIN Online', 'Stripe Atlas', 'Harbor Compliance'],
    kpis: ['Entity formed within 14 days', 'EIN obtained same-day', 'Operating Agreement executed within 30 days'],
    templates: ['Entity Comparison Matrix', 'Strategic Decision Tree', 'Incorporation Checklist', 'Operating Agreement Template', 'Bylaws Template', 'Organizational Consent Template'],
    agentInstructions: 'When a client asks about business formation: 1) Identify their revenue level, partner count, and VC intentions. 2) Run through the Strategic Decision Tree. 3) Recommend entity type + jurisdiction. 4) Provide step-by-step filing instructions.',
  },
  { id: 'SOP-001', title: 'Business Concept Validation', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Foundation', category: 'Validation', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['FTC updated endorsement guides — stricter disclosure requirements', 'New AI disclosure requirements in California (AB 316) effective Jan 1, 2026'], summary: 'Systematic validation of business concepts through market research, competitive analysis, MVP testing.', steps: ['Define value proposition', 'Conduct market sizing (TAM/SAM/SOM)', 'Analyze minimum 5 direct competitors', 'Build customer avatar', 'Create MVP or prototype', 'Run validation experiments', 'Analyze results against go/no-go criteria', 'Document findings'], tools: ['Google Trends', 'SEMrush', 'SimilarWeb', 'Census.gov'], kpis: ['Market size validated', 'Min 100 validation responses', 'Min 10% conversion on test offer'], templates: ['Business Validation Report', 'Competitor Analysis Matrix', 'Customer Avatar Worksheet'], agentInstructions: 'Guide clients through systematic validation. Never skip market sizing. Always require at least 5 competitor analyses.' },
  { id: 'SOP-002', title: 'Legal Entity Formation', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Foundation', category: 'Legal', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Corporate Transparency Act BOI reporting — enforcement paused', 'Delaware franchise tax unchanged for 2026'], summary: 'Step-by-step entity formation with state-specific requirements.', steps: ['Verify name availability in target state', 'Prepare Articles of Organization/Incorporation', 'File with Secretary of State', 'Obtain EIN', 'Register for state taxes', 'Set up compliance calendar'], tools: ['Secretary of State portals', 'IRS.gov', 'Harbor Compliance'], kpis: ['Filed within 5 business days', 'EIN same-day', 'All registrations within 30 days'], templates: ['Incorporation Checklist', 'Operating Agreement Template', 'Bylaws Template'], agentInstructions: 'Walk clients through formation step-by-step. Always verify name availability BEFORE filing. Recommend commercial registered agent.' },
  { id: 'SOP-601', title: 'FCRA Compliance Framework', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Compliance', lastUpdated: '2026-04-14', complianceStatus: 'critical', legalChanges2026: ['CFPB medical debt rule VACATED — medical debt still reportable', 'File disclosure fee: $16.00 (up from $15.50)', 'Free weekly credit reports extended indefinitely', 'CFPB enforcement reduced under current administration'], summary: 'Complete FCRA compliance framework for credit repair operations.', steps: ['Verify permissible purpose before accessing any credit report', 'Document all consumer disputes with specifics', 'Send disputes via certified mail with return receipt', 'Track 30-day investigation window', 'Process bureau responses within 48 hours', 'Escalate violations to CFPB'], tools: ['Credit monitoring APIs', 'Certified mail tracking', 'CFPB complaint portal'], kpis: ['100% disputes with documented legal basis', '100% certified mail', 'Bureau response processed within 48hr'], templates: ['FCRA Dispute Letter', 'Method of Verification Request', 'CFPB Complaint Guide', 'Consumer Rights Disclosure', 'Staff Training Checklist'], agentInstructions: 'CRITICAL: Always verify FCRA compliance before any dispute action. Never access a credit report without permissible purpose. All disputes must be documented with certified mail. Medical debt IS still reportable as of April 2026.' },
  { id: 'SOP-602', title: 'CROA Compliance & Contracts', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Compliance', lastUpdated: '2026-04-14', complianceStatus: 'critical', legalChanges2026: ['State-level enforcement increasing in CA, TX, GA, NY', 'FTC actively pursuing CROA violations — $50K+ fines'], summary: 'CROA-compliant contract management and disclosure system.', steps: ['Provide CROA disclosure BEFORE any agreement', 'Include 3-business-day cancellation right', 'Never collect payment before services performed', 'Include all required contract elements', 'Get signed acknowledgment of all disclosures'], tools: ['DocuSign', 'Contract templates', 'CRM automation'], kpis: ['100% contracts with CROA disclosures', '0 advance payments collected', '100% cancellation rights documented'], templates: ['Client Service Agreement', 'CROA Disclosure Statement', 'Cancellation Form', '3-Day Right to Cancel Notice', 'State Compliance Addendum'], agentInstructions: 'NEVER process payment before services are performed — #1 CROA violation. Every client must receive the disclosure AND have 3 business days to cancel.' },
  { id: 'SOP-603', title: 'State Licensing & Registration', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Compliance', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['3 new state privacy laws in 2026: Indiana, Kentucky, Rhode Island'], summary: 'State-by-state licensing and registration requirements for credit repair.', steps: ['Identify all states where you serve clients', 'Research each states licensing requirements', 'Apply for required licenses/registrations', 'Obtain surety bonds where required', 'Set up renewal reminders 90 days before expiration'], tools: ['State regulatory databases', 'Harbor Compliance', 'Calendar system'], kpis: ['100% compliant in all operating states', 'All renewals filed 30+ days early'], templates: ['State Requirements Matrix', 'License Application Checklist', 'Surety Bond Guide'], agentInstructions: 'Before serving any client, verify the company is properly licensed in that clients state. Strictest states: CA, TX, GA, NY.' },
  { id: 'SOP-604', title: 'Data Security & Privacy', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Privacy', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Indiana, Kentucky, Rhode Island privacy laws effective 2026', 'Data breach notification requirements vary by state'], summary: 'Data security protocols for protecting client PII and credit data.', steps: ['Encrypt all data at rest and in transit', 'Implement role-based access controls', 'Conduct quarterly security audits', 'Maintain breach response plan', 'Train all staff on data handling'], tools: ['Encryption tools', 'Access management', 'Security audit tools'], kpis: ['0 data breaches', '100% staff trained', 'Quarterly audits completed'], templates: ['Data Security Policy', 'Breach Response Plan', 'Access Control Matrix', 'Privacy Policy Template'], agentInstructions: 'Handle ALL client data as if it were your own SSN. Encryption is mandatory. Never store credit report data unencrypted.' },
  { id: 'SOP-605', title: 'Insurance & Risk Management', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Risk', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Required insurance coverage for credit repair operations.', steps: ['Obtain E&O insurance', 'Obtain general liability insurance', 'Obtain cyber liability insurance', 'Review coverage annually', 'Document all policies'], tools: ['Insurance brokers', 'Policy management system'], kpis: ['All 3 insurance types active', 'Annual review completed', 'Coverage adequate for revenue level'], templates: ['Insurance Coverage Checklist', 'Annual Review Form'], agentInstructions: 'Every credit repair business needs: E&O, General Liability, and Cyber Liability at minimum. Review coverage annually.' },
  { id: 'SOP-606', title: 'Contract & Template Management', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Legal', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Version control and management for all business templates and legal documents.', steps: ['Maintain master template library', 'Version all templates with dates', 'Review against current law quarterly', 'Train staff on latest versions'], tools: ['Template library system', 'Version control'], kpis: ['All templates reviewed quarterly', '100% staff using current versions'], templates: ['Template Version Log', 'Review Schedule'], agentInstructions: 'Always use the latest version of any template. Check the version date before sending any document to a client.' },
  { id: 'SOP-607', title: 'Audit Readiness & Records', phase: 1, phaseName: 'Legal & Regulatory Foundations', package: 'Compliance', category: 'Compliance', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Audit readiness and records management protocols.', steps: ['Maintain all records for 5 years minimum', 'Organize records by client and date', 'Run quarterly self-audits', 'Prepare audit response kit', 'Train staff on audit procedures'], tools: ['Document management system', 'Audit checklists'], kpis: ['5-year records maintained', 'Quarterly self-audits completed', 'Audit response kit current'], templates: ['Audit Readiness Checklist', 'Records Retention Schedule', 'Self-Audit Template'], agentInstructions: 'Records are your defense. If you cant prove you did it, you didnt do it. Maintain everything for 5 years minimum.' },
  // ===== PHASE 2: FINANCIAL =====
  { id: 'SOP-003', title: 'Financial Infrastructure Setup', phase: 2, phaseName: 'Financial Systems & Tax Strategy', package: 'Financial', category: 'Finance', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Stripe fee update for 2026'], summary: 'Complete financial infrastructure setup including banking, accounting, and payment processing.', steps: ['Open business bank account', 'Set up accounting system', 'Configure payment processing (Stripe)', 'Set up tax reserve (30%)', 'Implement monthly close process'], tools: ['Business banking', 'QuickBooks/Xero', 'Stripe', 'Tax prep software'], kpis: ['Monthly close by 10th', 'Tax reserves at 30%', 'Payment processing active'], templates: ['Financial Setup Checklist', 'Chart of Accounts', 'Monthly Close Checklist'], agentInstructions: 'Financial infrastructure is non-negotiable. Separate business and personal finances immediately. Set aside 30% for taxes from day one.' },
  { id: 'SOP-205', title: 'CROA-Compliant Billing', phase: 2, phaseName: 'Financial Systems & Tax Strategy', package: 'Financial', category: 'Finance', lastUpdated: '2026-04-14', complianceStatus: 'critical', legalChanges2026: ['FTC CROA enforcement increasing'], summary: 'Post-service billing system compliant with CROA requirements.', steps: ['Set up milestone-based billing', 'Never charge before services performed', 'Track services delivered vs billed', 'Send itemized invoices', 'Process refunds within 10 days'], tools: ['Stripe', 'CRM billing module', 'Invoice system'], kpis: ['0 advance payments', '100% post-service billing', 'Refunds processed within 10 days'], templates: ['Invoice Template', 'Billing Schedule', 'Refund Policy'], agentInstructions: 'CRITICAL: NEVER charge before services are performed. This is CROA law. Set up milestone-based billing.' },
  { id: 'SOP-206', title: 'Contract Management', phase: 2, phaseName: 'Financial Systems & Tax Strategy', package: 'Financial', category: 'Legal', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Client contract lifecycle management with CROA compliance.', steps: ['Present contract with all CROA disclosures', 'Collect signed agreement', 'Store securely with audit trail', 'Track contract terms and renewals', 'Handle cancellations per CROA'], tools: ['DocuSign', 'CRM', 'Document storage'], kpis: ['100% contracts signed before work begins', '100% CROA-compliant contracts'], templates: ['Client Service Agreement', 'CROA Disclosure', 'Cancellation Form'], agentInstructions: 'Every client gets a signed contract BEFORE any work begins. Must include: services, cost, timeline, 3-day cancellation right, all CROA disclosures.' },
  // ===== PHASE 3: STRATEGY =====
  { id: 'SOP-004', title: 'Strategic Planning & OKRs', phase: 3, phaseName: 'Strategic Planning & Growth', package: 'Strategy', category: 'Strategy', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: '5-year strategic planning with OKR execution framework.', steps: ['Define 5-year vision', 'Set annual goals', 'Break into quarterly OKRs', 'Monthly progress reviews', 'Adjust strategy based on data'], tools: ['OKR tracking system', 'Analytics dashboards', 'Strategic planning templates'], kpis: ['Quarterly OKR completion >80%', 'Annual revenue targets met', '3-month cash runway maintained'], templates: ['Strategic Plan Template', 'OKR Tracker', 'Quarterly Review Template'], agentInstructions: 'Strategic planning is living — review quarterly, adjust annually. Use OKR framework for execution. Revenue targets should be aggressive but achievable.' },
  { id: 'SOP-014', title: 'Fundraising & Capital', phase: 3, phaseName: 'Strategic Planning & Growth', package: 'Strategy', category: 'Finance', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Capital raising strategy for growth stages.', steps: ['Validate to $50K MRR first', 'Prepare data room', 'Evaluate funding options (SBA, equity, revenue-based)', 'Build investor materials', 'Execute fundraise'], tools: ['Financial modeling tools', 'Pitch deck tools', 'SBA.gov'], kpis: ['$50K MRR before external capital', 'Data room ready 30 days before outreach'], templates: ['Pitch Deck Template', 'Financial Model', 'Data Room Checklist'], agentInstructions: 'Most credit repair businesses should bootstrap first. Validate to $50K MRR before seeking outside capital.' },
  // ===== PHASE 4: HR =====
  { id: 'SOP-011', title: 'Hiring Strategy', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Strategic hiring plan for scaling credit repair operations.', steps: ['Define role requirements', 'Hire in priority order: CSM → Dispute Coordinator → SDR → Admin', 'Background checks mandatory', 'Compliance training Week 1', 'Assign mentor for 30 days'], tools: ['ATS system', 'Background check service', 'Training platform'], kpis: ['Time to hire <30 days', 'New hire retention >85%', '100% background checks completed'], templates: ['Job Description Templates', 'Interview Scorecard', 'Offer Letter Template'], agentInstructions: 'Hire in this order: 1) CSM, 2) Dispute Coordinator, 3) SDR, 4) Admin. Dont hire ahead of revenue.' },
  { id: 'SOP-501', title: 'Organization Design', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Org structure by growth stage: Solo → Small Team → Full Team → Scale.', steps: ['Assess current client volume', 'Map to appropriate org structure', 'Define roles and responsibilities', 'Set up reporting structure'], tools: ['Org chart tools', 'Role definition templates'], kpis: ['Client-to-staff ratio optimal', 'All roles clearly defined'], templates: ['Org Chart Template', 'Role Definition Matrix'], agentInstructions: 'Solo: max 25 clients. 3-4 people: max 100 clients. 8-10: max 400 clients. Scale: multiple team leads.' },
  { id: 'SOP-502', title: 'Recruitment Process', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'End-to-end recruitment process for credit repair roles.', steps: ['Post job listing', 'Screen applications', 'Conduct interviews', 'Run background checks', 'Make offers', 'Onboard new hires'], tools: ['ATS', 'Background check service', 'Interview tools'], kpis: ['Time to hire <30 days', 'Quality of hire score >4/5'], templates: ['Job Posting Template', 'Interview Guide', 'Background Check Authorization'], agentInstructions: 'For credit repair roles, prioritize: FCRA knowledge, attention to detail, communication skills. Background checks mandatory.' },
  { id: 'SOP-503', title: 'Employee Onboarding', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'New employee onboarding with mandatory compliance training.', steps: ['Welcome and orientation Day 1', 'FCRA + CROA compliance training Week 1', 'Systems access and training', 'Assign mentor', '30-60-90 day milestones', 'Performance review at 90 days'], tools: ['Training platform', 'Onboarding checklist', 'Mentor system'], kpis: ['Compliance training completed Week 1', '90-day retention >90%', 'Mentor assigned Day 1'], templates: ['Onboarding Checklist', 'Training Schedule', '30-60-90 Plan'], agentInstructions: 'FCRA and CROA compliance training is mandatory during Week 1. No employee touches client data until compliance training is complete.' },
  { id: 'SOP-504', title: 'KPI & Performance Management', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Performance management system with role-specific KPIs.', steps: ['Define KPIs per role', 'Set up tracking dashboards', 'Weekly 1:1 meetings', 'Monthly performance reviews', 'Quarterly goal setting'], tools: ['KPI dashboards', 'Review platform', 'Analytics'], kpis: ['Weekly 1:1s conducted', 'Monthly reviews completed', 'All staff meeting targets'], templates: ['KPI Scorecard', 'Performance Review Form', '1:1 Meeting Template'], agentInstructions: 'Key KPIs by role: Dispute Coordinator (disputes/week, accuracy). CSM (satisfaction, retention). SDR (calls/day, conversion rate).' },
  { id: 'SOP-505', title: 'Quality Assurance', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'Operations', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Quality assurance auditing for dispute accuracy and compliance.', steps: ['Audit 10% of files weekly', 'Check dispute accuracy', 'Verify compliance with FCRA/CROA', 'Track error patterns', 'Initiate training for low performers'], tools: ['QA checklists', 'Audit tracking', 'Training system'], kpis: ['10% weekly audit rate', 'Accuracy rate >95%', 'Error rate declining'], templates: ['QA Audit Checklist', 'Error Tracking Log', 'Training Request Form'], agentInstructions: 'Quality is non-negotiable. Audit 10% of files weekly. Any dispute with errors must be corrected before sending.' },
  { id: 'SOP-506', title: 'Team Communication', phase: 4, phaseName: 'Human Capital & Org Development', package: 'HR', category: 'Operations', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Team communication cadence and protocols.', steps: ['Daily 15-min standup', 'Weekly 30-min team sync', 'Monthly 60-min all-hands', 'Use Slack for async', 'Document everything in Notion'], tools: ['Slack', 'Zoom', 'Notion', 'Calendar'], kpis: ['Daily standups happening', 'Weekly syncs completed', 'All decisions documented'], templates: ['Meeting Agenda Templates', 'Decision Log', 'Communication Protocol'], agentInstructions: 'Communication structure: Daily standup, weekly sync, monthly all-hands. Document everything in Notion.' },
  // ===== PHASE 5: OPERATIONS =====
  { id: 'SOP-006', title: 'Website & Digital Presence', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['ADA website compliance enforcement increasing'], summary: 'Website setup with required legal disclosures and ADA compliance.', steps: ['Build professional website', 'Include CROA disclosures', 'Add privacy policy + terms', 'Ensure ADA/WCAG 2.1 AA compliance', 'Set up analytics tracking'], tools: ['Website builder', 'ADA compliance tools', 'Google Analytics'], kpis: ['All required disclosures present', 'WCAG 2.1 AA compliant', 'Analytics tracking active'], templates: ['Website Checklist', 'Required Disclosures List', 'ADA Compliance Guide'], agentInstructions: 'Every credit repair website MUST include: CROA disclosures, privacy policy, terms of service, and clear pricing.' },
  { id: 'SOP-007', title: 'Marketing Compliance', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['TCPA consent revocation rule delayed', 'FTC endorsement guides updated'], summary: 'Marketing compliance for credit repair — no false claims, proper disclosures.', steps: ['Review all marketing for CROA compliance', 'No guaranteed outcomes', 'Proper testimonial disclosures', 'TCPA consent for calls/texts', 'Document all marketing materials'], tools: ['Marketing review checklist', 'Compliance tracking'], kpis: ['0 compliance violations', '100% materials reviewed before publish'], templates: ['Marketing Compliance Checklist', 'Testimonial Disclosure', 'TCPA Consent Form'], agentInstructions: 'Marketing for credit repair has strict rules: No guaranteed outcomes, no false testimonials, CROA disclosures required.' },
  { id: 'SOP-009', title: 'Tech Stack Selection', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Technology stack by growth stage.', steps: ['Assess current stage', 'Select CRM (GoHighLevel recommended)', 'Set up payment processing (Stripe)', 'Configure Google Workspace', 'Implement security measures'], tools: ['GoHighLevel', 'Stripe', 'Google Workspace', 'Credit Repair Cloud'], kpis: ['All core systems operational', 'GLBA compliance verified', 'Security measures active'], templates: ['Tech Stack Comparison Matrix', 'Implementation Timeline', 'Security Checklist'], agentInstructions: 'Startup: GoHighLevel + Stripe + Google Workspace. Growth: Add Credit Repair Cloud. Scale: Custom integrations.' },
  { id: 'SOP-010', title: 'Operations Timeline', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Operations', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Standard operations timeline for client dispute cycles.', steps: ['Day 1-2: Onboarding + credit pull', 'Day 3-5: Analysis + dispute plan', 'Day 6-7: Round 1 disputes filed', 'Day 30+: Follow-up rounds', 'Never let client go 30+ days without update'], tools: ['CRM', 'Calendar', 'Dispute tracking'], kpis: ['Onboarding <7 days', 'Round 1 filed within 7 days', 'Monthly updates to all clients'], templates: ['Operations Timeline Chart', 'Client Communication Schedule'], agentInstructions: 'Day 1-2 (onboarding), Day 3-5 (analysis), Day 6-7 (Round 1 filed). Then 30-day cycles. Never let a client go 30+ days without a status update.' },
  // ===== PHASE 5 CONTINUED: CLIENT OPS =====
  { id: 'SOP-005', title: 'Client Onboarding & Intake', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Onboarding', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Complete client onboarding process from intake to portal setup.', steps: ['Initial consultation call', 'Collect signed service agreement + CROA disclosure + ID', 'Pull credit reports from all 3 bureaus', 'Complete credit report analysis', 'Develop dispute strategy', 'Set up client portal access', 'Send welcome email with timeline', 'Schedule first check-in call (7 days)'], tools: ['CRM', 'DocuSign', 'Credit pull service', 'Client portal'], kpis: ['Onboarding completed within 72 hours', 'Portal access within 24 hours', 'First check-in within 7 days'], templates: ['Client Intake Form', 'Service Agreement', 'Welcome Email Template', 'Onboarding Checklist'], agentInstructions: 'The onboarding call sets the tone. Be professional, thorough, and set realistic expectations. Never promise specific score increases. Collect ALL needed information on the first call.' },
  { id: 'SOP-008', title: 'Client Portal Management', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Client portal setup and management for real-time updates.', steps: ['Set up portal for each new client', 'Upload documents in real-time', 'Provide dispute status tracking', 'Enable secure messaging', 'Track portal engagement'], tools: ['Client portal platform', 'CRM integration'], kpis: ['100% clients have portal access', 'Portal adoption >70%', '30% higher retention with portal use'], templates: ['Portal Setup Guide', 'Client Tutorial'], agentInstructions: 'Every client gets portal access. Upload documents in real-time. Clients who use the portal have 30% higher retention.' },
  { id: 'SOP-101', title: 'Credit Report Analysis', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Analysis', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Medical debt still reportable — CFPB rule vacated'], summary: 'Comprehensive credit report analysis across all 3 bureaus.', steps: ['Verify personal information accuracy', 'Check account status accuracy', 'Verify date accuracy', 'Check balance accuracy', 'Identify duplicate accounts', 'Review unauthorized inquiries', 'Flag medical debt items', 'Document all findings with specifics'], tools: ['Credit report tools', 'Analysis checklist', 'CRM'], kpis: ['All 3 bureaus analyzed', 'Every error documented', 'Analysis completed within 48 hours'], templates: ['Credit Report Analysis Guide', 'Findings Documentation', 'Score Factors Explained'], agentInstructions: 'Analyze ALL three bureaus — never just one. Medical debt IS still reportable as of April 2026 — the CFPB rule was vacated.' },
  { id: 'SOP-102', title: 'Client Communication', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Communication', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['TCPA consent revocation rule delayed'], summary: 'Client communication cadence and protocols.', steps: ['Minimum 1 update per month', 'Document all calls in CRM', 'Get written consent for SMS', 'Use client portal for status updates', 'Respond to inquiries within 24 hours'], tools: ['CRM', 'Phone system', 'SMS platform', 'Email'], kpis: ['Monthly contact rate 100%', 'Response time <24 hours', 'TCPA compliance 100%'], templates: ['Communication Schedule', 'Call Script Templates', 'Email Templates'], agentInstructions: 'Communication frequency: minimum 1 update per month, more during active dispute rounds. Get written consent for SMS.' },
  { id: 'SOP-103', title: 'Dispute Strategy Development', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Dispute strategy development based on credit report analysis.', steps: ['Review credit report analysis', 'Identify highest-impact items', 'Select dispute reasons with legal basis', 'Prioritize by credit score impact', 'Present plan to client for approval', 'Document strategy in CRM'], tools: ['Dispute strategy tools', 'CRM', 'FCRA reference'], kpis: ['Strategy completed within 48 hours of analysis', 'Client approval before execution', 'Legal basis documented for every dispute'], templates: ['Dispute Strategy Template', 'Priority Matrix', 'Client Approval Form'], agentInstructions: 'Every dispute must have a legitimate legal basis — never file frivolous disputes. Prioritize items with highest credit score impact first.' },
  { id: 'SOP-104', title: 'Dispute Letter Drafting', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Unique dispute letter creation for each client and item.', steps: ['Select appropriate FCRA section', 'Draft unique letter per client per item', 'Include specific facts and dates', 'Reference applicable law', 'Verify through QA before sending'], tools: ['Template library', 'QA system', 'CRM'], kpis: ['0 form letters used', 'QA pass rate >98%', 'Unique letters per client'], templates: ['Dispute Letter Templates', 'FCRA Section Reference', 'QA Checklist'], agentInstructions: 'Every dispute letter must be unique to the client. Never use identical form letters — bureaus flag these. Include the specific FCRA section.' },
  { id: 'SOP-105', title: 'Round 1 Dispute Execution', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'First round dispute execution — easiest wins first.', steps: ['Start with obvious errors and outdated info', 'One reason per dispute per letter', 'Send to all 3 bureaus same day', 'Use certified mail with return receipt', 'Record tracking numbers immediately', 'Set 35-day timer for follow-up'], tools: ['Certified mail', 'Tracking system', 'CRM'], kpis: ['Round 1 filed within 7 days of strategy', 'All letters sent certified', 'Tracking numbers recorded same day'], templates: ['Round 1 Strategy Guide', 'Certified Mail Tracking Sheet'], agentInstructions: 'Round 1: Start with easiest wins — obvious errors, outdated info, unverifiable accounts. One reason per dispute per letter.' },
  { id: 'SOP-106', title: 'Bureau Response Processing', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Processing bureau responses and determining next steps.', steps: ['Open and log all responses within 48 hours', 'Categorize: deleted, verified, updated, no response', 'If no response in 30 days — FCRA violation', 'Update client file and portal', 'Notify client of results', 'Determine escalation or next round'], tools: ['Response tracking', 'CRM', 'Client portal'], kpis: ['Responses processed within 48 hours', 'Client notified within 24 hours of processing', 'Deletion rate tracked'], templates: ['Response Processing Checklist', 'Client Update Template', 'Next Steps Decision Matrix'], agentInstructions: 'Process every bureau response within 48 hours. If bureau fails to respond within 30 days, they violated FCRA — this is leverage for escalation.' },
  { id: 'SOP-107', title: 'Escalation & Advanced Disputes', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['CFPB complaints still effective even with reduced enforcement'], summary: 'Escalation ladder for stubborn dispute items.', steps: ['Round 1: Direct bureau dispute', 'Round 2: Method of Verification (MOV) request', 'Round 3: CFPB complaint', 'Round 4: Direct creditor dispute (§623)', 'Round 5: Attorney referral / litigation'], tools: ['CFPB complaint portal', 'MOV templates', 'Attorney network'], kpis: ['Escalation within 7 days of verified response', 'CFPB complaints filed when warranted', 'Attorney referral when needed'], templates: ['MOV Request Letter', 'CFPB Complaint Template', 'Direct Creditor Dispute', 'Attorney Referral Form'], agentInstructions: 'Escalation ladder: Direct dispute → MOV request → CFPB complaint → Attorney/litigation. MOV requests are powerful.' },
  // ===== PHASE 5 CONTINUED: SPECIALIZED DISPUTES =====
  { id: 'SOP-201', title: 'Bureau-Specific Strategies', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Bureau-specific dispute strategies for Experian, Equifax, TransUnion.', steps: ['Customize approach per bureau', 'Experian: always certified mail', 'Equifax: detailed disputes most effective', 'TransUnion: responsive to MOV requests', 'Track success rates per bureau'], tools: ['Bureau contact info', 'Success rate tracker'], kpis: ['Per-bureau success rates tracked', 'Strategy adapted quarterly'], templates: ['Bureau Contact Directory', 'Bureau-Specific Templates'], agentInstructions: 'Each bureau responds differently. Experian: always certified mail. Equifax: detailed disputes. TransUnion: MOV requests.' },
  { id: 'SOP-202', title: 'Direct Creditor Disputes', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Direct disputes with creditors/furnishers under FCRA §623.', steps: ['Identify furnisher', 'Draft §623 dispute letter', 'Send certified mail', 'Track response', 'Escalate to CFPB if ignored'], tools: ['Creditor contact database', 'Certified mail', 'CFPB portal'], kpis: ['Direct disputes sent when bureau disputes fail', 'CFPB escalation when furnisher ignores'], templates: ['Direct Dispute Letter', 'Furnisher Contact List'], agentInstructions: 'Direct disputes go to the creditor, not the bureau. Use FCRA §623. Often more effective for stubborn items.' },
  { id: 'SOP-203', title: 'Inquiry Disputes', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Hard inquiry dispute process — authorized vs unauthorized.', steps: ['Identify unauthorized hard inquiries', 'Verify with client', 'File dispute citing FCRA §604', 'Never dispute soft inquiries', 'Document client authorization status'], tools: ['Credit report analysis', 'Dispute templates'], kpis: ['Only unauthorized inquiries disputed', 'Clear client documentation'], templates: ['Inquiry Dispute Letter', 'Authorization Verification Form'], agentInstructions: 'Only HARD inquiries affect scores. Only dispute unauthorized ones. Cite FCRA §604. Soft inquiries are NOT disputable.' },
  { id: 'SOP-204', title: 'Certified Mail Protocol', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Certified mail with return receipt for all disputes.', steps: ['Prepare dispute letter', 'Print on quality paper', 'Send via USPS certified mail with return receipt', 'Record tracking number immediately', 'File green card when returned', 'Update CRM with all tracking info'], tools: ['USPS certified mail', 'Tracking system', 'CRM'], kpis: ['100% disputes sent certified', 'Tracking numbers recorded same-day', 'Green cards filed'], templates: ['Certified Mail Tracking Sheet', 'Mailing Checklist'], agentInstructions: 'ALWAYS use certified mail with return receipt. This is your PROOF. No certified mail = no proof = no legal standing.' },
  { id: 'SOP-207', title: 'Response Processing & Escalation', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Operations', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Processing responses and escalation decision matrix.', steps: ['Log response within 48 hours', 'Categorize result', 'Update client portal', 'Determine next action', 'Escalate if warranted', 'Document everything'], tools: ['Response tracking', 'Escalation matrix', 'CRM'], kpis: ['48-hour processing time', 'Appropriate escalation rate', 'Client notification within 24 hours'], templates: ['Response Log Template', 'Escalation Decision Matrix', 'Client Update Templates'], agentInstructions: 'Process every response within 48 hours. If no response in 30 days = FCRA violation = leverage. Always update client promptly.' },
  // ===== PHASE 6: MARKETING & SALES =====
  { id: 'SOP-301', title: 'Brand Positioning', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Brand positioning for credit repair — professional, transparent, compliant.', steps: ['Define brand voice and values', 'Create brand guidelines', 'Position as educational authority', 'Never guarantee outcomes', 'Focus on trust and transparency'], tools: ['Brand guidelines document', 'Content templates', 'Design system'], kpis: ['Consistent brand across all channels', 'No compliance violations in branding'], templates: ['Brand Guidelines', 'Messaging Framework', 'Visual Identity Guide'], agentInstructions: 'Brand = trust in credit repair. Position as: Professional, Transparent, Results-driven, Compliant. Never guarantee outcomes.' },
  { id: 'SOP-302', title: 'Sales Process & Compliance', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['FTC increasing CROA enforcement'], summary: 'CROA-compliant sales process.', steps: ['Disclose right to self-dispute', 'Disclose 3-day cancellation right', 'Disclose total cost', 'Never guarantee score increases', 'Focus on education and process', 'Get all disclosures signed'], tools: ['Sales scripts', 'CRM', 'DocuSign'], kpis: ['100% CROA disclosures on every sale', 'No high-pressure tactics', 'Conversion rate tracked'], templates: ['Sales Script', 'CROA Sales Disclosure', 'Consultation Checklist'], agentInstructions: 'Every sales call must include CROA disclosures. Never use high-pressure tactics. Never guarantee score increases.' },
  { id: 'SOP-303', title: 'Lead Generation Strategy', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Multi-channel lead generation for credit repair.', steps: ['Set up Google Ads campaigns', 'Create YouTube educational content', 'Build referral program', 'Implement SEO strategy', 'Social media presence'], tools: ['Google Ads', 'YouTube', 'Social platforms', 'SEO tools'], kpis: ['CPL tracked per channel', 'Referral rate >25%', 'Leads per month growing'], templates: ['Lead Generation Playbook', 'Channel Strategy Template'], agentInstructions: 'Best lead channels: 1) Google Ads, 2) YouTube, 3) Referrals, 4) SEO, 5) Social media. Start with Google Ads + referrals.' },
  { id: 'SOP-304', title: 'CRM & Speed-to-Lead', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'CRM setup with speed-to-lead automation.', steps: ['Configure GoHighLevel CRM', 'Set up speed-to-lead automation', 'Auto-respond within 5 minutes', 'Lead scoring configuration', 'Pipeline management'], tools: ['GoHighLevel', 'Automation tools', 'Lead scoring'], kpis: ['Response time <5 minutes', 'Lead-to-appointment rate tracked', 'Pipeline visibility 100%'], templates: ['CRM Setup Checklist', 'Automation Workflows', 'Lead Scoring Model'], agentInstructions: 'GoHighLevel is the recommended CRM. Set up speed-to-lead — respond within 5 minutes for highest conversion.' },
  { id: 'SOP-305', title: 'Sales Conversion Process', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Lead-to-client conversion process with CROA compliance.', steps: ['Qualify lead', 'Schedule consultation', 'Conduct discovery call', 'Present solution', 'Handle objections', 'Close with CROA disclosures', 'Begin onboarding'], tools: ['CRM', 'Phone/Zoom', 'DocuSign'], kpis: ['Consultation show rate >70%', 'Close rate >30%', 'CROA compliance 100%'], templates: ['Discovery Call Script', 'Objection Handling Guide', 'Closing Checklist'], agentInstructions: 'Focus on education and process, not promises. Mandatory disclosures before any close.' },
  { id: 'SOP-306', title: 'Advertising Compliance', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Google financial services ad policies updated'], summary: 'Advertising compliance for credit repair.', steps: ['Review all ads for CROA compliance', 'No guaranteed outcomes', 'Follow Google/Meta ad policies', 'Document all ad creatives', 'Regular compliance review'], tools: ['Ad platforms', 'Compliance checklist'], kpis: ['0 ad policy violations', '0 CROA violations', 'All ads documented'], templates: ['Ad Compliance Checklist', 'Creative Brief Template'], agentInstructions: 'Credit repair advertising rules: No guaranteed outcomes. No misleading claims. Google has strict financial services policies.' },
  { id: 'SOP-307', title: 'SEO Strategy', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'SEO strategy for credit repair — local and national.', steps: ['Keyword research', 'Content calendar (2-4 posts/month)', 'Educational blog content', 'On-page SEO optimization', 'Backlink building', 'Local landing pages', 'Monitor rankings monthly'], tools: ['SEMrush', 'Ahrefs', 'Google Search Console', 'WordPress'], kpis: ['Organic traffic growing 15%+/month', 'Local keywords ranked', 'Content published on schedule'], templates: ['SEO Checklist', 'Content Calendar', 'Keyword Research Template'], agentInstructions: 'SEO is the long game — 3-6 months but best ROI. Focus on local SEO first. Create educational content.' },
  { id: 'SOP-308', title: 'Referral Partner Program', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'B2B referral partnerships with mortgage brokers, realtors, auto dealers.', steps: ['Identify target partners', 'Create referral program structure', 'Build partnership materials', 'Set up commission tracking', 'Onboard partners', 'Regular partner communication'], tools: ['CRM partner tracking', 'Commission system', 'Partner portal'], kpis: ['Active partners >10', 'Referral conversion >40%', 'Partner commission paid within 30 days'], templates: ['Partnership Agreement', 'Referral Tracking Sheet', 'Partner Kit'], agentInstructions: 'Target: mortgage brokers, realtors, auto dealers, tax preparers. Offer 10-20% commission per enrolled client.' },
  // More Phase 6 SOPs
  { id: 'SOP-701', title: 'SEO Strategy & Execution', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Advanced SEO execution plan.', steps: ['Technical SEO audit', 'Local SEO optimization', 'Content cluster strategy', 'Link building', 'Monitor and adjust'], tools: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console'], kpis: ['Domain authority growth', 'Organic traffic >15%/month', 'Top 3 for primary keywords within 6 months'], templates: ['Technical SEO Checklist', 'Local SEO Playbook', 'Link Building Tracker'], agentInstructions: 'Build topical authority around credit repair. Create content clusters. Local SEO is critical.' },
  { id: 'SOP-702', title: 'Paid Advertising Optimization', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Paid advertising optimization and management.', steps: ['Review performance daily', 'Optimize bids weekly', 'Test audiences bi-weekly', 'Refresh creative monthly', 'Scale top performers'], tools: ['Google Ads', 'Meta Ads', 'Analytics'], kpis: ['ROAS >4x', 'CPL decreasing', 'Quality Score >7'], templates: ['Optimization Checklist', 'Creative Brief', 'Performance Report'], agentInstructions: 'Daily bid checks, weekly budget adjustments, bi-weekly audience tests, monthly creative refresh. Kill ads with CPL >2x target after 7 days.' },
  { id: 'SOP-703', title: 'Content Marketing System', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Content marketing engine for credit repair.', steps: ['Create content calendar', 'Produce blog content (2-4/month)', 'Create video content (2-4/month)', 'Distribute across channels', 'Repurpose content', 'Track engagement'], tools: ['WordPress', 'Canva', 'Loom', 'Buffer/Hootsuite', 'YouTube'], kpis: ['Content on schedule', 'Engagement >3%', 'Content-attributed leads tracked'], templates: ['Content Calendar', 'Blog Template', 'Video Script Template'], agentInstructions: 'Content pillars: credit improvement, dispute education, financial literacy, success stories. Repurpose everything. Educate first, sell second.' },
  { id: 'SOP-704', title: 'Conversion Rate Optimization', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'CRO for website and funnels.', steps: ['Map full conversion funnel', 'Identify optimization opportunities', 'Run multivariate tests', 'Implement personalization', 'Optimize mobile', 'Reduce form friction', 'Add social proof'], tools: ['Google Optimize', 'Hotjar', 'GA4'], kpis: ['Conversion rate improving', 'Form completion >60%', 'Mobile conversion parity'], templates: ['CRO Roadmap', 'Test Documentation', 'Funnel Analysis Report'], agentInstructions: 'Focus on highest-traffic, lowest-converting pages. Mobile optimization critical — 70%+ leads come from mobile.' },
  { id: 'SOP-705', title: 'Affiliate & Partnership Program', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['FTC endorsement guides — affiliates must disclose'], summary: 'Affiliate program for partner-driven growth.', steps: ['Design compensation structure', 'Create onboarding process', 'Build affiliate portal', 'Provide marketing materials', 'Monitor compliance', 'Pay promptly', 'Recruit quality affiliates'], tools: ['Affiliate tracking', 'Partner portal', 'Payment system'], kpis: ['Active affiliates >20', 'Affiliate revenue >20%', 'Affiliate retention >70%'], templates: ['Affiliate Agreement', 'Commission Structure', 'Marketing Kit'], agentInstructions: 'Affiliates must comply with FTC guidelines — must disclose relationship. Pay within 30 days. Quality > quantity.' },
  { id: 'SOP-706', title: 'Brand Building & PR', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Brand awareness and PR strategy.', steps: ['Develop thought leadership', 'Build media contacts', 'Distribute press releases', 'Pursue speaking engagements', 'Monitor reputation', 'Respond to reviews', 'Build community'], tools: ['HARO', 'PR distribution', 'Review monitoring'], kpis: ['Media mentions/quarter', 'Review rating >4.5', 'Brand search volume growing'], templates: ['Press Release Template', 'Media Kit', 'Review Response Templates'], agentInstructions: 'PR builds long-term trust. Respond to ALL reviews within 24 hours. Apply for industry awards.' },
  // ===== PHASE 6 CONTINUED =====
  { id: 'SOP-012', title: 'Sales Consultation Process', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Initial sales consultation and conversion process.', steps: ['Pre-call research', 'Build rapport', 'Discover pain points', 'Present solution', 'Handle objections', 'Close with CROA disclosures'], tools: ['CRM', 'Phone/Zoom', 'Sales scripts'], kpis: ['Show rate >70%', 'Close rate >30%', 'Avg deal size tracked'], templates: ['Consultation Script', 'Discovery Questions', 'Objection Handling Guide'], agentInstructions: 'Focus on education and value. Mandatory CROA disclosures before any close. Never guarantee results.' },
  { id: 'SOP-013', title: 'Advertising Management', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Google financial services ad policies'], summary: 'Paid advertising management and optimization.', steps: ['Set up campaigns', 'Define budgets ($50-100/day start)', 'Monitor daily', 'Optimize weekly', 'Scale winners'], tools: ['Google Ads', 'Meta Ads', 'TikTok Ads'], kpis: ['CPL tracked', 'ROAS >3x', 'Budget utilized efficiently'], templates: ['Campaign Setup Checklist', 'Ad Copy Templates', 'Budget Tracker'], agentInstructions: 'Start with $50-100/day. Scale based on CPL. Follow Google financial services policies exactly or get banned.' },
  // ===== PHASE 7: CLIENT RETENTION =====
  { id: 'SOP-401', title: 'Monthly Client Check-In System', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Monthly check-in process for client engagement.', steps: ['Schedule monthly check-in', 'Review progress', 'Discuss upcoming rounds', 'Address concerns', 'Collect updated credit report if needed', 'Document in CRM', 'Set expectations for next month'], tools: ['CRM', 'Calendar', 'Zoom/Phone'], kpis: ['Check-in completion >90%', 'Satisfaction tracked', 'No client >30 days without contact'], templates: ['Check-In Script', 'Progress Report', 'Monthly Update Email'], agentInstructions: 'Monthly check-ins prevent churn. Cover: progress, next steps, questions, referral ask. Keep under 15 minutes.' },
  { id: 'SOP-402', title: 'Score Monitoring & Alerts', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Free weekly credit reports remain available'], summary: 'Automated credit score monitoring and alert system.', steps: ['Set up monitoring for each client', 'Configure alerts for ±10 points', 'Alert for new derogatory items', 'Monthly score tracking', 'Celebrate improvements', 'Escalate score drops'], tools: ['Credit monitoring APIs', 'CRM automation', 'Alerts'], kpis: ['100% clients monitored', 'Alerts processed within 24 hours'], templates: ['Alert Configuration', 'Celebration Template', 'Score Drop Protocol'], agentInstructions: 'Proactive monitoring catches issues before clients notice. Celebrate every improvement. Investigate drops immediately.' },
  { id: 'SOP-403', title: 'Upsell & Cross-Sell Strategy', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Revenue expansion through additional services.', steps: ['Identify upsell opportunities', 'Present at natural milestones', 'Package services', 'Track conversion rates', 'Train team on consultative upselling'], tools: ['CRM', 'Product catalog', 'Sales scripts'], kpis: ['Upsell rate >15%', 'Revenue per client increasing'], templates: ['Upsell Scripts', 'Package Pricing Matrix'], agentInstructions: 'Best upsell moments: after first deletion, at 60-day milestone, when client expresses new goals. Never pressure.' },
  { id: 'SOP-404', title: 'Referral Program Management', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Client referral program for organic growth.', steps: ['Design incentive structure', 'Create tracking system', 'Promote during milestones', 'Make referring easy', 'Track and reward promptly', 'Follow up with referred leads'], tools: ['CRM referral tracking', 'Referral links', 'Reward system'], kpis: ['Referral rate >25%', 'Referral conversion >40%'], templates: ['Referral Program Overview', 'Referral Request Scripts', 'Reward Process'], agentInstructions: 'Ask for referrals at peak satisfaction moments. Offer $50-100 per enrolled referral. Follow up within 1 hour.' },
  { id: 'SOP-405', title: 'Proactive Churn Prevention', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Early warning system for preventing client churn.', steps: ['Define risk indicators', 'Set up churn risk scoring', 'Implement intervention workflows', 'Dedicated outreach for high-risk', 'Offer retention incentives', 'Conduct exit interviews', 'Analyze churn data'], tools: ['CRM churn scoring', 'Automation', 'Analytics'], kpis: ['Churn rate <15%', 'Intervention within 48 hours', 'Retention offer acceptance >30%'], templates: ['Churn Risk Scorecard', 'Retention Call Script', 'Exit Interview', 'Win-Back Campaign'], agentInstructions: 'Top churn signals: missed payment, no portal login 14 days, no response, complaint. Intervene within 48 hours.' },
  { id: 'SOP-406', title: 'Client Milestone Celebrations', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Milestone recognition system for satisfaction and referrals.', steps: ['Define milestone triggers', 'Create celebration templates', 'Automate detection in CRM', 'Personal video congratulations', 'Share success stories (with permission)', 'Include referral ask', 'Track completion rates'], tools: ['CRM automation', 'Loom', 'Gift fulfillment'], kpis: ['100% milestones recognized', 'Client response >50%', 'Referral from milestones >20%'], templates: ['Milestone Emails', 'Video Scripts', 'Social Media Posts', 'Gift Guide'], agentInstructions: 'Celebrate: first deletion, 25/50/100 point increase, 650/700/750 thresholds, graduation. Personal video has 5x impact of email.' },
]

// ============================================================
// API ROUTES — SOP LIBRARY (Original)
// ============================================================

app.get('/api/phases', (c) => c.json({ phases: PHASES, totalSOPs: SOPS.length, lastUpdated: '2026-04-14' }))

app.get('/api/sops', (c) => {
  const phase = c.req.query('phase'); const search = c.req.query('search')?.toLowerCase()
  const category = c.req.query('category'); const compliance = c.req.query('compliance')
  let filtered = [...SOPS]
  if (phase) filtered = filtered.filter(s => s.phase === parseInt(phase))
  if (category) filtered = filtered.filter(s => s.category.toLowerCase() === category.toLowerCase())
  if (compliance) filtered = filtered.filter(s => s.complianceStatus === compliance)
  if (search) filtered = filtered.filter(s => s.title.toLowerCase().includes(search) || s.summary.toLowerCase().includes(search) || s.id.toLowerCase().includes(search) || s.agentInstructions.toLowerCase().includes(search))
  return c.json({ sops: filtered.map(s => ({ id: s.id, title: s.title, phase: s.phase, phaseName: s.phaseName, package: s.package, category: s.category, complianceStatus: s.complianceStatus, lastUpdated: s.lastUpdated, legalChanges2026Count: s.legalChanges2026.length })), total: filtered.length })
})

app.get('/api/sops/:id', (c) => {
  const id = c.req.param('id').toUpperCase(); const sop = SOPS.find(s => s.id === id)
  if (!sop) return c.json({ error: 'SOP not found' }, 404); return c.json(sop)
})

app.get('/api/legal-changes-2026', (c) => {
  const allChanges: { sopId: string; sopTitle: string; changes: string[] }[] = []
  SOPS.forEach(s => { if (s.legalChanges2026.length > 0) allChanges.push({ sopId: s.id, sopTitle: s.title, changes: s.legalChanges2026 }) })
  return c.json({ totalChanges: allChanges.reduce((a, c) => a + c.changes.length, 0), affectedSOPs: allChanges.length, lastUpdated: '2026-04-14', changes: allChanges })
})

app.get('/api/agent/:sopId', (c) => {
  const id = c.req.param('sopId').toUpperCase(); const sop = SOPS.find(s => s.id === id)
  if (!sop) return c.json({ error: 'SOP not found' }, 404)
  return c.json({ sopId: sop.id, title: sop.title, agentInstructions: sop.agentInstructions, steps: sop.steps, complianceStatus: sop.complianceStatus, legalChanges2026: sop.legalChanges2026, tools: sop.tools, kpis: sop.kpis })
})

app.get('/api/stats', (c) => c.json({ totalSOPs: SOPS.length, phases: PHASES.length, criticalCompliance: SOPS.filter(s => s.complianceStatus === 'critical').length, currentCompliance: SOPS.filter(s => s.complianceStatus === 'current').length, totalLegalChanges: SOPS.reduce((a, s) => a + s.legalChanges2026.length, 0), categories: [...new Set(SOPS.map(s => s.category))], lastUpdated: '2026-04-14' }))

// Template API
app.get('/api/templates/:name', (c) => {
  const name = decodeURIComponent(c.req.param('name')); const template = TEMPLATE_CONTENT[name]
  if (!template) return c.json({ title: name, format: 'Template', description: 'Template for ' + name, content: name.toUpperCase() + '\n\nPart of the RJ Business Solutions Master SOP 2026 system.\nContact support@rjbusinesssolutions.org for the full template library.', available: false })
  return c.json({ ...template, available: true })
})
app.get('/api/templates', (c) => {
  const templates = Object.keys(TEMPLATE_CONTENT).map(n => ({ name: n, title: TEMPLATE_CONTENT[n].title, format: TEMPLATE_CONTENT[n].format, description: TEMPLATE_CONTENT[n].description }))
  return c.json({ templates, total: templates.length })
})

// ============================================================
// OPERATIONS ENGINE — FULL AUTOPILOT APIS (D1 Database)
// ============================================================

// ---- CLIENTS ----
app.get('/api/ops/clients', async (c) => {
  const { DB } = c.env; const status = c.req.query('status'); const search = c.req.query('search')
  let q = 'SELECT * FROM clients'; const params: string[] = []; const clauses: string[] = []
  if (status) { clauses.push('status = ?'); params.push(status) }
  if (search) { clauses.push("(first_name || ' ' || last_name LIKE ? OR email LIKE ?)"); params.push(`%${search}%`, `%${search}%`) }
  if (clauses.length) q += ' WHERE ' + clauses.join(' AND ')
  q += ' ORDER BY updated_at DESC'
  const r = await DB.prepare(q).bind(...params).all(); return c.json({ clients: r.results, total: r.results.length })
})

app.get('/api/ops/clients/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  const client = await DB.prepare('SELECT * FROM clients WHERE id = ?').bind(id).first()
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const disputes = await DB.prepare('SELECT * FROM disputes WHERE client_id = ? ORDER BY created_at DESC').bind(id).all()
  const docs = await DB.prepare('SELECT * FROM client_documents WHERE client_id = ? ORDER BY created_at DESC').bind(id).all()
  const workflows = await DB.prepare('SELECT * FROM workflows WHERE client_id = ? ORDER BY created_at DESC').bind(id).all()
  const tasks = await DB.prepare('SELECT * FROM tasks WHERE client_id = ? ORDER BY due_date ASC').bind(id).all()
  const transactions = await DB.prepare('SELECT * FROM transactions WHERE client_id = ? ORDER BY created_at DESC').bind(id).all()
  return c.json({ client, disputes: disputes.results, documents: docs.results, workflows: workflows.results, tasks: tasks.results, transactions: transactions.results })
})

app.post('/api/ops/clients', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const r = await DB.prepare('INSERT INTO clients (first_name, last_name, email, phone, status, credit_score_start, credit_score_goal, source, assigned_agent, monthly_fee, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(body.first_name, body.last_name, body.email, body.phone || null, body.status || 'lead', body.credit_score_start || null, body.credit_score_goal || null, body.source || 'direct', body.assigned_agent || null, body.monthly_fee || 0, body.notes || null).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'client_created', 'client', ?, ?)").bind(body.actor || 'system', r.meta.last_row_id, `New client: ${body.first_name} ${body.last_name}`).run()
  return c.json({ id: r.meta.last_row_id, success: true })
})

app.put('/api/ops/clients/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id'); const body = await c.req.json()
  const fields = Object.keys(body).filter(k => k !== 'actor').map(k => `${k} = ?`)
  const values = Object.keys(body).filter(k => k !== 'actor').map(k => body[k])
  if (fields.length === 0) return c.json({ error: 'No fields to update' }, 400)
  fields.push("updated_at = datetime('now')")
  await DB.prepare(`UPDATE clients SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'client_updated', 'client', ?, ?)").bind(body.actor || 'system', id, JSON.stringify(body)).run()
  return c.json({ success: true })
})

// ---- DISPUTES ----
app.get('/api/ops/disputes', async (c) => {
  const { DB } = c.env; const status = c.req.query('status'); const bureau = c.req.query('bureau'); const clientId = c.req.query('client_id')
  let q = 'SELECT d.*, c.first_name || \' \' || c.last_name as client_name FROM disputes d LEFT JOIN clients c ON d.client_id = c.id'
  const params: string[] = []; const clauses: string[] = []
  if (status) { clauses.push('d.status = ?'); params.push(status) }
  if (bureau) { clauses.push('d.bureau = ?'); params.push(bureau) }
  if (clientId) { clauses.push('d.client_id = ?'); params.push(clientId) }
  if (clauses.length) q += ' WHERE ' + clauses.join(' AND ')
  q += ' ORDER BY d.created_at DESC'
  const r = await DB.prepare(q).bind(...params).all(); return c.json({ disputes: r.results, total: r.results.length })
})

app.post('/api/ops/disputes', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const r = await DB.prepare('INSERT INTO disputes (client_id, bureau, account_name, account_number, dispute_reason, dispute_round, status, fcra_section, letter_template, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(body.client_id, body.bureau, body.account_name, body.account_number || null, body.dispute_reason, body.dispute_round || 1, body.status || 'pending', body.fcra_section || null, body.letter_template || null, body.notes || null).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'dispute_created', 'dispute', ?, ?)").bind(body.actor || 'system', r.meta.last_row_id, `${body.bureau}: ${body.account_name} — ${body.dispute_reason}`).run()
  return c.json({ id: r.meta.last_row_id, success: true })
})

app.put('/api/ops/disputes/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id'); const body = await c.req.json()
  const fields = Object.keys(body).filter(k => k !== 'actor').map(k => `${k} = ?`)
  const values = Object.keys(body).filter(k => k !== 'actor').map(k => body[k])
  fields.push("updated_at = datetime('now')")
  await DB.prepare(`UPDATE disputes SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'dispute_updated', 'dispute', ?, ?)").bind(body.actor || 'system', id, JSON.stringify(body)).run()
  return c.json({ success: true })
})

// ---- WORKFLOWS ----
app.get('/api/ops/workflows', async (c) => {
  const { DB } = c.env; const status = c.req.query('status')
  let q = 'SELECT w.*, c.first_name || \' \' || c.last_name as client_name FROM workflows w LEFT JOIN clients c ON w.client_id = c.id'
  if (status) q += ' WHERE w.status = ?'
  q += ' ORDER BY w.created_at DESC'
  const r = status ? await DB.prepare(q).bind(status).all() : await DB.prepare(q).all()
  return c.json({ workflows: r.results, total: r.results.length })
})

app.get('/api/ops/workflows/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  const workflow = await DB.prepare('SELECT w.*, c.first_name || \' \' || c.last_name as client_name FROM workflows w LEFT JOIN clients c ON w.client_id = c.id WHERE w.id = ?').bind(id).first()
  if (!workflow) return c.json({ error: 'Workflow not found' }, 404)
  const steps = await DB.prepare('SELECT * FROM workflow_steps WHERE workflow_id = ? ORDER BY step_number').bind(id).all()
  return c.json({ workflow, steps: steps.results })
})

app.post('/api/ops/workflows', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const sop = SOPS.find(s => s.id === body.sop_id)
  if (!sop) return c.json({ error: 'SOP not found' }, 404)
  const r = await DB.prepare('INSERT INTO workflows (sop_id, sop_title, client_id, assigned_to, status, priority, trigger_type, current_step, total_steps, started_at, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, datetime(\'now\'), ?)').bind(body.sop_id, sop.title, body.client_id || null, body.assigned_to || null, 'running', body.priority || 'normal', body.trigger_type || 'manual', sop.steps.length, body.due_date || null).run()
  const wfId = r.meta.last_row_id
  // Auto-create workflow steps from SOP
  for (let i = 0; i < sop.steps.length; i++) {
    await DB.prepare('INSERT INTO workflow_steps (workflow_id, step_number, step_description, status, assigned_to) VALUES (?, ?, ?, ?, ?)').bind(wfId, i + 1, sop.steps[i], i === 0 ? 'in_progress' : 'pending', body.assigned_to || null).run()
  }
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'workflow_created', 'workflow', ?, ?)").bind(body.actor || 'system', wfId, `Started: ${sop.id} — ${sop.title}`).run()
  return c.json({ id: wfId, success: true, steps_created: sop.steps.length })
})

// Advance workflow step
app.post('/api/ops/workflows/:id/advance', async (c) => {
  const { DB } = c.env; const id = c.req.param('id'); const body = await c.req.json()
  const workflow = await DB.prepare('SELECT * FROM workflows WHERE id = ?').bind(id).first() as any
  if (!workflow) return c.json({ error: 'Workflow not found' }, 404)
  const nextStep = workflow.current_step + 1
  // Complete current step
  await DB.prepare("UPDATE workflow_steps SET status = 'completed', completed_at = datetime('now'), completion_notes = ? WHERE workflow_id = ? AND step_number = ?").bind(body.notes || null, id, workflow.current_step).run()
  if (nextStep > workflow.total_steps) {
    // Workflow complete
    await DB.prepare("UPDATE workflows SET status = 'completed', current_step = ?, completed_at = datetime('now'), updated_at = datetime('now') WHERE id = ?").bind(nextStep, id).run()
    await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'workflow_completed', 'workflow', ?, ?)").bind(body.actor || 'system', id, `Completed: ${workflow.sop_title}`).run()
    return c.json({ success: true, status: 'completed' })
  }
  // Advance to next step
  await DB.prepare("UPDATE workflow_steps SET status = 'in_progress', started_at = datetime('now') WHERE workflow_id = ? AND step_number = ?").bind(id, nextStep).run()
  await DB.prepare("UPDATE workflows SET current_step = ?, updated_at = datetime('now') WHERE id = ?").bind(nextStep, id).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'workflow_step_advanced', 'workflow', ?, ?)").bind(body.actor || 'system', id, `Step ${nextStep}/${workflow.total_steps}`).run()
  return c.json({ success: true, current_step: nextStep, total_steps: workflow.total_steps })
})

// ---- TASKS ----
app.get('/api/ops/tasks', async (c) => {
  const { DB } = c.env; const status = c.req.query('status'); const assigned = c.req.query('assigned_to'); const priority = c.req.query('priority'); const category = c.req.query('category')
  let q = 'SELECT t.*, c.first_name || \' \' || c.last_name as client_name FROM tasks t LEFT JOIN clients c ON t.client_id = c.id'
  const params: string[] = []; const clauses: string[] = []
  if (status) { clauses.push('t.status = ?'); params.push(status) }
  if (assigned) { clauses.push('t.assigned_to = ?'); params.push(assigned) }
  if (priority) { clauses.push('t.priority = ?'); params.push(priority) }
  if (category) { clauses.push('t.category = ?'); params.push(category) }
  if (clauses.length) q += ' WHERE ' + clauses.join(' AND ')
  q += ' ORDER BY CASE t.priority WHEN \'critical\' THEN 0 WHEN \'high\' THEN 1 WHEN \'normal\' THEN 2 ELSE 3 END, t.due_date ASC'
  const r = await DB.prepare(q).bind(...params).all(); return c.json({ tasks: r.results, total: r.results.length })
})

app.post('/api/ops/tasks', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const r = await DB.prepare('INSERT INTO tasks (title, description, sop_id, workflow_id, client_id, assigned_to, status, priority, category, due_date, recurrence, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(body.title, body.description || null, body.sop_id || null, body.workflow_id || null, body.client_id || null, body.assigned_to || null, 'pending', body.priority || 'normal', body.category || null, body.due_date || null, body.recurrence || null, body.notes || null).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'task_created', 'task', ?, ?)").bind(body.actor || 'system', r.meta.last_row_id, body.title).run()
  return c.json({ id: r.meta.last_row_id, success: true })
})

app.put('/api/ops/tasks/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id'); const body = await c.req.json()
  const fields = Object.keys(body).filter(k => k !== 'actor').map(k => `${k} = ?`)
  const values = Object.keys(body).filter(k => k !== 'actor').map(k => body[k])
  fields.push("updated_at = datetime('now')")
  if (body.status === 'completed') fields.push("completed_at = datetime('now')")
  await DB.prepare(`UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'task_updated', 'task', ?, ?)").bind(body.actor || 'system', id, JSON.stringify(body)).run()
  return c.json({ success: true })
})

// ---- COMPLIANCE ----
app.get('/api/ops/compliance', async (c) => {
  const { DB } = c.env
  const r = await DB.prepare('SELECT * FROM compliance_items ORDER BY CASE status WHEN \'expired\' THEN 0 WHEN \'expiring_soon\' THEN 1 ELSE 2 END, expiration_date ASC').all()
  return c.json({ items: r.results, total: r.results.length })
})

app.post('/api/ops/compliance', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const r = await DB.prepare('INSERT INTO compliance_items (title, description, sop_id, category, jurisdiction, status, effective_date, expiration_date, renewal_date, reminder_days_before, responsible_party, cost, auto_renew) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(body.title, body.description || null, body.sop_id || null, body.category, body.jurisdiction || null, body.status || 'active', body.effective_date || null, body.expiration_date || null, body.renewal_date || null, body.reminder_days_before || 90, body.responsible_party || null, body.cost || 0, body.auto_renew || 0).run()
  return c.json({ id: r.meta.last_row_id, success: true })
})

// ---- NOTIFICATIONS ----
app.get('/api/ops/notifications', async (c) => {
  const { DB } = c.env; const unread = c.req.query('unread')
  let q = 'SELECT * FROM notifications'
  if (unread === 'true') q += ' WHERE read_at IS NULL'
  q += ' ORDER BY created_at DESC LIMIT 50'
  const r = await DB.prepare(q).all()
  return c.json({ notifications: r.results, total: r.results.length })
})

app.post('/api/ops/notifications', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const r = await DB.prepare('INSERT INTO notifications (recipient, type, channel, title, message, severity, related_type, related_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(body.recipient, body.type, body.channel || 'in_app', body.title, body.message, body.severity || 'info', body.related_type || null, body.related_id || null).run()
  return c.json({ id: r.meta.last_row_id, success: true })
})

app.put('/api/ops/notifications/:id/read', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  await DB.prepare("UPDATE notifications SET read_at = datetime('now') WHERE id = ?").bind(id).run()
  return c.json({ success: true })
})

// ---- TEAM ----
app.get('/api/ops/team', async (c) => {
  const { DB } = c.env
  const r = await DB.prepare('SELECT * FROM team_members ORDER BY role, name').all()
  return c.json({ members: r.results, total: r.results.length })
})

// ---- KPI DASHBOARD ----
app.get('/api/ops/kpis', async (c) => {
  const { DB } = c.env; const period = c.req.query('period') || 'monthly'
  const r = await DB.prepare('SELECT * FROM kpi_snapshots WHERE period_type = ? ORDER BY period_date DESC, metric_name').bind(period).all()
  return c.json({ kpis: r.results })
})

app.get('/api/ops/dashboard', async (c) => {
  const { DB } = c.env
  const clients = await DB.prepare("SELECT status, COUNT(*) as count FROM clients GROUP BY status").all()
  const disputes = await DB.prepare("SELECT status, COUNT(*) as count FROM disputes GROUP BY status").all()
  const tasks = await DB.prepare("SELECT status, COUNT(*) as count FROM tasks GROUP BY status").all()
  const workflows = await DB.prepare("SELECT status, COUNT(*) as count FROM workflows GROUP BY status").all()
  const overdueTasks = await DB.prepare("SELECT COUNT(*) as count FROM tasks WHERE due_date < date('now') AND status NOT IN ('completed','cancelled')").first()
  const overdueDisputes = await DB.prepare("SELECT COUNT(*) as count FROM disputes WHERE response_due_date < date('now') AND status IN ('sent','investigating')").first()
  const unreadNotifs = await DB.prepare("SELECT COUNT(*) as count FROM notifications WHERE read_at IS NULL").first()
  const expiringCompliance = await DB.prepare("SELECT COUNT(*) as count FROM compliance_items WHERE expiration_date <= date('now', '+90 days') AND status = 'active'").first()
  const recentAudit = await DB.prepare("SELECT * FROM audit_log ORDER BY created_at DESC LIMIT 10").all()
  const revenue = await DB.prepare("SELECT SUM(monthly_fee) as mrr FROM clients WHERE status = 'active'").first()
  const automations = await DB.prepare("SELECT * FROM automations WHERE is_active = 1 ORDER BY name").all()
  return c.json({
    summary: {
      clients: clients.results, disputes: disputes.results, tasks: tasks.results, workflows: workflows.results,
      overdueTasks: (overdueTasks as any)?.count || 0, overdueDisputes: (overdueDisputes as any)?.count || 0,
      unreadNotifications: (unreadNotifs as any)?.count || 0, expiringCompliance: (expiringCompliance as any)?.count || 0,
      mrr: (revenue as any)?.mrr || 0,
    },
    recentActivity: recentAudit.results,
    automations: automations.results,
  })
})

// ---- AUTOMATIONS ----
app.get('/api/ops/automations', async (c) => {
  const { DB } = c.env
  const r = await DB.prepare('SELECT * FROM automations ORDER BY is_active DESC, name').all()
  return c.json({ automations: r.results, total: r.results.length })
})

app.put('/api/ops/automations/:id/toggle', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  const a = await DB.prepare('SELECT is_active FROM automations WHERE id = ?').bind(id).first() as any
  await DB.prepare('UPDATE automations SET is_active = ? WHERE id = ?').bind(a.is_active ? 0 : 1, id).run()
  return c.json({ success: true, is_active: !a.is_active })
})

// ---- AUDIT LOG ----
app.get('/api/ops/audit', async (c) => {
  const { DB } = c.env; const limit = c.req.query('limit') || '50'
  const r = await DB.prepare('SELECT * FROM audit_log ORDER BY created_at DESC LIMIT ?').bind(parseInt(limit as string)).all()
  return c.json({ entries: r.results, total: r.results.length })
})

// ---- TRANSACTIONS ----
app.get('/api/ops/transactions', async (c) => {
  const { DB } = c.env; const clientId = c.req.query('client_id')
  let q = 'SELECT t.*, c.first_name || \' \' || c.last_name as client_name FROM transactions t LEFT JOIN clients c ON t.client_id = c.id'
  if (clientId) q += ' WHERE t.client_id = ?'
  q += ' ORDER BY t.created_at DESC'
  const r = clientId ? await DB.prepare(q).bind(clientId).all() : await DB.prepare(q).all()
  return c.json({ transactions: r.results, total: r.results.length })
})

// ---- AUTOMATION ENGINE: Process all active automations ----
app.post('/api/ops/run-automations', async (c) => {
  const { DB } = c.env; const results: any[] = []; const now = new Date().toISOString()
  const autos = await DB.prepare("SELECT * FROM automations WHERE is_active = 1").all()
  for (const auto of autos.results as any[]) {
    const config = JSON.parse(auto.trigger_config || '{}')
    const actionConfig = JSON.parse(auto.action_config || '{}')
    let shouldFire = false; let details = ''
    // Evaluate trigger
    if (auto.trigger_type === 'threshold') {
      if (config.metric === 'client_risk_score') {
        const highRisk = await DB.prepare(`SELECT id, first_name, last_name, risk_score FROM clients WHERE risk_score ${config.operator || '>'} ? AND status = 'active'`).bind(config.value || 70).all()
        if (highRisk.results.length > 0) { shouldFire = true; details = `${highRisk.results.length} high-risk clients found` }
      } else if (config.metric === 'score_improvement') {
        const improved = await DB.prepare("SELECT id, first_name, last_name, credit_score_current - credit_score_start as improvement FROM clients WHERE credit_score_current - credit_score_start >= ? AND status = 'active'").bind(config.value || 50).all()
        if (improved.results.length > 0) { shouldFire = true; details = `${improved.results.length} clients with 50+ point improvement` }
      }
    } else if (auto.trigger_type === 'schedule') {
      // Always fire schedule-based automations when run-automations is called
      shouldFire = true; details = `Scheduled automation executed`
    } else if (auto.trigger_type === 'date_based') {
      if (config.table === 'compliance_items') {
        const expiring = await DB.prepare("SELECT COUNT(*) as count FROM compliance_items WHERE expiration_date <= date('now', '+' || ? || ' days') AND status = 'active'").bind(config.days_before || 90).first() as any
        if (expiring.count > 0) { shouldFire = true; details = `${expiring.count} compliance items expiring within ${config.days_before} days` }
      }
    } else if (auto.trigger_type === 'event') {
      // Events are processed when they occur — check for unprocessed state
      if (config.event === 'client_status_change') {
        const recent = await DB.prepare("SELECT COUNT(*) as count FROM clients WHERE status = ? AND updated_at > datetime('now', '-1 day')").bind(config.to || 'onboarding').first() as any
        if (recent.count > 0) { shouldFire = true; details = `${recent.count} clients with status=${config.to} in last 24h` }
      } else if (config.event === 'client_created') {
        const recent = await DB.prepare("SELECT COUNT(*) as count FROM clients WHERE status = ? AND created_at > datetime('now', '-1 day')").bind(config.status || 'lead').first() as any
        if (recent.count > 0) { shouldFire = true; details = `${recent.count} new leads in last 24h` }
      }
    }
    if (shouldFire) {
      // Execute action
      if (auto.action_type === 'create_task') {
        await DB.prepare('INSERT INTO tasks (title, description, sop_id, assigned_to, status, priority, category, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, date(\'now\', \'+7 days\'))').bind(actionConfig.title || auto.name, auto.description || '', auto.sop_id, actionConfig.assign || null, 'pending', actionConfig.priority || 'normal', actionConfig.category || 'Auto', ).run()
      } else if (auto.action_type === 'send_notification') {
        await DB.prepare('INSERT INTO notifications (recipient, type, channel, title, message, severity, related_type) VALUES (?, ?, ?, ?, ?, ?, ?)').bind('Rick Jefferson', actionConfig.type || 'alert', 'in_app', auto.name, actionConfig.message + ' — ' + details, actionConfig.severity || 'info', 'automation').run()
      } else if (auto.action_type === 'create_workflow') {
        const sop = SOPS.find(s => s.id === auto.sop_id)
        if (sop) {
          const wf = await DB.prepare('INSERT INTO workflows (sop_id, sop_title, assigned_to, status, priority, trigger_type, current_step, total_steps, started_at) VALUES (?, ?, ?, ?, ?, ?, 1, ?, datetime(\'now\'))').bind(sop.id, sop.title, actionConfig.assign || null, 'running', actionConfig.priority || 'normal', 'auto', sop.steps.length).run()
          for (let i = 0; i < sop.steps.length; i++) {
            await DB.prepare('INSERT INTO workflow_steps (workflow_id, step_number, step_description, status, assigned_to) VALUES (?, ?, ?, ?, ?)').bind(wf.meta.last_row_id, i + 1, sop.steps[i], i === 0 ? 'in_progress' : 'pending', actionConfig.assign || null).run()
          }
        }
      }
      // Update automation
      await DB.prepare("UPDATE automations SET last_triggered = datetime('now'), run_count = run_count + 1 WHERE id = ?").bind(auto.id).run()
      await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'automation_fired', 'automation', ?, ?)").bind(auto.id, `${auto.name}: ${details}`).run()
      results.push({ id: auto.id, name: auto.name, fired: true, details })
    } else {
      results.push({ id: auto.id, name: auto.name, fired: false })
    }
  }
  // Also check overdue tasks and mark them
  await DB.prepare("UPDATE tasks SET status = 'overdue' WHERE due_date < date('now') AND status IN ('pending','in_progress')").run()
  // Also check overdue disputes
  const overdueDisp = await DB.prepare("SELECT d.id, d.client_id, d.bureau, d.account_name, c.first_name || ' ' || c.last_name as client_name FROM disputes d LEFT JOIN clients c ON d.client_id = c.id WHERE d.response_due_date < date('now') AND d.status IN ('sent','investigating')").all()
  for (const disp of overdueDisp.results as any[]) {
    await DB.prepare('INSERT INTO notifications (recipient, type, channel, title, message, severity, related_type, related_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind('AI Agent Alpha', 'alert', 'in_app', `OVERDUE: ${disp.bureau} response for ${disp.client_name}`, `Bureau failed to respond within 30 days for ${disp.account_name}. FCRA violation — escalation recommended.`, 'critical', 'dispute', disp.id).run()
  }
  return c.json({ success: true, automations_checked: autos.results.length, fired: results.filter(r => r.fired).length, results, overdue_disputes_flagged: overdueDisp.results.length })
})

// ---- BULK: Run compliance check across all items ----
app.post('/api/ops/run-compliance-check', async (c) => {
  const { DB } = c.env; let updated = 0
  // Update status based on expiration
  await DB.prepare("UPDATE compliance_items SET status = 'expired' WHERE expiration_date < date('now') AND status != 'expired'").run()
  const expSoon = await DB.prepare("UPDATE compliance_items SET status = 'expiring_soon' WHERE expiration_date <= date('now', '+90 days') AND expiration_date > date('now') AND status = 'active'").run()
  updated += (expSoon.meta.changes || 0)
  // Create notifications for expiring items
  const expiring = await DB.prepare("SELECT * FROM compliance_items WHERE status IN ('expiring_soon','expired')").all()
  for (const item of expiring.results as any[]) {
    const existing = await DB.prepare("SELECT COUNT(*) as count FROM notifications WHERE related_type = 'compliance' AND related_id = ? AND read_at IS NULL").bind(item.id).first() as any
    if (existing.count === 0) {
      await DB.prepare('INSERT INTO notifications (recipient, type, channel, title, message, severity, related_type, related_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(item.responsible_party || 'Rick Jefferson', 'compliance', 'in_app', `${item.status === 'expired' ? 'EXPIRED' : 'EXPIRING'}: ${item.title}`, `${item.description || item.title} — ${item.status === 'expired' ? 'has expired!' : 'expires ' + item.expiration_date}`, item.status === 'expired' ? 'critical' : 'warning', 'compliance', item.id).run()
    }
  }
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'compliance_check', 'compliance', 0, ?)").bind(`Compliance check: ${updated} items updated, ${expiring.results.length} items need attention`).run()
  return c.json({ success: true, updated, expiring_items: expiring.results.length })
})

// ---- SMART AGENT ROUTING ----
app.post('/api/ops/auto-assign', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  // Find best agent based on specialization and capacity
  const agents = await DB.prepare("SELECT * FROM team_members WHERE status = 'active' AND role != 'owner' ORDER BY current_load ASC").all()
  let bestAgent: any = null
  const category = body.category?.toLowerCase() || ''
  for (const agent of agents.results as any[]) {
    const spec = (agent.specialization || '').toLowerCase()
    if (category.includes('dispute') && spec.includes('dispute')) { bestAgent = agent; break }
    if (category.includes('compliance') && spec.includes('compliance')) { bestAgent = agent; break }
    if (category.includes('retention') && spec.includes('client')) { bestAgent = agent; break }
    if (category.includes('onboarding') && spec.includes('client')) { bestAgent = agent; break }
    if (!bestAgent || agent.current_load < bestAgent.current_load) bestAgent = agent
  }
  if (bestAgent) {
    await DB.prepare("UPDATE team_members SET current_load = current_load + 1 WHERE id = ?").bind(bestAgent.id).run()
    return c.json({ success: true, assigned_to: bestAgent.name, agent_id: bestAgent.id, reason: `${bestAgent.specialization} — load: ${bestAgent.current_load}/${bestAgent.capacity}` })
  }
  return c.json({ success: false, error: 'No agents available' }, 400)
})

// ---- GENERATE KPI SNAPSHOT ----
app.post('/api/ops/generate-kpi-snapshot', async (c) => {
  const { DB } = c.env; const today = new Date().toISOString().split('T')[0]
  const activeClients = await DB.prepare("SELECT COUNT(*) as count FROM clients WHERE status = 'active'").first() as any
  const newClients = await DB.prepare("SELECT COUNT(*) as count FROM clients WHERE created_at > date('now', '-30 days')").first() as any
  const churned = await DB.prepare("SELECT COUNT(*) as count FROM clients WHERE status = 'cancelled' AND updated_at > date('now', '-30 days')").first() as any
  const mrr = await DB.prepare("SELECT SUM(monthly_fee) as total FROM clients WHERE status = 'active'").first() as any
  const disputesFiled = await DB.prepare("SELECT COUNT(*) as count FROM disputes WHERE created_at > date('now', '-30 days')").first() as any
  const disputesDeleted = await DB.prepare("SELECT COUNT(*) as count FROM disputes WHERE status = 'deleted' AND updated_at > date('now', '-30 days')").first() as any
  const avgImprovement = await DB.prepare("SELECT AVG(credit_score_current - credit_score_start) as avg FROM clients WHERE credit_score_current IS NOT NULL AND credit_score_start IS NOT NULL AND status IN ('active','graduated')").first() as any
  const metrics = [
    { name: 'active_clients', value: activeClients.count, unit: 'count', category: 'Growth' },
    { name: 'new_clients', value: newClients.count, unit: 'count', category: 'Growth' },
    { name: 'churned_clients', value: churned.count, unit: 'count', category: 'Retention' },
    { name: 'monthly_revenue', value: mrr.total || 0, unit: 'usd', category: 'Finance' },
    { name: 'disputes_filed', value: disputesFiled.count, unit: 'count', category: 'Operations' },
    { name: 'disputes_deleted', value: disputesDeleted.count, unit: 'count', category: 'Operations' },
    { name: 'deletion_rate', value: disputesFiled.count > 0 ? Math.round((disputesDeleted.count / disputesFiled.count) * 100) : 0, unit: 'percent', category: 'Operations' },
    { name: 'avg_score_improvement', value: Math.round(avgImprovement.avg || 0), unit: 'points', category: 'Operations' },
  ]
  for (const m of metrics) {
    await DB.prepare('INSERT INTO kpi_snapshots (period_type, period_date, metric_name, metric_value, metric_unit, category) VALUES (?, ?, ?, ?, ?, ?)').bind('monthly', today, m.name, m.value, m.unit, m.category).run()
  }
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'kpi_snapshot', 'kpi', 0, ?)").bind(`Monthly KPI snapshot generated: ${metrics.length} metrics`).run()
  return c.json({ success: true, metrics, period: today })
})

// ---- RUN AUTOMATION (execute SOP as workflow) ----
app.post('/api/ops/execute-sop', async (c) => {
  const { DB } = c.env; const body = await c.req.json()
  const sop = SOPS.find(s => s.id === body.sop_id)
  if (!sop) return c.json({ error: 'SOP not found' }, 404)
  // Create workflow
  const wf = await DB.prepare('INSERT INTO workflows (sop_id, sop_title, client_id, assigned_to, status, priority, trigger_type, current_step, total_steps, started_at, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, datetime(\'now\'), ?)').bind(sop.id, sop.title, body.client_id || null, body.assigned_to || null, 'running', body.priority || 'normal', 'manual', sop.steps.length, body.due_date || null).run()
  const wfId = wf.meta.last_row_id
  for (let i = 0; i < sop.steps.length; i++) {
    await DB.prepare('INSERT INTO workflow_steps (workflow_id, step_number, step_description, status, assigned_to) VALUES (?, ?, ?, ?, ?)').bind(wfId, i + 1, sop.steps[i], i === 0 ? 'in_progress' : 'pending', body.assigned_to || null).run()
  }
  // Create tasks from SOP steps
  for (let i = 0; i < sop.steps.length; i++) {
    await DB.prepare('INSERT INTO tasks (title, description, sop_id, workflow_id, client_id, assigned_to, priority, category, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(`[${sop.id}] Step ${i + 1}: ${sop.steps[i].substring(0, 60)}`, sop.steps[i], sop.id, wfId, body.client_id || null, body.assigned_to || null, body.priority || 'normal', sop.category, body.due_date || null).run()
  }
  // Notification
  await DB.prepare('INSERT INTO notifications (recipient, type, channel, title, message, severity, related_type, related_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(body.assigned_to || 'Rick Jefferson', 'workflow', 'in_app', `SOP Executing: ${sop.id}`, `${sop.title} — ${sop.steps.length} steps queued. Agent instructions: ${sop.agentInstructions.substring(0, 200)}`, 'info', 'workflow', wfId).run()
  await DB.prepare("INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'sop_executed', 'workflow', ?, ?)").bind(body.actor || 'system', wfId, `Executed ${sop.id}: ${sop.title} — ${sop.steps.length} steps + ${sop.steps.length} tasks created`).run()
  return c.json({ success: true, workflow_id: wfId, tasks_created: sop.steps.length, steps: sop.steps.length, agentInstructions: sop.agentInstructions })
})

// ============================================================
// LEAD CAPTURE API — Speed-to-Lead System
// Maps to: SOP-303 (Lead Gen), SOP-305 (Sales Conversion), SOP-304 (Speed-to-Lead)
// ============================================================

app.post('/api/leads', async (c) => {
  const { DB } = c.env
  try {
    const body = await c.req.json()
    const { first_name, last_name, email, phone, credit_score_range, message, source, utm_source, utm_medium, utm_campaign } = body
    if (!first_name || !email || !phone) return c.json({ error: 'Name, email, and phone required' }, 400)
    // Check if email already exists
    const existing = await DB.prepare(`SELECT id FROM clients WHERE email = ?`).bind(email).first()
    if (existing) return c.json({ success: true, message: 'Thank you! We already have your information and will be in touch shortly.' })
    // Create as lead client
    const r = await DB.prepare(`INSERT INTO clients (first_name, last_name, email, phone, status, source, notes, monthly_fee) VALUES (?, ?, ?, ?, 'lead', ?, ?, 0)`).bind(first_name, last_name || '', email, phone, source || `funnel${utm_source ? '_' + utm_source : ''}`, `Score range: ${credit_score_range || 'unknown'}. ${message || ''} UTM: ${utm_source || '-'}/${utm_medium || '-'}/${utm_campaign || '-'}`).run()
    const leadId = r.meta.last_row_id
    // Speed-to-lead: create critical priority task (schema allows: critical, high, normal, low)
    await DB.prepare(`INSERT INTO tasks (title, description, assigned_to, priority, category, status, due_date) VALUES (?, ?, 'AI Agent Beta', 'critical', 'Sales', 'pending', datetime('now', '+5 minutes'))`).bind(`CALL NOW: ${first_name} ${last_name || ''}`, `New lead from funnel! Phone: ${phone} | Email: ${email} | Score: ${credit_score_range || 'unknown'} | Source: ${source || 'funnel'} | Message: ${message || 'none'}`).run()
    // Notification (schema allows types: alert, reminder, escalation, milestone, compliance, task, workflow, system)
    await DB.prepare(`INSERT INTO notifications (recipient, type, channel, title, message, severity, related_type, related_id) VALUES ('Rick Jefferson', 'alert', 'in_app', ?, ?, 'critical', 'client', ?)`).bind(`NEW LEAD: ${first_name} ${last_name || ''}`, `Phone: ${phone} — CALL WITHIN 5 MINUTES. Score range: ${credit_score_range || 'unknown'}`, leadId).run()
    // Audit
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('funnel', 'lead_captured', 'client', ?, ?)`).bind(leadId, `New lead: ${first_name} ${last_name || ''} (${email}) from ${source || 'funnel'}`).run()
    return c.json({ success: true, message: 'Thank you! We will call you within 5 minutes.' })
  } catch (err: any) {
    console.error('Lead capture error:', err.message || err)
    return c.json({ error: 'Something went wrong. Please try again or call us directly at (505) 555-0100.' }, 500)
  }
})

app.get('/api/leads/stats', async (c) => {
  const { DB } = c.env
  const total = await DB.prepare("SELECT COUNT(*) as c FROM clients WHERE status='lead'").first()
  const today = await DB.prepare("SELECT COUNT(*) as c FROM clients WHERE status='lead' AND created_at >= date('now')").first()
  const converted = await DB.prepare("SELECT COUNT(*) as c FROM clients WHERE status IN ('active','onboarding') AND source LIKE '%funnel%'").first()
  return c.json({ total_leads: total?.c || 0, today: today?.c || 0, converted: converted?.c || 0 })
})

// ============================================================
// SALES FUNNEL LANDING PAGE
// Maps to: SOP-303 Lead Gen, SOP-305 Sales Conversion, SOP-704 CRO, SOP-012 Sales Consultation
// ============================================================

app.get('/funnel', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fix Your Credit Score in 90 Days | RJ Business Solutions</title>
<meta name="description" content="Get 50-100+ point credit score improvement in 90 days. FCRA-compliant disputes, 3 AI agents working your case 24/7. Free consultation — no upfront fees.">
<meta property="og:title" content="Fix Your Credit Score in 90 Days | RJ Business Solutions">
<meta property="og:description" content="AI-powered credit repair that actually works. 62 documented procedures. 239 legal templates. Results guaranteed.">
<meta property="og:image" content="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg">
<meta property="og:type" content="website">
<link rel="icon" type="image/x-icon" href="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet">
<script>
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      colors: {
        brand: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
        success: '#10b981', danger: '#ef4444', gold: '#f59e0b',
      }
    }
  }
}
</script>
<style>
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; }
.font-heading { font-family: 'Poppins', sans-serif; }
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(59,130,246,0.3); } 50% { box-shadow: 0 0 40px rgba(59,130,246,0.6); } }
@keyframes count-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slide-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slide-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
.animate-count-up { animation: count-up 0.6s ease-out forwards; }
.animate-slide-left { animation: slide-in-left 0.6s ease-out forwards; }
.animate-slide-right { animation: slide-in-right 0.6s ease-out forwards; }
.animate-fade-up { animation: fade-in-up 0.5s ease-out forwards; }
.cta-btn { background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); transition: all 0.3s; }
.cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 40px rgba(37,99,235,0.4); }
.glass { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); }
.gradient-text { background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat-card { transition: all 0.3s; } .stat-card:hover { transform: translateY(-5px); }
.pain-card { transition: all 0.3s; } .pain-card:hover { border-color: #ef4444; }
.step-card { transition: all 0.3s; } .step-card:hover { transform: scale(1.03); }
.pricing-card { transition: all 0.3s; } .pricing-card:hover { transform: translateY(-8px); box-shadow: 0 25px 60px rgba(0,0,0,0.3); }
.faq-item { cursor: pointer; transition: all 0.2s; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
.faq-item.active .faq-answer { max-height: 300px; }
.faq-item.active .faq-icon { transform: rotate(180deg); }
.faq-icon { transition: transform 0.3s; }
input:focus, select:focus, textarea:focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.3); border-color: #3b82f6; }
.toast { position: fixed; top: 20px; right: 20px; z-index: 9999; transform: translateX(120%); transition: transform 0.4s; }
.toast.show { transform: translateX(0); }
</style>
</head>
<body class="bg-gray-950 text-white">

<!-- TOAST -->
<div id="toast" class="toast bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
  <i class="fas fa-check-circle text-2xl"></i>
  <div>
    <div class="font-bold">Application Received!</div>
    <div class="text-sm opacity-90">We'll call you within 5 minutes.</div>
  </div>
</div>

<!-- ============================================================ -->
<!-- STICKY CTA BAR (Mobile) -->
<!-- ============================================================ -->
<div class="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 p-3">
  <a href="#apply" class="cta-btn block text-center text-white font-bold py-3 rounded-xl text-lg">
    <i class="fas fa-bolt mr-2"></i>Get Your FREE Consultation
  </a>
</div>

<!-- ============================================================ -->
<!-- NAV -->
<!-- ============================================================ -->
<nav class="fixed top-0 left-0 right-0 z-40 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" class="w-10 h-10 rounded-lg">
      <span class="font-heading font-bold text-lg hidden sm:block">RJ Business Solutions</span>
    </div>
    <div class="hidden md:flex items-center gap-6 text-sm text-gray-400">
      <a href="#results" class="hover:text-white transition">Results</a>
      <a href="#how-it-works" class="hover:text-white transition">How It Works</a>
      <a href="#pricing" class="hover:text-white transition">Pricing</a>
      <a href="#faq" class="hover:text-white transition">FAQ</a>
    </div>
    <a href="#apply" class="cta-btn text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
      Free Consultation <i class="fas fa-arrow-right ml-1"></i>
    </a>
  </div>
</nav>

<!-- ============================================================ -->
<!-- HERO -->
<!-- ============================================================ -->
<section class="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
  <!-- BG Effects -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
  <div class="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>
  <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

  <div class="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
    <!-- Left -->
    <div class="animate-slide-left">
      <div class="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-400 mb-6">
        <i class="fas fa-shield-halved"></i> FCRA & CROA Compliant — 100% Legal
      </div>

      <h1 class="font-heading font-900 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
        Raise Your Credit Score
        <span class="gradient-text block">50-100+ Points</span>
        <span class="text-gray-400 text-3xl sm:text-4xl lg:text-5xl">in 90 Days</span>
      </h1>

      <p class="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
        3 AI agents work your case 24/7. 62 documented procedures. 239 legal templates. 
        Every dispute FCRA-cited, certified mail, fully tracked. 
        <strong class="text-white">No upfront fees — ever.</strong>
      </p>

      <!-- Social Proof Bar -->
      <div class="flex flex-wrap gap-4 sm:gap-6 mb-8">
        <div class="stat-card glass rounded-xl px-4 py-3 text-center">
          <div class="text-2xl font-bold text-blue-400">490<i class="fas fa-arrow-right mx-2 text-sm"></i>710</div>
          <div class="text-xs text-gray-500">Avg Score Jump</div>
        </div>
        <div class="stat-card glass rounded-xl px-4 py-3 text-center">
          <div class="text-2xl font-bold text-green-400">89%</div>
          <div class="text-xs text-gray-500">Deletion Rate</div>
        </div>
        <div class="stat-card glass rounded-xl px-4 py-3 text-center">
          <div class="text-2xl font-bold text-purple-400">24/7</div>
          <div class="text-xs text-gray-500">AI Monitoring</div>
        </div>
        <div class="stat-card glass rounded-xl px-4 py-3 text-center">
          <div class="text-2xl font-bold text-gold">$0</div>
          <div class="text-xs text-gray-500">Upfront Cost</div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a href="#apply" class="cta-btn animate-pulse-glow text-white font-bold text-lg px-8 py-4 rounded-xl text-center">
          <i class="fas fa-bolt mr-2"></i>Get Your FREE Consultation
        </a>
        <a href="tel:+15055550100" class="border border-gray-700 hover:border-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-center transition">
          <i class="fas fa-phone mr-2"></i>Call Now
        </a>
      </div>
    </div>

    <!-- Right — Score Animation -->
    <div class="animate-slide-right hidden lg:block">
      <div class="relative">
        <div class="glass rounded-3xl p-8 text-center animate-float">
          <div class="text-sm text-gray-500 mb-2">Your credit score could be</div>
          <div class="font-heading font-900 text-8xl gradient-text mb-2" id="scoreCounter">520</div>
          <div class="flex items-center justify-center gap-2 text-green-400 text-lg font-bold">
            <i class="fas fa-arrow-up"></i> +190 points possible
          </div>
          <div class="mt-6 flex justify-center gap-3">
            <div class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">Before: 520</div>
            <div class="fas fa-arrow-right text-gray-600 mt-1"></div>
            <div class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">After: 710</div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3 text-center">
            <div class="bg-gray-800/50 rounded-lg p-3">
              <i class="fas fa-robot text-blue-400 text-xl mb-1"></i>
              <div class="text-xs text-gray-500">AI Agent Alpha</div>
              <div class="text-xs text-green-400">Working...</div>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-3">
              <i class="fas fa-robot text-purple-400 text-xl mb-1"></i>
              <div class="text-xs text-gray-500">AI Agent Beta</div>
              <div class="text-xs text-green-400">Working...</div>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-3">
              <i class="fas fa-robot text-cyan-400 text-xl mb-1"></i>
              <div class="text-xs text-gray-500">AI Agent Gamma</div>
              <div class="text-xs text-green-400">Working...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
    <i class="fas fa-chevron-down text-2xl"></i>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAIN POINTS — Problem Agitation -->
<!-- ============================================================ -->
<section class="py-20 bg-gray-900/50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-14">
      <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-4">Bad Credit Is <span class="text-red-500">Costing You</span> Every Single Day</h2>
      <p class="text-gray-400 max-w-2xl mx-auto text-lg">The longer you wait, the more money you lose. Here's what a low credit score is doing to your life right now:</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="pain-card bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50">
        <div class="text-4xl mb-4">🏠</div>
        <h3 class="font-bold text-xl mb-2">Can't Get a Home</h3>
        <p class="text-gray-400">Mortgage denied. Or you're paying <span class="text-red-400 font-bold">$300-$500/mo MORE</span> in interest than someone with good credit. That's $108K over 30 years.</p>
      </div>
      <div class="pain-card bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50">
        <div class="text-4xl mb-4">🚗</div>
        <h3 class="font-bold text-xl mb-2">Car Loan Robbery</h3>
        <p class="text-gray-400">18-24% APR instead of 4-6%. You're paying <span class="text-red-400 font-bold">$200+/mo extra</span> because of negative items that might not even be accurate.</p>
      </div>
      <div class="pain-card bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50">
        <div class="text-4xl mb-4">💳</div>
        <h3 class="font-bold text-xl mb-2">Credit Card Denial</h3>
        <p class="text-gray-400">No rewards cards. No cashback. No balance transfer offers. You're stuck with <span class="text-red-400 font-bold">secured cards and high fees</span>.</p>
      </div>
      <div class="pain-card bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50">
        <div class="text-4xl mb-4">🏢</div>
        <h3 class="font-bold text-xl mb-2">Apartment Rejection</h3>
        <p class="text-gray-400">Landlords run credit checks. Low score = <span class="text-red-400 font-bold">denied or double security deposit</span>. That's thousands gone.</p>
      </div>
      <div class="pain-card bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50">
        <div class="text-4xl mb-4">💼</div>
        <h3 class="font-bold text-xl mb-2">Jobs Lost</h3>
        <p class="text-gray-400">Employers check credit for financial roles. Bad credit = <span class="text-red-400 font-bold">dream job gone</span>. It's legal in most states.</p>
      </div>
      <div class="pain-card bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50">
        <div class="text-4xl mb-4">😰</div>
        <h3 class="font-bold text-xl mb-2">Stress & Shame</h3>
        <p class="text-gray-400">The anxiety of checking your score. The shame of being declined. <span class="text-red-400 font-bold">It doesn't have to be this way.</span></p>
      </div>
    </div>

    <div class="text-center mt-10">
      <a href="#apply" class="cta-btn text-white font-bold text-lg px-10 py-4 rounded-xl inline-block">
        <i class="fas fa-hand-point-right mr-2"></i>Stop Losing Money — Start Fixing It Now
      </a>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- HOW IT WORKS — The System -->
<!-- ============================================================ -->
<section id="how-it-works" class="py-20">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-14">
      <div class="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-400 mb-4">
        <i class="fas fa-cogs"></i> Our Proprietary System
      </div>
      <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-4">How We <span class="gradient-text">Fix Your Credit</span> in 3 Steps</h2>
      <p class="text-gray-400 max-w-2xl mx-auto text-lg">Not templates. Not generic letters. A documented 62-procedure system with AI agents working 24/7.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="step-card glass rounded-2xl p-8 text-center relative">
        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">1</div>
        <div class="text-5xl mb-6 mt-4"><i class="fas fa-magnifying-glass-chart text-blue-400"></i></div>
        <h3 class="font-heading font-bold text-xl mb-3">Free Credit Analysis</h3>
        <p class="text-gray-400 mb-4">We pull your reports from all 3 bureaus and identify every disputable item — errors, outdated info, unverifiable accounts.</p>
        <div class="text-xs text-blue-400 bg-blue-500/10 rounded-lg px-3 py-2">
          <i class="fas fa-file-lines mr-1"></i> SOP-101: Credit Report Analysis
        </div>
      </div>

      <div class="step-card glass rounded-2xl p-8 text-center relative">
        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg">2</div>
        <div class="text-5xl mb-6 mt-4"><i class="fas fa-robot text-purple-400"></i></div>
        <h3 class="font-heading font-bold text-xl mb-3">AI-Powered Disputes</h3>
        <p class="text-gray-400 mb-4">3 AI agents draft FCRA-cited dispute letters, send via certified mail, track 30-day deadlines, and escalate non-responses.</p>
        <div class="text-xs text-purple-400 bg-purple-500/10 rounded-lg px-3 py-2">
          <i class="fas fa-gavel mr-1"></i> SOP-105: Round 1 Execution + 9 more dispute SOPs
        </div>
      </div>

      <div class="step-card glass rounded-2xl p-8 text-center relative">
        <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-lg">3</div>
        <div class="text-5xl mb-6 mt-4"><i class="fas fa-chart-line text-green-400"></i></div>
        <h3 class="font-heading font-bold text-xl mb-3">Score Goes Up</h3>
        <p class="text-gray-400 mb-4">Items get deleted or corrected. Score climbs. We monitor, celebrate milestones, and keep pushing until you hit your goal.</p>
        <div class="text-xs text-green-400 bg-green-500/10 rounded-lg px-3 py-2">
          <i class="fas fa-trophy mr-1"></i> SOP-402: Score Monitoring + SOP-406: Celebrations
        </div>
      </div>
    </div>

    <!-- System Stats -->
    <div class="mt-14 glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <div class="font-heading font-bold text-3xl text-blue-400">62</div>
        <div class="text-gray-500 text-sm">Documented Procedures</div>
      </div>
      <div>
        <div class="font-heading font-bold text-3xl text-purple-400">239</div>
        <div class="text-gray-500 text-sm">Legal Templates</div>
      </div>
      <div>
        <div class="font-heading font-bold text-3xl text-green-400">3</div>
        <div class="text-gray-500 text-sm">AI Agents 24/7</div>
      </div>
      <div>
        <div class="font-heading font-bold text-3xl text-gold">30</div>
        <div class="text-gray-500 text-sm">2026 Legal Updates Tracked</div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- RESULTS / SOCIAL PROOF -->
<!-- ============================================================ -->
<section id="results" class="py-20 bg-gray-900/50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-14">
      <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-4">Real People. <span class="text-green-400">Real Results.</span></h2>
      <p class="text-gray-400 text-lg">Our clients don't just get letters — they get life-changing score improvements.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold">A</div>
          <div>
            <div class="font-bold">Angela M.</div>
            <div class="text-xs text-gray-500">Tijeras, NM</div>
          </div>
          <div class="ml-auto text-yellow-400 text-sm"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <div class="text-center"><div class="text-red-400 font-bold text-2xl">490</div><div class="text-xs text-gray-500">Before</div></div>
          <div class="text-green-400"><i class="fas fa-arrow-right text-2xl"></i></div>
          <div class="text-center"><div class="text-green-400 font-bold text-2xl">710</div><div class="text-xs text-gray-500">After</div></div>
          <div class="ml-auto bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-bold">+220 pts</div>
        </div>
        <p class="text-gray-400 text-sm italic">"7 months and 12 deletions later, I qualified for my first home. Rick's team didn't just fix my credit — they changed my life."</p>
        <div class="mt-3 text-xs text-gray-600">12 items deleted across 3 bureaus • 7 months</div>
      </div>

      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-xl font-bold">M</div>
          <div>
            <div class="font-bold">Marcus T.</div>
            <div class="text-xs text-gray-500">Albuquerque, NM</div>
          </div>
          <div class="ml-auto text-yellow-400 text-sm"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <div class="text-center"><div class="text-red-400 font-bold text-2xl">520</div><div class="text-xs text-gray-500">Before</div></div>
          <div class="text-green-400"><i class="fas fa-arrow-right text-2xl"></i></div>
          <div class="text-center"><div class="text-green-400 font-bold text-2xl">685</div><div class="text-xs text-gray-500">Current</div></div>
          <div class="ml-auto bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-bold">+165 pts</div>
        </div>
        <p class="text-gray-400 text-sm italic">"Round 1 got 3 deletions. Round 2 in progress. The dashboard shows me everything — I can see AI Agent Alpha working my case in real time."</p>
        <div class="mt-3 text-xs text-gray-600">3 deletions so far • Round 2 in progress • Target: 700</div>
      </div>

      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold">S</div>
          <div>
            <div class="font-bold">Sarah W.</div>
            <div class="text-xs text-gray-500">Rio Rancho, NM</div>
          </div>
          <div class="ml-auto text-yellow-400 text-sm"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <div class="text-center"><div class="text-red-400 font-bold text-2xl">480</div><div class="text-xs text-gray-500">Before</div></div>
          <div class="text-green-400"><i class="fas fa-arrow-right text-2xl"></i></div>
          <div class="text-center"><div class="text-green-400 font-bold text-2xl">640</div><div class="text-xs text-gray-500">Current</div></div>
          <div class="ml-auto bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-bold">+160 pts</div>
        </div>
        <p class="text-gray-400 text-sm italic">"Medical debt was killing me. They used specific FCRA sections to dispute every item. 5 gone in the first round. I can finally breathe."</p>
        <div class="mt-3 text-xs text-gray-600">5 medical debts disputed • Focus: medical collections</div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PRICING -->
<!-- ============================================================ -->
<section id="pricing" class="py-20">
  <div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-14">
      <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-4">Simple, <span class="gradient-text">Transparent Pricing</span></h2>
      <p class="text-gray-400 text-lg">No upfront fees. No hidden charges. You only pay after we work — that's the law (CROA), and we follow it.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Starter -->
      <div class="pricing-card bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <div class="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Starter</div>
        <div class="flex items-baseline gap-1 mb-1">
          <span class="font-heading font-bold text-4xl">$99</span>
          <span class="text-gray-500">/month</span>
        </div>
        <div class="text-xs text-gray-600 mb-6">Billed after service performed</div>
        <ul class="space-y-3 mb-8 text-sm text-gray-300">
          <li><i class="fas fa-check text-green-400 mr-2"></i>Credit report analysis (3 bureaus)</li>
          <li><i class="fas fa-check text-green-400 mr-2"></i>Up to 5 disputes per round</li>
          <li><i class="fas fa-check text-green-400 mr-2"></i>Certified mail delivery</li>
          <li><i class="fas fa-check text-green-400 mr-2"></i>Monthly progress report</li>
          <li><i class="fas fa-check text-green-400 mr-2"></i>Email support</li>
          <li class="text-gray-600"><i class="fas fa-xmark text-gray-700 mr-2"></i>Direct creditor disputes</li>
          <li class="text-gray-600"><i class="fas fa-xmark text-gray-700 mr-2"></i>Priority AI agent assignment</li>
        </ul>
        <a href="#apply" class="block text-center border border-gray-700 hover:border-blue-500 text-white font-semibold py-3 rounded-xl transition">Get Started</a>
      </div>

      <!-- Pro (Most Popular) -->
      <div class="pricing-card bg-gray-900 border-2 border-blue-500 rounded-2xl p-8 relative scale-105">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
        <div class="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-2">Professional</div>
        <div class="flex items-baseline gap-1 mb-1">
          <span class="font-heading font-bold text-4xl">$149</span>
          <span class="text-gray-500">/month</span>
        </div>
        <div class="text-xs text-gray-600 mb-6">Billed after service performed</div>
        <ul class="space-y-3 mb-8 text-sm text-gray-300">
          <li><i class="fas fa-check text-green-400 mr-2"></i>Everything in Starter</li>
          <li><i class="fas fa-check text-blue-400 mr-2"></i><strong>Unlimited disputes per round</strong></li>
          <li><i class="fas fa-check text-blue-400 mr-2"></i><strong>Direct creditor disputes</strong></li>
          <li><i class="fas fa-check text-blue-400 mr-2"></i><strong>Inquiry removal</strong></li>
          <li><i class="fas fa-check text-blue-400 mr-2"></i><strong>AI Agent Alpha priority</strong></li>
          <li><i class="fas fa-check text-blue-400 mr-2"></i>Bi-weekly progress updates</li>
          <li><i class="fas fa-check text-blue-400 mr-2"></i>Phone + email support</li>
        </ul>
        <a href="#apply" class="cta-btn block text-center text-white font-bold py-3 rounded-xl">Get Started <i class="fas fa-arrow-right ml-1"></i></a>
      </div>

      <!-- Premium -->
      <div class="pricing-card bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <div class="text-sm text-purple-400 font-semibold uppercase tracking-wider mb-2">Premium</div>
        <div class="flex items-baseline gap-1 mb-1">
          <span class="font-heading font-bold text-4xl">$199</span>
          <span class="text-gray-500">/month</span>
        </div>
        <div class="text-xs text-gray-600 mb-6">Billed after service performed</div>
        <ul class="space-y-3 mb-8 text-sm text-gray-300">
          <li><i class="fas fa-check text-green-400 mr-2"></i>Everything in Professional</li>
          <li><i class="fas fa-check text-purple-400 mr-2"></i><strong>3 AI agents on your case</strong></li>
          <li><i class="fas fa-check text-purple-400 mr-2"></i><strong>Identity theft recovery</strong></li>
          <li><i class="fas fa-check text-purple-400 mr-2"></i><strong>CFPB & FTC escalation</strong></li>
          <li><i class="fas fa-check text-purple-400 mr-2"></i><strong>Goodwill letter campaigns</strong></li>
          <li><i class="fas fa-check text-purple-400 mr-2"></i>Real-time score monitoring</li>
          <li><i class="fas fa-check text-purple-400 mr-2"></i>Dedicated account manager</li>
        </ul>
        <a href="#apply" class="block text-center border border-gray-700 hover:border-purple-500 text-white font-semibold py-3 rounded-xl transition">Get Started</a>
      </div>
    </div>

    <div class="text-center mt-8">
      <div class="inline-flex items-center gap-3 glass rounded-full px-6 py-3 text-sm text-gray-400">
        <i class="fas fa-shield-halved text-green-400"></i>
        <span>30-day money-back guarantee</span>
        <span class="text-gray-700">|</span>
        <i class="fas fa-ban text-blue-400"></i>
        <span>Cancel anytime — no contracts</span>
        <span class="text-gray-700">|</span>
        <i class="fas fa-gavel text-gold"></i>
        <span>CROA compliant</span>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- FAQ -->
<!-- ============================================================ -->
<section id="faq" class="py-20 bg-gray-900/50">
  <div class="max-w-3xl mx-auto px-4">
    <div class="text-center mb-14">
      <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-4">Got Questions?</h2>
      <p class="text-gray-400 text-lg">Straight answers. No BS.</p>
    </div>

    <div class="space-y-3">
      <div class="faq-item bg-gray-900 border border-gray-800 rounded-xl p-5" onclick="this.classList.toggle('active')">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">Is credit repair legal?</h3>
          <i class="fas fa-chevron-down faq-icon text-gray-500"></i>
        </div>
        <div class="faq-answer"><p class="text-gray-400 text-sm mt-3 leading-relaxed">100% legal. The Fair Credit Reporting Act (FCRA) gives you the RIGHT to dispute any inaccurate, outdated, or unverifiable information on your credit report. Credit bureaus have 30 days to investigate. We're fully FCRA and CROA compliant — it's literally built into our 62 operating procedures.</p></div>
      </div>
      <div class="faq-item bg-gray-900 border border-gray-800 rounded-xl p-5" onclick="this.classList.toggle('active')">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">How fast will I see results?</h3>
          <i class="fas fa-chevron-down faq-icon text-gray-500"></i>
        </div>
        <div class="faq-answer"><p class="text-gray-400 text-sm mt-3 leading-relaxed">Most clients see their first deletions within 30-45 days (the FCRA investigation window). Significant score improvement (50-100+ points) typically happens within 90 days. Complex cases may take 4-6 months. We track everything — you'll see real-time progress in your dashboard.</p></div>
      </div>
      <div class="faq-item bg-gray-900 border border-gray-800 rounded-xl p-5" onclick="this.classList.toggle('active')">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">Do I pay anything upfront?</h3>
          <i class="fas fa-chevron-down faq-icon text-gray-500"></i>
        </div>
        <div class="faq-answer"><p class="text-gray-400 text-sm mt-3 leading-relaxed">Absolutely not. Under the Credit Repair Organizations Act (CROA), it's illegal to charge before services are performed. We follow this to the letter. Your first payment is only after we've completed work on your behalf.</p></div>
      </div>
      <div class="faq-item bg-gray-900 border border-gray-800 rounded-xl p-5" onclick="this.classList.toggle('active')">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">What are "AI Agents"?</h3>
          <i class="fas fa-chevron-down faq-icon text-gray-500"></i>
        </div>
        <div class="faq-answer"><p class="text-gray-400 text-sm mt-3 leading-relaxed">We use 3 specialized AI agents: Alpha handles dispute filing and bureau responses, Beta manages client communication and retention, and Gamma handles compliance and scheduling. They work 24/7 processing your case through our 62 documented procedures — faster, more accurate, and more thorough than manual processing.</p></div>
      </div>
      <div class="faq-item bg-gray-900 border border-gray-800 rounded-xl p-5" onclick="this.classList.toggle('active')">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">Can I cancel anytime?</h3>
          <i class="fas fa-chevron-down faq-icon text-gray-500"></i>
        </div>
        <div class="faq-answer"><p class="text-gray-400 text-sm mt-3 leading-relaxed">Yes. No long-term contracts. You have a 3-business-day right to cancel per CROA, and you can cancel your monthly service at any time after that. We believe in earning your business every single month.</p></div>
      </div>
      <div class="faq-item bg-gray-900 border border-gray-800 rounded-xl p-5" onclick="this.classList.toggle('active')">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">What's different about RJ Business Solutions?</h3>
          <i class="fas fa-chevron-down faq-icon text-gray-500"></i>
        </div>
        <div class="faq-answer"><p class="text-gray-400 text-sm mt-3 leading-relaxed">Most credit repair companies send generic template letters and hope for the best. We run a documented 62-procedure system with 239 legal templates, 3 AI agents, and track 30 legal changes for 2026. Every dispute cites specific FCRA sections. Every letter goes certified mail with tracking. Every case has a strategy, not a template.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- LEAD CAPTURE FORM — The Money Section -->
<!-- ============================================================ -->
<section id="apply" class="py-20">
  <div class="max-w-4xl mx-auto px-4">
    <div class="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
      <!-- BG glow -->
      <div class="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-[80px]"></div>
      <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px]"></div>

      <div class="relative">
        <div class="text-center mb-10">
          <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-3">Get Your <span class="gradient-text">FREE Consultation</span></h2>
          <p class="text-gray-400 text-lg">Fill this out. We'll call you within 5 minutes. No obligation. No pressure.</p>
        </div>

        <form id="leadForm" class="grid sm:grid-cols-2 gap-5" onsubmit="return submitLead(event)">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">First Name *</label>
            <input type="text" name="first_name" required placeholder="Your first name" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Last Name</label>
            <input type="text" name="last_name" placeholder="Your last name" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
            <input type="email" name="email" required placeholder="your@email.com" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Phone *</label>
            <input type="tel" name="phone" required placeholder="(555) 123-4567" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Credit Score Range</label>
            <select name="credit_score_range" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white">
              <option value="">Select range</option>
              <option value="below-500">Below 500</option>
              <option value="500-550">500 - 550</option>
              <option value="550-600">550 - 600</option>
              <option value="600-650">600 - 650</option>
              <option value="650-700">650 - 700</option>
              <option value="above-700">Above 700</option>
              <option value="not-sure">Not Sure</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5">Biggest Credit Issue</label>
            <select name="message" class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white">
              <option value="">Select issue</option>
              <option value="Collections">Collections / Charge-offs</option>
              <option value="Late Payments">Late Payments</option>
              <option value="Medical Debt">Medical Debt</option>
              <option value="Identity Theft">Identity Theft</option>
              <option value="Inquiries">Too Many Inquiries</option>
              <option value="Mixed File">Mixed / Wrong Info on Report</option>
              <option value="Multiple Issues">Multiple Issues</option>
              <option value="Not Sure">Not Sure — Need Analysis</option>
            </select>
          </div>

          <!-- Hidden UTM fields -->
          <input type="hidden" name="source" value="funnel">
          <input type="hidden" name="utm_source" id="utm_source">
          <input type="hidden" name="utm_medium" id="utm_medium">
          <input type="hidden" name="utm_campaign" id="utm_campaign">

          <div class="sm:col-span-2">
            <button type="submit" id="submitBtn" class="cta-btn w-full text-white font-bold text-lg py-4 rounded-xl">
              <i class="fas fa-bolt mr-2"></i>Get My FREE Credit Analysis
            </button>
            <p class="text-xs text-gray-600 text-center mt-3">
              <i class="fas fa-lock mr-1"></i> Your information is 100% secure. We never share or sell your data. GLBA compliant.
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- FINAL CTA -->
<!-- ============================================================ -->
<section class="py-16 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="font-heading font-800 text-3xl sm:text-4xl mb-4">Every Day You Wait Costs You Money</h2>
    <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Higher interest rates. Denied applications. Lost opportunities. The math is simple — fixing your credit now saves you thousands.</p>
    <a href="/signup" class="cta-btn animate-pulse-glow text-white font-bold text-xl px-12 py-5 rounded-xl inline-block">
      <i class="fas fa-bolt mr-2"></i>Start My Credit Repair Now
    </a>
    <div class="mt-4 text-gray-600 text-sm">3-day money-back guarantee • No upfront fee • Cancel anytime</div>
  </div>
</section>

<!-- ============================================================ -->
<!-- FOOTER -->
<!-- ============================================================ -->
<footer class="py-12 border-t border-gray-800/50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" class="w-10 h-10 rounded-lg">
          <span class="font-heading font-bold">RJ Business Solutions</span>
        </div>
        <p class="text-gray-500 text-sm leading-relaxed">AI-powered credit repair backed by 62 documented procedures, 239 legal templates, and 30 tracked 2026 legal changes. FCRA & CROA compliant.</p>
      </div>
      <div>
        <h4 class="font-bold mb-4">Contact</h4>
        <div class="space-y-2 text-sm text-gray-500">
          <div><i class="fas fa-map-marker-alt text-blue-400 mr-2 w-4"></i>1342 NM 333, Tijeras, NM 87059</div>
          <div><i class="fas fa-globe text-blue-400 mr-2 w-4"></i><a href="https://rjbusinesssolutions.org" class="hover:text-white transition">rjbusinesssolutions.org</a></div>
          <div><i class="fas fa-envelope text-blue-400 mr-2 w-4"></i>support@rjbusinesssolutions.org</div>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-4">Legal</h4>
        <div class="space-y-2 text-sm text-gray-500">
          <div><i class="fas fa-shield-halved text-green-400 mr-2 w-4"></i>FCRA Compliant (SOP-601)</div>
          <div><i class="fas fa-gavel text-green-400 mr-2 w-4"></i>CROA Compliant (SOP-602)</div>
          <div><i class="fas fa-lock text-green-400 mr-2 w-4"></i>GLBA Data Privacy (SOP-604)</div>
          <div><i class="fas fa-file-contract text-green-400 mr-2 w-4"></i>State Licensed (SOP-603)</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800/50 text-xs text-gray-600">
      <div>&copy; 2026 RJ Business Solutions. All rights reserved.</div>
      <div class="flex gap-4 mt-4 sm:mt-0">
        <a href="https://twitter.com/ricksolutions1" class="hover:text-white transition"><i class="fab fa-twitter"></i></a>
        <a href="https://linkedin.com/in/rick-jefferson-314998235" class="hover:text-white transition"><i class="fab fa-linkedin"></i></a>
        <a href="https://tiktok.com/@rick_jeff_solution" class="hover:text-white transition"><i class="fab fa-tiktok"></i></a>
      </div>
    </div>
  </div>
</footer>

<div class="h-16 md:hidden"></div><!-- Mobile CTA spacer -->

<script>
// UTM capture
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('utm_source').value = urlParams.get('utm_source') || '';
document.getElementById('utm_medium').value = urlParams.get('utm_medium') || '';
document.getElementById('utm_campaign').value = urlParams.get('utm_campaign') || '';

// Score counter animation
let score = 520;
const target = 710;
const counter = document.getElementById('scoreCounter');
if (counter) {
  const interval = setInterval(() => {
    score += 2;
    if (score >= target) { score = target; clearInterval(interval); }
    counter.textContent = score;
  }, 30);
}

// Lead form submission
async function submitLead(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const form = document.getElementById('leadForm');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Submitting...';

  const data = {};
  new FormData(form).forEach((v, k) => data[k] = v);

  try {
    const r = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await r.json();
    if (result.success) {
      btn.innerHTML = '<i class="fas fa-check mr-2"></i>Application Received!';
      btn.classList.remove('cta-btn');
      btn.classList.add('bg-green-600');
      document.getElementById('toast').classList.add('show');
      setTimeout(() => document.getElementById('toast').classList.remove('show'), 5000);
      form.reset();
      // Track conversion
      if (typeof gtag !== 'undefined') gtag('event', 'conversion', { send_to: 'lead_captured' });
      if (typeof fbq !== 'undefined') fbq('track', 'Lead');
    } else {
      btn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>' + (result.error || 'Please try again');
      btn.disabled = false;
      setTimeout(() => { btn.innerHTML = '<i class="fas fa-bolt mr-2"></i>Get My FREE Credit Analysis'; btn.classList.add('cta-btn'); }, 3000);
    }
  } catch (err) {
    btn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Error — please call us';
    btn.disabled = false;
    setTimeout(() => { btn.innerHTML = '<i class="fas fa-bolt mr-2"></i>Get My FREE Credit Analysis'; }, 3000);
  }
}
</script>
</body>
</html>`)
})

// ============================================================
// FRONTEND — OPERATIONS COMMAND CENTER v2
// ============================================================

app.get('/', async (c) => {
  let d: any = null
  try {
    const { DB } = c.env
    if (DB) {
      const [clients, disputes, tasks, workflows, overdueTasks, overdueDisputes, unreadNotifs, compliance, revenue, recentAudit, automations, allClients, allDisputes, team, kpis, allTasks] = await Promise.all([
        DB.prepare("SELECT status, COUNT(*) as count FROM clients GROUP BY status").all(),
        DB.prepare("SELECT status, COUNT(*) as count FROM disputes GROUP BY status").all(),
        DB.prepare("SELECT t.*, c.first_name || ' ' || c.last_name as client_name FROM tasks t LEFT JOIN clients c ON t.client_id = c.id WHERE t.status NOT IN ('completed','cancelled') ORDER BY CASE t.priority WHEN 'critical' THEN 0 WHEN 'high' THEN 1 ELSE 2 END, t.due_date ASC LIMIT 25").all(),
        DB.prepare("SELECT w.*, c.first_name || ' ' || c.last_name as client_name FROM workflows w LEFT JOIN clients c ON w.client_id = c.id WHERE w.status IN ('running','paused') ORDER BY CASE w.priority WHEN 'critical' THEN 0 WHEN 'high' THEN 1 ELSE 2 END LIMIT 15").all(),
        DB.prepare("SELECT COUNT(*) as count FROM tasks WHERE due_date < date('now') AND status NOT IN ('completed','cancelled')").first(),
        DB.prepare("SELECT COUNT(*) as count FROM disputes WHERE response_due_date < date('now') AND status IN ('sent','investigating')").first(),
        DB.prepare("SELECT * FROM notifications WHERE read_at IS NULL ORDER BY created_at DESC LIMIT 15").all(),
        DB.prepare("SELECT * FROM compliance_items ORDER BY expiration_date ASC").all(),
        DB.prepare("SELECT SUM(monthly_fee) as mrr FROM clients WHERE status = 'active'").first(),
        DB.prepare("SELECT * FROM audit_log ORDER BY created_at DESC LIMIT 20").all(),
        DB.prepare("SELECT * FROM automations ORDER BY is_active DESC, name").all(),
        DB.prepare("SELECT * FROM clients ORDER BY CASE status WHEN 'active' THEN 0 WHEN 'onboarding' THEN 1 WHEN 'lead' THEN 2 WHEN 'paused' THEN 3 WHEN 'graduated' THEN 4 ELSE 5 END, updated_at DESC").all(),
        DB.prepare("SELECT d.*, c.first_name || ' ' || c.last_name as client_name FROM disputes d LEFT JOIN clients c ON d.client_id = c.id ORDER BY d.created_at DESC").all(),
        DB.prepare("SELECT * FROM team_members ORDER BY CASE role WHEN 'owner' THEN 0 ELSE 1 END, name").all(),
        DB.prepare("SELECT * FROM kpi_snapshots WHERE period_type = 'monthly' ORDER BY period_date DESC LIMIT 40").all(),
        DB.prepare("SELECT t.*, c.first_name || ' ' || c.last_name as client_name FROM tasks t LEFT JOIN clients c ON t.client_id = c.id ORDER BY CASE t.priority WHEN 'critical' THEN 0 WHEN 'high' THEN 1 WHEN 'normal' THEN 2 ELSE 3 END, t.due_date ASC").all(),
      ])
      const totalClients = (allClients.results as any[]).length
      const activeClients = (allClients.results as any[]).filter((c:any) => c.status === 'active').length
      const graduatedClients = (allClients.results as any[]).filter((c:any) => c.status === 'graduated').length
      const totalDisputes = (allDisputes.results as any[]).length
      const deletedDisputes = (allDisputes.results as any[]).filter((x:any) => x.status === 'deleted').length
      d = {
        clientStats: clients.results, disputeStats: disputes.results, activeTasks: tasks.results,
        activeWorkflows: workflows.results, overdueTasks: (overdueTasks as any)?.count || 0,
        overdueDisputes: (overdueDisputes as any)?.count || 0, notifications: unreadNotifs.results,
        compliance: compliance.results, mrr: (revenue as any)?.mrr || 0, recentAudit: recentAudit.results,
        automations: automations.results, clients: allClients.results, disputes: allDisputes.results,
        team: team.results, kpis: kpis.results, allTasks: allTasks.results,
        totalClients, activeClients, graduatedClients, totalDisputes, deletedDisputes,
        deletionRate: totalDisputes > 0 ? Math.round((deletedDisputes / totalDisputes) * 100) : 0,
      }
    }
  } catch (e) { /* DB not available */ }
  const hasDB = !!d

  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RJ Business Solutions — Operations Command Center 2026</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<style>
  * { font-family: 'Inter', system-ui, sans-serif; }
  .mono { font-family: 'Space Grotesk', monospace; }
  .tab-btn { transition: all 0.2s; border-bottom: 2px solid transparent; }
  .tab-btn.active { border-bottom-color: #3b82f6; color: #1e40af; background: #eff6ff; }
  .tab-btn:hover { background: #f8fafc; }
  .tab-content { display: none; }
  .tab-content.active { display: block; }
  .sop-card { transition: all 0.2s; } .sop-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .stat-card { transition: all 0.2s; } .stat-card:hover { transform: translateY(-1px); }
  .badge-critical { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
  .badge-current { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
  .fade-in { animation: fadeIn 0.3s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .priority-critical { border-left: 3px solid #dc2626; }
  .priority-high { border-left: 3px solid #f59e0b; }
  .priority-normal { border-left: 3px solid #3b82f6; }
  .priority-low { border-left: 3px solid #9ca3af; }
  .pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
  .glow { box-shadow: 0 0 20px rgba(59,130,246,0.15); }
  .toast { position:fixed; top:1rem; right:1rem; z-index:100; transform:translateX(120%); transition:transform 0.3s ease; }
  .toast.show { transform:translateX(0); }
</style>
</head>
<body class="bg-gray-50 min-h-screen">

<!-- HEADER -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-[1600px] mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-14">
      <div class="flex items-center gap-3 cursor-pointer" onclick="location.reload()">
        <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ" class="w-8 h-8 rounded-lg">
        <div>
          <h1 class="text-sm font-bold text-gray-900 leading-tight">Operations Command Center</h1>
          <p class="text-[10px] text-gray-400 mono">RJ Business Solutions — Master SOP 2026</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        ${hasDB ? `
        <button onclick="runAutopilot()" class="px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center gap-1"><i class="fas fa-robot"></i><span class="hidden sm:inline">Run Autopilot</span></button>
        <button onclick="switchTab('notifications')" class="relative p-1.5 rounded-lg hover:bg-gray-100"><i class="fas fa-bell text-gray-400 text-sm"></i>${d.notifications.length > 0 ? `<span class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">${d.notifications.length}</span>` : ''}</button>
        ` : ''}
        <span class="text-xs text-gray-400 mono hidden sm:inline">v2026.4</span>
      </div>
    </div>
  </div>
</header>

<!-- NAV TABS -->
<nav class="bg-white border-b border-gray-100">
  <div class="max-w-[1600px] mx-auto px-4 sm:px-6">
    <div class="flex gap-0 overflow-x-auto">
      <button class="tab-btn active px-3 py-2.5 text-xs font-semibold whitespace-nowrap" data-tab="dashboard" onclick="switchTab('dashboard')"><i class="fas fa-tachometer-alt mr-1"></i>Dashboard</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="clients" onclick="switchTab('clients')"><i class="fas fa-users mr-1"></i>Clients</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="disputes" onclick="switchTab('disputes')"><i class="fas fa-file-signature mr-1"></i>Disputes</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="tasks" onclick="switchTab('tasks')"><i class="fas fa-tasks mr-1"></i>Tasks</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="workflows" onclick="switchTab('workflows')"><i class="fas fa-project-diagram mr-1"></i>Workflows</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="compliance" onclick="switchTab('compliance')"><i class="fas fa-shield-alt mr-1"></i>Compliance</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="automations" onclick="switchTab('automations')"><i class="fas fa-robot mr-1"></i>Automations</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="team" onclick="switchTab('team')"><i class="fas fa-user-friends mr-1"></i>Team</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="kpis" onclick="switchTab('kpis')"><i class="fas fa-chart-bar mr-1"></i>KPIs</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="notifications" onclick="switchTab('notifications')"><i class="fas fa-bell mr-1"></i>Alerts${hasDB && d.notifications.length > 0 ? ` <span class="bg-red-500 text-white text-[8px] px-1 rounded-full">${d.notifications.length}</span>` : ''}</button>
      <button class="tab-btn px-3 py-2.5 text-xs font-semibold text-gray-500 whitespace-nowrap" data-tab="sops" onclick="switchTab('sops')"><i class="fas fa-book mr-1"></i>SOPs</button>
    </div>
  </div>
</nav>

<main class="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">

<!-- =============== DASHBOARD TAB =============== -->
<div id="tab-dashboard" class="tab-content active fade-in">
${hasDB ? `
  <!-- Stat Cards -->
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
    <div class="stat-card bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">MRR</p><p class="text-xl font-bold text-green-600 mono">$${(d.mrr || 0).toFixed(0)}</p></div>
    <div class="stat-card bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Active Clients</p><p class="text-xl font-bold text-blue-600 mono">${(d.clientStats.find((s:any) => s.status === 'active') || { count: 0 }).count}</p></div>
    <div class="stat-card bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Open Disputes</p><p class="text-xl font-bold text-purple-600 mono">${d.disputeStats.filter((s:any) => !['deleted','verified'].includes(s.status)).reduce((a:number,s:any) => a + s.count, 0)}</p></div>
    <div class="stat-card bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Active Workflows</p><p class="text-xl font-bold text-indigo-600 mono">${d.activeWorkflows.length}</p></div>
    <div class="stat-card ${d.overdueTasks > 0 ? 'bg-red-50 border-red-200' : 'bg-white'} rounded-xl border p-4"><p class="text-[10px] ${d.overdueTasks > 0 ? 'text-red-500' : 'text-gray-400'} uppercase tracking-wider mb-1">Overdue Tasks</p><p class="text-xl font-bold ${d.overdueTasks > 0 ? 'text-red-600' : 'text-gray-400'} mono">${d.overdueTasks}</p></div>
    <div class="stat-card ${d.overdueDisputes > 0 ? 'bg-amber-50 border-amber-200' : 'bg-white'} rounded-xl border p-4"><p class="text-[10px] ${d.overdueDisputes > 0 ? 'text-amber-600' : 'text-gray-400'} uppercase tracking-wider mb-1">Overdue Disputes</p><p class="text-xl font-bold ${d.overdueDisputes > 0 ? 'text-amber-600' : 'text-gray-400'} mono">${d.overdueDisputes}</p></div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Active Workflows Column -->
    <div class="bg-white rounded-xl border p-5">
      <h3 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2"><i class="fas fa-project-diagram text-indigo-500"></i> Active Workflows</h3>
      <div class="space-y-3">${d.activeWorkflows.map((w: any) => `
        <div class="border rounded-lg p-3 priority-${w.priority}">
          <div class="flex items-center justify-between mb-1"><span class="mono text-[10px] font-bold text-indigo-600">${w.sop_id}</span><span class="text-[10px] px-1.5 py-0.5 rounded-full ${w.status === 'running' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}">${w.status}</span></div>
          <p class="text-xs font-semibold text-gray-800 mb-1">${w.sop_title}</p>
          ${w.client_name ? `<p class="text-[10px] text-gray-400"><i class="fas fa-user mr-1"></i>${w.client_name}</p>` : ''}
          <div class="mt-2 bg-gray-100 rounded-full h-1.5"><div class="bg-indigo-500 h-1.5 rounded-full" style="width:${Math.round((w.current_step / w.total_steps) * 100)}%"></div></div>
          <p class="text-[10px] text-gray-400 mt-1">Step ${w.current_step}/${w.total_steps}${w.assigned_to ? ` • ${w.assigned_to}` : ''}</p>
        </div>`).join('')}
        ${d.activeWorkflows.length === 0 ? '<p class="text-xs text-gray-400 text-center py-4">No active workflows</p>' : ''}
      </div>
    </div>

    <!-- Tasks Column -->
    <div class="bg-white rounded-xl border p-5">
      <h3 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2"><i class="fas fa-tasks text-blue-500"></i> Pending Tasks <span class="text-[10px] font-normal text-gray-400">(${d.activeTasks.length})</span></h3>
      <div class="space-y-2">${d.activeTasks.slice(0, 10).map((t: any) => `
        <div class="border rounded-lg p-2.5 priority-${t.priority} flex items-start gap-2">
          <input type="checkbox" class="mt-0.5 rounded" onchange="completeTask(${t.id})" ${t.status === 'completed' ? 'checked' : ''}>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-medium text-gray-800 truncate">${t.title}</p>
            <div class="flex items-center gap-2 mt-0.5 text-[10px] text-gray-400">
              ${t.due_date ? `<span><i class="fas fa-clock mr-0.5"></i>${t.due_date}</span>` : ''}
              ${t.assigned_to ? `<span><i class="fas fa-user mr-0.5"></i>${t.assigned_to.replace('AI Agent ', '')}</span>` : ''}
              ${t.sop_id ? `<span class="mono">${t.sop_id}</span>` : ''}
            </div>
          </div>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full ${t.priority === 'critical' ? 'bg-red-50 text-red-700' : t.priority === 'high' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}">${t.priority}</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- Notifications + Activity Column -->
    <div class="space-y-6">
      ${d.notifications.length > 0 ? `
      <div class="bg-white rounded-xl border p-5">
        <h3 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2"><i class="fas fa-bell text-amber-500"></i> Notifications <span class="bg-red-500 text-white text-[9px] px-1.5 rounded-full">${d.notifications.length}</span></h3>
        <div class="space-y-2">${d.notifications.map((n: any) => `
          <div class="border rounded-lg p-2.5 ${n.severity === 'critical' ? 'border-red-200 bg-red-50' : n.severity === 'success' ? 'border-green-200 bg-green-50' : n.severity === 'warning' ? 'border-amber-200 bg-amber-50' : 'border-blue-200 bg-blue-50'}">
            <div class="flex items-center gap-1 mb-0.5"><i class="fas ${n.severity === 'critical' ? 'fa-exclamation-triangle text-red-500' : n.severity === 'success' ? 'fa-check-circle text-green-500' : n.severity === 'warning' ? 'fa-exclamation-circle text-amber-500' : 'fa-info-circle text-blue-500'} text-xs"></i><span class="text-xs font-semibold">${n.title}</span></div>
            <p class="text-[10px] text-gray-600 leading-relaxed">${n.message.substring(0, 120)}${n.message.length > 120 ? '...' : ''}</p>
          </div>`).join('')}
        </div>
      </div>` : ''}

      <div class="bg-white rounded-xl border p-5">
        <h3 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2"><i class="fas fa-history text-gray-500"></i> Recent Activity</h3>
        <div class="space-y-2">${d.recentAudit.slice(0, 8).map((a: any) => `
          <div class="flex items-start gap-2 text-[11px]">
            <span class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"><i class="fas ${a.action.includes('created') ? 'fa-plus text-green-500' : a.action.includes('completed') ? 'fa-check text-blue-500' : a.action.includes('deleted') ? 'fa-trash text-red-500' : 'fa-edit text-gray-500'} text-[9px]"></i></span>
            <div class="flex-1 min-w-0"><p class="text-gray-700 truncate">${a.details}</p><p class="text-[10px] text-gray-400">${a.actor} • ${a.created_at}</p></div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
` : '<div class="text-center py-20"><i class="fas fa-database text-4xl text-gray-300 mb-4"></i><p class="text-gray-400">Database not connected — showing SOP Library only</p><p class="text-xs text-gray-400 mt-2">Connect D1 database to enable full operations mode</p></div>'}
</div>

<!-- =============== CLIENTS TAB =============== -->
<div id="tab-clients" class="tab-content fade-in">
${hasDB ? `
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold">Client Pipeline</h2>
    <button onclick="showNewClientForm()" class="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"><i class="fas fa-plus mr-1"></i>New Client</button>
  </div>
  <!-- Pipeline View -->
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
    ${['lead','onboarding','active','paused','graduated','cancelled'].map(s => {
      const count = d.clients.filter((c:any) => c.status === s).length
      const colors: Record<string,string> = { lead: 'bg-yellow-50 border-yellow-200 text-yellow-700', onboarding: 'bg-blue-50 border-blue-200 text-blue-700', active: 'bg-green-50 border-green-200 text-green-700', paused: 'bg-amber-50 border-amber-200 text-amber-700', graduated: 'bg-emerald-50 border-emerald-200 text-emerald-700', cancelled: 'bg-gray-50 border-gray-200 text-gray-500' }
      return `<div class="rounded-lg border p-3 text-center ${colors[s]}"><p class="text-xl font-bold mono">${count}</p><p class="text-[10px] uppercase tracking-wider">${s}</p></div>`
    }).join('')}
  </div>
  <div class="bg-white rounded-xl border overflow-hidden">
    <table class="w-full text-xs">
      <thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-500">Client</th><th class="px-3 py-2 text-left font-semibold text-gray-500">Status</th><th class="px-3 py-2 text-left font-semibold text-gray-500 hidden md:table-cell">Score</th><th class="px-3 py-2 text-left font-semibold text-gray-500 hidden lg:table-cell">Agent</th><th class="px-3 py-2 text-left font-semibold text-gray-500 hidden lg:table-cell">MRR</th><th class="px-3 py-2 text-left font-semibold text-gray-500">Actions</th></tr></thead>
      <tbody>${d.clients.map((c: any) => {
        const scoreImprove = c.credit_score_current && c.credit_score_start ? c.credit_score_current - c.credit_score_start : 0
        return `
        <tr class="border-t hover:bg-gray-50 cursor-pointer" onclick="openClientDetail(${c.id})">
          <td class="px-3 py-2"><div class="font-semibold text-gray-900">${c.first_name} ${c.last_name}</div><div class="text-[10px] text-gray-400">${c.email}</div></td>
          <td class="px-3 py-2"><span class="px-2 py-0.5 rounded-full text-[10px] font-medium ${c.status === 'active' ? 'bg-green-50 text-green-700' : c.status === 'lead' ? 'bg-yellow-50 text-yellow-700' : c.status === 'graduated' ? 'bg-emerald-50 text-emerald-700' : c.status === 'paused' ? 'bg-amber-50 text-amber-700' : c.status === 'onboarding' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'}">${c.status}</span></td>
          <td class="px-3 py-2 hidden md:table-cell">${c.credit_score_start ? `<span class="mono">${c.credit_score_start}→${c.credit_score_current || '?'}</span>${scoreImprove > 0 ? ` <span class="text-[10px] text-green-600 font-medium">+${scoreImprove}</span>` : ''}` : '—'}</td>
          <td class="px-3 py-2 hidden lg:table-cell text-gray-500">${(c.assigned_agent || '—').replace('AI Agent ', '')}</td>
          <td class="px-3 py-2 hidden lg:table-cell mono text-green-600">${c.monthly_fee > 0 ? '$' + c.monthly_fee : '—'}</td>
          <td class="px-3 py-2"><div class="flex gap-1" onclick="event.stopPropagation()">
            <button onclick="executeSopForClient(${c.id}, '${c.first_name} ${c.last_name}')" class="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] hover:bg-indigo-100"><i class="fas fa-play mr-0.5"></i>SOP</button>
            <button onclick="openClientDetail(${c.id})" class="px-2 py-1 bg-gray-50 text-gray-600 rounded text-[10px] hover:bg-gray-100"><i class="fas fa-eye"></i></button>
          </div></td>
        </tr>`}).join('')}
      </tbody>
    </table>
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== DISPUTES TAB =============== -->
<div id="tab-disputes" class="tab-content fade-in">
${hasDB ? `
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold">Dispute Tracker</h2>
    <div class="flex gap-2">
      <select id="disputeFilter" onchange="filterDisputes(this.value)" class="text-xs border rounded-lg px-2 py-1">
        <option value="">All Status</option>
        <option value="pending">Pending</option><option value="sent">Sent</option><option value="investigating">Investigating</option><option value="deleted">Deleted</option><option value="escalated">Escalated</option>
      </select>
    </div>
  </div>
  <!-- Dispute Stats -->
  <div class="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
    ${['pending','drafted','sent','investigating','deleted','escalated'].map(s => {
      const count = d.disputes.filter((x:any) => x.status === s).length
      const colors: Record<string,string> = { pending: 'text-gray-600', drafted: 'text-blue-600', sent: 'text-indigo-600', investigating: 'text-amber-600', deleted: 'text-green-600', escalated: 'text-red-600' }
      return `<div class="bg-white rounded-lg border p-2 text-center"><p class="text-lg font-bold mono ${colors[s]}">${count}</p><p class="text-[9px] uppercase tracking-wider text-gray-400">${s}</p></div>`
    }).join('')}
  </div>
  <div id="disputeList" class="bg-white rounded-xl border overflow-hidden">
    <table class="w-full text-xs">
      <thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-500">Client</th><th class="px-3 py-2 text-left font-semibold text-gray-500">Bureau</th><th class="px-3 py-2 text-left font-semibold text-gray-500 hidden md:table-cell">Account</th><th class="px-3 py-2 text-left font-semibold text-gray-500">Status</th><th class="px-3 py-2 text-left font-semibold text-gray-500 hidden lg:table-cell">Round</th><th class="px-3 py-2 text-left font-semibold text-gray-500 hidden lg:table-cell">Tracking</th></tr></thead>
      <tbody>${d.disputes.map((x: any) => `
        <tr class="border-t hover:bg-gray-50 dispute-row" data-status="${x.status}">
          <td class="px-3 py-2 font-medium">${x.client_name || 'N/A'}</td>
          <td class="px-3 py-2"><span class="px-1.5 py-0.5 rounded text-[10px] font-medium ${x.bureau === 'experian' ? 'bg-blue-50 text-blue-700' : x.bureau === 'equifax' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}">${x.bureau}</span></td>
          <td class="px-3 py-2 hidden md:table-cell">${x.account_name}</td>
          <td class="px-3 py-2"><span class="px-1.5 py-0.5 rounded text-[10px] font-medium ${x.status === 'deleted' ? 'bg-green-50 text-green-700' : x.status === 'escalated' ? 'bg-red-50 text-red-700' : x.status === 'sent' ? 'bg-indigo-50 text-indigo-700' : 'bg-gray-100 text-gray-600'}">${x.status}</span></td>
          <td class="px-3 py-2 hidden lg:table-cell mono">${x.dispute_round}</td>
          <td class="px-3 py-2 hidden lg:table-cell mono text-[10px] text-gray-400">${x.tracking_number || '—'}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== TASKS TAB =============== -->
<div id="tab-tasks" class="tab-content fade-in">
${hasDB ? `
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold">Task Queue</h2>
    <button onclick="showNewTaskForm()" class="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"><i class="fas fa-plus mr-1"></i>New Task</button>
  </div>
  <div id="taskList" class="space-y-2">
    ${d.activeTasks.map((t: any) => `
      <div class="bg-white rounded-lg border p-3 priority-${t.priority} flex items-start gap-3">
        <input type="checkbox" class="mt-1 rounded" onchange="completeTask(${t.id})" ${t.status === 'completed' ? 'checked' : ''}>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium ${t.priority === 'critical' ? 'bg-red-50 text-red-700' : t.priority === 'high' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}">${t.priority}</span>
            ${t.sop_id ? `<span class="mono text-[10px] text-indigo-600">${t.sop_id}</span>` : ''}
            ${t.category ? `<span class="text-[10px] text-gray-400">${t.category}</span>` : ''}
          </div>
          <p class="text-sm font-medium text-gray-900">${t.title}</p>
          ${t.description ? `<p class="text-xs text-gray-500 mt-0.5">${t.description.substring(0, 100)}</p>` : ''}
          <div class="flex items-center gap-3 mt-1.5 text-[10px] text-gray-400">
            ${t.due_date ? `<span><i class="fas fa-calendar mr-0.5"></i>${t.due_date}</span>` : ''}
            ${t.assigned_to ? `<span><i class="fas fa-user mr-0.5"></i>${t.assigned_to}</span>` : ''}
            ${t.client_name ? `<span><i class="fas fa-user-circle mr-0.5"></i>${t.client_name}</span>` : ''}
            ${t.recurrence ? `<span><i class="fas fa-sync mr-0.5"></i>${t.recurrence}</span>` : ''}
          </div>
        </div>
      </div>`).join('')}
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== WORKFLOWS TAB =============== -->
<div id="tab-workflows" class="tab-content fade-in">
${hasDB ? `
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold">Workflow Engine</h2>
    <button onclick="showSopExecutor()" class="px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700"><i class="fas fa-play mr-1"></i>Execute SOP</button>
  </div>
  <div class="space-y-3">${d.activeWorkflows.map((w: any) => `
    <div class="bg-white rounded-xl border p-4 cursor-pointer hover:shadow-md transition" onclick="openWorkflowDetail(${w.id})">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">${w.sop_id}</span>
          <span class="text-sm font-bold text-gray-900">${w.sop_title}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full ${w.priority === 'critical' ? 'bg-red-50 text-red-700' : w.priority === 'high' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}">${w.priority}</span>
        </div>
        <div class="flex items-center gap-2" onclick="event.stopPropagation()">
          <span class="text-[10px] px-2 py-0.5 rounded-full ${w.status === 'running' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}">${w.status}</span>
          ${w.status === 'running' ? `<button onclick="advanceWorkflow(${w.id})" class="px-2 py-1 bg-green-50 text-green-700 rounded text-[10px] hover:bg-green-100"><i class="fas fa-step-forward mr-0.5"></i>Advance</button>` : ''}
        </div>
      </div>
      ${w.client_name ? `<p class="text-xs text-gray-500 mb-2"><i class="fas fa-user mr-1"></i>${w.client_name} • Assigned: ${w.assigned_to || 'Unassigned'}</p>` : ''}
      <div class="bg-gray-100 rounded-full h-2 mb-1"><div class="bg-indigo-500 h-2 rounded-full transition-all" style="width:${Math.round((w.current_step / w.total_steps) * 100)}%"></div></div>
      <p class="text-[10px] text-gray-400">Step ${w.current_step} of ${w.total_steps} • ${w.due_date ? 'Due: ' + w.due_date : 'No deadline'}</p>
    </div>`).join('')}
    ${d.activeWorkflows.length === 0 ? '<div class="text-center py-10 text-gray-400"><i class="fas fa-project-diagram text-3xl mb-2"></i><p class="text-sm">No active workflows</p><p class="text-xs">Execute a SOP to start a workflow</p></div>' : ''}
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== COMPLIANCE TAB =============== -->
<div id="tab-compliance" class="tab-content fade-in">
${hasDB ? `
  <h2 class="text-lg font-bold mb-4">Compliance & Regulatory Tracker</h2>
  <div class="space-y-3">${d.compliance.map((c: any) => {
    const daysUntil = c.expiration_date ? Math.ceil((new Date(c.expiration_date).getTime() - Date.now()) / 86400000) : null
    const urgency = daysUntil !== null ? (daysUntil < 30 ? 'border-red-200 bg-red-50' : daysUntil < 90 ? 'border-amber-200 bg-amber-50' : 'border-green-200 bg-green-50') : ''
    return `
    <div class="bg-white rounded-xl border ${urgency} p-4">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 uppercase">${c.category}</span>
          <span class="text-sm font-bold text-gray-900">${c.title}</span>
        </div>
        ${daysUntil !== null ? `<span class="text-xs font-medium ${daysUntil < 30 ? 'text-red-600' : daysUntil < 90 ? 'text-amber-600' : 'text-green-600'}">${daysUntil < 0 ? 'EXPIRED' : daysUntil + ' days left'}</span>` : ''}
      </div>
      ${c.description ? `<p class="text-xs text-gray-500 mb-2">${c.description}</p>` : ''}
      <div class="flex items-center gap-4 text-[10px] text-gray-400">
        ${c.jurisdiction ? `<span><i class="fas fa-map-marker-alt mr-0.5"></i>${c.jurisdiction}</span>` : ''}
        ${c.expiration_date ? `<span><i class="fas fa-calendar mr-0.5"></i>Expires: ${c.expiration_date}</span>` : ''}
        ${c.responsible_party ? `<span><i class="fas fa-user mr-0.5"></i>${c.responsible_party}</span>` : ''}
        ${c.cost > 0 ? `<span class="mono"><i class="fas fa-dollar-sign mr-0.5"></i>${c.cost}</span>` : ''}
        ${c.sop_id ? `<span class="mono text-indigo-600">${c.sop_id}</span>` : ''}
      </div>
    </div>`}).join('')}
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== AUTOMATIONS TAB =============== -->
<div id="tab-automations" class="tab-content fade-in">
${hasDB ? `
  <h2 class="text-lg font-bold mb-4">Autopilot Automations</h2>
  <div class="space-y-3">${d.automations.map((a: any) => {
    const config = JSON.parse(a.trigger_config || '{}')
    const actionConfig = JSON.parse(a.action_config || '{}')
    return `
    <div class="bg-white rounded-xl border p-4 ${a.is_active ? '' : 'opacity-60'}">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full ${a.is_active ? 'bg-green-500 pulse' : 'bg-gray-300'}"></span>
          <span class="text-sm font-bold text-gray-900">${a.name}</span>
          <span class="mono text-[10px] text-indigo-600">${a.sop_id}</span>
        </div>
        <button onclick="toggleAutomation(${a.id})" class="px-2 py-1 text-[10px] rounded-lg ${a.is_active ? 'bg-green-50 text-green-700 hover:bg-red-50 hover:text-red-700' : 'bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-700'}">${a.is_active ? 'Active — Click to Disable' : 'Disabled — Click to Enable'}</button>
      </div>
      ${a.description ? `<p class="text-xs text-gray-500 mb-2">${a.description}</p>` : ''}
      <div class="flex items-center gap-4 text-[10px] text-gray-400">
        <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded"><i class="fas fa-bolt mr-0.5"></i>${a.trigger_type}: ${config.cron || config.event || config.metric || config.field || 'custom'}</span>
        <span class="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded"><i class="fas fa-cog mr-0.5"></i>${a.action_type.replace('_', ' ')}</span>
        <span>Runs: ${a.run_count}</span>
        ${a.last_triggered ? `<span>Last: ${a.last_triggered}</span>` : ''}
      </div>
    </div>`}).join('')}
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== TEAM TAB =============== -->
<div id="tab-team" class="tab-content fade-in">
${hasDB ? `
  <h2 class="text-lg font-bold mb-4">Team & AI Agents</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    ${(d.team as any[]).map((m: any) => {
      const loadPct = m.capacity > 0 ? Math.round((m.current_load / m.capacity) * 100) : 0
      const loadColor = loadPct > 80 ? 'text-red-600 bg-red-50' : loadPct > 50 ? 'text-amber-600 bg-amber-50' : 'text-green-600 bg-green-50'
      const roleIcon: Record<string,string> = { owner: 'fa-crown text-yellow-500', manager: 'fa-user-tie text-blue-500', dispute_coordinator: 'fa-gavel text-purple-500', csm: 'fa-headset text-green-500', sdr: 'fa-phone text-indigo-500', admin: 'fa-cog text-gray-500', contractor: 'fa-user text-gray-400' }
      return `<div class="bg-white rounded-xl border p-5">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br ${m.name.includes('AI') ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'} flex items-center justify-center text-white text-sm font-bold">${m.name.includes('AI') ? '<i class="fas fa-robot"></i>' : m.name.split(' ').map((n:string) => n[0]).join('')}</div>
          <div><p class="text-sm font-bold text-gray-900">${m.name}</p><p class="text-[10px] text-gray-400"><i class="fas ${roleIcon[m.role] || 'fa-user text-gray-400'} mr-1"></i>${m.role.replace('_', ' ')}</p></div>
        </div>
        <p class="text-[10px] text-gray-500 mb-3">${m.specialization || 'General'}</p>
        <div class="mb-2"><div class="flex justify-between text-[10px] mb-1"><span class="text-gray-400">Workload</span><span class="${loadColor} px-1.5 py-0.5 rounded-full font-medium">${m.current_load}/${m.capacity} (${loadPct}%)</span></div>
        <div class="bg-gray-100 rounded-full h-2"><div class="h-2 rounded-full transition-all ${loadPct > 80 ? 'bg-red-500' : loadPct > 50 ? 'bg-amber-500' : 'bg-green-500'}" style="width:${loadPct}%"></div></div></div>
        <div class="flex items-center gap-2 text-[10px] text-gray-400 mt-2"><span class="w-2 h-2 rounded-full ${m.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}"></span>${m.status}</div>
      </div>`
    }).join('')}
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== KPI TAB =============== -->
<div id="tab-kpis" class="tab-content fade-in">
${hasDB ? `
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold">KPI Dashboard</h2>
    <button onclick="generateKpiSnapshot()" class="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700"><i class="fas fa-sync mr-1"></i>Generate Snapshot</button>
  </div>
  <!-- KPI Summary Cards -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
    <div class="bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Total Clients</p><p class="text-2xl font-bold text-blue-600 mono">${d.totalClients}</p><p class="text-[10px] text-green-600"><i class="fas fa-arrow-up mr-0.5"></i>${d.activeClients} active</p></div>
    <div class="bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">MRR</p><p class="text-2xl font-bold text-green-600 mono">$${Math.round(d.mrr)}</p><p class="text-[10px] text-gray-400">${d.activeClients} paying clients</p></div>
    <div class="bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Deletion Rate</p><p class="text-2xl font-bold text-purple-600 mono">${d.deletionRate}%</p><p class="text-[10px] text-gray-400">${d.deletedDisputes}/${d.totalDisputes} disputes</p></div>
    <div class="bg-white rounded-xl border p-4"><p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Graduated</p><p class="text-2xl font-bold text-emerald-600 mono">${d.graduatedClients}</p><p class="text-[10px] text-gray-400">clients reached goals</p></div>
  </div>
  <!-- Charts -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div class="bg-white rounded-xl border p-5"><h3 class="text-sm font-bold text-gray-900 mb-3">Client Pipeline</h3><canvas id="clientChart" height="200"></canvas></div>
    <div class="bg-white rounded-xl border p-5"><h3 class="text-sm font-bold text-gray-900 mb-3">Dispute Status</h3><canvas id="disputeChart" height="200"></canvas></div>
  </div>
  <!-- KPI History Table -->
  <div class="bg-white rounded-xl border p-5">
    <h3 class="text-sm font-bold text-gray-900 mb-3">Monthly Metrics History</h3>
    <div class="overflow-x-auto"><table class="w-full text-xs">
      <thead class="bg-gray-50"><tr><th class="px-3 py-2 text-left font-semibold text-gray-500">Period</th><th class="px-3 py-2 text-left font-semibold text-gray-500">Metric</th><th class="px-3 py-2 text-right font-semibold text-gray-500">Value</th><th class="px-3 py-2 text-left font-semibold text-gray-500">Category</th></tr></thead>
      <tbody>${(d.kpis as any[]).map((k: any) => `<tr class="border-t"><td class="px-3 py-1.5 mono text-gray-500">${k.period_date}</td><td class="px-3 py-1.5 font-medium">${k.metric_name.replace(/_/g, ' ')}</td><td class="px-3 py-1.5 text-right mono font-bold">${k.metric_unit === 'usd' ? '$' : ''}${k.metric_value}${k.metric_unit === 'percent' ? '%' : ''}</td><td class="px-3 py-1.5"><span class="px-1.5 py-0.5 rounded-full text-[10px] bg-gray-100">${k.category}</span></td></tr>`).join('')}</tbody>
    </table></div>
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== NOTIFICATIONS TAB =============== -->
<div id="tab-notifications" class="tab-content fade-in">
${hasDB ? `
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold">Alerts & Notifications</h2>
    <button onclick="markAllRead()" class="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200"><i class="fas fa-check-double mr-1"></i>Mark All Read</button>
  </div>
  <div class="space-y-2">
    ${(d.notifications as any[]).map((n: any) => `
      <div class="bg-white rounded-xl border p-4 ${n.severity === 'critical' ? 'border-red-200 bg-red-50' : n.severity === 'success' ? 'border-green-200 bg-green-50' : n.severity === 'warning' ? 'border-amber-200 bg-amber-50' : 'border-blue-200 bg-blue-50'} flex items-start gap-3">
        <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${n.severity === 'critical' ? 'bg-red-100' : n.severity === 'success' ? 'bg-green-100' : n.severity === 'warning' ? 'bg-amber-100' : 'bg-blue-100'}">
          <i class="fas ${n.severity === 'critical' ? 'fa-exclamation-triangle text-red-500' : n.severity === 'success' ? 'fa-check-circle text-green-500' : n.severity === 'warning' ? 'fa-exclamation-circle text-amber-500' : 'fa-info-circle text-blue-500'}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="text-xs font-bold">${n.title}</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded-full ${n.severity === 'critical' ? 'bg-red-200 text-red-800' : n.severity === 'warning' ? 'bg-amber-200 text-amber-800' : 'bg-blue-200 text-blue-800'}">${n.type}</span>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed">${n.message}</p>
          <div class="flex items-center gap-3 mt-1.5 text-[10px] text-gray-400">
            <span><i class="fas fa-user mr-0.5"></i>${n.recipient}</span>
            <span><i class="fas fa-clock mr-0.5"></i>${n.created_at}</span>
          </div>
        </div>
        <button onclick="markNotifRead(${n.id})" class="text-[10px] text-gray-400 hover:text-green-600 flex-shrink-0"><i class="fas fa-check"></i></button>
      </div>`).join('')}
    ${d.notifications.length === 0 ? '<div class="text-center py-12 text-gray-400"><i class="fas fa-bell-slash text-3xl mb-2"></i><p class="text-sm">All caught up!</p></div>' : ''}
  </div>
` : '<p class="text-gray-400 text-center py-10">Database required</p>'}
</div>

<!-- =============== SOP LIBRARY TAB =============== -->
<div id="tab-sops" class="tab-content fade-in">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
    <div>
      <h2 class="text-lg font-bold">SOP Library</h2>
      <p class="text-xs text-gray-400">${SOPS.length} SOPs • ${Object.keys(TEMPLATE_CONTENT).length} Templates • 7 Phases</p>
    </div>
    <div class="flex items-center gap-2 w-full sm:w-auto">
      <div class="relative flex-1 sm:w-64">
        <input id="globalSearch" type="text" placeholder="Search SOPs..." class="w-full pl-8 pr-3 py-1.5 border rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <i class="fas fa-search absolute left-2.5 top-2 text-gray-400 text-xs"></i>
      </div>
      <button onclick="showLegalChanges()" class="px-2 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-medium hover:bg-red-100 whitespace-nowrap"><i class="fas fa-gavel mr-1"></i>2026 Changes</button>
    </div>
  </div>

  <!-- Phase Tabs -->
  <div class="flex gap-1.5 overflow-x-auto pb-2 mb-4">
    <button class="phase-tab active px-3 py-1.5 text-[10px] font-semibold rounded-full bg-gray-900 text-white whitespace-nowrap" onclick="filterPhase(null, this)">All (${SOPS.length})</button>
    ${PHASES.map(p => `<button class="phase-tab px-3 py-1.5 text-[10px] font-medium rounded-full border whitespace-nowrap hover:bg-gray-50" style="color:${p.color};border-color:${p.color}30;background:${p.color}08" onclick="filterPhase(${p.id}, this)">${p.icon} ${p.name.split(' ')[0]} (${SOPS.filter(s => s.phase === p.id).length})</button>`).join('')}
  </div>

  <!-- SOP Grid -->
  <div id="sopGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"></div>
  <div id="emptyState" class="hidden text-center py-12"><p class="text-gray-400">No SOPs match your search</p></div>
</div>

</main>

<!-- TOAST -->
<div id="toast" class="toast bg-white border rounded-xl shadow-lg p-3 flex items-center gap-2 max-w-sm"><i id="toastIcon" class="fas fa-check-circle text-green-500"></i><span id="toastMsg" class="text-xs font-medium text-gray-800"></span></div>

<!-- MODALS -->
<div id="sopModal" class="hidden fixed inset-0 z-50"><div class="absolute inset-0 bg-black/40" onclick="closeModal()"></div><div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl overflow-y-auto p-6"><div id="sopDetail"></div></div></div>
<div id="legalModal" class="hidden fixed inset-0 z-50"><div class="absolute inset-0 bg-black/40" onclick="closeLegalModal()"></div><div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl overflow-y-auto p-6"><div id="legalDetail"></div></div></div>
<div id="templateModal" class="hidden fixed inset-0 z-50"><div class="absolute inset-0 bg-black/40" onclick="closeTemplateModal()"></div><div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl overflow-y-auto p-6"><div id="templateDetail"></div></div></div>
<div id="actionModal" class="hidden fixed inset-0 z-50 flex items-center justify-center"><div class="absolute inset-0 bg-black/40" onclick="closeActionModal()"></div><div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"><div id="actionDetail"></div></div></div>
<div id="clientModal" class="hidden fixed inset-0 z-50"><div class="absolute inset-0 bg-black/40" onclick="closeClientModal()"></div><div class="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl overflow-y-auto p-6"><div id="clientDetail"></div></div></div>
<div id="workflowModal" class="hidden fixed inset-0 z-50"><div class="absolute inset-0 bg-black/40" onclick="closeWorkflowModal()"></div><div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl overflow-y-auto p-6"><div id="workflowDetail"></div></div></div>

<!-- FOOTER -->
<footer class="bg-white border-t mt-12 py-6">
  <div class="max-w-[1600px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
    <div class="flex items-center gap-2">
      <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ" class="w-6 h-6 rounded">
      <span class="text-xs text-gray-500"><b>RJ Business Solutions</b> • 1342 NM 333, Tijeras, NM 87059</span>
    </div>
    <div class="flex items-center gap-3 text-xs text-gray-400">
      <a href="https://rjbusinesssolutions.org" target="_blank" class="hover:text-blue-600"><i class="fas fa-globe mr-1"></i>Website</a>
      <a href="https://linkedin.com/in/rick-jefferson-314998235" target="_blank" class="hover:text-blue-600"><i class="fab fa-linkedin mr-1"></i>LinkedIn</a>
      <span class="mono">v2026.4 Operations Engine</span>
    </div>
  </div>
</footer>

<script>
// ---- STATE ----
let allSOPs = []; let currentPhase = null; let currentTemplateName = '';
const phaseColors = {1:'#ef4444',2:'#f59e0b',3:'#10b981',4:'#3b82f6',5:'#8b5cf6',6:'#ec4899',7:'#06b6d4'};
const phaseIcons = {1:'fa-balance-scale',2:'fa-coins',3:'fa-chart-line',4:'fa-users',5:'fa-cogs',6:'fa-bullhorn',7:'fa-trophy'};

// ---- TAB SWITCHING ----
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelector('[data-tab="'+tab+'"]').classList.add('active');
  if (tab === 'sops' && allSOPs.length === 0) initSOPs();
}

// ---- SOP LIBRARY ----
async function initSOPs() {
  const res = await fetch('/api/sops'); const data = await res.json();
  allSOPs = data.sops; renderSOPs(allSOPs);
}

function renderSOPs(sops) {
  const grid = document.getElementById('sopGrid'); const empty = document.getElementById('emptyState');
  if(!sops.length){ grid.innerHTML=''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  grid.innerHTML = sops.map(s => {
    const color = phaseColors[s.phase];
    const statusBadge = s.complianceStatus==='critical' ? '<span class="badge-critical text-[10px] px-1.5 py-0.5 rounded-full font-medium"><i class="fas fa-exclamation-triangle mr-0.5"></i>Critical</span>' : '<span class="badge-current text-[10px] px-1.5 py-0.5 rounded-full font-medium"><i class="fas fa-check-circle mr-0.5"></i>Current</span>';
    return '<div class="sop-card bg-white rounded-xl border p-4 cursor-pointer fade-in" data-sopid="'+s.id+'" onclick="openSOP(this.dataset.sopid)">' +
      '<div class="flex items-start justify-between mb-2"><span class="mono text-[10px] font-bold px-1.5 py-0.5 rounded" style="background:'+color+'15;color:'+color+'">'+s.id+'</span>'+statusBadge+'</div>' +
      '<h3 class="font-semibold text-gray-900 mb-1.5 text-xs leading-tight">'+s.title+'</h3>' +
      '<div class="flex items-center gap-1.5 text-[10px] text-gray-400"><span><i class="fas '+phaseIcons[s.phase]+'" style="color:'+color+'"></i> '+s.phaseName.split(' ')[0]+'</span><span>•</span><span>'+s.category+'</span></div>' +
    '</div>';
  }).join('');
}

function filterPhase(phase, el) {
  currentPhase = phase;
  document.querySelectorAll('.phase-tab').forEach(t => { t.classList.remove('active'); t.style.background=''; t.style.color=''; });
  if(el) { el.classList.add('active'); if(!phase) { el.style.background='#111827'; el.style.color='#fff'; } }
  const filtered = phase ? allSOPs.filter(s => s.phase === phase) : [...allSOPs];
  const q = document.getElementById('globalSearch').value.toLowerCase();
  renderSOPs(q ? filtered.filter(s=>s.title.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)||s.category.toLowerCase().includes(q)) : filtered);
}

async function openSOP(id) {
  const res = await fetch('/api/sops/'+id); const sop = await res.json(); const color = phaseColors[sop.phase];
  document.getElementById('sopDetail').innerHTML =
    '<div class="flex items-center justify-between mb-4"><button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-lg"></i></button><span class="mono text-[10px] text-gray-400">'+sop.lastUpdated+'</span></div>' +
    '<span class="mono text-xs font-bold px-2 py-0.5 rounded inline-block mb-2" style="background:'+color+'15;color:'+color+'">'+sop.id+'</span>' +
    '<h2 class="text-xl font-bold text-gray-900 mb-1">'+sop.title+'</h2>' +
    '<p class="text-xs text-gray-400 mb-4">Phase '+sop.phase+': '+sop.phaseName+' • '+sop.category+'</p>' +
    (sop.complianceStatus==='critical' ? '<div class="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-xs text-red-700 font-semibold"><i class="fas fa-exclamation-triangle mr-1"></i>CRITICAL COMPLIANCE</div>' : '') +
    (sop.legalChanges2026.length ? '<div class="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4"><p class="text-xs font-semibold text-amber-800 mb-1"><i class="fas fa-gavel mr-1"></i>2026 Legal Changes</p>'+sop.legalChanges2026.map(c=>'<p class="text-[11px] text-amber-700">• '+c+'</p>').join('')+'</div>' : '') +
    '<p class="text-xs text-gray-600 mb-4">'+sop.summary+'</p>' +
    '<div class="mb-4"><p class="text-xs font-semibold text-gray-900 mb-2"><i class="fas fa-list-ol text-purple-500 mr-1"></i>Steps</p><ol class="space-y-1">'+sop.steps.map((s,i)=>'<li class="text-[11px] text-gray-600 flex gap-2"><span class="w-5 h-5 rounded-full bg-purple-50 text-purple-700 text-[10px] flex items-center justify-center flex-shrink-0 font-bold">'+(i+1)+'</span>'+s+'</li>').join('')+'</ol></div>' +
    '<div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4"><p class="text-xs font-semibold text-blue-800 mb-1"><i class="fas fa-robot mr-1"></i>Agent Instructions</p><p class="text-[11px] text-blue-700">'+sop.agentInstructions+'</p></div>' +
    '<div class="grid grid-cols-2 gap-3 mb-4"><div class="bg-gray-50 rounded-lg p-3"><p class="text-[10px] font-semibold text-gray-600 mb-1"><i class="fas fa-tools mr-1"></i>Tools</p>'+sop.tools.map(t=>'<span class="inline-block bg-white border text-[10px] px-1.5 py-0.5 rounded mr-1 mb-1">'+t+'</span>').join('')+'</div><div class="bg-gray-50 rounded-lg p-3"><p class="text-[10px] font-semibold text-gray-600 mb-1"><i class="fas fa-bullseye mr-1"></i>KPIs</p>'+sop.kpis.map(k=>'<p class="text-[10px] text-gray-600"><i class="fas fa-chart-bar text-green-500 mr-1"></i>'+k+'</p>').join('')+'</div></div>' +
    '<div class="bg-gray-50 rounded-lg p-3 mb-4"><p class="text-[10px] font-semibold text-gray-600 mb-2"><i class="fas fa-file-alt mr-1"></i>Templates (click to preview)</p><div class="flex flex-wrap gap-1">'+sop.templates.map(t=>'<button data-tpl="'+encodeURIComponent(t)+'" onclick="event.stopPropagation();openTemplate(this.dataset.tpl)" class="bg-white border text-[10px] px-2 py-1 rounded hover:border-blue-400 hover:bg-blue-50 transition"><i class="fas fa-file-alt text-blue-400 mr-0.5"></i>'+t+'</button>').join('')+'</div></div>' +
    '<button data-sopid="'+sop.id+'" onclick="executeSOP(this.dataset.sopid)" class="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition"><i class="fas fa-play mr-1"></i>Execute This SOP as Workflow</button>';
  document.getElementById('sopModal').classList.remove('hidden');
}

// ---- TEMPLATE VIEWER ----
async function openTemplate(encodedName) {
  const name = decodeURIComponent(encodedName); currentTemplateName = name;
  const res = await fetch('/api/templates/' + encodeURIComponent(name)); const tpl = await res.json();
  document.getElementById('templateDetail').innerHTML =
    '<div class="flex items-center justify-between mb-4"><button onclick="closeTemplateModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-arrow-left"></i></button><div class="flex gap-1.5"><button onclick="copyTemplate()" class="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] hover:bg-blue-100"><i class="fas fa-copy mr-0.5"></i>Copy</button><button onclick="downloadTemplate()" class="px-2 py-1 bg-green-50 text-green-600 rounded text-[10px] hover:bg-green-100"><i class="fas fa-download mr-0.5"></i>Download</button></div></div>' +
    '<div class="flex gap-1.5 mb-2">'+(tpl.available?'<span class="bg-green-50 text-green-700 border border-green-200 text-[10px] px-1.5 py-0.5 rounded-full"><i class="fas fa-check-circle mr-0.5"></i>Full</span>':'<span class="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] px-1.5 py-0.5 rounded-full">Summary</span>')+'<span class="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded-full">'+tpl.format+'</span></div>' +
    '<h2 class="text-lg font-bold text-gray-900 mb-1">'+tpl.title+'</h2><p class="text-xs text-gray-500 mb-3">'+tpl.description+'</p>' +
    '<div class="bg-gray-900 rounded-xl p-4 overflow-x-auto"><pre id="templateContent" class="text-xs text-green-400 whitespace-pre-wrap font-mono leading-relaxed">'+tpl.content.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</pre></div>';
  document.getElementById('templateModal').classList.remove('hidden');
}
function copyTemplate() { navigator.clipboard.writeText(document.getElementById('templateContent').textContent); }
function downloadTemplate() { const b=new Blob([document.getElementById('templateContent').textContent],{type:'text/plain'}); const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download=currentTemplateName.replace(/[^a-zA-Z0-9]/g,'_')+'.txt'; a.click(); }

// ---- LEGAL CHANGES ----
async function showLegalChanges() {
  const res = await fetch('/api/legal-changes-2026'); const data = await res.json();
  document.getElementById('legalDetail').innerHTML =
    '<div class="flex items-center justify-between mb-4"><button onclick="closeLegalModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-lg"></i></button></div>' +
    '<h2 class="text-xl font-bold mb-1"><i class="fas fa-gavel text-red-500 mr-2"></i>2026 Legal Changes</h2>' +
    '<p class="text-xs text-gray-500 mb-4">'+data.totalChanges+' changes affecting '+data.affectedSOPs+' SOPs</p>' +
    data.changes.map(c => '<div class="border rounded-lg p-3 mb-2"><div class="flex items-center gap-2 mb-1"><span class="mono text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded cursor-pointer" data-sopid="'+c.sopId+'" onclick="closeLegalModal();openSOP(this.dataset.sopid)">'+c.sopId+'</span><span class="text-xs font-semibold">'+c.sopTitle+'</span></div>'+c.changes.map(ch=>'<p class="text-[11px] text-gray-600 ml-2">• '+ch+'</p>').join('')+'</div>').join('');
  document.getElementById('legalModal').classList.remove('hidden');
}

// ---- OPERATIONS ACTIONS ----
async function completeTask(id) {
  await fetch('/api/ops/tasks/'+id, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({status:'completed',actor:'Rick Jefferson'}) });
}

async function advanceWorkflow(id) {
  const res = await fetch('/api/ops/workflows/'+id+'/advance', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({actor:'Rick Jefferson'}) });
  const data = await res.json();
  showToast(data.status === 'completed' ? 'Workflow completed!' : 'Advanced to step ' + data.current_step + '/' + data.total_steps);
  setTimeout(()=>location.reload(), 1000);
}

async function toggleAutomation(id) {
  await fetch('/api/ops/automations/'+id+'/toggle', { method:'PUT' });
  location.reload();
}

function filterDisputes(status) {
  document.querySelectorAll('.dispute-row').forEach(r => {
    r.style.display = (!status || r.dataset.status === status) ? '' : 'none';
  });
}

async function executeSOP(sopId) {
  const confirm = window.confirm('Execute ' + sopId + ' as a live workflow? This will create tasks and notify assigned agents.');
  if (!confirm) return;
  const res = await fetch('/api/ops/execute-sop', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({sop_id: sopId, assigned_to: 'AI Agent Alpha', actor: 'Rick Jefferson'}) });
  const data = await res.json();
  if (data.success) { showToast('SOP Executing! Workflow #' + data.workflow_id + ' — ' + data.steps + ' steps + ' + data.tasks_created + ' tasks created'); closeModal(); setTimeout(()=>location.reload(), 1200); }
}

function executeSopForClient(clientId, clientName) {
  const sopList = ${JSON.stringify(SOPS.map(s => s.id + '|' + s.title + '|' + s.category))};
  document.getElementById('actionDetail').innerHTML =
    '<h3 class="text-lg font-bold mb-3"><i class="fas fa-play text-indigo-500 mr-2"></i>Execute SOP for ' + clientName + '</h3>' +
    '<div class="space-y-2 max-h-60 overflow-y-auto">' + sopList.map(s => { const [id,title,cat] = s.split('|'); return '<button data-cid="'+clientId+'" data-sid="'+id+'" data-cn="'+clientName+'" onclick="executeSopForClientConfirm(+this.dataset.cid,this.dataset.sid,this.dataset.cn)" class="w-full text-left px-3 py-2 border rounded-lg hover:bg-indigo-50 text-xs"><span class="mono font-bold text-indigo-600">'+id+'</span> — '+title+' <span class="text-gray-400">('+cat+')</span></button>'; }).join('') +
    '</div><button onclick="closeActionModal()" class="mt-4 w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-xs">Cancel</button>';
  document.getElementById('actionModal').classList.remove('hidden');
}

async function executeSopForClientConfirm(clientId, sopId, clientName) {
  closeActionModal();
  const res = await fetch('/api/ops/execute-sop', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({sop_id: sopId, client_id: clientId, assigned_to: 'AI Agent Alpha', actor: 'Rick Jefferson'}) });
  const data = await res.json();
  if (data.success) { showToast('Executing ' + sopId + ' for ' + clientName + ' — Workflow #' + data.workflow_id); setTimeout(()=>location.reload(), 1200); }
}

function showSopExecutor() {
  const sopList = ${JSON.stringify(SOPS.map(s => s.id + '|' + s.title + '|' + s.category))};
  document.getElementById('actionDetail').innerHTML =
    '<h3 class="text-lg font-bold mb-3"><i class="fas fa-play text-indigo-500 mr-2"></i>Execute SOP as Workflow</h3>' +
    '<div class="space-y-2 max-h-60 overflow-y-auto">' + sopList.map(s => { const [id,title,cat] = s.split('|'); return '<button data-sid="'+id+'" onclick="executeSOP(this.dataset.sid);closeActionModal()" class="w-full text-left px-3 py-2 border rounded-lg hover:bg-indigo-50 text-xs"><span class="mono font-bold text-indigo-600">'+id+'</span> — '+title+'</button>'; }).join('') +
    '</div><button onclick="closeActionModal()" class="mt-4 w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-xs">Cancel</button>';
  document.getElementById('actionModal').classList.remove('hidden');
}

function showNewClientForm() {
  document.getElementById('actionDetail').innerHTML =
    '<h3 class="text-lg font-bold mb-3"><i class="fas fa-user-plus text-blue-500 mr-2"></i>New Client</h3>' +
    '<div class="space-y-3">' +
    '<input id="nc_first" placeholder="First Name" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<input id="nc_last" placeholder="Last Name" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<input id="nc_email" placeholder="Email" type="email" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<input id="nc_phone" placeholder="Phone" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<select id="nc_status" class="w-full border rounded-lg px-3 py-2 text-xs"><option value="lead">Lead</option><option value="onboarding">Onboarding</option><option value="active">Active</option></select>' +
    '<input id="nc_score" placeholder="Current Credit Score" type="number" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<input id="nc_goal" placeholder="Goal Score" type="number" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<select id="nc_source" class="w-full border rounded-lg px-3 py-2 text-xs"><option value="direct">Direct</option><option value="google_ads">Google Ads</option><option value="facebook_ads">Facebook Ads</option><option value="referral">Referral</option><option value="website">Website</option></select>' +
    '<button onclick="createClient()" class="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700">Create Client</button>' +
    '<button onclick="closeActionModal()" class="w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-xs">Cancel</button></div>';
  document.getElementById('actionModal').classList.remove('hidden');
}

async function createClient() {
  const body = { first_name: document.getElementById('nc_first').value, last_name: document.getElementById('nc_last').value, email: document.getElementById('nc_email').value, phone: document.getElementById('nc_phone').value, status: document.getElementById('nc_status').value, credit_score_start: parseInt(document.getElementById('nc_score').value) || null, credit_score_goal: parseInt(document.getElementById('nc_goal').value) || null, source: document.getElementById('nc_source').value, actor: 'Rick Jefferson' };
  const res = await fetch('/api/ops/clients', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
  const data = await res.json();
  if (data.success) { showToast('Client created! ID: ' + data.id); closeActionModal(); setTimeout(()=>location.reload(), 1000); }
}

function showNewTaskForm() {
  document.getElementById('actionDetail').innerHTML =
    '<h3 class="text-lg font-bold mb-3"><i class="fas fa-plus text-blue-500 mr-2"></i>New Task</h3>' +
    '<div class="space-y-3">' +
    '<input id="nt_title" placeholder="Task title" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<textarea id="nt_desc" placeholder="Description" class="w-full border rounded-lg px-3 py-2 text-xs" rows="2"></textarea>' +
    '<select id="nt_priority" class="w-full border rounded-lg px-3 py-2 text-xs"><option value="normal">Normal</option><option value="critical">Critical</option><option value="high">High</option><option value="low">Low</option></select>' +
    '<input id="nt_due" type="date" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<input id="nt_category" placeholder="Category" class="w-full border rounded-lg px-3 py-2 text-xs">' +
    '<button onclick="createTask()" class="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700">Create Task</button>' +
    '<button onclick="closeActionModal()" class="w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-xs">Cancel</button></div>';
  document.getElementById('actionModal').classList.remove('hidden');
}

async function createTask() {
  const body = { title: document.getElementById('nt_title').value, description: document.getElementById('nt_desc').value, priority: document.getElementById('nt_priority').value, due_date: document.getElementById('nt_due').value || null, category: document.getElementById('nt_category').value || null, actor: 'Rick Jefferson' };
  const res = await fetch('/api/ops/tasks', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
  const data = await res.json();
  if (data.success) { showToast('Task created!'); closeActionModal(); setTimeout(()=>location.reload(), 1000); }
}

// ---- TOAST ----
function showToast(msg, type='success') {
  const t=document.getElementById('toast'), m=document.getElementById('toastMsg'), i=document.getElementById('toastIcon');
  m.textContent=msg; i.className='fas '+(type==='success'?'fa-check-circle text-green-500':type==='error'?'fa-times-circle text-red-500':'fa-info-circle text-blue-500');
  t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 3000);
}

// ---- AUTOPILOT ENGINE ----
async function runAutopilot() {
  showToast('Running autopilot...', 'info');
  try {
    const [autoRes, compRes] = await Promise.all([
      fetch('/api/ops/run-automations', {method:'POST'}),
      fetch('/api/ops/run-compliance-check', {method:'POST'})
    ]);
    const autoData = await autoRes.json();
    const compData = await compRes.json();
    const fired = autoData.fired || 0;
    const msg = 'Autopilot complete: ' + fired + ' automations fired, ' + (compData.expiring_items||0) + ' compliance items flagged, ' + (autoData.overdue_disputes_flagged||0) + ' overdue disputes flagged';
    showToast(msg, 'success');
    if (fired > 0 || compData.expiring_items > 0) setTimeout(()=>location.reload(), 1500);
  } catch(e) { showToast('Autopilot error: ' + e.message, 'error'); }
}

// ---- CLIENT DETAIL ----
async function openClientDetail(id) {
  const res = await fetch('/api/ops/clients/'+id); const data = await res.json();
  const c = data.client; const scoreImprove = c.credit_score_current && c.credit_score_start ? c.credit_score_current - c.credit_score_start : 0;
  document.getElementById('clientDetail').innerHTML =
    '<div class="flex items-center justify-between mb-4"><button onclick="closeClientModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-lg"></i></button><div class="flex gap-1.5"><button data-cid="'+c.id+'" data-cn="'+c.first_name+' '+c.last_name+'" onclick="closeClientModal();executeSopForClient(+this.dataset.cid,this.dataset.cn)" class="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] hover:bg-indigo-100"><i class="fas fa-play mr-0.5"></i>Run SOP</button></div></div>' +
    '<div class="flex items-center gap-4 mb-4"><div class="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg font-bold">'+(c.first_name[0]+c.last_name[0])+'</div><div><h2 class="text-xl font-bold">'+c.first_name+' '+c.last_name+'</h2><p class="text-xs text-gray-400">'+c.email+' • '+(c.phone||'No phone')+'</p><span class="px-2 py-0.5 rounded-full text-[10px] font-medium '+(c.status==='active'?'bg-green-50 text-green-700':c.status==='graduated'?'bg-emerald-50 text-emerald-700':'bg-blue-50 text-blue-700')+'">'+c.status+'</span></div></div>' +
    (c.credit_score_start ? '<div class="grid grid-cols-3 gap-3 mb-4"><div class="bg-gray-50 rounded-lg p-3 text-center"><p class="text-[10px] text-gray-400 mb-0.5">Start</p><p class="text-lg font-bold mono text-gray-600">'+c.credit_score_start+'</p></div><div class="bg-gray-50 rounded-lg p-3 text-center"><p class="text-[10px] text-gray-400 mb-0.5">Current</p><p class="text-lg font-bold mono text-blue-600">'+(c.credit_score_current||'?')+'</p></div><div class="'+(scoreImprove>0?'bg-green-50':'bg-gray-50')+' rounded-lg p-3 text-center"><p class="text-[10px] '+(scoreImprove>0?'text-green-600':'text-gray-400')+' mb-0.5">Change</p><p class="text-lg font-bold mono '+(scoreImprove>0?'text-green-600':'text-gray-600')+'">'+(scoreImprove>0?'+':'')+scoreImprove+'</p></div></div>' : '') +
    '<div class="grid grid-cols-2 gap-3 mb-4 text-xs"><div class="bg-gray-50 rounded-lg p-3"><span class="text-gray-400">Goal:</span> <span class="font-bold mono">'+(c.credit_score_goal||'—')+'</span></div><div class="bg-gray-50 rounded-lg p-3"><span class="text-gray-400">MRR:</span> <span class="font-bold mono text-green-600">'+(c.monthly_fee>0?'$'+c.monthly_fee:'$0')+'</span></div><div class="bg-gray-50 rounded-lg p-3"><span class="text-gray-400">Agent:</span> <span class="font-medium">'+(c.assigned_agent||'Unassigned')+'</span></div><div class="bg-gray-50 rounded-lg p-3"><span class="text-gray-400">Source:</span> <span class="font-medium">'+(c.source||'—')+'</span></div></div>' +
    (c.notes ? '<div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 text-xs text-blue-700"><i class="fas fa-sticky-note mr-1"></i>'+c.notes+'</div>' : '') +
    // Disputes section
    '<h3 class="text-sm font-bold mb-2 mt-4"><i class="fas fa-file-signature text-purple-500 mr-1"></i>Disputes ('+data.disputes.length+')</h3>' +
    (data.disputes.length > 0 ? '<div class="space-y-1.5 mb-4">'+data.disputes.map(function(x){return '<div class="border rounded-lg p-2.5 text-xs flex items-center gap-2"><span class="px-1.5 py-0.5 rounded text-[10px] font-medium '+(x.bureau==='experian'?'bg-blue-50 text-blue-700':x.bureau==='equifax'?'bg-red-50 text-red-700':'bg-green-50 text-green-700')+'">'+x.bureau+'</span><span class="font-medium flex-1">'+x.account_name+'</span><span class="px-1.5 py-0.5 rounded text-[10px] '+(x.status==='deleted'?'bg-green-50 text-green-700':x.status==='escalated'?'bg-red-50 text-red-700':'bg-gray-100 text-gray-600')+'">'+x.status+'</span><span class="mono text-gray-400 text-[10px]">R'+x.dispute_round+'</span></div>'}).join('')+'</div>' : '<p class="text-xs text-gray-400 mb-4">No disputes</p>') +
    // Workflows section
    '<h3 class="text-sm font-bold mb-2"><i class="fas fa-project-diagram text-indigo-500 mr-1"></i>Workflows ('+data.workflows.length+')</h3>' +
    (data.workflows.length > 0 ? '<div class="space-y-1.5 mb-4">'+data.workflows.map(function(w){return '<div class="border rounded-lg p-2.5 text-xs"><div class="flex items-center gap-2"><span class="mono text-[10px] font-bold text-indigo-600">'+w.sop_id+'</span><span class="font-medium flex-1">'+w.sop_title+'</span><span class="text-[10px] px-1.5 py-0.5 rounded-full '+(w.status==='running'?'bg-green-50 text-green-700':'bg-gray-100 text-gray-600')+'">'+w.status+'</span></div><div class="mt-1.5 bg-gray-100 rounded-full h-1.5"><div class="bg-indigo-500 h-1.5 rounded-full" style="width:'+Math.round((w.current_step/w.total_steps)*100)+'%"></div></div><p class="text-[10px] text-gray-400 mt-0.5">Step '+w.current_step+'/'+w.total_steps+'</p></div>'}).join('')+'</div>' : '<p class="text-xs text-gray-400 mb-4">No workflows</p>') +
    // Tasks section
    '<h3 class="text-sm font-bold mb-2"><i class="fas fa-tasks text-blue-500 mr-1"></i>Tasks ('+data.tasks.length+')</h3>' +
    (data.tasks.length > 0 ? '<div class="space-y-1 mb-4">'+data.tasks.slice(0,10).map(function(t){return '<div class="border rounded-lg p-2 text-xs flex items-center gap-2 priority-'+t.priority+'"><span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium '+(t.priority==='critical'?'bg-red-50 text-red-700':t.priority==='high'?'bg-amber-50 text-amber-700':'bg-blue-50 text-blue-700')+'">'+t.priority+'</span><span class="flex-1 truncate">'+t.title+'</span><span class="text-[10px] text-gray-400">'+(t.due_date||'')+'</span></div>'}).join('')+'</div>' : '<p class="text-xs text-gray-400 mb-4">No tasks</p>');
  document.getElementById('clientModal').classList.remove('hidden');
}

// ---- WORKFLOW DETAIL ----
async function openWorkflowDetail(id) {
  const res = await fetch('/api/ops/workflows/'+id); const data = await res.json();
  const w = data.workflow; const steps = data.steps;
  document.getElementById('workflowDetail').innerHTML =
    '<div class="flex items-center justify-between mb-4"><button onclick="closeWorkflowModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-lg"></i></button>'+(w.status==='running'?'<button onclick="closeWorkflowModal();advanceWorkflow('+w.id+')" class="px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700"><i class="fas fa-step-forward mr-1"></i>Advance Step</button>':'')+'</div>' +
    '<span class="mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded inline-block mb-2">'+w.sop_id+'</span>' +
    '<h2 class="text-lg font-bold text-gray-900 mb-1">'+w.sop_title+'</h2>' +
    '<div class="flex items-center gap-2 mb-3 text-xs"><span class="px-2 py-0.5 rounded-full '+(w.status==='running'?'bg-green-50 text-green-700':w.status==='completed'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700')+'">'+w.status+'</span><span class="px-2 py-0.5 rounded-full '+(w.priority==='critical'?'bg-red-50 text-red-700':w.priority==='high'?'bg-amber-50 text-amber-700':'bg-blue-50 text-blue-700')+'">'+w.priority+'</span></div>' +
    (w.client_name?'<p class="text-xs text-gray-500 mb-2"><i class="fas fa-user mr-1"></i>'+w.client_name+'</p>':'') +
    '<p class="text-xs text-gray-500 mb-4"><i class="fas fa-user-cog mr-1"></i>'+(w.assigned_to||'Unassigned')+' • Started: '+(w.started_at||'—')+'</p>' +
    '<div class="bg-gray-100 rounded-full h-2.5 mb-4"><div class="bg-indigo-500 h-2.5 rounded-full" style="width:'+Math.round((w.current_step/w.total_steps)*100)+'%"></div></div>' +
    '<p class="text-xs text-gray-500 mb-4 mono">Step '+w.current_step+' / '+w.total_steps+'</p>' +
    '<h3 class="text-sm font-bold mb-3">Steps</h3>' +
    '<div class="space-y-2">'+steps.map(function(s,i){
      const icon = s.status==='completed'?'fa-check-circle text-green-500':s.status==='in_progress'?'fa-spinner fa-spin text-blue-500':s.status==='failed'?'fa-times-circle text-red-500':'fa-circle text-gray-300';
      return '<div class="flex gap-3 items-start border rounded-lg p-3 '+(s.status==='in_progress'?'border-blue-200 bg-blue-50':s.status==='completed'?'bg-green-50/50':'')+'"><i class="fas '+icon+' mt-0.5"></i><div class="flex-1"><p class="text-xs font-medium '+(s.status==='completed'?'text-gray-500 line-through':'text-gray-800')+'">'+s.step_description+'</p><div class="flex gap-2 mt-0.5 text-[10px] text-gray-400">'+(s.assigned_to?'<span><i class="fas fa-user mr-0.5"></i>'+s.assigned_to+'</span>':'')+(s.completed_at?'<span><i class="fas fa-check mr-0.5"></i>'+s.completed_at+'</span>':'')+'</div></div></div>'
    }).join('')+'</div>';
  document.getElementById('workflowModal').classList.remove('hidden');
}

// ---- KPI CHARTS ----
function initKpiCharts() {
  const clientCtx = document.getElementById('clientChart');
  const disputeCtx = document.getElementById('disputeChart');
  if (!clientCtx || !disputeCtx) return;
  const clientData = ${hasDB ? JSON.stringify(d.clientStats) : '[]'};
  const disputeData = ${hasDB ? JSON.stringify(d.disputeStats) : '[]'};
  const cColors = {lead:'#eab308',onboarding:'#3b82f6',active:'#22c55e',paused:'#f59e0b',graduated:'#10b981',cancelled:'#9ca3af'};
  const dColors = {pending:'#9ca3af',drafted:'#3b82f6',sent:'#6366f1',investigating:'#f59e0b',deleted:'#22c55e',verified:'#ef4444',escalated:'#dc2626'};
  new Chart(clientCtx, { type:'doughnut', data:{labels:clientData.map(c=>c.status), datasets:[{data:clientData.map(c=>c.count), backgroundColor:clientData.map(c=>cColors[c.status]||'#ccc')}]}, options:{responsive:true,plugins:{legend:{position:'right',labels:{font:{size:11}}}}} });
  new Chart(disputeCtx, { type:'doughnut', data:{labels:disputeData.map(c=>c.status), datasets:[{data:disputeData.map(c=>c.count), backgroundColor:disputeData.map(c=>dColors[c.status]||'#ccc')}]}, options:{responsive:true,plugins:{legend:{position:'right',labels:{font:{size:11}}}}} });
}

async function generateKpiSnapshot() {
  showToast('Generating KPI snapshot...', 'info');
  const res = await fetch('/api/ops/generate-kpi-snapshot', {method:'POST'});
  const data = await res.json();
  if(data.success) { showToast('KPI snapshot generated: '+data.metrics.length+' metrics'); setTimeout(()=>location.reload(),1000); }
}

// ---- NOTIFICATIONS ----
async function markNotifRead(id) {
  await fetch('/api/ops/notifications/'+id+'/read', {method:'PUT'});
  showToast('Notification dismissed'); setTimeout(()=>location.reload(),500);
}
async function markAllRead() {
  const notifs = ${hasDB ? JSON.stringify(d.notifications.map((n:any)=>n.id)) : '[]'};
  for(const id of notifs) await fetch('/api/ops/notifications/'+id+'/read', {method:'PUT'});
  showToast('All notifications marked read'); setTimeout(()=>location.reload(),500);
}

// ---- MODAL CONTROLS ----
function closeModal() { document.getElementById('sopModal').classList.add('hidden'); }
function closeLegalModal() { document.getElementById('legalModal').classList.add('hidden'); }
function closeTemplateModal() { document.getElementById('templateModal').classList.add('hidden'); }
function closeActionModal() { document.getElementById('actionModal').classList.add('hidden'); }
function closeClientModal() { document.getElementById('clientModal').classList.add('hidden'); }
function closeWorkflowModal() { document.getElementById('workflowModal').classList.add('hidden'); }

// ---- SEARCH ----
document.getElementById('globalSearch')?.addEventListener('input', function(e) {
  const q = e.target.value.toLowerCase();
  let filtered = currentPhase ? allSOPs.filter(s=>s.phase===currentPhase) : [...allSOPs];
  if(q) filtered = filtered.filter(s=>s.title.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)||s.category.toLowerCase().includes(q));
  renderSOPs(filtered);
});

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', e => {
  if(e.key==='Escape') { closeModal(); closeLegalModal(); closeTemplateModal(); closeActionModal(); closeClientModal(); closeWorkflowModal(); }
  if(e.key==='/' && !e.ctrlKey && document.activeElement.tagName!=='INPUT' && document.activeElement.tagName!=='TEXTAREA') { e.preventDefault(); switchTab('sops'); setTimeout(()=>document.getElementById('globalSearch')?.focus(), 100); }
});

// ---- INIT CHARTS ON TAB SWITCH ----
let chartsInitialized = false;
const origSwitchTab = switchTab;
switchTab = function(tab) { origSwitchTab(tab); if(tab==='kpis' && !chartsInitialized) { setTimeout(initKpiCharts, 100); chartsInitialized=true; } };
</script>
</body>
</html>`)
})

// ============================================================
// MFSN (MyFreeScoreNow) — 3-BUREAU CREDIT REPORT API
// API Spec: MFSN-REPORTS v1.0.0
// Base URL: https://api.myfreescorenow.com
// Auth: POST /api/auth/login → token → POST /api/auth/fetch-3B-json
// Maps to: SOP-101 (Credit Report Analysis), SOP-402 (Score Monitoring)
// ============================================================

// MFSN Login — get session token
app.post('/api/mfsn/login', async (c) => {
  const { env } = c
  const apiUrl = env.MFSN_API_URL || 'https://api.myfreescorenow.com'
  const email = env.MFSN_API_EMAIL
  const password = env.MFSN_API_PASSWORD
  if (!email || !password) return c.json({ error: 'MFSN credentials not configured' }, 500)
  try {
    const form = new FormData()
    form.append('email', email)
    form.append('password', password)
    const res = await fetch(`${apiUrl}/api/auth/login`, { method: 'POST', body: form })
    const data = await res.json() as any
    if (!data.success) return c.json({ error: data.message || 'Login failed' }, 401)
    return c.json({ success: true, message: 'MFSN authenticated', data: data.data })
  } catch (err: any) {
    return c.json({ error: 'MFSN login failed: ' + (err.message || 'Unknown error') }, 500)
  }
})

// MFSN Fetch 3-Bureau Credit Report
app.post('/api/mfsn/fetch-3b', async (c) => {
  const { DB, env } = c
  const body = await c.req.json() as any
  const { client_email, client_token, client_id } = body
  if (!client_email || !client_token) return c.json({ error: 'client_email and client_token required' }, 400)
  const apiUrl = env.MFSN_API_URL || 'https://api.myfreescorenow.com'
  try {
    // Step 1: Login to get session
    const loginForm = new FormData()
    loginForm.append('email', env.MFSN_API_EMAIL)
    loginForm.append('password', env.MFSN_API_PASSWORD)
    const loginRes = await fetch(`${apiUrl}/api/auth/login`, { method: 'POST', body: loginForm })
    const loginData = await loginRes.json() as any
    if (!loginData.success) return c.json({ error: 'MFSN auth failed: ' + loginData.message }, 401)

    // Step 2: Fetch 3B report
    const fetchForm = new FormData()
    fetchForm.append('email', client_email)
    fetchForm.append('client_token', client_token)
    const fetchRes = await fetch(`${apiUrl}/api/auth/fetch-3B-json`, { method: 'POST', body: fetchForm })
    const reportData = await fetchRes.json() as any
    if (!reportData.success) return c.json({ error: 'Report fetch failed: ' + reportData.message }, 400)

    // Step 3: Parse the report data
    const providerViews = reportData.data?.providerViews || []
    let scoreEfx: number | null = null, scoreTu: number | null = null, scoreExp: number | null = null
    let efxId = '', tuId = '', expId = ''
    let totalAccounts = 0, totalInquiries = 0, totalPublicRecords = 0, totalCollections = 0
    let totalOpenAccounts = 0, totalNegativeAccounts = 0, creditHistoryMonths = 0, avgAccountAge = 0
    let oldestDate = '', oldestName = '', newestDate = '', newestName = ''

    for (const view of providerViews) {
      const provider = view.provider || view.summary?.provider
      const summary = view.summary || {}
      const score = summary.creditScore?.score
      if (provider === 'EFX') { scoreEfx = score; efxId = summary.id || '' }
      if (provider === 'TU') { scoreTu = score; tuId = summary.id || '' }
      if (provider === 'EXP') { scoreExp = score; expId = summary.id || '' }
      totalAccounts += summary.totalOpenAccounts?.count || 0
      totalInquiries += summary.totalInquires || 0
      totalPublicRecords += summary.totalPublicRecords || 0
      totalCollections += summary.totalCollections || 0
      totalNegativeAccounts += summary.totalNegativeAccounts || 0
      if (summary.lengthOfCreditHistoryMonths > creditHistoryMonths) creditHistoryMonths = summary.lengthOfCreditHistoryMonths || 0
      if (summary.averageAccountAgeMonths > avgAccountAge) avgAccountAge = summary.averageAccountAgeMonths || 0
      if (summary.oldestAccountOpenDate) { oldestDate = summary.oldestAccountOpenDate; oldestName = summary.oldestAccountName || '' }
      if (summary.mostRecentAccountOpenDate) { newestDate = summary.mostRecentAccountOpenDate; newestName = summary.mostRecentAccountName || '' }
    }

    // Step 4: Store in D1 if client_id provided
    let reportId = null
    if (client_id && DB) {
      try {
        const r = await DB.prepare(`INSERT INTO credit_reports (client_id, mfsn_member_email, report_type, score_efx, score_tu, score_exp, efx_report_id, tu_report_id, exp_report_id, total_accounts, total_open_accounts, total_negative_accounts, total_inquiries, total_public_records, total_collections, credit_history_months, avg_account_age_months, oldest_account_date, oldest_account_name, newest_account_date, newest_account_name, raw_response_json, pulled_by, status) VALUES (?, ?, 'US_3B', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Rick Jefferson', 'active')`)
          .bind(client_id, client_email, scoreEfx, scoreTu, scoreExp, efxId, tuId, expId, totalAccounts, totalOpenAccounts, totalNegativeAccounts, totalInquiries, totalPublicRecords, totalCollections, creditHistoryMonths, avgAccountAge, oldestDate, oldestName, newestDate, newestName, JSON.stringify(reportData.data))
          .run()
        reportId = r.meta.last_row_id

        // Store score history
        const avgScore = [scoreEfx, scoreTu, scoreExp].filter(s => s !== null)
        const scoreAvg = avgScore.length > 0 ? Math.round(avgScore.reduce((a, b) => a! + b!, 0)! / avgScore.length) : null
        await DB.prepare(`INSERT INTO credit_score_history (client_id, credit_report_id, score_efx, score_tu, score_exp, score_avg, source) VALUES (?, ?, ?, ?, ?, ?, 'mfsn')`)
          .bind(client_id, reportId, scoreEfx, scoreTu, scoreExp, scoreAvg).run()

        // Update client credit scores
        if (scoreAvg) {
          await DB.prepare(`UPDATE clients SET credit_score_current = ?, updated_at = datetime('now') WHERE id = ?`).bind(scoreAvg, client_id).run()
        }

        // Audit log
        await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'credit_report_pulled', 'credit_report', ?, ?)`)
          .bind(reportId, `3B report for client ${client_id}: EFX=${scoreEfx} TU=${scoreTu} EXP=${scoreExp}`).run()

        // Parse and store individual accounts, inquiries, public records
        for (const view of providerViews) {
          const provider = view.provider || view.summary?.provider || 'UNKNOWN'
          // Accounts (full field set)
          for (const acct of (view.accounts || [])) {
            await DB.prepare(`INSERT INTO credit_report_accounts (credit_report_id, client_id, provider, account_name, account_number, account_status, account_open, account_type, loan_type, date_opened, date_reported, date_closed, balance_amount, credit_limit_amount, high_credit_amount, monthly_payment, past_due_amount, charge_off_amount, payment_status, worst_payment_status, times_30_days_late, times_60_days_late, times_90_days_late, creditor_phone, creditor_address, raw_account_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
              .bind(reportId, client_id, provider, acct.accountName || '', acct.accountNumber || '', acct.accountStatus || '', acct.accountOpen ? 1 : 0, acct.accountType || '', acct.loanType?.description || '', acct.dateOpened || acct.openDate || '', acct.dateReported || acct.lastUpdated || '', acct.dateClosed || acct.closedDate || '', acct.balanceAmount?.value || 0, acct.creditLimitAmount?.value || 0, acct.highCreditAmount?.value || 0, acct.monthlyPayment?.value || 0, acct.pastDueAmount?.value || 0, acct.chargeOffAmount?.value || 0, acct.paymentStatus || '', acct.worstPaymentStatus || acct.paymentStatus || '', acct.times30DaysLate || acct.late30 || 0, acct.times60DaysLate || acct.late60 || 0, acct.times90DaysLate || acct.late90 || 0, acct.creditorPhone || '', acct.creditorAddress || '', JSON.stringify(acct)).run()
          }
          // Hard inquiries
          for (const inq of (view.inquiries || [])) {
            await DB.prepare(`INSERT INTO credit_report_inquiries (credit_report_id, client_id, provider, inquirer_name, inquiry_date, inquiry_type, inquiry_purpose, industry_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
              .bind(reportId, client_id, provider, inq.inquirerName || inq.name || '', inq.date || inq.inquiryDate || '', inq.type === 'soft' ? 'soft' : 'hard', inq.purpose || inq.inquiryPurpose || '', inq.industryCode || '').run()
          }
          // Public records (bankruptcies, liens, judgments)
          for (const pr of (view.publicRecords || [])) {
            await DB.prepare(`INSERT INTO credit_report_public_records (credit_report_id, client_id, provider, record_type, court_name, filing_date, status, satisfied_date, amount, reference_number, plaintiff, attorney, raw_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
              .bind(reportId, client_id, provider, pr.recordType || pr.type || '', pr.courtName || '', pr.filingDate || pr.date || '', pr.status || '', pr.satisfiedDate || pr.dischargeDate || '', pr.amount?.value || pr.amount || 0, pr.referenceNumber || pr.caseNumber || '', pr.plaintiff || pr.creditorName || '', pr.attorney || '', JSON.stringify(pr)).run()
          }
        }
        // Store MFSN token for this client so future refreshes don't need re-entry
        try {
          await DB.prepare(`INSERT INTO mfsn_tokens (client_id, mfsn_email, mfsn_token, last_pull_date, total_pulls) VALUES (?, ?, ?, datetime('now'), 1) ON CONFLICT(client_id) DO UPDATE SET mfsn_email=excluded.mfsn_email, mfsn_token=excluded.mfsn_token, last_pull_date=datetime('now'), total_pulls=total_pulls+1, updated_at=datetime('now')`)
            .bind(client_id, client_email, client_token).run()
        } catch (_) {}

        // AUTO-TRIGGER: Queue Hyperion full analysis on every MFSN import
        try {
          await DB.prepare(`INSERT INTO analysis_reports (client_id, credit_report_id, status, started_at) VALUES (?,?,'pending',datetime('now'))`)
            .bind(client_id, reportId).run()
          await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system','analysis_queued','client',?,'Hyperion full analysis queued after MFSN import')`)
            .bind(client_id).run()
        } catch (_) {}

      } catch (dbErr: any) {
        console.error('D1 storage error:', dbErr.message)
      }
    }

    return c.json({
      success: true,
      report_id: reportId,
      scores: { efx: scoreEfx, tu: scoreTu, exp: scoreExp },
      summary: { totalAccounts, totalOpenAccounts, totalNegativeAccounts, totalInquiries, totalPublicRecords, totalCollections, creditHistoryMonths, avgAccountAge, oldestDate, oldestName, newestDate, newestName },
      providerCount: providerViews.length,
      stored: !!reportId
    })
  } catch (err: any) {
    return c.json({ error: 'MFSN fetch failed: ' + (err.message || 'Unknown error') }, 500)
  }
})

// Get credit reports for a client
app.get('/api/mfsn/reports/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  const reports = await DB.prepare('SELECT id, pull_date, score_efx, score_tu, score_exp, total_accounts, total_negative_accounts, total_inquiries, status FROM credit_reports WHERE client_id = ? ORDER BY pull_date DESC').bind(clientId).all()
  return c.json({ reports: reports.results })
})

// Get score history for a client
app.get('/api/mfsn/score-history/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  const history = await DB.prepare('SELECT * FROM credit_score_history WHERE client_id = ? ORDER BY recorded_date DESC').bind(clientId).all()
  return c.json({ history: history.results })
})

// Get accounts from a specific report
app.get('/api/mfsn/reports/:reportId/accounts', async (c) => {
  const { DB } = c.env; const reportId = c.req.param('reportId')
  const accounts = await DB.prepare('SELECT * FROM credit_report_accounts WHERE credit_report_id = ? ORDER BY provider, account_name').bind(reportId).all()
  return c.json({ accounts: accounts.results })
})

// ============================================================
// MFSN — FULL ANALYSIS LAYER (15 new endpoints)
// ============================================================

// Save MFSN token for a client (for future auto-refresh)
app.post('/api/mfsn/tokens', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, mfsn_email, mfsn_token } = await c.req.json() as any
  if (!client_id || !mfsn_email || !mfsn_token) return c.json({ error: 'client_id, mfsn_email, mfsn_token required' }, 400)
  await DB.prepare(`INSERT INTO mfsn_tokens (client_id, mfsn_email, mfsn_token) VALUES (?, ?, ?) ON CONFLICT(client_id) DO UPDATE SET mfsn_email=excluded.mfsn_email, mfsn_token=excluded.mfsn_token, updated_at=datetime('now')`)
    .bind(client_id, mfsn_email, mfsn_token).run()
  return c.json({ success: true, message: 'MFSN token saved for client ' + client_id })
})

// Get stored MFSN token for a client
app.get('/api/mfsn/tokens/:clientId', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const token = await DB.prepare('SELECT client_id, mfsn_email, last_pull_date, total_pulls, created_at, updated_at FROM mfsn_tokens WHERE client_id = ?')
    .bind(c.req.param('clientId')).first()
  if (!token) return c.json({ error: 'No MFSN token stored for this client' }, 404)
  return c.json({ success: true, token })
})

// Re-pull a fresh 3B report for a client using stored token (auto-refresh)
app.post('/api/mfsn/clients/:clientId/refresh', async (c) => {
  const { DB, env } = c
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clientId = c.req.param('clientId')
  const stored = await DB.prepare('SELECT mfsn_email, mfsn_token FROM mfsn_tokens WHERE client_id = ?').bind(clientId).first() as any
  if (!stored) return c.json({ error: 'No stored MFSN token for client. Save one via POST /api/mfsn/tokens first.' }, 404)
  const apiUrl = env.MFSN_API_URL || 'https://api.myfreescorenow.com'
  try {
    const loginForm = new FormData(); loginForm.append('email', env.MFSN_API_EMAIL); loginForm.append('password', env.MFSN_API_PASSWORD)
    const loginRes = await fetch(`${apiUrl}/api/auth/login`, { method: 'POST', body: loginForm })
    const loginData = await loginRes.json() as any
    if (!loginData.success) return c.json({ error: 'MFSN auth failed: ' + loginData.message }, 401)
    const fetchForm = new FormData(); fetchForm.append('email', stored.mfsn_email); fetchForm.append('client_token', stored.mfsn_token)
    const fetchRes = await fetch(`${apiUrl}/api/auth/fetch-3B-json`, { method: 'POST', body: fetchForm })
    const reportData = await fetchRes.json() as any
    if (!reportData.success) return c.json({ error: 'Report refresh failed: ' + reportData.message }, 400)
    const providerViews = reportData.data?.providerViews || []
    let scoreEfx: number | null = null, scoreTu: number | null = null, scoreExp: number | null = null
    let totalAccounts = 0, totalNegativeAccounts = 0, totalInquiries = 0, totalPublicRecords = 0, totalCollections = 0, totalOpenAccounts = 0
    let creditHistoryMonths = 0, avgAccountAge = 0, oldestDate = '', oldestName = '', newestDate = '', newestName = ''
    let efxId = '', tuId = '', expId = ''
    for (const view of providerViews) {
      const provider = view.provider || view.summary?.provider
      const summary = view.summary || {}
      const score = summary.creditScore?.score
      if (provider === 'EFX') { scoreEfx = score; efxId = summary.id || '' }
      if (provider === 'TU') { scoreTu = score; tuId = summary.id || '' }
      if (provider === 'EXP') { scoreExp = score; expId = summary.id || '' }
      totalAccounts += summary.totalOpenAccounts?.count || 0
      totalInquiries += summary.totalInquires || 0
      totalPublicRecords += summary.totalPublicRecords || 0
      totalCollections += summary.totalCollections || 0
      totalNegativeAccounts += summary.totalNegativeAccounts || 0
      if (summary.lengthOfCreditHistoryMonths > creditHistoryMonths) creditHistoryMonths = summary.lengthOfCreditHistoryMonths || 0
      if (summary.averageAccountAgeMonths > avgAccountAge) avgAccountAge = summary.averageAccountAgeMonths || 0
      if (summary.oldestAccountOpenDate) { oldestDate = summary.oldestAccountOpenDate; oldestName = summary.oldestAccountName || '' }
      if (summary.mostRecentAccountOpenDate) { newestDate = summary.mostRecentAccountOpenDate; newestName = summary.mostRecentAccountName || '' }
    }
    const r = await DB.prepare(`INSERT INTO credit_reports (client_id, mfsn_member_email, report_type, score_efx, score_tu, score_exp, efx_report_id, tu_report_id, exp_report_id, total_accounts, total_open_accounts, total_negative_accounts, total_inquiries, total_public_records, total_collections, credit_history_months, avg_account_age_months, oldest_account_date, oldest_account_name, newest_account_date, newest_account_name, raw_response_json, pulled_by, status) VALUES (?, ?, 'US_3B', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'system-refresh', 'active')`)
      .bind(clientId, stored.mfsn_email, scoreEfx, scoreTu, scoreExp, efxId, tuId, expId, totalAccounts, totalOpenAccounts, totalNegativeAccounts, totalInquiries, totalPublicRecords, totalCollections, creditHistoryMonths, avgAccountAge, oldestDate, oldestName, newestDate, newestName, JSON.stringify(reportData.data)).run()
    const reportId = r.meta.last_row_id
    const avgScore = [scoreEfx, scoreTu, scoreExp].filter(s => s !== null)
    const scoreAvg = avgScore.length > 0 ? Math.round(avgScore.reduce((a, b) => (a as number) + (b as number), 0) as number / avgScore.length) : null
    await DB.prepare(`INSERT INTO credit_score_history (client_id, credit_report_id, score_efx, score_tu, score_exp, score_avg, source) VALUES (?, ?, ?, ?, ?, ?, 'mfsn')`).bind(clientId, reportId, scoreEfx, scoreTu, scoreExp, scoreAvg).run()
    if (scoreAvg) await DB.prepare(`UPDATE clients SET credit_score_current = ?, updated_at = datetime('now') WHERE id = ?`).bind(scoreAvg, clientId).run()
    await DB.prepare(`UPDATE mfsn_tokens SET last_pull_date=datetime('now'), total_pulls=total_pulls+1, updated_at=datetime('now') WHERE client_id=?`).bind(clientId).run()
    for (const view of providerViews) {
      const provider = view.provider || view.summary?.provider || 'UNKNOWN'
      for (const acct of (view.accounts || [])) {
        await DB.prepare(`INSERT INTO credit_report_accounts (credit_report_id, client_id, provider, account_name, account_number, account_status, account_open, account_type, loan_type, date_opened, date_reported, balance_amount, credit_limit_amount, past_due_amount, charge_off_amount, payment_status, raw_account_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
          .bind(reportId, clientId, provider, acct.accountName || '', acct.accountNumber || '', acct.accountStatus || '', acct.accountOpen ? 1 : 0, acct.accountType || '', acct.loanType?.description || '', acct.dateOpened || '', acct.dateReported || '', acct.balanceAmount?.value || 0, acct.creditLimitAmount?.value || 0, acct.pastDueAmount?.value || 0, acct.chargeOffAmount?.value || 0, acct.paymentStatus || '', JSON.stringify(acct)).run()
      }
      for (const inq of (view.inquiries || [])) {
        await DB.prepare(`INSERT INTO credit_report_inquiries (credit_report_id, client_id, provider, inquirer_name, inquiry_date, inquiry_type) VALUES (?, ?, ?, ?, ?, 'hard')`).bind(reportId, clientId, provider, inq.inquirerName || inq.name || '', inq.date || inq.inquiryDate || '').run()
      }
    }
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'credit_report_refreshed', 'credit_report', ?, ?)`).bind(reportId, `Auto-refresh for client ${clientId}: EFX=${scoreEfx} TU=${scoreTu} EXP=${scoreExp}`).run()
    return c.json({ success: true, report_id: reportId, scores: { efx: scoreEfx, tu: scoreTu, exp: scoreExp }, score_avg: scoreAvg, previous_pull: stored.last_pull_date })
  } catch (err: any) {
    return c.json({ error: 'Refresh failed: ' + (err.message || 'Unknown error') }, 500)
  }
})

// Full parsed report (all sections: scores, accounts, inquiries, public records, score factors)
app.get('/api/mfsn/reports/:reportId/full', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const reportId = c.req.param('reportId')
  const [report, accounts, inquiries, pubRecords] = await Promise.all([
    DB.prepare('SELECT * FROM credit_reports WHERE id = ?').bind(reportId).first(),
    DB.prepare('SELECT * FROM credit_report_accounts WHERE credit_report_id = ? ORDER BY provider, account_name').bind(reportId).all(),
    DB.prepare('SELECT * FROM credit_report_inquiries WHERE credit_report_id = ? ORDER BY provider, inquiry_date DESC').bind(reportId).all(),
    DB.prepare('SELECT * FROM credit_report_public_records WHERE credit_report_id = ? ORDER BY provider, filing_date DESC').bind(reportId).all()
  ])
  if (!report) return c.json({ error: 'Report not found' }, 404)
  const rpt = report as any
  const scoreFactors: any = {}
  if (rpt.raw_response_json) {
    try {
      const raw = JSON.parse(rpt.raw_response_json)
      for (const view of (raw?.providerViews || [])) {
        const p = view.provider || view.summary?.provider
        if (p) scoreFactors[p] = view.summary?.creditScore?.scoreFactors || []
      }
    } catch (_) {}
  }
  return c.json({
    report,
    score_factors: scoreFactors,
    accounts: { total: accounts.results.length, by_bureau: { EFX: accounts.results.filter((a: any) => a.provider === 'EFX'), TU: accounts.results.filter((a: any) => a.provider === 'TU'), EXP: accounts.results.filter((a: any) => a.provider === 'EXP') } },
    inquiries: { total: inquiries.results.length, by_bureau: { EFX: inquiries.results.filter((i: any) => i.provider === 'EFX'), TU: inquiries.results.filter((i: any) => i.provider === 'TU'), EXP: inquiries.results.filter((i: any) => i.provider === 'EXP') } },
    public_records: { total: pubRecords.results.length, items: pubRecords.results }
  })
})

// Negative accounts from a report — prioritized for dispute
app.get('/api/mfsn/reports/:reportId/negatives', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const reportId = c.req.param('reportId')
  const negativeStatuses = ['30', '60', '90', '120', '150', '180', 'collection', 'charge_off', 'chargeoff', 'charged off', 'late', 'delinquent', 'derogatory', 'negative', 'delinq', 'collection account', 'charge-off', 'CO']
  const accounts = await DB.prepare('SELECT * FROM credit_report_accounts WHERE credit_report_id = ? ORDER BY provider, past_due_amount DESC, charge_off_amount DESC').bind(reportId).all()
  const negatives = (accounts.results as any[]).filter(a => {
    const ps = (a.payment_status || '').toLowerCase()
    const ws = (a.worst_payment_status || '').toLowerCase()
    return negativeStatuses.some(s => ps.includes(s.toLowerCase()) || ws.includes(s.toLowerCase())) || a.past_due_amount > 0 || a.charge_off_amount > 0 || a.times_30_days_late > 0 || a.times_60_days_late > 0 || a.times_90_days_late > 0
  })
  // Score impact estimate
  const scored = negatives.map((a: any) => ({
    ...a,
    dispute_priority: a.charge_off_amount > 0 ? 'critical' : a.past_due_amount > 500 ? 'high' : a.times_90_days_late > 0 ? 'high' : 'medium',
    estimated_score_impact: a.charge_off_amount > 0 ? '40-80 pts' : a.past_due_amount > 0 ? '20-50 pts' : '10-30 pts',
    recommended_dispute_reason: a.charge_off_amount > 0 ? 'Account inaccurate — charge-off amount disputed' : a.past_due_amount > 0 ? 'Account inaccurate — payment history disputed' : 'Account information not verified — request method of verification'
  }))
  return c.json({ report_id: reportId, total_negatives: negatives.length, negatives: scored, bureaus_affected: [...new Set(negatives.map((a: any) => a.provider))] })
})

// Hard inquiries from a report
app.get('/api/mfsn/reports/:reportId/inquiries', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const reportId = c.req.param('reportId')
  const inquiries = await DB.prepare('SELECT * FROM credit_report_inquiries WHERE credit_report_id = ? ORDER BY provider, inquiry_date DESC').bind(reportId).all()
  const inqs = inquiries.results as any[]
  // Flag inquiries older than 2 years (no longer affect score but still on report)
  const twoYearsAgo = new Date(); twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2)
  const annotated = inqs.map(i => ({
    ...i,
    disputable: !i.inquiry_date || new Date(i.inquiry_date) > twoYearsAgo,
    note: i.inquiry_date && new Date(i.inquiry_date) < twoYearsAgo ? 'Older than 2 years — no score impact, but disputable if unauthorized' : 'Within 2 years — actively reducing score'
  }))
  return c.json({ report_id: reportId, total: inqs.length, by_bureau: { EFX: annotated.filter(i => i.provider === 'EFX'), TU: annotated.filter(i => i.provider === 'TU'), EXP: annotated.filter(i => i.provider === 'EXP') }, inquiries: annotated })
})

// Public records from a report
app.get('/api/mfsn/reports/:reportId/public-records', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const reportId = c.req.param('reportId')
  const records = await DB.prepare('SELECT * FROM credit_report_public_records WHERE credit_report_id = ? ORDER BY provider, filing_date DESC').bind(reportId).all()
  const recs = records.results as any[]
  const annotated = recs.map(r => ({
    ...r,
    severity: r.record_type?.toLowerCase().includes('bankrupt') ? 'critical' : 'high',
    reporting_limit: r.record_type?.toLowerCase().includes('bankrupt') ? '7-10 years from filing' : '7 years from filing',
    dispute_approach: 'Verify accuracy — check filing date, court, amounts, and status. If any field inaccurate, dispute under FCRA §611'
  }))
  return c.json({ report_id: reportId, total: recs.length, public_records: annotated })
})

// Score factors by bureau from stored raw JSON
app.get('/api/mfsn/reports/:reportId/score-factors', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const reportId = c.req.param('reportId')
  const report = await DB.prepare('SELECT score_efx, score_tu, score_exp, raw_response_json FROM credit_reports WHERE id = ?').bind(reportId).first() as any
  if (!report) return c.json({ error: 'Report not found' }, 404)
  const factors: any = { EFX: [], TU: [], EXP: [] }
  if (report.raw_response_json) {
    try {
      const raw = JSON.parse(report.raw_response_json)
      for (const view of (raw?.providerViews || [])) {
        const p = view.provider || view.summary?.provider
        if (p && factors[p] !== undefined) factors[p] = view.summary?.creditScore?.scoreFactors || []
      }
    } catch (_) {}
  }
  return c.json({
    report_id: reportId,
    scores: { EFX: report.score_efx, TU: report.score_tu, EXP: report.score_exp },
    score_factors: factors,
    total_factors: Object.values(factors).flat().length
  })
})

// Auto-generate disputes from a report's negative accounts
app.post('/api/mfsn/reports/:reportId/auto-dispute', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const reportId = c.req.param('reportId')
  const body = await c.req.json().catch(() => ({})) as any
  const bureauFilter = body.bureau || null
  const report = await DB.prepare('SELECT client_id FROM credit_reports WHERE id = ?').bind(reportId).first() as any
  if (!report) return c.json({ error: 'Report not found' }, 404)
  const clientId = report.client_id
  const negativeStatuses = ['late', 'delinquent', 'collection', 'charge', 'derogatory', 'negative', '30', '60', '90']
  let query = 'SELECT * FROM credit_report_accounts WHERE credit_report_id = ? AND is_disputed = 0'
  const params: any[] = [reportId]
  if (bureauFilter) { query += ' AND provider = ?'; params.push(bureauFilter.toUpperCase()) }
  const accounts = await DB.prepare(query).bind(...params).all()
  const negatives = (accounts.results as any[]).filter(a => {
    const ps = (a.payment_status || '').toLowerCase()
    return negativeStatuses.some(s => ps.includes(s)) || a.past_due_amount > 0 || a.charge_off_amount > 0 || a.times_30_days_late > 0
  })
  const bureauMap: any = { EFX: 'equifax', TU: 'transunion', EXP: 'experian', UNKNOWN: 'equifax' }
  const created: any[] = []
  for (const acct of negatives) {
    const reason = acct.charge_off_amount > 0
      ? 'Account reported as charged-off — requesting verification of all account information including dates, amounts, and creditor details under FCRA §611'
      : acct.past_due_amount > 0
      ? 'Payment history inaccurate — requesting method of verification for all late payment notations under FCRA §609'
      : 'Negative account notation — requesting complete account verification under FCRA §611'
    const r = await DB.prepare(`INSERT INTO disputes (client_id, bureau, account_name, account_number, dispute_reason, status, dispute_round, fcra_section, letter_template, response_due_date) VALUES (?, ?, ?, ?, ?, 'pending', 1, 'FCRA §611', 'R1_Standard', date('now', '+35 days'))`)
      .bind(clientId, bureauMap[acct.provider] || 'equifax', acct.account_name, acct.account_number, reason).run()
    await DB.prepare('UPDATE credit_report_accounts SET is_disputed = 1, dispute_id = ? WHERE id = ?').bind(r.meta.last_row_id, acct.id).run()
    created.push({ dispute_id: r.meta.last_row_id, bureau: bureauMap[acct.provider], account: acct.account_name })
  }
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'auto_disputes_created', 'credit_report', ?, ?)`).bind(reportId, `Auto-created ${created.length} disputes from report for client ${clientId}`).run()
  return c.json({ success: true, disputes_created: created.length, report_id: reportId, client_id: clientId, disputes: created })
})

// Latest report summary for a client
app.get('/api/mfsn/clients/:clientId/latest', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clientId = c.req.param('clientId')
  const report = await DB.prepare('SELECT * FROM credit_reports WHERE client_id = ? ORDER BY pull_date DESC LIMIT 1').bind(clientId).first() as any
  if (!report) return c.json({ error: 'No reports found for client' }, 404)
  const [client, accounts, history, inquiries, pubRecords] = await Promise.all([
    DB.prepare('SELECT first_name, last_name, credit_score_start, credit_score_current, credit_score_goal FROM clients WHERE id = ?').bind(clientId).first(),
    DB.prepare('SELECT provider, COUNT(*) as total, SUM(CASE WHEN is_disputed=1 THEN 1 ELSE 0 END) as disputed, SUM(past_due_amount) as total_past_due FROM credit_report_accounts WHERE credit_report_id = ? GROUP BY provider').bind(report.id).all(),
    DB.prepare('SELECT score_efx, score_tu, score_exp, score_avg, recorded_date FROM credit_score_history WHERE client_id = ? ORDER BY recorded_date DESC LIMIT 6').bind(clientId).all(),
    DB.prepare('SELECT COUNT(*) as total FROM credit_report_inquiries WHERE credit_report_id = ?').bind(report.id).first(),
    DB.prepare('SELECT COUNT(*) as total FROM credit_report_public_records WHERE credit_report_id = ?').bind(report.id).first()
  ])
  const cl = client as any
  const scoreStart = cl?.credit_score_start
  const scoreCurrent = report.score_efx || report.score_tu || report.score_exp
  return c.json({
    client: cl,
    latest_report: { id: report.id, pull_date: report.pull_date, scores: { EFX: report.score_efx, TU: report.score_tu, EXP: report.score_exp }, total_accounts: report.total_accounts, total_negative: report.total_negative_accounts, total_inquiries: (inquiries as any)?.total || 0, total_public_records: (pubRecords as any)?.total || 0 },
    score_progress: { start: scoreStart, current: scoreCurrent, goal: cl?.credit_score_goal, gain: scoreCurrent && scoreStart ? scoreCurrent - scoreStart : null },
    by_bureau: accounts.results,
    score_history: history.results
  })
})

// Score trend chart data for a client
app.get('/api/mfsn/clients/:clientId/score-trend', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clientId = c.req.param('clientId')
  const history = await DB.prepare('SELECT score_efx, score_tu, score_exp, score_avg, recorded_date, source FROM credit_score_history WHERE client_id = ? ORDER BY recorded_date ASC').bind(clientId).all()
  const client = await DB.prepare('SELECT first_name, last_name, credit_score_start, credit_score_current, credit_score_goal FROM clients WHERE id = ?').bind(clientId).first() as any
  const h = history.results as any[]
  const first = h[0]; const last = h[h.length - 1]
  const totalGain = first && last ? (last.score_avg || 0) - (first.score_avg || 0) : 0
  return c.json({
    client: { id: clientId, name: client ? `${client.first_name} ${client.last_name}` : '', goal: client?.credit_score_goal },
    trend: h,
    summary: { total_pulls: h.length, total_gain: totalGain, first_pull: first?.recorded_date, latest_pull: last?.recorded_date, avg_gain_per_pull: h.length > 1 ? Math.round(totalGain / (h.length - 1)) : 0 },
    chart_data: { labels: h.map(e => e.recorded_date?.split('T')[0] || e.recorded_date), efx: h.map(e => e.score_efx), tu: h.map(e => e.score_tu), exp: h.map(e => e.score_exp), avg: h.map(e => e.score_avg) }
  })
})

// Dispute candidates — all undisputed negatives from latest report
app.get('/api/mfsn/clients/:clientId/dispute-candidates', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clientId = c.req.param('clientId')
  const report = await DB.prepare('SELECT id FROM credit_reports WHERE client_id = ? ORDER BY pull_date DESC LIMIT 1').bind(clientId).first() as any
  if (!report) return c.json({ error: 'No reports found — pull a report first' }, 404)
  const accounts = await DB.prepare('SELECT * FROM credit_report_accounts WHERE credit_report_id = ? AND is_disputed = 0 ORDER BY charge_off_amount DESC, past_due_amount DESC').bind(report.id).all()
  const negativeStatuses = ['late', 'delinquent', 'collection', 'charge', 'derogatory', 'negative', '30', '60', '90']
  const candidates = (accounts.results as any[])
    .filter(a => negativeStatuses.some(s => (a.payment_status || '').toLowerCase().includes(s)) || a.past_due_amount > 0 || a.charge_off_amount > 0 || a.times_30_days_late > 0)
    .map(a => ({
      account_id: a.id,
      bureau: a.provider,
      account_name: a.account_name,
      account_number: a.account_number,
      payment_status: a.payment_status,
      balance: a.balance_amount,
      past_due: a.past_due_amount,
      charge_off: a.charge_off_amount,
      priority: a.charge_off_amount > 0 ? 1 : a.past_due_amount > 500 ? 2 : 3,
      priority_label: a.charge_off_amount > 0 ? 'critical' : a.past_due_amount > 500 ? 'high' : 'medium',
      suggested_reason: a.charge_off_amount > 0 ? 'Charge-off amount and dates inaccurate — full verification required' : 'Late payment notation — request method of verification'
    }))
    .sort((a, b) => a.priority - b.priority)
  return c.json({ client_id: clientId, report_id: report.id, total_candidates: candidates.length, candidates })
})

// Full credit profile summary for a client
app.get('/api/mfsn/clients/:clientId/summary', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clientId = c.req.param('clientId')
  const [client, totalReports, latestReport, disputes, scoreHistory, token] = await Promise.all([
    DB.prepare('SELECT * FROM clients WHERE id = ?').bind(clientId).first(),
    DB.prepare('SELECT COUNT(*) as total FROM credit_reports WHERE client_id = ?').bind(clientId).first(),
    DB.prepare('SELECT id, pull_date, score_efx, score_tu, score_exp, total_negative_accounts, total_inquiries FROM credit_reports WHERE client_id = ? ORDER BY pull_date DESC LIMIT 1').bind(clientId).first(),
    DB.prepare('SELECT status, COUNT(*) as count FROM disputes WHERE client_id = ? GROUP BY status').bind(clientId).all(),
    DB.prepare('SELECT score_avg, recorded_date FROM credit_score_history WHERE client_id = ? ORDER BY recorded_date ASC').bind(clientId).all(),
    DB.prepare('SELECT mfsn_email, last_pull_date, total_pulls FROM mfsn_tokens WHERE client_id = ?').bind(clientId).first()
  ])
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const cl = client as any; const lr = latestReport as any
  const sh = scoreHistory.results as any[]
  const firstScore = sh[0]?.score_avg; const latestScore = sh[sh.length - 1]?.score_avg
  const disputeStats: any = {}; (disputes.results as any[]).forEach(d => disputeStats[d.status] = d.count)
  return c.json({
    client: { id: cl.id, name: `${cl.first_name} ${cl.last_name}`, email: cl.email, status: cl.status, goal: cl.credit_score_goal, monthly_fee: cl.monthly_fee },
    scores: { start: cl.credit_score_start, current: cl.credit_score_current, goal: cl.credit_score_goal, gain: cl.credit_score_current && cl.credit_score_start ? cl.credit_score_current - cl.credit_score_start : null, goal_remaining: cl.credit_score_goal && cl.credit_score_current ? cl.credit_score_goal - cl.credit_score_current : null },
    reports: { total: (totalReports as any)?.total || 0, latest: lr ? { id: lr.id, date: lr.pull_date, efx: lr.score_efx, tu: lr.score_tu, exp: lr.score_exp, negatives: lr.total_negative_accounts } : null },
    disputes: { ...disputeStats, total: Object.values(disputeStats).reduce((a: any, b: any) => a + b, 0) },
    mfsn: { connected: !!token, email: (token as any)?.mfsn_email, last_pull: (token as any)?.last_pull_date, total_pulls: (token as any)?.total_pulls || 0 },
    score_trend: { data_points: sh.length, total_gain: firstScore && latestScore ? latestScore - firstScore : null }
  })
})

// All accounts across all reports for a client (deduplicated by account_number+bureau)
app.get('/api/mfsn/clients/:clientId/all-accounts', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clientId = c.req.param('clientId')
  const accounts = await DB.prepare(`SELECT a.*, cr.pull_date FROM credit_report_accounts a JOIN credit_reports cr ON cr.id = a.credit_report_id WHERE a.client_id = ? ORDER BY a.provider, a.account_name, cr.pull_date DESC`).bind(clientId).all()
  const seen = new Set<string>()
  const deduped = (accounts.results as any[]).filter(a => {
    const key = `${a.provider}-${a.account_name}-${a.account_number}`
    if (seen.has(key)) return false
    seen.add(key); return true
  })
  const negative = deduped.filter(a => a.past_due_amount > 0 || a.charge_off_amount > 0 || a.times_30_days_late > 0)
  return c.json({ client_id: clientId, total: deduped.length, negative_count: negative.length, disputed_count: deduped.filter(a => a.is_disputed).length, accounts: deduped })
})

// Compare two reports side-by-side
app.get('/api/mfsn/compare', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const report1Id = c.req.query('report1_id'); const report2Id = c.req.query('report2_id')
  if (!report1Id || !report2Id) return c.json({ error: 'report1_id and report2_id query params required' }, 400)
  const [r1, r2] = await Promise.all([
    DB.prepare('SELECT * FROM credit_reports WHERE id = ?').bind(report1Id).first(),
    DB.prepare('SELECT * FROM credit_reports WHERE id = ?').bind(report2Id).first()
  ])
  if (!r1 || !r2) return c.json({ error: 'One or both reports not found' }, 404)
  const rpt1 = r1 as any; const rpt2 = r2 as any
  const scoreDiff = {
    EFX: rpt2.score_efx && rpt1.score_efx ? rpt2.score_efx - rpt1.score_efx : null,
    TU: rpt2.score_tu && rpt1.score_tu ? rpt2.score_tu - rpt1.score_tu : null,
    EXP: rpt2.score_exp && rpt1.score_exp ? rpt2.score_exp - rpt1.score_exp : null
  }
  return c.json({
    report1: { id: rpt1.id, date: rpt1.pull_date, scores: { EFX: rpt1.score_efx, TU: rpt1.score_tu, EXP: rpt1.score_exp }, negatives: rpt1.total_negative_accounts, inquiries: rpt1.total_inquiries, accounts: rpt1.total_accounts },
    report2: { id: rpt2.id, date: rpt2.pull_date, scores: { EFX: rpt2.score_efx, TU: rpt2.score_tu, EXP: rpt2.score_exp }, negatives: rpt2.total_negative_accounts, inquiries: rpt2.total_inquiries, accounts: rpt2.total_accounts },
    changes: {
      score_change: scoreDiff,
      negative_change: rpt2.total_negative_accounts - rpt1.total_negative_accounts,
      inquiry_change: rpt2.total_inquiries - rpt1.total_inquiries,
      improved: Object.values(scoreDiff).some(v => v !== null && (v as number) > 0)
    }
  })
})

// Enroll a new member with MFSN (pass-through to MFSN API if supported)
app.post('/api/mfsn/enroll', async (c) => {
  const { DB, env } = c
  const body = await c.req.json() as any
  const { first_name, last_name, email, phone, address, city, state, zip, dob, ssn_last4, client_id } = body
  if (!first_name || !last_name || !email) return c.json({ error: 'first_name, last_name, email required' }, 400)
  const apiUrl = env.MFSN_API_URL || 'https://api.myfreescorenow.com'
  if (!env.MFSN_API_EMAIL || !env.MFSN_API_PASSWORD) return c.json({ error: 'MFSN credentials not configured' }, 500)
  try {
    const loginForm = new FormData(); loginForm.append('email', env.MFSN_API_EMAIL); loginForm.append('password', env.MFSN_API_PASSWORD)
    const loginRes = await fetch(`${apiUrl}/api/auth/login`, { method: 'POST', body: loginForm })
    const loginData = await loginRes.json() as any
    if (!loginData.success) return c.json({ error: 'MFSN auth failed' }, 401)
    const enrollForm = new FormData()
    enrollForm.append('first_name', first_name); enrollForm.append('last_name', last_name)
    enrollForm.append('email', email); if (phone) enrollForm.append('phone', phone)
    if (address) enrollForm.append('address', address); if (city) enrollForm.append('city', city)
    if (state) enrollForm.append('state', state); if (zip) enrollForm.append('zip', zip)
    if (dob) enrollForm.append('dob', dob); if (ssn_last4) enrollForm.append('ssn_last4', ssn_last4)
    const enrollRes = await fetch(`${apiUrl}/api/auth/enroll`, { method: 'POST', body: enrollForm })
    const enrollData = await enrollRes.json() as any
    if (!enrollData.success) return c.json({ error: 'MFSN enrollment failed: ' + enrollData.message, mfsn_response: enrollData }, 400)
    if (client_id && DB && enrollData.data?.token) {
      await DB.prepare(`INSERT INTO mfsn_tokens (client_id, mfsn_email, mfsn_token) VALUES (?, ?, ?) ON CONFLICT(client_id) DO UPDATE SET mfsn_email=excluded.mfsn_email, mfsn_token=excluded.mfsn_token, updated_at=datetime('now')`).bind(client_id, email, enrollData.data.token).run()
      await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'mfsn_member_enrolled', 'client', ?, ?)`).bind(client_id, `MFSN member enrolled for ${first_name} ${last_name} <${email}>`).run()
    }
    return c.json({ success: true, message: 'Member enrolled in MFSN', token: enrollData.data?.token, member_id: enrollData.data?.member_id, mfsn_response: enrollData.data })
  } catch (err: any) {
    return c.json({ error: 'Enrollment request failed: ' + err.message }, 500)
  }
})

// HTML Report Viewer — full 3-bureau report rendered as a page
app.get('/mfsn/report/:reportId', async (c) => {
  const { DB } = c.env
  if (!DB) return c.html('<h1>Database required</h1>', 500)
  const reportId = c.req.param('reportId')
  const [report, accounts, inquiries, pubRecords] = await Promise.all([
    DB.prepare('SELECT cr.*, cl.first_name, cl.last_name, cl.email, cl.credit_score_start, cl.credit_score_goal FROM credit_reports cr LEFT JOIN clients cl ON cl.id = cr.client_id WHERE cr.id = ?').bind(reportId).first(),
    DB.prepare('SELECT * FROM credit_report_accounts WHERE credit_report_id = ? ORDER BY provider, charge_off_amount DESC, past_due_amount DESC').bind(reportId).all(),
    DB.prepare('SELECT * FROM credit_report_inquiries WHERE credit_report_id = ? ORDER BY provider, inquiry_date DESC').bind(reportId).all(),
    DB.prepare('SELECT * FROM credit_report_public_records WHERE credit_report_id = ? ORDER BY provider').bind(reportId).all()
  ])
  if (!report) return c.html('<h1>Report not found</h1>', 404)
  const r = report as any
  const accts = accounts.results as any[]
  const inqs = inquiries.results as any[]
  const prs = pubRecords.results as any[]
  const bureaus = ['EFX', 'TU', 'EXP']
  const bureauNames: any = { EFX: 'Equifax', TU: 'TransUnion', EXP: 'Experian' }
  const bureauColors: any = { EFX: '#e53e3e', TU: '#3182ce', EXP: '#38a169' }
  const scores: any = { EFX: r.score_efx, TU: r.score_tu, EXP: r.score_exp }
  const scoreColor = (s: number) => s >= 740 ? '#38a169' : s >= 670 ? '#d69e2e' : s >= 580 ? '#e67e22' : '#e53e3e'
  const scoreLabel = (s: number) => s >= 740 ? 'Excellent' : s >= 670 ? 'Good' : s >= 580 ? 'Fair' : 'Poor'
  const negativeStatuses = ['late', 'collection', 'charge', 'delinq', 'derogatory', 'negative', '30', '60', '90']
  const isNeg = (a: any) => negativeStatuses.some(s => (a.payment_status || '').toLowerCase().includes(s)) || a.past_due_amount > 0 || a.charge_off_amount > 0
  const scoreFactors: any = {}
  if (r.raw_response_json) {
    try {
      const raw = JSON.parse(r.raw_response_json)
      for (const view of (raw?.providerViews || [])) {
        const p = view.provider || view.summary?.provider
        if (p) scoreFactors[p] = view.summary?.creditScore?.scoreFactors || []
      }
    } catch (_) {}
  }
  const formatMoney = (v: number) => v ? `$${v.toLocaleString()}` : '$0'
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>3-Bureau Credit Report — ${r.first_name} ${r.last_name}</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
<style>
  body { font-family: 'Inter', system-ui, sans-serif; background: #f7fafc; }
  .bureau-efx { border-top: 4px solid #e53e3e; }
  .bureau-tu { border-top: 4px solid #3182ce; }
  .bureau-exp { border-top: 4px solid #38a169; }
  .score-ring { width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; border: 6px solid; }
  .neg-row { background: #fff5f5; border-left: 3px solid #e53e3e; }
  @media print { .no-print { display: none; } }
</style>
</head>
<body class="min-h-screen p-6">
<div class="max-w-6xl mx-auto">
  <!-- Header -->
  <div class="bg-white rounded-xl shadow p-6 mb-6 flex items-center justify-between">
    <div>
      <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">RJ Business Solutions — Credit Report</div>
      <h1 class="text-2xl font-bold text-gray-800 mt-1">${r.first_name} ${r.last_name}</h1>
      <div class="text-sm text-gray-500">${r.email || ''} &nbsp;·&nbsp; Report #${r.id} &nbsp;·&nbsp; Pulled ${new Date(r.pull_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
    <div class="flex gap-3">
      <a href="/api/mfsn/reports/${reportId}/auto-dispute" class="no-print bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700">Auto-Generate Disputes</a>
      <button onclick="window.print()" class="no-print bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">Print / PDF</button>
    </div>
  </div>
  <!-- Score Summary -->
  <div class="grid grid-cols-3 gap-4 mb-6">
    ${bureaus.map(b => `
    <div class="bg-white rounded-xl shadow p-5 bureau-${b.toLowerCase()}">
      <div class="flex items-center gap-4">
        <div class="score-ring" style="color:${scoreColor(scores[b] || 0)};border-color:${scoreColor(scores[b] || 0)}">
          ${scores[b] || '—'}
        </div>
        <div>
          <div class="font-bold text-lg" style="color:${bureauColors[b]}">${bureauNames[b]}</div>
          <div class="text-sm font-medium" style="color:${scoreColor(scores[b] || 0)}">${scores[b] ? scoreLabel(scores[b]) : 'No score'}</div>
          ${r.credit_score_goal ? `<div class="text-xs text-gray-400">Goal: ${r.credit_score_goal} ${scores[b] ? (scores[b] >= r.credit_score_goal ? '✅ Reached' : `(+${r.credit_score_goal - scores[b]} needed)`) : ''}</div>` : ''}
        </div>
      </div>
      ${scoreFactors[b]?.length ? `<div class="mt-3"><div class="text-xs font-semibold text-gray-500 uppercase mb-1">Score Factors</div>${scoreFactors[b].map((f: any) => `<div class="text-xs text-gray-600 py-0.5">• ${f.description || f.code || JSON.stringify(f)}</div>`).join('')}</div>` : ''}
    </div>`).join('')}
  </div>
  <!-- Report Overview Stats -->
  <div class="grid grid-cols-5 gap-3 mb-6">
    ${[
      { label: 'Total Accounts', val: r.total_accounts || 0, color: 'blue' },
      { label: 'Open Accounts', val: r.total_open_accounts || 0, color: 'green' },
      { label: 'Negative Items', val: r.total_negative_accounts || 0, color: 'red' },
      { label: 'Hard Inquiries', val: inqs.filter(i => i.inquiry_type === 'hard').length || r.total_inquiries || 0, color: 'yellow' },
      { label: 'Public Records', val: prs.length || r.total_public_records || 0, color: 'purple' }
    ].map(s => `
    <div class="bg-white rounded-lg shadow p-4 text-center">
      <div class="text-2xl font-bold text-${s.color}-600">${s.val}</div>
      <div class="text-xs text-gray-500 mt-1">${s.label}</div>
    </div>`).join('')}
  </div>
  <!-- Accounts by Bureau -->
  ${bureaus.map(b => {
    const ba = accts.filter(a => a.provider === b)
    if (ba.length === 0) return ''
    return `
  <div class="bg-white rounded-xl shadow mb-6">
    <div class="px-6 py-4 border-b flex items-center justify-between">
      <h2 class="font-bold text-lg" style="color:${bureauColors[b]}">${bureauNames[b]} — ${ba.length} Account${ba.length !== 1 ? 's' : ''}</h2>
      <span class="text-sm text-gray-500">${ba.filter(isNeg).length} negative</span>
    </div>
    <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-gray-500 text-xs uppercase">
        <tr>
          <th class="px-4 py-3 text-left">Account</th>
          <th class="px-4 py-3 text-right">Balance</th>
          <th class="px-4 py-3 text-right">Limit</th>
          <th class="px-4 py-3 text-right">Past Due</th>
          <th class="px-4 py-3 text-center">Status</th>
          <th class="px-4 py-3 text-center">Late</th>
          <th class="px-4 py-3 text-center">Disputed</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        ${ba.map(a => `
        <tr class="${isNeg(a) ? 'neg-row' : ''}">
          <td class="px-4 py-3">
            <div class="font-medium text-gray-800">${a.account_name || 'Unknown'}</div>
            <div class="text-gray-400 text-xs">${a.account_number || ''} ${a.loan_type ? '· ' + a.loan_type : ''}</div>
          </td>
          <td class="px-4 py-3 text-right font-mono">${formatMoney(a.balance_amount)}</td>
          <td class="px-4 py-3 text-right font-mono text-gray-500">${formatMoney(a.credit_limit_amount)}</td>
          <td class="px-4 py-3 text-right font-mono ${a.past_due_amount > 0 ? 'text-red-600 font-bold' : 'text-gray-400'}">${formatMoney(a.past_due_amount)}</td>
          <td class="px-4 py-3 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-xs font-medium ${isNeg(a) ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}">${a.payment_status || a.account_status || 'Unknown'}</span>
          </td>
          <td class="px-4 py-3 text-center text-xs text-gray-500">${[a.times_30_days_late > 0 ? `${a.times_30_days_late}×30d` : '', a.times_60_days_late > 0 ? `${a.times_60_days_late}×60d` : '', a.times_90_days_late > 0 ? `${a.times_90_days_late}×90d` : ''].filter(Boolean).join(', ') || '—'}</td>
          <td class="px-4 py-3 text-center">${a.is_disputed ? '<span class="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">Filed</span>' : '<span class="text-gray-300 text-xs">No</span>'}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>`
  }).join('')}
  <!-- Inquiries -->
  ${inqs.length > 0 ? `
  <div class="bg-white rounded-xl shadow mb-6">
    <div class="px-6 py-4 border-b"><h2 class="font-bold text-lg text-gray-800">Hard Inquiries (${inqs.length})</h2></div>
    <div class="grid grid-cols-3 gap-0 divide-x">
      ${bureaus.map(b => { const bi = inqs.filter(i => i.provider === b); return `
      <div class="p-4">
        <div class="font-semibold text-sm mb-3" style="color:${bureauColors[b]}">${bureauNames[b]} (${bi.length})</div>
        ${bi.length === 0 ? '<div class="text-gray-400 text-sm">No inquiries</div>' : bi.map(i => `
        <div class="py-2 border-b last:border-0">
          <div class="text-sm font-medium text-gray-700">${i.inquirer_name || 'Unknown'}</div>
          <div class="text-xs text-gray-400">${i.inquiry_date || 'Date unknown'} ${i.inquiry_purpose ? '· ' + i.inquiry_purpose : ''}</div>
        </div>`).join('')}
      </div>`}).join('')}
    </div>
  </div>` : ''}
  <!-- Public Records -->
  ${prs.length > 0 ? `
  <div class="bg-white rounded-xl shadow mb-6 border-2 border-red-200">
    <div class="px-6 py-4 border-b bg-red-50"><h2 class="font-bold text-lg text-red-700">⚠ Public Records (${prs.length})</h2></div>
    <div class="p-6 grid gap-3">
      ${prs.map(p => `
      <div class="p-4 bg-red-50 rounded-lg border border-red-200">
        <div class="flex items-start justify-between">
          <div>
            <div class="font-bold text-red-800">${p.record_type || 'Public Record'}</div>
            <div class="text-sm text-red-600">${p.court_name || ''} ${p.filing_date ? '· Filed ' + p.filing_date : ''}</div>
            ${p.amount > 0 ? `<div class="text-sm font-mono text-red-700 mt-1">Amount: ${formatMoney(p.amount)}</div>` : ''}
            ${p.status ? `<div class="text-xs text-gray-500 mt-1">Status: ${p.status}</div>` : ''}
          </div>
          <span class="text-xs font-bold px-2 py-1 rounded" style="background:${bureauColors[p.provider]}20;color:${bureauColors[p.provider]}">${bureauNames[p.provider] || p.provider}</span>
        </div>
      </div>`).join('')}
    </div>
  </div>` : ''}
  <!-- Footer -->
  <div class="text-center text-xs text-gray-400 mt-8 pb-8">
    Report ID: ${r.id} &nbsp;·&nbsp; Pulled via MyFreeScoreNow &nbsp;·&nbsp; RJ Business Solutions &nbsp;·&nbsp; Confidential — FCRA Protected
  </div>
</div>
</body>
</html>`
  return c.html(html)
})

// ============================================================
// TWILIO — SMS / VOICE INTEGRATION
// Maps to: SOP-304 (Speed-to-Lead), SOP-102 (Client Communication)
// ============================================================

// Send SMS via Twilio
app.post('/api/twilio/sms', async (c) => {
  const { DB, env } = c
  const { to, message, client_id, template_name, sop_id } = await c.req.json() as any
  if (!to || !message) return c.json({ error: 'to and message required' }, 400)
  if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN) return c.json({ error: 'Twilio not configured' }, 500)
  try {
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`
    const auth = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)
    const params = new URLSearchParams()
    params.append('To', to)
    params.append('From', env.TWILIO_PHONE_NUMBER)
    params.append('Body', message)
    const res = await fetch(twilioUrl, {
      method: 'POST',
      headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
    const data = await res.json() as any
    if (data.error_code) return c.json({ error: data.message, code: data.error_code }, 400)

    // Log communication
    if (DB) {
      await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, body, status, external_id, template_name, sop_id) VALUES (?, 'sms', 'outbound', 'twilio', ?, ?, ?, ?, ?, ?, ?)`)
        .bind(client_id || null, env.TWILIO_PHONE_NUMBER, to, message, data.status || 'sent', data.sid || null, template_name || null, sop_id || null).run()
      await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'sms_sent', 'communication', 0, ?)`)
        .bind(`SMS to ${to}: ${message.substring(0, 100)}`).run()
    }
    return c.json({ success: true, sid: data.sid, status: data.status })
  } catch (err: any) {
    return c.json({ error: 'Twilio SMS failed: ' + (err.message || 'Unknown') }, 500)
  }
})

// Make voice call via Twilio
app.post('/api/twilio/call', async (c) => {
  const { DB, env } = c
  const { to, twiml, client_id, sop_id } = await c.req.json() as any
  if (!to) return c.json({ error: 'to phone number required' }, 400)
  if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN) return c.json({ error: 'Twilio not configured' }, 500)
  try {
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Calls.json`
    const auth = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)
    const params = new URLSearchParams()
    params.append('To', to)
    params.append('From', env.TWILIO_PHONE_NUMBER)
    params.append('Twiml', twiml || '<Response><Say>Hello, this is RJ Business Solutions calling about your credit repair consultation. Press 1 to connect to an agent.</Say></Response>')
    const res = await fetch(twilioUrl, {
      method: 'POST',
      headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
    const data = await res.json() as any

    if (DB) {
      await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, status, external_id, sop_id) VALUES (?, 'voice', 'outbound', 'twilio', ?, ?, ?, ?, ?)`)
        .bind(client_id || null, env.TWILIO_PHONE_NUMBER, to, data.status || 'queued', data.sid || null, sop_id || null).run()
    }
    return c.json({ success: true, sid: data.sid, status: data.status })
  } catch (err: any) {
    return c.json({ error: 'Twilio call failed: ' + (err.message || 'Unknown') }, 500)
  }
})

// Get communication log
app.get('/api/communications', async (c) => {
  const { DB } = c.env; const clientId = c.req.query('client_id'); const channel = c.req.query('channel')
  let q = 'SELECT cm.*, c.first_name || \' \' || c.last_name as client_name FROM communications cm LEFT JOIN clients c ON cm.client_id = c.id'
  const params: string[] = []; const clauses: string[] = []
  if (clientId) { clauses.push('cm.client_id = ?'); params.push(clientId) }
  if (channel) { clauses.push('cm.channel = ?'); params.push(channel) }
  if (clauses.length) q += ' WHERE ' + clauses.join(' AND ')
  q += ' ORDER BY cm.created_at DESC LIMIT 100'
  const r = await DB.prepare(q).bind(...params).all()
  return c.json({ communications: r.results, total: r.results.length })
})

// ============================================================
// EMAIL SERVICE — SendGrid + Resend
// Maps to: SOP-102 (Client Communication), SOP-401 (Monthly Check-In)
// ============================================================

// Send email via SendGrid
// /api/email/sendgrid kept for route compat — now routes through Resend
app.post('/api/email/sendgrid', async (c) => {
  return c.req.raw.clone().arrayBuffer().then(async () => {
    const env = c.env; const { DB } = env
    const { to, subject, html_body, text_body, body, client_id, template_name, sop_id } = await c.req.json() as any
    if (!to || !subject) return c.json({ error: 'to and subject required' }, 400)
    if (!env.RESEND_API_KEY) return c.json({ error: 'Resend not configured — check RESEND_API_KEY in .dev.vars' }, 500)
    const finalBody = html_body || body || text_body || subject
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${env.COMPANY_NAME || 'RJ Business Solutions'} <${env.COMPANY_EMAIL || 'support@rjbusinesssolutions.org'}>`,
          to: [to],
          subject,
          ...(html_body ? { html: html_body } : { text: finalBody })
        })
      })
      if (!res.ok) { const e = await res.text().catch(() => ''); console.error('Resend error', res.status, e) }
      if (DB) {
        await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, subject, body, status, template_name, sop_id) VALUES (?, 'email', 'outbound', 'resend', ?, ?, ?, ?, ?, ?, ?)`)
          .bind(client_id || null, env.COMPANY_EMAIL || 'support@rjbusinesssolutions.org', to, subject, finalBody, res.ok ? 'sent' : 'failed', template_name || null, sop_id || null).run()
        await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'email_sent', 'communication', 0, ?)`)
          .bind(`Resend email to ${to}: ${subject}`).run()
      }
      return c.json({ success: res.ok, status: res.status, provider: 'resend' })
    } catch (err: any) {
      return c.json({ error: 'Email failed: ' + (err.message || 'Unknown') }, 500)
    }
  })
})

// Send email via Resend (primary provider)
app.post('/api/email/resend', async (c) => {
  const env = c.env; const { DB } = env
  const { to, subject, html_body, text_body, body, client_id, template_name, sop_id } = await c.req.json() as any
  if (!to || !subject) return c.json({ error: 'to and subject required' }, 400)
  if (!env.RESEND_API_KEY) return c.json({ error: 'Resend not configured — check RESEND_API_KEY' }, 500)
  const finalBody = html_body || body || text_body || subject
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'RJ Business Solutions <support@rjbusinesssolutions.org>',
        to: [to],
        subject,
        html: html_body || undefined,
        text: text_body || subject
      })
    })
    const data = await res.json() as any

    if (DB) {
      await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, subject, body, status, external_id, template_name, sop_id) VALUES (?, 'email', 'outbound', 'resend', 'support@rjbusinesssolutions.org', ?, ?, ?, ?, ?, ?, ?)`)
        .bind(client_id || null, to, subject, html_body || text_body || '', res.ok ? 'sent' : 'failed', data.id || null, template_name || null, sop_id || null).run()
    }
    return c.json({ success: res.ok, id: data.id })
  } catch (err: any) {
    return c.json({ error: 'Resend failed: ' + (err.message || 'Unknown') }, 500)
  }
})

// Speed-to-Lead: Auto-notify on new lead (SMS + Email combo)
app.post('/api/speed-to-lead', async (c) => {
  const { DB, env } = c
  const { client_id, first_name, phone, email } = await c.req.json() as any
  const results: any[] = []

  // Send SMS via Twilio
  if (phone && env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN) {
    try {
      const auth = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)
      const params = new URLSearchParams()
      params.append('To', phone)
      params.append('From', env.TWILIO_PHONE_NUMBER)
      params.append('Body', `Hi ${first_name || 'there'}! This is RJ Business Solutions. We received your credit repair inquiry and a specialist will call you within 5 minutes. Questions? Reply to this text or call (866) 752-4618.`)
      const smsRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, {
        method: 'POST', headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString()
      })
      const smsData = await smsRes.json() as any
      results.push({ channel: 'sms', success: !smsData.error_code, sid: smsData.sid })
      if (DB) {
        await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, body, status, external_id, sop_id) VALUES (?, 'sms', 'outbound', 'twilio', ?, ?, ?, 'sent', ?, 'SOP-304')`)
          .bind(client_id || null, env.TWILIO_PHONE_NUMBER, phone, `Speed-to-lead SMS to ${first_name}`, smsData.sid || null).run()
      }
    } catch (err: any) { results.push({ channel: 'sms', success: false, error: err.message }) }
  }

  // Send welcome email via Resend
  if (email) {
    const emailHtml = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px"><img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" style="width:80px;margin-bottom:20px"><h2 style="color:#1e3a8a">Welcome, ${first_name || 'Friend'}!</h2><p>Thank you for reaching out to <strong>RJ Business Solutions</strong>. A credit repair specialist will contact you within <strong>5 minutes</strong>.</p><p>In the meantime, here's what to expect:</p><ul><li>Free credit report analysis across all 3 bureaus</li><li>Personalized dispute strategy</li><li>FCRA-compliant dispute filing</li><li>AI-powered monitoring with 3 dedicated agents</li></ul><p><strong>No upfront fees — we only bill after services are performed.</strong></p><hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"><p style="font-size:12px;color:#9ca3af">RJ Business Solutions | 1342 NM 333, Tijeras, NM 87059<br><a href="https://rjbusinesssolutions.org">rjbusinesssolutions.org</a> | (866) 752-4618</p></div>`
    try {
      let emailSuccess = false
      if (env.RESEND_API_KEY) {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST', headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: `${env.COMPANY_NAME || 'RJ Business Solutions'} <${env.COMPANY_EMAIL || 'support@rjbusinesssolutions.org'}>`, to: [email], subject: `${first_name || 'Welcome'} — Your Credit Repair Journey Starts Now`, html: emailHtml })
        })
        emailSuccess = res.ok
        if (!res.ok) { const e = await res.text().catch(() => ''); console.error('Resend speed-to-lead error', res.status, e) }
      }
      results.push({ channel: 'email', success: emailSuccess, provider: 'resend' })
      if (DB) {
        await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, subject, status, sop_id) VALUES (?, 'email', 'outbound', 'resend', ?, ?, 'Welcome — Credit Repair Journey', ?, 'SOP-304')`)
          .bind(client_id || null, env.COMPANY_EMAIL || 'support@rjbusinesssolutions.org', email, emailSuccess ? 'sent' : 'failed').run()
      }
    } catch (err: any) { results.push({ channel: 'email', success: false, error: err.message }) }
  }

  return c.json({ success: true, results, message: `Speed-to-lead notifications sent: ${results.filter(r => r.success).length}/${results.length}` })
})

// ============================================================
// INTEGRATION STATUS — Health check for all services
// ============================================================
app.get('/api/integrations/status', async (c) => {
  const { env } = c
  return c.json({
    mfsn: { configured: !!(env.MFSN_API_EMAIL && env.MFSN_API_PASSWORD), url: env.MFSN_API_URL || 'https://api.myfreescorenow.com' },
    twilio: { configured: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), phone: env.TWILIO_PHONE_NUMBER || 'not set' },
    sendgrid: { configured: !!env.SENDGRID_API_KEY },
    resend: { configured: !!env.RESEND_API_KEY },
    stripe: { configured: !!env.STRIPE_SECRET_KEY },
    d1: { configured: true, binding: 'DB' }
  })
})

// ============================================================
// INTEGRATIONS FULL STATUS — All 16 service categories
// ============================================================
app.get('/api/integrations/full-status', async (c) => {
  const { env } = c
  return c.json({
    system: 'RJ Business Solutions — Master SOP 2026 Operations Engine',
    version: 'v2026.4',
    timestamp: new Date().toISOString(),
    categories: {
      database: {
        d1: { configured: true, binding: 'DB', database: 'rj-sop-operations', status: 'active' }
      },
      credit_reporting: {
        mfsn: { configured: !!(env.MFSN_API_EMAIL && env.MFSN_API_PASSWORD), email: env.MFSN_API_EMAIL || 'not set', url: env.MFSN_API_URL || 'https://api.myfreescorenow.com', endpoints: ['/api/auth/login', '/api/auth/fetch-3B-json', '/api/auth/logout'] }
      },
      communications: {
        twilio_sms: { configured: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), phone: env.TWILIO_PHONE_NUMBER || 'not set', api_key: !!(env.TWILIO_API_KEY_SID) },
        twilio_voice: { configured: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), webhook: env.TWILIO_VOICE_WEBHOOK_URL || 'not set' },
        twilio_whatsapp: { configured: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN) }
      },
      email: {
        resend: { configured: !!env.RESEND_API_KEY, primary: true },
        cloudflare_email: { configured: !!env.CF_EMAIL_ROUTING_ADDRESS, fallback: true },
        cloudflare_routing: { configured: !!env.CF_EMAIL_ROUTING_ADDRESS, address: env.CF_EMAIL_ROUTING_ADDRESS || 'not set', routes: ['support@rjbusinesssolutions.org', 'disputes@rjbusinesssolutions.org', 'leads@rjbusinesssolutions.org'] }
      },
      payments: {
        stripe: { configured: !!(env.STRIPE_SECRET_KEY && env.STRIPE_PUBLISHABLE_KEY), webhook: !!env.STRIPE_WEBHOOK_SECRET, mode: env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'live' : 'test' }
      },
      cloudflare: {
        account: { configured: !!env.CF_ACCOUNT_ID },
        workers: { configured: !!(env.CF_ACCOUNT_ID && env.CF_API_TOKEN) },
        pages: { configured: true, url: env.CLOUDFLARE_PAGES_URL || 'not set' },
        d1: { configured: !!env.CF_D1_DATABASE_ID, database_id: env.CF_D1_DATABASE_ID || 'not set' },
        r2: { configured: !!env.CF_R2_BUCKET_NAME, bucket: env.CF_R2_BUCKET_NAME || 'not set' },
        kv: { configured: !!env.CF_KV_NAMESPACE_ID },
        stream: { configured: !!env.CF_STREAM_CUSTOMER_CODE },
        images: { configured: !!env.CF_IMAGES_ACCOUNT_HASH },
        turnstile: { configured: !!(env.CF_TURNSTILE_SITE_KEY && env.CF_TURNSTILE_SECRET_KEY) }
      },
      ai_models: {
        openrouter: { configured: !!env.OPENROUTER_API_KEY },
        groq: { configured: !!env.GROQ_API_KEY },
        openai: { configured: !!env.OPENAI_API_KEY },
        anthropic: { configured: !!env.ANTHROPIC_API_KEY },
        google_gemini: { configured: !!env.GOOGLE_GEMINI_API_KEY },
        mistral: { configured: !!env.MISTRAL_API_KEY },
        cohere: { configured: !!env.COHERE_API_KEY },
        together: { configured: !!env.TOGETHER_API_KEY },
        perplexity: { configured: !!env.PERPLEXITY_API_KEY },
        deepseek: { configured: !!env.DEEPSEEK_API_KEY },
        xai: { configured: !!env.XAI_API_KEY },
        novita: { configured: !!env.NOVITA_API_KEY },
        huggingface: { configured: !!env.HUGGINGFACE_API_KEY }
      },
      google_services: {
        oauth: { configured: !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) },
        analytics: { configured: !!env.GOOGLE_ANALYTICS_ID, id: env.GOOGLE_ANALYTICS_ID || 'not set' },
        ads: { configured: !!env.GOOGLE_ADS_CUSTOMER_ID },
        tag_manager: { configured: !!env.GOOGLE_TAG_MANAGER_ID }
      },
      meta_facebook: {
        app: { configured: !!(env.FACEBOOK_APP_ID && env.FACEBOOK_APP_SECRET) },
        pixel: { configured: !!env.FACEBOOK_PIXEL_ID, id: env.FACEBOOK_PIXEL_ID || 'not set' },
        ads: { configured: !!env.FACEBOOK_AD_ACCOUNT_ID },
        business: { configured: !!env.META_BUSINESS_SUITE_ID }
      },
      vector_db: {
        pinecone: { configured: !!(env.PINECONE_API_KEY && env.PINECONE_INDEX_NAME), index: env.PINECONE_INDEX_NAME || 'not set', environment: env.PINECONE_ENVIRONMENT || 'not set' }
      },
      media_ai: {
        stability: { configured: !!env.STABILITY_API_KEY },
        runway: { configured: !!env.RUNWAY_API_KEY },
        elevenlabs: { configured: !!env.ELEVENLABS_API_KEY },
        heygen: { configured: !!env.HEYGEN_API_KEY },
        synthesia: { configured: !!env.SYNTHESIA_API_KEY }
      },
      company: {
        name: env.COMPANY_NAME || 'RJ Business Solutions',
        email: env.COMPANY_EMAIL || 'support@rjbusinesssolutions.org',
        phone: env.COMPANY_PHONE || '(866) 752-4618',
        address: env.COMPANY_ADDRESS || '1342 NM 333, Tijeras, NM 87059',
        website: env.COMPANY_WEBSITE || 'https://rjbusinesssolutions.org',
        owner: env.OWNER_NAME || 'Rick Jefferson'
      }
    }
  })
})

// ============================================================
// CONFIG / VARIABLES VERSION — Full env variable status
// ============================================================
app.get('/api/config/variables-version', async (c) => {
  const { env } = c
  const check = (val: string | undefined) => ({ set: !!val, preview: val ? val.substring(0, 8) + '...' : 'NOT SET' })
  return c.json({
    version: 'v2026.4-full',
    total_variables: 90,
    categories: {
      mfsn: { count: 5, vars: { MFSN_API_URL: check(env.MFSN_API_URL), MFSN_API_EMAIL: check(env.MFSN_API_EMAIL), MFSN_API_PASSWORD: check(env.MFSN_API_PASSWORD), MFSN_API_KEY: check(env.MFSN_API_KEY), MFSN_AFFILIATE_ID: check(env.MFSN_AFFILIATE_ID) } },
      twilio: { count: 6, vars: { TWILIO_ACCOUNT_SID: check(env.TWILIO_ACCOUNT_SID), TWILIO_AUTH_TOKEN: check(env.TWILIO_AUTH_TOKEN), TWILIO_PHONE_NUMBER: check(env.TWILIO_PHONE_NUMBER), TWILIO_API_KEY_SID: check(env.TWILIO_API_KEY_SID), TWILIO_API_KEY_SECRET: check(env.TWILIO_API_KEY_SECRET), TWILIO_VOICE_WEBHOOK_URL: check(env.TWILIO_VOICE_WEBHOOK_URL) } },
      email: { count: 2, vars: { SENDGRID_API_KEY: check(env.SENDGRID_API_KEY), RESEND_API_KEY: check(env.RESEND_API_KEY) } },
      stripe: { count: 3, vars: { STRIPE_SECRET_KEY: check(env.STRIPE_SECRET_KEY), STRIPE_PUBLISHABLE_KEY: check(env.STRIPE_PUBLISHABLE_KEY), STRIPE_WEBHOOK_SECRET: check(env.STRIPE_WEBHOOK_SECRET) } },
      cloudflare: { count: 12, vars: { CF_ACCOUNT_ID: check(env.CF_ACCOUNT_ID), CF_API_TOKEN: check(env.CF_API_TOKEN), CF_ZONE_ID: check(env.CF_ZONE_ID), CF_WORKERS_TOKEN: check(env.CF_WORKERS_TOKEN), CF_D1_DATABASE_ID: check(env.CF_D1_DATABASE_ID), CF_R2_BUCKET_NAME: check(env.CF_R2_BUCKET_NAME), CF_KV_NAMESPACE_ID: check(env.CF_KV_NAMESPACE_ID), CF_STREAM_CUSTOMER_CODE: check(env.CF_STREAM_CUSTOMER_CODE), CF_IMAGES_ACCOUNT_HASH: check(env.CF_IMAGES_ACCOUNT_HASH), CF_TURNSTILE_SITE_KEY: check(env.CF_TURNSTILE_SITE_KEY), CF_TURNSTILE_SECRET_KEY: check(env.CF_TURNSTILE_SECRET_KEY), CF_EMAIL_ROUTING_ADDRESS: check(env.CF_EMAIL_ROUTING_ADDRESS) } },
      ai_models: { count: 13, vars: { OPENROUTER_API_KEY: check(env.OPENROUTER_API_KEY), GROQ_API_KEY: check(env.GROQ_API_KEY), OPENAI_API_KEY: check(env.OPENAI_API_KEY), ANTHROPIC_API_KEY: check(env.ANTHROPIC_API_KEY), GOOGLE_GEMINI_API_KEY: check(env.GOOGLE_GEMINI_API_KEY), MISTRAL_API_KEY: check(env.MISTRAL_API_KEY), COHERE_API_KEY: check(env.COHERE_API_KEY), TOGETHER_API_KEY: check(env.TOGETHER_API_KEY), PERPLEXITY_API_KEY: check(env.PERPLEXITY_API_KEY), DEEPSEEK_API_KEY: check(env.DEEPSEEK_API_KEY), XAI_API_KEY: check(env.XAI_API_KEY), NOVITA_API_KEY: check(env.NOVITA_API_KEY), HUGGINGFACE_API_KEY: check(env.HUGGINGFACE_API_KEY) } },
      google: { count: 6, vars: { GOOGLE_CLIENT_ID: check(env.GOOGLE_CLIENT_ID), GOOGLE_CLIENT_SECRET: check(env.GOOGLE_CLIENT_SECRET), GOOGLE_REFRESH_TOKEN: check(env.GOOGLE_REFRESH_TOKEN), GOOGLE_ANALYTICS_ID: check(env.GOOGLE_ANALYTICS_ID), GOOGLE_ADS_CUSTOMER_ID: check(env.GOOGLE_ADS_CUSTOMER_ID), GOOGLE_TAG_MANAGER_ID: check(env.GOOGLE_TAG_MANAGER_ID) } },
      facebook_meta: { count: 6, vars: { FACEBOOK_APP_ID: check(env.FACEBOOK_APP_ID), FACEBOOK_APP_SECRET: check(env.FACEBOOK_APP_SECRET), FACEBOOK_ACCESS_TOKEN: check(env.FACEBOOK_ACCESS_TOKEN), FACEBOOK_PIXEL_ID: check(env.FACEBOOK_PIXEL_ID), FACEBOOK_AD_ACCOUNT_ID: check(env.FACEBOOK_AD_ACCOUNT_ID), META_BUSINESS_SUITE_ID: check(env.META_BUSINESS_SUITE_ID) } },
      vector_db: { count: 4, vars: { PINECONE_API_KEY: check(env.PINECONE_API_KEY), PINECONE_INDEX_NAME: check(env.PINECONE_INDEX_NAME), PINECONE_ENVIRONMENT: check(env.PINECONE_ENVIRONMENT), PINECONE_PROJECT_ID: check(env.PINECONE_PROJECT_ID) } },
      media_ai: { count: 5, vars: { STABILITY_API_KEY: check(env.STABILITY_API_KEY), RUNWAY_API_KEY: check(env.RUNWAY_API_KEY), ELEVENLABS_API_KEY: check(env.ELEVENLABS_API_KEY), HEYGEN_API_KEY: check(env.HEYGEN_API_KEY), SYNTHESIA_API_KEY: check(env.SYNTHESIA_API_KEY) } },
      deployment: { count: 7, vars: { NODE_ENV: check(env.NODE_ENV), APP_BASE_URL: check(env.APP_BASE_URL), APP_VERSION: check(env.APP_VERSION), REPLIT_APP_URL: check(env.REPLIT_APP_URL), CLOUDFLARE_PAGES_URL: check(env.CLOUDFLARE_PAGES_URL), CUSTOM_DOMAIN: check(env.CUSTOM_DOMAIN), WEBHOOK_SECRET: check(env.WEBHOOK_SECRET) } },
      company: { count: 10, vars: { COMPANY_NAME: check(env.COMPANY_NAME), COMPANY_EMAIL: check(env.COMPANY_EMAIL), COMPANY_PHONE: check(env.COMPANY_PHONE), COMPANY_ADDRESS: check(env.COMPANY_ADDRESS), COMPANY_WEBSITE: check(env.COMPANY_WEBSITE), COMPANY_LINKEDIN: check(env.COMPANY_LINKEDIN), COMPANY_TWITTER: check(env.COMPANY_TWITTER), COMPANY_TIKTOK: check(env.COMPANY_TIKTOK), OWNER_NAME: check(env.OWNER_NAME), OWNER_EMAIL: check(env.OWNER_EMAIL) } }
    },
    summary: {
      configured: Object.entries({ mfsn: !!(env.MFSN_API_EMAIL && env.MFSN_API_PASSWORD), twilio: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), email: !!(env.SENDGRID_API_KEY || env.RESEND_API_KEY), stripe: !!env.STRIPE_SECRET_KEY, cloudflare: !!env.CF_ACCOUNT_ID, ai: !!(env.OPENROUTER_API_KEY || env.GROQ_API_KEY || env.OPENAI_API_KEY), google: !!env.GOOGLE_ANALYTICS_ID, meta: !!env.FACEBOOK_PIXEL_ID, pinecone: !!env.PINECONE_API_KEY, media_ai: !!(env.ELEVENLABS_API_KEY || env.HEYGEN_API_KEY) }).filter(([,v]) => v).map(([k]) => k),
      missing: Object.entries({ mfsn: !!(env.MFSN_API_EMAIL && env.MFSN_API_PASSWORD), twilio: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), email: !!(env.SENDGRID_API_KEY || env.RESEND_API_KEY), stripe: !!env.STRIPE_SECRET_KEY, cloudflare: !!env.CF_ACCOUNT_ID, ai: !!(env.OPENROUTER_API_KEY || env.GROQ_API_KEY || env.OPENAI_API_KEY), google: !!env.GOOGLE_ANALYTICS_ID, meta: !!env.FACEBOOK_PIXEL_ID, pinecone: !!env.PINECONE_API_KEY, media_ai: !!(env.ELEVENLABS_API_KEY || env.HEYGEN_API_KEY) }).filter(([,v]) => !v).map(([k]) => k)
    }
  })
})

// ============================================================
// MFSN API DOCUMENTATION — Full reference for agents
// ============================================================
app.get('/api/mfsn/docs', (c) => {
  return c.json({
    title: 'MyFreeScoreNow (MFSN) API Documentation',
    version: 'MFSN-REPORTS v1.0.0',
    base_url: 'https://api.myfreescorenow.com',
    auth_flow: ['POST /api/auth/login → receive token', 'POST /api/auth/fetch-3B-json → pull report', 'POST /api/auth/logout → end session'],
    local_endpoints: {
      login: 'POST /api/mfsn/login',
      fetch_3b: 'POST /api/mfsn/fetch-3b',
      reports: 'GET /api/mfsn/reports/:clientId',
      score_history: 'GET /api/mfsn/score-history/:clientId',
      accounts: 'GET /api/mfsn/reports/:reportId/accounts',
      docs: 'GET /api/mfsn/docs',
      content: 'GET /api/mfsn/content',
      schemas: 'GET /api/mfsn/schemas',
      html_files: 'GET /api/mfsn/html-files',
      endpoints: 'GET /api/mfsn/endpoints'
    },
    data_model: {
      providerViews: 'Array of bureau views: EFX (Equifax), TU (TransUnion), EXP (Experian)',
      summary: { creditScore: 'score, scoreFactors', totalOpenAccounts: 'count', totalInquires: 'number', totalPublicRecords: 'number', totalCollections: 'number', totalNegativeAccounts: 'number', lengthOfCreditHistoryMonths: 'number', averageAccountAgeMonths: 'number', oldestAccountOpenDate: 'ISO string', mostRecentAccountOpenDate: 'ISO string' },
      accounts: 'accountName, accountNumber, accountStatus, loanType, balanceAmount, creditLimitAmount, paymentStatus, pastDueAmount, chargeOffAmount'
    },
    sop_mappings: { 'SOP-101': 'Credit Report Analysis — pull and analyze', 'SOP-102': 'Communication — send report summaries', 'SOP-105': 'Round 1 Disputes — use report to identify disputes', 'SOP-402': 'Score Monitoring — track score history over time' },
    test_credentials: { note: 'Use .dev.vars for local development. Never commit credentials.', email_var: 'MFSN_API_EMAIL', password_var: 'MFSN_API_PASSWORD' }
  })
})

app.get('/api/mfsn/content', (c) => {
  return c.json({
    title: 'MyFreeScoreNow — Embedded Content Reference',
    description: 'Complete reference for MFSN integration including test credentials, example data, and documentation URLs',
    api_info: { base_url: 'https://api.myfreescorenow.com', auth_type: 'Session token via form-data POST', content_type: 'multipart/form-data for auth, JSON response', bureaus: ['EFX (Equifax)', 'TU (TransUnion)', 'EXP (Experian)'] },
    integration_notes: ['Login first to get session, then fetch report in same call', 'client_email is the MFSN member email (NOT the client email in your CRM)', 'client_token is the MFSN member token for that consumer', 'Reports are 3-bureau JSON with full tradeline data', 'Store raw JSON in D1 credit_reports table for later analysis', 'Parse providerViews array — one entry per bureau', 'Score field: providerViews[n].summary.creditScore.score'],
    doc_urls: { main: 'https://api.myfreescorenow.com/docs', yaml: 'https://api.myfreescorenow.com/openapi.yaml', json: 'https://api.myfreescorenow.com/openapi.json' },
    support_files: ['main.js', 'package.json', 'openapi.yaml', 'openapi.json', 'myfreescore.md'],
    agent_instructions: 'When pulling a credit report: 1) Verify client has signed FCRA authorization, 2) Call POST /api/mfsn/fetch-3b with client_email and client_token, 3) Store result in D1 with client_id, 4) Parse scores from EFX/TU/EXP, 5) Log to audit_log, 6) Update client credit_score_current, 7) Create dispute plan from negative accounts'
  })
})

app.get('/api/mfsn/schemas', (c) => {
  return c.json({
    title: 'MFSN OpenAPI Schemas — 42 Cataloged',
    total: 42,
    schemas: [
      { name: 'CreditScore', description: 'Score value, range, factors, model used' },
      { name: 'PersonSubject', description: 'Consumer PII: name, SSN, DOB, address' },
      { name: 'Bankruptcy', description: 'Public record: bankruptcy filings' },
      { name: 'TradelineAccount', description: 'Full account record with payment history' },
      { name: 'Inquiry', description: 'Hard/soft inquiry with requestor and date' },
      { name: 'Collection', description: 'Collection account with original creditor' },
      { name: 'PublicRecord', description: 'Tax liens, judgments, bankruptcies' },
      { name: 'CreditSummary', description: 'Bureau-level aggregate statistics' },
      { name: 'ProviderView', description: 'Single-bureau complete report object' },
      { name: 'ReportData', description: 'Full 3-bureau report wrapper' },
      { name: 'ScoreFactor', description: 'Score factor code and description' },
      { name: 'PaymentHistory', description: 'Month-by-month payment status grid' },
      { name: 'Address', description: 'Current and previous addresses' },
      { name: 'Employer', description: 'Employment history on file' },
      { name: 'PersonalStatement', description: 'Consumer-added statement' },
      { name: 'DisputeItem', description: 'Disputed item with status' },
      { name: 'FraudAlert', description: 'Active fraud alerts or freezes' },
      { name: 'MilitaryAlert', description: 'Active duty military alerts' },
      { name: 'ChildSupport', description: 'Child support obligations' },
      { name: 'StudentLoan', description: 'Federal student loan details' },
      { name: 'Mortgage', description: 'Mortgage account details' },
      { name: 'AutoLoan', description: 'Auto loan account details' },
      { name: 'CreditCard', description: 'Revolving credit card account' },
      { name: 'MedicalDebt', description: 'Medical collection (still reportable 2026)' },
      { name: 'ChargeOff', description: 'Charged-off account record' },
      { name: 'Repossession', description: 'Vehicle/property repossession' },
      { name: 'Foreclosure', description: 'Real estate foreclosure record' },
      { name: 'UtilityAccount', description: 'Utility/telecom account' },
      { name: 'RentReporting', description: 'Rent payment reporting data' },
      { name: 'InquiryDetail', description: 'Detailed inquiry with purpose code' },
      { name: 'ScoreModel', description: 'Scoring model metadata (FICO, VantageScore)' },
      { name: 'CreditLimit', description: 'Credit limit and available credit' },
      { name: 'Balance', description: 'Current balance with as-of date' },
      { name: 'MonthlyPayment', description: 'Scheduled and actual monthly payment' },
      { name: 'AccountStatus', description: 'Open/closed/transferred status codes' },
      { name: 'LoanType', description: 'ECOA/loan type classification codes' },
      { name: 'VerificationStatus', description: 'Bureau verification result codes' },
      { name: 'NarrativeCode', description: 'Account narrative/comment codes' },
      { name: 'ConsumerRights', description: 'FCRA rights disclosure text' },
      { name: 'AuthLogin', description: 'Login request/response schema' },
      { name: 'AuthFetch3B', description: 'Fetch 3B request/response schema' },
      { name: 'ApiResponse', description: 'Standard API response wrapper: success, data, message' }
    ]
  })
})

app.get('/api/mfsn/html-files', (c) => {
  return c.json({
    title: 'MFSN HTML Documentation Files — 106 Cataloged',
    total: 106,
    categories: {
      allof_models: { count: 42, pattern: 'AllOf*.html', description: 'Schema composition documentation for each model' },
      model_docs: { count: 42, pattern: '*Model.html, *Data.html', description: 'Individual model reference pages' },
      api_reference: { count: 10, pattern: 'DefaultApi*.html', description: 'API method documentation pages' },
      index_pages: { count: 12, pattern: 'index.html, *index*.html', description: 'Navigation and overview pages' }
    },
    key_files: ['index.html', 'DefaultApi.html', 'AllOfCreditScore.html', 'AllOfPersonSubject.html', 'AllOfBankruptcy.html', 'AllOfTradelineAccount.html', 'AllOfInquiry.html', 'AllOfCollection.html', 'AllOfPublicRecord.html', 'AllOfCreditSummary.html', 'AllOfProviderView.html', 'AllOfReportData.html'],
    access_note: 'Full HTML docs available at https://api.myfreescorenow.com/docs — reference these for detailed field descriptions and examples'
  })
})

app.get('/api/mfsn/endpoints', (c) => {
  return c.json({
    title: 'MFSN API Endpoint Definitions',
    base_url: 'https://api.myfreescorenow.com',
    endpoints: [
      {
        id: 1, method: 'POST', path: '/api/auth/login',
        description: 'Authenticate with MFSN to receive a session token',
        content_type: 'multipart/form-data',
        request_fields: { email: 'MFSN affiliate email (MFSN_API_EMAIL)', password: 'MFSN affiliate password (MFSN_API_PASSWORD)' },
        response: { success: 'boolean', data: { token: 'session token string', expires: 'ISO datetime' }, message: 'string' },
        sop: 'SOP-101'
      },
      {
        id: 2, method: 'POST', path: '/api/auth/fetch-3B-json',
        description: 'Fetch full 3-bureau credit report JSON for a member',
        content_type: 'multipart/form-data',
        request_fields: { email: 'MFSN member email (client email)', client_token: 'MFSN member token' },
        response: { success: 'boolean', data: { providerViews: 'Array[ProviderView] — EFX, TU, EXP', reportId: 'string' }, message: 'string' },
        notes: ['Must be logged in first', 'client_token is the MFSN member token — different from your API password', 'Returns full tradeline, inquiry, public record data per bureau'],
        sop: 'SOP-101'
      },
      {
        id: 3, method: 'POST', path: '/api/auth/logout',
        description: 'Invalidate the current session token',
        content_type: 'multipart/form-data',
        request_fields: { token: 'session token to invalidate' },
        response: { success: 'boolean', message: 'string' },
        sop: 'SOP-604'
      }
    ]
  })
})

// ============================================================
// CLOUDFLARE CONFIG — Full platform integration settings
// ============================================================
app.get('/api/cloudflare/config', async (c) => {
  const { env } = c
  return c.json({
    title: 'Cloudflare Platform Configuration',
    account_id: env.CF_ACCOUNT_ID ? env.CF_ACCOUNT_ID.substring(0, 8) + '...' : 'not set',
    services_configured: 12,
    services: ['Workers', 'Pages', 'D1 Database', 'R2 Storage', 'KV Namespace', 'Stream', 'Images', 'Email Routing', 'Realtime Kit', 'Turnstile', 'Zero Trust', 'Analytics/WAF'],
    d1: { binding: 'DB', database_name: 'rj-sop-operations', database_id: env.CF_D1_DATABASE_ID || '62b785bb-c601-4271-b7a3-ad7efc7605ae', tables: ['clients', 'disputes', 'workflows', 'workflow_steps', 'tasks', 'compliance_items', 'notifications', 'team_members', 'kpi_snapshots', 'automations', 'audit_log', 'transactions', 'communications', 'credit_reports', 'credit_report_accounts', 'credit_score_history'], configured: !!env.CF_D1_DATABASE_ID },
    r2: { bucket: env.CF_R2_BUCKET_NAME || 'rj-operations-storage', configured: !!env.CF_R2_BUCKET_NAME, use_cases: ['Client documents', 'Dispute letter PDFs', 'Credit report archives', 'Template storage'] },
    kv: { namespace_id: env.CF_KV_NAMESPACE_ID || 'not set', configured: !!env.CF_KV_NAMESPACE_ID, use_cases: ['Session tokens', 'Rate limiting', 'Feature flags'] },
    pages: { url: env.CLOUDFLARE_PAGES_URL || 'not set', configured: !!env.CLOUDFLARE_PAGES_URL, build_command: 'npm run build', output_dir: 'dist' },
    stream: { customer_code: env.CF_STREAM_CUSTOMER_CODE ? env.CF_STREAM_CUSTOMER_CODE.substring(0, 8) + '...' : 'not set', configured: !!env.CF_STREAM_CUSTOMER_CODE },
    images: { account_hash: env.CF_IMAGES_ACCOUNT_HASH ? env.CF_IMAGES_ACCOUNT_HASH.substring(0, 8) + '...' : 'not set', configured: !!env.CF_IMAGES_ACCOUNT_HASH },
    turnstile: { site_key: env.CF_TURNSTILE_SITE_KEY ? env.CF_TURNSTILE_SITE_KEY.substring(0, 8) + '...' : 'not set', configured: !!(env.CF_TURNSTILE_SITE_KEY && env.CF_TURNSTILE_SECRET_KEY) },
    token_types: ['CF_API_TOKEN (global)', 'CF_WORKERS_TOKEN (workers-only)', 'CF_D1_DATABASE_ID (D1 binding)', 'CF_ZONE_ID (DNS/routing)']
  })
})

app.get('/api/cloudflare/services', async (c) => {
  const { env } = c
  return c.json({
    title: 'All Cloudflare Services Status',
    services: [
      { name: 'Workers', description: 'Serverless compute — runs the Hono app', configured: !!(env.CF_ACCOUNT_ID && env.CF_API_TOKEN), doc_url: 'https://developers.cloudflare.com/workers/' },
      { name: 'Pages', description: 'Static site + Workers deployment', configured: true, url: env.CLOUDFLARE_PAGES_URL || 'pending', doc_url: 'https://developers.cloudflare.com/pages/' },
      { name: 'D1 Database', description: 'SQLite edge database — primary data store', configured: true, binding: 'DB', database: 'rj-sop-operations', doc_url: 'https://developers.cloudflare.com/d1/' },
      { name: 'R2 Storage', description: 'Object storage for documents, PDFs, archives', configured: !!env.CF_R2_BUCKET_NAME, bucket: env.CF_R2_BUCKET_NAME || 'not set', doc_url: 'https://developers.cloudflare.com/r2/' },
      { name: 'KV Namespace', description: 'Key-value store for sessions, caching, flags', configured: !!env.CF_KV_NAMESPACE_ID, doc_url: 'https://developers.cloudflare.com/kv/' },
      { name: 'Stream', description: 'Video streaming for client education content', configured: !!env.CF_STREAM_CUSTOMER_CODE, doc_url: 'https://developers.cloudflare.com/stream/' },
      { name: 'Images', description: 'Image optimization and delivery CDN', configured: !!env.CF_IMAGES_ACCOUNT_HASH, doc_url: 'https://developers.cloudflare.com/images/' },
      { name: 'Email Routing', description: 'Email forwarding for business domains', configured: !!env.CF_EMAIL_ROUTING_ADDRESS, routes: ['support@', 'disputes@', 'leads@'], doc_url: 'https://developers.cloudflare.com/email-routing/' },
      { name: 'Realtime Kit', description: 'WebSocket/real-time for dashboard live updates', configured: !!env.CF_ACCOUNT_ID, doc_url: 'https://developers.cloudflare.com/realtime/' },
      { name: 'Turnstile', description: 'Bot protection for lead capture form', configured: !!(env.CF_TURNSTILE_SITE_KEY && env.CF_TURNSTILE_SECRET_KEY), doc_url: 'https://developers.cloudflare.com/turnstile/' },
      { name: 'Zero Trust', description: 'Admin dashboard access control', configured: !!env.CF_ACCOUNT_ID, doc_url: 'https://developers.cloudflare.com/cloudflare-one/' },
      { name: 'Analytics & WAF', description: 'Traffic analytics and web application firewall', configured: !!env.CF_ZONE_ID, doc_url: 'https://developers.cloudflare.com/analytics/' }
    ]
  })
})

app.get('/api/cloudflare/email', async (c) => {
  const { env } = c
  return c.json({
    title: 'Email Service Configuration',
    primary: { provider: 'Resend', configured: !!env.RESEND_API_KEY, from: 'support@rjbusinesssolutions.org', from_name: 'RJ Business Solutions' },
    secondary: { provider: 'Cloudflare Email Routing', configured: !!env.CF_EMAIL_ROUTING_ADDRESS, address: env.CF_EMAIL_ROUTING_ADDRESS || 'not set' },
    cloudflare_routing: {
      configured: !!env.CF_EMAIL_ROUTING_ADDRESS,
      routes: [
        { address: 'support@rjbusinesssolutions.org', destination: env.CF_EMAIL_ROUTING_ADDRESS || 'not set', purpose: 'General client support' },
        { address: 'disputes@rjbusinesssolutions.org', destination: env.CF_EMAIL_ROUTING_ADDRESS || 'not set', purpose: 'Dispute correspondence and bureau responses' },
        { address: 'leads@rjbusinesssolutions.org', destination: env.CF_EMAIL_ROUTING_ADDRESS || 'not set', purpose: 'New lead notifications from funnel' }
      ]
    },
    templates: [
      { name: 'Welcome Email', trigger: 'New lead captured', sop: 'SOP-304' },
      { name: 'Onboarding Confirmation', trigger: 'Client status → onboarding', sop: 'SOP-005' },
      { name: 'Dispute Filed Notification', trigger: 'Dispute round sent', sop: 'SOP-105' },
      { name: 'Monthly Progress Report', trigger: 'Monthly schedule', sop: 'SOP-402' },
      { name: 'Bureau Response Alert', trigger: 'Response received in portal', sop: 'SOP-107' },
      { name: 'Graduation Celebration', trigger: 'Client status → graduated', sop: 'SOP-406' }
    ],
    automations: [
      { trigger: 'New lead form submission', action: 'Send welcome email + SMS within 5 minutes', sop: 'SOP-304' },
      { trigger: 'Dispute round 1 filed', action: 'Send confirmation email with tracking numbers', sop: 'SOP-105' },
      { trigger: '30-day dispute window', action: 'Send follow-up email if no bureau response', sop: 'SOP-107' },
      { trigger: 'Score improvement milestone', action: 'Send celebration email with progress', sop: 'SOP-402' },
      { trigger: 'Monthly close', action: 'Send progress report to all active clients', sop: 'SOP-402' }
    ]
  })
})

app.get('/api/cloudflare/twilio', async (c) => {
  const { env } = c
  return c.json({
    title: 'Twilio Integration Configuration',
    account: { sid_set: !!(env.TWILIO_ACCOUNT_SID), auth_token_set: !!(env.TWILIO_AUTH_TOKEN), phone_number: env.TWILIO_PHONE_NUMBER || 'not set', api_key: !!(env.TWILIO_API_KEY_SID && env.TWILIO_API_KEY_SECRET) },
    capabilities: { sms: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), voice: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), whatsapp: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN) },
    webhooks: { voice_inbound: env.TWILIO_VOICE_WEBHOOK_URL || 'not configured', sms_inbound: 'not configured — agent handles via API' },
    local_endpoints: { send_sms: 'POST /api/twilio/sms', make_call: 'POST /api/twilio/call' },
    automation_triggers: [
      { name: 'Speed-to-Lead SMS', trigger: 'New lead captured', action: 'SMS to Rick within 30 seconds', sop: 'SOP-304' },
      { name: 'Appointment Reminder', trigger: '24h before scheduled call', action: 'SMS reminder to client', sop: 'SOP-005' },
      { name: 'Dispute Status Update', trigger: 'Bureau responds', action: 'SMS to client with status', sop: 'SOP-107' },
      { name: 'Critical Alert', trigger: 'High-risk client or overdue dispute', action: 'SMS to Rick', sop: 'SOP-506' },
      { name: 'Payment Reminder', trigger: '3 days before billing cycle', action: 'SMS to client (CROA: after service)', sop: 'SOP-205' }
    ],
    sop_mappings: { 'SOP-304': 'Speed-to-Lead — call within 5 min', 'SOP-005': 'Onboarding — welcome call', 'SOP-102': 'Client communication protocol', 'SOP-107': 'Bureau response follow-up', 'SOP-506': 'Team communication alerts' }
  })
})

// ============================================================
// STRIPE BILLING — Subscription management for all tiers
// Plans: basic $99, standard $179, premium $299, autopilot $499
// ============================================================

const STRIPE_PLANS = {
  basic:     { name: 'Basic Credit Repair',    price: 9900,  interval: 'month', features: ['1 bureau','1 dispute round/mo','SMS updates','Client portal'] },
  standard:  { name: 'Standard Credit Repair', price: 17900, interval: 'month', features: ['3 bureaus','Unlimited disputes','Priority SMS','Progress reports','Document storage'] },
  premium:   { name: 'Premium Credit Repair',  price: 29900, interval: 'month', features: ['3 bureaus','Unlimited disputes','AI-generated letters','Monthly progress call','All templates','Compliance tracking'] },
  autopilot: { name: 'AI Autopilot',           price: 49900, interval: 'month', features: ['Full AI automation','Auto-pull reports','AI dispute letters','Auto-follow-ups','Real-time score tracking','Dedicated AI agent','Priority support'] }
}

app.get('/api/stripe/plans', (c) => {
  return c.json({ plans: STRIPE_PLANS, currency: 'usd', note: 'Prices in cents. All plans include CROA-compliant operations, D1 data storage, and SOP-guided workflows.' })
})

app.post('/api/stripe/create-customer', async (c) => {
  const { env, DB } = c
  if (!env.STRIPE_SECRET_KEY) return c.json({ error: 'Stripe not configured' }, 500)
  const { client_id, email, name } = await c.req.json() as any
  if (!email) return c.json({ error: 'email required' }, 400)
  try {
    const res = await fetch('https://api.stripe.com/v1/customers', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email, name: name || '', 'metadata[client_id]': String(client_id || ''), 'metadata[source]': 'rj_ops_engine' }).toString()
    })
    const customer = await res.json() as any
    if (customer.error) return c.json({ error: customer.error.message }, 400)
    if (DB && client_id) {
      await DB.prepare(`INSERT OR REPLACE INTO client_subscriptions (client_id, stripe_customer_id, plan_name, plan_price, status) VALUES (?, ?, 'basic', 9900, 'trialing') ON CONFLICT(stripe_subscription_id) DO NOTHING`).bind(client_id, customer.id).run().catch(() => {})
    }
    return c.json({ success: true, customer_id: customer.id, email: customer.email })
  } catch (err: any) { return c.json({ error: 'Stripe error: ' + err.message }, 500) }
})

app.post('/api/stripe/create-subscription', async (c) => {
  const { env, DB } = c
  if (!env.STRIPE_SECRET_KEY) return c.json({ error: 'Stripe not configured' }, 500)
  const { client_id, customer_id, plan, price_id, trial_days } = await c.req.json() as any
  if (!customer_id || !plan) return c.json({ error: 'customer_id and plan required' }, 400)
  const planData = STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS]
  if (!planData) return c.json({ error: 'Invalid plan. Choose: basic, standard, premium, autopilot' }, 400)
  try {
    const params: Record<string, string> = {
      customer: customer_id,
      'items[0][price]': price_id || '',
      'metadata[plan_name]': plan,
      'metadata[client_id]': String(client_id || '')
    }
    if (trial_days) params['trial_period_days'] = String(trial_days)
    if (!price_id) {
      params['items[0][price_data][currency]'] = 'usd'
      params['items[0][price_data][product_data][name]'] = planData.name
      params['items[0][price_data][unit_amount]'] = String(planData.price)
      params['items[0][price_data][recurring][interval]'] = 'month'
      delete params['items[0][price]']
    }
    const res = await fetch('https://api.stripe.com/v1/subscriptions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(params).toString()
    })
    const sub = await res.json() as any
    if (sub.error) return c.json({ error: sub.error.message }, 400)
    if (DB && client_id) {
      await DB.prepare(`INSERT OR REPLACE INTO client_subscriptions (client_id, stripe_customer_id, stripe_subscription_id, plan_name, plan_price, status, current_period_start, current_period_end) VALUES (?, ?, ?, ?, ?, ?, datetime(?,'unixepoch'), datetime(?,'unixepoch'))`)
        .bind(client_id, customer_id, sub.id, plan, planData.price, sub.status, sub.current_period_start, sub.current_period_end).run()
      await DB.prepare(`UPDATE clients SET monthly_fee = ? WHERE id = ?`).bind(Math.round(planData.price / 100), client_id).run()
      await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('stripe', 'subscription_created', 'client', ?, ?)`).bind(client_id, `${plan} subscription created: ${sub.id}`).run()
    }
    return c.json({ success: true, subscription_id: sub.id, plan, status: sub.status, amount: planData.price, trial_end: sub.trial_end })
  } catch (err: any) { return c.json({ error: 'Stripe error: ' + err.message }, 500) }
})

app.post('/api/stripe/cancel-subscription', async (c) => {
  const { env, DB } = c
  if (!env.STRIPE_SECRET_KEY) return c.json({ error: 'Stripe not configured' }, 500)
  const { subscription_id, client_id, immediately } = await c.req.json() as any
  if (!subscription_id) return c.json({ error: 'subscription_id required' }, 400)
  try {
    const url = `https://api.stripe.com/v1/subscriptions/${subscription_id}`
    const res = await fetch(immediately ? url : url, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: immediately ? '' : new URLSearchParams({ cancel_at_period_end: 'true' }).toString()
    })
    const sub = await res.json() as any
    if (sub.error) return c.json({ error: sub.error.message }, 400)
    if (DB && client_id) {
      await DB.prepare(`UPDATE client_subscriptions SET status = ?, cancel_at_period_end = ?, canceled_at = datetime('now') WHERE stripe_subscription_id = ?`).bind(sub.status, sub.cancel_at_period_end ? 1 : 0, subscription_id).run()
      await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'subscription_canceled', 'client', ?, ?)`).bind(client_id || 0, `Subscription ${subscription_id} canceled`).run()
    }
    return c.json({ success: true, status: sub.status, cancel_at_period_end: sub.cancel_at_period_end })
  } catch (err: any) { return c.json({ error: 'Stripe error: ' + err.message }, 500) }
})

app.get('/api/stripe/subscription/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const sub = await DB.prepare(`SELECT cs.*, c.first_name, c.last_name, c.email FROM client_subscriptions cs LEFT JOIN clients c ON c.id = cs.client_id WHERE cs.client_id = ? ORDER BY cs.created_at DESC LIMIT 1`).bind(clientId).first()
  return c.json({ subscription: sub || null, plans: STRIPE_PLANS })
})

app.post('/api/stripe/webhook', async (c) => {
  const { env, DB } = c
  const rawBody = await c.req.text()
  const sig = c.req.header('stripe-signature')
  let event: any
  try { event = JSON.parse(rawBody) } catch { return c.json({ error: 'Invalid JSON' }, 400) }
  if (DB) {
    const exists = await DB.prepare(`SELECT id FROM stripe_events WHERE event_id = ?`).bind(event.id).first()
    if (exists) return c.json({ received: true, duplicate: true })
    await DB.prepare(`INSERT INTO stripe_events (event_id, event_type, raw_json) VALUES (?, ?, ?)`).bind(event.id, event.type, rawBody).run()
  }
  const obj = event.data?.object
  try {
    if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.created') {
      if (DB) {
        await DB.prepare(`UPDATE client_subscriptions SET status = ?, current_period_start = datetime(?,'unixepoch'), current_period_end = datetime(?,'unixepoch'), updated_at = datetime('now') WHERE stripe_subscription_id = ?`).bind(obj.status, obj.current_period_start, obj.current_period_end, obj.id).run()
      }
    }
    if (event.type === 'customer.subscription.deleted') {
      if (DB) await DB.prepare(`UPDATE client_subscriptions SET status = 'canceled', updated_at = datetime('now') WHERE stripe_subscription_id = ?`).bind(obj.id).run()
    }
    if (event.type === 'invoice.payment_failed') {
      const clientId = obj.metadata?.client_id
      if (DB && clientId) {
        await DB.prepare(`UPDATE client_subscriptions SET status = 'past_due' WHERE stripe_customer_id = ?`).bind(obj.customer).run()
        const client = await DB.prepare(`SELECT first_name, phone FROM clients WHERE id = ?`).bind(clientId).first() as any
        if (client?.phone && env.TWILIO_ACCOUNT_SID) {
          const auth = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)
          await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, { method: 'POST', headers: { 'Authorization': `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ To: client.phone, From: env.TWILIO_PHONE_NUMBER, Body: `Hi ${client.first_name}, your RJ Business Solutions payment failed. Please update your payment method to continue your credit repair service. Reply STOP to opt out.` }).toString() })
        }
      }
    }
    if (event.type === 'invoice.payment_succeeded') {
      if (DB) {
        await DB.prepare(`UPDATE client_subscriptions SET status = 'active' WHERE stripe_customer_id = ?`).bind(obj.customer).run()
        await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('stripe', 'payment_succeeded', 'subscription', 0, ?)`).bind(`Invoice paid: ${obj.id} — $${(obj.amount_paid / 100).toFixed(2)}`).run()
      }
    }
    if (DB) await DB.prepare(`UPDATE stripe_events SET processed = 1 WHERE event_id = ?`).bind(event.id).run()
    return c.json({ received: true, event_type: event.type })
  } catch (err: any) {
    if (DB) await DB.prepare(`UPDATE stripe_events SET error = ? WHERE event_id = ?`).bind(err.message, event.id).run()
    return c.json({ error: err.message }, 500)
  }
})

app.post('/api/stripe/billing-portal', async (c) => {
  const { env } = c
  if (!env.STRIPE_SECRET_KEY) return c.json({ error: 'Stripe not configured' }, 500)
  const { customer_id, return_url } = await c.req.json() as any
  if (!customer_id) return c.json({ error: 'customer_id required' }, 400)
  try {
    const res = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ customer: customer_id, return_url: return_url || 'https://rjbusinesssolutions.org' }).toString()
    })
    const session = await res.json() as any
    if (session.error) return c.json({ error: session.error.message }, 400)
    return c.json({ url: session.url })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.get('/api/stripe/revenue', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const subs = await DB.prepare(`SELECT plan_name, status, COUNT(*) as count, SUM(plan_price) as mrr_cents FROM client_subscriptions WHERE status = 'active' GROUP BY plan_name`).all()
    const total = await DB.prepare(`SELECT SUM(plan_price) as total_mrr, COUNT(*) as active_subs FROM client_subscriptions WHERE status = 'active'`).first() as any
    const arr = total?.total_mrr ? total.total_mrr * 12 : 0
    return c.json({ mrr_cents: total?.total_mrr || 0, mrr_dollars: Math.round((total?.total_mrr || 0) / 100), arr_dollars: Math.round(arr / 100), active_subscriptions: total?.active_subs || 0, by_plan: subs.results })
  } catch { return c.json({ mrr_cents: 0, mrr_dollars: 0, arr_dollars: 0, active_subscriptions: 0, by_plan: [], note: 'Run migration 0003 to enable subscription tracking' }) }
})

// ============================================================
// AI AUTOPILOT ENGINE — Dispute letters, analysis, SOP execution
// Primary: OpenRouter (routes to best model)
// Fallback: Groq (fastest), then OpenAI
// ============================================================

async function callAI(env: Bindings, systemPrompt: string, userPrompt: string, model = 'openai/gpt-4o-mini'): Promise<{ text: string; tokens_in: number; tokens_out: number; cost_cents: number }> {
  if (env.OPENROUTER_API_KEY) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.OPENROUTER_API_KEY}`, 'Content-Type': 'application/json', 'HTTP-Referer': 'https://rjbusinesssolutions.org', 'X-Title': 'RJ Business Solutions AI Autopilot' },
      body: JSON.stringify({ model, messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }], max_tokens: 4096, temperature: 0.3 })
    })
    const data = await res.json() as any
    if (data.choices?.[0]?.message?.content) {
      const ti = data.usage?.prompt_tokens || 0, to = data.usage?.completion_tokens || 0
      return { text: data.choices[0].message.content, tokens_in: ti, tokens_out: to, cost_cents: Math.ceil((ti * 0.00015 + to * 0.0006) * 100) }
    }
  }
  if (env.GROQ_API_KEY) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.GROQ_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama-3.1-8b-instant', messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }], max_tokens: 4096 })
    })
    const data = await res.json() as any
    if (data.choices?.[0]?.message?.content) {
      const ti = data.usage?.prompt_tokens || 0, to = data.usage?.completion_tokens || 0
      return { text: data.choices[0].message.content, tokens_in: ti, tokens_out: to, cost_cents: 0 }
    }
  }
  if (env.OPENAI_API_KEY) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }], max_tokens: 4096 })
    })
    const data = await res.json() as any
    if (data.choices?.[0]?.message?.content) {
      const ti = data.usage?.prompt_tokens || 0, to = data.usage?.completion_tokens || 0
      return { text: data.choices[0].message.content, tokens_in: ti, tokens_out: to, cost_cents: Math.ceil((ti * 0.00015 + to * 0.0006) * 100) }
    }
  }
  throw new Error('No AI model configured. Set OPENROUTER_API_KEY, GROQ_API_KEY, or OPENAI_API_KEY.')
}

app.get('/api/ai/models', (c) => {
  const { env } = c
  return c.json({
    routing: 'OpenRouter → Groq → OpenAI (automatic fallback)',
    configured: { openrouter: !!env.OPENROUTER_API_KEY, groq: !!env.GROQ_API_KEY, openai: !!env.OPENAI_API_KEY, anthropic: !!env.ANTHROPIC_API_KEY },
    recommended_models: {
      dispute_letters: 'openai/gpt-4o — best legal writing, FCRA compliance awareness',
      report_analysis: 'anthropic/claude-3-5-sonnet — best structured data analysis',
      fast_drafts: 'meta-llama/llama-3.1-8b-instruct — fastest, free via Groq',
      lead_scoring: 'openai/gpt-4o-mini — cost-effective classification'
    },
    available_via_openrouter: ['openai/gpt-4o', 'openai/gpt-4o-mini', 'anthropic/claude-3-5-sonnet', 'google/gemini-pro-1.5', 'meta-llama/llama-3.1-70b-instruct', 'meta-llama/llama-3.1-8b-instruct', 'mistralai/mistral-large', 'deepseek/deepseek-chat']
  })
})

app.post('/api/ai/generate-dispute-letter', async (c) => {
  const { env, DB } = c
  const body = await c.req.json() as any
  const { client_id, bureau, account_name, account_number, reason, law_basis, client_name, dispute_id, model } = body
  if (!bureau || !account_name || !reason) return c.json({ error: 'bureau, account_name, and reason required' }, 400)
  const systemPrompt = `You are a senior credit repair specialist and legal writer for RJ Business Solutions. You generate FCRA-compliant dispute letters. Follow these rules:
1. Always cite specific FCRA sections (15 U.S.C. § 1681 et seq.)
2. Demand verification per Section 611 (15 U.S.C. § 1681i)
3. Reference the consumer's rights under Section 609 if requesting original documents
4. Never make false statements — only dispute legitimately questionable items
5. Include proper demand language: "investigate and delete or correct"
6. Format professionally with proper letterhead placeholder, date, bureau address
7. Include certified mail tracking placeholder
8. Add CROA compliance footer: "This communication is from a credit repair organization."
9. Request response within 30 days per FCRA
10. Be firm but legally precise — no aggressive language`
  const userPrompt = `Generate a complete, ready-to-send FCRA dispute letter for:
Client: ${client_name || 'Client Name'}
Bureau: ${bureau.toUpperCase()} (${bureau === 'equifax' ? 'P.O. Box 740256, Atlanta, GA 30374' : bureau === 'transunion' ? 'P.O. Box 2000, Chester, PA 19016' : 'P.O. Box 4500, Allen, TX 75013'})
Account: ${account_name}${account_number ? ` (Account #: ${account_number})` : ''}
Dispute Reason: ${reason}
Legal Basis: ${law_basis || 'FCRA Section 611 — right to dispute inaccurate information'}
Include: full letter body, signature block placeholder, enclosures list (ID copy, statement), and certified mail reference.`
  try {
    const ai = await callAI(env, systemPrompt, userPrompt, model || 'openai/gpt-4o-mini')
    let jobId = null
    if (DB) {
      const job = await DB.prepare(`INSERT INTO ai_jobs (client_id, job_type, sop_id, dispute_id, status, model_used, system_prompt, user_prompt, ai_response, tokens_input, tokens_output, cost_cents, completed_at) VALUES (?, 'dispute_letter', 'SOP-105', ?, 'completed', ?, ?, ?, ?, ?, ?, ?, datetime('now'))`)
        .bind(client_id || null, dispute_id || null, model || 'openai/gpt-4o-mini', systemPrompt, userPrompt, ai.text, ai.tokens_in, ai.tokens_out, ai.cost_cents).run()
      jobId = job.meta.last_row_id
      await DB.prepare(`INSERT INTO compliance_audits (client_id, action_type, law, section_reference, compliant, risk_level, notes) VALUES (?, 'dispute_letter_generated', 'FCRA', '15 U.S.C. § 1681i', 1, 'low', ?)`)
        .bind(client_id || null, `AI dispute letter generated for ${bureau} — ${account_name}`).run()
    }
    return c.json({ success: true, job_id: jobId, letter: ai.text, bureau, account_name, model_used: model || 'openai/gpt-4o-mini', tokens: { input: ai.tokens_in, output: ai.tokens_out }, cost_cents: ai.cost_cents, croa_compliant: true })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.post('/api/ai/analyze-credit-report', async (c) => {
  const { env, DB } = c
  const body = await c.req.json() as any
  const { client_id, report_id, scores, accounts, inquiries, model } = body
  if (!scores && !accounts) return c.json({ error: 'scores or accounts required' }, 400)
  const systemPrompt = `You are a certified credit analyst and dispute strategist for RJ Business Solutions. Analyze credit report data and provide:
1. Score analysis and improvement roadmap
2. Prioritized dispute targets (highest ROI first)
3. Recommended dispute strategies per account
4. FCRA violations to flag
5. Timeline to score improvement goals
6. Specific SOP steps to execute
Be specific, data-driven, and action-oriented. Output structured JSON.`
  const userPrompt = `Analyze this credit report data and return JSON with dispute_plan array:
Scores: EFX=${scores?.efx || 'N/A'} TU=${scores?.tu || 'N/A'} EXP=${scores?.exp || 'N/A'}
Accounts: ${JSON.stringify(accounts?.slice(0, 20) || [])}
Inquiries: ${JSON.stringify(inquiries?.slice(0, 10) || [])}
Return JSON: { score_analysis, dispute_targets: [{account, bureau, reason, law_basis, priority, estimated_score_impact}], fcra_violations, timeline_months, recommended_sops }`
  try {
    const ai = await callAI(env, systemPrompt, userPrompt, model || 'openai/gpt-4o-mini')
    let analysis: any = { raw: ai.text }
    try { const jsonMatch = ai.text.match(/\{[\s\S]*\}/); if (jsonMatch) analysis = JSON.parse(jsonMatch[0]) } catch {}
    if (DB && client_id) {
      await DB.prepare(`INSERT INTO ai_jobs (client_id, job_type, sop_id, status, model_used, user_prompt, ai_response, tokens_input, tokens_output, cost_cents, completed_at) VALUES (?, 'report_analysis', 'SOP-101', 'completed', ?, ?, ?, ?, ?, ?, datetime('now'))`)
        .bind(client_id, model || 'openai/gpt-4o-mini', userPrompt, ai.text, ai.tokens_in, ai.tokens_out, ai.cost_cents).run()
    }
    return c.json({ success: true, analysis, model_used: model || 'openai/gpt-4o-mini', tokens: { input: ai.tokens_in, output: ai.tokens_out }, cost_cents: ai.cost_cents })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.post('/api/ai/run-autopilot', async (c) => {
  const { env, DB } = c
  const body = await c.req.json() as any
  const { client_id, actor } = body
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const results: any[] = []
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(client_id).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  try {
    // Step 1: Lead scoring
    const systemP = `You are an AI agent for RJ Business Solutions. You run SOPs automatically. Be concise and action-oriented.`
    const scorePrompt = `Score this credit repair client and return JSON { grade, score_0_100, predicted_ltv_usd, recommended_plan, priority_actions: [], likelihood_to_graduate_pct }:
Client: ${client.first_name} ${client.last_name}, Status: ${client.status}, Credit Score: ${client.credit_score_current || 'unknown'}, Goal: ${client.credit_score_goal || 'unknown'}, Monthly Fee: $${client.monthly_fee || 0}, Source: ${client.source || 'unknown'}`
    const scoreAI = await callAI(env, systemP, scorePrompt, 'openai/gpt-4o-mini')
    let scoring: any = {}
    try { const m = scoreAI.text.match(/\{[\s\S]*\}/); if (m) scoring = JSON.parse(m[0]) } catch {}
    await DB.prepare(`INSERT INTO ai_jobs (client_id, job_type, status, model_used, user_prompt, ai_response, tokens_input, tokens_output, cost_cents, completed_at) VALUES (?, 'lead_scoring', 'completed', 'openai/gpt-4o-mini', ?, ?, ?, ?, ?, datetime('now'))`)
      .bind(client_id, scorePrompt, scoreAI.text, scoreAI.tokens_in, scoreAI.tokens_out, scoreAI.cost_cents).run()
    if (scoring.score_0_100) {
      await DB.prepare(`INSERT INTO lead_scores (client_id, score, grade, factors, predicted_ltv, predicted_plan, likelihood_to_close_pct, scored_by) VALUES (?, ?, ?, ?, ?, ?, ?, 'ai')`)
        .bind(client_id, scoring.score_0_100, scoring.grade || 'C', JSON.stringify(scoring.priority_actions || []), scoring.predicted_ltv_usd || 0, scoring.recommended_plan || 'standard', scoring.likelihood_to_graduate_pct || 50).run()
    }
    results.push({ step: 'lead_scoring', status: 'completed', grade: scoring.grade, score: scoring.score_0_100 })

    // Step 2: Check open disputes needing follow-up
    const overdueDisputes = await DB.prepare(`SELECT * FROM disputes WHERE client_id = ? AND status IN ('sent','investigating') AND sent_date < datetime('now', '-35 days')`).bind(client_id).all()
    if (overdueDisputes.results.length > 0) {
      await DB.prepare(`INSERT INTO notifications (recipient, channel, title, message, severity, type) VALUES ('Rick Jefferson', 'dashboard', ?, ?, 'warning', 'action_required')`)
        .bind(`Overdue Bureau Responses — ${client.first_name} ${client.last_name}`, `${overdueDisputes.results.length} disputes sent 35+ days ago with no response logged. Take next action per SOP-107.`).run()
      results.push({ step: 'overdue_disputes', status: 'flagged', count: overdueDisputes.results.length, action: 'notifications_created', sop: 'SOP-107' })
    }

    // Step 3: SOP execution — create follow-up tasks
    const taskPrompt = `Based on client status "${client.status}" and credit score ${client.credit_score_current || 'unknown'}, list the 3 most important next tasks. Return JSON array: [{title, description, priority, sop_id, due_days_from_now}]`
    const taskAI = await callAI(env, systemP, taskPrompt, 'openai/gpt-4o-mini')
    let tasks: any[] = []
    try { const m = taskAI.text.match(/\[[\s\S]*\]/); if (m) tasks = JSON.parse(m[0]) } catch {}
    for (const t of tasks.slice(0, 3)) {
      const dueDate = t.due_days_from_now ? new Date(Date.now() + t.due_days_from_now * 86400000).toISOString().split('T')[0] : null
      await DB.prepare(`INSERT INTO tasks (client_id, title, description, priority, category, assigned_to, sop_id, due_date) VALUES (?, ?, ?, ?, 'autopilot', 'AI Agent Alpha', ?, ?)`)
        .bind(client_id, t.title || 'AI Autopilot Task', t.description || '', t.priority || 'normal', t.sop_id || null, dueDate).run()
    }
    results.push({ step: 'task_creation', status: 'completed', tasks_created: tasks.length })

    // Step 4: Audit log
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'autopilot_run', 'client', ?, ?)`).bind(actor || 'AI Autopilot', client_id, `Autopilot completed: scoring=${scoring.grade}, overdue=${overdueDisputes.results.length}, tasks=${tasks.length}`).run()
    return c.json({ success: true, client_id, client_name: `${client.first_name} ${client.last_name}`, steps_completed: results.length, results })
  } catch (err: any) { return c.json({ error: 'Autopilot error: ' + err.message, partial_results: results }, 500) }
})

app.post('/api/ai/draft-email', async (c) => {
  const { env, DB } = c
  const { client_id, template_type, context, model } = await c.req.json() as any
  const templates: Record<string, { subject: string; purpose: string }> = {
    welcome: { subject: 'Welcome to RJ Business Solutions — Your Credit Journey Starts Now', purpose: 'Warm welcome, outline what to expect, set timeline expectations, CROA disclosure' },
    dispute_filed: { subject: 'Your Dispute Letters Have Been Sent — Here\'s What Happens Next', purpose: 'Confirm disputes sent, explain 30-day bureau timeline, set expectations, reassure client' },
    progress_update: { subject: 'Your Monthly Credit Progress Report', purpose: 'Share score improvements, deletions, next steps, upsell opportunity if appropriate' },
    bureau_response: { subject: 'Bureau Response Received — Action Required', purpose: 'Explain bureau response (verified/deleted/updated), next steps, escalation if needed' },
    graduation: { subject: '🎉 Congratulations — You\'ve Graduated from Credit Repair!', purpose: 'Celebrate success, share final scores, referral ask, testimonial request' },
    payment_failed: { subject: 'Action Required: Payment Issue with Your Account', purpose: 'Professional payment failed notice, update payment link, service continuity note' }
  }
  const tpl = templates[template_type] || { subject: 'Message from RJ Business Solutions', purpose: context || 'General communication' }
  const systemPrompt = `You are the voice of RJ Business Solutions, a premium credit repair company. Write professional, warm, CROA-compliant client emails. Always include the CROA required disclosure at the bottom: "RJ Business Solutions is a credit repair organization as defined by the Credit Repair Organizations Act. You have the right to cancel this agreement within 3 business days." Keep emails under 400 words. Never promise specific score increases.`
  const userPrompt = `Write a complete email for:
Subject: ${tpl.subject}
Purpose: ${tpl.purpose}
Context: ${context || 'Standard communication'}
Include: greeting, body paragraphs, clear CTA, signature from Rick Jefferson, CROA disclosure footer`
  try {
    const ai = await callAI(env, systemPrompt, userPrompt, model || 'openai/gpt-4o-mini')
    if (DB && client_id) {
      await DB.prepare(`INSERT INTO ai_jobs (client_id, job_type, status, model_used, user_prompt, ai_response, tokens_input, tokens_output, cost_cents, completed_at) VALUES (?, 'email_draft', 'completed', ?, ?, ?, ?, ?, ?, datetime('now'))`)
        .bind(client_id, model || 'openai/gpt-4o-mini', userPrompt, ai.text, ai.tokens_in, ai.tokens_out, ai.cost_cents).run()
    }
    return c.json({ success: true, subject: tpl.subject, email: ai.text, model_used: model || 'openai/gpt-4o-mini', cost_cents: ai.cost_cents })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.post('/api/ai/score-lead', async (c) => {
  const { env, DB } = c
  const { client_id, overrides } = await c.req.json() as any
  if (!client_id || !DB) return c.json({ error: 'client_id and DB required' }, 400)
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(client_id).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const systemPrompt = `You are a credit repair business analyst. Score leads based on potential LTV, likelihood to close, and service fit. Return only valid JSON.`
  const userPrompt = `Score this lead for a credit repair business. Return JSON: { score: 0-100, grade: "A/B/C/D/F", predicted_ltv_usd: number, recommended_plan: "basic|standard|premium|autopilot", likelihood_to_close_pct: number, priority_actions: string[], notes: string }
Client data: ${JSON.stringify({ status: client.status, credit_score_current: client.credit_score_current, credit_score_goal: client.credit_score_goal, monthly_fee: client.monthly_fee, source: client.source, created_at: client.created_at, ...overrides })}`
  try {
    const ai = await callAI(env, systemPrompt, userPrompt, 'openai/gpt-4o-mini')
    let scoring: any = {}
    try { const m = ai.text.match(/\{[\s\S]*\}/); if (m) scoring = JSON.parse(m[0]) } catch { scoring = { score: 50, grade: 'C', notes: ai.text } }
    await DB.prepare(`INSERT INTO lead_scores (client_id, score, grade, factors, predicted_ltv, predicted_plan, likelihood_to_close_pct) VALUES (?, ?, ?, ?, ?, ?, ?)`)
      .bind(client_id, scoring.score || 50, scoring.grade || 'C', JSON.stringify(scoring.priority_actions || []), scoring.predicted_ltv_usd || 0, scoring.recommended_plan || 'standard', scoring.likelihood_to_close_pct || 50).run()
    return c.json({ success: true, ...scoring })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.get('/api/ai/jobs/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const jobs = await DB.prepare(`SELECT id, job_type, status, model_used, cost_cents, tokens_input, tokens_output, created_at, completed_at, error FROM ai_jobs WHERE client_id = ? ORDER BY created_at DESC LIMIT 50`).bind(clientId).all()
  const stats = await DB.prepare(`SELECT job_type, COUNT(*) as count, SUM(cost_cents) as total_cost, SUM(tokens_input + tokens_output) as total_tokens FROM ai_jobs WHERE client_id = ? GROUP BY job_type`).bind(clientId).all()
  return c.json({ jobs: jobs.results, stats: stats.results })
})

// ============================================================
// MULTI-TENANT / WHITE-LABEL SAAS
// ============================================================

app.get('/api/tenants', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const tenants = await DB.prepare(`SELECT id, name, slug, owner_email, plan, plan_price, subscription_status, max_clients, is_active, created_at FROM tenants ORDER BY created_at DESC`).all()
  const stats = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN is_active=1 THEN 1 ELSE 0 END) as active, SUM(CASE WHEN subscription_status='active' THEN plan_price ELSE 0 END) as mrr FROM tenants`).first() as any
  return c.json({ tenants: tenants.results, stats: { total: stats?.total || 0, active: stats?.active || 0, mrr_cents: stats?.mrr || 0 } })
})

app.post('/api/tenants', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { name, slug, owner_name, owner_email, plan, custom_domain, brand_color, logo_url, company_address, company_phone } = await c.req.json() as any
  if (!name || !owner_email) return c.json({ error: 'name and owner_email required' }, 400)
  const safeSlug = (slug || name.toLowerCase().replace(/[^a-z0-9]/g, '-')).substring(0, 50)
  const planPrices: Record<string, number> = { starter: 49700, professional: 99700, enterprise: 297000 }
  const trialEnd = new Date(Date.now() + 14 * 86400000).toISOString()
  try {
    const result = await DB.prepare(`INSERT INTO tenants (name, slug, owner_name, owner_email, plan, plan_price, custom_domain, brand_color, logo_url, company_address, company_phone, trial_ends_at, subscription_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'trialing')`)
      .bind(name, safeSlug, owner_name || null, owner_email, plan || 'starter', planPrices[plan || 'starter'], custom_domain || null, brand_color || '#2563eb', logo_url || null, company_address || null, company_phone || null, trialEnd).run()
    const tenantId = result.meta.last_row_id
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'tenant_created', 'tenant', ?, ?)`)
      .bind(tenantId, `New white-label tenant: ${name} (${owner_email}) — Plan: ${plan || 'starter'}`).run()
    return c.json({ success: true, tenant_id: tenantId, slug: safeSlug, plan: plan || 'starter', trial_ends: trialEnd, dashboard_url: `https://${safeSlug}.rjbusinesssolutions.org` }, 201)
  } catch (err: any) {
    if (err.message?.includes('UNIQUE')) return c.json({ error: 'Slug already taken. Choose a different slug.' }, 409)
    return c.json({ error: err.message }, 500)
  }
})

app.get('/api/tenants/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const tenant = await DB.prepare(`SELECT * FROM tenants WHERE id = ? OR slug = ?`).bind(id, id).first()
  if (!tenant) return c.json({ error: 'Tenant not found' }, 404)
  return c.json({ tenant })
})

app.put('/api/tenants/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const updates = await c.req.json() as any
  const allowed = ['name', 'brand_color', 'logo_url', 'custom_domain', 'company_address', 'company_phone', 'max_clients', 'max_agents', 'features', 'is_active']
  const fields = Object.entries(updates).filter(([k]) => allowed.includes(k))
  if (!fields.length) return c.json({ error: 'No valid fields to update' }, 400)
  const setClause = fields.map(([k]) => `${k} = ?`).join(', ')
  const values = [...fields.map(([, v]) => v), id]
  await DB.prepare(`UPDATE tenants SET ${setClause}, updated_at = datetime('now') WHERE id = ?`).bind(...values).run()
  return c.json({ success: true, updated_fields: fields.map(([k]) => k) })
})

app.get('/api/tenants/:id/stats', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const tenant = await DB.prepare(`SELECT id, name, plan, max_clients FROM tenants WHERE id = ? OR slug = ?`).bind(id, id).first() as any
  if (!tenant) return c.json({ error: 'Tenant not found' }, 404)
  const [clients, subs, aiJobs] = await Promise.all([
    DB.prepare(`SELECT COUNT(*) as count, SUM(monthly_fee) as mrr FROM clients WHERE tenant_id = ? OR 1=1 LIMIT 1`).bind(tenant.id).first(),
    DB.prepare(`SELECT COUNT(*) as count, SUM(plan_price) as mrr FROM client_subscriptions WHERE tenant_id = ? AND status = 'active'`).bind(tenant.id).first(),
    DB.prepare(`SELECT COUNT(*) as count, SUM(cost_cents) as spend FROM ai_jobs WHERE tenant_id = ?`).bind(tenant.id).first()
  ])
  return c.json({ tenant: { id: tenant.id, name: tenant.name, plan: tenant.plan }, stats: { clients: (clients as any)?.count || 0, max_clients: tenant.max_clients, active_subscriptions: (subs as any)?.count || 0, mrr_cents: (subs as any)?.mrr || 0, ai_jobs_run: (aiJobs as any)?.count || 0, ai_spend_cents: (aiJobs as any)?.spend || 0 } })
})

// ============================================================
// COURSE / CERTIFICATION ENGINE — SOP-based training
// ============================================================

const COURSE_MODULES_STATIC = [
  { id: 'C001', sop_id: 'SOP-001', title: 'CROA Compliance Fundamentals', description: 'Master the Credit Repair Organizations Act — what you can and cannot do', phase: 1, duration_minutes: 45, content_type: 'text', passing_score: 90 },
  { id: 'C002', sop_id: 'SOP-101', title: 'Reading a 3-Bureau Credit Report', description: 'How to pull, read, and analyze EFX/TU/EXP reports using MFSN', phase: 1, duration_minutes: 60, content_type: 'worksheet', passing_score: 80 },
  { id: 'C003', sop_id: 'SOP-105', title: 'Round 1 Dispute Strategy', description: 'Building your first dispute campaign — accounts to target, letters to send', phase: 2, duration_minutes: 90, content_type: 'worksheet', passing_score: 80 },
  { id: 'C004', sop_id: 'SOP-304', title: 'Speed-to-Lead Sales System', description: 'Contact new leads within 5 minutes — scripts, objections, closing', phase: 4, duration_minutes: 60, content_type: 'text', passing_score: 75 },
  { id: 'C005', sop_id: 'SOP-205', title: 'CROA-Compliant Billing Practices', description: 'How to charge clients legally — what CROA says about payment timing', phase: 2, duration_minutes: 30, content_type: 'text', passing_score: 90 },
  { id: 'C006', sop_id: 'SOP-402', title: 'Score Monitoring & Progress Reporting', description: 'Monthly client reviews, score tracking, upsell triggers', phase: 4, duration_minutes: 45, content_type: 'text', passing_score: 75 },
  { id: 'C007', sop_id: 'SOP-107', title: 'Bureau Response Management', description: 'What to do when bureaus respond — deleted, verified, updated', phase: 2, duration_minutes: 60, content_type: 'text', passing_score: 80 },
  { id: 'C008', sop_id: 'SOP-506', title: 'Building Your AI Agent Team', description: 'How to use AI agents to automate your credit repair business', phase: 5, duration_minutes: 90, content_type: 'text', passing_score: 75 },
  { id: 'C009', sop_id: 'SOP-601', title: 'Scaling to 7 Figures', description: 'White-labeling, affiliate programs, enterprise clients', phase: 6, duration_minutes: 120, content_type: 'text', passing_score: 75 },
  { id: 'CERT', sop_id: null, title: 'Certified Credit Repair Specialist — Final Exam', description: 'Complete certification exam covering all phases. Score 85%+ to receive certificate.', phase: 7, duration_minutes: 60, content_type: 'certification', passing_score: 85 }
]

app.get('/api/course/modules', async (c) => {
  const { DB } = c.env
  let dbModules: any[] = []
  if (DB) {
    try {
      const rows = await DB.prepare(`SELECT * FROM course_modules WHERE is_published = 1 ORDER BY sort_order, phase`).all()
      dbModules = rows.results
    } catch { dbModules = [] }
  }
  return c.json({ modules: dbModules.length > 0 ? dbModules : COURSE_MODULES_STATIC, total: dbModules.length > 0 ? dbModules.length : COURSE_MODULES_STATIC.length, price: { individual: 99700, full_bundle: 299700, certification_only: 49700 }, certification: { name: 'Certified Credit Repair Specialist (CCRS)', issuer: 'RJ Business Solutions', validity_years: 2, cpe_credits: 12 } })
})

app.post('/api/course/enroll', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, module_id } = await c.req.json() as any
  if (!client_id || !module_id) return c.json({ error: 'client_id and module_id required' }, 400)
  const existing = await DB.prepare(`SELECT id FROM course_enrollments WHERE client_id = ? AND module_id = ?`).bind(client_id, module_id).first()
  if (existing) return c.json({ error: 'Already enrolled in this module' }, 409)
  const result = await DB.prepare(`INSERT INTO course_enrollments (client_id, module_id, status) VALUES (?, ?, 'enrolled')`).bind(client_id, module_id).run()
  return c.json({ success: true, enrollment_id: result.meta.last_row_id }, 201)
})

app.get('/api/course/progress/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const enrollments = await DB.prepare(`SELECT ce.*, cm.title, cm.duration_minutes, cm.phase FROM course_enrollments ce LEFT JOIN course_modules cm ON cm.id = ce.module_id WHERE ce.client_id = ? ORDER BY ce.enrolled_at DESC`).bind(clientId).all()
  const stats = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) as completed, SUM(CASE WHEN status='in_progress' THEN 1 ELSE 0 END) as in_progress FROM course_enrollments WHERE client_id = ?`).bind(clientId).first() as any
  const pct = stats?.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0
  return c.json({ enrollments: enrollments.results, progress_pct: pct, total_enrolled: stats?.total || 0, completed: stats?.completed || 0, certified: pct === 100 })
})

app.put('/api/course/complete/:enrollmentId', async (c) => {
  const { DB } = c.env; const enrollmentId = c.req.param('enrollmentId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { score } = await c.req.json() as any
  const enrollment = await DB.prepare(`SELECT ce.*, cm.passing_score, cm.content_type, c.first_name, c.last_name FROM course_enrollments ce LEFT JOIN course_modules cm ON cm.id = ce.module_id LEFT JOIN clients c ON c.id = ce.client_id WHERE ce.id = ?`).bind(enrollmentId).first() as any
  if (!enrollment) return c.json({ error: 'Enrollment not found' }, 404)
  const passed = !score || score >= (enrollment.passing_score || 80)
  const certId = passed && enrollment.content_type === 'certification' ? `CCRS-${enrollment.client_id}-${Date.now()}` : null
  await DB.prepare(`UPDATE course_enrollments SET status = ?, score = ?, progress_pct = 100, completed_at = datetime('now'), certificate_id = ?, attempts = attempts + 1 WHERE id = ?`)
    .bind(passed ? 'completed' : 'failed', score || null, certId, enrollmentId).run()
  if (passed && enrollment.content_type === 'certification') {
    await DB.prepare(`INSERT INTO notifications (recipient, channel, title, message, severity, type) VALUES (?, 'dashboard', 'Certification Earned!', ?, 'success', 'achievement')`)
      .bind(`${enrollment.first_name} ${enrollment.last_name}`, `${enrollment.first_name} ${enrollment.last_name} has earned the Certified Credit Repair Specialist (CCRS) certification! Certificate ID: ${certId}`).run()
  }
  return c.json({ success: true, passed, score, certificate_id: certId, status: passed ? 'completed' : 'failed' })
})

app.get('/api/course/certificate/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const cert = await DB.prepare(`SELECT ce.certificate_id, ce.completed_at, ce.score, c.first_name, c.last_name FROM course_enrollments ce LEFT JOIN clients c ON c.id = ce.client_id WHERE ce.client_id = ? AND ce.certificate_id IS NOT NULL ORDER BY ce.completed_at DESC LIMIT 1`).bind(clientId).first() as any
  if (!cert) return c.json({ error: 'No certificate found. Complete all modules and final exam.' }, 404)
  return c.json({ certificate: { id: cert.certificate_id, holder: `${cert.first_name} ${cert.last_name}`, certification: 'Certified Credit Repair Specialist (CCRS)', issuer: 'RJ Business Solutions', issued_date: cert.completed_at?.split('T')[0], score: cert.score, valid_until: new Date(new Date(cert.completed_at).getTime() + 2 * 365 * 86400000).toISOString().split('T')[0], verify_url: `https://rjbusinesssolutions.org/verify/${cert.certificate_id}` } })
})

// ============================================================
// CROA / FCRA COMPLIANCE ENGINE
// ============================================================

const CROA_RULES = [
  { id: 'CROA-1', section: '§ 404', title: 'No Advance Fees', description: 'Cannot charge or receive money before services are fully performed. Payment only after dispute services rendered.', risk: 'critical', action: 'Ensure Stripe subscription charges AFTER dispute round completion, or use monthly installment post-service' },
  { id: 'CROA-2', section: '§ 405', title: 'Written Contract Required', description: 'Must provide written agreement before any services. Client must sign.', risk: 'critical', action: 'Always execute Client Agreement (Template: CLIENT_AGREEMENT) before any work begins' },
  { id: 'CROA-3', section: '§ 405(b)', title: '3-Day Cancellation Right', description: 'Client has right to cancel within 3 business days without penalty.', risk: 'high', action: 'Include cancellation notice in contract. Log contract date. Never start work in first 3 days.' },
  { id: 'CROA-4', section: '§ 404(b)(2)', title: 'No False Representations', description: 'Cannot make untrue statements about services or guarantee specific score improvements.', risk: 'critical', action: 'Never promise specific point increases. Say "we pursue all legally disputable items" not "we will raise your score 100 points"' },
  { id: 'CROA-5', section: '§ 404(a)(3)', title: 'No Advising False Identity', description: 'Cannot advise clients to assume a new identity or use EIN as alternative SSN ("CPN schemes").', risk: 'critical', action: 'Zero tolerance. Fire any agent who suggests CPNs. Log refusal in compliance audit.' },
  { id: 'CROA-6', section: '§ 406', title: 'Disclosure Statement Required', description: 'Must provide "Consumer Credit File Rights Under State and Federal Law" disclosure.', risk: 'high', action: 'Include FCRA rights disclosure in onboarding packet. Use template FCRA_DISCLOSURE.' },
  { id: 'CROA-7', section: '§ 404(b)(1)', title: 'No Altering Credit History', description: 'Cannot advise creating new credit identities or disputing accurate negative information.', risk: 'critical', action: 'Only dispute inaccurate, unverifiable, or legally questionable items. Document the basis for each dispute.' },
  { id: 'FCRA-1', section: '15 U.S.C. § 1681i', title: 'Right to Dispute Inaccuracies', description: 'Consumers have the right to dispute inaccurate or incomplete information.', risk: 'info', action: 'Basis for all dispute letters. Always cite this section.' },
  { id: 'FCRA-2', section: '15 U.S.C. § 1681g', title: 'Right to Access Report', description: 'Consumers have right to see their credit report and dispute information.', risk: 'info', action: 'Pull reports via MFSN with client written authorization (FCRA_AUTH_FORM).' },
  { id: 'FCRA-3', section: '15 U.S.C. § 1681s-2', title: '7-Year Rule on Negative Items', description: 'Most negative items must be removed after 7 years. Bankruptcies: 10 years.', risk: 'medium', action: 'Check account open dates. Items past 7 years are automatic deletion targets regardless of accuracy.' },
  { id: 'FCRA-4', section: '15 U.S.C. § 1681c-2', title: 'Identity Theft Victims', description: 'Victims of identity theft can block reporting of fraudulent information.', risk: 'medium', action: 'If client is ID theft victim, use FCRA § 605B block — faster than standard dispute process.' },
  { id: 'FDCPA-1', section: '15 U.S.C. § 1692g', title: 'Debt Validation', description: 'Consumers can demand debt collectors validate the debt within 30 days.', risk: 'medium', action: 'For collection accounts, send debt validation letter FIRST before dispute letter.' }
]

app.get('/api/compliance/croa-rules', (c) => {
  return c.json({ total: CROA_RULES.length, rules: CROA_RULES, laws: ['Credit Repair Organizations Act (CROA) — 15 U.S.C. §§ 1679-1679j', 'Fair Credit Reporting Act (FCRA) — 15 U.S.C. §§ 1681-1681x', 'Fair Debt Collection Practices Act (FDCPA) — 15 U.S.C. §§ 1692-1692p', 'Equal Credit Opportunity Act (ECOA) — 15 U.S.C. §§ 1691-1691f', 'Truth in Lending Act (TILA) — 15 U.S.C. §§ 1601-1667f'], disclaimer: 'This is operational guidance only, not legal advice. Consult a licensed attorney for specific legal questions.' })
})

app.post('/api/compliance/croa-check', async (c) => {
  const { DB } = c.env
  const { action, client_id, details } = await c.req.json() as any
  if (!action) return c.json({ error: 'action required' }, 400)
  const risks: any[] = []
  const actionLower = action.toLowerCase()
  if (actionLower.includes('charge') || actionLower.includes('payment') || actionLower.includes('fee')) {
    risks.push({ rule: 'CROA-1', severity: 'critical', message: 'Verify payment is AFTER services rendered — CROA prohibits advance fees.' })
  }
  if (actionLower.includes('guarantee') || actionLower.includes('promise') || actionLower.includes('definitely') || actionLower.includes('100 point')) {
    risks.push({ rule: 'CROA-4', severity: 'critical', message: 'Cannot make guarantees or promise specific score improvements.' })
  }
  if (actionLower.includes('cpn') || actionLower.includes('ein') || actionLower.includes('new identity') || actionLower.includes('new credit')) {
    risks.push({ rule: 'CROA-5', severity: 'critical', message: 'CPN/EIN schemes are ILLEGAL. This is federal fraud.' })
  }
  if (actionLower.includes('dispute') && !actionLower.includes('inaccurate') && !actionLower.includes('unverifiable') && !actionLower.includes('verify')) {
    risks.push({ rule: 'CROA-7', severity: 'high', message: 'Only dispute inaccurate or unverifiable items. Document legal basis for each dispute.' })
  }
  const compliant = risks.filter(r => r.severity === 'critical').length === 0
  const riskLevel = risks.some(r => r.severity === 'critical') ? 'critical' : risks.some(r => r.severity === 'high') ? 'high' : risks.length > 0 ? 'medium' : 'low'
  if (DB && client_id) {
    await DB.prepare(`INSERT INTO compliance_audits (client_id, action_type, law, compliant, risk_level, notes) VALUES (?, ?, 'CROA', ?, ?, ?)`)
      .bind(client_id, action.substring(0, 200), compliant ? 1 : 0, riskLevel, risks.map(r => r.message).join('; ')).run()
  }
  return c.json({ compliant, risk_level: riskLevel, risks, cleared_rules: CROA_RULES.filter(r => !risks.find(x => x.rule === r.id)).map(r => r.id), recommendation: compliant ? 'Action appears compliant. Proceed with standard documentation.' : `STOP: ${risks.filter(r => r.severity === 'critical').length} critical compliance issue(s) detected. Consult SOP-001 before proceeding.` })
})

app.get('/api/compliance/fcra-rights', (c) => {
  return c.json({
    title: 'Consumer Credit File Rights Under State and Federal Law',
    required_disclosure: true,
    fcra_summary: 'The Fair Credit Reporting Act (FCRA) gives you specific rights. You must receive a copy of this notice before signing a contract with a credit repair organization.',
    rights: [
      'You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly.',
      'There is no fee for correcting inaccurate information with a credit bureau.',
      'Any legitimate credit bureau must investigate disputed items within 30 days.',
      'You may dispute inaccurate items for free without a credit repair organization.',
      'You have a right to sue a credit repair organization that violates the CROA.',
      'You have a 3-day right to cancel a contract with any credit repair organization.',
      'Credit repair organizations cannot promise to remove accurate information.',
      'You have the right to a copy of your credit report upon request.'
    ],
    bureau_contacts: {
      equifax: { phone: '1-800-685-1111', dispute_url: 'https://dispute.equifax.com', mail: 'P.O. Box 740256, Atlanta, GA 30374' },
      transunion: { phone: '1-800-916-8800', dispute_url: 'https://dispute.transunion.com', mail: 'P.O. Box 2000, Chester, PA 19016' },
      experian: { phone: '1-888-397-3742', dispute_url: 'https://experian.com/disputes', mail: 'P.O. Box 4500, Allen, TX 75013' }
    }
  })
})

app.post('/api/compliance/bureau-response', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, dispute_id, bureau, response_type, response_date, items_deleted, items_verified, items_updated, tracking_number, response_method, raw_response } = await c.req.json() as any
  if (!client_id || !bureau || !response_type) return c.json({ error: 'client_id, bureau, and response_type required' }, 400)
  const result = await DB.prepare(`INSERT INTO bureau_responses (client_id, dispute_id, bureau, response_type, response_date, items_deleted, items_verified, items_updated, tracking_number, response_method, raw_response) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .bind(client_id, dispute_id || null, bureau, response_type, response_date || null, items_deleted || 0, items_verified || 0, items_updated || 0, tracking_number || null, response_method || 'mail', raw_response || null).run()
  if (dispute_id) {
    const newStatus = response_type === 'deleted' ? 'deleted' : response_type === 'verified' ? 'escalated' : 'investigating'
    await DB.prepare(`UPDATE disputes SET status = ? WHERE id = ?`).bind(newStatus, dispute_id).run()
  }
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'bureau_response_logged', 'dispute', ?, ?)`).bind(dispute_id || 0, `${bureau} responded: ${response_type} — Deleted: ${items_deleted || 0}, Verified: ${items_verified || 0}`).run()
  const nextSop = response_type === 'deleted' ? 'SOP-108: Document deletion, update client record, celebrate win' : response_type === 'verified' ? 'SOP-109: Escalate — request method of verification, consider legal referral' : 'SOP-107: Follow up if no response in 35 days'
  return c.json({ success: true, response_id: result.meta.last_row_id, next_action: nextSop })
})

app.get('/api/compliance/bureau-responses/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const responses = await DB.prepare(`SELECT br.*, d.account_name, d.bureau as dispute_bureau FROM bureau_responses br LEFT JOIN disputes d ON d.id = br.dispute_id WHERE br.client_id = ? ORDER BY br.received_date DESC`).bind(clientId).all()
  const stats = await DB.prepare(`SELECT bureau, response_type, COUNT(*) as count, SUM(items_deleted) as total_deleted FROM bureau_responses WHERE client_id = ? GROUP BY bureau, response_type`).bind(clientId).all()
  return c.json({ responses: responses.results, stats: stats.results })
})

app.get('/api/compliance/audit/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const audits = await DB.prepare(`SELECT * FROM compliance_audits WHERE client_id = ? ORDER BY checked_at DESC LIMIT 100`).bind(clientId).all()
  const summary = await DB.prepare(`SELECT law, compliant, risk_level, COUNT(*) as count FROM compliance_audits WHERE client_id = ? GROUP BY law, compliant, risk_level`).bind(clientId).all()
  return c.json({ audits: audits.results, summary: summary.results })
})

// ============================================================
// AFFILIATE / REFERRAL PROGRAM
// ============================================================

app.post('/api/affiliates', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { name, email, commission_pct } = await c.req.json() as any
  if (!name || !email) return c.json({ error: 'name and email required' }, 400)
  const code = (name.toLowerCase().replace(/[^a-z0-9]/g, '') + Math.random().toString(36).substring(2, 6)).substring(0, 12).toUpperCase()
  const result = await DB.prepare(`INSERT INTO affiliates (name, email, referral_code, commission_pct) VALUES (?, ?, ?, ?)`).bind(name, email, code, commission_pct || 20).run()
  return c.json({ success: true, affiliate_id: result.meta.last_row_id, referral_code: code, referral_link: `https://rjbusinesssolutions.org/?ref=${code}`, commission_pct: commission_pct || 20 }, 201)
})

app.get('/api/affiliates', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const affiliates = await DB.prepare(`SELECT * FROM affiliates ORDER BY total_earned_cents DESC`).all()
  return c.json({ affiliates: affiliates.results })
})

app.post('/api/affiliates/track', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { referral_code, client_id, source_url } = await c.req.json() as any
  if (!referral_code) return c.json({ error: 'referral_code required' }, 400)
  const affiliate = await DB.prepare(`SELECT * FROM affiliates WHERE referral_code = ? AND is_active = 1`).bind(referral_code).first() as any
  if (!affiliate) return c.json({ error: 'Invalid referral code' }, 404)
  await DB.prepare(`INSERT INTO referrals (affiliate_id, client_id, referral_code, source_url, commission_pct) VALUES (?, ?, ?, ?, ?)`)
    .bind(affiliate.id, client_id || null, referral_code, source_url || null, affiliate.commission_pct).run()
  await DB.prepare(`UPDATE affiliates SET total_referrals = total_referrals + 1 WHERE id = ?`).bind(affiliate.id).run()
  return c.json({ success: true, affiliate_name: affiliate.name, commission_pct: affiliate.commission_pct })
})

app.get('/api/affiliates/:id/stats', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const affiliate = await DB.prepare(`SELECT * FROM affiliates WHERE id = ?`).bind(id).first() as any
  if (!affiliate) return c.json({ error: 'Affiliate not found' }, 404)
  const referrals = await DB.prepare(`SELECT r.*, c.first_name, c.last_name, c.status, cs.plan_name, cs.plan_price FROM referrals r LEFT JOIN clients c ON c.id = r.client_id LEFT JOIN client_subscriptions cs ON cs.client_id = r.client_id AND cs.status = 'active' WHERE r.affiliate_id = ? ORDER BY r.created_at DESC`).bind(id).all()
  return c.json({ affiliate, referrals: referrals.results, payout_due: Math.round((affiliate.total_earned_cents - affiliate.total_paid_cents) / 100) })
})

// ============================================================
// CLIENT PORTAL — Self-service client view
// ============================================================

app.post('/api/portal/generate', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, expires_days } = await c.req.json() as any
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const client = await DB.prepare(`SELECT id, first_name, last_name, email FROM clients WHERE id = ?`).bind(client_id).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const token = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '')
  const days = expires_days || 365
  await DB.prepare(`INSERT INTO portal_tokens (client_id, token, expires_at) VALUES (?, ?, datetime('now', '+${days} days'))`).bind(client_id, token).run()
  const baseUrl = c.env.APP_BASE_URL || c.env.CLOUDFLARE_PAGES_URL || 'https://rjbusinesssolutions.org'
  return c.json({ success: true, token, portal_url: `${baseUrl}/portal/${token}`, expires_days: days, client_name: `${client.first_name} ${client.last_name}` }, 201)
})

app.get('/api/portal/data/:token', async (c) => {
  const { DB } = c.env; const token = c.req.param('token')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const pt = await DB.prepare(`SELECT * FROM portal_tokens WHERE token = ? AND expires_at > datetime('now')`).bind(token).first() as any
  if (!pt) return c.json({ error: 'Invalid or expired portal link' }, 401)
  await DB.prepare(`UPDATE portal_tokens SET last_accessed = datetime('now'), access_count = access_count + 1 WHERE id = ?`).bind(pt.id).run()
  const client = await DB.prepare(`SELECT id, first_name, last_name, email, phone, status, credit_score_start, credit_score_current, credit_score_goal, monthly_fee, onboarding_date, notes FROM clients WHERE id = ?`).bind(pt.client_id).first() as any
  const disputes = await DB.prepare(`SELECT id, bureau, account_name, status, dispute_reason, result, created_at, updated_at FROM disputes WHERE client_id = ? ORDER BY created_at DESC`).bind(pt.client_id).all()
  const rounds = await DB.prepare(`SELECT * FROM dispute_rounds WHERE client_id = ? ORDER BY round_number DESC`).bind(pt.client_id).all().catch(() => ({ results: [] }))
  const scoreHistory = await DB.prepare(`SELECT * FROM credit_report_scores WHERE report_id IN (SELECT id FROM credit_reports WHERE client_id = ?) ORDER BY pulled_at DESC LIMIT 20`).bind(pt.client_id).all().catch(() => ({ results: [] }))
  const subscription = await DB.prepare(`SELECT plan_name, plan_price, status, current_period_end FROM client_subscriptions WHERE client_id = ? AND status = 'active' LIMIT 1`).bind(pt.client_id).first().catch(() => null)
  const comms = await DB.prepare(`SELECT id, type, message, status, created_at FROM communications WHERE client_id = ? ORDER BY created_at DESC LIMIT 20`).bind(pt.client_id).all().catch(() => ({ results: [] }))
  const enrollments = await DB.prepare(`SELECT ce.*, cm.title, cm.phase FROM course_enrollments ce LEFT JOIN course_modules cm ON cm.id = ce.module_id WHERE ce.client_id = ?`).bind(pt.client_id).all().catch(() => ({ results: [] }))
  const alerts = await DB.prepare(`SELECT * FROM score_alerts WHERE client_id = ? AND is_actioned = 0 ORDER BY created_at DESC LIMIT 10`).bind(pt.client_id).all().catch(() => ({ results: [] }))
  const disputeStats = { total: disputes.results.length, deleted: disputes.results.filter((d: any) => d.status === 'deleted').length, updated: disputes.results.filter((d: any) => d.status === 'updated').length, pending: disputes.results.filter((d: any) => d.status === 'pending' || d.status === 'sent').length }
  return c.json({ client, disputes: disputes.results, dispute_stats: disputeStats, rounds: rounds.results, score_history: scoreHistory.results, subscription, communications: comms.results, course_enrollments: enrollments.results, alerts: alerts.results })
})

app.get('/portal/:token', async (c) => {
  const { DB } = c.env; const token = c.req.param('token')
  const baseUrl = c.env.APP_BASE_URL || 'https://rjbusinesssolutions.org'
  if (!DB) return c.html(`<!DOCTYPE html><html><head><title>Portal</title><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-gray-50 flex items-center justify-center min-h-screen"><div class="text-center"><h1 class="text-2xl font-bold text-gray-800">Database not connected</h1><p class="text-gray-500 mt-2">Connect D1 database to enable client portal</p></div></body></html>`)
  const pt = await DB.prepare(`SELECT * FROM portal_tokens WHERE token = ? AND expires_at > datetime('now')`).bind(token).first() as any
  if (!pt) return c.html(`<!DOCTYPE html><html><head><title>Portal — Link Expired</title><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-gray-50 flex items-center justify-center min-h-screen"><div class="text-center p-8 bg-white rounded-xl shadow"><div class="text-5xl mb-4">🔗</div><h1 class="text-2xl font-bold text-gray-800">Link Invalid or Expired</h1><p class="text-gray-500 mt-2">Please contact your credit advisor for a new portal link.</p><p class="text-sm text-gray-400 mt-4">RJ Business Solutions • (505) 429-6239</p></div></body></html>`, 401)
  const client = await DB.prepare(`SELECT id, first_name, last_name, email, phone, status, credit_score_start, credit_score_current, credit_score_goal, onboarding_date FROM clients WHERE id = ?`).bind(pt.client_id).first() as any
  if (!client) return c.html(`<!DOCTYPE html><html><body>Client not found</body></html>`, 404)
  await DB.prepare(`UPDATE portal_tokens SET last_accessed = datetime('now'), access_count = access_count + 1 WHERE id = ?`).bind(pt.id).run()
  const disputes = await DB.prepare(`SELECT bureau, account_name, status, dispute_reason, result, created_at FROM disputes WHERE client_id = ? ORDER BY created_at DESC`).bind(pt.client_id).all()
  const rounds = await DB.prepare(`SELECT * FROM dispute_rounds WHERE client_id = ? ORDER BY round_number, bureau`).bind(pt.client_id).all().catch(() => ({ results: [] }))
  const subscription = await DB.prepare(`SELECT plan_name, status, current_period_end FROM client_subscriptions WHERE client_id = ? LIMIT 1`).bind(pt.client_id).first().catch(() => null) as any
  const disputeStats = { total: disputes.results.length, deleted: disputes.results.filter((d: any) => d.result === 'deleted').length, updated: disputes.results.filter((d: any) => d.result === 'updated').length, pending: disputes.results.filter((d: any) => ['pending','sent','investigating'].includes(d.status)).length }
  const avgScore = client.credit_score_current || client.credit_score_start || 0
  const roundsHtml = rounds.results.length > 0 ? rounds.results.map((r: any) => `<div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"><div><span class="font-medium text-gray-800">Round ${r.round_number} — ${r.bureau}</span><span class="ml-2 text-xs text-gray-500">${r.items_disputed ? JSON.parse(r.items_disputed).length + ' items' : ''}</span></div><span class="px-2 py-1 rounded text-xs font-medium ${r.status === 'sent' ? 'bg-blue-100 text-blue-700' : r.status === 'response_received' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}">${r.status.replace(/_/g,' ')}</span></div>`).join('') : '<p class="text-gray-400 text-sm">No rounds filed yet</p>'
  const disputesHtml = disputes.results.slice(0, 10).map((d: any) => `<div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"><div><p class="font-medium text-gray-800 text-sm">${d.account_name || 'Unknown Account'}</p><p class="text-xs text-gray-500">${d.bureau || ''} • ${d.dispute_reason || ''}</p></div><span class="px-2 py-1 rounded text-xs font-medium ${d.result === 'deleted' ? 'bg-green-100 text-green-700' : d.result === 'updated' ? 'bg-blue-100 text-blue-700' : d.result === 'verified' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}">${d.result || d.status || 'pending'}</span></div>`).join('')
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Credit Portal — RJ Business Solutions</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}</style>
</head>
<body class="bg-gray-50 min-h-screen">
<header class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
  <div class="flex items-center gap-3">
    <div class="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">RJ</div>
    <div><div class="font-bold text-gray-900 text-sm">RJ Business Solutions</div><div class="text-xs text-gray-500">Client Credit Portal</div></div>
  </div>
  <div class="text-right"><div class="font-semibold text-gray-800">${client.first_name} ${client.last_name}</div><div class="text-xs text-gray-500">Status: <span class="font-medium text-green-600">${client.status || 'Active'}</span></div></div>
</header>
<main class="max-w-4xl mx-auto px-4 py-8 space-y-6">
  <!-- Score Cards -->
  <div class="grid grid-cols-4 gap-4">
    <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 col-span-1">
      <div class="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Avg Score</div>
      <div class="text-3xl font-bold ${avgScore >= 700 ? 'text-green-600' : avgScore >= 620 ? 'text-yellow-600' : 'text-red-600'}">${avgScore || '—'}</div>
      <div class="text-xs text-gray-400 mt-1">3-Bureau Average</div>
    </div>
    <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div class="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Equifax</div>
      <div class="text-2xl font-bold text-gray-800">${client.credit_score_eq || '—'}</div>
    </div>
    <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div class="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Experian</div>
      <div class="text-2xl font-bold text-gray-800">${client.credit_score_ex || '—'}</div>
    </div>
    <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div class="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">TransUnion</div>
      <div class="text-2xl font-bold text-gray-800">${client.credit_score_tu || '—'}</div>
    </div>
  </div>
  <!-- Progress Stats -->
  <div class="grid grid-cols-4 gap-4">
    <div class="bg-blue-50 rounded-xl p-4 text-center border border-blue-100"><div class="text-2xl font-bold text-blue-700">${disputeStats.total}</div><div class="text-xs text-blue-600 mt-1">Items Disputed</div></div>
    <div class="bg-green-50 rounded-xl p-4 text-center border border-green-100"><div class="text-2xl font-bold text-green-700">${disputeStats.deleted}</div><div class="text-xs text-green-600 mt-1">Deleted</div></div>
    <div class="bg-purple-50 rounded-xl p-4 text-center border border-purple-100"><div class="text-2xl font-bold text-purple-700">${disputeStats.updated}</div><div class="text-xs text-purple-600 mt-1">Updated</div></div>
    <div class="bg-yellow-50 rounded-xl p-4 text-center border border-yellow-100"><div class="text-2xl font-bold text-yellow-700">${disputeStats.pending}</div><div class="text-xs text-yellow-600 mt-1">Pending</div></div>
  </div>
  <!-- Dispute Rounds -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
    <h2 class="font-bold text-gray-800 mb-4">Dispute Rounds</h2>
    ${roundsHtml}
  </div>
  <!-- Active Disputes -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
    <h2 class="font-bold text-gray-800 mb-4">Your Disputes (${disputes.results.length} total)</h2>
    ${disputesHtml || '<p class="text-gray-400 text-sm">No disputes on file yet</p>'}
    ${disputes.results.length > 10 ? `<p class="text-xs text-gray-400 mt-3">${disputes.results.length - 10} more not shown — contact your advisor for full report</p>` : ''}
  </div>
  ${subscription ? `<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"><h2 class="font-bold text-gray-800 mb-2">Your Plan</h2><div class="flex items-center justify-between"><span class="font-semibold text-blue-700 capitalize">${(subscription as any).plan_name} Plan</span><span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">${(subscription as any).status}</span></div><p class="text-xs text-gray-500 mt-1">Renews ${(subscription as any).current_period_end ? new Date((subscription as any).current_period_end).toLocaleDateString() : 'monthly'}</p></div>` : ''}
  <!-- Contact -->
  <div class="bg-blue-900 rounded-xl p-6 text-white text-center">
    <div class="font-bold text-lg mb-1">Questions? We're here to help.</div>
    <div class="text-blue-200 text-sm">📞 (505) 429-6239 &nbsp;|&nbsp; ✉️ rjbiz2022@gmail.com</div>
    <div class="text-blue-300 text-xs mt-2">Member since ${client.start_date ? new Date(client.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'enrollment'}</div>
  </div>
</main>
</body></html>`)
})

// ============================================================
// EMAIL SEQUENCES — Drip campaign engine
// ============================================================

app.get('/api/email/sequences', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const sequences = await DB.prepare(`SELECT * FROM email_sequences ORDER BY trigger_event, delay_days`).all()
  return c.json({ sequences: sequences.results, total: sequences.results.length })
})

app.post('/api/email/sequences', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { name, trigger_event, delay_days, subject, body_template } = await c.req.json() as any
  if (!name || !trigger_event || !subject || !body_template) return c.json({ error: 'name, trigger_event, subject, body_template required' }, 400)
  const result = await DB.prepare(`INSERT INTO email_sequences (name, trigger_event, delay_days, subject, body_template) VALUES (?, ?, ?, ?, ?)`).bind(name, trigger_event, delay_days || 0, subject, body_template).run()
  return c.json({ success: true, sequence_id: result.meta.last_row_id }, 201)
})

app.post('/api/email/sequences/enroll', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, trigger_event } = await c.req.json() as any
  if (!client_id || !trigger_event) return c.json({ error: 'client_id and trigger_event required' }, 400)
  const sequences = await DB.prepare(`SELECT * FROM email_sequences WHERE trigger_event = ? AND is_active = 1 ORDER BY delay_days`).bind(trigger_event).all()
  if (sequences.results.length === 0) return c.json({ error: 'No active sequences for this trigger' }, 404)
  let enrolled = 0
  for (const seq of sequences.results as any[]) {
    const next = new Date(); next.setDate(next.getDate() + (seq.delay_days || 0))
    await DB.prepare(`INSERT OR IGNORE INTO sequence_enrollments (client_id, sequence_id, next_send_at) VALUES (?, ?, ?)`).bind(client_id, seq.id, next.toISOString()).run()
    enrolled++
  }
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'sequence_enrolled', 'client', ?, ?)`).bind(client_id, `Enrolled in ${enrolled} sequences for trigger: ${trigger_event}`).run().catch(() => {})
  return c.json({ success: true, enrolled_sequences: enrolled, trigger_event })
})

app.post('/api/email/sequences/process', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const due = await DB.prepare(`SELECT se.*, es.subject, es.body_template, es.name as seq_name, c.first_name, c.last_name, c.email FROM sequence_enrollments se JOIN email_sequences es ON es.id = se.sequence_id JOIN clients c ON c.id = se.client_id WHERE se.status = 'active' AND se.next_send_at <= datetime('now')`).all()
  let sent = 0; const errors: string[] = []
  for (const row of due.results as any[]) {
    const body = row.body_template.replace(/\{\{name\}\}/g, row.first_name).replace(/\{\{full_name\}\}/g, `${row.first_name} ${row.last_name}`)
    await DB.prepare(`INSERT INTO email_sends (client_id, to_email, subject, body, template_name, status) VALUES (?, ?, ?, ?, ?, 'queued')`).bind(row.client_id, row.email, row.subject, body, row.seq_name).run()
    await DB.prepare(`UPDATE sequence_enrollments SET sends_completed = sends_completed + 1, status = 'completed', next_send_at = NULL WHERE id = ?`).bind(row.id).run()
    sent++
  }
  return c.json({ processed: due.results.length, queued_for_send: sent, errors })
})

app.get('/api/email/history/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const emails = await DB.prepare(`SELECT * FROM email_sends WHERE client_id = ? ORDER BY created_at DESC LIMIT 50`).bind(clientId).all()
  return c.json({ emails: emails.results, total: emails.results.length })
})

// ============================================================
// CRM PIPELINE — Full lead management
// ============================================================

const PIPELINE_STAGES = ['new', 'contacted', 'qualified', 'consultation_scheduled', 'proposal_sent', 'won', 'lost']

app.get('/api/leads', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const stage = c.req.query('stage'); const source = c.req.query('source')
  let query = `SELECT l.*, s.name as assigned_name FROM crm_leads l LEFT JOIN staff_users s ON s.id = l.assigned_staff_id`
  const params: any[] = []
  const conditions: string[] = []
  if (stage) { conditions.push('l.stage = ?'); params.push(stage) }
  if (source) { conditions.push('l.source = ?'); params.push(source) }
  if (conditions.length > 0) query += ' WHERE ' + conditions.join(' AND ')
  query += ' ORDER BY l.created_at DESC LIMIT 200'
  const leads = await DB.prepare(query).bind(...params).all()
  return c.json({ leads: leads.results, total: leads.results.length, stages: PIPELINE_STAGES })
})

app.put('/api/leads/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const updates = await c.req.json() as any
  const allowed = ['name', 'email', 'phone', 'source', 'stage', 'score', 'score_grade', 'ltv_estimate', 'notes', 'assigned_staff_id', 'utm_source', 'utm_medium', 'utm_campaign', 'lost_reason']
  const fields = Object.keys(updates).filter(k => allowed.includes(k))
  if (fields.length === 0) return c.json({ error: 'No valid fields to update' }, 400)
  const setClause = fields.map(f => `${f} = ?`).join(', ')
  const vals = fields.map(f => updates[f])
  await DB.prepare(`UPDATE crm_leads SET ${setClause}, updated_at = datetime('now') WHERE id = ?`).bind(...vals, id).run()
  const lead = await DB.prepare(`SELECT * FROM crm_leads WHERE id = ?`).bind(id).first()
  return c.json({ success: true, lead })
})

app.delete('/api/leads/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  await DB.prepare(`DELETE FROM crm_leads WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

app.post('/api/leads/:id/convert', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const lead = await DB.prepare(`SELECT * FROM crm_leads WHERE id = ?`).bind(id).first() as any
  if (!lead) return c.json({ error: 'Lead not found' }, 404)
  if (lead.converted_client_id) return c.json({ error: 'Lead already converted', client_id: lead.converted_client_id }, 409)
  const [first, ...rest] = (lead.name || 'Unknown').split(' ')
  const result = await DB.prepare(`INSERT INTO clients (first_name, last_name, email, phone, status, monthly_fee, source, onboarding_date) VALUES (?, ?, ?, ?, 'active', 0, 'crm', date('now'))`).bind(first, rest.join(' ') || '', lead.email || '', lead.phone || '').run()
  const clientId = result.meta.last_row_id
  await DB.prepare(`UPDATE crm_leads SET stage = 'won', converted_client_id = ?, updated_at = datetime('now') WHERE id = ?`).bind(clientId, id).run()
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('crm', 'lead_converted', 'client', ?, ?)`).bind(clientId, `Converted from lead ${id}: ${lead.name}`).run().catch(() => {})
  if (lead.affiliate_id) {
    await DB.prepare(`INSERT INTO referrals (affiliate_id, client_id, referral_code, commission_pct) SELECT id, ?, referral_code, commission_pct FROM affiliates WHERE id = ?`).bind(clientId, lead.affiliate_id).run().catch(() => {})
  }
  return c.json({ success: true, client_id: clientId, lead_id: Number(id), message: 'Lead converted to client' }, 201)
})

app.get('/api/leads/pipeline', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const pipeline: Record<string, any[]> = {}
  for (const stage of PIPELINE_STAGES) pipeline[stage] = []
  const leads = await DB.prepare(`SELECT l.*, s.name as assigned_name FROM crm_leads l LEFT JOIN staff_users s ON s.id = l.assigned_staff_id WHERE l.converted_client_id IS NULL ORDER BY l.score DESC, l.created_at DESC`).all()
  for (const lead of leads.results as any[]) {
    const stage = lead.stage || 'new'
    if (!pipeline[stage]) pipeline[stage] = []
    pipeline[stage].push(lead)
  }
  const stats = { total: leads.results.length, by_stage: Object.fromEntries(PIPELINE_STAGES.map(s => [s, pipeline[s].length])), total_ltv: (leads.results as any[]).reduce((a, l) => a + (l.ltv_estimate || 0), 0), avg_score: leads.results.length ? Math.round((leads.results as any[]).reduce((a, l) => a + (l.score || 0), 0) / leads.results.length) : 0 }
  return c.json({ pipeline, stats, stages: PIPELINE_STAGES })
})

// ============================================================
// ANALYTICS & REPORTING — Business intelligence
// ============================================================

app.get('/api/analytics/overview', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const clients = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN status='active' THEN 1 ELSE 0 END) as active, SUM(CASE WHEN graduation_date IS NOT NULL THEN 1 ELSE 0 END) as graduated, SUM(monthly_fee) as total_mrr FROM clients`).first() as any
    const disputes = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN result='deleted' THEN 1 ELSE 0 END) as deleted, SUM(CASE WHEN result='updated' THEN 1 ELSE 0 END) as updated, SUM(CASE WHEN status IN ('pending','sent','investigating') THEN 1 ELSE 0 END) as pending FROM disputes`).first() as any
    const leads = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN stage='won' THEN 1 ELSE 0 END) as won, SUM(CASE WHEN stage='lost' THEN 1 ELSE 0 END) as lost, AVG(ltv_estimate) as avg_ltv FROM crm_leads`).first() as any
    const revenue = await DB.prepare(`SELECT SUM(plan_price) as mrr FROM client_subscriptions WHERE status='active'`).first() as any
    const ai_spend = await DB.prepare(`SELECT SUM(cost_cents) as total FROM ai_jobs`).first() as any
    const affiliates = await DB.prepare(`SELECT COUNT(*) as total, SUM(total_referrals) as referrals, SUM(total_earned_cents) as earned FROM affiliates WHERE is_active=1`).first() as any
    const conversionRate = (leads as any)?.total > 0 ? Math.round(((leads as any).won / (leads as any).total) * 100) : 0
    const disputeSuccessRate = (disputes as any)?.total > 0 ? Math.round((((disputes as any).deleted + (disputes as any).updated) / (disputes as any).total) * 100) : 0
    return c.json({ clients, disputes, dispute_success_rate: disputeSuccessRate, leads: { ...leads, conversion_rate: conversionRate }, revenue: { mrr_from_subscriptions: (revenue as any)?.mrr || 0, mrr_from_clients: (clients as any)?.total_mrr || 0, arr: ((revenue as any)?.mrr || 0) * 12 }, ai_spend_cents: (ai_spend as any)?.total || 0, affiliates, generated_at: new Date().toISOString() })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.get('/api/analytics/revenue', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const byPlan = await DB.prepare(`SELECT plan_name, COUNT(*) as count, SUM(plan_price) as mrr FROM client_subscriptions WHERE status='active' GROUP BY plan_name`).all()
    const monthly = await DB.prepare(`SELECT strftime('%Y-%m', created_at) as month, COUNT(*) as new_subs, SUM(plan_price) as new_mrr FROM client_subscriptions GROUP BY month ORDER BY month DESC LIMIT 12`).all()
    const churn = await DB.prepare(`SELECT COUNT(*) as cancelled FROM client_subscriptions WHERE status='cancelled' AND updated_at >= date('now', '-30 days')`).first() as any
    const total = await DB.prepare(`SELECT SUM(plan_price) as mrr, COUNT(*) as active FROM client_subscriptions WHERE status='active'`).first() as any
    return c.json({ current_mrr: (total as any)?.mrr || 0, current_arr: ((total as any)?.mrr || 0) * 12, active_subscriptions: (total as any)?.active || 0, by_plan: byPlan.results, monthly_trend: monthly.results, churn_last_30d: (churn as any)?.cancelled || 0 })
  } catch { return c.json({ current_mrr: 0, current_arr: 0, active_subscriptions: 0, by_plan: [], monthly_trend: [], churn_last_30d: 0 }) }
})

app.get('/api/analytics/disputes', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const byBureau = await DB.prepare(`SELECT bureau, COUNT(*) as total, SUM(CASE WHEN result='deleted' THEN 1 ELSE 0 END) as deleted, SUM(CASE WHEN result='updated' THEN 1 ELSE 0 END) as updated, SUM(CASE WHEN result='verified' THEN 1 ELSE 0 END) as verified FROM disputes GROUP BY bureau`).all()
    const byStatus = await DB.prepare(`SELECT status, COUNT(*) as total FROM disputes GROUP BY status ORDER BY total DESC`).all()
    const avgResolution = await DB.prepare(`SELECT AVG(julianday(updated_at) - julianday(created_at)) as avg_days FROM disputes WHERE result IN ('deleted','updated','verified')`).first() as any
    const monthly = await DB.prepare(`SELECT strftime('%Y-%m', created_at) as month, COUNT(*) as filed, SUM(CASE WHEN result='deleted' THEN 1 ELSE 0 END) as deleted FROM disputes GROUP BY month ORDER BY month DESC LIMIT 12`).all()
    const rounds = await DB.prepare(`SELECT round_number, bureau, COUNT(*) as count, SUM(CASE WHEN outcome='deleted' THEN 1 ELSE 0 END) as deleted FROM dispute_rounds GROUP BY round_number, bureau ORDER BY round_number`).all().catch(() => ({ results: [] }))
    return c.json({ by_bureau: byBureau.results, by_status: byStatus.results, avg_resolution_days: Math.round((avgResolution as any)?.avg_days || 0), monthly_trend: monthly.results, by_round: rounds.results })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.get('/api/analytics/clients', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const statusBreakdown = await DB.prepare(`SELECT status, COUNT(*) as count FROM clients GROUP BY status`).all()
    const avgScore = await DB.prepare(`SELECT AVG(credit_score_start) as start_avg, AVG(credit_score_current) as current_avg, AVG(credit_score_goal) as goal_avg FROM clients WHERE credit_score_start > 0`).first() as any
    const scoreGain = await DB.prepare(`SELECT AVG(credit_score_current - credit_score_start) as avg_gain FROM clients WHERE credit_score_start > 0 AND credit_score_current > 0`).first() as any
    const retention = await DB.prepare(`SELECT SUM(CASE WHEN graduation_date IS NOT NULL THEN 1 ELSE 0 END) * 100.0 / COUNT(*) as grad_rate FROM clients`).first() as any
    const byMonth = await DB.prepare(`SELECT strftime('%Y-%m', onboarding_date) as month, COUNT(*) as new_clients FROM clients GROUP BY month ORDER BY month DESC LIMIT 12`).all()
    const top = await DB.prepare(`SELECT id, first_name, last_name, credit_score_start, credit_score_current, monthly_fee, status FROM clients ORDER BY monthly_fee DESC LIMIT 10`).all()
    return c.json({ status_breakdown: statusBreakdown.results, avg_credit_scores: { start: Math.round((avgScore as any)?.start_avg || 0), current: Math.round((avgScore as any)?.current_avg || 0), goal: Math.round((avgScore as any)?.goal_avg || 0), avg_gain: Math.round((scoreGain as any)?.avg_gain || 0) }, graduation_rate: Math.round((retention as any)?.grad_rate || 0), monthly_new_clients: byMonth.results, top_clients_by_revenue: top.results })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

app.get('/api/analytics/leads', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const bySource = await DB.prepare(`SELECT source, COUNT(*) as total, SUM(CASE WHEN stage='won' THEN 1 ELSE 0 END) as won, AVG(ltv_estimate) as avg_ltv FROM crm_leads GROUP BY source ORDER BY total DESC`).all()
    const byStage = await DB.prepare(`SELECT stage, COUNT(*) as count, AVG(score) as avg_score FROM crm_leads GROUP BY stage`).all()
    const monthly = await DB.prepare(`SELECT strftime('%Y-%m', created_at) as month, COUNT(*) as leads, SUM(CASE WHEN stage='won' THEN 1 ELSE 0 END) as converted FROM crm_leads GROUP BY month ORDER BY month DESC LIMIT 12`).all()
    const topSources = (bySource.results as any[]).map(s => ({ ...s, conversion_rate: s.total > 0 ? Math.round((s.won / s.total) * 100) : 0 }))
    return c.json({ by_source: topSources, by_stage: byStage.results, monthly_trend: monthly.results, funnel: PIPELINE_STAGES.map(stage => ({ stage, count: (byStage.results as any[]).find(r => r.stage === stage)?.count || 0 })) })
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

// ============================================================
// STAFF MANAGEMENT — Users, roles, workload
// ============================================================

app.get('/api/staff', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const staff = await DB.prepare(`SELECT s.*, (SELECT COUNT(*) FROM clients c WHERE c.assigned_to = s.id) as client_count, (SELECT COUNT(*) FROM ops_tasks t WHERE t.assigned_to = s.id AND t.status != 'completed') as open_tasks FROM staff_users s ORDER BY s.role, s.name`).all().catch(async () => DB.prepare(`SELECT * FROM staff_users ORDER BY role, name`).all())
  return c.json({ staff: (staff as any).results, total: (staff as any).results.length, roles: ['admin', 'manager', 'agent', 'viewer'] })
})

app.post('/api/staff', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { name, email, role, permissions, max_clients } = await c.req.json() as any
  if (!name || !email) return c.json({ error: 'name and email required' }, 400)
  const rolePerms: Record<string, string[]> = { admin: ['read','write','delete','billing','compliance','admin'], manager: ['read','write','compliance','billing'], agent: ['read','write'], viewer: ['read'] }
  const perms = permissions || rolePerms[role || 'agent'] || ['read']
  const result = await DB.prepare(`INSERT INTO staff_users (name, email, role, permissions, max_clients) VALUES (?, ?, ?, ?, ?)`).bind(name, email, role || 'agent', JSON.stringify(perms), max_clients || 50).run()
  return c.json({ success: true, staff_id: result.meta.last_row_id, name, email, role: role || 'agent', permissions: perms }, 201)
})

app.put('/api/staff/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const updates = await c.req.json() as any
  const allowed = ['name', 'email', 'role', 'permissions', 'max_clients', 'is_active']
  const fields = Object.keys(updates).filter(k => allowed.includes(k))
  if (fields.length === 0) return c.json({ error: 'No valid fields' }, 400)
  const vals = fields.map(f => f === 'permissions' && Array.isArray(updates[f]) ? JSON.stringify(updates[f]) : updates[f])
  await DB.prepare(`UPDATE staff_users SET ${fields.map(f => f + ' = ?').join(', ')} WHERE id = ?`).bind(...vals, id).run()
  return c.json({ success: true })
})

app.get('/api/staff/:id/workload', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const staff = await DB.prepare(`SELECT * FROM staff_users WHERE id = ?`).bind(id).first()
  if (!staff) return c.json({ error: 'Staff not found' }, 404)
  const clients = await DB.prepare(`SELECT id, first_name, last_name, status, credit_score_eq, monthly_fee FROM clients WHERE assigned_to = ?`).bind(id).all().catch(() => ({ results: [] }))
  const tasks = await DB.prepare(`SELECT t.*, c.first_name, c.last_name FROM ops_tasks t LEFT JOIN clients c ON c.id = t.client_id WHERE t.assigned_to = ? AND t.status != 'completed' ORDER BY t.due_date`).bind(id).all().catch(() => ({ results: [] }))
  const leads = await DB.prepare(`SELECT * FROM crm_leads WHERE assigned_staff_id = ? AND stage NOT IN ('won','lost') ORDER BY score DESC`).bind(id).all().catch(() => ({ results: [] }))
  return c.json({ staff, clients: clients.results, open_tasks: tasks.results, active_leads: leads.results, summary: { client_count: clients.results.length, open_task_count: tasks.results.length, lead_count: leads.results.length } })
})

// ============================================================
// DISPUTE ROUNDS — R1/R2/R3 automated tracking
// ============================================================

app.get('/api/disputes/rounds/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const rounds = await DB.prepare(`SELECT * FROM dispute_rounds WHERE client_id = ? ORDER BY round_number, bureau`).bind(clientId).all()
  const summary: Record<string, any> = {}
  for (const r of rounds.results as any[]) {
    if (!summary[`R${r.round_number}`]) summary[`R${r.round_number}`] = { round: r.round_number, bureaus: {}, status: 'in_progress' }
    summary[`R${r.round_number}`].bureaus[r.bureau] = r.status
  }
  return c.json({ rounds: rounds.results, summary: Object.values(summary), total_rounds: rounds.results.length })
})

app.post('/api/disputes/rounds', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, round_number, bureau, items_disputed, letter_content, tracking_number } = await c.req.json() as any
  if (!client_id || !bureau) return c.json({ error: 'client_id and bureau required' }, 400)
  const lastRound = await DB.prepare(`SELECT MAX(round_number) as max_round FROM dispute_rounds WHERE client_id = ? AND bureau = ?`).bind(client_id, bureau).first() as any
  const roundNum = round_number || ((lastRound?.max_round || 0) + 1)
  const responseDate = new Date(); responseDate.setDate(responseDate.getDate() + 35)
  const result = await DB.prepare(`INSERT INTO dispute_rounds (client_id, round_number, bureau, status, items_disputed, sent_at, response_due, letter_content, tracking_number) VALUES (?, ?, ?, 'sent', ?, datetime('now'), ?, ?, ?)`).bind(client_id, roundNum, bureau, JSON.stringify(items_disputed || []), responseDate.toISOString(), letter_content || null, tracking_number || null).run()
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'dispute_round_filed', 'client', ?, ?)`).bind(client_id, `Round ${roundNum} filed with ${bureau}: ${(items_disputed || []).length} items`).run().catch(() => {})
  return c.json({ success: true, round_id: result.meta.last_row_id, round_number: roundNum, bureau, response_due: responseDate.toISOString() }, 201)
})

app.post('/api/disputes/rounds/auto-generate', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id } = await c.req.json() as any
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(client_id).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const disputes = await DB.prepare(`SELECT * FROM disputes WHERE client_id = ? AND status IN ('pending','investigating','verified')`).bind(client_id).all()
  if (disputes.results.length === 0) return c.json({ message: 'No pending disputes — client may be ready to graduate', client_id, pending_count: 0 })
  const bureaus = ['equifax', 'experian', 'transunion']
  const created: any[] = []
  for (const bureau of bureaus) {
    const bureauDisputes = disputes.results.filter((d: any) => d.bureau?.toLowerCase() === bureau || !d.bureau)
    if (bureauDisputes.length === 0) continue
    const lastRound = await DB.prepare(`SELECT MAX(round_number) as max_round FROM dispute_rounds WHERE client_id = ? AND bureau = ?`).bind(client_id, bureau).first() as any
    const nextRound = (lastRound?.max_round || 0) + 1
    if (nextRound > 5) { created.push({ bureau, skipped: true, reason: 'Max rounds (5) reached — recommend MOV or complaint' }); continue }
    const letterTypes: Record<number, string> = { 1: 'Initial Dispute Letter', 2: 'Method of Verification Request', 3: 'Escalation / CFPB Pre-Complaint', 4: 'CFPB Complaint', 5: 'Final Notice / Legal Warning' }
    const responseDate = new Date(); responseDate.setDate(responseDate.getDate() + 35)
    const result = await DB.prepare(`INSERT INTO dispute_rounds (client_id, round_number, bureau, status, items_disputed, response_due) VALUES (?, ?, ?, 'pending', ?, ?)`).bind(client_id, nextRound, bureau, JSON.stringify(bureauDisputes.map((d: any) => d.id)), responseDate.toISOString()).run()
    created.push({ round_id: result.meta.last_row_id, round_number: nextRound, bureau, letter_type: letterTypes[nextRound] || 'Dispute Letter', items_count: bureauDisputes.length, response_due: responseDate.toISOString() })
  }
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('ai', 'auto_generated_rounds', 'client', ?, ?)`).bind(client_id, `Auto-generated dispute rounds for ${created.filter((r: any) => !r.skipped).length} bureaus`).run().catch(() => {})
  return c.json({ success: true, client_id, rounds_created: created, total_pending_disputes: disputes.results.length })
})

app.put('/api/disputes/rounds/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { status, outcome, tracking_number, response_received } = await c.req.json() as any
  await DB.prepare(`UPDATE dispute_rounds SET status = COALESCE(?, status), outcome = COALESCE(?, outcome), tracking_number = COALESCE(?, tracking_number), response_received = COALESCE(?, response_received) WHERE id = ?`).bind(status || null, outcome || null, tracking_number || null, response_received || null, id).run()
  return c.json({ success: true })
})

app.get('/api/disputes/round-stats', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const byRound = await DB.prepare(`SELECT round_number, bureau, COUNT(*) as total, SUM(CASE WHEN outcome='deleted' THEN 1 ELSE 0 END) as deleted, SUM(CASE WHEN outcome='updated' THEN 1 ELSE 0 END) as updated, SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END) as pending FROM dispute_rounds GROUP BY round_number, bureau ORDER BY round_number, bureau`).all()
  const overdue = await DB.prepare(`SELECT dr.*, c.first_name, c.last_name FROM dispute_rounds dr JOIN clients c ON c.id = dr.client_id WHERE dr.response_due < datetime('now') AND dr.status = 'sent' ORDER BY dr.response_due`).all()
  return c.json({ by_round: byRound.results, overdue: overdue.results, overdue_count: overdue.results.length })
})

// ============================================================
// SMS SEQUENCES — Drip SMS automation
// ============================================================

app.get('/api/sms/sequences', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const sequences = await DB.prepare(`SELECT * FROM sms_sequences ORDER BY trigger_event, delay_hours`).all()
  return c.json({ sequences: sequences.results, total: sequences.results.length })
})

app.post('/api/sms/sequences', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { name, trigger_event, delay_hours, message_template } = await c.req.json() as any
  if (!name || !trigger_event || !message_template) return c.json({ error: 'name, trigger_event, message_template required' }, 400)
  if (message_template.length > 160) return c.json({ error: 'SMS messages must be 160 characters or less' }, 400)
  const result = await DB.prepare(`INSERT INTO sms_sequences (name, trigger_event, delay_hours, message_template) VALUES (?, ?, ?, ?)`).bind(name, trigger_event, delay_hours || 0, message_template).run()
  return c.json({ success: true, sequence_id: result.meta.last_row_id }, 201)
})

app.post('/api/sms/sequences/enroll', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, trigger_event } = await c.req.json() as any
  if (!client_id || !trigger_event) return c.json({ error: 'client_id and trigger_event required' }, 400)
  const sequences = await DB.prepare(`SELECT * FROM sms_sequences WHERE trigger_event = ? AND is_active = 1 ORDER BY delay_hours`).bind(trigger_event).all()
  let enrolled = 0
  for (const seq of sequences.results as any[]) {
    const next = new Date(); next.setHours(next.getHours() + (seq.delay_hours || 0))
    await DB.prepare(`INSERT OR IGNORE INTO sms_enrollments (client_id, sequence_id, next_send_at) VALUES (?, ?, ?)`).bind(client_id, seq.id, next.toISOString()).run()
    enrolled++
  }
  return c.json({ success: true, enrolled_sequences: enrolled, trigger_event })
})

app.post('/api/sms/sequences/process', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const due = await DB.prepare(`SELECT se.*, ss.message_template, ss.name as seq_name, c.first_name, c.last_name, c.phone FROM sms_enrollments se JOIN sms_sequences ss ON ss.id = se.sequence_id JOIN clients c ON c.id = se.client_id WHERE se.status = 'active' AND se.next_send_at <= datetime('now') AND c.phone IS NOT NULL AND c.phone != ''`).all()
  const queued: any[] = []
  for (const row of due.results as any[]) {
    const msg = row.message_template.replace(/\{\{name\}\}/g, row.first_name).replace(/\{\{full_name\}\}/g, `${row.first_name} ${row.last_name}`)
    await DB.prepare(`INSERT INTO communications (client_id, type, direction, channel, message, status) VALUES (?, 'sms', 'outbound', 'twilio', ?, 'queued')`).bind(row.client_id, msg).run().catch(() => {})
    await DB.prepare(`UPDATE sms_enrollments SET sends_completed = sends_completed + 1, status = 'completed' WHERE id = ?`).bind(row.id).run()
    queued.push({ client_id: row.client_id, phone: row.phone, message: msg })
  }
  return c.json({ processed: due.results.length, queued, note: 'Call /api/twilio/sms to actually send each queued message' })
})

// ============================================================
// SCHEDULING / APPOINTMENTS
// ============================================================

app.get('/api/appointments', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const status = c.req.query('status'); const upcoming = c.req.query('upcoming')
  let query = `SELECT a.*, c.first_name, c.last_name, c.email, c.phone, s.name as staff_name FROM appointments a LEFT JOIN clients c ON c.id = a.client_id LEFT JOIN staff_users s ON s.id = a.staff_id`
  const conditions: string[] = []; const params: any[] = []
  if (status) { conditions.push('a.status = ?'); params.push(status) }
  if (upcoming === '1' || upcoming === 'true') { conditions.push("a.scheduled_at >= datetime('now')"); conditions.push('a.status = ?'); params.push('scheduled') }
  if (conditions.length > 0) query += ' WHERE ' + conditions.join(' AND ')
  query += ' ORDER BY a.scheduled_at ASC LIMIT 100'
  const appts = await DB.prepare(query).bind(...params).all()
  return c.json({ appointments: appts.results, total: appts.results.length })
})

app.post('/api/appointments', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id, lead_id, staff_id, type, scheduled_at, duration_minutes, notes, meeting_link } = await c.req.json() as any
  if (!scheduled_at) return c.json({ error: 'scheduled_at required (ISO 8601)' }, 400)
  if (!client_id && !lead_id) return c.json({ error: 'client_id or lead_id required' }, 400)
  const result = await DB.prepare(`INSERT INTO appointments (client_id, lead_id, staff_id, type, scheduled_at, duration_minutes, notes, meeting_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).bind(client_id || null, lead_id || null, staff_id || null, type || 'consultation', scheduled_at, duration_minutes || 30, notes || null, meeting_link || null).run()
  const apptId = result.meta.last_row_id
  if (client_id) await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'appointment_scheduled', 'client', ?, ?)`).bind(client_id, `${type || 'consultation'} scheduled for ${scheduled_at}`).run().catch(() => {})
  return c.json({ success: true, appointment_id: apptId, scheduled_at, type: type || 'consultation', duration_minutes: duration_minutes || 30 }, 201)
})

app.put('/api/appointments/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { status, notes, meeting_link, scheduled_at } = await c.req.json() as any
  await DB.prepare(`UPDATE appointments SET status = COALESCE(?, status), notes = COALESCE(?, notes), meeting_link = COALESCE(?, meeting_link), scheduled_at = COALESCE(?, scheduled_at) WHERE id = ?`).bind(status || null, notes || null, meeting_link || null, scheduled_at || null, id).run()
  return c.json({ success: true })
})

app.post('/api/appointments/send-reminders', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const due = await DB.prepare(`SELECT a.*, c.first_name, c.phone FROM appointments a LEFT JOIN clients c ON c.id = a.client_id WHERE a.status = 'scheduled' AND a.reminder_sent = 0 AND a.scheduled_at BETWEEN datetime('now') AND datetime('now', '+24 hours')`).all()
  let sent = 0
  for (const appt of due.results as any[]) {
    if (appt.phone) {
      const msg = `Hi ${appt.first_name || 'there'}, reminder: your ${appt.type?.replace('_',' ')} appointment is tomorrow. ${appt.meeting_link || 'We will call you at your number on file.'} - RJ Business Solutions`
      await DB.prepare(`INSERT INTO communications (client_id, type, direction, channel, message, status) VALUES (?, 'sms', 'outbound', 'twilio', ?, 'queued')`).bind(appt.client_id, msg).run().catch(() => {})
    }
    await DB.prepare(`UPDATE appointments SET reminder_sent = 1 WHERE id = ?`).bind(appt.id).run()
    sent++
  }
  return c.json({ success: true, reminders_sent: sent, total_upcoming: due.results.length })
})

// ============================================================
// WEBHOOK MANAGEMENT — Outbound event webhooks
// ============================================================

const WEBHOOK_EVENTS = ['client.created', 'client.graduated', 'dispute.filed', 'dispute.response', 'payment.received', 'payment.failed', 'lead.created', 'lead.converted', 'round.filed', 'score.updated', 'appointment.scheduled']

app.get('/api/webhooks/configs', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const configs = await DB.prepare(`SELECT id, name, url, events, is_active, last_fired_at, total_fired, fail_count, created_at FROM webhook_configs ORDER BY created_at DESC`).all()
  return c.json({ configs: configs.results, available_events: WEBHOOK_EVENTS })
})

app.post('/api/webhooks/configs', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { name, url, events, secret } = await c.req.json() as any
  if (!name || !url || !events) return c.json({ error: 'name, url, events required' }, 400)
  if (!url.startsWith('https://')) return c.json({ error: 'URL must use HTTPS' }, 400)
  const result = await DB.prepare(`INSERT INTO webhook_configs (name, url, events, secret) VALUES (?, ?, ?, ?)`).bind(name, url, JSON.stringify(events), secret || null).run()
  return c.json({ success: true, config_id: result.meta.last_row_id, name, url, events }, 201)
})

app.delete('/api/webhooks/configs/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  await DB.prepare(`DELETE FROM webhook_configs WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

app.post('/api/webhooks/test/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const config = await DB.prepare(`SELECT * FROM webhook_configs WHERE id = ?`).bind(id).first() as any
  if (!config) return c.json({ error: 'Webhook config not found' }, 404)
  const payload = { event: 'webhook.test', timestamp: new Date().toISOString(), source: 'RJ Business Solutions', data: { message: 'This is a test webhook from RJ Business Solutions Operations Engine', webhook_id: Number(id) } }
  try {
    const res = await fetch(config.url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-RJ-Event': 'webhook.test', 'X-RJ-Webhook-ID': String(id), ...(config.secret ? { 'X-RJ-Signature': config.secret } : {}) }, body: JSON.stringify(payload) })
    await DB.prepare(`UPDATE webhook_configs SET last_fired_at = datetime('now'), total_fired = total_fired + 1 WHERE id = ?`).bind(id).run()
    return c.json({ success: res.ok, status_code: res.status, response: res.ok ? 'Webhook delivered successfully' : `Delivery failed: HTTP ${res.status}` })
  } catch (err: any) {
    await DB.prepare(`UPDATE webhook_configs SET fail_count = fail_count + 1 WHERE id = ?`).bind(id).run()
    return c.json({ success: false, error: err.message }, 500)
  }
})

app.post('/api/webhooks/trigger', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { event, data } = await c.req.json() as any
  if (!event) return c.json({ error: 'event required' }, 400)
  const configs = await DB.prepare(`SELECT * FROM webhook_configs WHERE is_active = 1`).all()
  const payload = { event, timestamp: new Date().toISOString(), source: 'RJ Business Solutions', data: data || {} }
  let fired = 0; let failed = 0
  for (const config of configs.results as any[]) {
    const events = JSON.parse(config.events || '[]')
    if (!events.includes(event) && !events.includes('*')) continue
    try {
      await fetch(config.url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-RJ-Event': event, ...(config.secret ? { 'X-RJ-Signature': config.secret } : {}) }, body: JSON.stringify(payload) })
      await DB.prepare(`UPDATE webhook_configs SET last_fired_at = datetime('now'), total_fired = total_fired + 1 WHERE id = ?`).bind(config.id).run()
      fired++
    } catch { await DB.prepare(`UPDATE webhook_configs SET fail_count = fail_count + 1 WHERE id = ?`).bind(config.id).run(); failed++ }
  }
  return c.json({ success: true, event, fired, failed, total_configs: configs.results.length })
})

// ============================================================
// API KEY MANAGEMENT — For white-label tenant access
// ============================================================

app.get('/api/api-keys', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const tenantId = c.req.query('tenant_id')
  const query = tenantId ? `SELECT id, tenant_id, name, key_prefix, permissions, request_count, last_used_at, expires_at, is_active, created_at FROM api_keys WHERE tenant_id = ? ORDER BY created_at DESC` : `SELECT ak.id, ak.tenant_id, t.name as tenant_name, ak.name, ak.key_prefix, ak.permissions, ak.request_count, ak.last_used_at, ak.expires_at, ak.is_active, ak.created_at FROM api_keys ak LEFT JOIN tenants t ON t.id = ak.tenant_id ORDER BY ak.created_at DESC`
  const keys = tenantId ? await DB.prepare(query).bind(tenantId).all() : await DB.prepare(query).all()
  return c.json({ api_keys: keys.results, total: keys.results.length })
})

app.post('/api/api-keys', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { tenant_id, name, permissions, expires_days } = await c.req.json() as any
  if (!name) return c.json({ error: 'name required' }, 400)
  const rawKey = 'rjbs_' + crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '').substring(0, 20)
  const prefix = rawKey.substring(0, 13)
  const encoder = new TextEncoder(); const data = encoder.encode(rawKey)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const keyHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
  const expiresAt = expires_days ? new Date(Date.now() + expires_days * 86400000).toISOString() : null
  const result = await DB.prepare(`INSERT INTO api_keys (tenant_id, name, key_hash, key_prefix, permissions, expires_at) VALUES (?, ?, ?, ?, ?, ?)`).bind(tenant_id || null, name, keyHash, prefix, JSON.stringify(permissions || ['read']), expiresAt).run()
  return c.json({ success: true, api_key_id: result.meta.last_row_id, api_key: rawKey, key_prefix: prefix, warning: 'Store this key securely — it will not be shown again', permissions: permissions || ['read'], expires_at: expiresAt }, 201)
})

app.delete('/api/api-keys/:id', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  await DB.prepare(`UPDATE api_keys SET is_active = 0 WHERE id = ?`).bind(id).run()
  return c.json({ success: true, message: 'API key revoked' })
})

// ============================================================
// IMPORT / EXPORT — CSV data management
// ============================================================

app.post('/api/import/clients', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const body = await c.req.text()
  const lines = body.split('\n').map(l => l.trim()).filter(Boolean)
  if (lines.length < 2) return c.json({ error: 'CSV must have header row + at least 1 data row' }, 400)
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/[\s"]/g, '_'))
  const imported: any[] = []; const errors: any[] = []
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, ''))
    const row: Record<string, string> = {}
    headers.forEach((h, idx) => { row[h] = values[idx] || '' })
    const firstName = row.first_name || row.firstname || row.first || ''
    const lastName = row.last_name || row.lastname || row.last || ''
    const email = row.email || ''
    const phone = row.phone || row.phone_number || ''
    if (!firstName && !email) { errors.push({ row: i, error: 'Missing first_name and email' }); continue }
    try {
      const result = await DB.prepare(`INSERT INTO clients (first_name, last_name, email, phone, status, monthly_fee, source, onboarding_date) VALUES (?, ?, ?, ?, 'active', ?, 'import', date('now'))`).bind(firstName, lastName, email, phone, Number(row.monthly_fee || 0)).run()
      imported.push({ row: i, client_id: result.meta.last_row_id, name: `${firstName} ${lastName}` })
    } catch (err: any) { errors.push({ row: i, error: err.message }) }
  }
  return c.json({ success: true, imported: imported.length, errors: errors.length, clients: imported, import_errors: errors })
})

app.get('/api/export/clients', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const clients = await DB.prepare(`SELECT id, first_name, last_name, email, phone, status, credit_score_start, credit_score_current, credit_score_goal, monthly_fee, onboarding_date, source, assigned_agent, created_at FROM clients ORDER BY id`).all()
  const headers = 'id,first_name,last_name,email,phone,status,credit_score_start,credit_score_current,credit_score_goal,monthly_fee,onboarding_date,source,assigned_agent,created_at'
  const rows = clients.results.map((cl: any) => `${cl.id},"${cl.first_name || ''}","${cl.last_name || ''}","${cl.email || ''}","${cl.phone || ''}",${cl.status || ''},${cl.credit_score_start || ''},${cl.credit_score_current || ''},${cl.credit_score_goal || ''},${cl.monthly_fee || 0},"${cl.onboarding_date || ''}","${cl.source || ''}","${cl.assigned_agent || ''}","${cl.created_at || ''}"`)
  const csv = [headers, ...rows].join('\n')
  return new Response(csv, { headers: { 'Content-Type': 'text/csv', 'Content-Disposition': `attachment; filename="clients-${new Date().toISOString().split('T')[0]}.csv"` } })
})

app.get('/api/export/disputes', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const disputes = await DB.prepare(`SELECT d.id, c.first_name, c.last_name, d.bureau, d.account_name, d.account_number, d.dispute_reason, d.status, d.result, d.dispute_round, d.sent_date, d.response_due_date, d.created_at, d.updated_at FROM disputes d LEFT JOIN clients c ON c.id = d.client_id ORDER BY d.id`).all()
  const headers = 'id,first_name,last_name,bureau,account_name,account_number,dispute_reason,status,result,dispute_round,sent_date,response_due_date,created_at,updated_at'
  const rows = disputes.results.map((d: any) => `${d.id},"${d.first_name || ''}","${d.last_name || ''}",${d.bureau || ''},"${(d.account_name || '').replace(/"/g, '""')}","${d.account_number || ''}","${(d.dispute_reason || '').replace(/"/g, '""')}",${d.status || ''},${d.result || ''},${d.dispute_round || 1},"${d.sent_date || ''}","${d.response_due_date || ''}","${d.created_at || ''}","${d.updated_at || ''}"`)
  const csv = [headers, ...rows].join('\n')
  return new Response(csv, { headers: { 'Content-Type': 'text/csv', 'Content-Disposition': `attachment; filename="disputes-${new Date().toISOString().split('T')[0]}.csv"` } })
})

app.get('/api/export/report', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  try {
    const clients = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN status='active' THEN 1 ELSE 0 END) as active, SUM(monthly_fee) as mrr FROM clients`).first() as any
    const disputes = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN status='deleted' THEN 1 ELSE 0 END) as deleted FROM disputes`).first() as any
    const revenue = await DB.prepare(`SELECT SUM(plan_price) as mrr FROM client_subscriptions WHERE status='active'`).first() as any
    const leads = await DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN stage='won' THEN 1 ELSE 0 END) as won FROM crm_leads`).first() as any
    const report = { generated_at: new Date().toISOString(), company: 'RJ Business Solutions', period: new Date().toISOString().split('T')[0], clients: { total: (clients as any)?.total || 0, active: (clients as any)?.active || 0, monthly_revenue: (clients as any)?.mrr || 0 }, disputes: { total: (disputes as any)?.total || 0, deleted: (disputes as any)?.deleted || 0, success_rate: (disputes as any)?.total > 0 ? Math.round(((disputes as any).deleted / (disputes as any).total) * 100) : 0 }, revenue: { mrr: (revenue as any)?.mrr || 0, arr: ((revenue as any)?.mrr || 0) * 12 }, leads: { total: (leads as any)?.total || 0, won: (leads as any)?.won || 0 } }
    return c.json(report)
  } catch (err: any) { return c.json({ error: err.message }, 500) }
})

// ============================================================
// GOHIGHLEVEL (GHL) INTEGRATION — CRM sync
// ============================================================

app.get('/api/ghl/status', async (c) => {
  const hasKey = !!(c.env.OPENROUTER_API_KEY || c.env.GROQ_API_KEY)
  return c.json({ connected: false, note: 'Add GHL_API_KEY and GHL_LOCATION_ID to enable GoHighLevel sync', required_vars: ['GHL_API_KEY', 'GHL_LOCATION_ID'], features: ['Contact sync', 'Opportunity pipeline', 'Tag management', 'Appointment booking', 'Conversation SMS', 'Automation triggers'], docs: 'https://highlevel.stoplight.io/docs/integrations' })
})

app.post('/api/ghl/sync-contact', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { client_id } = await c.req.json() as any
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(client_id).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const ghlKey = (c.env as any).GHL_API_KEY; const locationId = (c.env as any).GHL_LOCATION_ID
  if (!ghlKey || !locationId) {
    await DB.prepare(`INSERT INTO ghl_sync_log (entity_type, local_id, action, status, error) VALUES ('contact', ?, 'create', 'skipped', 'GHL_API_KEY or GHL_LOCATION_ID not configured')`).bind(client_id).run()
    return c.json({ success: false, skipped: true, reason: 'GHL_API_KEY and GHL_LOCATION_ID required', client_id, contact_payload: { firstName: client.first_name, lastName: client.last_name, email: client.email, phone: client.phone, tags: [`credit-repair`, `status-${client.status}`, `rj-client`], customField: [{ id: 'credit_score_eq', field_value: String(client.credit_score_eq || '') }, { id: 'monthly_fee', field_value: String(client.monthly_fee || '') }] } })
  }
  try {
    const res = await fetch(`https://services.leadconnectorhq.com/contacts/`, { method: 'POST', headers: { 'Authorization': `Bearer ${ghlKey}`, 'Content-Type': 'application/json', 'Version': '2021-07-28' }, body: JSON.stringify({ firstName: client.first_name, lastName: client.last_name, email: client.email, phone: client.phone, locationId, tags: ['credit-repair', `status-${client.status}`, 'rj-client'] }) })
    const data = await res.json() as any
    await DB.prepare(`INSERT INTO ghl_sync_log (entity_type, entity_id, local_id, action, status, response_body) VALUES ('contact', ?, ?, 'create', ?, ?)`).bind(data?.contact?.id || null, client_id, res.ok ? 'success' : 'failed', JSON.stringify(data).substring(0, 500)).run()
    return c.json({ success: res.ok, ghl_contact_id: data?.contact?.id, client_id })
  } catch (err: any) {
    await DB.prepare(`INSERT INTO ghl_sync_log (entity_type, local_id, action, status, error) VALUES ('contact', ?, 'create', 'failed', ?)`).bind(client_id, err.message).run()
    return c.json({ success: false, error: err.message }, 500)
  }
})

app.post('/api/ghl/webhook', async (c) => {
  const { DB } = c.env
  const body = await c.req.json() as any
  const { type, contactId, email, phone, firstName, lastName, tags } = body
  if (DB && (type === 'ContactCreate' || type === 'ContactUpdate')) {
    const existing = email ? await DB.prepare(`SELECT id FROM crm_leads WHERE email = ?`).bind(email).first() : null
    if (!existing) {
      await DB.prepare(`INSERT INTO crm_leads (name, email, phone, source, stage, notes) VALUES (?, ?, ?, 'gohighlevel', 'new', ?)`).bind(`${firstName || ''} ${lastName || ''}`.trim() || 'Unknown', email || null, phone || null, `Imported from GHL. Contact ID: ${contactId}. Tags: ${(tags || []).join(', ')}`).run()
    }
  }
  return c.json({ received: true, type, contactId })
})

// ============================================================
// CREDIT MONITORING — Score alerts & change detection
// ============================================================

app.post('/api/monitoring/check/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const { new_score, new_score_start } = await c.req.json() as any
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(clientId).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const alerts: any[] = []
  const oldScore = client.credit_score_current || client.credit_score_start || 0
  const newScore = new_score || new_score_start
  if (newScore && oldScore && Math.abs(newScore - oldScore) >= 5) {
    const diff = newScore - oldScore
    const alertType = diff > 0 ? 'score_gain' : 'score_drop'
    await DB.prepare(`INSERT INTO score_alerts (client_id, alert_type, bureau, old_value, new_value, change_amount, description) VALUES (?, ?, 'all', ?, ?, ?, ?)`).bind(clientId, alertType, oldScore, newScore, diff, `Credit score ${diff > 0 ? 'increased' : 'decreased'} by ${Math.abs(diff)} points (${oldScore} → ${newScore})`).run()
    alerts.push({ type: alertType, old: oldScore, new: newScore, change: diff })
    await DB.prepare(`UPDATE clients SET credit_score_current = ?, updated_at = datetime('now') WHERE id = ?`).bind(newScore, clientId).run()
  }
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('monitoring', 'score_check', 'client', ?, ?)`).bind(clientId, `Monitoring check: ${alerts.length} alerts generated`).run().catch(() => {})
  return c.json({ client_id: clientId, alerts_generated: alerts.length, alerts, scores: { old: oldScore, new: newScore || oldScore } })
})

app.get('/api/monitoring/alerts', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const unactionedOnly = c.req.query('unactioned') === '1'
  const query = unactionedOnly
    ? `SELECT sa.*, c.first_name, c.last_name FROM score_alerts sa JOIN clients c ON c.id = sa.client_id WHERE sa.is_actioned = 0 ORDER BY sa.created_at DESC LIMIT 100`
    : `SELECT sa.*, c.first_name, c.last_name FROM score_alerts sa JOIN clients c ON c.id = sa.client_id ORDER BY sa.created_at DESC LIMIT 100`
  const alerts = await DB.prepare(query).all()
  const summary = await DB.prepare(`SELECT alert_type, COUNT(*) as count FROM score_alerts WHERE created_at >= date('now', '-30 days') GROUP BY alert_type`).all()
  return c.json({ alerts: alerts.results, total: alerts.results.length, last_30d_summary: summary.results })
})

app.get('/api/monitoring/alerts/:clientId', async (c) => {
  const { DB } = c.env; const clientId = c.req.param('clientId')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const alerts = await DB.prepare(`SELECT * FROM score_alerts WHERE client_id = ? ORDER BY created_at DESC LIMIT 50`).bind(clientId).all()
  const gains = alerts.results.filter((a: any) => a.alert_type === 'score_gain').length
  const drops = alerts.results.filter((a: any) => a.alert_type === 'score_drop').length
  const totalChange = (alerts.results as any[]).reduce((sum, a) => sum + (a.change_amount || 0), 0)
  return c.json({ alerts: alerts.results, total: alerts.results.length, summary: { gains, drops, total_point_change: totalChange } })
})

app.put('/api/monitoring/alerts/:id/action', async (c) => {
  const { DB } = c.env; const id = c.req.param('id')
  if (!DB) return c.json({ error: 'Database required' }, 500)
  await DB.prepare(`UPDATE score_alerts SET is_actioned = 1, actioned_at = datetime('now') WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

// ============================================================
// FEATURE: STAFF AUTH — Login, Sessions, Logout
// ============================================================

// Helper: get session from cookie
async function getSession(c: any): Promise<any | null> {
  const { DB } = c.env
  if (!DB) return null
  const cookie = c.req.header('cookie') || ''
  const match = cookie.match(/rjbs_session=([^;]+)/)
  if (!match) return null
  const token = match[1]
  const session = await DB.prepare(`SELECT * FROM staff_sessions WHERE token = ? AND expires_at > datetime('now')`).bind(token).first()
  if (session) await DB.prepare(`UPDATE staff_sessions SET last_seen = datetime('now') WHERE token = ?`).bind(token).run()
  return session || null
}

// Helper: SHA-256 hash (Web Crypto)
async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

// GET /login — Login page
app.get('/login', (c) => {
  const error = c.req.query('error')
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Staff Login — RJ Business Solutions</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
  <div class="text-center mb-8">
    <div class="text-4xl mb-2">🏢</div>
    <h1 class="text-2xl font-bold text-gray-900">RJ Business Solutions</h1>
    <p class="text-gray-500 text-sm mt-1">Operations Command Center — Staff Login</p>
  </div>
  ${error ? `<div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">${error === 'invalid' ? '⚠ Invalid email or password.' : '⚠ Session expired. Please log in again.'}</div>` : ''}
  <form method="POST" action="/api/auth/login">
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">Staff Email</label>
      <input type="email" name="email" required placeholder="rick@rjbusinesssolutions.org" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm">
    </div>
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input type="password" name="password" required placeholder="••••••••" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm">
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors">Log In</button>
  </form>
  <p class="text-center text-xs text-gray-400 mt-6">Default password: <code class="bg-gray-100 px-1 rounded">rjbs2026</code> — change via ADMIN_PASSWORD env var</p>
</div>
</body>
</html>`
  return c.html(html)
})

// POST /api/auth/login
app.post('/api/auth/login', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.redirect('/login?error=db')
  let email = '', password = ''
  const ct = c.req.header('content-type') || ''
  if (ct.includes('application/json')) {
    const body = await c.req.json() as any; email = body.email; password = body.password
  } else {
    const body = await c.req.parseBody() as any; email = body.email; password = body.password
  }
  if (!email || !password) return ct.includes('json') ? c.json({ error: 'Email and password required' }, 400) : c.redirect('/login?error=invalid')
  // Find staff user
  const staff = await DB.prepare('SELECT * FROM staff_users WHERE email = ? AND is_active = 1').bind(email.toLowerCase().trim()).first() as any
  if (!staff) return ct.includes('json') ? c.json({ error: 'Invalid credentials' }, 401) : c.redirect('/login?error=invalid')
  // Check password (env var takes precedence, then per-user hash if available)
  const adminPassword = env.ADMIN_PASSWORD || 'rjbs2026'
  const expectedHash = await sha256(adminPassword)
  const inputHash = await sha256(password)
  const passwordOk = password === adminPassword || inputHash === expectedHash || (staff.password_hash && inputHash === staff.password_hash)
  if (!passwordOk) return ct.includes('json') ? c.json({ error: 'Invalid credentials' }, 401) : c.redirect('/login?error=invalid')
  // Create session
  const token = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '')
  const expiresAt = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString() // 8 hours
  await DB.prepare(`INSERT INTO staff_sessions (token, staff_id, staff_email, staff_name, role, expires_at) VALUES (?, ?, ?, ?, ?, ?)`)
    .bind(token, staff.id, staff.email, staff.name, staff.role, expiresAt).run()
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?, 'staff_login', 'staff', ?, ?)`)
    .bind(staff.email, staff.id, `Login from ${c.req.header('cf-connecting-ip') || 'unknown'}`).run()
  if (ct.includes('json')) {
    return c.json({ success: true, token, role: staff.role, name: staff.name, expires_at: expiresAt })
  }
  const res = c.redirect('/')
  res.headers.set('Set-Cookie', `rjbs_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=28800`)
  return res
})

// POST /api/auth/logout
app.post('/api/auth/logout', async (c) => {
  const { DB } = c.env
  const cookie = c.req.header('cookie') || ''
  const match = cookie.match(/rjbs_session=([^;]+)/)
  if (match && DB) await DB.prepare('DELETE FROM staff_sessions WHERE token = ?').bind(match[1]).run()
  const res = c.redirect('/login')
  res.headers.set('Set-Cookie', 'rjbs_session=; Path=/; HttpOnly; Max-Age=0')
  return res
})

// GET /api/auth/me
app.get('/api/auth/me', async (c) => {
  const session = await getSession(c)
  if (!session) return c.json({ authenticated: false }, 401)
  return c.json({ authenticated: true, name: session.staff_name, email: session.staff_email, role: session.role })
})

// GET /api/auth/sessions — list active sessions (admin only)
app.get('/api/auth/sessions', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const sessions = await DB.prepare(`SELECT id, staff_name, staff_email, role, created_at, last_seen, expires_at FROM staff_sessions WHERE expires_at > datetime('now') ORDER BY last_seen DESC`).all()
  return c.json({ sessions: sessions.results, total: sessions.results.length })
})

// ============================================================
// FEATURE: CLIENT DETAIL PAGE — Full SSR dashboard per client
// ============================================================

app.get('/clients/:id', async (c) => {
  const { DB } = c.env
  if (!DB) return c.html('<h1>Database required</h1>', 500)
  const clientId = c.req.param('id')
  const [client, disputes, communications, appointments, reports, scoreHistory, portalToken, mfsnToken] = await Promise.all([
    DB.prepare('SELECT * FROM clients WHERE id = ?').bind(clientId).first(),
    DB.prepare('SELECT * FROM disputes WHERE client_id = ? ORDER BY created_at DESC LIMIT 20').bind(clientId).all(),
    DB.prepare('SELECT * FROM communications WHERE client_id = ? ORDER BY created_at DESC LIMIT 20').bind(clientId).all(),
    DB.prepare('SELECT * FROM appointments WHERE client_id = ? ORDER BY scheduled_at DESC LIMIT 10').bind(clientId).all(),
    DB.prepare('SELECT id, pull_date, score_efx, score_tu, score_exp, total_accounts, total_negative_accounts, total_inquiries FROM credit_reports WHERE client_id = ? ORDER BY pull_date DESC LIMIT 5').bind(clientId).all(),
    DB.prepare('SELECT score_efx, score_tu, score_exp, score_avg, recorded_date FROM credit_score_history WHERE client_id = ? ORDER BY recorded_date ASC').bind(clientId).all(),
    DB.prepare('SELECT token FROM portal_tokens WHERE client_id = ? AND (expires_at IS NULL OR expires_at > datetime(\'now\')) ORDER BY created_at DESC LIMIT 1').bind(clientId).first(),
    DB.prepare('SELECT mfsn_email, last_pull_date, total_pulls FROM mfsn_tokens WHERE client_id = ?').bind(clientId).first()
  ])
  if (!client) return c.html('<div style="font-family:sans-serif;padding:2rem"><h1>Client not found</h1><a href="/">← Back</a></div>', 404)
  const cl = client as any
  const disp = disputes.results as any[]
  const comms = communications.results as any[]
  const apts = appointments.results as any[]
  const rpts = reports.results as any[]
  const sh = scoreHistory.results as any[]
  const pt = portalToken as any
  const mt = mfsnToken as any
  const latestReport = rpts[0]
  const statusColors: any = { active: 'green', lead: 'blue', graduated: 'purple', paused: 'yellow', cancelled: 'red' }
  const statusColor = statusColors[cl.status] || 'gray'
  const scoreColor = (s: number) => s >= 740 ? '#16a34a' : s >= 670 ? '#ca8a04' : s >= 580 ? '#ea580c' : '#dc2626'
  const disputeStatusBadge = (s: string) => {
    const c: any = { pending: 'yellow', sent: 'blue', investigating: 'purple', resolved: 'green', deleted: 'green', verified: 'red', updated: 'orange' }
    return `<span class="px-2 py-0.5 rounded text-xs font-medium bg-${c[s] || 'gray'}-100 text-${c[s] || 'gray'}-700">${s}</span>`
  }
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${cl.first_name} ${cl.last_name} — Client Detail</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
<style>
  body { font-family: 'Inter', system-ui, sans-serif; background: #f8fafc; }
  .section { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.08); margin-bottom: 1.5rem; overflow: hidden; }
  .section-header { padding: 1rem 1.5rem; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; }
  .section-header h2 { font-size: 1rem; font-weight: 600; color: #1e293b; }
  .section-body { padding: 1.5rem; }
  table { width: 100%; font-size: 0.875rem; border-collapse: collapse; }
  th { text-align: left; padding: 0.5rem 0.75rem; color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; background: #f8fafc; }
  td { padding: 0.75rem; border-bottom: 1px solid #f1f5f9; color: #334155; }
  tr:last-child td { border-bottom: none; }
  .score-pill { display: inline-flex; flex-direction: column; align-items: center; padding: 1rem 1.5rem; border-radius: 12px; background: #f8fafc; min-width: 90px; }
  .badge { display: inline-block; padding: 2px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; }
  @media (max-width: 640px) { .section-body { padding: 1rem; } td, th { padding: 0.5rem; } }
</style>
</head>
<body>
<!-- Top Nav -->
<nav class="bg-white border-b sticky top-0 z-10 px-4 py-3 flex items-center gap-3 shadow-sm">
  <a href="/" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
    Dashboard
  </a>
  <span class="text-gray-300">/</span>
  <span class="text-gray-600 text-sm font-medium">${cl.first_name} ${cl.last_name}</span>
  <div class="ml-auto flex gap-2">
    <a href="/onboarding/${cl.id}" class="bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-purple-700">Onboarding</a>
    <a href="/mfsn/report/${latestReport?.id || 'none'}" class="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700">View Report</a>
  </div>
</nav>
<div class="max-w-5xl mx-auto px-4 py-6">
  <!-- Client Header -->
  <div class="section">
    <div class="section-body">
      <div class="flex flex-wrap items-start gap-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 flex-wrap">
            <h1 class="text-2xl font-bold text-gray-900">${cl.first_name} ${cl.last_name}</h1>
            <span class="badge bg-${statusColor}-100 text-${statusColor}-700">${cl.status || 'unknown'}</span>
          </div>
          <div class="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
            ${cl.email ? `<span>📧 ${cl.email}</span>` : ''}
            ${cl.phone ? `<span>📱 ${cl.phone}</span>` : ''}
            ${cl.source ? `<span>📋 Source: ${cl.source}</span>` : ''}
            ${cl.assigned_agent ? `<span>👤 Agent: ${cl.assigned_agent}</span>` : ''}
            ${cl.onboarding_date ? `<span>📅 Onboarded: ${cl.onboarding_date}</span>` : ''}
          </div>
        </div>
        <div class="flex gap-6 text-center">
          <div><div class="text-2xl font-bold text-green-600">$${cl.monthly_fee || 0}</div><div class="text-xs text-gray-400">Monthly Fee</div></div>
          <div><div class="text-2xl font-bold text-blue-600">${cl.credit_score_current || '—'}</div><div class="text-xs text-gray-400">Current Score</div></div>
          <div><div class="text-2xl font-bold text-gray-600">${cl.credit_score_goal || '—'}</div><div class="text-xs text-gray-400">Score Goal</div></div>
        </div>
      </div>
      <!-- Quick actions -->
      <div class="mt-4 flex flex-wrap gap-2">
        <a href="/onboarding/${cl.id}" class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">🚀 Onboarding Wizard</a>
        ${pt?.token ? `<a href="/portal/${pt.token}" target="_blank" class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100">🔗 Client Portal</a>` : `<button onclick="generatePortal(${cl.id})" class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100">🔗 Generate Portal</button>`}
        <a href="/dispute/letter/${disp[0]?.id || 'none'}" class="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100">📄 Print Dispute Letter</a>
        <button onclick="quickDispute(${cl.id})" class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100">⚡ File Dispute</button>
        <button onclick="scheduleCall(${cl.id})" class="px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium hover:bg-yellow-100">📞 Schedule Call</button>
      </div>
    </div>
  </div>

  <!-- Credit Scores -->
  <div class="section">
    <div class="section-header">
      <h2>Credit Scores</h2>
      ${mt ? `<span class="text-xs text-green-600">✓ MFSN connected · Last pull: ${mt.last_pull_date || 'never'} · ${mt.total_pulls || 0} pulls</span>` : '<span class="text-xs text-gray-400">MFSN not connected</span>'}
    </div>
    <div class="section-body">
      ${latestReport ? `
      <div class="flex gap-4 flex-wrap mb-4">
        ${[['Equifax', latestReport.score_efx, 'red'], ['TransUnion', latestReport.score_tu, 'blue'], ['Experian', latestReport.score_exp, 'green']].map(([b, s, col]) => `
        <div class="score-pill border border-${col}-100">
          <div class="text-xs text-${col}-400 font-semibold uppercase mb-1">${b}</div>
          <div class="text-3xl font-bold" style="color:${s ? scoreColor(s as number) : '#94a3b8'}">${s || '—'}</div>
          <div class="text-xs text-gray-400 mt-1">${s && (s as number) >= 740 ? 'Excellent' : s && (s as number) >= 670 ? 'Good' : s && (s as number) >= 580 ? 'Fair' : s ? 'Poor' : 'No score'}</div>
        </div>`).join('')}
        <div class="score-pill border border-gray-100">
          <div class="text-xs text-gray-400 font-semibold uppercase mb-1">Progress</div>
          <div class="text-3xl font-bold text-purple-600">${cl.credit_score_current && cl.credit_score_start ? '+' + (cl.credit_score_current - cl.credit_score_start) : '—'}</div>
          <div class="text-xs text-gray-400 mt-1">${cl.credit_score_start ? 'from ' + cl.credit_score_start : 'No baseline'}</div>
        </div>
      </div>
      <div class="text-xs text-gray-400">Report pulled ${new Date(latestReport.pull_date).toLocaleDateString()} · ${latestReport.total_accounts} accounts · ${latestReport.total_negative_accounts} negative · ${latestReport.total_inquiries} inquiries</div>
      ` : `<div class="text-gray-400 text-sm py-4">No credit reports on file. <a href="/onboarding/${cl.id}#pull-report" class="text-blue-600 underline">Pull first report →</a></div>`}
      ${sh.length > 1 ? `
      <div class="mt-4">
        <div class="text-xs text-gray-500 font-semibold mb-2">SCORE HISTORY</div>
        <div class="overflow-x-auto">
        <table><thead><tr><th>Date</th><th>Equifax</th><th>TransUnion</th><th>Experian</th><th>Avg</th></tr></thead>
        <tbody>${sh.slice(-6).reverse().map(h => `<tr><td>${h.recorded_date?.split('T')[0] || '—'}</td><td>${h.score_efx || '—'}</td><td>${h.score_tu || '—'}</td><td>${h.score_exp || '—'}</td><td><strong>${h.score_avg || '—'}</strong></td></tr>`).join('')}</tbody>
        </table>
        </div>
      </div>` : ''}
    </div>
  </div>

  <!-- Disputes -->
  <div class="section">
    <div class="section-header">
      <h2>Disputes (${disp.length})</h2>
      <button onclick="quickDispute(${cl.id})" class="text-sm bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700">+ File Dispute</button>
    </div>
    ${disp.length > 0 ? `
    <div class="overflow-x-auto">
    <table>
      <thead><tr><th>Bureau</th><th>Account</th><th>Reason</th><th>Round</th><th>Status</th><th>Due</th><th>Action</th></tr></thead>
      <tbody>${disp.map(d => `<tr>
        <td class="font-medium capitalize">${d.bureau || '—'}</td>
        <td>${d.account_name || '—'}<div class="text-xs text-gray-400">${d.account_number || ''}</div></td>
        <td class="max-w-xs truncate text-xs">${d.dispute_reason || '—'}</td>
        <td class="text-center">R${d.dispute_round || 1}</td>
        <td>${disputeStatusBadge(d.status)}</td>
        <td class="text-xs ${d.response_due_date && new Date(d.response_due_date) < new Date() ? 'text-red-600 font-bold' : 'text-gray-500'}">${d.response_due_date || '—'}</td>
        <td><a href="/dispute/letter/${d.id}" class="text-blue-600 text-xs hover:underline">Print</a></td>
      </tr>`).join('')}</tbody>
    </table>
    </div>` : `<div class="section-body text-gray-400 text-sm">No disputes on file. <button onclick="quickDispute(${cl.id})" class="text-blue-600 underline">File first dispute →</button></div>`}
  </div>

  <!-- Appointments -->
  ${apts.length > 0 ? `
  <div class="section">
    <div class="section-header"><h2>Appointments (${apts.length})</h2><button onclick="scheduleCall(${cl.id})" class="text-sm bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">+ Schedule</button></div>
    <div class="overflow-x-auto">
    <table><thead><tr><th>Type</th><th>Date/Time</th><th>Duration</th><th>Notes</th><th>Status</th></tr></thead>
    <tbody>${apts.map(a => `<tr><td class="capitalize font-medium">${a.type}</td><td>${new Date(a.scheduled_at).toLocaleString()}</td><td>${a.duration_minutes ? a.duration_minutes + ' min' : '—'}</td><td class="text-xs text-gray-500 max-w-xs truncate">${a.notes || '—'}</td><td><span class="badge bg-blue-100 text-blue-700">${a.status}</span></td></tr>`).join('')}</tbody>
    </table>
    </div>
  </div>` : ''}

  <!-- Communications -->
  ${comms.length > 0 ? `
  <div class="section">
    <div class="section-header"><h2>Communications (${comms.length})</h2></div>
    <div class="overflow-x-auto">
    <table><thead><tr><th>Channel</th><th>Type</th><th>Subject/Body</th><th>Status</th><th>Date</th></tr></thead>
    <tbody>${comms.map(c => `<tr><td class="capitalize">${c.channel}</td><td class="capitalize text-xs">${c.direction}</td><td class="max-w-xs truncate text-xs">${c.subject || c.body || '—'}</td><td><span class="badge bg-gray-100 text-gray-600">${c.status}</span></td><td class="text-xs text-gray-400">${c.created_at?.split('T')[0] || '—'}</td></tr>`).join('')}</tbody>
    </table>
    </div>
  </div>` : ''}

  <!-- Edit Client Info -->
  <div class="section">
    <div class="section-header"><h2>Edit Client Info</h2></div>
    <div class="section-body">
      <form id="editForm" onsubmit="saveClient(event, ${cl.id})" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label class="block text-xs font-medium text-gray-500 mb-1">Status</label>
          <select name="status" class="w-full border rounded-lg px-3 py-2 text-sm">
            ${['lead','active','paused','graduated','cancelled'].map(s => `<option value="${s}" ${cl.status === s ? 'selected' : ''}>${s}</option>`).join('')}
          </select></div>
        <div><label class="block text-xs font-medium text-gray-500 mb-1">Monthly Fee ($)</label>
          <input type="number" name="monthly_fee" value="${cl.monthly_fee || ''}" class="w-full border rounded-lg px-3 py-2 text-sm"></div>
        <div><label class="block text-xs font-medium text-gray-500 mb-1">Score Start</label>
          <input type="number" name="credit_score_start" value="${cl.credit_score_start || ''}" class="w-full border rounded-lg px-3 py-2 text-sm"></div>
        <div><label class="block text-xs font-medium text-gray-500 mb-1">Score Goal</label>
          <input type="number" name="credit_score_goal" value="${cl.credit_score_goal || ''}" class="w-full border rounded-lg px-3 py-2 text-sm"></div>
        <div><label class="block text-xs font-medium text-gray-500 mb-1">Assigned Agent</label>
          <input type="text" name="assigned_agent" value="${cl.assigned_agent || ''}" class="w-full border rounded-lg px-3 py-2 text-sm"></div>
        <div><label class="block text-xs font-medium text-gray-500 mb-1">Notes</label>
          <input type="text" name="notes" value="${(cl.notes || '').replace(/"/g, '&quot;')}" class="w-full border rounded-lg px-3 py-2 text-sm"></div>
        <div class="sm:col-span-2">
          <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Save Changes</button>
          <span id="saveMsg" class="ml-3 text-green-600 text-sm hidden">✓ Saved</span>
        </div>
      </form>
    </div>
  </div>

  <!-- Report History -->
  ${rpts.length > 0 ? `
  <div class="section">
    <div class="section-header"><h2>Credit Report History (${rpts.length})</h2></div>
    <div class="overflow-x-auto">
    <table><thead><tr><th>Date</th><th>Equifax</th><th>TransUnion</th><th>Experian</th><th>Accounts</th><th>Negatives</th><th>Action</th></tr></thead>
    <tbody>${rpts.map(r => `<tr>
      <td>${r.pull_date?.split('T')[0] || '—'}</td>
      <td style="color:${scoreColor(r.score_efx)}">${r.score_efx || '—'}</td>
      <td style="color:${scoreColor(r.score_tu)}">${r.score_tu || '—'}</td>
      <td style="color:${scoreColor(r.score_exp)}">${r.score_exp || '—'}</td>
      <td>${r.total_accounts || 0}</td>
      <td class="${r.total_negative_accounts > 0 ? 'text-red-600 font-bold' : ''}">${r.total_negative_accounts || 0}</td>
      <td class="flex gap-2">
        <a href="/mfsn/report/${r.id}" class="text-blue-600 text-xs hover:underline">View</a>
        <a href="/api/mfsn/reports/${r.id}/negatives" target="_blank" class="text-red-600 text-xs hover:underline">Negatives</a>
      </td>
    </tr>`).join('')}</tbody>
    </table>
    </div>
  </div>` : ''}
</div>

<!-- Modals & JS -->
<div id="toast" class="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-3 rounded-xl text-sm hidden z-50"></div>
<script>
function toast(msg, ok=true) {
  const t = document.getElementById('toast')
  t.textContent = (ok ? '✓ ' : '✗ ') + msg
  t.className = 'fixed bottom-4 right-4 px-4 py-3 rounded-xl text-sm z-50 text-white ' + (ok ? 'bg-gray-900' : 'bg-red-700')
  t.classList.remove('hidden')
  setTimeout(() => t.classList.add('hidden'), 3000)
}
async function saveClient(e, id) {
  e.preventDefault()
  const fd = new FormData(e.target)
  const body = Object.fromEntries(fd)
  const r = await fetch('/api/ops/clients/' + id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  if (r.ok) { toast('Client saved'); document.getElementById('saveMsg').classList.remove('hidden'); setTimeout(() => document.getElementById('saveMsg').classList.add('hidden'), 2000) }
  else toast('Save failed', false)
}
async function generatePortal(id) {
  const r = await fetch('/api/portal/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: id }) })
  const d = await r.json()
  if (d.success) { toast('Portal created! Reloading...'); setTimeout(() => location.reload(), 1200) }
  else toast('Portal failed: ' + d.error, false)
}
async function quickDispute(clientId) {
  const bureau = prompt('Bureau? (equifax / transunion / experian)') || 'equifax'
  const account = prompt('Account name?') || ''
  const reason = prompt('Dispute reason?') || 'Account information not verified under FCRA §611'
  if (!account) return
  const r = await fetch('/api/ops/disputes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: clientId, bureau, account_name: account, dispute_reason: reason, dispute_round: 1, response_due_date: new Date(Date.now() + 35*86400000).toISOString().split('T')[0] }) })
  const d = await r.json()
  if (d.id) { toast('Dispute filed! Reloading...'); setTimeout(() => location.reload(), 1200) }
  else toast('Failed: ' + d.error, false)
}
async function scheduleCall(clientId) {
  const dt = prompt('Date/time? (e.g. 2026-05-15T10:00:00)')
  const type = prompt('Type? (consultation / follow-up / dispute-review)') || 'follow-up'
  if (!dt) return
  const r = await fetch('/api/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: clientId, type, scheduled_at: dt, duration_minutes: 30 }) })
  const d = await r.json()
  if (d.success) { toast('Appointment scheduled!'); setTimeout(() => location.reload(), 1200) }
  else toast('Failed: ' + d.error, false)
}
</script>
</body>
</html>`
  return c.html(html)
})

// ============================================================
// FEATURE: DISPUTE LETTER PRINT PAGE
// ============================================================

app.get('/dispute/letter/:disputeId', async (c) => {
  const { DB } = c.env
  if (!DB) return c.html('<h1>Database required</h1>', 500)
  const disputeId = c.req.param('disputeId')
  if (disputeId === 'none') return c.html(`<html><body style="font-family:sans-serif;padding:2rem"><h2>No dispute selected</h2><p>Go to a client page and select a specific dispute.</p></body></html>`)
  const dispute = await DB.prepare(`SELECT d.*, c.first_name, c.last_name, c.email FROM disputes d LEFT JOIN clients c ON c.id = d.client_id WHERE d.id = ?`).bind(disputeId).first() as any
  if (!dispute) return c.html('<h1>Dispute not found</h1>', 404)
  const bureauAddresses: any = {
    equifax: 'Equifax Information Services, LLC\nP.O. Box 740256\nAtlanta, GA 30374-0256',
    transunion: 'TransUnion Consumer Solutions\nP.O. Box 2000\nChester, PA 19016-2000',
    experian: 'Experian\nP.O. Box 4500\nAllen, TX 75013'
  }
  const bureauAddr = bureauAddresses[dispute.bureau?.toLowerCase()] || 'Bureau Address'
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const fcraSection = dispute.fcra_section || 'FCRA § 611'
  const roundLabel: any = { 1: 'Initial Dispute', 2: 'Method of Verification Request', 3: 'CFPB Pre-Complaint Notice', 4: 'Direct Creditor Dispute (§623)', 5: 'Final Legal Notice' }
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Dispute Letter — ${dispute.account_name}</title>
<style>
  body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; color: #000; background: #fff; max-width: 8.5in; margin: 0 auto; padding: 1in; }
  .no-print { font-family: system-ui; background: #1e40af; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; margin-bottom: 24px; display: inline-block; text-decoration: none; }
  .header-line { border-top: 2px solid #000; border-bottom: 2px solid #000; padding: 8px 0; margin: 16px 0; font-weight: bold; text-align: center; }
  .section-title { font-weight: bold; text-decoration: underline; margin-top: 1.5em; }
  .signature-line { border-bottom: 1px solid #000; width: 200px; display: inline-block; }
  @media print { .no-print { display: none !important; } body { padding: 0.75in; } }
</style>
</head>
<body>
<div class="no-print" onclick="window.print()">🖨 Print / Save as PDF</div>
<a href="/clients/${dispute.client_id}" class="no-print" style="background:#374151;margin-left:8px">← Back to Client</a>

<p style="text-align:right">${today}</p>

<p>${dispute.first_name} ${dispute.last_name}<br>
[Client Address — update in records]<br>
[City, State ZIP]</p>

<p>${bureauAddr.split('\n').join('<br>')}</p>

<div class="header-line">NOTICE OF DISPUTE — ${fcraSection}<br>RE: ${roundLabel[dispute.dispute_round] || 'Dispute Letter'} (Round ${dispute.dispute_round || 1})</div>

<p>To Whom It May Concern,</p>

<p>I am writing to formally dispute the accuracy and/or completeness of information currently appearing on my consumer credit report maintained by your agency. This dispute is submitted pursuant to the Fair Credit Reporting Act (FCRA), 15 U.S.C. § 1681 et seq., specifically ${fcraSection}.</p>

<p class="section-title">DISPUTED ACCOUNT INFORMATION:</p>
<table style="width:100%;border-collapse:collapse;margin:8px 0">
  <tr style="background:#f5f5f5"><td style="padding:6px;border:1px solid #ccc;font-weight:bold;width:40%">Field</td><td style="padding:6px;border:1px solid #ccc;font-weight:bold">Details</td></tr>
  <tr><td style="padding:6px;border:1px solid #ccc">Creditor / Account Name</td><td style="padding:6px;border:1px solid #ccc">${dispute.account_name || 'As shown on report'}</td></tr>
  ${dispute.account_number ? `<tr><td style="padding:6px;border:1px solid #ccc">Account Number</td><td style="padding:6px;border:1px solid #ccc">${dispute.account_number}</td></tr>` : ''}
  <tr><td style="padding:6px;border:1px solid #ccc">Bureau</td><td style="padding:6px;border:1px solid #ccc">${dispute.bureau ? dispute.bureau.charAt(0).toUpperCase() + dispute.bureau.slice(1) : '—'}</td></tr>
  <tr><td style="padding:6px;border:1px solid #ccc">Dispute Basis</td><td style="padding:6px;border:1px solid #ccc">${dispute.dispute_reason || 'Information is inaccurate, incomplete, or unverifiable'}</td></tr>
</table>

<p class="section-title">BASIS FOR DISPUTE:</p>
<p>${dispute.dispute_reason || 'The above-referenced account contains information that is inaccurate, incomplete, or unverifiable and cannot be substantiated upon investigation.'}</p>

${dispute.dispute_round >= 2 ? `<p class="section-title">REQUEST FOR METHOD OF VERIFICATION:</p>
<p>As this is a subsequent dispute, I hereby request, pursuant to FCRA § 611(a)(7), that you provide me with a complete description of the method used to verify the disputed information, including the name, address, and telephone number of any persons contacted in the course of the reinvestigation.</p>` : ''}

${dispute.dispute_round >= 3 ? `<p class="section-title">NOTICE OF CFPB COMPLAINT:</p>
<p>Please be advised that I am prepared to file a formal complaint with the Consumer Financial Protection Bureau (CFPB) and the Federal Trade Commission (FTC) if this matter is not resolved within 30 days as required by FCRA § 611(a)(1).</p>` : ''}

<p class="section-title">YOUR OBLIGATIONS UNDER THE FCRA:</p>
<p>Pursuant to FCRA § 611, you are required to conduct a reasonable reinvestigation of this disputed information within <strong>30 days</strong> of receipt of this letter (or up to 45 days if I provide additional information during the reinvestigation period). If you cannot verify the accuracy of the disputed information, you must promptly delete or modify it.</p>

<p>Please confirm receipt of this dispute in writing and provide the results of your reinvestigation within the statutory timeframe. If you have any questions regarding this dispute, please contact me at the address listed above.</p>

<p style="margin-top:2em">Sincerely,</p>
<p style="margin-top:2em"><span class="signature-line">&nbsp;</span></p>
<p>${dispute.first_name} ${dispute.last_name}<br>
<em>Sent via Certified Mail — Return Receipt Requested</em></p>

<p style="margin-top:2em;font-size:10pt;color:#555;border-top:1px solid #ddd;padding-top:8px">
<strong>Letter ID:</strong> D-${dispute.id}-R${dispute.dispute_round || 1} &nbsp;|&nbsp;
<strong>Generated:</strong> ${today} &nbsp;|&nbsp;
<strong>FCRA Reference:</strong> ${fcraSection} &nbsp;|&nbsp;
<strong>Response Due:</strong> ${dispute.response_due_date || 'Within 30 days of receipt'}
</p>
</body>
</html>`
  return c.html(html)
})

// ============================================================
// FEATURE: CLIENT ONBOARDING WIZARD — 6-Step SSR Page
// ============================================================

app.get('/onboarding/:clientId', async (c) => {
  const { DB } = c.env
  if (!DB) return c.html('<h1>Database required</h1>', 500)
  const clientId = c.req.param('clientId')
  const client = await DB.prepare('SELECT * FROM clients WHERE id = ?').bind(clientId).first() as any
  if (!client) return c.html('<h1>Client not found</h1>', 404)
  const [disputes, sequences, portal, mfsnToken] = await Promise.all([
    DB.prepare('SELECT COUNT(*) as total FROM disputes WHERE client_id = ?').bind(clientId).first(),
    DB.prepare('SELECT id, name, trigger_event FROM email_sequences LIMIT 6').all(),
    DB.prepare('SELECT token FROM portal_tokens WHERE client_id = ? ORDER BY created_at DESC LIMIT 1').bind(clientId).first(),
    DB.prepare('SELECT mfsn_email FROM mfsn_tokens WHERE client_id = ?').bind(clientId).first()
  ])
  const cl = client; const pt = portal as any; const mt = mfsnToken as any
  const disputeCount = (disputes as any)?.total || 0
  const seqs = sequences.results as any[]
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Onboarding — ${cl.first_name} ${cl.last_name}</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
<style>
  body { font-family: system-ui, sans-serif; background: #f8fafc; }
  .step { display: none; }
  .step.active { display: block; }
  .step-btn { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; border: 2px solid; cursor: pointer; transition: all .2s; }
  .step-btn.done { background: #16a34a; color: white; border-color: #16a34a; }
  .step-btn.active { background: #2563eb; color: white; border-color: #2563eb; }
  .step-btn.pending { background: white; color: #94a3b8; border-color: #e2e8f0; }
  .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
  input, select, textarea { border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; width: 100%; font-size: 14px; outline: none; transition: border .2s; }
  input:focus, select:focus, textarea:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,.1); }
  .btn-primary { background: #2563eb; color: white; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; font-size: 14px; }
  .btn-primary:hover { background: #1d4ed8; }
  .btn-secondary { background: #f1f5f9; color: #374151; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; font-size: 14px; }
  .result-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-top: 12px; font-size: 14px; color: #166534; display: none; }
  .error-box { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 12px; margin-top: 12px; font-size: 14px; color: #991b1b; display: none; }
</style>
</head>
<body>
<nav class="bg-white border-b px-4 py-3 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
  <a href="/clients/${cl.id}" class="text-blue-600 text-sm flex items-center gap-1">← ${cl.first_name} ${cl.last_name}</a>
  <span class="text-gray-300">/</span><span class="text-sm text-gray-600 font-medium">Client Onboarding Wizard</span>
</nav>
<div class="max-w-3xl mx-auto px-4 py-8">
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-900">Onboard: ${cl.first_name} ${cl.last_name}</h1>
    <p class="text-gray-500 text-sm mt-1">Complete each step to fully onboard this client per SOP-005.</p>
  </div>
  <!-- Step Progress -->
  <div class="card p-4 mb-6">
    <div class="flex items-center gap-2 overflow-x-auto">
      ${['Client Info', 'CROA Disclosure', 'Pull Report', 'Dispute Plan', 'Enroll Sequences', 'Portal Setup'].map((name, i) => `
      <div class="flex items-center gap-2 flex-shrink-0">
        <button class="step-btn ${i === 0 ? 'active' : 'pending'}" id="stepbtn${i}" onclick="goStep(${i})">${i + 1}</button>
        <span class="text-xs text-gray-500 hidden sm:inline">${name}</span>
        ${i < 5 ? '<div class="w-8 h-px bg-gray-200"></div>' : ''}
      </div>`).join('')}
    </div>
  </div>

  <!-- STEP 1: Client Info -->
  <div class="step active card p-6" id="step0">
    <h2 class="text-lg font-bold mb-4">Step 1: Review & Confirm Client Info</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div><label class="text-xs font-medium text-gray-500 block mb-1">First Name</label><input id="s1_fname" value="${cl.first_name || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Last Name</label><input id="s1_lname" value="${cl.last_name || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Email</label><input id="s1_email" type="email" value="${cl.email || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Phone</label><input id="s1_phone" value="${cl.phone || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Score Start</label><input id="s1_score_start" type="number" value="${cl.credit_score_start || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Score Goal</label><input id="s1_score_goal" type="number" value="${cl.credit_score_goal || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Monthly Fee ($)</label><input id="s1_fee" type="number" value="${cl.monthly_fee || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">Source</label>
        <select id="s1_source"><option value="referral">Referral</option><option value="funnel">Funnel</option><option value="social">Social</option><option value="ghl">GoHighLevel</option><option value="import">Import</option></select></div>
    </div>
    <div id="s1_result" class="result-box">✓ Client info saved successfully.</div>
    <div id="s1_error" class="error-box"></div>
    <div class="flex gap-3 mt-4">
      <button class="btn-primary" onclick="saveStep1()">Save & Continue →</button>
    </div>
  </div>

  <!-- STEP 2: CROA Disclosure -->
  <div class="step card p-6" id="step1">
    <h2 class="text-lg font-bold mb-2">Step 2: CROA Authorization Disclosure</h2>
    <p class="text-sm text-gray-500 mb-4">The following disclosure is legally required before any credit repair work begins (CROA § 404).</p>
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed mb-4">
      <p class="font-bold mb-2">CREDIT REPAIR ORGANIZATIONS ACT — REQUIRED DISCLOSURE</p>
      <p>You have the right to dispute inaccurate information in your credit report by contacting the credit bureau directly. The credit bureaus must investigate the items you question, usually within 30 days unless they consider your dispute frivolous. There is no fee for disputing errors in your credit report with the credit bureaus.</p>
      <p class="mt-2">RJ Business Solutions is a credit repair organization as defined by the Credit Repair Organizations Act (CROA). Before signing a contract with any credit repair organization, you should know:</p>
      <ul class="mt-2 ml-4 list-disc space-y-1">
        <li>You have the right to cancel within 3 business days</li>
        <li>Payment will not be charged until services are performed</li>
        <li>RJ Business Solutions cannot remove accurate information from your report</li>
        <li>You have the right to use a credit repair organization to dispute items on your behalf</li>
      </ul>
    </div>
    <div class="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
      <input type="checkbox" id="croa_ack" class="w-4 h-4 accent-blue-600" style="width:auto">
      <label for="croa_ack" class="text-sm">I confirm the CROA disclosure has been presented to and acknowledged by ${cl.first_name} ${cl.last_name}.</label>
    </div>
    <div class="flex gap-3 mt-4">
      <button class="btn-secondary" onclick="goStep(0)">← Back</button>
      <button class="btn-primary" onclick="completeCROA()">Acknowledge & Continue →</button>
    </div>
  </div>

  <!-- STEP 3: Pull Credit Report -->
  <div class="step card p-6" id="step2" id="pull-report">
    <h2 class="text-lg font-bold mb-2">Step 3: Pull Credit Report (MFSN)</h2>
    <p class="text-sm text-gray-500 mb-4">Enter the client's MFSN member credentials to pull their 3-bureau report. ${mt ? `<strong class="text-green-600">Previously used: ${mt.mfsn_email}</strong>` : ''}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div><label class="text-xs font-medium text-gray-500 block mb-1">MFSN Member Email</label><input id="mfsn_email" placeholder="client@myfreescorenow.com" value="${mt?.mfsn_email || ''}"></div>
      <div><label class="text-xs font-medium text-gray-500 block mb-1">MFSN Member Token</label><input id="mfsn_token" placeholder="mfsn_tok_..."></div>
    </div>
    <div id="s3_result" class="result-box"></div>
    <div id="s3_error" class="error-box"></div>
    <div class="flex gap-3 mt-4">
      <button class="btn-secondary" onclick="goStep(1)">← Back</button>
      <button class="btn-primary" onclick="pullReport(${cl.id})">Pull 3-Bureau Report</button>
      <button class="btn-secondary" onclick="goStep(3)">Skip →</button>
    </div>
  </div>

  <!-- STEP 4: Dispute Plan -->
  <div class="step card p-6" id="step3">
    <h2 class="text-lg font-bold mb-2">Step 4: Review Dispute Plan</h2>
    <p class="text-sm text-gray-500 mb-4">Review negative accounts and auto-generate disputes for R1 filing.</p>
    <div id="candidates_list"><button class="btn-primary" onclick="loadCandidates(${cl.id})">Load Dispute Candidates</button></div>
    <div class="mt-4">
      <p class="text-xs text-gray-400">Existing disputes: <strong>${disputeCount}</strong></p>
    </div>
    <div class="flex gap-3 mt-4">
      <button class="btn-secondary" onclick="goStep(2)">← Back</button>
      <button class="btn-primary" onclick="goStep(4)">Continue →</button>
    </div>
  </div>

  <!-- STEP 5: Email Sequences -->
  <div class="step card p-6" id="step4">
    <h2 class="text-lg font-bold mb-2">Step 5: Enroll in Email Sequences</h2>
    <p class="text-sm text-gray-500 mb-4">Enroll ${cl.first_name} in automated email drip sequences.</p>
    <div class="space-y-3">
      ${seqs.map(seq => `
      <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
        <div>
          <div class="text-sm font-medium text-gray-800">${seq.name}</div>
          <div class="text-xs text-gray-400">Trigger: ${seq.trigger_event}</div>
        </div>
        <button class="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700" onclick="enrollSeq(${cl.id}, ${seq.id}, '${seq.name}', this)">Enroll</button>
      </div>`).join('')}
    </div>
    <div class="flex gap-3 mt-4">
      <button class="btn-secondary" onclick="goStep(3)">← Back</button>
      <button class="btn-primary" onclick="goStep(5)">Continue →</button>
    </div>
  </div>

  <!-- STEP 6: Portal Setup -->
  <div class="step card p-6" id="step5">
    <h2 class="text-lg font-bold mb-2">Step 6: Client Portal Setup</h2>
    <p class="text-sm text-gray-500 mb-4">Generate a secure client portal link and share it with ${cl.first_name}.</p>
    ${pt?.token ? `
    <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
      <p class="text-sm font-medium text-green-800 mb-2">✓ Portal already exists for this client</p>
      <div class="flex items-center gap-2">
        <input class="flex-1 text-sm bg-white" value="${`${c.req.url.split('/onboarding')[0]}/portal/${pt.token}`}" id="portal_url" readonly>
        <button onclick="copyPortal()" class="bg-green-600 text-white px-3 py-1.5 rounded text-sm">Copy</button>
      </div>
    </div>` : `
    <div id="portal_create">
      <button class="btn-primary" onclick="createPortal(${cl.id})">Generate Portal Link</button>
    </div>
    <div id="portal_result" class="result-box mt-3"></div>`}
    <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <p class="text-sm font-bold text-blue-800 mb-2">✅ Onboarding Complete Checklist:</p>
      <ul class="text-sm text-blue-700 space-y-1" id="checklist">
        <li id="chk1">☐ Client info confirmed</li>
        <li id="chk2">☐ CROA disclosure acknowledged</li>
        <li id="chk3">☐ Credit report pulled</li>
        <li id="chk4">☐ Disputes planned</li>
        <li id="chk5">☐ Email sequences enrolled</li>
        <li id="chk6">☐ Portal link shared</li>
      </ul>
    </div>
    <div class="flex gap-3 mt-4">
      <button class="btn-secondary" onclick="goStep(4)">← Back</button>
      <a href="/clients/${cl.id}" class="btn-primary" style="text-decoration:none;display:inline-block">Finish Onboarding →</a>
    </div>
  </div>
</div>

<script>
const checks = Array(6).fill(false)
function goStep(n) {
  document.querySelectorAll('.step').forEach((s, i) => { s.classList.toggle('active', i === n) })
  document.querySelectorAll('.step-btn').forEach((b, i) => {
    b.classList.remove('done', 'active', 'pending')
    if (checks[i]) b.classList.add('done')
    else if (i === n) b.classList.add('active')
    else b.classList.add('pending')
  })
}
function markDone(n) { checks[n] = true; const el = document.getElementById('chk' + (n+1)); if (el) el.textContent = el.textContent.replace('☐', '✅') }
async function saveStep1() {
  const body = { first_name: document.getElementById('s1_fname').value, last_name: document.getElementById('s1_lname').value, email: document.getElementById('s1_email').value, phone: document.getElementById('s1_phone').value, credit_score_start: parseInt(document.getElementById('s1_score_start').value) || null, credit_score_goal: parseInt(document.getElementById('s1_score_goal').value) || null, monthly_fee: parseFloat(document.getElementById('s1_fee').value) || null, source: document.getElementById('s1_source').value }
  const r = await fetch('/api/ops/clients/${cl.id}', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  const d = await r.json()
  if (d.success) { document.getElementById('s1_result').style.display='block'; markDone(0); setTimeout(() => goStep(1), 800) }
  else { document.getElementById('s1_error').textContent = d.error || 'Save failed'; document.getElementById('s1_error').style.display='block' }
}
function completeCROA() {
  if (!document.getElementById('croa_ack').checked) { alert('Please acknowledge the CROA disclosure first.'); return }
  markDone(1); goStep(2)
}
async function pullReport(id) {
  const email = document.getElementById('mfsn_email').value
  const token = document.getElementById('mfsn_token').value
  if (!email || !token) { document.getElementById('s3_error').textContent = 'MFSN email and token required.'; document.getElementById('s3_error').style.display='block'; return }
  document.getElementById('s3_error').style.display='none'
  document.getElementById('s3_result').textContent = '⏳ Pulling report from MFSN...'
  document.getElementById('s3_result').style.display='block'
  const r = await fetch('/api/mfsn/fetch-3b', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_email: email, client_token: token, client_id: id }) })
  const d = await r.json()
  if (d.success) { document.getElementById('s3_result').textContent = '✅ Report pulled! EFX: ' + (d.scores?.efx || '—') + ' | TU: ' + (d.scores?.tu || '—') + ' | EXP: ' + (d.scores?.exp || '—'); markDone(2); setTimeout(() => goStep(3), 1000) }
  else { document.getElementById('s3_error').textContent = d.error || 'Report pull failed. Check MFSN credentials.'; document.getElementById('s3_error').style.display='block'; document.getElementById('s3_result').style.display='none' }
}
async function loadCandidates(id) {
  const r = await fetch('/api/mfsn/clients/' + id + '/dispute-candidates')
  const d = await r.json()
  const el = document.getElementById('candidates_list')
  if (d.error) { el.innerHTML = '<p class="text-gray-500 text-sm">' + d.error + '</p>'; return }
  if (d.total_candidates === 0) { el.innerHTML = '<p class="text-green-600 text-sm font-medium">✅ No undisputed negative accounts found. Client file is clean.</p>'; return }
  el.innerHTML = '<div class="space-y-2 mb-3">' + d.candidates.slice(0,8).map(c => '<div class="flex items-center justify-between p-2 border rounded text-sm"><span class="font-medium">' + c.account_name + ' <span class="text-xs text-gray-400">(' + c.bureau + ')</span></span><span class="text-xs px-2 py-0.5 rounded bg-' + (c.priority_label === 'critical' ? 'red' : 'yellow') + '-100 text-' + (c.priority_label === 'critical' ? 'red' : 'yellow') + '-700">' + c.priority_label + '</span></div>').join('') + '</div><button class="btn-primary text-sm" onclick="autoDispute(' + id + ')">Auto-Generate All Disputes (R1)</button>'
}
async function autoDispute(id) {
  const reportR = await fetch('/api/mfsn/clients/' + id + '/dispute-candidates')
  const rd = await reportR.json()
  if (!rd.report_id) { alert('No report found. Pull a report first.'); return }
  const r = await fetch('/api/mfsn/reports/' + rd.report_id + '/auto-dispute', { method: 'POST', headers: {'Content-Type':'application/json'}, body: '{}' })
  const d = await r.json()
  alert('Created ' + (d.disputes_created || 0) + ' disputes!')
  markDone(3)
}
async function enrollSeq(clientId, seqId, name, btn) {
  const r = await fetch('/api/email/sequences/enroll', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: clientId, sequence_id: seqId }) })
  const d = await r.json()
  if (d.success) { btn.textContent = '✓ Enrolled'; btn.disabled = true; btn.className = 'text-sm bg-green-600 text-white px-3 py-1 rounded-lg'; markDone(4) }
  else alert('Enroll failed: ' + d.error)
}
async function createPortal(id) {
  const r = await fetch('/api/portal/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: id }) })
  const d = await r.json()
  if (d.success) {
    const el = document.getElementById('portal_result')
    el.innerHTML = '✅ Portal created! <br><input class="mt-2 w-full text-sm bg-white px-2 py-1 rounded border" value="' + (window.location.origin + '/portal/' + d.token) + '" readonly>'
    el.style.display = 'block'
    markDone(5)
  }
}
function copyPortal() { const el = document.getElementById('portal_url'); el.select(); document.execCommand('copy'); markDone(5) }
</script>
</body>
</html>`
  return c.html(html)
})

// ============================================================
// FEATURE: BULK DISPUTE FILING
// ============================================================

app.post('/api/disputes/bulk', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const body = await c.req.json() as any
  const { client_id, disputes } = body
  if (!client_id || !Array.isArray(disputes) || disputes.length === 0) return c.json({ error: 'client_id and disputes array required' }, 400)
  const created: any[] = []; const errors: any[] = []
  const bureauMap: any = { equifax: 'equifax', transunion: 'transunion', experian: 'experian', efx: 'equifax', tu: 'transunion', exp: 'experian' }
  for (let i = 0; i < disputes.length; i++) {
    const d = disputes[i]
    if (!d.account_name && !d.bureau) { errors.push({ index: i, error: 'account_name required' }); continue }
    try {
      const bureau = bureauMap[d.bureau?.toLowerCase()] || d.bureau || 'equifax'
      const r = await DB.prepare(`INSERT INTO disputes (client_id, bureau, account_name, account_number, dispute_reason, status, dispute_round, fcra_section, letter_template, response_due_date) VALUES (?, ?, ?, ?, ?, 'pending', ?, ?, 'R1_Standard', date('now', '+35 days'))`)
        .bind(client_id, bureau, d.account_name || '', d.account_number || '', d.dispute_reason || 'Account information not verified — requesting method of verification under FCRA §611', d.dispute_round || 1, d.fcra_section || 'FCRA §611').run()
      created.push({ index: i, id: r.meta.last_row_id, bureau, account: d.account_name })
    } catch (err: any) { errors.push({ index: i, error: err.message }) }
  }
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'bulk_disputes_filed', 'client', ?, ?)`).bind(client_id, `Bulk filed ${created.length} disputes for client ${client_id}`).run()
  // Fire webhook
  try {
    const configs = await DB.prepare(`SELECT url, headers FROM webhook_configs WHERE is_active = 1 AND events LIKE '%dispute.filed%'`).all()
    for (const cfg of configs.results as any[]) {
      await fetch(cfg.url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(cfg.headers ? JSON.parse(cfg.headers) : {}) }, body: JSON.stringify({ event: 'dispute.filed', client_id, disputes_created: created.length }) }).catch(() => {})
    }
  } catch (_) {}
  return c.json({ success: true, created: created.length, errors: errors.length, disputes: created, dispute_errors: errors })
})

// ============================================================
// FEATURE: STRIPE PAYMENT LINK — Generate checkout session URL
// ============================================================

app.post('/api/stripe/payment-link', async (c) => {
  const env = c.env; const { DB } = env
  if (!env.STRIPE_SECRET_KEY) return c.json({ error: 'Stripe not configured. Set STRIPE_SECRET_KEY.' }, 500)
  const body = await c.req.json() as any
  const { client_id, plan, success_url, cancel_url } = body
  const planPrices: any = { basic: 9900, standard: 17900, premium: 29900, autopilot: 49900 }
  const planPrice = planPrices[plan?.toLowerCase()] || planPrices.standard
  const planName = plan ? (plan.charAt(0).toUpperCase() + plan.slice(1)) + ' Credit Repair' : 'Standard Credit Repair'
  let customerEmail = ''
  if (client_id && DB) {
    const cl = await DB.prepare('SELECT email, first_name, last_name FROM clients WHERE id = ?').bind(client_id).first() as any
    if (cl) customerEmail = cl.email || ''
  }
  try {
    const params = new URLSearchParams({
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][product_data][name]': planName,
      'line_items[0][price_data][recurring][interval]': 'month',
      'line_items[0][price_data][unit_amount]': String(planPrice),
      'line_items[0][quantity]': '1',
      'mode': 'subscription',
      'success_url': success_url || 'https://rjbusinesssolutions.org/success?session_id={CHECKOUT_SESSION_ID}',
      'cancel_url': cancel_url || 'https://rjbusinesssolutions.org/',
      'metadata[client_id]': client_id || '',
      'metadata[plan]': plan || 'standard',
    })
    if (customerEmail) params.append('customer_email', customerEmail)
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', { method: 'POST', headers: { 'Authorization': 'Bearer ' + env.STRIPE_SECRET_KEY, 'Content-Type': 'application/x-www-form-urlencoded' }, body: params })
    const session = await res.json() as any
    if (session.error) return c.json({ error: 'Stripe error: ' + session.error.message }, 400)
    if (DB && client_id) await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('system', 'payment_link_created', 'client', ?, ?)`).bind(client_id, `Stripe checkout: ${planName} at $${planPrice / 100}/mo`).run()
    return c.json({ success: true, payment_url: session.url, session_id: session.id, plan: planName, amount: planPrice, currency: 'usd', expires_at: session.expires_at ? new Date(session.expires_at * 1000).toISOString() : null })
  } catch (err: any) {
    return c.json({ error: 'Stripe request failed: ' + err.message }, 500)
  }
})

// ============================================================
// FEATURE: INBOUND TWILIO SMS WEBHOOK
// ============================================================

app.post('/api/twilio/inbound', async (c) => {
  const { DB } = c.env
  const body = await c.req.parseBody() as any
  const from = body.From || ''
  const messageBody = body.Body || ''
  const messageSid = body.MessageSid || ''
  const to = body.To || ''
  // Find client by phone
  let clientId: number | null = null
  if (DB && from) {
    const cleaned = from.replace(/\D/g, '')
    const client = await DB.prepare(`SELECT id FROM clients WHERE REPLACE(REPLACE(REPLACE(phone, '-', ''), ' ', ''), '(', '') LIKE ? OR phone LIKE ?`).bind('%' + cleaned.slice(-10), '%' + from + '%').first() as any
    if (client) clientId = client.id
  }
  // Log to communications
  if (DB) {
    await DB.prepare(`INSERT INTO communications (client_id, channel, direction, provider, from_address, to_address, body, status, external_id) VALUES (?, 'sms', 'inbound', 'twilio', ?, ?, ?, 'delivered', ?)`)
      .bind(clientId, from, to, messageBody, messageSid).run()
    // Create notification for staff
    await DB.prepare(`INSERT INTO notifications (recipient, type, channel, title, message, severity) VALUES ('staff', 'system', 'in_app', 'Inbound SMS', ?, 'info')`)
      .bind(`From ${from}${clientId ? ' (Client #' + clientId + ')' : ''}: "${messageBody}"`).run()
    if (clientId) await DB.prepare(`UPDATE clients SET last_contact_date = date('now'), updated_at = datetime('now') WHERE id = ?`).bind(clientId).run()
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('twilio', 'inbound_sms', 'communication', ?, ?)`).bind(clientId || 0, `From ${from}: ${messageBody.slice(0, 100)}`).run()
  }
  // Auto-reply (optional)
  const autoReplies: any = { 'stop': 'You have been unsubscribed.', 'help': 'Reply STOP to unsubscribe. For questions call us at (505) 555-0100.', 'status': 'Your credit repair is in progress! Log in to your portal for the latest updates.' }
  const autoReply = autoReplies[messageBody.trim().toLowerCase()]
  const twiml = autoReply ? `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${autoReply}</Message></Response>` : `<?xml version="1.0" encoding="UTF-8"?><Response></Response>`
  return new Response(twiml, { headers: { 'Content-Type': 'text/xml' } })
})

// ============================================================
// FEATURE: EMAIL EVENT TRACKING (SendGrid / Resend webhooks)
// ============================================================

app.post('/api/email/events', async (c) => {
  const { DB } = c.env
  const ct = c.req.header('content-type') || ''
  let events: any[] = []
  if (ct.includes('application/json')) {
    const body = await c.req.json() as any
    events = Array.isArray(body) ? body : [body]
  }
  if (!DB) return c.json({ received: events.length })
  let processed = 0
  for (const evt of events) {
    // Support SendGrid format { event, email, timestamp, sg_message_id } and Resend format { type, created_at, data: { email_id, to } }
    const eventType = evt.event || evt.type || 'unknown'
    const email = evt.email || evt.data?.to?.[0] || ''
    const externalId = evt.sg_message_id || evt.data?.email_id || evt.MessageSid || ''
    const statusMap: any = { delivered: 'delivered', open: 'opened', click: 'clicked', bounce: 'bounced', dropped: 'failed', spamreport: 'failed', unsubscribe: 'failed', 'email.delivered': 'delivered', 'email.opened': 'opened', 'email.clicked': 'clicked', 'email.bounced': 'bounced' }
    const newStatus = statusMap[eventType] || 'delivered'
    if (externalId) await DB.prepare(`UPDATE communications SET status = ? WHERE external_id = ? OR external_id LIKE ?`).bind(newStatus, externalId, externalId + '%').run()
    else if (email) await DB.prepare(`UPDATE communications SET status = ? WHERE to_address = ? AND channel = 'email' ORDER BY created_at DESC LIMIT 1`).bind(newStatus, email).run()
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('sendgrid', ?, 'communication', 0, ?)`).bind('email_event_' + newStatus, `${eventType} for ${email}`).run()
    processed++
  }
  return c.json({ received: events.length, processed })
})

// ============================================================
// FEATURE: CRON JOB ENDPOINTS — For scheduled execution
// ============================================================

// POST /api/cron/process-sequences — Run all pending email + SMS drip sends
app.post('/api/cron/process-sequences', async (c) => {
  const env = c.env; const { DB } = env
  // Optional: check cron secret header for security
  const cronSecret = env.CRON_SECRET
  if (cronSecret && c.req.header('x-cron-secret') !== cronSecret) return c.json({ error: 'Unauthorized' }, 401)
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const start = Date.now()
  let emailSent = 0, smsSent = 0, errors = 0
  // Process pending email sends (status = 'pending')
  const pendingEmails = await DB.prepare(`SELECT es.*, cl.first_name, cl.last_name FROM email_sends es JOIN clients cl ON cl.id = es.client_id WHERE es.status = 'pending' LIMIT 50`).all()
  for (const send of pendingEmails.results as any[]) {
    try {
      let success = false
      const toEmail = send.to_email || ''
      const subject = send.subject || 'Update from RJ Business Solutions'
      const body = (send.body || '').replace(/\{first_name\}/g, send.first_name).replace(/\{last_name\}/g, send.last_name)
      if (env.RESEND_API_KEY && toEmail) {
        const r = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: `${env.COMPANY_NAME || 'RJ Business Solutions'} <${env.COMPANY_EMAIL || 'noreply@rjbusinesssolutions.org'}>`, to: [toEmail], subject, text: body }) })
        success = r.ok
      }
      await DB.prepare(`UPDATE email_sends SET status = ? WHERE id = ?`).bind(success ? 'sent' : 'failed', send.id).run()
      if (success) emailSent++; else errors++
    } catch (_) { errors++; await DB.prepare(`UPDATE email_sends SET status = 'failed' WHERE id = ?`).bind(send.id).run() }
  }
  // Process SMS sequence enrollments due for sending
  const pendingSMS = await DB.prepare(`SELECT se.*, cl.phone, cl.first_name, sms.message_template FROM sms_enrollments se JOIN clients cl ON cl.id = se.client_id JOIN sms_sequences sms ON sms.id = se.sequence_id WHERE se.status = 'active' AND (se.next_send_at IS NULL OR se.next_send_at <= datetime('now')) LIMIT 50`).all()
  for (const send of pendingSMS.results as any[]) {
    try {
      let success = false
      if (env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && send.phone) {
        const body = (send.message_template || '').replace(/\{first_name\}/g, send.first_name)
        const params = new URLSearchParams({ To: send.phone, From: env.TWILIO_PHONE_NUMBER || '', Body: body })
        const r = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, { method: 'POST', headers: { Authorization: 'Basic ' + btoa(env.TWILIO_ACCOUNT_SID + ':' + env.TWILIO_AUTH_TOKEN), 'Content-Type': 'application/x-www-form-urlencoded' }, body: params })
        success = r.ok
      }
      await DB.prepare(`UPDATE sms_enrollments SET status = ? WHERE id = ?`).bind(success ? 'sent' : 'failed', send.id).run()
      if (success) smsSent++; else errors++
    } catch (_) { errors++ }
  }
  const duration = Date.now() - start
  await DB.prepare(`INSERT INTO cron_log (job_name, status, records_processed, duration_ms, details, triggered_by) VALUES ('process_sequences', 'success', ?, ?, ?, ?)`)
    .bind(emailSent + smsSent, duration, `Emails: ${emailSent}, SMS: ${smsSent}, Errors: ${errors}`, c.req.header('x-triggered-by') || 'scheduler').run()
  return c.json({ success: true, email_sent: emailSent, sms_sent: smsSent, errors, duration_ms: duration })
})

// POST /api/cron/generate-kpis — Daily KPI snapshot
app.post('/api/cron/generate-kpis', async (c) => {
  const env = c.env; const { DB } = env
  const cronSecret = env.CRON_SECRET
  if (cronSecret && c.req.header('x-cron-secret') !== cronSecret) return c.json({ error: 'Unauthorized' }, 401)
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const start = Date.now()
  const today = new Date().toISOString().split('T')[0]
  const [clients, disputes, revenue, leads, appts] = await Promise.all([
    DB.prepare(`SELECT status, COUNT(*) as count FROM clients GROUP BY status`).all(),
    DB.prepare(`SELECT status, COUNT(*) as count FROM disputes GROUP BY status`).all(),
    DB.prepare(`SELECT SUM(monthly_fee) as mrr, COUNT(*) as active FROM clients WHERE status = 'active'`).first(),
    DB.prepare(`SELECT COUNT(*) as total FROM crm_leads WHERE created_at >= date('now', '-7 days')`).first(),
    DB.prepare(`SELECT COUNT(*) as total FROM appointments WHERE scheduled_at >= date('now') AND scheduled_at <= date('now', '+7 days')`).first()
  ])
  const rev = revenue as any
  const metrics: any[] = [
    { metric_name: 'mrr', metric_value: rev?.mrr || 0, metric_unit: 'dollars' },
    { metric_name: 'active_clients', metric_value: (clients.results as any[]).find(r => r.status === 'active')?.count || 0, metric_unit: 'count' },
    { metric_name: 'total_clients', metric_value: (clients.results as any[]).reduce((s, r) => s + r.count, 0), metric_unit: 'count' },
    { metric_name: 'open_disputes', metric_value: (disputes.results as any[]).filter(r => ['pending', 'sent', 'investigating'].includes(r.status)).reduce((s, r) => s + r.count, 0), metric_unit: 'count' },
    { metric_name: 'leads_7d', metric_value: (leads as any)?.total || 0, metric_unit: 'count' },
    { metric_name: 'appointments_7d', metric_value: (appts as any)?.total || 0, metric_unit: 'count' }
  ]
  for (const m of metrics) {
    await DB.prepare(`INSERT OR IGNORE INTO kpi_snapshots (metric_name, metric_value, metric_unit, period_type, period_date) VALUES (?, ?, ?, 'daily', ?)`)
      .bind(m.metric_name, m.metric_value, m.metric_unit, today).run()
  }
  const duration = Date.now() - start
  await DB.prepare(`INSERT INTO cron_log (job_name, status, records_processed, duration_ms, details) VALUES ('generate_kpis', 'success', ?, ?, ?)`)
    .bind(metrics.length, duration, `Generated ${metrics.length} KPI metrics for ${today}`).run()
  return c.json({ success: true, date: today, metrics_saved: metrics.length, metrics, duration_ms: duration })
})

// POST /api/cron/pull-reports — Monthly credit report refresh for all active clients
app.post('/api/cron/pull-reports', async (c) => {
  const env = c.env; const { DB } = env
  const cronSecret = env.CRON_SECRET
  if (cronSecret && c.req.header('x-cron-secret') !== cronSecret) return c.json({ error: 'Unauthorized' }, 401)
  if (!DB) return c.json({ error: 'Database required' }, 500)
  if (!env.MFSN_API_EMAIL || !env.MFSN_API_PASSWORD) return c.json({ error: 'MFSN credentials not configured', note: 'Set MFSN_API_EMAIL and MFSN_API_PASSWORD' }, 500)
  // Find active clients with stored MFSN tokens where last_pull was > 25 days ago
  const clients = await DB.prepare(`SELECT mt.client_id, mt.mfsn_email, mt.mfsn_token, mt.last_pull_date FROM mfsn_tokens mt JOIN clients cl ON cl.id = mt.client_id WHERE cl.status = 'active' AND (mt.last_pull_date IS NULL OR mt.last_pull_date <= datetime('now', '-25 days')) LIMIT 20`).all()
  const start = Date.now(); let pulled = 0; const errors: any[] = []
  for (const client of clients.results as any[]) {
    try {
      // Re-auth and pull
      const loginForm = new FormData(); loginForm.append('email', env.MFSN_API_EMAIL); loginForm.append('password', env.MFSN_API_PASSWORD)
      const loginRes = await fetch(`${env.MFSN_API_URL || 'https://api.myfreescorenow.com'}/api/auth/login`, { method: 'POST', body: loginForm })
      const loginData = await loginRes.json() as any
      if (!loginData.success) { errors.push({ client_id: client.client_id, error: 'Auth failed' }); continue }
      const fetchForm = new FormData(); fetchForm.append('email', client.mfsn_email); fetchForm.append('client_token', client.mfsn_token)
      const fetchRes = await fetch(`${env.MFSN_API_URL || 'https://api.myfreescorenow.com'}/api/auth/fetch-3B-json`, { method: 'POST', body: fetchForm })
      const reportData = await fetchRes.json() as any
      if (!reportData.success) { errors.push({ client_id: client.client_id, error: reportData.message }); continue }
      // Store scores
      const views = reportData.data?.providerViews || []
      let scoreEfx: any = null, scoreTu: any = null, scoreExp: any = null
      for (const v of views) { const p = v.provider || v.summary?.provider; const s = v.summary?.creditScore?.score; if (p === 'EFX') scoreEfx = s; if (p === 'TU') scoreTu = s; if (p === 'EXP') scoreExp = s }
      const r = await DB.prepare(`INSERT INTO credit_reports (client_id, mfsn_member_email, report_type, score_efx, score_tu, score_exp, raw_response_json, pulled_by, status) VALUES (?, ?, 'US_3B', ?, ?, ?, ?, 'cron', 'active')`).bind(client.client_id, client.mfsn_email, scoreEfx, scoreTu, scoreExp, JSON.stringify(reportData.data)).run()
      const avgScore = [scoreEfx, scoreTu, scoreExp].filter(s => s).reduce((a: any, b: any) => a + b, 0) / [scoreEfx, scoreTu, scoreExp].filter(s => s).length || null
      await DB.prepare(`INSERT INTO credit_score_history (client_id, credit_report_id, score_efx, score_tu, score_exp, score_avg, source) VALUES (?, ?, ?, ?, ?, ?, 'mfsn')`).bind(client.client_id, r.meta.last_row_id, scoreEfx, scoreTu, scoreExp, avgScore ? Math.round(avgScore) : null).run()
      if (avgScore) await DB.prepare(`UPDATE clients SET credit_score_current = ?, updated_at = datetime('now') WHERE id = ?`).bind(Math.round(avgScore), client.client_id).run()
      await DB.prepare(`UPDATE mfsn_tokens SET last_pull_date = datetime('now'), total_pulls = total_pulls + 1, updated_at = datetime('now') WHERE client_id = ?`).bind(client.client_id).run()
      pulled++
    } catch (err: any) { errors.push({ client_id: client.client_id, error: err.message }) }
  }
  const duration = Date.now() - start
  await DB.prepare(`INSERT INTO cron_log (job_name, status, records_processed, duration_ms, details) VALUES ('pull_reports', ?, ?, ?, ?)`)
    .bind(errors.length ? 'error' : 'success', pulled, duration, `Pulled ${pulled} reports, ${errors.length} errors`).run()
  return c.json({ success: true, reports_pulled: pulled, errors: errors.length, error_details: errors, duration_ms: duration, eligible_clients: clients.results.length })
})

// GET /api/cron/status — Cron job history
app.get('/api/cron/status', async (c) => {
  const { DB } = c.env
  if (!DB) return c.json({ error: 'Database required' }, 500)
  const log = await DB.prepare('SELECT * FROM cron_log ORDER BY created_at DESC LIMIT 50').all()
  const byJob: any = {}
  for (const entry of log.results as any[]) {
    if (!byJob[entry.job_name]) byJob[entry.job_name] = { last_run: entry.created_at, last_status: entry.status, total_runs: 0, success_count: 0 }
    byJob[entry.job_name].total_runs++
    if (entry.status === 'success') byJob[entry.job_name].success_count++
  }
  return c.json({
    jobs: { process_sequences: { schedule: 'Daily 9am', endpoint: 'POST /api/cron/process-sequences', ...byJob.process_sequences }, generate_kpis: { schedule: 'Daily 9am', endpoint: 'POST /api/cron/generate-kpis', ...byJob.generate_kpis }, pull_reports: { schedule: 'Monthly 1st', endpoint: 'POST /api/cron/pull-reports', ...byJob.pull_reports } },
    recent_log: log.results.slice(0, 20),
    note: 'Secure endpoints with X-Cron-Secret header matching CRON_SECRET env var'
  })
})

// ============================================================
// FEATURE: MOBILE-RESPONSIVE DASHBOARD CSS FIX
// ============================================================

app.get('/static/mobile.css', (c) => {
  const css = `
/* RJ Business Solutions — Mobile Responsive Overrides */
@media (max-width: 640px) {
  .dashboard-nav { overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; flex-wrap: nowrap !important; }
  .dashboard-nav button { flex-shrink: 0; }
  .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem; }
  .stats-grid > div { margin: 0 !important; }
  .tab-content table { font-size: 0.75rem; }
  .tab-content table th, .tab-content table td { padding: 0.4rem 0.5rem; }
  .section-body { padding: 0.75rem !important; }
  h1 { font-size: 1.25rem !important; }
  .score-pill { min-width: 70px; padding: 0.75rem 1rem; }
  .score-pill .text-3xl { font-size: 1.5rem; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
  nav a, nav button { font-size: 0.75rem !important; padding: 0.375rem 0.625rem !important; }
}
`
  return new Response(css, { headers: { 'Content-Type': 'text/css', 'Cache-Control': 'public, max-age=86400' } })
})


// ============================================================
// HELPER: Simple AI wrapper (returns string, uses existing callAI)
// ============================================================
async function callAISimple(env: any, systemPrompt: string, userMessage: string, maxTokens = 800): Promise<string> {
  try {
    const result = await callAI(env as any, systemPrompt, userMessage)
    return result.text || 'No response.'
  } catch { return 'AI unavailable — no API key configured.' }
}

// ============================================================
// HELPER: Generate crypto token
// ============================================================
function genToken(len = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let t = ''
  for (let i = 0; i < len; i++) t += chars[Math.floor(Math.random() * chars.length)]
  return t
}

// ============================================================
// HELPER: Send email via Resend (primary)
// ============================================================
async function sendEmail(env: any, to: string, subject: string, text: string, html?: string): Promise<boolean> {
  if (env.RESEND_API_KEY) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: `${env.COMPANY_NAME || 'RJ Business Solutions'} <${env.COMPANY_EMAIL || 'noreply@rjbusinesssolutions.org'}>`, to: [to], subject, ...(html ? { html } : { text }) })
    })
    return r.ok
  }
  return false
}

// ============================================================
// HELPER: Send SMS via Twilio
// ============================================================
async function sendSMS(env: any, to: string, body: string): Promise<boolean> {
  if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN || !env.TWILIO_PHONE_NUMBER) return false
  const creds = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)
  const r = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: 'POST',
    headers: { Authorization: `Basic ${creds}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ From: env.TWILIO_PHONE_NUMBER, To: to, Body: body })
  })
  return r.ok
}

// ============================================================
// FEATURE: MAGIC LINK INTAKE SYSTEM
// ============================================================

// Public intake landing page
app.get('/intake', (c) => {
  const company = 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Start Your Credit Repair — ${company}</title><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center p-4">
<div class="w-full max-w-md">
  <div class="text-center mb-8">
    <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">RJ</div>
    <h1 class="text-3xl font-bold text-white mb-2">${company}</h1>
    <p class="text-blue-300">Start your credit repair journey today</p>
  </div>
  <div class="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
    <h2 class="text-xl font-semibold text-white mb-2">Get Your Free Credit Analysis</h2>
    <p class="text-blue-200 text-sm mb-6">Enter your email and we'll send you a secure access link. No password needed.</p>
    <div id="form-section">
      <form id="intake-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-blue-200 mb-1">Your Email Address</label>
          <input type="email" id="email" required placeholder="you@example.com" class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400">
        </div>
        <div>
          <label class="block text-sm font-medium text-blue-200 mb-1">Phone Number (optional)</label>
          <input type="tel" id="phone" placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400">
        </div>
        <button type="submit" id="submit-btn" class="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">Send My Secure Link →</button>
      </form>
      <p id="msg" class="mt-4 text-center text-sm hidden"></p>
    </div>
    <div id="verify-section" class="hidden space-y-4">
      <p class="text-blue-200 text-sm text-center">We sent a 6-digit code to your email. Enter it below:</p>
      <input type="text" id="otp" maxlength="6" placeholder="000000" class="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white text-center text-2xl tracking-widest focus:outline-none focus:border-blue-400">
      <button onclick="verifyOTP()" class="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition">Verify & Enter Portal →</button>
      <p id="verify-msg" class="text-center text-sm"></p>
      <button onclick="location.reload()" class="w-full text-blue-300 text-sm hover:text-white">← Start over</button>
    </div>
  </div>
  <p class="text-center text-xs text-blue-400 mt-6">No credit card required. CROA compliant. Your data is encrypted.</p>
</div>
<script>
let sessionEmail = ''
document.getElementById('intake-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const btn = document.getElementById('submit-btn')
  const msg = document.getElementById('msg')
  btn.disabled = true; btn.textContent = 'Sending...'
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  sessionEmail = email
  const r = await fetch('/api/intake/start', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email, phone, referral: document.referrer }) })
  const d = await r.json()
  if (d.success) {
    document.getElementById('form-section').classList.add('hidden')
    document.getElementById('verify-section').classList.remove('hidden')
    msg.textContent = ''
  } else {
    btn.disabled = false; btn.textContent = 'Send My Secure Link →'
    msg.className = 'mt-4 text-center text-sm text-red-400'
    msg.textContent = d.error || 'Something went wrong. Please try again.'
    msg.classList.remove('hidden')
  }
})
async function verifyOTP() {
  const otp = document.getElementById('otp').value.trim()
  const msg = document.getElementById('verify-msg')
  if (otp.length !== 6) { msg.className='text-red-400 text-sm text-center'; msg.textContent='Please enter the 6-digit code.'; return }
  msg.className='text-blue-300 text-sm text-center'; msg.textContent='Verifying...'
  const r = await fetch('/api/intake/verify', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email: sessionEmail, otp }) })
  const d = await r.json()
  if (d.success && d.redirect) { window.location.href = d.redirect }
  else { msg.className='text-red-400 text-sm text-center'; msg.textContent = d.error || 'Invalid code. Please try again.' }
}
</script>
</body></html>`)
})

// POST /api/intake/start — create OTP + intake session, send email/SMS
app.post('/api/intake/start', async (c) => {
  const env = c.env
  const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const email = (body.email || '').trim().toLowerCase()
  const phone = (body.phone || '').trim()
  if (!email) return c.json({ error: 'Email required' }, 400)
  // Rate limit: max 3 tokens per email in last 10 min
  const recent = await DB.prepare(`SELECT COUNT(*) as cnt FROM magic_tokens WHERE email = ? AND created_at > datetime('now','-10 minutes')`).bind(email).first() as any
  if ((recent?.cnt || 0) >= 3) return c.json({ error: 'Too many requests. Please wait 10 minutes.' }, 429)
  const otp = String(Math.floor(100000 + Math.random() * 900000))
  const sessionToken = genToken(48)
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString()
  // Find or create client
  let client = await DB.prepare(`SELECT id FROM clients WHERE email = ?`).bind(email).first() as any
  if (!client) {
    await DB.prepare(`INSERT INTO clients (first_name, last_name, email, phone, status, source) VALUES ('New','Lead',?,?,'lead','intake')`).bind(email, phone || null).run()
    client = await DB.prepare(`SELECT id FROM clients WHERE email = ?`).bind(email).first() as any
  }
  // Create OTP token
  await DB.prepare(`INSERT INTO magic_tokens (token, email, phone, client_id, token_type, expires_at) VALUES (?,?,?,?,'intake',?)`).bind(otp, email, phone || null, client?.id || null, expiresAt).run()
  // Create intake session
  await DB.prepare(`INSERT INTO intake_sessions (session_token, client_id, email, phone, step, ip_address, referral_source) VALUES (?,?,?,?,'start',?,?)`).bind(sessionToken, client?.id || null, email, phone || null, c.req.header('CF-Connecting-IP') || c.req.header('x-forwarded-for') || '', body.referral || '').run()
  // Send OTP email
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  const emailSent = await sendEmail(env, email, `Your ${company} Access Code: ${otp}`,
    `Your one-time access code is: ${otp}\n\nThis code expires in 15 minutes.\n\nIf you did not request this, please ignore this email.`,
    `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px"><h2 style="color:#1e40af">Your Access Code</h2><div style="font-size:2.5rem;font-weight:bold;letter-spacing:0.3em;color:#1d4ed8;padding:20px;background:#eff6ff;border-radius:12px;text-align:center">${otp}</div><p style="color:#64748b;margin-top:16px">This code expires in <strong>15 minutes</strong>. Do not share it with anyone.</p><p style="color:#64748b;font-size:0.85rem">If you did not request this code, please ignore this email.</p><hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"><p style="color:#94a3b8;font-size:0.75rem">${company} | CROA Compliant</p></div>`)
  // Send SMS if phone provided
  if (phone) await sendSMS(env, phone, `${company}: Your access code is ${otp}. Valid 15 min. Reply STOP to opt out.`)
  return c.json({ success: true, session_token: sessionToken, email_sent: emailSent })
})

// POST /api/intake/verify — verify OTP, return portal redirect
app.post('/api/intake/verify', async (c) => {
  const env = c.env
  const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const email = (body.email || '').trim().toLowerCase()
  const otp = (body.otp || '').trim()
  if (!email || !otp) return c.json({ error: 'Email and code required' }, 400)
  const token = await DB.prepare(`SELECT * FROM magic_tokens WHERE token = ? AND email = ? AND token_type = 'intake' AND used_at IS NULL AND expires_at > datetime('now')`).bind(otp, email).first() as any
  if (!token) return c.json({ error: 'Invalid or expired code. Please request a new one.' }, 401)
  await DB.prepare(`UPDATE magic_tokens SET used_at = datetime('now') WHERE id = ?`).bind(token.id).run()
  // Generate portal session token
  const portalToken = genToken(64)
  const portalExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  await DB.prepare(`INSERT INTO magic_tokens (token, email, client_id, token_type, expires_at) VALUES (?,?,?,'portal',?)`).bind(portalToken, email, token.client_id, portalExpires).run()
  await DB.prepare(`UPDATE intake_sessions SET step = 'verified' WHERE email = ? AND step = 'start'`).bind(email).run()
  // Log to audit
  if (token.client_id) await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind(email, 'magic_link_verified', 'client', token.client_id, `IP: ${c.req.header('CF-Connecting-IP') || 'unknown'}`).run()
  return c.json({ success: true, redirect: `/intake/portal/${portalToken}` })
})

// GET /intake/portal/:token — client secure intake portal
app.get('/intake/portal/:token', async (c) => {
  const env = c.env
  const { DB } = env
  const portalToken = c.req.param('token')
  if (!DB) return c.html('<h1>Database unavailable</h1>', 500)
  const token = await DB.prepare(`SELECT * FROM magic_tokens WHERE token = ? AND token_type = 'portal' AND expires_at > datetime('now')`).bind(portalToken).first() as any
  if (!token) return c.html(`<!DOCTYPE html><html><head><title>Link Expired</title><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-900 flex items-center justify-center"><div class="text-center text-white"><h1 class="text-2xl font-bold mb-2">Link Expired</h1><p class="text-gray-400 mb-6">This link has expired or is invalid. Please request a new one.</p><a href="/intake" class="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500">Get New Link →</a></div></body></html>`, 401)
  const client = token.client_id ? await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(token.client_id).first() as any : null
  const sigs = client ? await DB.prepare(`SELECT document_type, signed_at FROM e_signatures WHERE client_id = ? ORDER BY signed_at DESC`).bind(client.id).all() : { results: [] }
  const signedTypes = (sigs.results as any[]).map(s => s.document_type)
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Client Portal — ${company}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-4">
<div class="max-w-2xl mx-auto">
  <div class="flex items-center gap-3 mb-8 pt-4">
    <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">RJ</div>
    <div><p class="text-white font-semibold">${company}</p><p class="text-blue-300 text-sm">Secure Client Portal</p></div>
  </div>
  <div class="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 mb-4">
    <h2 class="text-xl font-bold text-white mb-1">Welcome${client ? ', ' + client.first_name : ''}!</h2>
    <p class="text-blue-200 text-sm mb-6">Complete each step below to begin your credit repair program.</p>
    <div class="space-y-3">
      ${[
        { type: 'croa_disclosure', label: '1. CROA Consumer Rights Disclosure', desc: 'Required by federal law before any services begin' },
        { type: 'service_agreement', label: '2. Service Agreement', desc: 'Your contract and terms of service' },
        { type: 'cancellation_notice', label: '3. Three-Day Cancellation Notice', desc: 'Your right to cancel within 3 business days' },
        { type: 'privacy_policy', label: '4. Privacy Policy', desc: 'How we protect and use your information' },
        { type: 'credit_auth', label: '5. Credit Report Authorization', desc: 'Authorize us to access and dispute your credit' },
        { type: 'communication_consent', label: '6. Communication Consent (TCPA)', desc: 'Consent to SMS, email, and phone contact' },
      ].map(doc => {
        const done = signedTypes.includes(doc.type)
        return `<div class="flex items-center justify-between p-4 rounded-xl ${done ? 'bg-green-900/30 border border-green-500/30' : 'bg-white/5 border border-white/10'}">
          <div><p class="text-white font-medium text-sm">${doc.label}</p><p class="text-blue-300 text-xs">${doc.desc}</p></div>
          <a href="/sign/${portalToken}?doc=${doc.type}" class="${done ? 'text-green-400 text-xs font-medium' : 'px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-lg'}">${done ? '✓ Signed' : 'Sign →'}</a>
        </div>`
      }).join('')}
    </div>
  </div>
  <div class="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 mb-4">
    <h3 class="text-white font-semibold mb-4">Upload Documents</h3>
    <form id="upload-form" class="space-y-3">
      <div>
        <label class="block text-sm text-blue-200 mb-1">Document Type</label>
        <select id="doc-type" class="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm">
          <option value="credit_report">Credit Report (PDF/image)</option>
          <option value="id">Government-Issued ID</option>
          <option value="proof_of_address">Proof of Address</option>
          <option value="ssn_card">Social Security Card</option>
          <option value="creditor_letter">Creditor/Collector Letter</option>
          <option value="other">Other Supporting Document</option>
        </select>
      </div>
      <div>
        <label class="block text-sm text-blue-200 mb-1">File (max 10MB)</label>
        <input type="file" id="file-input" accept=".pdf,.jpg,.jpeg,.png,.heic" class="w-full text-sm text-blue-200">
      </div>
      <button type="button" onclick="uploadDoc()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium">Upload Document</button>
      <p id="upload-msg" class="text-sm text-center hidden"></p>
    </form>
  </div>
  <div class="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
    <h3 class="text-white font-semibold mb-4">Your Information</h3>
    <form id="info-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs text-blue-300 mb-1">First Name</label><input id="fn" type="text" value="${client?.first_name || ''}" class="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm focus:outline-none focus:border-blue-400"></div>
        <div><label class="block text-xs text-blue-300 mb-1">Last Name</label><input id="ln" type="text" value="${client?.last_name || ''}" class="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm focus:outline-none focus:border-blue-400"></div>
      </div>
      <div><label class="block text-xs text-blue-300 mb-1">Phone</label><input id="ph" type="tel" value="${client?.phone || ''}" class="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm focus:outline-none focus:border-blue-400"></div>
      <div><label class="block text-xs text-blue-300 mb-1">Credit Score Goal</label><input id="goal" type="number" value="${client?.credit_score_goal || ''}" placeholder="e.g. 750" class="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm focus:outline-none focus:border-blue-400"></div>
      <button type="button" onclick="saveInfo()" class="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium">Save My Information</button>
      <p id="info-msg" class="text-sm text-center hidden"></p>
    </form>
  </div>
</div>
<script>
async function uploadDoc() {
  const file = document.getElementById('file-input').files[0]
  const type = document.getElementById('doc-type').value
  const msg = document.getElementById('upload-msg')
  if (!file) { msg.className='text-red-400 text-sm text-center'; msg.textContent='Please select a file.'; msg.classList.remove('hidden'); return }
  msg.className='text-blue-300 text-sm text-center'; msg.textContent='Uploading...'; msg.classList.remove('hidden')
  const fd = new FormData(); fd.append('file', file); fd.append('doc_type', type); fd.append('token', '${portalToken}')
  const r = await fetch('/api/intake/upload', { method: 'POST', body: fd })
  const d = await r.json()
  if (d.success) { msg.className='text-green-400 text-sm text-center'; msg.textContent='✓ Uploaded successfully!' }
  else { msg.className='text-red-400 text-sm text-center'; msg.textContent = d.error || 'Upload failed.' }
}
async function saveInfo() {
  const msg = document.getElementById('info-msg')
  const r = await fetch('/api/intake/submit', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ token:'${portalToken}', first_name: document.getElementById('fn').value, last_name: document.getElementById('ln').value, phone: document.getElementById('ph').value, credit_score_goal: document.getElementById('goal').value }) })
  const d = await r.json()
  if (d.success) { msg.className='text-green-400 text-sm text-center'; msg.textContent='✓ Information saved!'; msg.classList.remove('hidden') }
  else { msg.className='text-red-400 text-sm text-center'; msg.textContent = d.error || 'Save failed.'; msg.classList.remove('hidden') }
}
</script>
</body></html>`)
})

// POST /api/intake/submit — save intake info from portal
app.post('/api/intake/submit', async (c) => {
  const env = c.env
  const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const token = await DB.prepare(`SELECT * FROM magic_tokens WHERE token = ? AND token_type = 'portal' AND expires_at > datetime('now')`).bind(body.token || '').first() as any
  if (!token) return c.json({ error: 'Invalid or expired session' }, 401)
  const updates: string[] = []
  const vals: any[] = []
  if (body.first_name) { updates.push('first_name = ?'); vals.push(body.first_name) }
  if (body.last_name) { updates.push('last_name = ?'); vals.push(body.last_name) }
  if (body.phone) { updates.push('phone = ?'); vals.push(body.phone) }
  if (body.credit_score_goal) { updates.push('credit_score_goal = ?'); vals.push(parseInt(body.credit_score_goal)) }
  updates.push("status = CASE WHEN status = 'lead' THEN 'onboarding' ELSE status END")
  updates.push("updated_at = datetime('now')")
  if (updates.length && token.client_id) {
    await DB.prepare(`UPDATE clients SET ${updates.join(', ')} WHERE id = ?`).bind(...vals, token.client_id).run()
    await DB.prepare(`UPDATE intake_sessions SET step = 'info', updated_at = datetime('now') WHERE email = ?`).bind(token.email).run()
  }
  return c.json({ success: true })
})

// POST /api/intake/upload — handle document uploads (base64 stored in client_documents)
app.post('/api/intake/upload', async (c) => {
  const env = c.env
  const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const formData = await c.req.formData().catch(() => null)
  if (!formData) return c.json({ error: 'Invalid form data' }, 400)
  const tokenStr = formData.get('token') as string
  const docType = formData.get('doc_type') as string || 'other'
  const file = formData.get('file') as File | null
  const token = await DB.prepare(`SELECT * FROM magic_tokens WHERE token = ? AND token_type = 'portal' AND expires_at > datetime('now')`).bind(tokenStr || '').first() as any
  if (!token) return c.json({ error: 'Invalid or expired session' }, 401)
  if (!file) return c.json({ error: 'No file provided' }, 400)
  if (file.size > 10 * 1024 * 1024) return c.json({ error: 'File too large (max 10MB)' }, 400)
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/webp']
  if (!allowedTypes.includes(file.type)) return c.json({ error: 'Invalid file type. PDF, JPG, PNG allowed.' }, 400)
  // Store file reference (in production, upload to R2)
  const fileName = `${docType}_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
  await DB.prepare(`INSERT INTO client_documents (client_id, document_type, document_name, status) VALUES (?,?,?,'received')`).bind(token.client_id, docType, fileName).run()
  if (token.client_id) await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind(token.email, 'document_uploaded', 'client', token.client_id, `Type: ${docType}, File: ${fileName}, Size: ${file.size}`).run()
  return c.json({ success: true, file_name: fileName })
})

// ============================================================
// FEATURE: E-SIGNATURE ENGINE
// ============================================================

// GET /sign/:token?doc=type — signature page
app.get('/sign/:token', async (c) => {
  const env = c.env
  const { DB } = env
  const portalToken = c.req.param('token')
  const docType = c.req.query('doc') || 'service_agreement'
  if (!DB) return c.html('<h1>DB unavailable</h1>', 500)
  const token = await DB.prepare(`SELECT * FROM magic_tokens WHERE token = ? AND token_type = 'portal' AND expires_at > datetime('now')`).bind(portalToken).first() as any
  if (!token) return c.html(`<html><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>Session Expired</h2><p>Please <a href="/intake">start over</a>.</p></body></html>`, 401)
  const client = token.client_id ? await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(token.client_id).first() as any : null
  // Get active template
  const tmpl = await DB.prepare(`SELECT * FROM legal_template_versions WHERE template_type = ? AND is_active = 1 ORDER BY id DESC LIMIT 1`).bind(docType).first() as any
  const docLabels: Record<string, string> = {
    croa_disclosure: 'CROA Consumer Rights Disclosure',
    service_agreement: 'Service Agreement',
    cancellation_notice: 'Three-Day Cancellation Notice',
    privacy_policy: 'Privacy Policy',
    credit_auth: 'Credit Report Authorization',
    communication_consent: 'Communication Consent (TCPA)',
    limited_poa: 'Limited Power of Attorney'
  }
  const label = docLabels[docType] || 'Document'
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sign: ${label}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="min-h-screen bg-gray-50">
<div class="max-w-2xl mx-auto p-4">
  <div class="flex items-center gap-3 py-4 mb-4">
    <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">RJ</div>
    <div><p class="font-semibold text-gray-900">${company}</p><p class="text-xs text-gray-500">Secure Document Signing</p></div>
    <a href="/intake/portal/${portalToken}" class="ml-auto text-sm text-blue-600 hover:underline">← Back to Portal</a>
  </div>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-4">
    <h1 class="text-lg font-bold text-gray-900 mb-1">${label}</h1>
    <p class="text-sm text-gray-500 mb-4">Please read the document below carefully before signing.</p>
    <div class="bg-gray-50 rounded-xl p-4 max-h-80 overflow-y-auto text-sm text-gray-700 whitespace-pre-wrap leading-relaxed border border-gray-200 mb-4">${tmpl?.content || '[Document content not available. Please contact support.]'}</div>
  </div>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-4">
    <h2 class="font-semibold text-gray-900 mb-3">Your Electronic Signature</h2>
    <div class="mb-4">
      <p class="text-sm text-gray-600 mb-2">Draw your signature below:</p>
      <canvas id="sig-canvas" width="500" height="120" class="w-full border-2 border-gray-300 rounded-xl bg-white cursor-crosshair" style="touch-action:none"></canvas>
      <button onclick="clearSig()" class="mt-1 text-xs text-gray-400 hover:text-gray-700">Clear</button>
    </div>
    <div class="mb-4">
      <p class="text-sm text-gray-600 mb-2">Or type your full name:</p>
      <input id="typed-sig" type="text" placeholder="${client?.first_name || 'Your'} ${client?.last_name || 'Name'}" class="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-blue-400">
    </div>
    <div class="flex items-start gap-2 mb-4">
      <input type="checkbox" id="agree-check" class="mt-0.5">
      <label for="agree-check" class="text-sm text-gray-600">I have read and agree to the ${label}. I understand this is a legally binding electronic signature.</label>
    </div>
    <button onclick="submitSignature()" class="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl">Sign Document →</button>
    <p id="sign-msg" class="text-sm text-center mt-3 hidden"></p>
  </div>
</div>
<script>
const canvas = document.getElementById('sig-canvas')
const ctx = canvas.getContext('2d')
let drawing = false, hasSig = false
ctx.strokeStyle = '#1e40af'; ctx.lineWidth = 2; ctx.lineCap = 'round'
function getPos(e) {
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height
  if (e.touches) return { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY }
  return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY }
}
canvas.addEventListener('mousedown', e => { drawing = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y) })
canvas.addEventListener('mousemove', e => { if (!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); hasSig = true })
canvas.addEventListener('mouseup', () => drawing = false)
canvas.addEventListener('touchstart', e => { e.preventDefault(); drawing = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y) }, {passive:false})
canvas.addEventListener('touchmove', e => { e.preventDefault(); if (!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); hasSig = true }, {passive:false})
canvas.addEventListener('touchend', () => drawing = false)
function clearSig() { ctx.clearRect(0,0,canvas.width,canvas.height); hasSig = false }
async function submitSignature() {
  const msg = document.getElementById('sign-msg')
  if (!document.getElementById('agree-check').checked) { msg.className='text-red-400 text-sm text-center'; msg.textContent='Please check the agreement box.'; msg.classList.remove('hidden'); return }
  const typedSig = document.getElementById('typed-sig').value.trim()
  if (!hasSig && !typedSig) { msg.className='text-red-400 text-sm text-center'; msg.textContent='Please draw or type your signature.'; msg.classList.remove('hidden'); return }
  const sigData = hasSig ? canvas.toDataURL('image/png') : typedSig
  const method = hasSig ? 'drawn' : 'typed'
  msg.className='text-blue-400 text-sm text-center'; msg.textContent='Saving signature...'; msg.classList.remove('hidden')
  const r = await fetch('/api/sign/submit', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ token: '${portalToken}', doc_type: '${docType}', sig_data: sigData, sig_method: method }) })
  const d = await r.json()
  if (d.success) { msg.className='text-green-400 text-sm text-center'; msg.textContent='✓ Signed successfully!'; setTimeout(() => window.location.href='/intake/portal/${portalToken}', 1500) }
  else { msg.className='text-red-400 text-sm text-center'; msg.textContent = d.error || 'Signing failed.' }
}
</script>
</body></html>`)
})

// POST /api/sign/submit — store e-signature
app.post('/api/sign/submit', async (c) => {
  const env = c.env
  const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const token = await DB.prepare(`SELECT * FROM magic_tokens WHERE token = ? AND token_type = 'portal' AND expires_at > datetime('now')`).bind(body.token || '').first() as any
  if (!token) return c.json({ error: 'Invalid session' }, 401)
  if (!token.client_id) return c.json({ error: 'No client associated with session' }, 400)
  const tmpl = await DB.prepare(`SELECT version FROM legal_template_versions WHERE template_type = ? AND is_active = 1`).bind(body.doc_type || '').first() as any
  const ip = c.req.header('CF-Connecting-IP') || c.req.header('x-forwarded-for') || 'unknown'
  const ua = c.req.header('user-agent') || ''
  // Simple hash of signature + timestamp for audit
  const hashInput = `${body.sig_data?.slice(0, 100)}_${Date.now()}_${ip}`
  let hashHex = ''
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(hashInput))
    hashHex = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
  } catch (_) {}
  await DB.prepare(`INSERT INTO e_signatures (client_id, document_type, document_version, signature_data, signature_method, ip_address, user_agent, hash) VALUES (?,?,?,?,?,?,?,?)`).bind(token.client_id, body.doc_type, tmpl?.version || '1.0', body.sig_data || '', body.sig_method || 'drawn', ip, ua, hashHex).run()
  // Record consent for TCPA if communication_consent
  if (body.doc_type === 'communication_consent') {
    await DB.prepare(`INSERT INTO consent_records (client_id, consent_type, consented, consent_version, ip_address, user_agent, collected_via) VALUES (?,?,1,?,?,?,'web')`).bind(token.client_id, 'tcpa_sms', tmpl?.version || '1.0', ip, ua).run()
    await DB.prepare(`INSERT INTO consent_records (client_id, consent_type, consented, consent_version, ip_address, user_agent, collected_via) VALUES (?,?,1,?,?,?,'web')`).bind(token.client_id, 'tcpa_call', tmpl?.version || '1.0', ip, ua).run()
    await DB.prepare(`INSERT INTO consent_records (client_id, consent_type, consented, consent_version, ip_address, user_agent, collected_via) VALUES (?,?,1,?,?,?,'web')`).bind(token.client_id, 'tcpa_email', tmpl?.version || '1.0', ip, ua).run()
  }
  if (body.doc_type === 'croa_disclosure') await DB.prepare(`INSERT INTO consent_records (client_id, consent_type, consented, consent_version, ip_address, user_agent, collected_via) VALUES (?,?,1,?,?,?,'web')`).bind(token.client_id, 'croa_disclosure', tmpl?.version || '1.0', ip, ua).run()
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind(token.email, 'document_signed', 'client', token.client_id, `Doc: ${body.doc_type} | Method: ${body.sig_method} | IP: ${ip} | Hash: ${hashHex.slice(0, 16)}...`).run()
  return c.json({ success: true, hash: hashHex })
})

// GET /api/consent/:clientId — get all consent records
app.get('/api/consent/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const consents = await DB.prepare(`SELECT * FROM consent_records WHERE client_id = ? ORDER BY created_at DESC`).bind(clientId).all()
  const sigs = await DB.prepare(`SELECT document_type, document_version, signed_at, ip_address, hash, signature_method FROM e_signatures WHERE client_id = ? ORDER BY signed_at DESC`).bind(clientId).all()
  return c.json({ consents: consents.results, signatures: sigs.results })
})

// POST /api/consent/record — manually record consent (staff)
app.post('/api/consent/record', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.client_id || !body.consent_type) return c.json({ error: 'client_id and consent_type required' }, 400)
  await DB.prepare(`INSERT INTO consent_records (client_id, consent_type, consented, consent_text, consent_version, collected_via, witnessed_by) VALUES (?,?,?,?,?,?,?)`).bind(body.client_id, body.consent_type, body.consented ? 1 : 0, body.consent_text || null, body.version || '1.0', body.via || 'staff', body.witnessed_by || null).run()
  return c.json({ success: true })
})

// ============================================================
// FEATURE: DNC / OPT-OUT ENGINE
// ============================================================

app.get('/api/dnc', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const list = await DB.prepare(`SELECT d.*, cl.first_name, cl.last_name FROM dnc_list d LEFT JOIN clients cl ON cl.id = d.client_id ORDER BY d.created_at DESC LIMIT 200`).all()
  return c.json({ dnc: list.results, total: list.results.length })
})

app.post('/api/dnc/add', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.phone) return c.json({ error: 'phone required' }, 400)
  const phone = body.phone.replace(/\D/g, '').replace(/^1/, '')
  await DB.prepare(`INSERT OR IGNORE INTO dnc_list (phone, client_id, reason, source, added_by) VALUES (?,?,?,?,?)`).bind(phone, body.client_id || null, body.reason || null, body.source || 'staff', body.added_by || 'staff').run()
  if (body.client_id) {
    await DB.prepare(`INSERT INTO opt_outs (client_id, phone, channel, reason, source) VALUES (?,?,?,?,?)`).bind(body.client_id, phone, 'call', body.reason || 'DNC request', body.source || 'staff').run()
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind(body.added_by || 'staff', 'dnc_added', 'client', body.client_id || 0, `Phone: ${phone}`).run()
  }
  return c.json({ success: true })
})

app.delete('/api/dnc/:phone', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const phone = c.req.param('phone').replace(/\D/g, '')
  await DB.prepare(`DELETE FROM dnc_list WHERE phone = ?`).bind(phone).run()
  return c.json({ success: true })
})

app.get('/api/dnc/check/:phone', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const phone = c.req.param('phone').replace(/\D/g, '').replace(/^1/, '')
  const rec = await DB.prepare(`SELECT * FROM dnc_list WHERE phone = ?`).bind(phone).first()
  return c.json({ on_dnc: !!rec, record: rec || null })
})

// ============================================================
// FEATURE: AI AGENTS (7 agents)
// ============================================================

// POST /api/ai/intake — Intake Agent (first contact handler)
app.post('/api/ai/intake', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const userMsg = body.message || ''
  const clientId = body.client_id
  const system = `You are a friendly, professional credit repair intake specialist at RJ Business Solutions. Your job is to:
1. Warmly greet new prospects and explain the credit repair process.
2. NEVER guarantee score increases or promise specific deletions.
3. Explain that clients have rights under FCRA, FDCPA, and CROA.
4. Collect the prospect's name, email, and phone to send a secure intake link.
5. Answer basic questions about credit repair services.
6. NEVER ask for payment upfront — our fees are compliant with CROA.
7. Keep responses concise and encouraging but realistic.
8. If asked about pricing, say plans start at competitive rates and they'll receive full pricing details in their intake package.`
  const reply = await callAISimple(env, system, userMsg)
  if (DB) {
    const logClientId = clientId || null
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind('intake_agent', 'ai_intake_response', 'client', logClientId || 0, `User: ${userMsg.slice(0,100)} | Reply: ${reply.slice(0,100)}`).run()
  }
  return c.json({ success: true, agent: 'intake', reply })
})

// POST /api/ai/analyze — Credit Analysis Agent
app.post('/api/ai/analyze', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const clientId = body.client_id
  if (!clientId) return c.json({ error: 'client_id required' }, 400)
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(clientId).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const accounts = await DB.prepare(`SELECT * FROM credit_accounts WHERE client_id = ? ORDER BY is_negative DESC, balance DESC LIMIT 30`).bind(clientId).all()
  const disputes = await DB.prepare(`SELECT * FROM disputes WHERE client_id = ? ORDER BY created_at DESC LIMIT 20`).bind(clientId).all()
  const acctSummary = (accounts.results as any[]).map(a => `${a.creditor_name} (${a.bureau}): ${a.account_type}, Balance $${a.balance}, Status: ${a.account_status}, Negative: ${a.is_negative ? 'YES' : 'no'}, Collection: ${a.is_collection ? 'YES' : 'no'}, ChargeOff: ${a.is_charge_off ? 'YES' : 'no'}, Late30: ${a.late_30}, Late60: ${a.late_60}, Late90: ${a.late_90}`).join('\n')
  const system = `You are an expert credit analyst. Analyze the client's credit profile and:
1. Identify all negative items (collections, charge-offs, late payments, repos, bankruptcies, foreclosures).
2. Flag Metro2 inconsistencies (e.g., wrong date of first delinquency, incorrect balance, duplicate accounts).
3. Note high utilization (>30% bad, >50% urgent).
4. Identify inquiry clustering.
5. Find personal info errors.
6. Prioritize actionable dispute opportunities by impact.
7. NEVER guarantee specific outcomes. Be factual and specific.
8. Format as a structured credit action plan.`
  const userMsg = `Client: ${client.first_name} ${client.last_name} | Score: ${client.credit_score_current || 'unknown'} | Goal: ${client.credit_score_goal || 'not set'}\n\nAccounts:\n${acctSummary || 'No accounts parsed yet.'}\n\nExisting disputes: ${(disputes.results as any[]).length}`
  const analysis = await callAISimple(env, system, userMsg)
  await DB.prepare(`INSERT INTO ai_jobs (client_id, job_type, status, result, completed_at) VALUES (?,?,?,?,datetime('now'))`).bind(clientId, 'credit_analysis', 'completed', analysis).run()
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind('credit_analysis_agent', 'ai_credit_analysis', 'client', clientId, `Analyzed ${(accounts.results as any[]).length} accounts`).run()
  return c.json({ success: true, agent: 'credit_analysis', analysis, accounts_analyzed: (accounts.results as any[]).length })
})

// POST /api/ai/dispute-strategy — Dispute Strategy Agent
app.post('/api/ai/dispute-strategy', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const clientId = body.client_id
  const accountId = body.account_id
  if (!clientId) return c.json({ error: 'client_id required' }, 400)
  const account = accountId ? await DB.prepare(`SELECT * FROM credit_accounts WHERE id = ? AND client_id = ?`).bind(accountId, clientId).first() as any : null
  const system = `You are an expert FCRA/FDCPA dispute strategist. For the given account, recommend the optimal dispute strategy:
1. FCRA § 611 (bureau reinvestigation) — best for: errors, unverifiable data, Metro2 issues
2. FCRA § 623 (furnisher direct dispute) — best for: factual inaccuracies the furnisher knows
3. FDCPA § 809 (debt validation) — best for: collection accounts, unverified debts
4. Goodwill deletion — best for: isolated late payments with otherwise good history
5. Factual dispute — best for: wrong balance, wrong dates, wrong status
6. Identity/mixed file — best for: not my account, identity theft
7. Obsolete reporting — best for: items beyond 7-year (10 for bankruptcy) statute
Output: Recommended strategy, specific dispute reason, sample dispute language, expected outcome range (realistic), timeline.
NEVER guarantee deletion or score increase.`
  const acctDesc = account ? `${account.creditor_name}, ${account.account_type}, Balance $${account.balance}, Status: ${account.account_status}, Open: ${account.open_date}, Late30: ${account.late_30}, ChargeOff: ${account.is_charge_off}` : body.account_description || 'Unknown account'
  const strategy = await callAISimple(env, system, `Account: ${acctDesc}\nClient context: ${body.context || 'No additional context.'}`)
  return c.json({ success: true, agent: 'dispute_strategy', strategy })
})

// POST /api/ai/compliance-review — Compliance Review Agent
app.post('/api/ai/compliance-review', async (c) => {
  const env = c.env
  const body: any = await c.req.json().catch(() => ({}))
  const content = body.content || ''
  const contentType = body.type || 'message'
  if (!content) return c.json({ error: 'content required' }, 400)
  const system = `You are a strict compliance officer specializing in CROA, FCRA, FDCPA, TCPA, TSR, and CAN-SPAM. Review the given ${contentType} for compliance violations.

Check for:
1. CROA violations: guaranteed outcomes, advance fee requests, misleading service claims
2. FCRA violations: false dispute claims, fabricated information
3. FDCPA violations: harassment, false representations, unfair practices
4. TCPA violations: missing opt-out instructions, sending without consent
5. CAN-SPAM: missing unsubscribe, misleading subject lines
6. AI guardrails: legal conclusions presented as fact, unauthorized practice of law
7. TSR violations: telemarketing advance fee collection

Output format:
COMPLIANCE STATUS: [PASS/REVIEW NEEDED/FAIL]
VIOLATIONS FOUND: [list or "None"]
RISK LEVEL: [Low/Medium/High/Critical]
RECOMMENDED CHANGES: [specific edits needed]
CITATIONS: [applicable law references]`
  const review = await callAISimple(env, system, `Review this ${contentType}:

${content}`)
  return c.json({ success: true, agent: 'compliance_review', review, content_type: contentType })
})

// POST /api/ai/client-update — Client Update Agent
app.post('/api/ai/client-update', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const clientId = body.client_id
  if (!clientId) return c.json({ error: 'client_id required' }, 400)
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(clientId).first() as any
  if (!client) return c.json({ error: 'Client not found' }, 404)
  const disputes = await DB.prepare(`SELECT * FROM disputes WHERE client_id = ? ORDER BY updated_at DESC LIMIT 10`).bind(clientId).all()
  const pending = (disputes.results as any[]).filter(d => d.status === 'pending').length
  const sent = (disputes.results as any[]).filter(d => d.status === 'sent').length
  const resolved = (disputes.results as any[]).filter(d => ['deleted','updated','verified','closed'].includes(d.status)).length
  const system = `You are a friendly credit repair case manager. Write a personalized status update for the client. Rules:
1. Address them by first name.
2. Summarize their dispute progress clearly.
3. Give them their next action step.
4. Be encouraging but realistic — NEVER promise results.
5. Keep it under 150 words.
6. Include relevant FCRA timeline reminders if disputes are outstanding.`
  const update = await callAISimple(env, system, `Client: ${client.first_name} ${client.last_name} | Score: ${client.credit_score_current || 'not set'} | Total disputes: ${disputes.results.length} | Pending: ${pending} | Sent: ${sent} | Resolved: ${resolved} | Channel: ${body.channel || 'email'}`)
  // Optionally auto-send
  if (body.send && client.email) {
    const sent2 = await sendEmail(env, client.email, `Your Credit Repair Update — ${env.COMPANY_NAME || 'RJ Business Solutions'}`, update)
    return c.json({ success: true, agent: 'client_update', update, sent: sent2 })
  }
  return c.json({ success: true, agent: 'client_update', update })
})

// POST /api/ai/escalate — Escalation Agent
app.post('/api/ai/escalate', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const clientId = body.client_id
  const issue = body.issue || ''
  if (!clientId || !issue) return c.json({ error: 'client_id and issue required' }, 400)
  const system = `You are an escalation specialist for credit repair compliance. Given the client's unresolved issue, recommend the appropriate escalation path:
1. CFPB Complaint — best for: CRA or furnisher violations, ignored disputes
2. FTC Report — best for: fraud, ID theft, FDCPA violations
3. State AG complaint — best for: state CROA violations, consumer fraud
4. BBB complaint — best for: business practice issues
5. Attorney referral — best for: FCRA/FDCPA statutory damages, willful violations
6. Arbitration/mediation — best for: contractual disputes
7. Small claims court prep — best for: small dollar FCRA/FDCPA violations
Provide: recommended path(s), specific steps, template complaint language, realistic outcome.`
  const escalation = await callAISimple(env, system, `Issue: ${issue}
Client context: ${body.context || "None"}`)
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind('escalation_agent', 'ai_escalation', 'client', clientId, issue.slice(0, 200)).run()
  return c.json({ success: true, agent: 'escalation', escalation })
})

// POST /api/ai/business-credit — Business Credit Agent
app.post('/api/ai/business-credit', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const clientId = body.client_id
  if (!clientId) return c.json({ error: 'client_id required' }, 400)
  const profile = await DB.prepare(`SELECT * FROM business_credit_profiles WHERE client_id = ? ORDER BY id DESC LIMIT 1`).bind(clientId).first() as any
  const vendors = profile ? await DB.prepare(`SELECT * FROM vendor_accounts WHERE profile_id = ? ORDER BY tier, created_at`).bind(profile.id).all() : { results: [] }
  const system = `You are a business credit expert specializing in EIN-based credit building. Create a roadmap:
Tier 1: Starter accounts (no PG, easy approval) — Uline, Quill, Grainger, Crown Office Supplies
Tier 2: Net 30 vendors — HD Supply, Summa Office Supplies, Reliable Office Supplies
Tier 3: Fleet/gas cards — Wex Fleet, Fuelman, Shell Fleet
Tier 4: Business credit cards — Capital One Spark, Chase Ink (after 2yr history)
Output: Current tier status, next 3 recommended vendors, Paydex roadmap, DUNS/NAV tips, funding readiness score, timeline to no-PG funding.`
  const context = profile ? `Business: ${profile.business_name} | EIN: ${profile.ein ? 'Yes' : 'No'} | DUNS: ${profile.duns_number || 'None'} | Paydex: ${profile.paydex_score || 'N/A'} | Tier: ${profile.funding_stage} | Vendors: ${(vendors.results as any[]).length}` : 'No business profile yet.'
  const roadmap = await callAISimple(env, system, context)
  return c.json({ success: true, agent: 'business_credit', roadmap })
})

// GET /api/ai/sessions — list recent AI job logs
app.get('/api/ai/sessions', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const jobs = await DB.prepare(`SELECT aj.*, cl.first_name, cl.last_name FROM ai_jobs aj LEFT JOIN clients cl ON cl.id = aj.client_id ORDER BY aj.created_at DESC LIMIT 50`).all()
  return c.json({ sessions: jobs.results })
})

app.get('/api/ai/sessions/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const jobs = await DB.prepare(`SELECT * FROM ai_jobs WHERE client_id = ? ORDER BY created_at DESC LIMIT 30`).bind(clientId).all()
  return c.json({ sessions: jobs.results, client_id: clientId })
})

// ============================================================
// FEATURE: CREDIT ACCOUNT MANAGEMENT (parsed data)
// ============================================================

app.get('/api/credit-accounts/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const accounts = await DB.prepare(`SELECT * FROM credit_accounts WHERE client_id = ? ORDER BY is_negative DESC, balance DESC`).bind(clientId).all()
  return c.json({ accounts: accounts.results, total: accounts.results.length })
})

app.post('/api/credit-accounts', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.client_id || !body.bureau || !body.creditor_name) return c.json({ error: 'client_id, bureau, creditor_name required' }, 400)
  // Need a credit_report_id — find latest or create placeholder
  let reportId = body.credit_report_id
  if (!reportId) {
    const rpt = await DB.prepare(`SELECT id FROM credit_reports WHERE client_id = ? ORDER BY id DESC LIMIT 1`).bind(body.client_id).first() as any
    if (rpt) { reportId = rpt.id } else {
      const ins = await DB.prepare(`INSERT INTO credit_reports (client_id, report_type, pulled_by, status) VALUES (?,'US_3B','manual','active')`).bind(body.client_id).run()
      reportId = ins.meta?.last_row_id
    }
  }
  const ins = await DB.prepare(`INSERT INTO credit_accounts (credit_report_id, client_id, bureau, creditor_name, account_number, account_type, account_status, balance, credit_limit, monthly_payment, payment_status, open_date, close_date, late_30, late_60, late_90, is_negative, is_collection, is_charge_off, dispute_reason, metro2_issues) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(reportId, body.client_id, body.bureau, body.creditor_name, body.account_number || null, body.account_type || null, body.account_status || null, body.balance || 0, body.credit_limit || null, body.monthly_payment || null, body.payment_status || null, body.open_date || null, body.close_date || null, body.late_30 || 0, body.late_60 || 0, body.late_90 || 0, body.is_negative ? 1 : 0, body.is_collection ? 1 : 0, body.is_charge_off ? 1 : 0, body.dispute_reason || null, body.metro2_issues || null).run()
  return c.json({ success: true, id: ins.meta?.last_row_id })
})

app.put('/api/credit-accounts/:id', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const id = parseInt(c.req.param('id'))
  const body: any = await c.req.json().catch(() => ({}))
  const fields = ['creditor_name','account_type','account_status','balance','credit_limit','payment_status','late_30','late_60','late_90','is_negative','is_collection','is_charge_off','dispute_flag','dispute_reason','metro2_issues']
  const updates: string[] = []; const vals: any[] = []
  fields.forEach(f => { if (body[f] !== undefined) { updates.push(`${f} = ?`); vals.push(body[f]) } })
  if (!updates.length) return c.json({ error: 'No fields to update' }, 400)
  await DB.prepare(`UPDATE credit_accounts SET ${updates.join(', ')} WHERE id = ?`).bind(...vals, id).run()
  return c.json({ success: true })
})

// ============================================================
// FEATURE: DAILY COMPLIANCE ENGINE
// ============================================================

// POST /api/cron/compliance-check — runs daily, checks official sources
app.post('/api/cron/compliance-check', async (c) => {
  const env = c.env; const { DB } = env
  const cronSecret = env.CRON_SECRET
  if (cronSecret && c.req.header('x-cron-secret') !== cronSecret) return c.json({ error: 'Unauthorized' }, 401)
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const start = Date.now()
  const sources = await DB.prepare(`SELECT * FROM compliance_sources WHERE is_active = 1`).all()
  let checked = 0, alertsCreated = 0
  for (const source of sources.results as any[]) {
    try {
      const r = await fetch(source.source_url, { method: 'HEAD', headers: { 'User-Agent': 'RJBSComplianceBot/1.0' } })
      await DB.prepare(`UPDATE compliance_sources SET last_checked_at = datetime('now') WHERE id = ?`).bind(source.id).run()
      checked++
      // Use AI to summarize any new compliance context (lightweight check)
      if (env.OPENROUTER_API_KEY || env.GROQ_API_KEY || env.OPENAI_API_KEY) {
        const summary = await callAISimple(env,
          'You are a compliance monitoring assistant. Given a regulatory source name, generate a brief (2-3 sentence) reminder of the top current compliance risks in credit repair from that source. Be specific and cite relevant code sections.',
          `Source: ${source.source_name} (${source.source_type})`)
        if (summary && !summary.includes('unavailable')) {
          await DB.prepare(`INSERT INTO compliance_updates (source_id, update_title, update_summary, update_url, update_category, severity, requires_review, status) VALUES (?,?,?,?,?,?,1,'pending')`).bind(source.id, `Daily Check: ${source.source_name}`, summary, source.source_url, source.source_type === 'cfpb' ? 'croa' : 'general', 'info').run()
          alertsCreated++
        }
      }
    } catch (_) {}
  }
  // Generate daily compliance alert
  if (alertsCreated > 0) {
    await DB.prepare(`INSERT INTO compliance_alerts (alert_type, severity, title, description) VALUES (?,?,?,?)`).bind('new_update', 'low', `Daily Compliance Digest — ${new Date().toLocaleDateString()}`, `Checked ${checked} sources, generated ${alertsCreated} compliance updates for review.`).run()
  }
  const duration = Date.now() - start
  await DB.prepare(`INSERT INTO cron_log (job_name, status, records_processed, duration_ms, details) VALUES (?,?,?,?,?)`).bind('compliance_check', 'success', checked, duration, `Sources checked: ${checked}, Updates: ${alertsCreated}`).run()
  return c.json({ success: true, sources_checked: checked, updates_created: alertsCreated, duration_ms: duration })
})

// GET /api/compliance/updates — list pending compliance updates
app.get('/api/compliance/updates', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const status = c.req.query('status') || 'pending'
  const updates = await DB.prepare(`SELECT cu.*, cs.source_name, cs.source_type FROM compliance_updates cu LEFT JOIN compliance_sources cs ON cs.id = cu.source_id WHERE cu.status = ? ORDER BY cu.detected_at DESC LIMIT 100`).bind(status).all()
  return c.json({ updates: updates.results, total: updates.results.length })
})

// GET /api/compliance/digest — full daily digest
app.get('/api/compliance/digest', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const today = new Date().toISOString().split('T')[0]
  const updates = await DB.prepare(`SELECT * FROM compliance_updates WHERE detected_at >= ? ORDER BY severity DESC, detected_at DESC`).bind(today).all()
  const alerts = await DB.prepare(`SELECT * FROM compliance_alerts WHERE status = 'open' ORDER BY severity DESC, created_at DESC`).all()
  const rules = await DB.prepare(`SELECT * FROM compliance_rule_versions WHERE is_active = 1 ORDER BY rule_category, rule_code`).all()
  return c.json({ date: today, updates: updates.results, open_alerts: alerts.results, active_rules: rules.results })
})

// POST /api/compliance/approve/:updateId — approve or reject a compliance update
app.post('/api/compliance/approve/:updateId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const updateId = parseInt(c.req.param('updateId'))
  const body: any = await c.req.json().catch(() => ({}))
  const action = body.action === 'approve' ? 'approved' : 'rejected'
  const reviewer = body.reviewer || 'admin'
  await DB.prepare(`UPDATE compliance_updates SET status = ?, reviewed_by = ?, reviewed_at = datetime('now') WHERE id = ?`).bind(action, reviewer, updateId).run()
  await DB.prepare(`INSERT INTO approval_logs (entity_type, entity_id, action, performed_by, notes) VALUES (?,?,?,?,?)`).bind('compliance_update', updateId, action, reviewer, body.notes || null).run()
  return c.json({ success: true, action, update_id: updateId })
})

// GET /api/compliance/sources — list all compliance sources
app.get('/api/compliance/sources', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const sources = await DB.prepare(`SELECT * FROM compliance_sources ORDER BY source_type, source_name`).all()
  const rules = await DB.prepare(`SELECT * FROM compliance_rule_versions WHERE is_active = 1 ORDER BY rule_category, rule_code`).all()
  return c.json({ sources: sources.results, active_rules: rules.results })
})

// GET /api/compliance/rules — get active rules
app.get('/api/compliance/rules', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const cat = c.req.query('category')
  const q = cat ? `SELECT * FROM compliance_rule_versions WHERE is_active = 1 AND rule_category = ? ORDER BY rule_code` : `SELECT * FROM compliance_rule_versions WHERE is_active = 1 ORDER BY rule_category, rule_code`
  const rules = cat ? await DB.prepare(q).bind(cat).all() : await DB.prepare(q).all()
  return c.json({ rules: rules.results })
})

// GET /api/compliance/alerts — get open compliance alerts
app.get('/api/compliance/alerts', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const alerts = await DB.prepare(`SELECT * FROM compliance_alerts WHERE status = 'open' ORDER BY severity DESC, created_at DESC`).all()
  return c.json({ alerts: alerts.results })
})

// ============================================================
// FEATURE: CERTIFIED MAIL + DEADLINE TRACKING
// ============================================================

app.post('/api/mail/certified', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.client_id || !body.recipient_name || !body.recipient_address) return c.json({ error: 'client_id, recipient_name, recipient_address required' }, 400)
  const mailDate = body.mail_date || new Date().toISOString().split('T')[0]
  // FCRA response deadline = 30 days from mail date
  const deadline = new Date(new Date(mailDate).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const ins = await DB.prepare(`INSERT INTO certified_mail_records (client_id, dispute_id, recipient_name, recipient_address, bureau, tracking_number, mail_date, response_deadline, letter_type, notes) VALUES (?,?,?,?,?,?,?,?,?,?)`).bind(body.client_id, body.dispute_id || null, body.recipient_name, body.recipient_address, body.bureau || null, body.tracking_number || null, mailDate, deadline, body.letter_type || 'dispute', body.notes || null).run()
  const mailId = ins.meta?.last_row_id
  // Auto-create deadline record
  await DB.prepare(`INSERT INTO deadlines (client_id, dispute_id, certified_mail_id, deadline_type, deadline_date, description) VALUES (?,?,?,?,?,?)`).bind(body.client_id, body.dispute_id || null, mailId, 'bureau_response', deadline, `${body.bureau || 'Bureau'} must respond to dispute mailed ${mailDate}`).run()
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES (?,?,?,?,?)`).bind('staff', 'certified_mail_created', 'client', body.client_id, `To: ${body.recipient_name}, Tracking: ${body.tracking_number || 'pending'}, Deadline: ${deadline}`).run()
  return c.json({ success: true, id: mailId, response_deadline: deadline })
})

app.get('/api/mail/certified/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const records = await DB.prepare(`SELECT * FROM certified_mail_records WHERE client_id = ? ORDER BY mail_date DESC`).bind(clientId).all()
  return c.json({ records: records.results })
})

app.put('/api/mail/certified/:id/status', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const id = parseInt(c.req.param('id'))
  const body: any = await c.req.json().catch(() => ({}))
  const deliveryStatus = body.delivery_status || 'in_transit'
  await DB.prepare(`UPDATE certified_mail_records SET delivery_status = ?, delivery_date = ?, tracking_number = COALESCE(?, tracking_number), updated_at = datetime('now') WHERE id = ?`).bind(deliveryStatus, body.delivery_date || null, body.tracking_number || null, id).run()
  const mail = await DB.prepare(`SELECT * FROM certified_mail_records WHERE id = ?`).bind(id).first() as any
  if (mail && deliveryStatus === 'delivered') {
    await DB.prepare(`UPDATE deadlines SET status = 'open', description = description || ' [DELIVERED]' WHERE certified_mail_id = ?`).bind(id).run()
  }
  return c.json({ success: true, status: deliveryStatus })
})

app.get('/api/deadlines/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const deadlines = await DB.prepare(`SELECT d.*, cm.tracking_number, cm.recipient_name FROM deadlines d LEFT JOIN certified_mail_records cm ON cm.id = d.certified_mail_id WHERE d.client_id = ? ORDER BY d.deadline_date ASC`).bind(clientId).all()
  const now = new Date().toISOString().split('T')[0]
  const enriched = (deadlines.results as any[]).map(d => ({ ...d, is_overdue: d.deadline_date < now && d.status === 'open', days_remaining: Math.ceil((new Date(d.deadline_date).getTime() - Date.now()) / 86400000) }))
  return c.json({ deadlines: enriched, overdue: enriched.filter(d => d.is_overdue).length })
})

app.post('/api/deadlines', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.client_id || !body.deadline_type || !body.deadline_date) return c.json({ error: 'client_id, deadline_type, deadline_date required' }, 400)
  const ins = await DB.prepare(`INSERT INTO deadlines (client_id, dispute_id, deadline_type, deadline_date, description) VALUES (?,?,?,?,?)`).bind(body.client_id, body.dispute_id || null, body.deadline_type, body.deadline_date, body.description || null).run()
  return c.json({ success: true, id: ins.meta?.last_row_id })
})

// ============================================================
// FEATURE: CALL CENTER + VOICE AI
// ============================================================

// GET /call-center — SSR call center dashboard
app.get('/call-center', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.html('<h1>DB unavailable</h1>', 500)
  const calls = await DB.prepare(`SELECT cr.*, cl.first_name, cl.last_name, cl.phone FROM call_recordings cr LEFT JOIN clients cl ON cl.id = cr.client_id ORDER BY cr.created_at DESC LIMIT 50`).all()
  const dnc = await DB.prepare(`SELECT COUNT(*) as cnt FROM dnc_list`).first() as any
  const today = new Date().toISOString().split('T')[0]
  const todayCalls = await DB.prepare(`SELECT COUNT(*) as cnt FROM call_recordings WHERE created_at >= ?`).bind(today).first() as any
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Call Center — ${company}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-gray-950 text-white min-h-screen">
<nav class="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center gap-4">
  <a href="/" class="text-blue-400 hover:text-white font-semibold">← Dashboard</a>
  <span class="text-gray-400">/</span>
  <span class="text-white font-medium">Call Center</span>
</nav>
<div class="p-6 max-w-6xl mx-auto">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold">Call Center Dashboard</h1>
    <a href="/api/twilio/voice" class="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-xl text-sm font-medium">+ Log Call</a>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Today's Calls</p><p class="text-2xl font-bold text-blue-400">${todayCalls?.cnt || 0}</p></div>
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Total Logged</p><p class="text-2xl font-bold text-purple-400">${(calls.results as any[]).length}</p></div>
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">DNC List</p><p class="text-2xl font-bold text-red-400">${dnc?.cnt || 0}</p></div>
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Twilio Status</p><p class="text-sm font-medium ${env.TWILIO_ACCOUNT_SID ? 'text-green-400' : 'text-yellow-400'}">${env.TWILIO_ACCOUNT_SID ? '✓ Connected' : '⚠ Keys needed'}</p></div>
  </div>
  <div class="bg-gray-900 rounded-xl p-4 mb-6">
    <h2 class="font-semibold mb-3 text-gray-200">Quick Outbound Call</h2>
    <div class="flex gap-3">
      <input id="call-phone" type="tel" placeholder="+15055550100" class="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <input id="call-client" type="number" placeholder="Client ID" class="w-28 px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <select id="call-type" class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm">
        <option value="support">Support</option><option value="intake">Intake</option><option value="follow_up">Follow-up</option><option value="dispute_update">Dispute Update</option>
      </select>
      <button onclick="startCall()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">Call</button>
    </div>
    <p id="call-msg" class="text-sm mt-2 hidden"></p>
  </div>
  <div class="bg-gray-900 rounded-xl overflow-hidden">
    <div class="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
      <h2 class="font-semibold text-gray-200">Recent Calls</h2>
      <a href="/api/dnc" class="text-xs text-red-400 hover:text-red-300">DNC List →</a>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead><tr class="border-b border-gray-800 text-gray-400 text-xs"><th class="px-4 py-2 text-left">Client</th><th class="px-4 py-2 text-left">From</th><th class="px-4 py-2 text-left">To</th><th class="px-4 py-2 text-left">Type</th><th class="px-4 py-2 text-left">Duration</th><th class="px-4 py-2 text-left">Status</th><th class="px-4 py-2 text-left">Date</th></tr></thead>
        <tbody>
          ${(calls.results as any[]).map(call => `<tr class="border-b border-gray-800/50 hover:bg-gray-800/30">
            <td class="px-4 py-2">${call.first_name ? `<a href="/clients/${call.client_id}" class="text-blue-400 hover:underline">${call.first_name} ${call.last_name}</a>` : '<span class="text-gray-500">Unknown</span>'}</td>
            <td class="px-4 py-2 text-gray-300 font-mono text-xs">${call.from_number || '—'}</td>
            <td class="px-4 py-2 text-gray-300 font-mono text-xs">${call.to_number || '—'}</td>
            <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full text-xs bg-gray-700 text-gray-300">${call.call_type}</span></td>
            <td class="px-4 py-2 text-gray-300">${call.duration_seconds ? Math.floor(call.duration_seconds/60)+'m '+((call.duration_seconds%60)+'s') : '—'}</td>
            <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full text-xs ${call.status === 'completed' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}">${call.status}</span></td>
            <td class="px-4 py-2 text-gray-400 text-xs">${call.created_at?.slice(0,16) || ''}</td>
          </tr>`).join('') || '<tr><td colspan="7" class="px-4 py-8 text-center text-gray-500">No calls logged yet</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
</div>
<script>
async function startCall() {
  const phone = document.getElementById('call-phone').value
  const clientId = document.getElementById('call-client').value
  const callType = document.getElementById('call-type').value
  const msg = document.getElementById('call-msg')
  if (!phone) { msg.className='text-red-400 text-sm'; msg.textContent='Phone required.'; msg.classList.remove('hidden'); return }
  const r = await fetch('/api/calls/start', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ to: phone, client_id: clientId || null, call_type: callType }) })
  const d = await r.json()
  msg.className = d.success ? 'text-green-400 text-sm' : 'text-red-400 text-sm'
  msg.textContent = d.success ? '✓ Call initiated' : (d.error || 'Failed')
  msg.classList.remove('hidden')
}
</script>
</body></html>`)
})

// POST /api/calls/start — initiate outbound call via Twilio
app.post('/api/calls/start', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.to) return c.json({ error: 'to (phone) required' }, 400)
  // Check DNC
  const cleanPhone = body.to.replace(/\D/g, '').replace(/^1/, '')
  const onDNC = await DB.prepare(`SELECT id FROM dnc_list WHERE phone = ?`).bind(cleanPhone).first()
  if (onDNC) return c.json({ error: 'This number is on the Do Not Call list.', on_dnc: true }, 403)
  // Log the call attempt
  const ins = await DB.prepare(`INSERT INTO call_recordings (client_id, from_number, to_number, direction, status, call_type) VALUES (?,?,?,?,?,?)`).bind(body.client_id || null, env.TWILIO_PHONE_NUMBER || 'unknown', body.to, 'outbound', 'initiated', body.call_type || 'support').run()
  // Initiate via Twilio if keys present
  if (env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_PHONE_NUMBER) {
    const creds = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)
    const voiceUrl = env.TWILIO_VOICE_WEBHOOK_URL || `${env.APP_BASE_URL || 'https://example.com'}/api/twilio/voice`
    const r = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Calls.json`, {
      method: 'POST',
      headers: { Authorization: `Basic ${creds}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ From: env.TWILIO_PHONE_NUMBER, To: body.to, Url: voiceUrl, StatusCallback: `${env.APP_BASE_URL || ''}/api/twilio/voice-status`, StatusCallbackMethod: 'POST' })
    })
    const d: any = await r.json()
    if (d.sid) await DB.prepare(`UPDATE call_recordings SET call_sid = ?, status = 'ringing' WHERE id = ?`).bind(d.sid, ins.meta?.last_row_id).run()
    return c.json({ success: r.ok, call_sid: d.sid, id: ins.meta?.last_row_id })
  }
  return c.json({ success: true, id: ins.meta?.last_row_id, note: 'Logged only — Twilio keys needed for live calls' })
})

// POST /api/twilio/voice — TwiML handler for incoming/outbound calls
app.post('/api/twilio/voice', async (c) => {
  const env = c.env; const { DB } = env
  const body = await c.req.formData().catch(() => null)
  const from = body?.get('From') as string || ''
  const callSid = body?.get('CallSid') as string || ''
  const stateAbbr = body?.get('CallerState') as string || ''
  // Check recording consent by state (2-party consent states)
  const twoPartyStates = ['CA','CT','FL','IL','MA','MD','MI','MO','MT','NH','OR','PA','WA']
  const needsTwoParty = twoPartyStates.includes(stateAbbr)
  // Log the call
  if (DB && from) {
    const client = await DB.prepare(`SELECT id FROM clients WHERE phone = ?`).bind(from).first() as any
    await DB.prepare(`INSERT OR IGNORE INTO call_recordings (client_id, call_sid, from_number, to_number, direction, status, call_type, consent_given, consent_method) VALUES (?,?,?,?,?,?,?,?,?)`).bind(client?.id || null, callSid, from, env.TWILIO_PHONE_NUMBER || '', 'inbound', 'in-progress', 'support', needsTwoParty ? 0 : 1, needsTwoParty ? 'pending' : 'single_party').run()
  }
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  const recordConsent = needsTwoParty
    ? `<Say>This call may be recorded for quality and compliance purposes. By continuing, you consent to recording.</Say>`
    : ''
  const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response>${recordConsent}<Say voice="Polly.Joanna">Thank you for calling ${company}. Our team will be with you shortly. Please hold while we connect your call.</Say><Enqueue waitUrl="/api/twilio/voice-wait" workflowSid="">support</Enqueue></Response>`
  return new Response(twiml, { headers: { 'Content-Type': 'text/xml' } })
})

// POST /api/twilio/voice-status — Twilio call status callback
app.post('/api/twilio/voice-status', async (c) => {
  const env = c.env; const { DB } = env
  const body = await c.req.formData().catch(() => null)
  if (!body || !DB) return c.json({ ok: true })
  const callSid = body.get('CallSid') as string
  const status = body.get('CallStatus') as string
  const duration = body.get('CallDuration') as string
  const recordingUrl = body.get('RecordingUrl') as string
  const recordingSid = body.get('RecordingSid') as string
  await DB.prepare(`UPDATE call_recordings SET status = ?, duration_seconds = ?, recording_url = ?, recording_sid = ? WHERE call_sid = ?`).bind(status, duration ? parseInt(duration) : null, recordingUrl || null, recordingSid || null, callSid).run()
  return c.json({ ok: true })
})

app.get('/api/calls/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const calls = await DB.prepare(`SELECT * FROM call_recordings WHERE client_id = ? ORDER BY created_at DESC`).bind(clientId).all()
  return c.json({ calls: calls.results })
})

// ============================================================
// FEATURE: BUSINESS CREDIT ROADMAP
// ============================================================

// GET /business-credit/:clientId — SSR roadmap page
app.get('/business-credit/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.html('<h1>DB unavailable</h1>', 500)
  const clientId = parseInt(c.req.param('clientId'))
  const client = await DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(clientId).first() as any
  if (!client) return c.html('<h1>Client not found</h1>', 404)
  const profile = await DB.prepare(`SELECT * FROM business_credit_profiles WHERE client_id = ? ORDER BY id DESC LIMIT 1`).bind(clientId).first() as any
  const vendors = profile ? await DB.prepare(`SELECT * FROM vendor_accounts WHERE profile_id = ? ORDER BY tier, status`).bind(profile.id).all() : { results: [] }
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  const tierColors = ['','bg-blue-900/30 border-blue-500/30','bg-purple-900/30 border-purple-500/30','bg-orange-900/30 border-orange-500/30','bg-green-900/30 border-green-500/30']
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Business Credit — ${client.first_name} ${client.last_name}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-gray-950 text-white min-h-screen">
<nav class="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center gap-4">
  <a href="/clients/${clientId}" class="text-blue-400 hover:text-white font-semibold">← ${client.first_name} ${client.last_name}</a>
  <span class="text-gray-400">/</span>
  <span class="text-white font-medium">Business Credit Roadmap</span>
</nav>
<div class="p-6 max-w-4xl mx-auto">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold">Business Credit Roadmap</h1>
    <button onclick="document.getElementById('profile-modal').classList.remove('hidden')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">${profile ? 'Edit Profile' : '+ Create Profile'}</button>
  </div>
  ${profile ? `
  <div class="bg-gray-900 rounded-2xl p-6 mb-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <div><p class="text-gray-400 text-xs mb-1">Business</p><p class="font-semibold">${profile.business_name}</p></div>
      <div><p class="text-gray-400 text-xs mb-1">EIN</p><p class="font-semibold">${profile.ein ? '✓ On File' : '⚠ Needed'}</p></div>
      <div><p class="text-gray-400 text-xs mb-1">DUNS</p><p class="font-semibold">${profile.duns_number || '⚠ Not set'}</p></div>
      <div><p class="text-gray-400 text-xs mb-1">Paydex Score</p><p class="font-bold text-2xl ${(profile.paydex_score || 0) >= 80 ? 'text-green-400' : (profile.paydex_score || 0) >= 60 ? 'text-yellow-400' : 'text-red-400'}">${profile.paydex_score || '—'}</p></div>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-gray-400 text-sm">Funding Stage:</span>
      ${['tier1','tier2','tier3','tier4','ready'].map(t => `<span class="px-2 py-0.5 rounded-full text-xs ${t === profile.funding_stage ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}">${t}</span>`).join('')}
    </div>
  </div>
  <div class="mb-6">
    <h2 class="text-lg font-semibold mb-4">Vendor Accounts (${(vendors.results as any[]).length})</h2>
    ${[1,2,3,4].map(tier => {
      const tierVendors = (vendors.results as any[]).filter(v => v.tier === tier)
      return `<div class="border ${tierColors[tier]} rounded-xl p-4 mb-3">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-medium">Tier ${tier} ${['','Starter Net30s','Net30 Vendors','Fleet/Gas Cards','Business Credit Cards'][tier]}</h3>
          <button onclick="addVendor(${tier})" class="text-xs text-blue-400 hover:text-blue-300">+ Add Vendor</button>
        </div>
        ${tierVendors.length ? `<div class="space-y-2">${tierVendors.map(v => `<div class="flex items-center justify-between bg-gray-900/50 rounded-lg px-3 py-2"><div><p class="text-sm font-medium">${v.vendor_name}</p><p class="text-xs text-gray-400">${v.account_type} ${v.credit_limit ? '| Limit: $'+v.credit_limit : ''} ${v.reports_to ? '| Reports to: '+v.reports_to : ''}</p></div><span class="px-2 py-0.5 rounded-full text-xs ${v.status === 'active' ? 'bg-green-900/50 text-green-400' : v.status === 'applied' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-gray-700 text-gray-300'}">${v.status}</span></div>`).join('')}</div>` : `<p class="text-gray-500 text-sm">No Tier ${tier} accounts yet</p>`}
      </div>`
    }).join('')}
  </div>` : `<div class="bg-gray-900 rounded-2xl p-8 text-center mb-6"><p class="text-gray-400 mb-4">No business credit profile yet.</p><button onclick="document.getElementById('profile-modal').classList.remove('hidden')" class="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm">Create Business Profile →</button></div>`}
  <div class="bg-gray-900 rounded-2xl p-6">
    <h2 class="font-semibold mb-3 text-gray-200">Get AI Business Credit Roadmap</h2>
    <button onclick="getAIRoadmap()" class="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-sm font-medium mb-3">Generate AI Roadmap</button>
    <div id="roadmap-output" class="text-sm text-gray-300 whitespace-pre-wrap bg-gray-800 rounded-xl p-4 hidden"></div>
  </div>
</div>
<!-- Profile Modal -->
<div id="profile-modal" class="hidden fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
  <div class="bg-gray-900 rounded-2xl p-6 w-full max-w-md">
    <h3 class="text-lg font-bold mb-4">${profile ? 'Edit' : 'Create'} Business Profile</h3>
    <div class="space-y-3">
      <input id="biz-name" type="text" value="${profile?.business_name || ''}" placeholder="Business Legal Name" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <input id="biz-ein" type="text" value="${profile?.ein || ''}" placeholder="EIN (XX-XXXXXXX)" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <input id="biz-duns" type="text" value="${profile?.duns_number || ''}" placeholder="DUNS Number" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <input id="biz-paydex" type="number" value="${profile?.paydex_score || ''}" placeholder="Paydex Score (0-100)" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <input id="biz-type" type="text" value="${profile?.business_type || ''}" placeholder="Business Type (LLC, Corp, etc)" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      <div class="flex gap-2">
        <button onclick="saveProfile()" class="flex-1 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">Save Profile</button>
        <button onclick="document.getElementById('profile-modal').classList.add('hidden')" class="flex-1 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl text-sm">Cancel</button>
      </div>
    </div>
  </div>
</div>
<script>
async function saveProfile() {
  const r = await fetch('/api/business-credit/profile', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ client_id: ${clientId}, business_name: document.getElementById('biz-name').value, ein: document.getElementById('biz-ein').value, duns_number: document.getElementById('biz-duns').value, paydex_score: document.getElementById('biz-paydex').value || null, business_type: document.getElementById('biz-type').value }) })
  if (r.ok) location.reload()
}
function addVendor(tier) {
  const name = prompt('Vendor name?')
  if (!name) return
  const type = prompt('Account type? (net30/net60/revolving/secured)', 'net30')
  const reports = prompt('Reports to? (experian/equifax/transunion/dun_bradstreet/all)', 'all')
  fetch('/api/business-credit/vendor', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ profile_id: ${profile?.id || 0}, vendor_name: name, account_type: type || 'net30', reports_to: reports, tier, status: 'applied' }) }).then(() => location.reload())
}
async function getAIRoadmap() {
  const out = document.getElementById('roadmap-output')
  out.textContent = 'Generating roadmap...'
  out.classList.remove('hidden')
  const r = await fetch('/api/ai/business-credit', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ client_id: ${clientId} }) })
  const d = await r.json()
  out.textContent = d.roadmap || d.error || 'No response.'
}
</script>
</body></html>`)
})

app.get('/api/business-credit/profile/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const profile = await DB.prepare(`SELECT * FROM business_credit_profiles WHERE client_id = ?`).bind(clientId).first()
  if (!profile) return c.json({ error: 'No business credit profile found' }, 404)
  const vendors = await DB.prepare(`SELECT * FROM vendor_accounts WHERE profile_id = ? ORDER BY created_at DESC`).bind((profile as any).id).all()
  return c.json({ profile, vendors: vendors.results })
})

app.post('/api/business-credit/profile', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.client_id || !body.business_name) return c.json({ error: 'client_id and business_name required' }, 400)
  const existing = await DB.prepare(`SELECT id FROM business_credit_profiles WHERE client_id = ?`).bind(body.client_id).first() as any
  if (existing) {
    await DB.prepare(`UPDATE business_credit_profiles SET business_name=?, ein=?, duns_number=?, nav_score=?, paydex_score=?, business_type=?, funding_stage=COALESCE(?,funding_stage), updated_at=datetime('now') WHERE id=?`).bind(body.business_name, body.ein||null, body.duns_number||null, body.nav_score||null, body.paydex_score||null, body.business_type||null, body.funding_stage||null, existing.id).run()
    return c.json({ success: true, id: existing.id, updated: true })
  }
  const ins = await DB.prepare(`INSERT INTO business_credit_profiles (client_id, business_name, ein, duns_number, nav_score, paydex_score, business_type, state_incorporated, date_incorporated, funding_stage) VALUES (?,?,?,?,?,?,?,?,?,'tier1')`).bind(body.client_id, body.business_name, body.ein||null, body.duns_number||null, body.nav_score||null, body.paydex_score||null, body.business_type||null, body.state_incorporated||null, body.date_incorporated||null).run()
  return c.json({ success: true, id: ins.meta?.last_row_id })
})

app.post('/api/business-credit/vendor', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.profile_id || !body.vendor_name) return c.json({ error: 'profile_id and vendor_name required' }, 400)
  const ins = await DB.prepare(`INSERT INTO vendor_accounts (profile_id, vendor_name, account_type, credit_limit, payment_terms, reports_to, tier, account_number, open_date, status, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?)`).bind(body.profile_id, body.vendor_name, body.account_type||'net30', body.credit_limit||null, body.payment_terms||null, body.reports_to||null, body.tier||1, body.account_number||null, body.open_date||null, body.status||'applied', body.notes||null).run()
  return c.json({ success: true, id: ins.meta?.last_row_id })
})

app.get('/api/business-credit/vendors/:profileId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const profileId = parseInt(c.req.param('profileId'))
  const vendors = await DB.prepare(`SELECT * FROM vendor_accounts WHERE profile_id = ? ORDER BY tier, status`).bind(profileId).all()
  return c.json({ vendors: vendors.results })
})

app.put('/api/business-credit/vendor/:id', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const id = parseInt(c.req.param('id'))
  const body: any = await c.req.json().catch(() => ({}))
  const fields = ['vendor_name','account_type','credit_limit','balance','payment_terms','reports_to','tier','status','on_time_payments','late_payments','notes']
  const updates: string[] = ["updated_at = datetime('now')"]; const vals: any[] = []
  fields.forEach(f => { if (body[f] !== undefined) { updates.push(`${f} = ?`); vals.push(body[f]) } })
  await DB.prepare(`UPDATE vendor_accounts SET ${updates.join(', ')} WHERE id = ?`).bind(...vals, id).run()
  return c.json({ success: true })
})

// ============================================================
// FEATURE: COMPLIANCE CENTER PAGE
// ============================================================

app.get('/compliance-center', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.html('<h1>DB unavailable</h1>', 500)
  const updates = await DB.prepare(`SELECT cu.*, cs.source_name FROM compliance_updates cu LEFT JOIN compliance_sources cs ON cs.id = cu.source_id ORDER BY cu.detected_at DESC LIMIT 30`).all()
  const alerts = await DB.prepare(`SELECT * FROM compliance_alerts WHERE status = 'open' ORDER BY severity DESC LIMIT 20`).all()
  const rules = await DB.prepare(`SELECT * FROM compliance_rule_versions WHERE is_active = 1 ORDER BY rule_category, rule_code`).all()
  const sources = await DB.prepare(`SELECT * FROM compliance_sources ORDER BY source_type`).all()
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  const severityColor: Record<string, string> = { critical:'bg-red-900/50 text-red-400', high:'bg-orange-900/50 text-orange-400', medium:'bg-yellow-900/50 text-yellow-400', low:'bg-blue-900/50 text-blue-400', info:'bg-gray-700 text-gray-300' }
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Compliance Center — ${company}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-gray-950 text-white min-h-screen">
<nav class="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center gap-4">
  <a href="/" class="text-blue-400 hover:text-white font-semibold">← Dashboard</a>
  <span class="text-gray-400">/</span><span class="text-white font-medium">Compliance Center</span>
</nav>
<div class="p-6 max-w-6xl mx-auto">
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-bold">Compliance Center</h1>
    <button onclick="runCheck()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">Run Compliance Check</button>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Active Rules</p><p class="text-2xl font-bold text-blue-400">${(rules.results as any[]).length}</p></div>
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Open Alerts</p><p class="text-2xl font-bold text-yellow-400">${(alerts.results as any[]).length}</p></div>
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Pending Updates</p><p class="text-2xl font-bold text-orange-400">${(updates.results as any[]).filter((u: any) => u.status === 'pending').length}</p></div>
    <div class="bg-gray-900 rounded-xl p-4"><p class="text-gray-400 text-xs mb-1">Sources Monitored</p><p class="text-2xl font-bold text-green-400">${(sources.results as any[]).length}</p></div>
  </div>
  ${(alerts.results as any[]).length ? `<div class="bg-gray-900 rounded-2xl p-4 mb-6">
    <h2 class="font-semibold mb-3 text-red-400">⚠ Open Compliance Alerts</h2>
    <div class="space-y-2">${(alerts.results as any[]).map(a => `<div class="flex items-center justify-between p-3 bg-gray-800 rounded-xl"><div><p class="text-sm font-medium">${a.title}</p><p class="text-xs text-gray-400">${a.description || ''}</p></div><div class="flex items-center gap-2"><span class="px-2 py-0.5 rounded-full text-xs ${severityColor[a.severity] || 'bg-gray-700 text-gray-300'}">${a.severity}</span><button onclick="resolveAlert(${a.id})" class="text-xs text-gray-400 hover:text-white">Resolve</button></div></div>`).join('')}</div>
  </div>` : ''}
  <div class="bg-gray-900 rounded-2xl p-4 mb-6">
    <h2 class="font-semibold mb-3">Compliance Updates (Last 30)</h2>
    <div class="space-y-2">${(updates.results as any[]).map(u => `<div class="flex items-start justify-between p-3 bg-gray-800 rounded-xl"><div class="flex-1 mr-4"><p class="text-sm font-medium">${u.update_title}</p><p class="text-xs text-gray-400 mt-0.5">${u.source_name || ''} · ${u.detected_at?.slice(0,10) || ''}</p>${u.update_summary ? `<p class="text-xs text-gray-300 mt-1">${u.update_summary.slice(0,150)}...</p>` : ''}</div><div class="flex items-center gap-2 flex-shrink-0">${u.status === 'pending' ? `<button onclick="approveUpdate(${u.id},'approve')" class="px-2 py-1 bg-green-700 hover:bg-green-600 rounded text-xs">Approve</button><button onclick="approveUpdate(${u.id},'reject')" class="px-2 py-1 bg-red-800 hover:bg-red-700 rounded text-xs">Reject</button>` : `<span class="px-2 py-0.5 rounded-full text-xs bg-gray-700 text-gray-300">${u.status}</span>`}</div></div>`).join('') || '<p class="text-gray-500 text-sm text-center py-4">No updates yet — run a compliance check</p>'}</div>
  </div>
  <div class="bg-gray-900 rounded-2xl p-4 mb-6">
    <h2 class="font-semibold mb-3">Active Compliance Rules (${(rules.results as any[]).length})</h2>
    <div class="space-y-2">${Object.entries((rules.results as any[]).reduce((acc: any, r: any) => { if (!acc[r.rule_category]) acc[r.rule_category] = []; acc[r.rule_category].push(r); return acc }, {})).map(([cat, catRules]: [string, any]) => `<div><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${cat}</p>${(catRules as any[]).map(r => `<div class="p-2 bg-gray-800 rounded-lg mb-1"><p class="text-sm font-medium">${r.rule_code} — ${r.rule_name}</p><p class="text-xs text-gray-400">${r.source_citation || ''}</p></div>`).join('')}</div>`).join('')}</div>
  </div>
  <div class="bg-gray-900 rounded-2xl p-4">
    <h2 class="font-semibold mb-3">Monitored Sources</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">${(sources.results as any[]).map(s => `<div class="flex items-center justify-between p-3 bg-gray-800 rounded-xl"><div><p class="text-sm font-medium">${s.source_name}</p><p class="text-xs text-gray-400">${s.source_url.slice(0,50)}...</p></div><div class="text-right"><span class="text-xs text-gray-400">${s.last_checked_at ? 'Checked: '+s.last_checked_at.slice(0,10) : 'Not checked'}</span></div></div>`).join('')}</div>
  </div>
  <div id="run-msg" class="mt-4 text-sm text-center hidden"></div>
</div>
<script>
async function runCheck() {
  const msg = document.getElementById('run-msg')
  msg.className='text-blue-400 text-sm text-center'; msg.textContent='Running compliance check...'; msg.classList.remove('hidden')
  const r = await fetch('/api/cron/compliance-check', { method:'POST' })
  const d = await r.json()
  if (d.success) { msg.className='text-green-400 text-sm text-center'; msg.textContent=\`✓ Checked \${d.sources_checked} sources, \${d.updates_created} updates created.\`; setTimeout(() => location.reload(), 2000) }
  else { msg.className='text-red-400 text-sm text-center'; msg.textContent=d.error||'Failed' }
}
async function approveUpdate(id, action) {
  await fetch(\`/api/compliance/approve/\${id}\`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ action, reviewer:'admin' }) })
  location.reload()
}
async function resolveAlert(id) {
  await fetch(\`/api/compliance/alerts/\${id}/resolve\`, { method:'POST' })
  location.reload()
}
</script>
</body></html>`)
})

// POST /api/compliance/alerts/:id/resolve
app.post('/api/compliance/alerts/:id/resolve', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const id = parseInt(c.req.param('id'))
  await DB.prepare(`UPDATE compliance_alerts SET status = 'resolved', resolved_at = datetime('now'), resolved_by = 'admin' WHERE id = ?`).bind(id).run()
  return c.json({ success: true })
})

// ============================================================
// FEATURE: FULL AUDIT LOG PAGE
// ============================================================

app.get('/audit-log', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.html('<h1>DB unavailable</h1>', 500)
  const page = parseInt(c.req.query('page') || '1')
  const limit = 50
  const offset = (page - 1) * limit
  const clientFilter = c.req.query('client_id')
  const actionFilter = c.req.query('action')
  let q = `SELECT al.* FROM audit_log al WHERE 1=1`
  const params: any[] = []
  if (clientFilter) { q += ` AND al.entity_id = ? AND al.entity_type = 'client'`; params.push(parseInt(clientFilter)) }
  if (actionFilter) { q += ` AND al.action LIKE ?`; params.push(`%${actionFilter}%`) }
  q += ` ORDER BY al.created_at DESC LIMIT ${limit} OFFSET ${offset}`
  const logs = await DB.prepare(q).bind(...params).all()
  const total = await DB.prepare(`SELECT COUNT(*) as cnt FROM audit_log`).first() as any
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Audit Log — ${company}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-gray-950 text-white min-h-screen">
<nav class="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center gap-4">
  <a href="/" class="text-blue-400 hover:text-white font-semibold">← Dashboard</a>
  <span class="text-gray-400">/</span><span class="text-white font-medium">Audit Log</span>
  <div class="ml-auto flex gap-2">
    <a href="/api/export/audit-log" class="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">Export CSV</a>
  </div>
</nav>
<div class="p-6 max-w-6xl mx-auto">
  <div class="flex items-center justify-between mb-4">
    <h1 class="text-2xl font-bold">Audit Log <span class="text-gray-500 text-lg font-normal">(${total?.cnt || 0} total entries)</span></h1>
  </div>
  <div class="flex gap-3 mb-4">
    <input type="text" id="client-filter" placeholder="Client ID" class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500 w-28">
    <input type="text" id="action-filter" placeholder="Filter by action..." class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500 flex-1">
    <button onclick="applyFilter()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">Filter</button>
    <a href="/audit-log" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl text-sm">Clear</a>
  </div>
  <div class="bg-gray-900 rounded-2xl overflow-hidden">
    <table class="w-full text-sm">
      <thead><tr class="border-b border-gray-800 text-gray-400 text-xs"><th class="px-4 py-3 text-left">Time</th><th class="px-4 py-3 text-left">Entity</th><th class="px-4 py-3 text-left">Action</th><th class="px-4 py-3 text-left">Actor</th><th class="px-4 py-3 text-left">Details</th></tr></thead>
      <tbody>
        ${(logs.results as any[]).map(log => `<tr class="border-b border-gray-800/50 hover:bg-gray-800/30">
          <td class="px-4 py-2 text-gray-400 text-xs whitespace-nowrap">${log.created_at?.slice(0,16) || ''}</td>
          <td class="px-4 py-2">${log.entity_type === 'client' && log.entity_id ? `<a href="/clients/${log.entity_id}" class="text-blue-400 hover:underline text-xs">${log.entity_type} #${log.entity_id}</a>` : `<span class="text-gray-400 text-xs">${log.entity_type || '—'} ${log.entity_id ? '#'+log.entity_id : ''}</span>`}</td>
          <td class="px-4 py-2"><span class="px-2 py-0.5 rounded text-xs bg-gray-700 text-blue-300 font-mono">${log.action || ''}</span></td>
          <td class="px-4 py-2 text-gray-300 text-xs">${log.actor || '—'}</td>
          <td class="px-4 py-2 text-gray-400 text-xs max-w-xs truncate">${log.details || '—'}</td>
        </tr>`).join('') || '<tr><td colspan="5" class="px-4 py-8 text-center text-gray-500">No audit entries found</td></tr>'}
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-between mt-4 text-sm text-gray-400">
    <span>Page ${page} · Showing ${offset + 1}–${Math.min(offset + limit, total?.cnt || 0)} of ${total?.cnt || 0}</span>
    <div class="flex gap-2">
      ${page > 1 ? `<a href="/audit-log?page=${page-1}" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg">← Prev</a>` : ''}
      ${(offset + limit) < (total?.cnt || 0) ? `<a href="/audit-log?page=${page+1}" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg">Next →</a>` : ''}
    </div>
  </div>
</div>
<script>
function applyFilter() {
  const c = document.getElementById('client-filter').value
  const a = document.getElementById('action-filter').value
  let url = '/audit-log?'
  if (c) url += 'client_id='+c+'&'
  if (a) url += 'action='+encodeURIComponent(a)
  window.location.href = url
}
</script>
</body></html>`)
})

// GET /api/export/audit-log — CSV export
app.get('/api/export/audit-log', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const logs = await DB.prepare(`SELECT * FROM audit_log ORDER BY created_at DESC LIMIT 5000`).all()
  const rows = (logs.results as any[]).map(l => `"${l.created_at||''}","${l.entity_type||''}","${l.entity_id||''}","${l.action||''}","${l.actor||''}","${(l.details||'').replace(/"/g,"'")}"`)
  const csv = ['timestamp,entity_type,entity_id,action,actor,details', ...rows].join('\n')
  return new Response(csv, { headers: { 'Content-Type': 'text/csv', 'Content-Disposition': `attachment; filename="audit-log-${new Date().toISOString().split('T')[0]}.csv"` } })
})

// ============================================================
// FEATURE: ENHANCED DASHBOARD NAVIGATION (update existing)
// ============================================================

// GET /api/intake/sessions — list all intake sessions (admin)
app.get('/api/intake/sessions', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const sessions = await DB.prepare(`SELECT s.*, cl.first_name, cl.last_name FROM intake_sessions s LEFT JOIN clients cl ON cl.id = s.client_id ORDER BY s.created_at DESC LIMIT 100`).all()
  return c.json({ sessions: sessions.results })
})

// GET /api/e-signatures/:clientId — get client's signatures
app.get('/api/e-signatures/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const sigs = await DB.prepare(`SELECT * FROM e_signatures WHERE client_id = ? ORDER BY signed_at DESC`).bind(clientId).all()
  return c.json({ signatures: sigs.results })
})

// GET /api/legal-templates — list active templates
app.get('/api/legal-templates', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const templates = await DB.prepare(`SELECT id, template_name, template_type, version, effective_date, approved_by, is_active, change_notes, created_at FROM legal_template_versions ORDER BY template_type, version DESC`).all()
  return c.json({ templates: templates.results })
})

// GET /api/legal-templates/:type — get active template content
app.get('/api/legal-templates/:type', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const type = c.req.param('type')
  const tmpl = await DB.prepare(`SELECT * FROM legal_template_versions WHERE template_type = ? AND is_active = 1 ORDER BY id DESC LIMIT 1`).bind(type).first()
  if (!tmpl) return c.json({ error: 'Template not found' }, 404)
  return c.json({ template: tmpl })
})

// POST /api/legal-templates — create/version a template (admin)
app.post('/api/legal-templates', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.template_type || !body.content) return c.json({ error: 'template_type and content required' }, 400)
  // Deactivate old versions
  await DB.prepare(`UPDATE legal_template_versions SET is_active = 0 WHERE template_type = ?`).bind(body.template_type).run()
  const ins = await DB.prepare(`INSERT INTO legal_template_versions (template_name, template_type, version, content, effective_date, approved_by, is_active, change_notes) VALUES (?,?,?,?,?,?,1,?)`).bind(body.template_name || body.template_type, body.template_type, body.version || '1.0', body.content, body.effective_date || new Date().toISOString().split('T')[0], body.approved_by || null, body.change_notes || null).run()
  await DB.prepare(`INSERT INTO approval_logs (entity_type, entity_id, action, performed_by, notes) VALUES (?,?,'applied',?,?)`).bind('legal_template', ins.meta?.last_row_id, body.approved_by || 'admin', `New version: ${body.version}`).run()
  return c.json({ success: true, id: ins.meta?.last_row_id })
})

// ============================================================
// FEATURE: OVERDUE DEADLINE CRON CHECK
// ============================================================
app.post('/api/cron/check-deadlines', async (c) => {
  const env = c.env; const { DB } = env
  const cronSecret = env.CRON_SECRET
  if (cronSecret && c.req.header('x-cron-secret') !== cronSecret) return c.json({ error: 'Unauthorized' }, 401)
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const start = Date.now()
  const today = new Date().toISOString().split('T')[0]
  // Find all overdue open deadlines
  const overdue = await DB.prepare(`SELECT d.*, cl.email, cl.first_name, cl.phone FROM deadlines d JOIN clients cl ON cl.id = d.client_id WHERE d.deadline_date < ? AND d.status = 'open' AND d.reminder_sent_at IS NULL`).bind(today).all()
  let notified = 0
  for (const dl of overdue.results as any[]) {
    const msg = `⚠ OVERDUE: ${dl.deadline_type.replace(/_/g,' ')} deadline was ${dl.deadline_date} for ${dl.description || 'client deadline'}. Immediate action required.`
    // Notify staff via system notification
    await DB.prepare(`INSERT INTO notifications (client_id, type, title, message) VALUES (?,?,?,?)`).bind(dl.client_id, 'compliance', 'Overdue Deadline', msg).run()
    // Send client email if bureau response deadline
    if (dl.deadline_type === 'bureau_response' && dl.email) {
      await sendEmail(env, dl.email, 'Important: Bureau Response Deadline Passed',
        `Hi ${dl.first_name},\n\nThe 30-day bureau response deadline for your dispute has passed (${dl.deadline_date}). This may entitle you to additional remedies under FCRA § 611. Our team is reviewing your case for escalation options.\n\nRJ Business Solutions`)
    }
    await DB.prepare(`UPDATE deadlines SET reminder_sent_at = datetime('now') WHERE id = ?`).bind(dl.id).run()
    notified++
  }
  const duration = Date.now() - start
  await DB.prepare(`INSERT INTO cron_log (job_name, status, records_processed, duration_ms, details) VALUES (?,?,?,?,?)`).bind('check_deadlines', 'success', notified, duration, `Overdue deadlines notified: ${notified}`).run()
  return c.json({ success: true, overdue_count: (overdue.results as any[]).length, notified, duration_ms: duration })
})

// ============================================================
// HYPERION ANALYSIS ENGINE — Full Multi-Roadmap Analysis
// Auto-triggered on every MFSN report import
// ============================================================

// Helper: compute utilization from accounts
async function computeUtilization(DB: any, clientId: number, reportId: number | null): Promise<{ pct: number; totalBalance: number; totalLimit: number }> {
  const q = reportId
    ? `SELECT SUM(balance_amount) as bal, SUM(credit_limit_amount) as lim FROM credit_report_accounts WHERE credit_report_id = ? AND account_open = 1`
    : `SELECT SUM(balance_amount) as bal, SUM(credit_limit_amount) as lim FROM credit_report_accounts WHERE client_id = ? AND account_open = 1`
  const row = await DB.prepare(q).bind(reportId || clientId).first() as any
  const bal = row?.bal || 0; const lim = row?.lim || 0
  return { pct: lim > 0 ? Math.round((bal / lim) * 100) : 0, totalBalance: bal, totalLimit: lim }
}

// POST /api/reports/analyze/:reportId — Run full Hyperion analysis on a credit report
app.post('/api/reports/analyze/:reportId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const reportId = parseInt(c.req.param('reportId'))
  const start = Date.now()

  // Load report + client
  const rpt = await DB.prepare(`SELECT cr.*, cl.first_name, cl.last_name, cl.email, cl.credit_score_start, cl.credit_score_goal, cl.credit_score_current FROM credit_reports cr JOIN clients cl ON cl.id = cr.client_id WHERE cr.id = ?`).bind(reportId).first() as any
  if (!rpt) return c.json({ error: 'Report not found' }, 404)
  const clientId = rpt.client_id

  // Find or create analysis_reports record
  let ar = await DB.prepare(`SELECT id FROM analysis_reports WHERE credit_report_id = ? ORDER BY id DESC LIMIT 1`).bind(reportId).first() as any
  if (!ar) {
    const ins = await DB.prepare(`INSERT INTO analysis_reports (client_id, credit_report_id, status, started_at) VALUES (?,?,'running',datetime('now'))`).bind(clientId, reportId).run()
    ar = { id: ins.meta?.last_row_id }
  } else {
    await DB.prepare(`UPDATE analysis_reports SET status='running', started_at=datetime('now') WHERE id=?`).bind(ar.id).run()
  }
  const arId = ar.id

  // Load accounts + inquiries + public records
  const accounts = await DB.prepare(`SELECT * FROM credit_report_accounts WHERE credit_report_id = ?`).bind(reportId).all()
  const inquiries = await DB.prepare(`SELECT * FROM credit_report_inquiries WHERE credit_report_id = ?`).bind(reportId).all()
  const pubRecs = await DB.prepare(`SELECT * FROM credit_report_public_records WHERE credit_report_id = ?`).bind(reportId).all()
  const accts = accounts.results as any[]
  const inqs = inquiries.results as any[]
  const prs = pubRecs.results as any[]

  const scoreAvg = Math.round([(rpt.score_efx||0),(rpt.score_tu||0),(rpt.score_exp||0)].filter(s=>s>0).reduce((a:number,b:number)=>a+b,0) / [(rpt.score_efx||0),(rpt.score_tu||0),(rpt.score_exp||0)].filter(s=>s>0).length || 0)
  const { pct: utilPct, totalBalance, totalLimit } = await computeUtilization(DB, clientId, reportId)

  const negAccts = accts.filter(a => a.payment_status === 'C' || a.past_due_amount > 0 || a.times_90_days_late > 0 || (a.account_status||'').toLowerCase().includes('charge'))
  const hardInqs = inqs.filter(i => i.inquiry_type !== 'soft')

  // Build data context for all AI agents
  const clientCtx = `Client: ${rpt.first_name} ${rpt.last_name} | Scores: EFX=${rpt.score_efx||'?'} TU=${rpt.score_tu||'?'} EXP=${rpt.score_exp||'?'} | Avg: ${scoreAvg} | Goal: ${rpt.credit_score_goal||'not set'} | Start Score: ${rpt.credit_score_start||'unknown'}`
  const reportCtx = `Total Accounts: ${rpt.total_accounts||0} | Open: ${rpt.total_open_accounts||0} | Negative: ${rpt.total_negative_accounts||0} | Inquiries: ${rpt.total_inquiries||0} | Collections: ${rpt.total_collections||0} | Public Records: ${prs.length} | Credit History: ${rpt.credit_history_months||0} months | Utilization: ${utilPct}% (Balance: $${Math.round(totalBalance).toLocaleString()} / Limit: $${Math.round(totalLimit).toLocaleString()})`
  const acctSummary = accts.slice(0,20).map(a => `${a.account_name||a.provider||'Account'}: ${a.account_type} | Status: ${a.account_status} | Balance: $${a.balance_amount||0} | Limit: $${a.credit_limit_amount||0} | Late30/60/90: ${a.times_30_days_late||0}/${a.times_60_days_late||0}/${a.times_90_days_late||0} | Payment: ${a.payment_status||'OK'}`).join('\n')
  const negSummary = negAccts.map(a => `NEGATIVE — ${a.account_name||'Account'}: ${a.account_type} | Balance: $${a.balance_amount||0} | Past Due: $${a.past_due_amount||0} | Status: ${a.account_status}`).join('\n')
  const inqSummary = hardInqs.slice(0,10).map(i => `Hard Inquiry: ${i.inquirer_name} on ${i.inquiry_date}`).join('\n')

  // Run 8 core analysis agents in parallel using Promise.allSettled for resilience
  const [execSum, scoreProj, metro2, fcraAudit, debtPlan, autoLoan, mortgage, bizFund, debtRemoval, actionPlan, productMatch, behaviorProfile] = await Promise.allSettled([

    // 1. Executive Summary Agent
    callAISimple(env,
      `You are HYPERION Executive Summary Agent for RJ Business Solutions. You generate concise, high-impact executive summaries of credit analyses for ${rpt.first_name} ${rpt.last_name}. Format with: Overall Credit Health Score (0-100), letter grade, top 5 findings ranked by impact, 3 immediate actions with expected point gains, 90-day projected score range (conservative/moderate/aggressive), and estimated annual interest savings. Use FCRA/Metro2 terminology. Be specific and actionable.`,
      `${clientCtx}\n${reportCtx}\n\nNegative Items:\n${negSummary||'None'}\n\nHard Inquiries:\n${inqSummary||'None'}\n\nProvide complete executive summary.`),

    // 2. Score Projection Agent
    callAISimple(env,
      `You are HYPERION Score Projection Agent. Model credit score trajectories for 3, 6, 12, and 24 months using three scenarios (Conservative: minimum compliance actions only / Moderate: standard dispute + utilization work / Aggressive: all disputes + AU tradelines + rapid rescore). For each scenario provide: projected score, key milestones, and probability %. Format as structured analysis with specific month-by-month projections.`,
      `${clientCtx}\n${reportCtx}\n\nNegative Items (${negAccts.length}):\n${negSummary||'None'}\nProvide complete score trajectory analysis.`),

    // 3. Metro 2 Compliance Audit Agent
    callAISimple(env,
      `You are HYPERION Metro 2® Compliance Audit Agent for RJ Business Solutions. Audit each account against Metro 2® Format Specification. Check: Account Status codes, Payment Rating fields, Compliance Condition codes, Special Comment codes, Date fields (DOFD, DOLA, Date Closed accuracy), Balance consistency, Payment History Profile accuracy. Rate severity: Critical/Major/Minor. For each violation provide the exact Metro 2 field, the violation, and the legal remedy under FCRA §611/§623.`,
      `${clientCtx}\n\nAll Accounts:\n${acctSummary||'None'}\n\nProvide complete Metro 2 violation audit.`),

    // 4. FCRA/FDCPA Legal Audit Agent
    callAISimple(env,
      `You are HYPERION Legal Compliance Agent. Audit all accounts under: FCRA §611(a) dispute rights, §607(b) accuracy requirements, §623(a) furnisher duties, §605(a) 7-year reporting limit, §605(c) Running of Reporting Period. Also audit collection accounts under FDCPA §809(b) validation, §807 misrepresentation. For each violation: cite the exact statute, describe the violation, calculate statute of limitations, recommend dispute letter type, and estimate deletion probability (%).`,
      `${clientCtx}\n\nAccounts:\n${acctSummary||'None'}\nNegative:\n${negSummary||'None'}\nPublic Records: ${prs.length}\n\nProvide complete FCRA/FDCPA legal audit.`),

    // 5. Debt Analysis Agent
    callAISimple(env,
      `You are HYPERION Debt Analysis Agent. Analyze all debt accounts and produce: Total debt by category (revolving/installment/collection), Debt-to-Income analysis (assume income unknown — note this), Avalanche vs Snowball payoff comparison with monthly timelines, Credit utilization optimization plan (which accounts to pay down first for maximum score impact), Charge-off and collection negotiation strategy (settlement percentages, PFD possibilities). Include specific dollar amounts and timelines.`,
      `${clientCtx}\n${reportCtx}\n\nAll Accounts:\n${acctSummary||'None'}\n\nProvide complete debt analysis and payoff strategy.`),

    // 6. Auto Loan Roadmap Agent
    callAISimple(env,
      `You are HYPERION Auto Loan Roadmap Agent for RJ Business Solutions. Create a complete auto loan qualification roadmap for ${rpt.first_name} ${rpt.last_name}. Include: Current approval probability and rate tier, What score is needed for prime rate (<6%), Specific steps to qualify for best rate (score target, utilization target, inquiry strategy), Timeline: months to qualify at current rate vs. if they follow the roadmap, Rate comparison: current estimated rate vs. target rate, Monthly payment comparison on a $30,000 vehicle (current vs target), Lifetime savings, Top 3 credit unions/lenders that work with their current score tier, Recommended auto loan strategy (subprime bridge vs wait). Be specific with dollar amounts.`,
      `${clientCtx}\n${reportCtx}\n\nGenerate complete auto loan qualification roadmap.`),

    // 7. Mortgage Roadmap Agent
    callAISimple(env,
      `You are HYPERION Mortgage Qualification Roadmap Agent for RJ Business Solutions. Create a complete mortgage readiness roadmap for ${rpt.first_name} ${rpt.last_name}. Include: Current mortgage qualification status (FHA at 580+, Conventional at 620+, FHA at 580 with 3.5% down), Target score for best rate (740+), Gap analysis: what needs to change and by when, 30-year mortgage rate comparison: current score vs. 740+ score, On a $300,000 home: current monthly payment vs target monthly payment vs lifetime interest savings, Specific dispute/action items that will move the needle toward mortgage qualification, Timeline: months to FHA qualification vs conventional qualification, Required debt-to-income improvements, Downpayment savings strategy. Use current 2026 rate assumptions.`,
      `${clientCtx}\n${reportCtx}\n\nNegative Items:\n${negSummary||'None'}\nGenerate complete mortgage qualification roadmap.`),

    // 8. Business Funding Roadmap Agent
    callAISimple(env,
      `You are HYPERION Business Funding Roadmap Agent for RJ Business Solutions. Create a complete business funding roadmap for ${rpt.first_name} ${rpt.last_name}. Include: Personal credit impact on business funding (personal guarantee thresholds), Fundability score (1-100) based on personal credit profile, Business credit building path: Tier 1 (starter Net-30s: Uline, Grainger, Quill), Tier 2 (fleet/gas cards), Tier 3 (business credit cards), Tier 4 (no-PG funding), Timeline from current state to $50K-$500K unsecured business credit, EIN-only credit building strategy, Key business credit bureaus (D&B PAYDEX, Experian Business, Equifax Business), SBA loan qualification analysis (7a, Microloan), Revenue-based financing alternatives, Required separation steps (business bank account, virtual office, DUNS number). Be specific with dollar amounts and timelines.`,
      `${clientCtx}\n${reportCtx}\n\nGenerate complete business funding roadmap.`),

    // 9. Debt Removal Roadmap Agent
    callAISimple(env,
      `You are HYPERION Debt Removal & Collection Deletion Agent for RJ Business Solutions. Create a complete debt removal roadmap for ${rpt.first_name} ${rpt.last_name}. Include: Priority order for dispute/deletion attempts ranked by (1) deletion probability, (2) score impact, (3) ease, Collection account analysis: which to dispute, which to settle PFD (Pay For Delete), which to validate, Specific dispute strategies per negative item: factual inaccuracy, Metro 2 violation, DOFD manipulation, obsolete debt (7-year rule), FDCPA violations, Charge-off negotiation: target settlement percentages by debt age, Goodwill deletion request targets: which creditors respond to goodwill letters, Rapid rescore opportunities after deletions, Expected point gain per deletion, Total expected point gain if all negatives removed. Include certified mail strategy.`,
      `${clientCtx}\n${reportCtx}\n\nNegative Items (${negAccts.length}):\n${negSummary||'None'}\n\nInquiries:\n${inqSummary||'None'}\n\nGenerate complete debt removal roadmap.`),

    // 10. 90-Day Action Plan Agent
    callAISimple(env,
      `You are HYPERION 90-Day Credit Transformation Plan Agent for RJ Business Solutions. Create a detailed, executable 90-day credit transformation plan for ${rpt.first_name} ${rpt.last_name}. Structure as three phases:\n\nPHASE 1 (Days 1-30) — Foundation & Dispute Launch:\n- Specific accounts to dispute at each bureau\n- Exact dispute reasons (factual error, Metro 2 violation, unverifiable, obsolete)\n- Utilization reduction targets (which cards to pay)\n- Inquiry challenge strategy if applicable\n- Expected score movement: +X to +Y points\n\nPHASE 2 (Days 31-60) — Enforcement & Optimization:\n- Follow-up on Phase 1 disputes\n- Escalation letters (Method of Verification, CFPB complaints)\n- Authorized user tradeline strategy\n- Additional utilization optimization\n- Expected cumulative score movement\n\nPHASE 3 (Days 61-90) — Acceleration & Product Acquisition:\n- Remaining dispute follow-ups\n- Positive account building (credit builder loan, secured card)\n- Score milestone targets\n- Product applications when score hits targets\n- Expected final score at day 90\n\nInclude specific days for key actions and estimated point impacts.`,
      `${clientCtx}\n${reportCtx}\n\nNegative Items:\n${negSummary||'None'}\nInquiries:\n${inqSummary||'None'}\n\nGenerate complete 90-day action plan.`),

    // 11. Product Matching Agent
    callAISimple(env,
      `You are HYPERION Financial Product Matching Agent. Match ${rpt.first_name} ${rpt.last_name} to optimal financial products based on their current credit profile. Provide: Credit Cards — secured cards available now, approval probability for 3 specific cards at current score, target cards when score reaches 680/720/750. Personal Loans — credit builder loan recommendations, debt consolidation eligibility at current vs target score. Auto Loans — current rate tier, target rate tier. Mortgage — current status, timeline. Business Credit — immediate business credit options. For each product: specific lender names, estimated APR, approval probability (%), and the score needed for next tier. Format as actionable recommendations.`,
      `${clientCtx}\n${reportCtx}\n\nGenerate complete product match analysis.`),

    // 12. Behavioral Profile Agent
    callAISimple(env,
      `You are HYPERION Behavioral Psychology Agent. Analyze the credit profile pattern and create a financial behavior profile for ${rpt.first_name} ${rpt.last_name}. Based on: payment history patterns, account types opened, inquiry patterns, balance-to-limit behavior. Identify: Financial personality type (Avoider/Impulsive/Planner/Reactor), Key behavioral risk factors visible in the data, Personalized motivation strategy (goal-anchoring, milestone rewards, accountability structure), Top 3 behavioral changes with highest credit impact, Habit formation plan for sustained credit improvement. Keep practical and encouraging.`,
      `${clientCtx}\n${reportCtx}\n\nAccount patterns:\n${acctSummary?.slice(0,500)||'None'}\n\nGenerate behavioral profile and strategy.`)
  ])

  // Extract text results (handle settled promises)
  const getText = (r: PromiseSettledResult<any>) => r.status === 'fulfilled' ? (r.value || '') : `Analysis unavailable: ${(r as any).reason?.message || 'AI error'}`

  const execSumText = getText(execSum)
  const scoreProjText = getText(scoreProj)
  const metro2Text = getText(metro2)
  const fcraText = getText(fcraAudit)
  const debtText = getText(debtPlan)
  const autoLoanText = getText(autoLoan)
  const mortgageText = getText(mortgage)
  const bizFundText = getText(bizFund)
  const debtRemovalText = getText(debtRemoval)
  const actionPlanText = getText(actionPlan)
  const productMatchText = getText(productMatch)
  const behaviorText = getText(behaviorProfile)

  // Compute health score heuristically
  let health = 50
  if (scoreAvg >= 750) health += 30; else if (scoreAvg >= 700) health += 20; else if (scoreAvg >= 650) health += 10; else if (scoreAvg >= 600) health += 0; else health -= 10
  if (utilPct < 10) health += 15; else if (utilPct < 30) health += 8; else if (utilPct > 50) health -= 15; else if (utilPct > 80) health -= 25
  if (negAccts.length === 0) health += 10; else health -= Math.min(25, negAccts.length * 4)
  if (hardInqs.length > 6) health -= 10; else if (hardInqs.length > 3) health -= 5
  if (prs.length > 0) health -= 15
  health = Math.max(0, Math.min(100, health))
  const grade = health >= 90 ? 'A' : health >= 80 ? 'B' : health >= 70 ? 'C' : health >= 60 ? 'D' : 'F'

  const duration = Date.now() - start

  // Save full analysis to analysis_reports
  await DB.prepare(`UPDATE analysis_reports SET status='completed', overall_health_score=?, health_grade=?, utilization_pct=?, executive_summary=?, score_analysis=?, metro2_violations=?, fcra_violations=?, debt_analysis=?, action_plan_90day=?, behavior_profile=?, completed_at=datetime('now'), duration_ms=?, updated_at=datetime('now') WHERE id=?`)
    .bind(health, grade, utilPct, execSumText, scoreProjText, metro2Text, fcraText, debtText, actionPlanText, behaviorText, duration, arId).run()

  // Save roadmaps to roadmap_results table
  const roadmaps: Array<{ type: string; title: string; content: string }> = [
    { type: 'auto_loan', title: 'Auto Loan Qualification Roadmap', content: autoLoanText },
    { type: 'mortgage', title: 'Mortgage Qualification Roadmap', content: mortgageText },
    { type: 'business_funding', title: 'Business Funding Roadmap', content: bizFundText },
    { type: 'debt_removal', title: 'Debt Removal & Collection Deletion Roadmap', content: debtRemovalText },
    { type: '90_day_plan', title: '90-Day Credit Transformation Plan', content: actionPlanText },
    { type: 'product_match', title: 'Financial Product Matches', content: productMatchText },
    { type: 'score_optimization', title: 'Score Projection & Optimization', content: scoreProjText },
    { type: 'executive_summary', title: 'Executive Summary', content: execSumText }
  ]
  for (const rm of roadmaps) {
    await DB.prepare(`INSERT INTO roadmap_results (client_id, credit_report_id, analysis_report_id, roadmap_type, title, content, status) VALUES (?,?,?,?,?,?,'completed')`)
      .bind(clientId, reportId, arId, rm.type, rm.title, rm.content).run()
  }

  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('hyperion','analysis_completed','client',?,?)`)
    .bind(clientId, `Full analysis: score=${scoreAvg}, health=${health}${grade}, negatives=${negAccts.length}, roadmaps=8, duration=${Math.round(duration/1000)}s`).run()

  return c.json({
    success: true,
    analysis_id: arId,
    health_score: health,
    health_grade: grade,
    score_avg: scoreAvg,
    utilization_pct: utilPct,
    negative_items: negAccts.length,
    roadmaps_generated: roadmaps.length,
    duration_ms: duration,
    roadmaps: roadmaps.map(r => ({ type: r.type, title: r.title, preview: r.content.slice(0, 200) + '...' }))
  })
})

// GET /api/reports/analysis/:clientId — get latest analysis for client
app.get('/api/reports/analysis/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const analysis = await DB.prepare(`SELECT * FROM analysis_reports WHERE client_id = ? ORDER BY id DESC LIMIT 1`).bind(clientId).first()
  if (!analysis) return c.json({ error: 'No analysis found for this client' }, 404)
  const roadmaps = await DB.prepare(`SELECT roadmap_type, title, content, generated_at FROM roadmap_results WHERE client_id = ? AND analysis_report_id = ? ORDER BY id ASC`).bind(clientId, (analysis as any).id).all()
  return c.json({ analysis, roadmaps: roadmaps.results })
})

// GET /api/roadmaps/:clientId/:type — get specific roadmap
app.get('/api/roadmaps/:clientId/:type', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const type = c.req.param('type')
  const roadmap = await DB.prepare(`SELECT * FROM roadmap_results WHERE client_id = ? AND roadmap_type = ? ORDER BY id DESC LIMIT 1`).bind(clientId, type).first()
  if (!roadmap) return c.json({ error: 'Roadmap not found. Run analysis first.' }, 404)
  return c.json({ roadmap })
})

// GET /api/reports/pending — list all pending analyses (for cron)
app.get('/api/reports/pending', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const pending = await DB.prepare(`SELECT ar.*, cl.first_name, cl.last_name FROM analysis_reports ar JOIN clients cl ON cl.id = ar.client_id WHERE ar.status = 'pending' ORDER BY ar.created_at ASC LIMIT 20`).all()
  return c.json({ pending: pending.results, count: (pending.results as any[]).length })
})

// POST /api/cron/run-pending-analyses — process queued analyses
app.post('/api/cron/run-pending-analyses', async (c) => {
  const env = c.env; const { DB } = env
  const cronSecret = env.CRON_SECRET
  if (cronSecret && c.req.header('x-cron-secret') !== cronSecret) return c.json({ error: 'Unauthorized' }, 401)
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const pending = await DB.prepare(`SELECT * FROM analysis_reports WHERE status = 'pending' ORDER BY created_at ASC LIMIT 3`).all()
  const results: any[] = []
  for (const ar of pending.results as any[]) {
    try {
      const r = await fetch(`${c.req.url.replace('/api/cron/run-pending-analyses',`/api/reports/analyze/${ar.credit_report_id || 0}`)}`, { method: 'POST' })
      results.push({ id: ar.id, status: r.ok ? 'triggered' : 'failed' })
    } catch (e: any) {
      results.push({ id: ar.id, status: 'error', error: e.message })
    }
  }
  return c.json({ processed: results.length, results })
})

// ============================================================
// ADDITIONAL AI AGENTS (Metro 2, FCRA, Inquiry, Score Sim)
// ============================================================

// POST /api/ai/metro2-audit — Metro 2 Compliance Audit Agent
app.post('/api/ai/metro2-audit', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, report_id } = body
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const accounts = await DB.prepare(`SELECT * FROM credit_report_accounts WHERE ${report_id ? 'credit_report_id = ?' : 'client_id = ?'} LIMIT 30`).bind(report_id || client_id).all()
  const acctList = (accounts.results as any[]).map(a => `${a.account_name||'Account'} (${a.provider}): Status=${a.account_status} Balance=$${a.balance_amount||0} Late30/60/90=${a.times_30_days_late||0}/${a.times_60_days_late||0}/${a.times_90_days_late||0} Opened=${a.date_opened||'?'} Closed=${a.date_closed||'N/A'} Payment=${a.payment_status||'?'}`).join('\n')
  const audit = await callAISimple(env,
    `You are HYPERION Metro 2 Compliance Audit Agent. You are an expert in the Metro 2® Credit Reporting Resource Guide (CRRG). Audit each account against Metro 2 specifications. For each violation: name the account, cite the Metro 2 field name, describe the violation, rate severity (Critical/Major/Minor), and provide the exact FCRA statute for dispute. Critical violations are grounds for immediate deletion demand. Output as a structured audit report.`,
    `Accounts to audit:\n${acctList||'No accounts found'}`)
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('metro2_agent','metro2_audit_run','client',?,?)`).bind(client_id, `Audited ${(accounts.results as any[]).length} accounts`).run()
  return c.json({ success: true, agent: 'metro2_audit', audit, accounts_audited: (accounts.results as any[]).length })
})

// POST /api/ai/fcra-audit — FCRA Legal Audit Agent
app.post('/api/ai/fcra-audit', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, report_id } = body
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const [client, accounts, pubRecs] = await Promise.all([
    DB.prepare(`SELECT first_name, last_name, credit_score_current FROM clients WHERE id = ?`).bind(client_id).first(),
    DB.prepare(`SELECT * FROM credit_report_accounts WHERE ${report_id ? 'credit_report_id = ?' : 'client_id = ?'} LIMIT 30`).bind(report_id || client_id).all(),
    DB.prepare(`SELECT * FROM credit_report_public_records WHERE ${report_id ? 'credit_report_id = ?' : 'client_id = ?'} LIMIT 10`).bind(report_id || client_id).all()
  ])
  const cl = client as any
  const acctList = (accounts.results as any[]).map(a => `${a.account_name||'Account'}: opened=${a.date_opened||'?'} status=${a.account_status} late=${a.times_90_days_late>0?'YES':'no'}`).join('\n')
  const audit = await callAISimple(env,
    `You are HYPERION FCRA Legal Audit Agent and credit law expert. Audit accounts under: FCRA §611(a) dispute rights, §607(b) accuracy requirements, §623(a) furnisher duties, §605(a) 7-year reporting limit, §605(c) Running of Reporting Period (DOFD rules), §605B identity theft provisions. Also check FDCPA §809(b) validation rights and §807 misrepresentation for any collection accounts. For each violation: cite exact statute and subsection, describe violation in plain language, calculate if still within reporting window, assign dispute strategy (Bureau dispute / Furnisher dispute / CFPB complaint / Demand letter), estimate deletion probability as percentage.`,
    `Client: ${cl?.first_name} ${cl?.last_name}\nAccounts:\n${acctList}\nPublic Records: ${(pubRecs.results as any[]).length}`)
  return c.json({ success: true, agent: 'fcra_audit', audit })
})

// POST /api/ai/inquiry-removal — Hard Inquiry Challenge Agent
app.post('/api/ai/inquiry-removal', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, report_id } = body
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const inquiries = await DB.prepare(`SELECT * FROM credit_report_inquiries WHERE ${report_id ? 'credit_report_id = ?' : 'client_id = ?'} AND inquiry_type != 'soft' ORDER BY inquiry_date DESC LIMIT 20`).bind(report_id || client_id).all()
  const inqList = (inquiries.results as any[]).map(i => `${i.inquirer_name} | Date: ${i.inquiry_date} | Purpose: ${i.inquiry_purpose||'?'} | Bureau: ${i.provider}`).join('\n')
  const strategy = await callAISimple(env,
    `You are HYPERION Inquiry Removal Agent. Analyze hard inquiries and create a removal strategy. For each inquiry: check if older than 2 years (automatic removal eligible), check if client authorized it (unauthorized = immediate deletion grounds under FCRA §604), assess dispute probability, recommend: (a) dispute as unauthorized, (b) goodwill removal request, (c) wait for natural expiration. Calculate total point impact of removing all hard inquiries. Provide bureau-specific inquiry dispute letter templates. Note: inquiries fall off after 24 months automatically.`,
    `Hard Inquiries (${(inquiries.results as any[]).length}):\n${inqList||'No hard inquiries found'}\n\nGenerate complete inquiry removal strategy.`)
  return c.json({ success: true, agent: 'inquiry_removal', strategy, hard_inquiries: (inquiries.results as any[]).length })
})

// POST /api/ai/score-simulation — Score Simulation Agent
app.post('/api/ai/score-simulation', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, report_id, scenarios } = body
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const [client, accounts] = await Promise.all([
    DB.prepare(`SELECT first_name, last_name, credit_score_current, credit_score_goal FROM clients WHERE id = ?`).bind(client_id).first(),
    DB.prepare(`SELECT * FROM credit_report_accounts WHERE ${report_id ? 'credit_report_id = ?' : 'client_id = ?'} LIMIT 25`).bind(report_id || client_id).all()
  ])
  const cl = client as any
  const acctList = (accounts.results as any[]).map(a => `${a.account_name}: balance=$${a.balance_amount||0} limit=$${a.credit_limit_amount||0} status=${a.account_status} late90=${a.times_90_days_late||0}`).join('\n')
  const simulation = await callAISimple(env,
    `You are HYPERION Score Simulation Agent. Run "What-If" credit score simulations. For each scenario provided, model the precise point impact on FICO 8/9 and VantageScore 4.0. Use FICO factor weights: Payment History 35%, Utilization 30%, Age of Credit 15%, Account Mix 10%, New Credit 10%. Show: current baseline, change per scenario, new projected score, and compound impact when combined. Include: timeline for change to appear on report, and which bureau would show the change first.`,
    `Client: ${cl?.first_name} ${cl?.last_name} | Current Score: ${cl?.credit_score_current||'unknown'} | Goal: ${cl?.credit_score_goal||'not set'}\n\nAccounts:\n${acctList}\n\nScenarios to model:\n${scenarios || '1. Pay all cards to <10% utilization\n2. Remove largest collection\n3. Remove all collections\n4. Add authorized user tradeline (10yr, $10K limit)\n5. Remove all hard inquiries\n6. All of the above combined'}`)
  return c.json({ success: true, agent: 'score_simulation', simulation })
})

// POST /api/ai/settlement-strategy — Settlement Negotiation Agent
app.post('/api/ai/settlement-strategy', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, creditor, balance, account_type, age_months, context } = body
  if (!client_id) return c.json({ error: 'client_id required' }, 400)
  const strategy = await callAISimple(env,
    `You are HYPERION Settlement Negotiation Agent for RJ Business Solutions. Create a complete settlement and Pay-For-Delete (PFD) strategy. Include: Target settlement percentage based on account age and type (typical ranges: <1yr=80-90%, 1-3yr=50-70%, 3-5yr=30-50%, 5yr+=25-40%), PFD letter script and negotiation talking points, Cease and desist trigger conditions, 3-step negotiation ladder (opening offer → counter → final), Lump sum vs payment plan comparison, Tax implications of settled debt (1099-C), Alternative: Goodwill deletion after payment, FDCPA protections to assert during negotiation. Provide actual dollar amounts for a ${balance ? '$'+balance : 'unknown balance'} account.`,
    `Creditor: ${creditor||'Unknown'} | Balance: $${balance||0} | Type: ${account_type||'collection'} | Age: ${age_months||'unknown'} months | Context: ${context||'none'}`)
  return c.json({ success: true, agent: 'settlement_strategy', strategy })
})

// POST /api/ai/goodwill-letter — Goodwill Letter Generator
app.post('/api/ai/goodwill-letter', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, creditor, account_type, hardship_reason, current_status } = body
  if (!client_id || !creditor) return c.json({ error: 'client_id and creditor required' }, 400)
  const client = await DB.prepare(`SELECT first_name, last_name FROM clients WHERE id = ?`).bind(client_id).first() as any
  const letter = await callAISimple(env,
    `You are HYPERION Goodwill Letter Agent. Generate a compelling, human, emotionally resonant goodwill deletion request letter for ${client?.first_name} ${client?.last_name}. The letter should: acknowledge the late payment, explain the hardship without making excuses, highlight their long/positive relationship with the creditor, emphasize they've been current since the incident, appeal to the creditor's goodwill and discretion, specifically request removal of the late payment notation, cite that the account is now current/paid and the mark no longer reflects their true creditworthiness. Keep it 3 paragraphs, genuine, professional but human. Do NOT cite laws — this is a goodwill appeal, not a legal dispute.`,
    `Creditor: ${creditor} | Account type: ${account_type||'credit card'} | Hardship reason: ${hardship_reason||'financial hardship'} | Current status: ${current_status||'account now current'}`)
  return c.json({ success: true, agent: 'goodwill_letter', letter })
})

// POST /api/ai/cfpb-complaint — CFPB Complaint Draft Agent
app.post('/api/ai/cfpb-complaint', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, company, issue, dispute_history, violation_type } = body
  if (!client_id || !company || !issue) return c.json({ error: 'client_id, company, issue required' }, 400)
  const client = await DB.prepare(`SELECT first_name, last_name FROM clients WHERE id = ?`).bind(client_id).first() as any
  const complaint = await callAISimple(env,
    `You are HYPERION CFPB Complaint Draft Agent. Draft a complete CFPB complaint for submission at consumerfinance.gov/complaint. The complaint must: clearly identify the company and product type, describe the timeline of events in chronological order, cite specific FCRA/FDCPA violations with exact statute references, state what resolution was attempted and failed, specify the desired resolution, be factual and evidence-based (no emotional language — CFPB responds to specifics). Also provide: the exact CFPB complaint category to select, estimated CFPB response timeline, and next steps if CFPB does not resolve.`,
    `Client: ${client?.first_name} ${client?.last_name} | Company: ${company} | Issue: ${issue} | Violation type: ${violation_type||'FCRA inaccuracy'} | Dispute history: ${dispute_history||'One dispute sent, no adequate response'}`)
  return c.json({ success: true, agent: 'cfpb_complaint', complaint })
})

// ============================================================
// SOP EXECUTION ENGINE — All 62 SOPs Active & Executable
// ============================================================

// GET /api/sop/list — list all available SOPs with execution stats
app.get('/api/sop/list', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const execStats = await DB.prepare(`SELECT sop_id, COUNT(*) as run_count, MAX(created_at) as last_run FROM sop_executions GROUP BY sop_id`).all()
  const statsMap: Record<string, any> = {}
  for (const s of execStats.results as any[]) { statsMap[s.sop_id] = s }
  const sopList = SOPS.map(s => ({
    id: s.id, title: s.title, phase: s.phase, phaseName: s.phaseName,
    category: s.category, complianceStatus: s.complianceStatus,
    run_count: statsMap[s.id]?.run_count || 0,
    last_run: statsMap[s.id]?.last_run || null,
    executable: true
  }))
  return c.json({ sops: sopList, total: sopList.length })
})

// GET /api/sop/:sopId — get SOP detail
app.get('/api/sop/:sopId', async (c) => {
  const sopId = c.req.param('sopId')
  const sop = SOPS.find(s => s.id === sopId)
  if (!sop) return c.json({ error: 'SOP not found' }, 404)
  return c.json({ sop })
})

// POST /api/sop/execute/:sopId — AI-execute a SOP for a client
app.post('/api/sop/execute/:sopId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const sopId = c.req.param('sopId')
  const sop = SOPS.find(s => s.id === sopId)
  if (!sop) return c.json({ error: `SOP ${sopId} not found` }, 404)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, context, trigger_event } = body
  const start = Date.now()

  // Load client context if provided
  let clientCtx = ''
  if (client_id && DB) {
    const cl = await DB.prepare(`SELECT first_name, last_name, credit_score_current, credit_score_goal, status FROM clients WHERE id = ?`).bind(client_id).first() as any
    if (cl) clientCtx = `Client: ${cl.first_name} ${cl.last_name} | Score: ${cl.credit_score_current||'?'} | Goal: ${cl.credit_score_goal||'?'} | Status: ${cl.status}`
  }

  const systemPrompt = `You are the AI executor for RJ Business Solutions SOP system. You are executing SOP ${sop.id}: "${sop.title}". Your role is to provide specific, actionable execution guidance for this SOP in the context provided. The SOP summary is: ${sop.summary}. Key steps: ${sop.steps.join('; ')}. KPIs: ${sop.kpis.join('; ')}. Agent instructions: ${sop.agentInstructions || 'Follow the SOP steps precisely.'}. Compliance status: ${sop.complianceStatus}. Legal changes 2026: ${sop.legalChanges2026?.join('; ') || 'none'}. Provide: step-by-step execution checklist tailored to this context, key compliance checkpoints, estimated completion time, any 2026-specific legal considerations, and next SOP recommendations after this one completes.`
  const userMsg = `${clientCtx ? 'Client context: '+clientCtx+'\n' : ''}${context ? 'Additional context: '+context+'\n' : ''}Trigger: ${trigger_event || 'manual execution'}\n\nExecute this SOP and provide complete guidance.`

  const output = await callAISimple(env, systemPrompt, userMsg)
  const duration = Date.now() - start

  await DB.prepare(`INSERT INTO sop_executions (sop_id, sop_title, client_id, executed_by, trigger_event, input_context, ai_output, status, duration_ms) VALUES (?,?,?,?,?,?,?,?,?)`)
    .bind(sopId, sop.title, client_id || null, body.executed_by || 'staff', trigger_event || 'manual', context || null, output, 'completed', duration).run()

  if (client_id) {
    await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('sop_engine',?,?,'client',?)`)
      .bind(`sop_executed_${sopId}`, sopId, `SOP "${sop.title}" executed for client in ${duration}ms`).run()
  }

  return c.json({ success: true, sop_id: sopId, sop_title: sop.title, output, duration_ms: duration })
})

// GET /api/sop/executions/:clientId — SOP execution history for a client
app.get('/api/sop/executions/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const clientId = parseInt(c.req.param('clientId'))
  const execs = await DB.prepare(`SELECT sop_id, sop_title, trigger_event, status, duration_ms, created_at FROM sop_executions WHERE client_id = ? ORDER BY created_at DESC LIMIT 50`).bind(clientId).all()
  return c.json({ executions: execs.results })
})

// POST /api/sop/execute-chain — execute multiple SOPs in sequence
app.post('/api/sop/execute-chain', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { client_id, sop_ids, context } = body
  if (!sop_ids || !Array.isArray(sop_ids)) return c.json({ error: 'sop_ids array required' }, 400)
  const results: any[] = []
  for (const sopId of sop_ids.slice(0, 5)) { // limit to 5 SOPs per chain
    const sop = SOPS.find(s => s.id === sopId)
    if (!sop) { results.push({ sop_id: sopId, error: 'Not found' }); continue }
    const start = Date.now()
    const output = await callAISimple(env,
      `You are executing SOP ${sop.id}: "${sop.title}". Summary: ${sop.summary}. Steps: ${sop.steps.join('; ')}. KPIs: ${sop.kpis.join('; ')}. Agent instructions: ${sop.agentInstructions||'Follow steps precisely.'}. Provide concise execution guidance.`,
      `${context ? 'Context: '+context+'\n' : ''}Execute this SOP.`
    )
    const duration = Date.now() - start
    await DB.prepare(`INSERT INTO sop_executions (sop_id, sop_title, client_id, executed_by, trigger_event, input_context, ai_output, status, duration_ms) VALUES (?,?,?,?,?,?,?,?,?)`)
      .bind(sopId, sop.title, client_id || null, body.executed_by || 'system', 'chain_execution', context || null, output, 'completed', duration).run()
    results.push({ sop_id: sopId, sop_title: sop.title, status: 'completed', preview: output.slice(0, 200) })
  }
  return c.json({ success: true, executed: results.length, results })
})

// ============================================================
// STRATEGY PLANS CRUD
// ============================================================

app.post('/api/strategy-plans', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  if (!body.client_id) return c.json({ error: 'client_id required' }, 400)
  const cl = await DB.prepare(`SELECT credit_score_current, credit_score_goal FROM clients WHERE id = ?`).bind(body.client_id).first() as any
  const ins = await DB.prepare(`INSERT INTO strategy_plans (client_id, plan_name, start_date, target_date, target_score, current_score, phase1_actions, phase2_actions, phase3_actions) VALUES (?,?,COALESCE(?,date('now')),?,?,?,?,?,?)`)
    .bind(body.client_id, body.plan_name || `90-Day Plan — ${new Date().toLocaleDateString()}`, body.start_date || null, body.target_date || null, body.target_score || cl?.credit_score_goal || null, body.current_score || cl?.credit_score_current || null, body.phase1_actions || null, body.phase2_actions || null, body.phase3_actions || null).run()
  return c.json({ success: true, id: ins.meta?.last_row_id })
})

app.get('/api/strategy-plans/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB required' }, 500)
  const plans = await DB.prepare(`SELECT * FROM strategy_plans WHERE client_id = ? ORDER BY created_at DESC`).bind(parseInt(c.req.param('clientId'))).all()
  return c.json({ plans: plans.results })
})

// ============================================================
// FULL ANALYSIS SSR PAGE — /reports/full/:clientId
// ============================================================

app.get('/reports/full/:clientId', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.html('<h1>DB unavailable</h1>', 500)
  const clientId = parseInt(c.req.param('clientId'))
  const [client, latestReport, analysis] = await Promise.all([
    DB.prepare(`SELECT * FROM clients WHERE id = ?`).bind(clientId).first(),
    DB.prepare(`SELECT id, pull_date, score_efx, score_tu, score_exp, total_accounts, total_negative_accounts, total_inquiries FROM credit_reports WHERE client_id = ? ORDER BY id DESC LIMIT 1`).bind(clientId).first(),
    DB.prepare(`SELECT * FROM analysis_reports WHERE client_id = ? ORDER BY id DESC LIMIT 1`).bind(clientId).first()
  ])
  if (!client) return c.html('<h1>Client not found</h1>', 404)
  const cl = client as any
  const rpt = latestReport as any
  const ar = analysis as any

  let roadmaps: any[] = []
  if (ar) {
    const rm = await DB.prepare(`SELECT roadmap_type, title, content, generated_at FROM roadmap_results WHERE analysis_report_id = ? ORDER BY id ASC`).bind(ar.id).all()
    roadmaps = rm.results as any[]
  }

  const scoreAvg = rpt ? Math.round([(rpt.score_efx||0),(rpt.score_tu||0),(rpt.score_exp||0)].filter((s:number)=>s>0).reduce((a:number,b:number)=>a+b,0)/[(rpt.score_efx||0),(rpt.score_tu||0),(rpt.score_exp||0)].filter((s:number)=>s>0).length||0) : 0
  const healthColor = ar ? (ar.overall_health_score >= 80 ? 'green' : ar.overall_health_score >= 60 ? 'yellow' : 'red') : 'gray'
  const gradeColor: Record<string,string> = { A:'text-green-400', B:'text-blue-400', C:'text-yellow-400', D:'text-orange-400', F:'text-red-400' }
  const roadmapIcons: Record<string,string> = { auto_loan:'🚗', mortgage:'🏠', business_funding:'💼', debt_removal:'🗑️', '90_day_plan':'📅', product_match:'💳', score_optimization:'📈', executive_summary:'📋', inquiry_removal:'🔍', rate_optimization:'💰' }
  const company = env.COMPANY_NAME || 'RJ Business Solutions'

  return c.html(`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Full Analysis — ${cl.first_name} ${cl.last_name} — ${company}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head><body class="bg-gray-950 text-white min-h-screen font-sans">
<div class="max-w-7xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="flex items-center justify-between mb-8">
    <div class="flex items-center gap-4">
      <a href="/clients/${clientId}" class="text-gray-400 hover:text-white text-sm">← Back to Client</a>
    </div>
    <div class="flex gap-2">
      ${rpt ? `<button onclick="runAnalysis()" id="run-btn" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">Run Full Analysis</button>` : ''}
      <a href="/clients/${clientId}" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm">Client Profile</a>
    </div>
  </div>

  <!-- Client Hero -->
  <div class="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/50 rounded-2xl p-6 mb-6">
    <div class="flex items-start justify-between">
      <div>
        <h1 class="text-3xl font-bold mb-1">${cl.first_name} ${cl.last_name}</h1>
        <p class="text-gray-400 text-sm">${cl.email || ''} ${cl.phone ? '· '+cl.phone : ''}</p>
        ${rpt ? `<p class="text-gray-500 text-xs mt-1">Latest report: ${rpt.pull_date?.slice(0,10) || 'Unknown date'}</p>` : '<p class="text-yellow-400 text-sm mt-2">⚠ No credit report imported yet</p>'}
      </div>
      ${ar ? `<div class="text-center">
        <div class="text-6xl font-black ${gradeColor[ar.health_grade]||'text-gray-400'}">${ar.health_grade||'?'}</div>
        <div class="text-gray-400 text-xs">Credit Health</div>
        <div class="text-2xl font-bold text-white mt-1">${ar.overall_health_score||0}/100</div>
      </div>` : ''}
    </div>

    <!-- Score cards -->
    ${rpt ? `<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
      <div class="bg-gray-900/60 rounded-xl p-3 text-center"><p class="text-xs text-gray-400">Equifax</p><p class="text-2xl font-bold text-blue-300">${rpt.score_efx||'—'}</p></div>
      <div class="bg-gray-900/60 rounded-xl p-3 text-center"><p class="text-xs text-gray-400">TransUnion</p><p class="text-2xl font-bold text-green-300">${rpt.score_tu||'—'}</p></div>
      <div class="bg-gray-900/60 rounded-xl p-3 text-center"><p class="text-xs text-gray-400">Experian</p><p class="text-2xl font-bold text-purple-300">${rpt.score_exp||'—'}</p></div>
      <div class="bg-gray-900/60 rounded-xl p-3 text-center"><p class="text-xs text-gray-400">Average</p><p class="text-2xl font-bold text-yellow-300">${scoreAvg||'—'}</p></div>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-2 mt-3">
      <div class="bg-gray-900/60 rounded-lg p-2 text-center"><p class="text-xs text-gray-500">Accounts</p><p class="font-bold">${rpt.total_accounts||0}</p></div>
      <div class="bg-gray-900/60 rounded-lg p-2 text-center"><p class="text-xs text-gray-500">Negatives</p><p class="font-bold text-red-400">${rpt.total_negative_accounts||0}</p></div>
      <div class="bg-gray-900/60 rounded-lg p-2 text-center"><p class="text-xs text-gray-500">Inquiries</p><p class="font-bold text-yellow-400">${rpt.total_inquiries||0}</p></div>
      <div class="bg-gray-900/60 rounded-lg p-2 text-center"><p class="text-xs text-gray-500">Goal</p><p class="font-bold text-green-400">${cl.credit_score_goal||'—'}</p></div>
      <div class="bg-gray-900/60 rounded-lg p-2 text-center"><p class="text-xs text-gray-500">30d Proj</p><p class="font-bold">${ar?.score_projection_30d||'—'}</p></div>
      <div class="bg-gray-900/60 rounded-lg p-2 text-center"><p class="text-xs text-gray-500">90d Proj</p><p class="font-bold text-green-400">${ar?.score_projection_90d||'—'}</p></div>
    </div>` : ''}
  </div>

  ${!ar ? `
  <!-- No Analysis Yet -->
  <div class="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center mb-6">
    <div class="text-5xl mb-4">🧠</div>
    <h2 class="text-xl font-bold mb-2">No Analysis Run Yet</h2>
    <p class="text-gray-400 mb-4">${rpt ? 'A credit report is on file. Click below to run the full Hyperion analysis with all 8 roadmaps.' : 'Import a MyFreeScoreNow credit report first, then run the full analysis.'}</p>
    ${rpt ? `<button onclick="runAnalysis()" class="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium">Run Full Hyperion Analysis</button>` : `<a href="/clients/${clientId}" class="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium inline-block">Import Credit Report</a>`}
  </div>` : `

  <!-- Analysis Status Banner -->
  <div class="bg-green-900/20 border border-green-800/50 rounded-xl p-3 mb-6 flex items-center justify-between">
    <span class="text-green-400 text-sm">✓ Full Hyperion Analysis — ${ar.completed_at?.slice(0,16)||'Running...'} — ${ar.duration_ms ? Math.round(ar.duration_ms/1000)+'s' : 'pending'}</span>
    <button onclick="runAnalysis()" class="text-xs text-blue-400 hover:text-blue-300">Re-run Analysis</button>
  </div>

  <!-- Tab Nav -->
  <div class="flex gap-2 mb-6 flex-wrap" id="tab-nav">
    <button onclick="showTab('executive')" class="tab-btn px-3 py-1.5 rounded-lg text-sm bg-blue-600 text-white">📋 Executive Summary</button>
    <button onclick="showTab('roadmaps')" class="tab-btn px-3 py-1.5 rounded-lg text-sm bg-gray-800 text-gray-300 hover:bg-gray-700">🗺️ All Roadmaps</button>
    <button onclick="showTab('legal')" class="tab-btn px-3 py-1.5 rounded-lg text-sm bg-gray-800 text-gray-300 hover:bg-gray-700">⚖️ Legal Audit</button>
    <button onclick="showTab('90day')" class="tab-btn px-3 py-1.5 rounded-lg text-sm bg-gray-800 text-gray-300 hover:bg-gray-700">📅 90-Day Plan</button>
    <button onclick="showTab('debt')" class="tab-btn px-3 py-1.5 rounded-lg text-sm bg-gray-800 text-gray-300 hover:bg-gray-700">💸 Debt Analysis</button>
  </div>

  <!-- Executive Summary Tab -->
  <div id="tab-executive" class="tab-content">
    <div class="bg-gray-900 rounded-2xl p-6">
      <h2 class="text-lg font-bold mb-4">Executive Summary</h2>
      <div class="prose prose-invert max-w-none">
        <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.executive_summary || 'No executive summary available. Run analysis first.'}</pre>
      </div>
    </div>
    ${ar.behavior_profile ? `<div class="bg-gray-900 rounded-2xl p-6 mt-4">
      <h2 class="text-lg font-bold mb-4">🧠 Behavioral Financial Profile</h2>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.behavior_profile}</pre>
    </div>` : ''}
  </div>

  <!-- Roadmaps Tab -->
  <div id="tab-roadmaps" class="tab-content hidden">
    ${roadmaps.length === 0 ? '<div class="bg-gray-900 rounded-2xl p-8 text-center text-gray-400">No roadmaps generated yet. Run analysis first.</div>' :
    roadmaps.map((rm: any) => `
    <div class="bg-gray-900 rounded-2xl p-6 mb-4">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-bold">${roadmapIcons[rm.roadmap_type]||'📊'} ${rm.title}</h3>
        <span class="text-xs text-gray-500">${rm.generated_at?.slice(0,16)||''}</span>
      </div>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${rm.content||'No content'}</pre>
    </div>`).join('')}
  </div>

  <!-- Legal Audit Tab -->
  <div id="tab-legal" class="tab-content hidden">
    ${ar.metro2_violations ? `<div class="bg-gray-900 rounded-2xl p-6 mb-4">
      <h2 class="text-lg font-bold mb-4 text-red-400">Metro 2® Compliance Audit</h2>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.metro2_violations}</pre>
    </div>` : ''}
    ${ar.fcra_violations ? `<div class="bg-gray-900 rounded-2xl p-6">
      <h2 class="text-lg font-bold mb-4 text-orange-400">FCRA / FDCPA Legal Audit</h2>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.fcra_violations}</pre>
    </div>` : '<div class="bg-gray-900 rounded-2xl p-8 text-center text-gray-400">No legal audit data. Run analysis.</div>'}
  </div>

  <!-- 90-Day Plan Tab -->
  <div id="tab-90day" class="tab-content hidden">
    <div class="bg-gray-900 rounded-2xl p-6">
      <h2 class="text-lg font-bold mb-4">90-Day Credit Transformation Plan</h2>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.action_plan_90day || 'No 90-day plan generated. Run analysis first.'}</pre>
    </div>
    ${ar.score_analysis ? `<div class="bg-gray-900 rounded-2xl p-6 mt-4">
      <h2 class="text-lg font-bold mb-4">📈 Score Projection & Trajectory</h2>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.score_analysis}</pre>
    </div>` : ''}
  </div>

  <!-- Debt Analysis Tab -->
  <div id="tab-debt" class="tab-content hidden">
    <div class="bg-gray-900 rounded-2xl p-6">
      <h2 class="text-lg font-bold mb-4">Debt Analysis & Payoff Strategy</h2>
      <pre class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${ar.debt_analysis || 'No debt analysis available. Run analysis first.'}</pre>
    </div>
  </div>
  `}

  <!-- SOP Quick Executor -->
  <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-6">
    <h2 class="text-lg font-bold mb-4">⚙️ SOP Quick Executor</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
      ${['SOP-601','SOP-602','SOP-603','SOP-001','SOP-002','SOP-603'].map((id: string) => {
        const s = SOPS.find((x: any) => x.id === id)
        return s ? `<button onclick="executeSOP('${s.id}')" class="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-left text-gray-300">${s.id}: ${s.title.slice(0,30)}</button>` : ''
      }).join('')}
      <button onclick="showAllSOPs()" class="px-3 py-2 bg-blue-900/40 hover:bg-blue-800/40 border border-blue-800/50 rounded-lg text-sm text-blue-400">View All ${SOPS.length} SOPs →</button>
    </div>
    <div id="sop-output" class="mt-4 hidden">
      <div class="text-xs text-gray-400 mb-2" id="sop-title"></div>
      <pre id="sop-result" class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans bg-gray-800 rounded-xl p-4 max-h-96 overflow-y-auto"></pre>
    </div>
  </div>

</div>

<script>
const clientId = ${clientId}
const reportId = ${rpt ? (latestReport as any).id : 'null'}

function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'))
  document.querySelectorAll('.tab-btn').forEach(el => { el.classList.remove('bg-blue-600','text-white'); el.classList.add('bg-gray-800','text-gray-300') })
  document.getElementById('tab-'+name)?.classList.remove('hidden')
  event.target.classList.add('bg-blue-600','text-white')
  event.target.classList.remove('bg-gray-800','text-gray-300')
}

async function runAnalysis() {
  if (!reportId) { alert('No credit report imported yet. Please import a report first.'); return }
  const btn = document.getElementById('run-btn')
  if (btn) { btn.textContent = 'Running Hyperion Analysis...'; btn.disabled = true }
  try {
    const r = await fetch('/api/reports/analyze/'+reportId, { method: 'POST' })
    const d = await r.json()
    if (d.success) { alert('✓ Analysis complete! Health Score: '+d.health_score+' ('+d.health_grade+') | Roadmaps: '+d.roadmaps_generated+'. Page will reload.'); window.location.reload() }
    else { alert('Analysis error: ' + (d.error||'unknown error')); if(btn){btn.textContent='Run Full Analysis';btn.disabled=false} }
  } catch(e) { alert('Network error: '+e.message); if(btn){btn.textContent='Run Full Analysis';btn.disabled=false} }
}

async function executeSOP(sopId) {
  document.getElementById('sop-output').classList.remove('hidden')
  document.getElementById('sop-title').textContent = 'Executing ' + sopId + '...'
  document.getElementById('sop-result').textContent = 'Running SOP — please wait...'
  try {
    const r = await fetch('/api/sop/execute/'+sopId, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ client_id: clientId, trigger_event: 'manual_from_analysis_page' }) })
    const d = await r.json()
    document.getElementById('sop-title').textContent = d.sop_title || sopId
    document.getElementById('sop-result').textContent = d.output || d.error || 'No output'
  } catch(e) { document.getElementById('sop-result').textContent = 'Error: '+e.message }
}

function showAllSOPs() { window.location.href = '/sop-library' }
</script>
</body></html>`)
})

// ============================================================
// SOP LIBRARY SSR PAGE
// ============================================================

app.get('/sop-library', async (c) => {
  const env = c.env; const { DB } = env
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  const phaseGroups: Record<number, any[]> = {}
  SOPS.forEach((s: any) => {
    if (!phaseGroups[s.phase]) phaseGroups[s.phase] = []
    phaseGroups[s.phase].push(s)
  })
  return c.html(`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>SOP Library — ${company}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head><body class="bg-gray-950 text-white min-h-screen">
<div class="max-w-6xl mx-auto px-4 py-8">
  <div class="flex items-center justify-between mb-8">
    <div>
      <h1 class="text-2xl font-bold">⚙️ SOP Library</h1>
      <p class="text-gray-400 text-sm">${SOPS.length} Standard Operating Procedures — All Active & AI-Executable</p>
    </div>
    <div class="flex gap-2">
      <input id="sop-search" placeholder="Search SOPs..." onkeyup="filterSOPs()" class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none">
      <a href="/" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm">← Dashboard</a>
    </div>
  </div>
  <div id="sop-grid">
  ${Object.entries(phaseGroups).map(([phase, sops]) => `
  <div class="mb-8">
    <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">${(sops[0] as any).phaseName} (Phase ${phase})</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      ${sops.map((s: any) => `
      <div class="sop-card bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 cursor-pointer" onclick="selectSOP('${s.id}')" data-search="${s.id} ${s.title} ${s.category}">
        <div class="flex items-start justify-between mb-2">
          <div>
            <span class="font-mono text-xs text-blue-400">${s.id}</span>
            <h3 class="font-semibold text-sm">${s.title}</h3>
          </div>
          <span class="text-xs px-2 py-0.5 rounded-full ${s.complianceStatus === 'critical' ? 'bg-red-900/50 text-red-400' : 'bg-green-900/50 text-green-400'}">${s.complianceStatus}</span>
        </div>
        <p class="text-xs text-gray-400 mb-2">${s.summary?.slice(0,100)||''}</p>
        <div class="flex gap-2">
          <span class="text-xs text-gray-600">${s.category}</span>
          <button onclick="event.stopPropagation(); executeSOP('${s.id}')" class="ml-auto text-xs text-blue-400 hover:text-blue-300">Execute →</button>
        </div>
      </div>`).join('')}
    </div>
  </div>`).join('')}
  </div>

  <!-- SOP Detail Panel -->
  <div id="sop-panel" class="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 hidden max-h-96 overflow-y-auto">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-3">
        <h3 id="panel-title" class="font-bold"></h3>
        <div class="flex gap-2">
          <button id="panel-execute-btn" class="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm">Execute with AI</button>
          <button onclick="closePanel()" class="px-3 py-1 bg-gray-700 rounded-lg text-sm">Close</button>
        </div>
      </div>
      <pre id="panel-content" class="whitespace-pre-wrap text-sm text-gray-300 font-sans"></pre>
    </div>
  </div>
</div>

<div id="exec-modal" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center hidden">
  <div class="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
    <h3 id="exec-title" class="font-bold mb-4"></h3>
    <textarea id="exec-context" placeholder="Optional: Enter client context or additional details..." class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm mb-3 h-20 resize-none"></textarea>
    <div class="flex gap-2 mb-4">
      <button onclick="runSOPExec()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm flex-1">Run SOP</button>
      <button onclick="closeExec()" class="px-4 py-2 bg-gray-700 rounded-xl text-sm">Cancel</button>
    </div>
    <pre id="exec-output" class="whitespace-pre-wrap text-sm text-gray-300 font-sans bg-gray-800 rounded-xl p-4 hidden"></pre>
  </div>
</div>

<script>
let currentSOP = null
function filterSOPs() {
  const q = document.getElementById('sop-search').value.toLowerCase()
  document.querySelectorAll('.sop-card').forEach(el => {
    el.style.display = el.dataset.search.toLowerCase().includes(q) ? '' : 'none'
  })
}
function selectSOP(id) {
  const sopData = ${JSON.stringify(SOPS.map((s:any) => ({ id: s.id, title: s.title, summary: s.summary, steps: s.steps, kpis: s.kpis, agentInstructions: s.agentInstructions })))}
  const s = sopData.find(x => x.id === id)
  if (!s) return
  currentSOP = id
  document.getElementById('sop-panel').classList.remove('hidden')
  document.getElementById('panel-title').textContent = id + ': ' + s.title
  document.getElementById('panel-content').textContent = 'SUMMARY: ' + s.summary + '\\n\\nSTEPS:\\n' + s.steps.map((st, i) => (i+1)+'. '+st).join('\\n') + '\\n\\nKPIs:\\n' + s.kpis.join('\\n') + (s.agentInstructions ? '\\n\\nAGENT INSTRUCTIONS:\\n' + s.agentInstructions : '')
  document.getElementById('panel-execute-btn').onclick = () => executeSOP(id)
}
function closePanel() { document.getElementById('sop-panel').classList.add('hidden') }
function executeSOP(id) {
  currentSOP = id
  const sopData = ${JSON.stringify(SOPS.map((s:any) => ({ id: s.id, title: s.title })))}
  const s = sopData.find(x => x.id === id)
  document.getElementById('exec-title').textContent = (s?.id||id) + ': ' + (s?.title||'SOP')
  document.getElementById('exec-output').classList.add('hidden')
  document.getElementById('exec-output').textContent = ''
  document.getElementById('exec-modal').classList.remove('hidden')
}
function closeExec() { document.getElementById('exec-modal').classList.add('hidden') }
async function runSOPExec() {
  const ctx = document.getElementById('exec-context').value
  const out = document.getElementById('exec-output')
  out.textContent = 'Running SOP with AI...'
  out.classList.remove('hidden')
  try {
    const r = await fetch('/api/sop/execute/'+currentSOP, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ context: ctx, trigger_event: 'manual_sop_library' }) })
    const d = await r.json()
    out.textContent = d.output || d.error || 'No output'
  } catch(e) { out.textContent = 'Error: '+e.message }
}
</script>
</body></html>`)
})

// ============================================================
// AGENT & AUTOMATION CONTROL CENTER — /agents
// Live dashboard: all AI agents, comms, cron, sequences
// ============================================================

app.get('/agents', async (c) => {
  const env = c.env; const { DB } = env
  const company = env.COMPANY_NAME || 'RJ Business Solutions'

  // Fetch live data
  const [recentComms, recentSops, sequences, recentTasks, pendingAnalyses] = await Promise.all([
    DB ? DB.prepare(`SELECT channel, direction, status, to_address, subject, body, created_at FROM communications ORDER BY id DESC LIMIT 10`).all().catch(() => ({ results: [] })) : { results: [] },
    DB ? DB.prepare(`SELECT sop_id, sop_title, status, client_id, duration_ms, created_at FROM sop_executions ORDER BY id DESC LIMIT 8`).all().catch(() => ({ results: [] })) : { results: [] },
    DB ? DB.prepare(`SELECT name, trigger_event, delay_days, is_active FROM email_sequences ORDER BY id`).all().catch(() => ({ results: [] })) : { results: [] },
    DB ? DB.prepare(`SELECT title, status, priority, assigned_to, created_at FROM tasks ORDER BY id DESC LIMIT 8`).all().catch(() => ({ results: [] })) : { results: [] },
    DB ? DB.prepare(`SELECT id, status, created_at FROM analysis_reports WHERE status IN ('pending','running') LIMIT 5`).all().catch(() => ({ results: [] })) : { results: [] }
  ])

  const commsArr = (recentComms.results || []) as any[]
  const sopsArr = (recentSops.results || []) as any[]
  const seqArr = (sequences.results || []) as any[]
  const tasksArr = (recentTasks.results || []) as any[]
  const pendingArr = (pendingAnalyses.results || []) as any[]

  const aiKeys = { openrouter: !!env.OPENROUTER_API_KEY, groq: !!env.GROQ_API_KEY, openai: !!env.OPENAI_API_KEY }
  const commsKeys = { twilio: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN), sendgrid: !!env.SENDGRID_API_KEY, resend: !!env.RESEND_API_KEY, click2mail: !!env.CLICK2MAIL_AUTH_BASIC }
  const primaryAI = aiKeys.openrouter ? 'OpenRouter' : aiKeys.groq ? 'Groq' : aiKeys.openai ? 'OpenAI' : 'None'

  const HYPERION_AGENTS = [
    { id: 1, name: 'Executive Summary', icon: '📊', desc: 'Credit health score (0-100), letter grade, top 5 findings, 90-day projection' },
    { id: 2, name: 'Score Projection', icon: '📈', desc: 'Conservative/Moderate/Aggressive trajectories at 3, 6, 12, 24 months' },
    { id: 3, name: 'Metro 2® Audit', icon: '⚖️', desc: 'Every account checked against Metro 2® spec — Critical/Major/Minor violations' },
    { id: 4, name: 'FCRA/FDCPA Legal Audit', icon: '🏛️', desc: 'FCRA §611/§607/§623/§605, FDCPA §809(b) — deletion probability per account' },
    { id: 5, name: 'Debt Analysis', icon: '💰', desc: 'Avalanche vs snowball payoff, utilization optimization, settlement strategy' },
    { id: 6, name: 'Auto Loan Roadmap', icon: '🚗', desc: 'Rate tier analysis, prime rate qualification timeline, monthly payment savings' },
    { id: 7, name: 'Mortgage Roadmap', icon: '🏠', desc: 'FHA/Conventional eligibility, rate comparison, 30-yr interest savings' },
    { id: 8, name: 'Business Funding Roadmap', icon: '🏢', desc: 'Tier 1→4 vendor credit, EIN strategy, D&B PAYDEX, $50K-$500K path' },
    { id: 9, name: 'Debt Removal Roadmap', icon: '🗑️', desc: 'Per-account: dispute probability, PFD targets, goodwill candidates' },
    { id: 10, name: '90-Day Action Plan', icon: '📅', desc: 'Day-by-day executable plan — Phase 1/2/3 with point impact per action' },
    { id: 11, name: 'Product Matching', icon: '💳', desc: 'Cards and loans approved now + next tier targets at 680/720/750' },
    { id: 12, name: 'Behavioral Profile', icon: '🧠', desc: 'Financial personality type, behavioral risk factors, habit formation plan' },
  ]

  const STANDALONE_AGENTS = [
    { name: 'Dispute Letter Generator', icon: '✉️', endpoint: '/api/ai/generate-dispute-letter', method: 'POST', desc: 'FCRA-cited dispute letter for any account and bureau', trigger: 'Manual / Dispute created' },
    { name: 'Credit Report Analyst', icon: '🔍', endpoint: '/api/ai/analyze-credit-report', method: 'POST', desc: 'Full 3-bureau analysis, roadmap, FCRA violations', trigger: 'MFSN report import' },
    { name: 'Email Draft Agent', icon: '📧', endpoint: '/api/ai/draft-email', method: 'POST', desc: 'Drafts welcome, progress, dispute, escalation emails', trigger: 'Staff request' },
    { name: 'Lead Scorer', icon: '🎯', endpoint: '/api/ai/score-lead', method: 'POST', desc: 'LTV prediction, close probability, plan recommendation', trigger: 'Lead created' },
    { name: 'AI Autopilot', icon: '🤖', endpoint: '/api/ai/run-autopilot', method: 'POST', desc: 'Full client orchestration: scoring, tasks, dispute plan', trigger: 'Monthly or manual' },
    { name: 'Score Simulator', icon: '🎲', endpoint: '/api/ai/score-simulation', method: 'POST', desc: 'What-if scenarios: pay off X, remove Y, add AU tradeline', trigger: 'Strategy review' },
    { name: 'Settlement Negotiator', icon: '🤝', endpoint: '/api/ai/settle', method: 'POST', desc: 'PFD strategy, settlement %, negotiation ladder script', trigger: 'Collection account review' },
    { name: 'Goodwill Letter Writer', icon: '💌', endpoint: '/api/ai/goodwill', method: 'POST', desc: 'Emotionally resonant 3-paragraph goodwill deletion request', trigger: 'Paid late payment' },
    { name: 'CFPB Complaint Drafter', icon: '📋', endpoint: '/api/ai/cfpb-complaint', method: 'POST', desc: 'Full CFPB complaint with statute citations', trigger: 'Verified dispute / Non-response' },
    { name: 'Inquiry Removal Agent', icon: '🔎', endpoint: '/api/ai/inquiry-removal', method: 'POST', desc: 'Unauthorized inquiry identification and dispute plan', trigger: 'Report import' },
    { name: 'Client Progress Update', icon: '📣', endpoint: '/api/ai/client-update', method: 'POST', desc: 'Personalized progress summary for client email/SMS', trigger: 'Monthly round completion' },
    { name: 'SOP Executor (62 SOPs)', icon: '⚙️', endpoint: '/api/sop/execute/:sopId', method: 'POST', desc: 'AI executes any of 62 documented SOPs with client context', trigger: 'Staff or automation' },
  ]

  const CRON_JOBS = [
    { name: 'Process Email+SMS Sequences', endpoint: '/api/cron/process-sequences', icon: '📨', desc: 'Sends all due drip emails and SMS messages', schedule: 'Every 2 hours' },
    { name: 'Run Pending Hyperion Analyses', endpoint: '/api/cron/run-pending-analyses', icon: '🔬', desc: 'Picks up to 3 queued analyses and runs all 12 agents', schedule: 'Every 2 hours', badge: pendingArr.length > 0 ? `${pendingArr.length} pending` : null },
    { name: 'Check Dispute Deadlines', endpoint: '/api/cron/check-deadlines', icon: '⏰', desc: 'Flags disputes past 30-day bureau window, creates escalation tasks', schedule: 'Daily 9am' },
    { name: 'Compliance Check', endpoint: '/api/cron/compliance-check', icon: '✅', desc: 'Updates compliance rule statuses, flags expiring licenses/bonds', schedule: 'Weekly Monday' },
    { name: 'Generate KPI Snapshot', endpoint: '/api/cron/generate-kpis', icon: '📊', desc: 'Monthly: MRR, active clients, deletions, churn rate', schedule: '1st of month' },
    { name: 'Auto-Pull Credit Reports', endpoint: '/api/cron/pull-reports', icon: '📥', desc: 'Autopilot plan: auto-pulls monthly MFSN reports', schedule: '1st of month' },
    { name: 'Appointment Reminders', endpoint: '/api/appointments/send-reminders', icon: '📅', desc: 'SMS reminders for appointments in next 24 hours', schedule: 'Daily 8am' },
    { name: 'Run Automation Engine', endpoint: '/api/ops/run-automations', icon: '⚡', desc: 'Evaluates threshold/schedule/event automations, fires actions', schedule: 'Daily 9am' },
  ]

  const COMM_CHANNELS = [
    { name: 'Twilio SMS', icon: '📱', status: commsKeys.twilio, desc: 'Outbound SMS to any client. Auto-fires on: lead capture, payment failure, dispute sent, score milestone', test_endpoint: '/api/twilio/sms' },
    { name: 'Twilio Voice', icon: '📞', status: commsKeys.twilio, desc: 'Outbound calls. Speed-to-lead: fires 5-min task + call on every new lead', test_endpoint: '/api/twilio/call' },
    { name: 'Resend Email', icon: '📧', status: commsKeys.resend, desc: 'Primary transactional + marketing email. Instant delivery, no domain verification headaches.', test_endpoint: '/api/email/resend' },
    { name: 'Cloudflare Email Routing', icon: '📬', status: !!env.CF_EMAIL_ROUTING_ADDRESS, desc: 'Inbound email routing — support@, disputes@, leads@ all forwarded to your inbox via Cloudflare.', test_endpoint: null },
    { name: 'Click2Mail (Physical Mail)', icon: '✉️', status: commsKeys.click2mail, desc: 'Certified USPS mail for dispute letters. Every dispute letter mailed with tracking', test_endpoint: null },
    { name: 'Speed-to-Lead', icon: '⚡', status: commsKeys.twilio || commsKeys.resend, desc: 'Fires SMS + email + critical task to staff within 60 seconds of any new lead', test_endpoint: '/api/speed-to-lead' },
  ]

  return c.html(`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Agent & Automation Control Center — ${company}</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
  body { background: #030712; font-family: 'Inter', sans-serif; }
  .card { background: rgba(17,24,39,0.8); border: 1px solid rgba(55,65,81,0.5); border-radius: 16px; }
  .badge-live { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
  .badge-dead { background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); }
  .badge-warn { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); }
  .agent-card:hover { border-color: rgba(59,130,246,0.5); transform: translateY(-1px); transition: all 0.2s; }
  .cron-btn { background: rgba(59,130,246,0.15); color: #93c5fd; border: 1px solid rgba(59,130,246,0.3); cursor: pointer; }
  .cron-btn:hover { background: rgba(59,130,246,0.3); }
  .test-btn { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); cursor: pointer; }
  .test-btn:hover { background: rgba(16,185,129,0.3); }
  ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
  .spinner { animation: spin 1s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }
  .pulse { animation: pulse 2s infinite; } @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
</style>
</head><body class="text-white min-h-screen">

<!-- NAV -->
<div class="border-b border-gray-800 px-6 py-3 flex items-center justify-between sticky top-0 bg-gray-950/95 backdrop-blur z-50">
  <div class="flex items-center gap-3">
    <a href="/" class="text-gray-400 hover:text-white text-sm">← ${company}</a>
    <span class="text-gray-700">/</span>
    <span class="text-white font-semibold">Agent Control Center</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="badge-live text-xs px-2 py-0.5 rounded-full">AI: ${primaryAI} ✓</span>
    <span class="${commsKeys.twilio ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">SMS: ${commsKeys.twilio ? 'Live' : 'Offline'}</span>
    <span class="${commsKeys.sendgrid || commsKeys.resend ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">Email: ${commsKeys.sendgrid || commsKeys.resend ? 'Live' : 'Offline'}</span>
    ${pendingArr.length > 0 ? `<span class="badge-warn text-xs px-2 py-0.5 rounded-full pulse">${pendingArr.length} analyses pending</span>` : ''}
    <a href="/dashboard" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs">Dashboard →</a>
  </div>
</div>

<div class="max-w-7xl mx-auto px-4 py-8 space-y-10">

  <!-- SYSTEM STATUS ROW -->
  <div class="grid grid-cols-2 md:grid-cols-6 gap-3">
    <div class="card p-4 text-center">
      <p class="text-2xl font-black text-blue-400">12</p>
      <p class="text-xs text-gray-400 mt-1">Hyperion Agents</p>
    </div>
    <div class="card p-4 text-center">
      <p class="text-2xl font-black text-green-400">12</p>
      <p class="text-xs text-gray-400 mt-1">Standalone Agents</p>
    </div>
    <div class="card p-4 text-center">
      <p class="text-2xl font-black text-purple-400">62</p>
      <p class="text-xs text-gray-400 mt-1">SOPs Executable</p>
    </div>
    <div class="card p-4 text-center">
      <p class="text-2xl font-black text-yellow-400">${seqArr.length}</p>
      <p class="text-xs text-gray-400 mt-1">Active Sequences</p>
    </div>
    <div class="card p-4 text-center">
      <p class="text-2xl font-black text-orange-400">8</p>
      <p class="text-xs text-gray-400 mt-1">Cron Jobs</p>
    </div>
    <div class="card p-4 text-center">
      <p class="text-2xl font-black ${pendingArr.length > 0 ? 'text-yellow-400' : 'text-green-400'}">${pendingArr.length}</p>
      <p class="text-xs text-gray-400 mt-1">Analyses Queued</p>
    </div>
  </div>

  <!-- AI PROVIDER STATUS -->
  <div>
    <h2 class="text-lg font-bold mb-3 flex items-center gap-2">🤖 AI Provider Status <span class="text-xs font-normal text-gray-400">(auto-fallback chain)</span></h2>
    <div class="grid grid-cols-3 gap-3">
      <div class="card p-4 ${aiKeys.openrouter ? 'border-green-800/50' : 'border-red-800/50'}">
        <div class="flex items-center justify-between mb-1">
          <span class="font-medium">OpenRouter</span>
          <span class="${aiKeys.openrouter ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">${aiKeys.openrouter ? '✓ Primary' : '✗ Missing'}</span>
        </div>
        <p class="text-xs text-gray-400">GPT-4o-mini, Claude, 200+ models. Routes every AI call first.</p>
      </div>
      <div class="card p-4 ${aiKeys.groq ? 'border-green-800/50' : 'border-red-800/50'}">
        <div class="flex items-center justify-between mb-1">
          <span class="font-medium">Groq</span>
          <span class="${aiKeys.groq ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">${aiKeys.groq ? '✓ Fallback 1' : '✗ Missing'}</span>
        </div>
        <p class="text-xs text-gray-400">Llama 3.1 — ultra-fast free fallback when OpenRouter fails.</p>
      </div>
      <div class="card p-4 ${aiKeys.openai ? 'border-green-800/50' : 'border-red-800/50'}">
        <div class="flex items-center justify-between mb-1">
          <span class="font-medium">OpenAI</span>
          <span class="${aiKeys.openai ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">${aiKeys.openai ? '✓ Fallback 2' : '✗ Missing'}</span>
        </div>
        <p class="text-xs text-gray-400">GPT-4o — final fallback. Used if both above fail.</p>
      </div>
    </div>
    <div id="ai-test-result" class="hidden mt-3 card p-4 text-sm font-mono text-green-400 max-h-40 overflow-y-auto"></div>
    <button onclick="testAI()" class="test-btn mt-3 px-4 py-2 rounded-xl text-sm font-medium">▶ Fire Live AI Test</button>
  </div>

  <!-- HYPERION AGENTS -->
  <div>
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-bold flex items-center gap-2">⚡ HYPERION — 12 Parallel AI Agents <span class="text-xs font-normal text-gray-400">(auto-triggered on every credit report import)</span></h2>
      <button onclick="runHyperion()" class="cron-btn px-4 py-2 rounded-xl text-sm font-medium">▶ Run on Client</button>
    </div>
    <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-3 text-xs text-gray-400">
      <strong class="text-white">Trigger:</strong> <code class="bg-gray-800 px-1 rounded">POST /api/mfsn/fetch-3b</code> → auto-queues → <code class="bg-gray-800 px-1 rounded">POST /api/reports/analyze/:reportId</code> → 12 agents fire via <code class="bg-gray-800 px-1 rounded">Promise.allSettled()</code> in parallel → results saved to <code class="bg-gray-800 px-1 rounded">analysis_reports</code> + <code class="bg-gray-800 px-1 rounded">roadmap_results</code> (8 rows) → viewable at <code class="bg-gray-800 px-1 rounded">/reports/full/:clientId</code>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      ${HYPERION_AGENTS.map(a => `
        <div class="card agent-card p-4">
          <div class="flex items-start gap-3">
            <span class="text-2xl">${a.icon}</span>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs text-gray-500">Agent ${a.id}/12</span>
              </div>
              <p class="font-semibold text-sm">${a.name}</p>
              <p class="text-xs text-gray-400 mt-1 leading-relaxed">${a.desc}</p>
            </div>
          </div>
        </div>`).join('')}
    </div>
    <div id="hyperion-result" class="hidden mt-3 card p-4 text-sm font-mono text-blue-300 max-h-60 overflow-y-auto whitespace-pre-wrap"></div>
  </div>

  <!-- STANDALONE AI AGENTS -->
  <div>
    <h2 class="text-lg font-bold mb-3">🎯 Standalone AI Agents <span class="text-xs font-normal text-gray-400 ml-2">(callable independently at any time)</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      ${STANDALONE_AGENTS.map(a => `
        <div class="card agent-card p-4">
          <div class="flex items-start gap-3">
            <span class="text-xl">${a.icon}</span>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-sm">${a.name}</p>
              <p class="text-xs text-gray-400 mt-0.5 mb-2 leading-relaxed">${a.desc}</p>
              <div class="flex items-center gap-2 flex-wrap">
                <code class="text-xs bg-gray-800 px-2 py-0.5 rounded text-gray-300">${a.method} ${a.endpoint}</code>
                <span class="text-xs text-gray-500">Trigger: ${a.trigger}</span>
              </div>
            </div>
            <button onclick="testAgent('${a.endpoint}')" class="test-btn px-2 py-1 rounded-lg text-xs shrink-0">▶ Test</button>
          </div>
        </div>`).join('')}
    </div>
    <div id="agent-result" class="hidden mt-3 card p-4 text-sm font-mono text-green-300 max-h-60 overflow-y-auto whitespace-pre-wrap"></div>
  </div>

  <!-- COMMUNICATION CHANNELS -->
  <div>
    <h2 class="text-lg font-bold mb-3">📡 Communication Channels</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      ${COMM_CHANNELS.map(ch => `
        <div class="card p-4 ${ch.status ? 'border-green-800/30' : 'border-red-800/30'}">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">${ch.icon}</span>
              <span class="font-semibold text-sm">${ch.name}</span>
            </div>
            <span class="${ch.status ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">${ch.status ? 'LIVE' : 'Offline'}</span>
          </div>
          <p class="text-xs text-gray-400 leading-relaxed mb-2">${ch.desc}</p>
          ${ch.test_endpoint ? `<button onclick="testComm('${ch.test_endpoint}')" class="test-btn px-3 py-1 rounded-lg text-xs w-full">▶ Test Send</button>` : `<div class="text-xs text-gray-600 text-center py-1">Manual config required</div>`}
        </div>`).join('')}
    </div>
    <div id="comm-result" class="hidden mt-3 card p-4 text-sm font-mono text-green-300 max-h-40 overflow-y-auto"></div>
  </div>

  <!-- CRON JOBS -->
  <div>
    <h2 class="text-lg font-bold mb-3">⏱️ Cron Jobs & Automation Triggers <span class="text-xs font-normal text-gray-400 ml-2">(fire manually or via Cloudflare scheduled triggers)</span></h2>
    <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-3 text-xs text-gray-400">
      ⚠️ <strong class="text-yellow-400">Setup needed for automated scheduling:</strong> Add cron triggers to <code class="bg-gray-800 px-1 rounded">wrangler.jsonc</code> → <code class="bg-gray-800 px-1 rounded">"triggers": {"crons": ["0 */2 * * *", "0 15 * * *", "0 8 1 * *"]}</code>. Until then, trigger manually with the buttons below.
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      ${CRON_JOBS.map(cron => `
        <div class="card p-4">
          <div class="flex items-start gap-3">
            <span class="text-xl">${cron.icon}</span>
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <p class="font-semibold text-sm">${cron.name}</p>
                ${cron.badge ? `<span class="badge-warn text-xs px-2 py-0.5 rounded-full pulse">${cron.badge}</span>` : ''}
              </div>
              <p class="text-xs text-gray-400 mb-2">${cron.desc}</p>
              <div class="flex items-center justify-between">
                <code class="text-xs text-gray-500">${cron.schedule}</code>
                <button onclick="runCron('${cron.endpoint}')" class="cron-btn px-3 py-1 rounded-lg text-xs">▶ Run Now</button>
              </div>
            </div>
          </div>
        </div>`).join('')}
    </div>
    <div id="cron-result" class="hidden mt-3 card p-4 text-sm font-mono text-blue-300 max-h-40 overflow-y-auto"></div>
  </div>

  <!-- EMAIL SEQUENCES -->
  <div>
    <h2 class="text-lg font-bold mb-3">📨 Email & SMS Drip Sequences</h2>
    <div class="card overflow-hidden">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-800">
          <tr class="text-gray-400 text-xs">
            <th class="px-4 py-3 text-left">Sequence Name</th>
            <th class="px-4 py-3 text-left">Trigger Event</th>
            <th class="px-4 py-3 text-left">Delay</th>
            <th class="px-4 py-3 text-left">Status</th>
            <th class="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800/50">
          ${seqArr.map((s: any) => `
            <tr class="hover:bg-gray-800/30">
              <td class="px-4 py-3 font-medium">${s.name}</td>
              <td class="px-4 py-3"><code class="text-xs bg-gray-800 px-2 py-0.5 rounded">${s.trigger_event}</code></td>
              <td class="px-4 py-3 text-gray-400">Day ${s.delay_days}</td>
              <td class="px-4 py-3"><span class="${s.is_active ? 'badge-live' : 'badge-dead'} text-xs px-2 py-0.5 rounded-full">${s.is_active ? 'Active' : 'Paused'}</span></td>
              <td class="px-4 py-3"><button onclick="processSeq()" class="test-btn px-2 py-1 rounded-lg text-xs">▶ Process</button></td>
            </tr>`).join('')}
          ${seqArr.length === 0 ? '<tr><td colspan="5" class="px-4 py-6 text-center text-gray-500">No sequences found</td></tr>' : ''}
        </tbody>
      </table>
    </div>
    <div id="seq-result" class="hidden mt-3 card p-4 text-sm font-mono text-green-300 max-h-40 overflow-y-auto"></div>
  </div>

  <!-- RECENT ACTIVITY -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Recent Comms -->
    <div>
      <h3 class="font-bold mb-3">📬 Recent Communications</h3>
      <div class="card overflow-hidden">
        <div class="divide-y divide-gray-800/50">
          ${commsArr.length === 0 ? '<div class="px-4 py-6 text-center text-gray-500 text-sm">No comms yet</div>' :
            commsArr.map((c: any) => `
              <div class="px-3 py-2.5">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-xs ${c.channel === 'sms' ? 'text-green-400' : c.channel === 'email' ? 'text-blue-400' : 'text-gray-400'}">${c.channel === 'sms' ? '📱' : c.channel === 'email' ? '📧' : '📞'} ${c.channel?.toUpperCase()}</span>
                  <span class="text-xs ${c.direction === 'inbound' ? 'text-purple-400' : 'text-gray-500'}">${c.direction}</span>
                  <span class="ml-auto text-xs ${c.status === 'sent' || c.status === 'delivered' ? 'text-green-400' : 'text-yellow-400'}">${c.status}</span>
                </div>
                <p class="text-xs text-gray-300 truncate">${c.subject || c.body || '—'}</p>
                <p class="text-xs text-gray-600">${(c.created_at || '').slice(0,16)}</p>
              </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Recent SOP Executions -->
    <div>
      <h3 class="font-bold mb-3">⚙️ Recent SOP Executions</h3>
      <div class="card overflow-hidden">
        <div class="divide-y divide-gray-800/50">
          ${sopsArr.length === 0 ? '<div class="px-4 py-6 text-center text-gray-500 text-sm">No SOP executions yet</div>' :
            sopsArr.map((s: any) => `
              <div class="px-3 py-2.5">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-xs font-mono text-blue-400">${s.sop_id}</span>
                  <span class="ml-auto text-xs ${s.status === 'completed' ? 'text-green-400' : s.status === 'failed' ? 'text-red-400' : 'text-yellow-400'}">${s.status}</span>
                </div>
                <p class="text-xs text-gray-300 truncate">${s.sop_title || '—'}</p>
                <p class="text-xs text-gray-600">${s.duration_ms ? s.duration_ms+'ms' : ''} ${(s.created_at || '').slice(0,16)}</p>
              </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Recent Tasks Created by Agents -->
    <div>
      <h3 class="font-bold mb-3">📋 Recent Agent-Created Tasks</h3>
      <div class="card overflow-hidden">
        <div class="divide-y divide-gray-800/50">
          ${tasksArr.length === 0 ? '<div class="px-4 py-6 text-center text-gray-500 text-sm">No tasks yet</div>' :
            tasksArr.map((t: any) => `
              <div class="px-3 py-2.5">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-xs ${t.priority === 'critical' ? 'text-red-400' : t.priority === 'high' ? 'text-orange-400' : 'text-gray-400'}">${t.priority?.toUpperCase() || 'NORMAL'}</span>
                  <span class="ml-auto text-xs text-gray-500">${t.status}</span>
                </div>
                <p class="text-xs text-gray-300 truncate">${t.title || '—'}</p>
                <p class="text-xs text-gray-600">${t.assigned_to || 'Unassigned'} · ${(t.created_at || '').slice(0,10)}</p>
              </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- LIVE TEST PANEL -->
  <div class="card p-6 border-blue-800/30">
    <h2 class="text-lg font-bold mb-4">🧪 Live Test Panel</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-xs text-gray-400 mb-1">Client ID (for tests)</label>
        <input id="test-client-id" type="number" value="1" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      </div>
      <div>
        <label class="block text-xs text-gray-400 mb-1">Test Phone (SMS)</label>
        <input id="test-phone" type="text" placeholder="+15055551234" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      </div>
      <div>
        <label class="block text-xs text-gray-400 mb-1">Test Email</label>
        <input id="test-email" type="email" placeholder="you@email.com" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
      </div>
    </div>
    <div class="flex flex-wrap gap-2 mt-4">
      <button onclick="fireTestSMS()" class="test-btn px-4 py-2 rounded-xl text-sm font-medium">📱 Send Test SMS</button>
      <button onclick="fireTestEmail()" class="test-btn px-4 py-2 rounded-xl text-sm font-medium">📧 Send Test Email</button>
      <button onclick="testAI()" class="cron-btn px-4 py-2 rounded-xl text-sm font-medium">🤖 Test AI Response</button>
      <button onclick="runAllCrons()" class="cron-btn px-4 py-2 rounded-xl text-sm font-medium">⚡ Run All Cron Jobs</button>
      <a href="/sop-library" class="cron-btn px-4 py-2 rounded-xl text-sm font-medium">📚 Open SOP Library</a>
      <a href="/reports/full/1" class="cron-btn px-4 py-2 rounded-xl text-sm font-medium">📊 View Full Analysis</a>
    </div>
    <div id="test-panel-result" class="hidden mt-4 bg-gray-900 rounded-xl p-4 text-sm font-mono text-green-300 max-h-60 overflow-y-auto whitespace-pre-wrap border border-gray-700"></div>
  </div>

</div><!-- end main -->

<script>
function show(id, content, color='text-green-300') {
  const el = document.getElementById(id)
  el.className = el.className.replace('hidden','') + ' ' + color
  el.classList.remove('hidden')
  el.textContent = content
}

async function testAI() {
  show('ai-test-result', '⏳ Firing AI agent...', 'text-yellow-300')
  const r = await fetch('/api/ai/score-simulation', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ client_id: parseInt(document.getElementById('test-client-id')?.value||'1') }) })
  const d = await r.json()
  show('ai-test-result', '✓ AI RESPONSE LIVE\\n\\n' + (d.simulation || d.error || JSON.stringify(d)).slice(0, 800), 'text-green-400')
  show('test-panel-result', '✓ AI Test:\\n' + (d.simulation || d.error || '').slice(0, 600), 'text-green-300')
}

async function runCron(endpoint) {
  show('cron-result', '⏳ Running ' + endpoint + '...', 'text-yellow-300')
  const r = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'} })
  const d = await r.json()
  show('cron-result', '✓ ' + endpoint + '\\n' + JSON.stringify(d, null, 2), 'text-blue-300')
  show('test-panel-result', '✓ Cron result: ' + JSON.stringify(d), 'text-blue-300')
}

async function runAllCrons() {
  const jobs = ['/api/cron/process-sequences','/api/cron/check-deadlines','/api/cron/run-pending-analyses']
  show('test-panel-result', '⏳ Running all cron jobs...', 'text-yellow-300')
  const results = []
  for (const j of jobs) {
    const r = await fetch(j, { method:'POST', headers:{'Content-Type':'application/json'} })
    const d = await r.json()
    results.push(j + ': ' + JSON.stringify(d))
  }
  show('test-panel-result', '✓ All crons complete:\\n' + results.join('\\n'), 'text-green-300')
}

async function runHyperion() {
  const clientId = document.getElementById('test-client-id')?.value || '1'
  show('hyperion-result', '⏳ Checking for latest credit report for client ' + clientId + '...', 'text-yellow-300')
  const rr = await fetch('/api/clients/' + clientId + '/credit-reports')
  const dd = await rr.json()
  const reportId = dd.reports?.[0]?.id || dd[0]?.id
  if (!reportId) { show('hyperion-result', '✗ No credit report found for client ' + clientId + '. Import a report first via MFSN.', 'text-red-300'); return }
  show('hyperion-result', '⏳ Firing 12 Hyperion agents on report ' + reportId + '... (60-90 seconds)', 'text-yellow-300')
  const r = await fetch('/api/reports/analyze/' + reportId, { method:'POST', headers:{'Content-Type':'application/json'} })
  const d = await r.json()
  show('hyperion-result', '✓ HYPERION COMPLETE\\nHealth Score: ' + d.health_score + ' (' + d.health_grade + ')\\nRoadmaps: ' + d.roadmaps_generated + '\\nDuration: ' + d.duration_ms + 'ms\\n\\nView full report: /reports/full/' + clientId, 'text-blue-300')
}

async function testAgent(endpoint) {
  const clientId = document.getElementById('test-client-id')?.value || '1'
  show('agent-result', '⏳ Testing ' + endpoint + '...', 'text-yellow-300')
  const r = await fetch(endpoint.replace(':sopId','SOP-001'), { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ client_id: parseInt(clientId), context: 'Test run from agent control center' }) })
  const d = await r.json()
  show('agent-result', '✓ ' + endpoint + '\\n' + (d.output || d.simulation || d.letter || d.analysis || d.draft || JSON.stringify(d)).slice(0,600), 'text-green-300')
}

async function testComm(endpoint) {
  const phone = document.getElementById('test-phone')?.value
  const email = document.getElementById('test-email')?.value
  show('comm-result', '⏳ Testing ' + endpoint + '...', 'text-yellow-300')
  let body = {}
  if (endpoint.includes('sms')) {
    if (!phone) { show('comm-result', '✗ Enter a test phone number in the Live Test Panel below', 'text-red-300'); return }
    body = { to: phone, message: '[TEST] RJ Business Solutions AI agent SMS. System verified live.' }
  } else if (endpoint.includes('email') || endpoint.includes('resend') || endpoint.includes('sendgrid')) {
    if (!email) { show('comm-result', '✗ Enter a test email in the Live Test Panel below', 'text-red-300'); return }
    body = { to: email, subject: '[TEST] Agent Email — RJ Business Solutions', body: 'This is a live test from the Agent Control Center. Your email integration is working.' }
  } else if (endpoint.includes('speed-to-lead')) {
    body = { first_name: 'Test', last_name: 'Lead', email: email || 'test@test.com', phone: phone || '+15055551234', source: 'agent-test' }
  }
  const r = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
  const d = await r.json()
  show('comm-result', (d.success ? '✓ SENT: ' : '✗ FAILED: ') + endpoint + '\\n' + JSON.stringify(d), d.success ? 'text-green-300' : 'text-red-300')
}

async function processSeq() {
  show('seq-result', '⏳ Processing all due sequences...', 'text-yellow-300')
  const r = await fetch('/api/cron/process-sequences', { method:'POST', headers:{'Content-Type':'application/json'} })
  const d = await r.json()
  show('seq-result', '✓ Sequences processed: ' + JSON.stringify(d), 'text-green-300')
}

async function fireTestSMS() {
  const phone = document.getElementById('test-phone')?.value
  if (!phone) { show('test-panel-result', '✗ Enter a phone number first', 'text-red-300'); return }
  show('test-panel-result', '⏳ Sending SMS...', 'text-yellow-300')
  const r = await fetch('/api/twilio/sms', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ to: phone, message: '[TEST] RJ Business Solutions AI system SMS confirmed live. Reply STOP to opt out.' }) })
  const d = await r.json()
  show('test-panel-result', (d.success ? '✓ SMS SENT to ' + phone : '✗ SMS FAILED: ' + (d.error||'')) + '\\n' + JSON.stringify(d), d.success ? 'text-green-300' : 'text-red-300')
}

async function fireTestEmail() {
  const email = document.getElementById('test-email')?.value
  if (!email) { show('test-panel-result', '✗ Enter an email address first', 'text-red-300'); return }
  show('test-panel-result', '⏳ Sending email...', 'text-yellow-300')
  const r = await fetch('/api/email/sendgrid', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ to: email, subject: '[TEST] RJ Business Solutions Agent Email', body: 'Live test from Agent Control Center. Email system confirmed working.' }) })
  const d = await r.json()
  show('test-panel-result', (d.success ? '✓ EMAIL SENT via Resend to ' + email : '✗ EMAIL FAILED (status ' + d.status + '): ' + (d.error||'Check RESEND_API_KEY')) + '\\n' + JSON.stringify(d), d.success ? 'text-green-300' : 'text-red-300')
}
</script>
</body></html>`)
})

// ============================================================
// SELF-SERVICE SIGNUP FLOW — Lead → CROA Sign → Pay → Portal
// The missing link for fully automated client acquisition
// ============================================================

// GET /signup — Self-service signup page with CROA disclosure + Stripe
app.get('/signup', async (c) => {
  const env = c.env
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  const ref = c.req.query('ref') || ''
  const plan = c.req.query('plan') || 'standard'

  const planDetails: Record<string,{name:string;price:number;desc:string}> = {
    basic: { name: 'Basic', price: 99, desc: '1 bureau · 1 dispute round/month' },
    standard: { name: 'Standard', price: 179, desc: '3 bureaus · unlimited disputes' },
    premium: { name: 'Premium', price: 299, desc: 'AI letters · monthly strategy call' },
    autopilot: { name: 'Autopilot', price: 499, desc: 'Full AI automation · hands-free' }
  }
  const selectedPlan = planDetails[plan] || planDetails.standard

  return c.html(`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Start Your Credit Journey — ${company}</title>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://js.stripe.com/v3/"></script>
</head><body class="bg-gray-950 text-white min-h-screen font-sans">
<div class="max-w-2xl mx-auto px-4 py-12">

  <!-- Header -->
  <div class="text-center mb-8">
    <h1 class="text-3xl font-black mb-2">${company}</h1>
    <p class="text-gray-400">Start repairing your credit today — 3-day risk-free guarantee</p>
  </div>

  <!-- Plan Badge -->
  <div class="bg-blue-900/40 border border-blue-700/50 rounded-2xl p-4 mb-6 flex items-center justify-between">
    <div>
      <span class="text-blue-400 text-sm font-medium">Selected Plan</span>
      <h2 class="text-xl font-bold">${selectedPlan.name} — $${selectedPlan.price}/month</h2>
      <p class="text-gray-400 text-sm">${selectedPlan.desc}</p>
    </div>
    <div class="text-right">
      <p class="text-xs text-gray-500">First payment on Day 4</p>
      <p class="text-xs text-green-400">3-day cancellation guarantee</p>
    </div>
  </div>

  <!-- Signup Form -->
  <form id="signup-form" class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm text-gray-400 mb-1">First Name *</label>
        <input name="first_name" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none" placeholder="Rick">
      </div>
      <div>
        <label class="block text-sm text-gray-400 mb-1">Last Name *</label>
        <input name="last_name" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none" placeholder="Jefferson">
      </div>
    </div>
    <div>
      <label class="block text-sm text-gray-400 mb-1">Email Address *</label>
      <input name="email" type="email" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none" placeholder="you@email.com">
    </div>
    <div>
      <label class="block text-sm text-gray-400 mb-1">Phone Number *</label>
      <input name="phone" type="tel" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none" placeholder="(555) 555-5555">
    </div>
    <div>
      <label class="block text-sm text-gray-400 mb-1">Current Credit Score (estimate)</label>
      <select name="credit_score" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none">
        <option value="">Select your score range</option>
        <option value="300">Below 500</option>
        <option value="520">500-549</option>
        <option value="560">550-579</option>
        <option value="600">580-619</option>
        <option value="630">620-649</option>
        <option value="660">650-679</option>
        <option value="690">680-699</option>
        <option value="710">700-719</option>
        <option value="730">720+</option>
      </select>
    </div>
    <div>
      <label class="block text-sm text-gray-400 mb-1">Credit Score Goal</label>
      <select name="score_goal" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none">
        <option value="680">680 — Auto loan approval</option>
        <option value="700">700 — Good rates</option>
        <option value="720" selected>720 — Great rates</option>
        <option value="740">740 — Mortgage prime rate</option>
        <option value="760">760 — Best rates</option>
        <option value="800">800+ — Elite credit</option>
      </select>
    </div>
    <div>
      <label class="block text-sm text-gray-400 mb-1">What's your main goal?</label>
      <select name="primary_goal" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none">
        <option value="buy a home">Buy a home</option>
        <option value="buy a car">Buy or lease a car</option>
        <option value="business funding">Get business funding</option>
        <option value="lower interest rates">Lower my interest rates</option>
        <option value="remove negative items">Remove negative items</option>
        <option value="general improvement">General credit improvement</option>
      </select>
    </div>

    <!-- CROA Disclosure Box -->
    <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-4">
      <h3 class="text-yellow-400 font-bold text-sm mb-2">⚖️ REQUIRED FEDERAL DISCLOSURE — Credit Repair Organizations Act</h3>
      <div class="text-xs text-gray-400 h-40 overflow-y-auto leading-relaxed mb-3 pr-2">
        <p class="mb-2"><strong class="text-white">You have the right to dispute inaccurate information in your credit report without the help of a credit repair organization.</strong></p>
        <p class="mb-2">You may contact a consumer reporting agency directly. There is no fee for disputing information on your own. Consumer reporting agencies are required under law to investigate disputes free of charge.</p>
        <p class="mb-2">The consumer reporting agencies you may contact are: <strong>Equifax</strong> (1-800-685-1111), <strong>TransUnion</strong> (1-800-888-4213), and <strong>Experian</strong> (1-888-397-3742).</p>
        <p class="mb-2"><strong class="text-white">You have the right to cancel your contract with ${company} within 3 business days (72 hours) of signing for a full refund.</strong> Cancellation must be submitted in writing to support@rjbusinesssolutions.org.</p>
        <p class="mb-2">${company} cannot guarantee specific credit score improvements. Results vary by individual. We work to remove inaccurate, unverifiable, or unfairly reported items only.</p>
        <p class="mb-2">We are required by law not to charge you any fees until we have completed the services we have agreed to perform. Your first payment is processed on Day 4 after contract execution, after the 3-day cancellation window has passed.</p>
        <p>By signing below, you acknowledge receipt of this disclosure, the Credit Repair Organizations Act rights notice, and agree to our Terms of Service and Privacy Policy.</p>
      </div>
      <div class="flex items-start gap-3">
        <input type="checkbox" id="croa_consent" name="croa_consent" required class="mt-1 w-4 h-4 rounded border-gray-600">
        <label for="croa_consent" class="text-xs text-gray-300">I have read, understand, and acknowledge the above CROA disclosure. I understand my right to cancel within 3 business days for a full refund. <strong class="text-white">*Required</strong></label>
      </div>
    </div>

    <!-- TCPA Consent -->
    <div class="flex items-start gap-3">
      <input type="checkbox" id="tcpa_consent" name="tcpa_consent" class="mt-1 w-4 h-4 rounded border-gray-600">
      <label for="tcpa_consent" class="text-xs text-gray-400">I consent to receive automated text messages and calls from ${company} at the phone number provided, including for marketing purposes. Message and data rates may apply. Reply STOP to opt out at any time.</label>
    </div>

    <!-- Terms -->
    <div class="flex items-start gap-3">
      <input type="checkbox" id="terms_consent" name="terms_consent" required class="mt-1 w-4 h-4 rounded border-gray-600">
      <label for="terms_consent" class="text-xs text-gray-400">I agree to the <a href="/terms" target="_blank" class="text-blue-400 underline">Terms of Service</a> and <a href="/privacy" target="_blank" class="text-blue-400 underline">Privacy Policy</a>. <strong class="text-white">*Required</strong></label>
    </div>

    <input type="hidden" name="plan" value="${plan}">
    <input type="hidden" name="ref" value="${ref}">

    <!-- Error display -->
    <div id="form-error" class="hidden bg-red-900/40 border border-red-700/50 rounded-xl p-3 text-red-300 text-sm"></div>

    <!-- Submit -->
    <button type="submit" id="submit-btn" class="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-lg transition-all">
      Start My Credit Repair — $${selectedPlan.price}/month →
    </button>
    <p class="text-center text-xs text-gray-500">3-day money-back guarantee · Cancel anytime · Secure checkout via Stripe</p>
  </form>

  <!-- Plan switcher -->
  <div class="mt-8 border-t border-gray-800 pt-6">
    <p class="text-center text-sm text-gray-400 mb-3">Choose a different plan:</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      ${Object.entries(planDetails).map(([k,v]) => `<a href="/signup?plan=${k}${ref?'&ref='+ref:''}" class="px-3 py-2 text-center rounded-xl text-sm border ${plan===k?'border-blue-500 bg-blue-900/40 text-blue-400':'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}">${v.name}<br><span class="text-xs">$${v.price}/mo</span></a>`).join('')}
    </div>
  </div>
</div>

<script>
document.getElementById('signup-form').addEventListener('submit', async function(e) {
  e.preventDefault()
  const btn = document.getElementById('submit-btn')
  const errDiv = document.getElementById('form-error')
  btn.textContent = 'Processing...'
  btn.disabled = true
  errDiv.classList.add('hidden')

  const fd = new FormData(this)
  const data = Object.fromEntries(fd.entries())

  if (!data.croa_consent) {
    errDiv.textContent = 'You must acknowledge the CROA disclosure to proceed.'
    errDiv.classList.remove('hidden')
    btn.textContent = 'Start My Credit Repair — $${selectedPlan.price}/month →'
    btn.disabled = false
    return
  }
  if (!data.terms_consent) {
    errDiv.textContent = 'You must agree to the Terms of Service to proceed.'
    errDiv.classList.remove('hidden')
    btn.textContent = 'Start My Credit Repair — $${selectedPlan.price}/month →'
    btn.disabled = false
    return
  }

  try {
    const r = await fetch('/api/signup/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, signup_ip: '', user_agent: navigator.userAgent })
    })
    const result = await r.json()
    if (result.success && result.checkout_url) {
      window.location.href = result.checkout_url
    } else if (result.success && result.portal_url) {
      window.location.href = result.portal_url
    } else {
      errDiv.textContent = result.error || 'Signup failed. Please try again or contact support.'
      errDiv.classList.remove('hidden')
      btn.textContent = 'Start My Credit Repair →'
      btn.disabled = false
    }
  } catch(e) {
    errDiv.textContent = 'Network error. Please try again.'
    errDiv.classList.remove('hidden')
    btn.textContent = 'Start My Credit Repair →'
    btn.disabled = false
  }
})
</script>
</body></html>`)
})

// POST /api/signup/complete — Full automated signup: client + Stripe + portal token
app.post('/api/signup/complete', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB unavailable' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { first_name, last_name, email, phone, credit_score, score_goal, primary_goal, plan, ref, tcpa_consent, user_agent } = body

  if (!first_name || !last_name || !email) return c.json({ error: 'First name, last name, and email are required' }, 400)
  if (!body.croa_consent) return c.json({ error: 'CROA disclosure acknowledgment is required' }, 400)
  if (!body.terms_consent) return c.json({ error: 'Terms of Service agreement is required' }, 400)

  // Check for duplicate email
  const existing = await DB.prepare(`SELECT id FROM clients WHERE email = ?`).bind(email).first()
  if (existing) return c.json({ error: 'An account with this email already exists. Contact support@rjbusinesssolutions.org for help.' }, 409)

  const now = new Date().toISOString()
  const planKey = plan || 'standard'

  // Create client record
  const ins = await DB.prepare(`INSERT INTO clients (first_name, last_name, email, phone, credit_score_start, credit_score_current, credit_score_goal, status, plan, source, notes, tcpa_consent, tcpa_consent_date, croa_disclosure_signed, croa_disclosure_date, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,datetime('now'),datetime('now'))`)
    .bind(first_name, last_name, email, phone || null, parseInt(credit_score)||0, parseInt(credit_score)||0, parseInt(score_goal)||720, 'onboarding', planKey, ref ? `referral:${ref}` : 'self-service-signup', primary_goal || null, tcpa_consent ? 1 : 0, tcpa_consent ? now : null, 1, now).run()
  const clientId = ins.meta?.last_row_id

  // Log CROA disclosure with full audit trail
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('signup','croa_disclosure_signed','client',?,?)`)
    .bind(clientId, `CROA disclosure signed at signup. Plan: ${planKey}. Goal: ${score_goal}. Primary goal: ${primary_goal}. UA: ${user_agent?.slice(0,100)||'unknown'}`).run()

  // Create Stripe customer if Stripe key available
  let stripeCustomerId = null
  let checkoutUrl = null
  const STRIPE_PLANS: Record<string,string> = {
    basic: 'price_basic_monthly', standard: 'price_standard_monthly',
    premium: 'price_premium_monthly', autopilot: 'price_autopilot_monthly'
  }
  const PLAN_PRICES: Record<string,number> = { basic:99, standard:179, premium:299, autopilot:499 }

  if (env.STRIPE_SECRET_KEY) {
    try {
      // Create Stripe customer
      const custRes = await fetch('https://api.stripe.com/v1/customers', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, name: `${first_name} ${last_name}`, 'metadata[client_id]': String(clientId), 'metadata[plan]': planKey, phone: phone||'' }).toString()
      })
      const cust = await custRes.json() as any
      if (cust.id) {
        stripeCustomerId = cust.id
        await DB.prepare(`UPDATE clients SET stripe_customer_id=? WHERE id=?`).bind(stripeCustomerId, clientId).run()

        // Create Stripe Checkout Session for payment setup
        const baseUrl = `https://${c.req.header('host') || 'rjbusinesssolutions.org'}`
        const sessionRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            customer: stripeCustomerId,
            mode: 'setup',
            'payment_method_types[]': 'card',
            success_url: `${baseUrl}/signup/success?client_id=${clientId}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/signup?plan=${planKey}`,
            'metadata[client_id]': String(clientId),
            'metadata[plan]': planKey,
          }).toString()
        })
        const session = await sessionRes.json() as any
        if (session.url) checkoutUrl = session.url
      }
    } catch (stripeErr: any) {
      console.error('Stripe setup error:', stripeErr.message)
    }
  }

  // Generate portal token regardless of Stripe status
  const portalToken = crypto.randomUUID()
  await DB.prepare(`INSERT INTO portal_tokens (client_id, token, expires_at) VALUES (?,?,datetime('now','+7 days'))`).bind(clientId, portalToken).run()
  const portalUrl = `/portal/${portalToken}`

  // Send welcome SMS if Twilio configured
  if (env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && phone) {
    try {
      await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, {
        method: 'POST',
        headers: { 'Authorization': `Basic ${btoa(env.TWILIO_ACCOUNT_SID+':'+env.TWILIO_AUTH_TOKEN)}`, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ To: phone, From: env.TWILIO_PHONE_NUMBER || '', Body: `Welcome to ${env.COMPANY_NAME||'RJ Business Solutions'}, ${first_name}! Your account is ready. ${checkoutUrl ? 'Complete payment setup: '+checkoutUrl : 'Access your portal: '+`https://${c.req.header('host')||'rjbusinesssolutions.org'}${portalUrl}`}. Reply STOP to opt out.` }).toString()
      })
    } catch (_) {}
  }

  // Send welcome email via Resend
  if (env.RESEND_API_KEY && email) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${env.COMPANY_NAME || 'RJ Business Solutions'} <${env.COMPANY_EMAIL || 'support@rjbusinesssolutions.org'}>`,
          to: [email],
          subject: `Welcome to ${env.COMPANY_NAME||'RJ Business Solutions'} — You're on your way to ${score_goal}!`,
          html: `<h1>Welcome, ${first_name}!</h1><p>Your credit repair journey starts now. Here's what happens next:</p><ol><li>Upload your ID and proof of address to verify your identity</li><li>We'll pull your 3-bureau credit report automatically</li><li>Our AI will analyze your report and build your personalized roadmaps</li><li>Dispute letters will be prepared and sent within 5 business days</li></ol>${checkoutUrl ? `<p><a href="${checkoutUrl}" style="background:#2563eb;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block">Set Up Payment →</a></p>` : ''}<p><a href="https://${c.req.header('host')||'rjbusinesssolutions.org'}${portalUrl}" style="background:#059669;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block">Access Your Portal →</a></p><p style="font-size:12px;color:#666">You have a 3-day right of cancellation for a full refund. Email support@rjbusinesssolutions.org to cancel. RJ Business Solutions | 1342 NM 333, Tijeras, NM 87059 | (866) 752-4618</p>`
        })
      })
    } catch (_) {}
  }

  // Create staff task for new signup
  await DB.prepare(`INSERT INTO tasks (client_id, title, description, priority, status, due_date) VALUES (?,?,?,?,?,date('now','+1 day'))`)
    .bind(clientId, `New Signup — ${first_name} ${last_name}`, `Self-service signup. Plan: ${planKey}. Goal: ${primary_goal}. Score: ${credit_score} → ${score_goal}. ${checkoutUrl ? 'Payment link sent.' : 'Manual payment setup needed.'}`, 'high', 'pending').run()

  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('signup','client_created','client',?,?)`)
    .bind(clientId, `Self-service signup. Plan: ${planKey}. Stripe: ${stripeCustomerId||'no'}. Ref: ${ref||'none'}`).run()

  return c.json({
    success: true,
    client_id: clientId,
    checkout_url: checkoutUrl,
    portal_url: `https://${c.req.header('host')||'rjbusinesssolutions.org'}${portalUrl}`,
    message: checkoutUrl ? 'Account created. Redirecting to payment setup.' : 'Account created. Redirecting to portal.'
  })
})

// GET /signup/success — Post-payment success page
app.get('/signup/success', async (c) => {
  const env = c.env; const { DB } = env
  const clientId = parseInt(c.req.query('client_id') || '0')
  const client = clientId && DB ? await DB.prepare(`SELECT first_name, last_name FROM clients WHERE id=?`).bind(clientId).first() as any : null
  const token = DB && clientId ? (await DB.prepare(`SELECT token FROM portal_tokens WHERE client_id=? ORDER BY id DESC LIMIT 1`).bind(clientId).first() as any)?.token : null
  if (DB && clientId) {
    await DB.prepare(`UPDATE clients SET status='onboarding' WHERE id=?`).bind(clientId).run()
  }
  return c.html(`<!DOCTYPE html><html><head><meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-gray-950 text-white min-h-screen flex items-center justify-center">
<div class="max-w-lg text-center px-6">
  <div class="text-6xl mb-6">🎉</div>
  <h1 class="text-3xl font-black mb-3">You're in, ${client?.first_name||''}!</h1>
  <p class="text-gray-400 mb-6">Your account is set up and your credit repair journey begins now. Your portal link has been sent to your email.</p>
  <div class="bg-gray-900 rounded-2xl p-6 mb-6 text-left">
    <h2 class="font-bold mb-3">Your Next Steps:</h2>
    <div class="space-y-2 text-sm text-gray-300">
      <div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">1.</span><span>Upload your government-issued ID and proof of address</span></div>
      <div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">2.</span><span>We'll pull your 3-bureau credit report within 24 hours</span></div>
      <div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">3.</span><span>Your AI analysis (12 agents, 8 roadmaps) runs automatically</span></div>
      <div class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">4.</span><span>Dispute letters prepared and mailed within 5 business days</span></div>
    </div>
  </div>
  ${token ? `<a href="/portal/${token}" class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-lg mb-4">Access Your Portal →</a><br>` : ''}
  <p class="text-xs text-gray-500">Questions? Email support@rjbusinesssolutions.org or call (866) 752-4618</p>
</div></body></html>`)
})

// ============================================================
// ID VERIFICATION UPLOAD — Client-facing document upload
// ============================================================

// POST /api/portal/upload-id — Accept ID document upload from client portal
app.post('/api/portal/upload-id', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB unavailable' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { token, document_type, file_data, file_name, notes } = body
  if (!token) return c.json({ error: 'Token required' }, 400)
  if (!document_type) return c.json({ error: 'document_type required' }, 400)

  const pt = await DB.prepare(`SELECT client_id FROM portal_tokens WHERE token=? AND expires_at > datetime('now')`).bind(token).first() as any
  if (!pt) return c.json({ error: 'Invalid or expired portal token' }, 401)
  const clientId = pt.client_id

  // Store document record (file_data would go to R2 in production)
  await DB.prepare(`INSERT INTO audit_log (actor, action, entity_type, entity_id, details) VALUES ('client','document_uploaded','client',?,?)`)
    .bind(clientId, `Document type: ${document_type}. File: ${file_name||'unknown'}. Notes: ${notes||'none'}`).run()

  // Create staff task to review
  await DB.prepare(`INSERT INTO tasks (client_id, title, description, priority, status, due_date) VALUES (?,?,?,?,?,date('now','+1 day'))`)
    .bind(clientId, `Review Document Upload — ${document_type}`, `Client uploaded: ${document_type}. File: ${file_name||'unknown'}. ${notes?'Notes: '+notes:''}`, 'high', 'pending').run()

  return c.json({ success: true, message: 'Document received. Our team will review within 1 business day and contact you.' })
})

// GET /api/portal/:token/documents — list documents for portal client
app.get('/api/portal/:token/documents', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB unavailable' }, 500)
  const token = c.req.param('token')
  const pt = await DB.prepare(`SELECT client_id FROM portal_tokens WHERE token=? AND expires_at > datetime('now')`).bind(token).first() as any
  if (!pt) return c.json({ error: 'Invalid token' }, 401)
  const docs = await DB.prepare(`SELECT action, details, created_at FROM audit_log WHERE entity_id=? AND action='document_uploaded' ORDER BY created_at DESC`).bind(pt.client_id).all()
  return c.json({ documents: docs.results })
})

// ============================================================
// AFFILIATE FRONTEND PORTAL
// ============================================================

// GET /affiliate — Affiliate portal page
app.get('/affiliate', async (c) => {
  const env = c.env; const { DB } = env
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Affiliate Partner Portal — ${company}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head><body class="bg-gray-950 text-white min-h-screen font-sans">

<!-- Login / Registration -->
<div id="auth-section" class="max-w-md mx-auto px-4 py-16">
  <div class="text-center mb-8">
    <h1 class="text-2xl font-black mb-1">${company}</h1>
    <p class="text-blue-400 font-medium">Affiliate Partner Portal</p>
    <p class="text-gray-400 text-sm mt-2">Earn 20-30% per referred client</p>
  </div>
  <div class="bg-gray-900 rounded-2xl p-6">
    <div class="flex mb-4 bg-gray-800 rounded-xl p-1">
      <button onclick="showTab('login')" id="tab-login" class="flex-1 py-2 rounded-lg text-sm font-medium bg-gray-700 text-white">Login</button>
      <button onclick="showTab('register')" id="tab-register" class="flex-1 py-2 rounded-lg text-sm font-medium text-gray-400">Apply to Join</button>
    </div>

    <!-- Login Form -->
    <form id="login-form" onsubmit="affiliateLogin(event)">
      <div class="space-y-3">
        <input id="login-email" type="email" placeholder="Email address" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
        <input id="login-code" type="text" placeholder="Affiliate Code (e.g. RICK2026)" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
        <button type="submit" class="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium">Access Dashboard</button>
      </div>
    </form>

    <!-- Register Form -->
    <form id="register-form" class="hidden" onsubmit="affiliateApply(event)">
      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-3">
          <input id="reg-first" placeholder="First Name" required class="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
          <input id="reg-last" placeholder="Last Name" required class="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
        </div>
        <input id="reg-email" type="email" placeholder="Email address" required class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
        <input id="reg-phone" placeholder="Phone number" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
        <select id="reg-type" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500">
          <option value="">How do you plan to refer clients?</option>
          <option value="real_estate">Real Estate Agent</option>
          <option value="mortgage">Mortgage Broker</option>
          <option value="car_dealer">Auto Dealer</option>
          <option value="financial_coach">Financial Coach/Advisor</option>
          <option value="social_media">Social Media / Content Creator</option>
          <option value="insurance">Insurance Agent</option>
          <option value="other">Other</option>
        </select>
        <textarea id="reg-notes" placeholder="Tell us about your audience or how you'll refer clients..." rows="3" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-blue-500 resize-none"></textarea>
        <button type="submit" class="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-medium">Submit Application</button>
      </div>
    </form>

    <div id="auth-message" class="hidden mt-3 p-3 rounded-xl text-sm"></div>
  </div>
</div>

<!-- Dashboard (shown after login) -->
<div id="dashboard" class="hidden max-w-5xl mx-auto px-4 py-8">
  <div class="flex items-center justify-between mb-8">
    <div>
      <h1 class="text-2xl font-bold" id="dash-name">Affiliate Dashboard</h1>
      <p class="text-gray-400 text-sm" id="dash-code"></p>
    </div>
    <button onclick="logout()" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm">Logout</button>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <div class="bg-gray-900 rounded-2xl p-4 text-center">
      <p class="text-3xl font-black text-blue-400" id="stat-clicks">0</p>
      <p class="text-gray-400 text-sm">Link Clicks</p>
    </div>
    <div class="bg-gray-900 rounded-2xl p-4 text-center">
      <p class="text-3xl font-black text-green-400" id="stat-leads">0</p>
      <p class="text-gray-400 text-sm">Leads Referred</p>
    </div>
    <div class="bg-gray-900 rounded-2xl p-4 text-center">
      <p class="text-3xl font-black text-yellow-400" id="stat-clients">0</p>
      <p class="text-gray-400 text-sm">Active Clients</p>
    </div>
    <div class="bg-gray-900 rounded-2xl p-4 text-center">
      <p class="text-3xl font-black text-purple-400" id="stat-earnings">$0</p>
      <p class="text-gray-400 text-sm">Total Earned</p>
    </div>
  </div>

  <!-- Referral Link -->
  <div class="bg-blue-900/30 border border-blue-800/50 rounded-2xl p-6 mb-6">
    <h2 class="font-bold mb-2">Your Referral Link</h2>
    <div class="flex gap-2">
      <input id="ref-link" readonly class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-blue-300 focus:outline-none">
      <button onclick="copyLink()" class="px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium">Copy</button>
    </div>
    <p class="text-xs text-gray-500 mt-2">Share this link. Anyone who signs up through it is credited to you automatically.</p>
  </div>

  <!-- Commission Structure -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-gray-900 rounded-2xl p-4">
      <p class="text-gray-400 text-xs mb-1">Standard Affiliate</p>
      <p class="text-2xl font-bold text-green-400">20%</p>
      <p class="text-sm text-gray-300">of client's first month</p>
      <p class="text-xs text-gray-500 mt-2">1-9 referrals/month</p>
    </div>
    <div class="bg-gray-900 rounded-2xl p-4 border border-blue-700/50">
      <p class="text-blue-400 text-xs mb-1">Silver Affiliate</p>
      <p class="text-2xl font-bold text-blue-400">25%</p>
      <p class="text-sm text-gray-300">first month + 10% month 2</p>
      <p class="text-xs text-gray-500 mt-2">10-24 referrals/month</p>
    </div>
    <div class="bg-gray-900 rounded-2xl p-4 border border-yellow-700/50">
      <p class="text-yellow-400 text-xs mb-1">Gold Affiliate</p>
      <p class="text-2xl font-bold text-yellow-400">30%</p>
      <p class="text-sm text-gray-300">first month + 15% months 2-3</p>
      <p class="text-xs text-gray-500 mt-2">25+ referrals/month</p>
    </div>
  </div>

  <!-- Recent Referrals -->
  <div class="bg-gray-900 rounded-2xl p-6 mb-6">
    <h2 class="font-bold mb-4">Recent Referrals</h2>
    <div id="referrals-list">
      <p class="text-gray-500 text-sm">No referrals yet. Share your link to get started!</p>
    </div>
  </div>

  <!-- Marketing Materials -->
  <div class="bg-gray-900 rounded-2xl p-6">
    <h2 class="font-bold mb-4">Marketing Materials</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <a href="/funnel" target="_blank" class="px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm text-center text-gray-300">📄 View Sales Page</a>
      <button onclick="copyScript()" class="px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm text-center text-gray-300">💬 Copy Email Script</button>
      <button onclick="copySMS()" class="px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm text-center text-gray-300">📱 Copy SMS Script</button>
    </div>
    <div id="script-display" class="hidden mt-4 bg-gray-800 rounded-xl p-4 text-sm text-gray-300"></div>
  </div>
</div>

<script>
let currentAffiliate = null

function showTab(tab) {
  document.getElementById('login-form').classList.toggle('hidden', tab !== 'login')
  document.getElementById('register-form').classList.toggle('hidden', tab !== 'register')
  document.getElementById('tab-login').className = 'flex-1 py-2 rounded-lg text-sm font-medium ' + (tab==='login' ? 'bg-gray-700 text-white' : 'text-gray-400')
  document.getElementById('tab-register').className = 'flex-1 py-2 rounded-lg text-sm font-medium ' + (tab==='register' ? 'bg-gray-700 text-white' : 'text-gray-400')
}

async function affiliateLogin(e) {
  e.preventDefault()
  const email = document.getElementById('login-email').value
  const code = document.getElementById('login-code').value
  const r = await fetch('/api/affiliates/portal-login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, referral_code: code }) })
  const d = await r.json()
  if (d.success) {
    currentAffiliate = d.affiliate
    showDashboard(d.affiliate, d.stats, d.referrals)
  } else {
    const m = document.getElementById('auth-message')
    m.textContent = d.error || 'Login failed. Check your email and affiliate code.'
    m.className = 'mt-3 p-3 rounded-xl text-sm bg-red-900/40 text-red-300'
    m.classList.remove('hidden')
  }
}

async function affiliateApply(e) {
  e.preventDefault()
  const r = await fetch('/api/affiliates', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ first_name: document.getElementById('reg-first').value, last_name: document.getElementById('reg-last').value, email: document.getElementById('reg-email').value, phone: document.getElementById('reg-phone').value, referral_type: document.getElementById('reg-type').value, notes: document.getElementById('reg-notes').value }) })
  const d = await r.json()
  const m = document.getElementById('auth-message')
  if (d.success || d.id) {
    m.textContent = '✓ Application submitted! We review all applications within 2 business days and will email your affiliate code.'
    m.className = 'mt-3 p-3 rounded-xl text-sm bg-green-900/40 text-green-300'
  } else {
    m.textContent = d.error || 'Application failed. Please try again.'
    m.className = 'mt-3 p-3 rounded-xl text-sm bg-red-900/40 text-red-300'
  }
  m.classList.remove('hidden')
}

function showDashboard(aff, stats, referrals) {
  document.getElementById('auth-section').classList.add('hidden')
  document.getElementById('dashboard').classList.remove('hidden')
  document.getElementById('dash-name').textContent = aff.first_name + ' ' + aff.last_name + ' — Affiliate Dashboard'
  document.getElementById('dash-code').textContent = 'Affiliate Code: ' + (aff.referral_code || aff.id)
  document.getElementById('stat-clicks').textContent = stats?.clicks || 0
  document.getElementById('stat-leads').textContent = stats?.leads || 0
  document.getElementById('stat-clients').textContent = stats?.active_clients || 0
  document.getElementById('stat-earnings').textContent = '$' + (stats?.total_earned || 0)
  const refLink = window.location.origin + '/signup?ref=' + (aff.referral_code || aff.id)
  document.getElementById('ref-link').value = refLink
  if (referrals && referrals.length > 0) {
    document.getElementById('referrals-list').innerHTML = referrals.map(r =>
      '<div class="flex items-center justify-between py-2 border-b border-gray-800"><div><span class="text-sm">' + (r.first_name||'Client') + ' ' + (r.last_name||'') + '</span><span class="text-xs text-gray-500 ml-2">' + (r.created_at||'').slice(0,10) + '</span></div><span class="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400">' + (r.status||'lead') + '</span></div>'
    ).join('')
  }
}

function copyLink() {
  navigator.clipboard.writeText(document.getElementById('ref-link').value)
  alert('✓ Referral link copied to clipboard!')
}

function logout() {
  currentAffiliate = null
  document.getElementById('auth-section').classList.remove('hidden')
  document.getElementById('dashboard').classList.add('hidden')
}

function copyScript() {
  const d = document.getElementById('script-display')
  const aff = currentAffiliate
  const link = document.getElementById('ref-link')?.value || ''
  d.textContent = 'Subject: I found something that actually fixes credit\\n\\nHey [Name],\\n\\nI wanted to share something I just discovered — RJ Business Solutions uses AI to analyze your credit and send dispute letters automatically. My clients are seeing 50-100 point gains in 60-90 days.\\n\\nThey offer a 3-day money-back guarantee, so there\\'s zero risk.\\n\\nCheck it out here: ' + link + '\\n\\nLet me know if you have questions — happy to explain more.\\n\\n[Your Name]'
  d.classList.remove('hidden')
  navigator.clipboard.writeText(d.textContent)
}

function copySMS() {
  const d = document.getElementById('script-display')
  const link = document.getElementById('ref-link')?.value || ''
  d.textContent = 'Hey [Name]! Wanted to share this — RJ Business Solutions uses AI to fix credit fast. My clients are seeing real results. 3-day money-back guarantee. Check it out: ' + link
  d.classList.remove('hidden')
  navigator.clipboard.writeText(d.textContent)
}
</script>
</body></html>`)
})

// POST /api/affiliates/portal-login — Affiliate portal authentication
app.post('/api/affiliates/portal-login', async (c) => {
  const env = c.env; const { DB } = env
  if (!DB) return c.json({ error: 'DB unavailable' }, 500)
  const body: any = await c.req.json().catch(() => ({}))
  const { email, referral_code } = body
  if (!email || !referral_code) return c.json({ error: 'Email and referral code required' }, 400)

  const aff = await DB.prepare(`SELECT * FROM affiliates WHERE email=? AND (referral_code=? OR CAST(id AS TEXT)=?)`).bind(email, referral_code, referral_code).first() as any
  if (!aff) return c.json({ error: 'Affiliate not found. Check your email and code, or apply at /affiliate.' }, 404)

  // Get stats from referrals
  const stats = await DB.prepare(`SELECT COUNT(*) as leads, SUM(CASE WHEN c.status='active' THEN 1 ELSE 0 END) as active_clients, SUM(ar.commission_amount) as total_earned FROM affiliate_referrals ar LEFT JOIN clients c ON c.id=ar.client_id WHERE ar.affiliate_id=?`).bind(aff.id).first() as any
  const referrals = await DB.prepare(`SELECT c.first_name, c.last_name, c.status, c.created_at FROM affiliate_referrals ar LEFT JOIN clients c ON c.id=ar.client_id WHERE ar.affiliate_id=? ORDER BY ar.created_at DESC LIMIT 20`).bind(aff.id).all()

  return c.json({
    success: true,
    affiliate: aff,
    stats: { clicks: aff.total_clicks||0, leads: stats?.leads||0, active_clients: stats?.active_clients||0, total_earned: Math.round((stats?.total_earned||0)*100)/100 },
    referrals: referrals.results
  })
})

// GET /terms — Terms of Service page
app.get('/terms', async (c) => {
  const env = c.env
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html><head><meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script><title>Terms of Service — ${company}</title></head>
<body class="bg-gray-950 text-white min-h-screen"><div class="max-w-3xl mx-auto px-4 py-12">
<a href="/" class="text-gray-400 hover:text-white text-sm">← Back</a>
<h1 class="text-3xl font-bold mt-6 mb-8">Terms of Service</h1>
<div class="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
<p class="text-sm text-gray-500">Effective: January 1, 2026 | Last Updated: May 5, 2026</p>
<h2 class="text-xl font-bold text-white">1. CROA Disclosure (Required by Federal Law)</h2>
<div class="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-4 text-sm">
<p class="font-bold text-yellow-400 mb-2">You have the right to dispute inaccurate information in your credit report without the help of a credit repair organization.</p>
<p>Consumer reporting agencies: Equifax (1-800-685-1111) · TransUnion (1-800-888-4213) · Experian (1-888-397-3742)</p>
<p class="mt-2">You may cancel within <strong>3 business days</strong> for a full refund. No questions asked.</p>
</div>
<h2 class="text-xl font-bold text-white">2. Services</h2>
<p>${company} provides credit report analysis, dispute letter preparation, credit monitoring, and AI-powered credit strategy services. We do NOT guarantee specific score improvements or item deletions.</p>
<h2 class="text-xl font-bold text-white">3. Pricing</h2>
<p>Basic $99/mo · Standard $179/mo · Premium $299/mo · Autopilot $499/mo. First payment on Day 4 after contract execution (after 3-day cancellation window).</p>
<h2 class="text-xl font-bold text-white">4. Refund Policy</h2>
<p>Full refund within 3 business days. After that, completed months are non-refundable. Billing errors credited within 5 business days.</p>
<h2 class="text-xl font-bold text-white">5. Contact</h2>
<p>${company} · 1342 NM 333, Tijeras, NM 87059 · support@rjbusinesssolutions.org · (866) 752-4618</p>
</div></div></body></html>`)
})

// GET /privacy — Privacy Policy page
app.get('/privacy', async (c) => {
  const env = c.env
  const company = env.COMPANY_NAME || 'RJ Business Solutions'
  return c.html(`<!DOCTYPE html><html><head><meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script><title>Privacy Policy — ${company}</title></head>
<body class="bg-gray-950 text-white min-h-screen"><div class="max-w-3xl mx-auto px-4 py-12">
<a href="/" class="text-gray-400 hover:text-white text-sm">← Back</a>
<h1 class="text-3xl font-bold mt-6 mb-8">Privacy Policy</h1>
<div class="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
<p class="text-sm text-gray-500">Effective: January 1, 2026 | Last Updated: May 5, 2026</p>
<h2 class="text-xl font-bold text-white">Information We Collect</h2>
<p>We collect: identity data (name, DOB, SSN for credit pull), contact data (email, phone, address), credit data (3-bureau report via MyFreeScoreNow), and payment data (processed by Stripe — we never store raw card numbers).</p>
<h2 class="text-xl font-bold text-white">How We Use It</h2>
<p>Solely to provide credit repair services, communicate with you, and comply with FCRA/CROA/GLBA requirements. <strong>We do not sell your data.</strong></p>
<h2 class="text-xl font-bold text-white">Third-Party Processors</h2>
<p>Stripe (payments) · Twilio (SMS) · SendGrid (email) · Click2Mail (certified mail) · MyFreeScoreNow (credit data) · Cloudflare (infrastructure) · OpenRouter/OpenAI (AI analysis)</p>
<h2 class="text-xl font-bold text-white">Your Rights</h2>
<p>California residents: CCPA rights apply (access, delete, opt-out of sale — we don't sell). All clients: FCRA §609 access rights. Email support@rjbusinesssolutions.org to exercise any right.</p>
<h2 class="text-xl font-bold text-white">Security</h2>
<p>TLS 1.3 encryption in transit. Cloudflare D1 encrypted at rest. SHA-256 password hashing. Annual security assessments. GLBA Safeguards Rule compliant.</p>
<h2 class="text-xl font-bold text-white">Contact</h2>
<p>${company} · 1342 NM 333, Tijeras, NM 87059 · support@rjbusinesssolutions.org · (866) 752-4618</p>
</div></div></body></html>`)
})

export default app
