import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { TEMPLATE_CONTENT } from './templates'

type Bindings = { DB: D1Database }
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

export default app
