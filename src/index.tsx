import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/api/*', cors())

// ============================================================
// RJ BUSINESS SOLUTIONS — MASTER SOP 2026
// Updated April 2026 — All 2026 legal/credit law changes applied
// Agent-readable + Employee-friendly
// ============================================================

// ---- SOP DATA STRUCTURE (Agent-Optimized) ----
interface SOPEntry {
  id: string
  title: string
  phase: number
  phaseName: string
  package: string
  category: string
  lastUpdated: string
  complianceStatus: 'current' | 'needs-review' | 'critical'
  legalChanges2026: string[]
  summary: string
  steps: string[]
  tools: string[]
  kpis: string[]
  templates: string[]
  agentInstructions: string
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

const SOPS: SOPEntry[] = [
  // ===== PHASE 1: LEGAL & REGULATORY =====
  {
    id: 'SOP-000', title: 'Master Business Design Framework', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Foundation', category: 'Business Design', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: [
      '2026 Delaware franchise tax: $300 (LLC), $450+ (Corp based on shares)',
      'Series LLC now recognized in 21 states (up from 19 in 2025)',
      'Wyoming LLC annual fee remains $60 — still most cost-effective',
      'New beneficial ownership reporting (BOI) requirements under Corporate Transparency Act — enforcement paused by courts as of March 2026',
    ],
    summary: 'Complete framework for selecting business structure, jurisdiction, and governance model. Includes comparative analysis of all entity types (Sole Prop → PBC), strategic decision tree, and incorporation execution checklist.',
    steps: [
      'Evaluate business model against entity type matrix (Sole Prop, LLC, S-Corp, C-Corp, Series LLC, PBC)',
      'Run Strategic Decision Tree based on revenue, partners, VC plans, liability needs',
      'Select incorporation jurisdiction using state comparison (DE, WY, NV, TX, FL, Home State)',
      'Complete name availability search (state + USPTO TESS + domain + social handles)',
      'Appoint registered agent (commercial service recommended: CT Corp, Northwest)',
      'File Articles of Organization/Incorporation with chosen state',
      'Obtain EIN via IRS online application (instant issuance)',
      'Draft Operating Agreement (LLC) or Bylaws (Corp) — 8 essential sections',
      'Execute organizational meeting / written consent of incorporator',
      'Set up corporate records binder and compliance calendar',
    ],
    tools: ['State Secretary of State portals', 'USPTO TESS', 'Namecheap/GoDaddy', 'Namechk', 'IRS EIN Online', 'Clerky', 'Stripe Atlas', 'Harbor Compliance'],
    kpis: ['Entity formed within 14 days', 'EIN obtained same-day', 'Operating Agreement executed within 30 days', 'All handles/domains secured within 48 hours'],
    templates: ['Entity Comparison Matrix', 'Strategic Decision Tree', 'Incorporation Checklist', 'Operating Agreement Template', 'Bylaws Template', 'Organizational Consent Template'],
    agentInstructions: 'When a client asks about business formation: 1) Identify their revenue level, partner count, and VC intentions. 2) Run through the Strategic Decision Tree. 3) Recommend entity type + jurisdiction. 4) Provide step-by-step filing instructions for their chosen state. Always recommend LLC for sub-$200K service businesses and C-Corp for VC-backed startups.',
  },
  {
    id: 'SOP-001', title: 'Business Concept Validation', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Foundation', category: 'Validation', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: ['FTC updated endorsement guides (Oct 2025) — stricter influencer/testimonial disclosure requirements', 'New AI disclosure requirements in California (AB 316) effective Jan 1, 2026'],
    summary: 'Systematic validation of business concepts through market research, competitive analysis, MVP testing, and financial viability assessment before committing resources.',
    steps: [
      'Define value proposition using Problem-Solution-Benefit framework',
      'Conduct market sizing (TAM/SAM/SOM) with verifiable data sources',
      'Analyze minimum 5 direct competitors (pricing, positioning, weaknesses)',
      'Build customer avatar with demographics, psychographics, pain points',
      'Create MVP or prototype for market testing',
      'Run validation experiments (landing page, waitlist, pre-sales)',
      'Analyze results against go/no-go criteria',
      'Document findings in Business Validation Report',
    ],
    tools: ['Google Trends', 'SEMrush', 'SimilarWeb', 'Census.gov', 'IBISWorld', 'SurveyMonkey', 'Typeform', 'Carrd (landing pages)'],
    kpis: ['Market size validated (TAM > $1B for scalable)', 'Min 100 validation responses', 'Min 10% conversion on test offer', 'Break-even achievable within 18 months'],
    templates: ['Business Validation Report', 'Competitor Analysis Matrix', 'Customer Avatar Worksheet', 'MVP Test Results Template'],
    agentInstructions: 'Guide clients through systematic validation. Never skip market sizing. Always require at least 5 competitor analyses. If validation metrics fall below thresholds, recommend pivoting before investing further.',
  },
  {
    id: 'SOP-002', title: 'Legal Entity Formation', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Foundation', category: 'Legal', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: [
      'Corporate Transparency Act BOI reporting — enforcement currently paused by federal courts (March 2026)',
      'Delaware franchise tax unchanged for 2026: $300 LLC, $175 min Corp',
      'California AB 316 (effective Jan 1, 2026): AI liability — cannot assert AI autonomously caused harm',
      'New Jersey telemarketing regulations sunset Jan 16, 2026 (N.J. Admin. Code 13:45A-1.1)',
      'Oregon medical debt reporting banned effective Jan 1, 2026 (Or. SB 605)',
    ],
    summary: 'Complete entity formation protocol from jurisdiction selection through post-incorporation compliance. Covers all entity types with specific filing procedures for top-5 incorporation states.',
    steps: [
      'Select entity type from SOP-000 recommendation',
      'Choose jurisdiction (Delaware for VC, Wyoming for asset protection, home state for simplicity)',
      'Search name availability across state, federal trademark, domains, social',
      'Appoint registered agent and confirm acceptance',
      'File Articles of Organization (LLC) or Certificate of Incorporation (Corp)',
      'Obtain EIN from IRS (online = instant)',
      'Draft and execute Operating Agreement or Bylaws',
      'Hold organizational meeting or execute written consent',
      'Open business bank account with EIN and formation docs',
      'Set up compliance calendar (annual reports, franchise tax, renewals)',
      'Register as foreign entity in any state where you have nexus',
    ],
    tools: ['State SOS portals', 'IRS EIN Online', 'CT Corporation', 'Northwest Registered Agent', 'Harbor Compliance', 'Clerky', 'Stripe Atlas'],
    kpis: ['Filing completed within 5 business days', 'EIN same-day', 'Bank account within 14 days', 'Compliance calendar set within 7 days'],
    templates: ['Articles of Organization (Multi-State)', 'Certificate of Incorporation (DE)', 'Operating Agreement (8-Section)', 'Corporate Bylaws', 'Organizational Consent', 'Foreign Qualification Checklist'],
    agentInstructions: 'Walk clients through formation step-by-step. Always verify name availability BEFORE filing. Recommend commercial registered agent over self-service. Set up compliance calendar immediately post-formation to prevent missed deadlines.',
  },
  {
    id: 'SOP-601', title: 'FCRA Compliance System', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Compliance', lastUpdated: '2026-04-14',
    complianceStatus: 'critical',
    legalChanges2026: [
      '⚠️ FCRA file disclosure max charge increased to $16.00 (from $15.50) effective Jan 1, 2026',
      '⚠️ CFPB reversed course on FCRA preemption (Oct 2025 interpretive rule) — federal FCRA now preempts state credit reporting laws including medical debt bans',
      '⚠️ CFPB medical debt rule VACATED by federal court (July 2025) — medical debt CAN still appear on credit reports as of April 2026',
      '⚠️ CFPB dismissed 6 FCRA/Reg V enforcement actions in early 2025 following administration change',
      'Free weekly credit reports from Equifax, Experian, TransUnion remain available (permanent since pandemic)',
      'Dispute investigation period remains 30 days (45 with consumer-provided info)',
      'Furnisher accuracy obligations under Section 623 unchanged',
      'Reasonable reinvestigation requirements under Section 611 unchanged',
    ],
    summary: 'Complete FCRA compliance framework for credit repair organizations. Covers permissible purposes, dispute rights, furnisher obligations, consumer disclosure requirements, and 2026 regulatory changes.',
    steps: [
      'Maintain current knowledge of FCRA requirements (15 U.S.C. §1681 et seq.)',
      'Verify permissible purpose before accessing any consumer credit report',
      'Follow Section 611 dispute procedures exactly (30-day investigation window)',
      'Document all disputes with certified mail tracking and timestamps',
      'Track bureau response deadlines and escalation triggers',
      'Maintain records for minimum 5 years per FCRA requirements',
      'Train all staff on FCRA quarterly (document training)',
      'Conduct monthly internal audits of dispute files for compliance',
      'Update dispute letter templates for 2026 fee/threshold changes',
      'Monitor CFPB enforcement actions and interpretive rules monthly',
    ],
    tools: ['CRM with FCRA tracking', 'Certified mail service (USPS)', 'Credit report APIs (Equifax, Experian, TransUnion)', 'Compliance training platform', 'Document management system'],
    kpis: ['100% disputes filed within 5 days of plan creation', '0 FCRA violations per quarter', '100% staff training completion', 'Monthly compliance audit score >95%'],
    templates: ['FCRA Dispute Letter (Bureau)', 'FCRA Dispute Letter (Furnisher)', 'Method of Verification Request', 'CFPB Complaint Template', 'Consumer Rights Disclosure', 'Staff Training Checklist'],
    agentInstructions: 'CRITICAL: Always verify FCRA compliance before any dispute action. Never access a credit report without permissible purpose. All disputes must be documented with certified mail. The 30-day investigation window is non-negotiable. Medical debt rule was vacated — medical debt still reportable as of April 2026. File disclosure max is now $16.00.',
  },
  {
    id: 'SOP-602', title: 'CROA Compliance & Client Contracts', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Compliance', lastUpdated: '2026-04-14',
    complianceStatus: 'critical',
    legalChanges2026: [
      '⚠️ Proposed federal bill (S.4144, 119th Congress) would require ALL credit repair orgs to be state-licensed',
      '⚠️ Proposed minimum $500 per violation liability under new CROA amendments',
      '⚠️ Proposed restrictions on submitting multiple disputes for same information',
      '⚠️ State law is now the PRIMARY compliance risk (March 2026) — CROA preserves state authority under 15 U.S.C. §1679j',
      'CROA core requirements unchanged: no advance payment, written contracts required, 3-day cancellation right',
      'FTC continues primary enforcement of CROA at federal level',
    ],
    summary: 'Complete CROA compliance system for credit repair operations. Covers contract requirements, advance payment prohibition, cancellation rights, prohibited practices, and state-level compliance overlay.',
    steps: [
      'Ensure ALL client contracts comply with CROA written contract requirements',
      'Include mandatory 3-business-day cancellation right in every contract',
      'NEVER collect payment before services are fully performed',
      'Provide required CROA disclosures before contract execution',
      'Include specific description of services to be performed',
      'Include performance timeline and completion criteria',
      'Include total cost and payment terms (post-service only)',
      'Maintain signed contracts for minimum 5 years',
      'Review contracts quarterly for state law changes',
      'Train all sales staff on CROA prohibitions',
    ],
    tools: ['Contract management system (PandaDoc, DocuSign)', 'CRM with contract tracking', 'State compliance database', 'Legal review schedule'],
    kpis: ['100% contracts include all CROA disclosures', '0 advance payment violations', '100% cancellation requests honored within 3 days', 'Quarterly contract review completed on time'],
    templates: ['Client Service Agreement (CROA-Compliant)', 'CROA Disclosure Statement', 'Cancellation Request Form', '3-Day Right to Cancel Notice', 'State Compliance Addendum'],
    agentInstructions: 'NEVER process payment before services are performed — this is the #1 CROA violation. Every client must receive the disclosure statement AND have 3 business days to cancel. Contracts must include: services description, timeline, total cost, cancellation right. Check state-specific requirements — state law is the bigger risk than federal CROA.',
  },
  {
    id: 'SOP-603', title: 'State Licensing & Registration', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Compliance', lastUpdated: '2026-04-14',
    complianceStatus: 'critical',
    legalChanges2026: [
      '⚠️ Proposed federal bill would mandate state licensing for ALL credit repair organizations',
      '⚠️ Oregon medical debt ban effective Jan 1, 2026 (SB 605) — cannot report medical debt to CRAs',
      '⚠️ California arbitration scope limited effective Jan 1, 2026 (SB 82) — arbitration limited to subject goods/services',
      '⚠️ Indiana data privacy statute effective Jan 1, 2026 (SB 5)',
      '⚠️ Kentucky data privacy statute effective Jan 1, 2026 (HB 15)',
      '⚠️ Rhode Island data privacy law effective Jan 1, 2026 (SB 2500)',
      'States requiring credit repair registration/licensing: TX, CA, GA, IL, MD, VA, OH, CO, FL, NY, and 25+ others',
      'Surety bond requirements vary $10K-$100K by state',
    ],
    summary: 'Multi-state licensing and registration compliance system. Covers all 50 states credit repair/credit services organization requirements, surety bonds, annual renewals, and new 2026 state-specific changes.',
    steps: [
      'Identify all states where company has clients (triggers registration)',
      'Research each states credit repair organization/CSO requirements',
      'Obtain required surety bonds ($10K-$100K depending on state)',
      'File registration/license applications in each required state',
      'Pay all filing fees and maintain proof of payment',
      'Set up renewal calendar (most states annual)',
      'Monitor for new state legislation quarterly',
      'Maintain compliance files organized by state',
      'Update registrations when company info changes',
      'Train staff on state-specific requirements for client interactions',
    ],
    tools: ['State licensing portals', 'NMLS (Nationwide Multistate Licensing System)', 'Surety bond providers', 'Harbor Compliance', 'CSO registration databases'],
    kpis: ['100% compliance in all operating states', '0 missed renewal deadlines', 'Surety bonds current in all required states', 'Quarterly state law review completed'],
    templates: ['State Registration Matrix (50-state)', 'Surety Bond Tracking Sheet', 'Renewal Calendar', 'State Compliance Checklist', 'New State Entry Protocol'],
    agentInstructions: 'Before serving any client, verify the company is properly licensed/registered in that clients state. States with the strictest requirements: California, Texas, Georgia, New York. Always check for surety bond requirements. Set renewal reminders 90 days before expiration.',
  },
  {
    id: 'SOP-604', title: 'Privacy & Data Security (GLBA/CCPA)', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Privacy', lastUpdated: '2026-04-14',
    complianceStatus: 'critical',
    legalChanges2026: [
      '⚠️ Indiana Consumer Data Protection Act effective Jan 1, 2026',
      '⚠️ Kentucky Consumer Data Protection Act effective Jan 1, 2026',
      '⚠️ Rhode Island Data Transparency and Privacy Protection Act effective Jan 1, 2026',
      '⚠️ CFPB FCRA preemption rule (Oct 2025) may affect state privacy laws interaction with credit reporting',
      'GLBA Safeguards Rule requirements remain in effect — annual risk assessment required',
      'CCPA/CPRA enforcement continues with expanded right to delete and opt-out',
      'Now 20+ states with comprehensive privacy laws (up from 15 in 2025)',
    ],
    summary: 'Comprehensive data privacy and security compliance framework covering GLBA, CCPA/CPRA, and all 2026 state privacy laws. Includes data handling procedures, breach response, and employee training requirements.',
    steps: [
      'Conduct annual GLBA risk assessment of all client data systems',
      'Implement data encryption at rest and in transit (AES-256 minimum)',
      'Maintain privacy policy compliant with GLBA, CCPA, and all applicable state laws',
      'Provide opt-out mechanisms for data sharing per CCPA/CPRA',
      'Implement data retention and destruction policies (5-year minimum for FCRA, then secure destruction)',
      'Conduct quarterly vulnerability scans and annual penetration testing',
      'Train all employees on data privacy annually (document training)',
      'Maintain incident response plan for data breaches',
      'Review and update privacy notices when laws change',
      'Implement access controls (principle of least privilege)',
    ],
    tools: ['Encryption tools (AES-256)', 'Privacy policy generators', 'Vulnerability scanning tools', 'Employee training platforms', 'Data classification tools', 'Incident response systems'],
    kpis: ['Annual GLBA risk assessment completed', '0 data breaches', '100% employee privacy training', 'Quarterly vulnerability scans completed', 'Privacy policy updated within 30 days of law changes'],
    templates: ['GLBA Privacy Policy', 'CCPA Privacy Notice', 'Data Breach Response Plan', 'Employee Privacy Training Checklist', 'Data Retention Schedule', 'Vendor Security Assessment'],
    agentInstructions: 'Handle ALL client data as if it were your own SSN. Encryption is mandatory. Never store credit report data unencrypted. With 3 new state privacy laws in 2026 (Indiana, Kentucky, Rhode Island), verify compliance before serving clients in those states. Data breach notification timelines vary by state — know your obligations.',
  },
  {
    id: 'SOP-605', title: 'Risk Management & Insurance', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Risk', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: ['E&O insurance premiums trending up 8-12% for credit repair industry in 2026', 'Cyber liability coverage now considered essential (not optional) post-2025 breach landscape'],
    summary: 'Enterprise risk management framework covering professional liability, cyber insurance, general liability, and risk mitigation strategies for credit repair operations.',
    steps: [
      'Obtain E&O (Errors & Omissions) insurance — minimum $1M/$2M coverage',
      'Obtain General Liability insurance — minimum $1M/$2M coverage',
      'Obtain Cyber Liability insurance — minimum $1M coverage',
      'Review and update all insurance annually (90 days before renewal)',
      'Maintain risk register with quarterly review',
      'Implement quality control checks to reduce E&O exposure',
      'Document all client interactions for liability protection',
      'Create and test business continuity plan',
    ],
    tools: ['Insurance brokers (specializing in financial services)', 'Risk assessment frameworks', 'Business continuity planning tools'],
    kpis: ['All required insurance current', 'Risk register reviewed quarterly', 'Business continuity plan tested annually', '0 uninsured claims'],
    templates: ['Risk Register', 'Insurance Coverage Summary', 'Business Continuity Plan', 'Incident Report Form'],
    agentInstructions: 'Every credit repair business needs: E&O, General Liability, and Cyber Liability at minimum. Surety bonds are separate (see SOP-603). Review coverage annually and increase limits as revenue grows. Document everything — your insurance is only as good as your records.',
  },
  {
    id: 'SOP-606', title: 'Legal Document Library', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Legal', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: ['All templates updated for 2026 regulatory changes', 'New state-specific addendums for Oregon, Indiana, Kentucky, Rhode Island'],
    summary: 'Centralized legal document management system with version-controlled templates for all business and compliance documents.',
    steps: [
      'Maintain centralized, version-controlled document repository',
      'Organize documents by category (Formation, Contracts, Compliance, HR, Operations)',
      'Review all templates quarterly for legal changes',
      'Track document versions with changelog',
      'Restrict editing access to authorized personnel only',
      'Maintain backup copies in secure cloud storage',
    ],
    tools: ['Document management system', 'Cloud storage (encrypted)', 'Version control system', 'Template library'],
    kpis: ['100% documents current and reviewed', 'Quarterly review completed on time', '0 unauthorized document modifications'],
    templates: ['Document Inventory Checklist', 'Template Review Schedule', 'Version Control Log'],
    agentInstructions: 'Always use the latest version of any template. Check the version date before sending any document to a client. If a template is older than 90 days, verify it against current law before use.',
  },
  {
    id: 'SOP-607', title: 'Audit Preparation & Record Keeping', phase: 1, phaseName: 'Legal & Regulatory Foundations',
    package: 'Compliance & Legal', category: 'Compliance', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: ['CFPB examination procedures updated Q4 2025', 'State attorney general investigations increasing in credit repair sector'],
    summary: 'Comprehensive audit preparation and record-keeping system ensuring readiness for regulatory examinations, state audits, and internal compliance reviews.',
    steps: [
      'Maintain all client records for minimum 5 years (FCRA requirement)',
      'Organize records by client, date, and document type',
      'Conduct quarterly internal audits using compliance checklist',
      'Maintain audit trail for all dispute activities',
      'Keep copies of all correspondence (sent and received)',
      'Document employee training records',
      'Prepare standing audit response kit',
      'Designate audit response team and protocol',
    ],
    tools: ['Document management system', 'Audit tracking software', 'Compliance checklist tools', 'Secure archive storage'],
    kpis: ['100% records retrievable within 24 hours', 'Quarterly audits completed on schedule', 'Audit response kit current', '0 findings of missing records'],
    templates: ['Internal Audit Checklist', 'Record Retention Schedule', 'Audit Response Protocol', 'Document Request Response Template'],
    agentInstructions: 'Records are your defense. If you cant prove you did it, you didnt do it. Maintain everything for 5 years minimum. Run quarterly self-audits. Have your audit response kit ready at all times — regulators can show up without warning.',
  },
  // ===== PHASE 2: FINANCIAL SYSTEMS =====
  {
    id: 'SOP-003', title: 'Financial Infrastructure Setup', phase: 2, phaseName: 'Financial Systems & Tax Strategy',
    package: 'Foundation', category: 'Finance', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: [
      'Qualified Principal Residence Indebtedness Exclusion EXPIRED Jan 1, 2026 (26 U.S.C. 108(a))',
      'Student loan discharge tax exclusion EXPIRED Jan 1, 2026 (American Rescue Plan)',
      'FHA loan limits 2026: $541,287 (low-cost) / $1,249,125 (high-cost)',
      'Conforming loan limits 2026: $832,750 (standard) / $1,249,125 (high-cost)',
    ],
    summary: 'Complete financial infrastructure setup including business banking, accounting systems, payment processing, tax strategy, and financial controls.',
    steps: [
      'Open business checking account (separate from personal)',
      'Open business savings account for tax reserves (30% of revenue)',
      'Set up accounting software (QuickBooks Online or Xero)',
      'Configure chart of accounts for credit repair business',
      'Set up payment processing (Stripe + backup processor)',
      'Implement expense tracking and receipt management',
      'Establish monthly close procedures',
      'Set up quarterly estimated tax payments',
      'Create financial reporting dashboard',
      'Hire bookkeeper or accountant (recommended at $10K+ monthly revenue)',
    ],
    tools: ['QuickBooks Online', 'Xero', 'Stripe', 'Square', 'Relay (business banking)', 'Mercury', 'Ramp (expense management)', 'Gusto (payroll)'],
    kpis: ['Monthly close completed by 10th of following month', 'Tax reserves at 30%+ of revenue', 'AR aging <30 days', 'Cash runway >3 months'],
    templates: ['Chart of Accounts (Credit Repair)', 'Monthly Close Checklist', 'Cash Flow Projection', 'P&L Template', 'Balance Sheet Template'],
    agentInstructions: 'Financial infrastructure is non-negotiable. Separate business and personal finances immediately. Set aside 30% for taxes from day one. Use Stripe for payment processing (CROA-compliant post-service billing). Monthly close by the 10th — no exceptions.',
  },
  {
    id: 'SOP-205', title: 'Payment Processing', phase: 2, phaseName: 'Financial Systems & Tax Strategy',
    package: 'Client Onboarding', category: 'Finance', lastUpdated: '2026-04-14',
    complianceStatus: 'critical',
    legalChanges2026: ['CROA advance payment prohibition strictly enforced — only charge AFTER services performed', 'California overdraft fees capped at $14 (AB 1075) effective Jan 1, 2026'],
    summary: 'CROA-compliant payment processing system ensuring services are performed before payment is collected.',
    steps: [
      'Configure payment processor for post-service billing ONLY (CROA compliance)',
      'Set up recurring billing tied to service completion milestones',
      'Implement payment failure retry logic (3 attempts over 7 days)',
      'Create refund policy and process (CROA cancellation rights)',
      'Set up payment reporting and reconciliation',
      'Maintain PCI DSS compliance for card data',
    ],
    tools: ['Stripe', 'Square', 'GoHighLevel', 'QuickBooks Payments'],
    kpis: ['0 advance payment violations', 'Payment collection rate >90%', 'Refund processing <48 hours', 'PCI compliance current'],
    templates: ['Payment Policy', 'Refund Request Form', 'Payment Schedule Template', 'PCI Compliance Checklist'],
    agentInstructions: 'CRITICAL: NEVER charge before services are performed. This is CROA law. Set up milestone-based billing — charge only after each round of disputes is completed and results are delivered to the client.',
  },
  {
    id: 'SOP-206', title: 'Contract & Agreement Management', phase: 2, phaseName: 'Financial Systems & Tax Strategy',
    package: 'Client Onboarding', category: 'Legal', lastUpdated: '2026-04-14',
    complianceStatus: 'critical',
    legalChanges2026: ['CROA contract requirements unchanged but enforcement increasing', 'California arbitration scope limited (SB 82) effective Jan 1, 2026', 'Maryland statute of limitations protections effective June 1, 2026 (HB 431)'],
    summary: 'Contract lifecycle management for all client agreements, ensuring CROA compliance and state-specific requirements.',
    steps: [
      'Use CROA-compliant contract template for all new clients',
      'Include all mandatory disclosures before contract execution',
      'Ensure 3-day cancellation right is prominently displayed',
      'Obtain electronic signatures with audit trail',
      'Store executed contracts in secure document management system',
      'Track contract status and renewal dates',
      'Review contracts for state-specific addendums',
      'Process cancellations within 3 business days',
    ],
    tools: ['PandaDoc', 'DocuSign', 'HelloSign', 'Contract management CRM'],
    kpis: ['100% contracts include all required disclosures', '100% cancellations processed within 3 days', '0 unsigned contracts in active files'],
    templates: ['Client Service Agreement', 'CROA Disclosure', 'Cancellation Form', 'State Addendum Library'],
    agentInstructions: 'Every client gets a signed contract BEFORE any work begins. The contract must include: description of services, total cost, performance timeline, 3-day cancellation right, and all CROA disclosures. No exceptions.',
  },
  // ===== PHASE 3: STRATEGIC PLANNING =====
  {
    id: 'SOP-004', title: 'Strategic Plan (5-Year)', phase: 3, phaseName: 'Strategic Planning & Growth',
    package: 'Foundation', category: 'Strategy', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: [],
    summary: 'Comprehensive 5-year strategic planning framework covering vision, mission, SWOT analysis, revenue targets, scaling milestones, and exit strategy.',
    steps: [
      'Define 5-year vision and mission statement',
      'Conduct SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)',
      'Set annual revenue targets with growth rate assumptions',
      'Define scaling milestones (clients, team size, markets)',
      'Create product/service roadmap',
      'Develop competitive moat strategy',
      'Plan exit strategy (if applicable)',
      'Review and update plan quarterly',
    ],
    tools: ['Strategic planning frameworks', 'Financial modeling (Excel/Sheets)', 'OKR tracking tools', 'Competitive intelligence platforms'],
    kpis: ['Annual revenue growth >50%', 'Client retention >85%', 'Team growth aligned with plan', 'Quarterly plan review completed'],
    templates: ['5-Year Strategic Plan', 'SWOT Analysis', 'Revenue Projection Model', 'Scaling Milestone Tracker', 'Quarterly Review Template'],
    agentInstructions: 'Strategic planning is living — review quarterly, adjust annually. Use OKR framework for execution. Revenue targets should be aggressive but achievable. Always maintain 3-month cash runway.',
  },
  {
    id: 'SOP-014', title: 'Fundraising & Investor Relations', phase: 3, phaseName: 'Strategic Planning & Growth',
    package: 'Foundation', category: 'Finance', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: ['SEC continues focus on Reg D compliance for private offerings'],
    summary: 'Complete fundraising playbook from bootstrapping through institutional investment, including pitch deck creation, investor outreach, due diligence preparation, and cap table management.',
    steps: [
      'Determine funding needs and use of funds',
      'Evaluate funding options (bootstrap, angel, VC, SBA loans, revenue-based)',
      'Prepare investor-ready financials (audited P&L, balance sheet, projections)',
      'Create compelling pitch deck (10-15 slides)',
      'Build investor pipeline and outreach strategy',
      'Prepare data room for due diligence',
      'Negotiate terms and close funding',
      'Set up investor reporting cadence',
    ],
    tools: ['Pitch deck tools (Beautiful.ai, Canva)', 'Data room (DocSend, Google Drive)', 'Cap table (Carta, Pulley)', 'CRM for investor pipeline'],
    kpis: ['Pitch deck conversion rate >20%', 'Due diligence completed <30 days', 'Monthly investor updates sent on time'],
    templates: ['Pitch Deck Template', 'Financial Model', 'Due Diligence Checklist', 'Investor Update Template', 'Term Sheet Comparison'],
    agentInstructions: 'Most credit repair businesses should bootstrap first. Validate to $50K MRR before seeking outside capital. If fundraising, prepare a data room 30 days before outreach. SBA loans are often better than equity for service businesses.',
  },
  // ===== PHASE 4: HUMAN CAPITAL =====
  {
    id: 'SOP-011', title: 'Team Building & HR Systems', phase: 4, phaseName: 'Human Capital & Org Development',
    package: 'Foundation', category: 'HR', lastUpdated: '2026-04-14',
    complianceStatus: 'current',
    legalChanges2026: ['Minimum wage increases in 19 states effective Jan 1, 2026', 'Illinois coerced debt protections effective Jan 1, 2026 (Pub. Act 104-0297)', 'Colorado junk fees prohibition effective Jan 1, 2026 (HB 25-1090)'],
    summary: 'Complete HR infrastructure from first hire through team scaling. Covers org structure, hiring, onboarding, compensation, and performance management.',
    steps: ['Define organizational chart and roles for current stage', 'Create job descriptions for all positions', 'Set up HR systems (payroll, benefits, compliance)', 'Develop compensation structure', 'Create employee handbook', 'Implement performance review process', 'Set up team communication tools', 'Create training and development programs'],
    tools: ['Gusto (payroll/HR)', 'BambooHR', 'Slack/Teams', 'Notion (docs)', 'Loom (training)', '15Five (performance)'],
    kpis: ['Time-to-hire <30 days', 'Employee retention >80%', '90-day new hire satisfaction >85%', 'Training completion rate 100%'],
    templates: ['Org Chart Template', 'Job Description Library', 'Employee Handbook', 'Offer Letter Template', 'Performance Review Form'],
    agentInstructions: 'Hire in this order: 1) Customer Success Manager, 2) Dispute Coordinator, 3) SDR (Sales), 4) Admin. Dont hire ahead of revenue — each hire should be justified by client volume.',
  },
  {
    id: 'SOP-501', title: 'Team Structure & Roles', phase: 4, phaseName: 'Human Capital & Org Development',
    package: 'Operations & Team', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Detailed team structure for each growth stage: Solo (0-25 clients), Small Team (50-100), Full Team (200-400), Scale Team (400+).',
    steps: ['Map current client volume to team size recommendation', 'Define roles and responsibilities for each position', 'Create reporting structure', 'Set capacity limits per role', 'Plan hiring triggers based on client growth'],
    tools: ['Org chart tools', 'Project management (Asana, ClickUp)', 'Capacity planning spreadsheet'],
    kpis: ['Client-to-staff ratio within targets', 'No role has >80% capacity utilization', 'All roles have documented SOPs'],
    templates: ['Role Matrix by Growth Stage', 'Capacity Planning Tool', 'Hiring Trigger Checklist'],
    agentInstructions: 'Solo: Rick handles everything (max 25 clients). 3-4 people: Add CSM + Dispute Coordinator + SDR (max 100). 8-10: Full team with department heads (max 400). Scale: Multiple team leads, dedicated compliance officer.',
  },
  {
    id: 'SOP-502', title: 'Hiring & Recruiting', phase: 4, phaseName: 'Human Capital & Org Development', package: 'Operations & Team', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Remote work nexus continues to trigger multi-state compliance obligations'],
    summary: 'Structured hiring process from job posting through onboarding. Includes sourcing channels, interview frameworks, and offer procedures.',
    steps: ['Post job on relevant platforms', 'Screen resumes against must-have criteria', 'Conduct phone screen (15 min)', 'Skills assessment or work sample', 'Panel interview with hiring manager + team member', 'Reference checks (minimum 2)', 'Background check (credit repair industry requires clean record)', 'Extend offer and negotiate', 'Begin onboarding (SOP-503)'],
    tools: ['Indeed', 'LinkedIn Jobs', 'ZipRecruiter', 'Greenhouse', 'Checkr (background)'],
    kpis: ['Time-to-hire <21 days', 'Offer acceptance rate >80%', 'Quality of hire score >4/5 at 90 days'],
    templates: ['Job Posting Templates', 'Interview Scorecard', 'Offer Letter', 'Background Check Authorization'],
    agentInstructions: 'For credit repair roles, prioritize: FCRA knowledge, attention to detail, communication skills. Background checks are mandatory — candidates with certain financial offenses may be disqualified by state regulators.',
  },
  {
    id: 'SOP-503', title: 'Employee Onboarding & Training', phase: 4, phaseName: 'Human Capital & Org Development', package: 'Operations & Team', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Structured 90-day onboarding program with compliance training, systems access, and performance milestones.',
    steps: ['Pre-boarding: Send welcome kit, system access, first-day agenda', 'Day 1: Company overview, culture, compliance training', 'Week 1: Role-specific training with mentor assignment', 'Week 2-4: Shadowing and supervised work', 'Day 30: First check-in and feedback session', 'Day 60: Increased autonomy with spot checks', 'Day 90: Full performance review and role confirmation'],
    tools: ['Loom (video training)', 'Notion (SOPs)', 'LMS platform', 'Slack (communication)'],
    kpis: ['30-day competency assessment score >80%', '90-day retention rate >90%', 'Training completion rate 100%'],
    templates: ['Onboarding Checklist', 'Training Schedule', '30-60-90 Day Plan', 'Competency Assessment'],
    agentInstructions: 'FCRA and CROA compliance training is mandatory during Week 1. No employee touches client data until compliance training is complete and documented. Assign a mentor for the first 30 days.',
  },
  {
    id: 'SOP-504', title: 'Team KPIs & Performance Management', phase: 4, phaseName: 'Human Capital & Org Development', package: 'Operations & Team', category: 'HR', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Performance management framework with role-specific KPIs, review cadence, and improvement plans.',
    steps: ['Define role-specific KPIs for each position', 'Set quarterly OKRs aligned with company goals', 'Conduct weekly 1:1s with direct reports', 'Monthly team performance dashboard review', 'Quarterly performance reviews with written feedback', 'Annual compensation review', 'Performance improvement plans when needed'],
    tools: ['15Five', 'Lattice', 'Google Sheets dashboards', 'Slack standups'],
    kpis: ['Weekly 1:1 completion rate 100%', 'Quarterly review completion rate 100%', 'Team KPI achievement >80%'],
    templates: ['KPI Dashboard by Role', 'Performance Review Form', 'PIP Template', 'OKR Planning Sheet'],
    agentInstructions: 'Key KPIs by role: Dispute Coordinator (disputes filed/week, accuracy rate, bureau response rate). CSM (client satisfaction, retention rate, upsell rate). SDR (calls/day, appointments set, conversion rate).',
  },
  {
    id: 'SOP-505', title: 'Quality Assurance & Audit System', phase: 4, phaseName: 'Human Capital & Org Development', package: 'Operations & Team', category: 'Operations', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Internal QA system for monitoring dispute quality, compliance adherence, and client satisfaction.',
    steps: ['Random audit 10% of dispute files weekly', 'Score disputes on accuracy, compliance, completeness', 'Track error rates by employee', 'Conduct monthly compliance spot checks', 'Client satisfaction surveys after each round', 'Quarterly full compliance audit', 'Corrective action for repeated errors'],
    tools: ['QA scoring system', 'CRM reporting', 'Survey tools (Typeform)', 'Audit tracking spreadsheet'],
    kpis: ['Dispute accuracy rate >95%', 'Compliance audit score >95%', 'Client satisfaction >4.5/5', 'Error rate <5%'],
    templates: ['QA Scorecard', 'Audit Checklist', 'Client Survey Template', 'Corrective Action Form'],
    agentInstructions: 'Quality is non-negotiable. Audit 10% of files weekly. Any dispute with errors must be corrected before sending. Track error patterns — if an employee consistently scores below 90%, initiate additional training.',
  },
  {
    id: 'SOP-506', title: 'Team Communication & Collaboration', phase: 4, phaseName: 'Human Capital & Org Development', package: 'Operations & Team', category: 'Operations', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Team communication framework including meeting cadence, tools, escalation procedures, and documentation standards.',
    steps: ['Set up Slack workspace with organized channels', 'Establish meeting cadence (daily standup, weekly team, monthly all-hands)', 'Create escalation procedures for urgent issues', 'Implement documentation standards for all decisions', 'Set up shared knowledge base (Notion or wiki)'],
    tools: ['Slack', 'Zoom', 'Notion', 'Loom', 'Google Workspace'],
    kpis: ['Daily standup attendance >95%', 'Response time <2 hours during business hours', 'Knowledge base articles updated monthly'],
    templates: ['Meeting Agenda Templates', 'Escalation Matrix', 'Communication Policy', 'Knowledge Base Structure'],
    agentInstructions: 'Communication structure: Daily 15-min standup, weekly 30-min team sync, monthly 60-min all-hands. Use Slack for async, Zoom for sync. Document everything in Notion.',
  },
  // ===== PHASE 5: OPERATIONS & TECH =====
  {
    id: 'SOP-006', title: 'Website & Digital Presence', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Foundation', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current',
    legalChanges2026: ['California social media account deletion (AB 656) effective Jan 1, 2026', 'ADA website accessibility lawsuits continue increasing in 2026'],
    summary: 'Complete website and digital presence setup including design, development, SEO, and compliance requirements for credit repair businesses.',
    steps: ['Design professional website with clear value proposition', 'Implement CROA-required disclosures on website', 'Set up SSL certificate and security headers', 'Create service pages, about page, testimonials, contact', 'Implement live chat or chatbot for lead capture', 'Set up Google Business Profile', 'Claim all social media profiles', 'Implement analytics (GA4, Facebook Pixel)', 'Ensure ADA/WCAG 2.1 AA compliance', 'Set up blog for content marketing'],
    tools: ['WordPress/Webflow/Custom', 'Google Analytics 4', 'Google Business Profile', 'Canva', 'Hotjar'],
    kpis: ['Website load time <3 seconds', 'Mobile responsive score >90', 'Monthly organic traffic growth >10%', 'Conversion rate >3%'],
    templates: ['Website Wireframe', 'Content Calendar', 'SEO Checklist', 'Compliance Badge Library'],
    agentInstructions: 'Every credit repair website MUST include: CROA disclosures, privacy policy, terms of service, and clear pricing (no deceptive claims). ADA compliance is increasingly enforced — use WCAG 2.1 AA standards.',
  },
  {
    id: 'SOP-007', title: 'Marketing System Architecture', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Foundation', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['FTC endorsement guides updated — stricter influencer disclosure requirements', 'TCPA consent revocation rule delayed to Jan 31, 2027 (FCC)'],
    summary: 'End-to-end marketing system design covering SEO, paid advertising, social media, email marketing, and conversion optimization.',
    steps: ['Define marketing funnel (Awareness → Interest → Decision → Action)', 'Set up SEO strategy and content calendar', 'Configure paid advertising (Google Ads, Meta Ads)', 'Design social media content strategy', 'Build email marketing automation', 'Implement conversion optimization system', 'Set up attribution and tracking', 'Create marketing budget allocation'],
    tools: ['SEMrush/Ahrefs', 'Google Ads', 'Meta Business Suite', 'ActiveCampaign/GoHighLevel', 'Google Analytics 4', 'Hotjar'],
    kpis: ['CAC (Customer Acquisition Cost) <$150', 'Marketing ROI >3x', 'Email open rate >25%', 'Social engagement rate >3%'],
    templates: ['Marketing Plan Template', 'Content Calendar', 'Ad Copy Library', 'Email Sequence Templates'],
    agentInstructions: 'Marketing for credit repair has strict rules: No guaranteed outcomes, no false testimonials, CROA disclosures required. TCPA consent revocation rule delayed — but still get explicit consent for all calls/texts. Focus on education-first content marketing.',
  },
  {
    id: 'SOP-009', title: 'Operations & Delivery Systems', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Foundation', category: 'Operations', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Operational workflow design for credit repair service delivery. Covers client journey from onboarding through dispute resolution and graduation.',
    steps: ['Map end-to-end client journey', 'Define SLAs for each stage', 'Set up workflow automation in CRM', 'Create standard dispute timelines', 'Implement quality checkpoints', 'Design escalation procedures', 'Build reporting dashboards', 'Continuous process improvement (monthly review)'],
    tools: ['GoHighLevel', 'Monday.com', 'Asana', 'Zapier', 'Custom dashboards'],
    kpis: ['Client onboarding <48 hours', 'First dispute round <7 days from onboarding', 'Bureau response tracking 100%', 'Client update frequency (monthly minimum)'],
    templates: ['Client Journey Map', 'SLA Matrix', 'Escalation Flowchart', 'Operations Dashboard'],
    agentInstructions: 'Operations timeline: Day 1-2 (onboarding + credit pull), Day 3-5 (analysis + dispute plan), Day 6-7 (Round 1 disputes filed). Then 30-day cycles for each subsequent round. Never let a client go more than 30 days without a status update.',
  },
  {
    id: 'SOP-010', title: 'Technology Stack Selection', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Foundation', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Technology stack recommendation and implementation guide for credit repair businesses at each growth stage.',
    steps: ['Assess current technology needs vs. growth stage', 'Select CRM (GoHighLevel, Credit Repair Cloud, or custom)', 'Set up communication tools (VoIP, SMS, email)', 'Implement document management', 'Set up payment processing integration', 'Configure automation workflows', 'Implement data backup and security', 'Train team on all systems'],
    tools: ['GoHighLevel (CRM + marketing)', 'Credit Repair Cloud', 'RingCentral/Dialpad (VoIP)', 'Twilio (SMS)', 'Stripe (payments)', 'Google Workspace'],
    kpis: ['System uptime >99.9%', 'Team adoption rate >90%', 'Automation coverage >60% of repetitive tasks'],
    templates: ['Tech Stack Comparison Matrix', 'Implementation Timeline', 'Training Guide', 'System Configuration Checklist'],
    agentInstructions: 'Startup stage: GoHighLevel + Stripe + Google Workspace. Growth stage: Add Credit Repair Cloud or custom CRM. Scale stage: Custom integrations, API connections, dedicated dev team. Always prioritize security and GLBA compliance in tech choices.',
  },
  // Client Onboarding SOPs
  {
    id: 'SOP-201', title: 'Onboarding Call System', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Client Onboarding', category: 'Onboarding', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['TCPA consent revocation rule delayed to Jan 31, 2027'],
    summary: 'Structured onboarding call framework for new credit repair clients. Covers expectations setting, information gathering, and next steps.',
    steps: ['Schedule onboarding call within 24 hours of contract signing', 'Confirm contract signed and disclosures received', 'Gather personal information for credit pull', 'Set expectations for timeline and process', 'Explain communication preferences and frequency', 'Obtain authorization for credit report access', 'Schedule first progress check-in', 'Send welcome email with portal login'],
    tools: ['Zoom/Phone', 'CRM', 'Calendar scheduling (Calendly)', 'Email automation'],
    kpis: ['Onboarding call within 24 hours', 'Call duration 30-45 minutes', 'Client satisfaction >4.5/5', 'All required info collected on first call'],
    templates: ['Onboarding Call Script', 'Client Information Form', 'Welcome Email Template', 'Expectations Guide'],
    agentInstructions: 'The onboarding call sets the tone. Be professional, thorough, and set realistic expectations. Never promise specific score increases or timelines. Collect ALL needed information on the first call to avoid delays.',
  },
  {
    id: 'SOP-202', title: 'Credit Report Analysis', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Client Onboarding', category: 'Analysis', lastUpdated: '2026-04-14', complianceStatus: 'critical',
    legalChanges2026: ['FCRA file disclosure max $16.00 effective Jan 1, 2026', 'Medical debt rule vacated — medical debt still reportable', 'Free weekly reports from all 3 bureaus remain available'],
    summary: 'Systematic credit report analysis methodology for identifying errors, inaccuracies, and disputable items across all three bureaus.',
    steps: ['Pull credit reports from all 3 bureaus (Equifax, Experian, TransUnion)', 'Review personal information section for errors', 'Analyze each tradeline for accuracy (dates, balances, status)', 'Identify potential FCRA violations', 'Flag medical debt items (still reportable post-July 2025 ruling)', 'Check for duplicate accounts across bureaus', 'Verify inquiry authorization', 'Document all findings in analysis report', 'Prioritize disputes by impact and likelihood of success', 'Create dispute plan (SOP-203)'],
    tools: ['Credit report APIs', 'Analysis spreadsheet', 'CRM dispute tracking', 'AnnualCreditReport.com'],
    kpis: ['Analysis completed within 48 hours of credit pull', 'All 3 bureaus analyzed', 'Dispute items documented with evidence', 'Client receives analysis summary within 3 days'],
    templates: ['Credit Report Analysis Worksheet', 'Dispute Priority Matrix', 'Client Analysis Summary', 'Error Classification Guide'],
    agentInstructions: 'Analyze ALL three bureaus — never just one. Check: personal info errors, account status accuracy, date accuracy, balance accuracy, duplicate accounts, unauthorized inquiries. Medical debt IS still reportable as of April 2026 — the CFPB rule was vacated. Document everything with specifics.',
  },
  {
    id: 'SOP-203', title: 'Dispute Plan Creation', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Client Onboarding', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Strategic dispute plan development based on credit report analysis. Covers prioritization, strategy selection, and timeline planning.',
    steps: ['Review credit report analysis (SOP-202)', 'Prioritize items by credit score impact', 'Select dispute strategy for each item (factual, not mine, legal basis)', 'Assign disputes to appropriate bureau(s)', 'Create timeline for dispute rounds', 'Document legal basis for each dispute', 'Present plan to client for approval', 'Begin Round 1 execution (SOP-302)'],
    tools: ['Dispute planning software', 'CRM', 'Template library'],
    kpis: ['Plan created within 72 hours of analysis', 'Client approval within 48 hours of plan presentation', 'All disputes have documented legal basis'],
    templates: ['Dispute Plan Template', 'Strategy Selection Guide', 'Client Plan Presentation', 'Legal Basis Reference'],
    agentInstructions: 'Every dispute must have a legitimate legal basis — never file frivolous disputes. Prioritize items with highest credit score impact first. Present the plan to the client clearly and get their approval before executing.',
  },
  {
    id: 'SOP-204', title: 'Client Portal Setup', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Client Onboarding', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Client portal configuration for self-service access to dispute status, documents, and communication.',
    steps: ['Create client account in portal system', 'Configure access permissions', 'Upload initial documents (contract, analysis, plan)', 'Set up automated status update notifications', 'Provide login credentials securely', 'Train client on portal usage during onboarding call'],
    tools: ['GoHighLevel', 'Credit Repair Cloud', 'Custom portal'],
    kpis: ['Portal set up within 24 hours of onboarding', 'Client login within 48 hours', 'Monthly active portal usage >70%'],
    templates: ['Portal Welcome Guide', 'FAQ for Clients', 'Portal Training Script'],
    agentInstructions: 'Every client gets portal access. Upload documents in real-time. Clients who use the portal have 30% higher retention — encourage adoption during onboarding.',
  },
  {
    id: 'SOP-207', title: 'Client Communication System', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Client Onboarding', category: 'Communication', lastUpdated: '2026-04-14', complianceStatus: 'current',
    legalChanges2026: ['FCC TCPA consent revocation rule delayed to Jan 31, 2027', 'Always get explicit written consent before texting/calling'],
    summary: 'Multi-channel client communication framework covering email, SMS, phone, and portal messaging with compliance guardrails.',
    steps: ['Establish communication preferences during onboarding', 'Set up automated status update emails (after each round)', 'Configure SMS notifications for key milestones', 'Schedule monthly check-in calls', 'Document all communications in CRM', 'Maintain opt-in/opt-out records for compliance'],
    tools: ['GoHighLevel', 'Twilio', 'RingCentral', 'Email automation'],
    kpis: ['Monthly client touchpoints >2', 'Response time <4 hours during business hours', 'Client satisfaction with communication >4.5/5'],
    templates: ['Communication Calendar', 'Email Templates Library', 'SMS Templates', 'Call Scripts'],
    agentInstructions: 'Communication frequency: minimum 1 update per month, more during active dispute rounds. Always document calls in CRM. Get written consent for SMS. The TCPA rule is delayed but best practice is explicit consent for everything.',
  },
  // Dispute Execution SOPs
  {
    id: 'SOP-301', title: 'Dispute Letter Generation System', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'critical',
    legalChanges2026: ['Proposed CROA amendment would restrict multiple disputes for same information', 'All dispute letters must reference current FCRA provisions'],
    summary: 'Automated dispute letter generation system with templates for bureau disputes, furnisher disputes, and specialized situations.',
    steps: ['Select dispute type and target (bureau vs. furnisher)', 'Choose appropriate template based on dispute reason', 'Customize letter with client-specific information and evidence', 'Include all required legal citations (FCRA sections)', 'QA review before sending', 'Generate certified mail labels', 'Log letter in CRM with tracking number'],
    tools: ['Dispute letter software', 'Template library', 'CRM integration', 'Certified mail system'],
    kpis: ['Letter generation <24 hours from plan approval', 'QA pass rate >95%', 'All letters include proper legal citations', 'Certified mail tracking for 100% of letters'],
    templates: ['Bureau Dispute Letter (Generic)', 'Bureau Dispute Letter (Factual)', 'Furnisher Direct Dispute', 'Method of Verification Request', 'CFPB Complaint Template', 'Attorney General Complaint'],
    agentInstructions: 'Every dispute letter must be unique to the client and specific to the item being disputed. Never use identical form letters for different clients — bureaus flag these. Include the specific FCRA section being invoked. Always send certified mail with return receipt.',
  },
  {
    id: 'SOP-302', title: 'Round 1 Dispute Strategy', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'First-round dispute strategy focusing on easy wins, obvious errors, and establishing the dispute record.',
    steps: ['Focus on obvious errors and inaccuracies first', 'Dispute personal information errors separately', 'One dispute reason per letter per item (clarity)', 'Target all 3 bureaus simultaneously for same items', 'Include supporting documentation where available', 'Mail all letters via certified mail on same day', 'Set 35-day follow-up reminder (30 days + mail time)', 'Log everything in CRM'],
    tools: ['Dispute letter system', 'Certified mail', 'CRM', 'Calendar reminders'],
    kpis: ['Round 1 filed within 7 days of plan approval', 'All 3 bureaus targeted', 'Response tracking 100%', 'Round 1 success rate >30%'],
    templates: ['Round 1 Letter Templates', 'Mailing Checklist', 'Response Tracking Sheet'],
    agentInstructions: 'Round 1 strategy: Start with the easiest wins — obvious errors, outdated info, unverifiable accounts. One reason per dispute per letter. Send to all 3 bureaus on the same day. Set a 35-day timer for follow-up.',
  },
  {
    id: 'SOP-303', title: 'Bureau-Specific Dispute Tactics', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Tailored dispute approaches for each credit bureau based on their specific processes, response patterns, and escalation paths.',
    steps: ['Equifax: Use specific dispute portal OR certified mail', 'Experian: Certified mail preferred (online disputes harder to escalate)', 'TransUnion: Online or mail, responsive to method of verification requests', 'Track response patterns per bureau', 'Adjust strategy based on bureau-specific success rates', 'Document bureau-specific requirements and quirks'],
    tools: ['Bureau dispute portals', 'Certified mail', 'Tracking database'],
    kpis: ['Bureau-specific success rates tracked monthly', 'Strategy adjusted based on data quarterly'],
    templates: ['Equifax Dispute Guide', 'Experian Dispute Guide', 'TransUnion Dispute Guide', 'Bureau Comparison Matrix'],
    agentInstructions: 'Each bureau responds differently. Experian is often hardest — always use certified mail. Equifax responds well to detailed disputes. TransUnion is most responsive to MOV requests. Track your success rates per bureau and adjust strategy.',
  },
  {
    id: 'SOP-304', title: 'Creditor Direct Disputes', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Direct dispute process with creditors/furnishers under FCRA Section 623, bypassing credit bureaus.',
    steps: ['Identify the furnisher (creditor, collection agency)', 'Research furnisher dispute address and process', 'Draft furnisher direct dispute letter citing FCRA §623', 'Include specific errors and evidence', 'Send via certified mail', 'Track 30-day response deadline', 'Escalate to CFPB if no response or inadequate investigation'],
    tools: ['Furnisher database', 'Certified mail', 'CFPB complaint portal', 'CRM'],
    kpis: ['Direct disputes filed when bureau disputes fail', 'Response rate tracked', 'Escalation to CFPB when warranted'],
    templates: ['Furnisher Direct Dispute Letter', 'FCRA §623 Reference Sheet', 'CFPB Complaint Template'],
    agentInstructions: 'Direct disputes go to the creditor/furnisher, not the bureau. Use FCRA §623 as your legal basis. This is often more effective than bureau disputes for stubborn items. Always escalate to CFPB if the furnisher ignores you.',
  },
  {
    id: 'SOP-305', title: 'Inquiry Removal Process', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Process for removing unauthorized hard inquiries from credit reports.',
    steps: ['Identify all hard inquiries on credit reports', 'Verify which inquiries client authorized', 'For unauthorized inquiries: dispute directly with the creditor who pulled', 'Send inquiry removal letter citing FCRA §604 (permissible purpose)', 'Follow up after 30 days', 'If denied: file FTC complaint', 'Soft inquiries do not affect scores — educate client'],
    tools: ['Credit reports', 'Inquiry tracking sheet', 'Certified mail', 'FTC complaint portal'],
    kpis: ['Unauthorized inquiries identified within 48 hours of analysis', 'Removal success rate tracked'],
    templates: ['Inquiry Removal Letter', 'Authorization Verification Form'],
    agentInstructions: 'Only HARD inquiries affect credit scores. Only dispute inquiries the client did NOT authorize. Cite FCRA §604 (permissible purpose). Soft inquiries are NOT disputable and do NOT affect scores — explain this to clients clearly.',
  },
  {
    id: 'SOP-306', title: 'Dispute Letter Mailing & Tracking', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Systematic mailing and tracking process for all dispute correspondence.',
    steps: ['Print dispute letters on professional letterhead', 'Include all supporting documents as enclosures', 'Send ALL dispute letters via USPS Certified Mail with Return Receipt', 'Record tracking numbers in CRM', 'Set 35-day follow-up reminder for each letter', 'Monitor delivery confirmation', 'File return receipts in client folder', 'Escalate if delivery fails'],
    tools: ['USPS Certified Mail', 'CRM tracking', 'Calendar reminders'],
    kpis: ['100% certified mail (no regular mail)', '100% tracking numbers recorded', 'Follow-up set for every letter'],
    templates: ['Mailing Log Template', 'Tracking Number Sheet', 'Certified Mail Label Generator'],
    agentInstructions: 'ALWAYS use certified mail with return receipt requested. This is your PROOF the dispute was sent. No certified mail = no proof = no legal standing. Record every tracking number in the CRM immediately.',
  },
  {
    id: 'SOP-307', title: 'Bureau Response Processing', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Process for handling bureau responses to disputes including verification, deletion, and escalation paths.',
    steps: ['Open and scan all bureau response letters', 'Compare response to original dispute', 'Categorize result: Deleted, Updated, Verified, No Response', 'For Deleted: Update client file, notify client, celebrate', 'For Updated: Verify accuracy of update', 'For Verified: Escalate to Round 2+ strategy (SOP-308)', 'For No Response (>30 days): Bureau violated FCRA — escalate', 'Update CRM with all results', 'Generate client progress report'],
    tools: ['CRM', 'Document scanner', 'Client portal', 'Reporting tools'],
    kpis: ['All responses processed within 48 hours of receipt', 'Client notified within 24 hours of result', 'Response tracking 100% complete'],
    templates: ['Response Processing Checklist', 'Client Progress Report', 'Escalation Decision Matrix'],
    agentInstructions: 'Process every bureau response within 48 hours. If a bureau fails to respond within 30 days, they have violated FCRA — this is leverage for escalation. Always update the client promptly. Track deletion rates to measure effectiveness.',
  },
  {
    id: 'SOP-308', title: 'Round 2+ Strategy (MOV/CFPB/Attorney)', phase: 5, phaseName: 'Operations & Tech Stack', package: 'Dispute Execution', category: 'Disputes', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['CFPB dismissed 6 FCRA enforcement actions in early 2025 — but CFPB complaints still effective for individual cases'],
    summary: 'Advanced dispute strategies for items that survive Round 1 including Method of Verification requests, CFPB complaints, and attorney involvement.',
    steps: [
      'Round 2: Send Method of Verification (MOV) request to bureau',
      'If bureau cant provide verification method: item must be deleted per FCRA',
      'Round 3: File CFPB complaint against bureau and/or furnisher',
      'CFPB complaints trigger separate investigation with different team',
      'Round 4: Consider attorney referral for FCRA litigation',
      'Attorneys can seek statutory damages ($100-$1,000 per violation) plus attorneys fees',
      'Document all rounds and responses for potential litigation',
      'Evaluate cost/benefit of continued disputes vs. other strategies',
    ],
    tools: ['MOV letter templates', 'CFPB complaint portal (consumerfinance.gov)', 'Attorney network', 'CRM'],
    kpis: ['MOV requests filed for all Round 1 verified items', 'CFPB complaints filed for persistent violations', 'Attorney referral when damages justify litigation'],
    templates: ['Method of Verification Request', 'CFPB Complaint Template', 'Attorney Referral Form', 'Litigation Cost/Benefit Analysis'],
    agentInstructions: 'Escalation ladder: Round 1 (direct dispute) → Round 2 (MOV request) → Round 3 (CFPB complaint) → Round 4 (attorney/litigation). Each round is more aggressive. MOV requests are powerful — if the bureau cant explain HOW they verified, the item must be deleted. CFPB complaints get attention even with reduced enforcement.',
  },
  // ===== PHASE 6: MARKETING & SALES =====
  {
    id: 'SOP-005', title: 'Brand Identity & Positioning', phase: 6, phaseName: 'Marketing & Sales', package: 'Foundation', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Complete brand identity system including visual identity, brand voice, positioning strategy, and brand guidelines.',
    steps: ['Define brand mission, vision, and values', 'Create brand positioning statement', 'Design visual identity (logo, colors, typography)', 'Develop brand voice and tone guidelines', 'Create brand guidelines document', 'Apply branding consistently across all channels', 'Train team on brand standards'],
    tools: ['Canva', 'Figma', 'Brand guidelines tools', 'Style guide generators'],
    kpis: ['Brand consistency score >90% across channels', 'Brand recognition metrics tracked quarterly'],
    templates: ['Brand Guidelines', 'Brand Voice Guide', 'Visual Identity Kit', 'Brand Audit Checklist'],
    agentInstructions: 'Brand = trust in credit repair. Position as: Professional, Transparent, Results-driven, Compliant. Never use language that guarantees outcomes. Focus on education and empowerment in all branding.',
  },
  {
    id: 'SOP-008', title: 'Sales Infrastructure & Process', phase: 6, phaseName: 'Marketing & Sales', package: 'Foundation', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current',
    legalChanges2026: ['CROA prohibits false/misleading sales representations', 'No guaranteeing specific credit score improvements'],
    summary: 'Complete sales infrastructure from lead qualification through closing. Includes scripts, objection handling, and CROA-compliant sales practices.',
    steps: ['Set up sales pipeline in CRM', 'Create lead qualification criteria', 'Develop sales scripts (CROA-compliant — no guarantees)', 'Train on objection handling', 'Implement follow-up sequences', 'Track conversion metrics at each stage', 'Implement sales team compensation structure', 'Quality monitor sales calls monthly'],
    tools: ['CRM (GoHighLevel)', 'Call recording', 'Calendar scheduling', 'Proposal tools'],
    kpis: ['Lead-to-appointment rate >20%', 'Appointment-to-close rate >40%', 'Average deal value tracked', 'Sales cycle <7 days'],
    templates: ['Sales Script Library', 'Objection Handling Guide', 'Proposal Template', 'Follow-Up Sequence'],
    agentInstructions: 'Sales compliance is critical: NEVER guarantee specific score increases. NEVER promise timeframes for results. ALWAYS disclose: right to dispute on their own for free, 3-day cancellation right, total cost of services. Focus on value and process, not promises.',
  },
  {
    id: 'SOP-101', title: 'Lead Generation System', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Multi-channel lead generation system for credit repair businesses.',
    steps: ['Set up organic channels (SEO, content, social)', 'Configure paid channels (Google Ads, Meta Ads, YouTube)', 'Implement referral program', 'Create lead magnets (free credit score guide, etc.)', 'Set up landing pages with conversion optimization', 'Implement lead scoring', 'Set up automated nurture sequences'],
    tools: ['Google Ads', 'Meta Ads', 'SEMrush', 'Landing page builder', 'Email automation', 'CRM'],
    kpis: ['Cost per lead <$30', 'Lead quality score tracked', 'Monthly lead volume growth >10%', 'Channel attribution tracked'],
    templates: ['Lead Magnet Templates', 'Landing Page Templates', 'Ad Copy Library', 'Nurture Sequence Templates'],
    agentInstructions: 'Best lead channels for credit repair: 1) Google Ads (high intent), 2) YouTube (education → trust), 3) Referrals (highest conversion), 4) SEO (long-term), 5) Social media (awareness). Start with Google Ads + referrals for fastest results.',
  },
  {
    id: 'SOP-102', title: 'CRM Setup & Lead Management', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'CRM configuration and lead management processes for credit repair operations.',
    steps: ['Select and configure CRM platform', 'Set up pipeline stages (Lead → Qualified → Consultation → Proposal → Closed)', 'Configure lead routing rules', 'Set up automated follow-up sequences', 'Implement lead scoring criteria', 'Create dashboards and reports', 'Train sales team on CRM usage'],
    tools: ['GoHighLevel', 'Credit Repair Cloud', 'HubSpot', 'Salesforce'],
    kpis: ['CRM adoption >95%', 'Lead response time <5 minutes', 'Pipeline accuracy >90%'],
    templates: ['CRM Setup Checklist', 'Pipeline Stage Definitions', 'Lead Scoring Criteria', 'Dashboard Configuration Guide'],
    agentInstructions: 'GoHighLevel is the recommended CRM for credit repair — it combines CRM, marketing automation, and client communication. Set up speed-to-lead automation — respond within 5 minutes for highest conversion. Track everything.',
  },
  {
    id: 'SOP-103', title: 'Sales Call Scripts & Closing', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'critical', legalChanges2026: ['CROA compliance required on every sales call', 'No guaranteed outcomes — ever'],
    summary: 'CROA-compliant sales call scripts with qualification questions, value presentation, objection handling, and closing techniques.',
    steps: ['Open with rapport building', 'Ask qualification questions (credit goals, timeline, budget)', 'Present service overview (educate, dont sell)', 'Handle objections with empathy and facts', 'Present pricing with value framing', 'Disclose CROA rights (DIY option, cancellation, total cost)', 'Close with clear next steps', 'Send contract immediately after close'],
    tools: ['Call scripts', 'CRM', 'Call recording', 'Contract system'],
    kpis: ['Close rate >40%', 'Average call duration 25-35 minutes', 'CROA disclosure on 100% of calls', 'Client satisfaction with sales process >4.5/5'],
    templates: ['Discovery Call Script', 'Sales Presentation', 'Objection Handling Matrix', 'Closing Script', 'Post-Call Checklist'],
    agentInstructions: 'Every sales call must include CROA disclosures: 1) Client can dispute on their own for free, 2) 3-day cancellation right, 3) Full cost disclosed. Never use high-pressure tactics. Never guarantee score increases. Focus on education and process.',
  },
  {
    id: 'SOP-104', title: 'Paid Advertising Campaign Management', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Paid advertising management across Google, Meta, YouTube, and TikTok for credit repair lead generation.',
    steps: ['Set up ad accounts with proper tracking (GA4 + pixel)', 'Create campaign structure (awareness → consideration → conversion)', 'Develop ad creative (compliant — no guarantees)', 'Set budgets and bidding strategies', 'Launch campaigns with A/B testing', 'Monitor daily and optimize weekly', 'Scale winners, pause losers', 'Generate monthly ROI reports'],
    tools: ['Google Ads', 'Meta Ads Manager', 'YouTube Ads', 'TikTok Ads', 'Google Analytics 4', 'Reporting tools'],
    kpis: ['ROAS >3x', 'CPL <$30', 'CTR >2%', 'Conversion rate >5%'],
    templates: ['Campaign Launch Checklist', 'Ad Copy Templates', 'A/B Test Log', 'Monthly Ad Report'],
    agentInstructions: 'Credit repair advertising rules: No guaranteed outcomes in ads. No misleading before/after claims without substantiation. Google has strict policies for financial services ads — follow them exactly or get banned. Start with $50-100/day and scale based on CPL.',
  },
  {
    id: 'SOP-105', title: 'SEO & Content Marketing Strategy', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Long-term SEO and content marketing strategy for organic lead generation in the credit repair industry.',
    steps: ['Keyword research (credit repair + local terms)', 'Create content calendar (2-4 posts/month)', 'Write educational blog content (how-to guides, credit tips)', 'Optimize on-page SEO (title tags, meta, headers, internal links)', 'Build backlinks through guest posting and partnerships', 'Create location-specific landing pages', 'Monitor rankings and adjust strategy monthly'],
    tools: ['SEMrush/Ahrefs', 'Google Search Console', 'WordPress', 'Surfer SEO', 'Google Business Profile'],
    kpis: ['Organic traffic growth >10% monthly', 'Top 10 rankings for target keywords', 'Blog conversion rate >2%'],
    templates: ['SEO Audit Checklist', 'Content Calendar', 'Blog Post Template', 'On-Page SEO Checklist'],
    agentInstructions: 'SEO is the long game — takes 3-6 months but produces best ROI. Focus on local SEO first (city + credit repair). Create educational content that builds trust. Target long-tail keywords (how to dispute credit report error in [city]).',
  },
  {
    id: 'SOP-106', title: 'Referral Partner Recruitment', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Referral partnership development with mortgage brokers, realtors, auto dealers, and financial professionals.',
    steps: ['Identify ideal referral partner profiles', 'Build outreach list (mortgage brokers, realtors, tax preparers)', 'Create partner value proposition', 'Develop referral compensation structure', 'Implement partner tracking in CRM', 'Provide partners with marketing materials', 'Schedule regular partner check-ins', 'Track and pay referral commissions promptly'],
    tools: ['CRM', 'Partner portal', 'Referral tracking system', 'Marketing collateral'],
    kpis: ['Active referral partners >10', 'Referral conversion rate >50%', 'Partner satisfaction >4.5/5'],
    templates: ['Partner Outreach Email', 'Referral Agreement', 'Partner One-Pager', 'Commission Tracking Sheet'],
    agentInstructions: 'Referrals are the highest-converting lead source. Target: mortgage brokers (credit-denied applicants), realtors (buyers with low scores), auto dealers (subprime customers), tax preparers (seasonal). Offer 10-20% commission per enrolled client.',
  },
  {
    id: 'SOP-107', title: 'Conversion Rate Optimization', phase: 6, phaseName: 'Marketing & Sales', package: 'Client Acquisition', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Systematic CRO framework for improving conversion rates across website, landing pages, and sales process.',
    steps: ['Audit current conversion funnel', 'Identify drop-off points with analytics', 'Create hypotheses for improvement', 'Design A/B tests', 'Run tests for statistical significance', 'Implement winners', 'Document learnings', 'Repeat monthly'],
    tools: ['Google Analytics 4', 'Hotjar', 'Google Optimize', 'A/B testing tools', 'Heatmap tools'],
    kpis: ['Website conversion rate >3%', 'Landing page conversion rate >10%', 'Monthly A/B tests run >2'],
    templates: ['CRO Audit Checklist', 'A/B Test Log', 'Hypothesis Template', 'Test Results Report'],
    agentInstructions: 'CRO is about small improvements that compound. Focus on: 1) Page speed, 2) Clear CTAs, 3) Social proof (testimonials), 4) Trust signals (certifications, security badges), 5) Mobile experience. Test one thing at a time.',
  },
  // Phase 6 Marketing SOPs
  { id: 'SOP-701', title: 'SEO Strategy & Execution', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Advanced SEO execution plan with technical SEO, local SEO, and authority building strategies.', steps: ['Technical SEO audit and fixes', 'Local SEO optimization (GMB, citations, reviews)', 'Content cluster strategy', 'Link building campaigns', 'Monitor and adjust monthly'], tools: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console'], kpis: ['Domain authority growth', 'Organic traffic growth >15%/month', 'Top 3 for primary keywords within 6 months'], templates: ['Technical SEO Checklist', 'Local SEO Playbook', 'Link Building Tracker'], agentInstructions: 'Advanced SEO: Build topical authority around credit repair. Create content clusters. Target featured snippets for credit repair questions. Local SEO is critical — optimize Google Business Profile and get reviews.', },
  { id: 'SOP-702', title: 'Paid Advertising Optimization', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Advanced paid advertising optimization including bid strategy, audience targeting, and creative testing.', steps: ['Review ad performance daily', 'Optimize bids and budgets weekly', 'Test new audiences bi-weekly', 'Refresh creative monthly', 'Scale top performers'], tools: ['Google Ads', 'Meta Ads', 'Analytics dashboards'], kpis: ['ROAS >4x', 'CPL decreasing month-over-month', 'Quality Score >7 (Google)'], templates: ['Optimization Checklist', 'Creative Brief', 'Performance Report'], agentInstructions: 'Optimization cadence: daily bid checks, weekly budget adjustments, bi-weekly audience tests, monthly creative refresh. Kill any ad with CPL >2x target after 7 days. Scale winners by 20% every 3 days.', },
  { id: 'SOP-703', title: 'Content Marketing System', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Content marketing engine covering blog, video, social media, and email content creation and distribution.', steps: ['Create content calendar (monthly)', 'Produce blog content (2-4 posts/month)', 'Create video content (2-4/month)', 'Distribute across channels', 'Repurpose content across formats', 'Track engagement and conversions', 'Optimize based on performance data'], tools: ['WordPress', 'Canva', 'Loom', 'Buffer/Hootsuite', 'YouTube'], kpis: ['Content output on schedule', 'Engagement rate >3%', 'Content-attributed leads tracked'], templates: ['Content Calendar', 'Blog Template', 'Video Script Template', 'Social Media Templates'], agentInstructions: 'Content pillar topics: credit score improvement, dispute process education, financial literacy, success stories (with permission). Repurpose everything: blog → video → social posts → email → podcast. Educate first, sell second.', },
  { id: 'SOP-704', title: 'Conversion Rate Optimization', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Advanced CRO strategies including multivariate testing, personalization, and funnel optimization.', steps: ['Map full conversion funnel with analytics', 'Identify highest-impact optimization opportunities', 'Run multivariate tests on key pages', 'Implement personalization based on traffic source', 'Optimize mobile experience', 'Reduce form friction', 'Add social proof strategically'], tools: ['Google Optimize', 'Hotjar', 'VWO', 'Google Analytics 4'], kpis: ['Funnel conversion rate improving monthly', 'Form completion rate >60%', 'Mobile conversion parity with desktop'], templates: ['CRO Roadmap', 'Test Documentation', 'Funnel Analysis Report'], agentInstructions: 'Focus on the highest-traffic, lowest-converting pages first. Mobile optimization is critical — over 70% of credit repair leads come from mobile. Reduce form fields to minimum required. Add trust badges near CTAs.', },
  { id: 'SOP-705', title: 'Affiliate & Partnership Program', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['FTC endorsement guides updated — affiliates must disclose relationship'], summary: 'Affiliate program design and management for scalable partner-driven growth.', steps: ['Design affiliate compensation structure', 'Create affiliate onboarding process', 'Build affiliate portal with tracking', 'Provide marketing materials to affiliates', 'Monitor affiliate compliance', 'Pay commissions promptly', 'Recruit high-quality affiliates actively'], tools: ['Affiliate tracking platform', 'Partner portal', 'Payment system'], kpis: ['Active affiliates >20', 'Affiliate-sourced revenue >20%', 'Affiliate retention >70%'], templates: ['Affiliate Agreement', 'Commission Structure', 'Affiliate Marketing Kit'], agentInstructions: 'Affiliates must comply with FTC guidelines — they must disclose the relationship. Monitor affiliate marketing materials for CROA compliance. Pay commissions within 30 days. Quality > quantity — 5 great affiliates beat 50 inactive ones.', },
  { id: 'SOP-706', title: 'Brand Building & PR', phase: 6, phaseName: 'Marketing & Sales', package: 'Marketing & Growth', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Brand awareness and PR strategy including media outreach, thought leadership, and reputation management.', steps: ['Develop thought leadership content', 'Build media contact list', 'Write and distribute press releases', 'Pursue speaking engagements', 'Monitor online reputation', 'Respond to reviews promptly', 'Build community presence'], tools: ['HARO', 'PR distribution services', 'Review monitoring tools', 'Social listening tools'], kpis: ['Media mentions per quarter', 'Online review rating >4.5', 'Brand search volume growth'], templates: ['Press Release Template', 'Media Kit', 'Review Response Templates', 'Speaking Proposal'], agentInstructions: 'PR builds long-term trust. Focus on education and thought leadership in financial literacy. Respond to ALL reviews (positive and negative) within 24 hours. Apply for industry awards and certifications.', },
  // ===== PHASE 7: CLIENT RETENTION =====
  {
    id: 'SOP-012', title: 'Customer Success & Retention', phase: 7, phaseName: 'Client Retention & Growth', package: 'Foundation', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Customer success framework for maximizing client lifetime value, satisfaction, and referral generation.',
    steps: ['Define client success milestones', 'Assign dedicated CSM for each client', 'Implement proactive outreach schedule', 'Track satisfaction metrics (NPS, CSAT)', 'Create graduation process for successful clients', 'Implement referral capture at milestone moments', 'Build long-term relationship for upsell/cross-sell'],
    tools: ['CRM', 'NPS/CSAT tools', 'Email automation', 'Client portal'],
    kpis: ['Client retention >85%', 'NPS >50', 'Referral rate >30%', 'Average client lifetime >6 months'],
    templates: ['Client Success Playbook', 'Milestone Celebration Templates', 'Graduation Process', 'Referral Request Scripts'],
    agentInstructions: 'Retention is cheaper than acquisition. Key touchpoints: after each dispute round, monthly check-in, score improvement milestones. Celebrate wins with clients — this drives referrals. Graduate successful clients with ongoing credit monitoring recommendations.',
  },
  {
    id: 'SOP-013', title: 'Product Roadmap & Development', phase: 7, phaseName: 'Client Retention & Growth', package: 'Foundation', category: 'Strategy', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [],
    summary: 'Product development roadmap for expanding service offerings beyond core credit repair.',
    steps: ['Survey clients for unmet needs', 'Evaluate expansion opportunities (credit building, financial coaching, debt management)', 'Prioritize by revenue potential and client demand', 'Develop and test new services', 'Launch with existing client base first', 'Gather feedback and iterate', 'Scale successful offerings'],
    tools: ['Survey tools', 'Product management tools', 'CRM', 'Financial modeling'],
    kpis: ['New service revenue >10% of total', 'Client adoption of new services >20%', 'New service NPS >40'],
    templates: ['Product Roadmap Template', 'Service Expansion Analysis', 'Launch Checklist', 'Client Survey'],
    agentInstructions: 'Natural expansion path: Credit Repair → Credit Building (secured cards, authorized user tradelines) → Financial Coaching → Debt Management → Mortgage/Auto Readiness Programs. Each adds revenue and deepens client relationship.',
  },
  { id: 'SOP-401', title: 'Monthly Client Check-In System', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Structured monthly check-in process for maintaining client engagement and satisfaction.', steps: ['Schedule monthly check-in (call, video, or email)', 'Review progress since last check-in', 'Discuss upcoming dispute rounds', 'Address questions or concerns', 'Collect updated credit report if needed', 'Document conversation in CRM', 'Set expectations for next month'], tools: ['CRM', 'Calendar', 'Zoom/Phone', 'Credit monitoring'], kpis: ['Monthly check-in completion rate >90%', 'Client satisfaction score tracked', 'No client goes >30 days without contact'], templates: ['Check-In Call Script', 'Progress Report Template', 'Monthly Update Email'], agentInstructions: 'Monthly check-ins prevent churn. Cover: 1) Progress update, 2) Next steps, 3) Questions/concerns, 4) Referral ask (if appropriate). Keep calls under 15 minutes. Always end with clear next steps.', },
  { id: 'SOP-402', title: 'Score Monitoring & Automated Alerts', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Technology', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: ['Free weekly credit reports remain available from all 3 bureaus'], summary: 'Automated credit score monitoring and alert system for proactive client management.', steps: ['Set up credit monitoring for each active client', 'Configure alerts for score changes (±10 points)', 'Alert system for new derogatory items', 'Monthly score tracking in client file', 'Automated celebration messages for improvements', 'Escalation for score drops'], tools: ['Credit monitoring APIs', 'CRM automation', 'SMS/email alerts'], kpis: ['100% active clients monitored', 'Alerts processed within 24 hours', 'Score improvement trend tracked'], templates: ['Alert Configuration Guide', 'Score Improvement Celebration', 'Score Drop Investigation Protocol'], agentInstructions: 'Proactive monitoring catches issues before clients notice. Celebrate every improvement — this builds loyalty. Investigate score drops immediately — could be new derogatory item or identity theft.', },
  { id: 'SOP-403', title: 'Upsell & Cross-Sell Strategy', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Sales', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Revenue expansion through upselling additional services and cross-selling complementary products.', steps: ['Identify upsell opportunities based on client profile', 'Present additional services at natural milestones', 'Package services for value pricing', 'Track upsell conversion rates', 'Train team on consultative upselling'], tools: ['CRM', 'Product catalog', 'Sales scripts'], kpis: ['Upsell rate >15%', 'Revenue per client increasing', 'Client satisfaction maintained after upsell'], templates: ['Upsell Presentation Scripts', 'Package Pricing Matrix', 'Cross-Sell Recommendation Engine'], agentInstructions: 'Best upsell moments: after first successful deletion, at 60-day milestone, when client expresses new financial goals. Never pressure — consultative approach only. Recommended upsells: credit building program, identity theft protection, financial coaching.', },
  { id: 'SOP-404', title: 'Referral Program Management', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Marketing', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Client referral program design, promotion, and management for organic growth.', steps: ['Design referral incentive structure (discount, cash, or gift)', 'Create referral tracking system in CRM', 'Promote program during onboarding and at milestones', 'Make referring easy (shareable links, cards)', 'Track and reward promptly', 'Follow up with referred leads quickly', 'Share success stories (with permission)'], tools: ['CRM referral tracking', 'Referral link generator', 'Reward fulfillment system'], kpis: ['Referral rate >25% of clients', 'Referral conversion rate >40%', 'Referral NPS >60'], templates: ['Referral Program Overview', 'Referral Request Scripts', 'Reward Fulfillment Process'], agentInstructions: 'Ask for referrals at peak satisfaction moments: after a deletion, after a score increase, at graduation. Offer meaningful rewards ($50-100 per enrolled referral). Make it easy — provide a shareable link. Follow up with referrals within 1 hour.', },
  { id: 'SOP-405', title: 'Proactive Churn Prevention', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Early warning system and intervention protocols for preventing client churn.', steps: ['Define churn risk indicators (missed payments, low engagement, complaints)', 'Set up automated churn risk scoring', 'Implement intervention workflows for at-risk clients', 'Assign dedicated outreach for high-risk clients', 'Offer retention incentives when appropriate', 'Conduct exit interviews for churned clients', 'Analyze churn data for systemic issues'], tools: ['CRM churn scoring', 'Email/SMS automation', 'Analytics dashboards'], kpis: ['Churn rate <15%', 'At-risk intervention within 48 hours', 'Retention offer acceptance >30%'], templates: ['Churn Risk Scorecard', 'Retention Call Script', 'Exit Interview Questions', 'Win-Back Campaign'], agentInstructions: 'Top churn signals: 1) Missed payment, 2) No portal login in 14 days, 3) No response to communication, 4) Complaint filed. Intervene within 48 hours. Often a personal call from a manager saves the client. Address the root cause, dont just offer discounts.', },
  { id: 'SOP-406', title: 'Client Milestone Celebrations', phase: 7, phaseName: 'Client Retention & Growth', package: 'Client Retention', category: 'Retention', lastUpdated: '2026-04-14', complianceStatus: 'current', legalChanges2026: [], summary: 'Structured milestone recognition system to boost client satisfaction and referral generation.', steps: ['Define milestone triggers (first deletion, 50-point increase, 700+ score, graduation)', 'Create celebration templates (email, video message, gift)', 'Automate milestone detection in CRM', 'Personal touch: video congratulations from team', 'Share success stories (with written permission)', 'Include referral ask with celebration', 'Track milestone completion rates'], tools: ['CRM automation', 'Loom (video messages)', 'Gift fulfillment', 'Social media'], kpis: ['100% milestones recognized', 'Client response rate to celebrations >50%', 'Referral conversion from milestone moments >20%'], templates: ['Milestone Email Templates', 'Video Script Templates', 'Social Media Post Templates', 'Gift Selection Guide'], agentInstructions: 'Milestones worth celebrating: First item deleted, 25/50/100 point increase, crossing 650/700/750 thresholds, all negative items removed (graduation). A 30-second personal video message has 5x the impact of an automated email. Always ask for a referral during the celebration.', },
]

// ---- API ROUTES ----

// Get all phases
app.get('/api/phases', (c) => {
  return c.json({ phases: PHASES, totalSOPs: SOPS.length, lastUpdated: '2026-04-14' })
})

// Get all SOPs (lightweight list)
app.get('/api/sops', (c) => {
  const phase = c.req.query('phase')
  const search = c.req.query('search')?.toLowerCase()
  const category = c.req.query('category')
  const compliance = c.req.query('compliance')

  let filtered = [...SOPS]
  if (phase) filtered = filtered.filter(s => s.phase === parseInt(phase))
  if (category) filtered = filtered.filter(s => s.category.toLowerCase() === category.toLowerCase())
  if (compliance) filtered = filtered.filter(s => s.complianceStatus === compliance)
  if (search) filtered = filtered.filter(s =>
    s.title.toLowerCase().includes(search) ||
    s.summary.toLowerCase().includes(search) ||
    s.id.toLowerCase().includes(search) ||
    s.agentInstructions.toLowerCase().includes(search)
  )

  return c.json({
    sops: filtered.map(s => ({
      id: s.id, title: s.title, phase: s.phase, phaseName: s.phaseName,
      package: s.package, category: s.category, complianceStatus: s.complianceStatus,
      lastUpdated: s.lastUpdated, legalChanges2026Count: s.legalChanges2026.length,
    })),
    total: filtered.length,
  })
})

// Get single SOP (full detail)
app.get('/api/sops/:id', (c) => {
  const id = c.req.param('id').toUpperCase()
  const sop = SOPS.find(s => s.id === id)
  if (!sop) return c.json({ error: 'SOP not found' }, 404)
  return c.json(sop)
})

// Get 2026 legal changes summary
app.get('/api/legal-changes-2026', (c) => {
  const allChanges: { sopId: string; sopTitle: string; changes: string[] }[] = []
  SOPS.forEach(s => {
    if (s.legalChanges2026.length > 0) {
      allChanges.push({ sopId: s.id, sopTitle: s.title, changes: s.legalChanges2026 })
    }
  })
  return c.json({
    totalChanges: allChanges.reduce((acc, c) => acc + c.changes.length, 0),
    affectedSOPs: allChanges.length,
    lastUpdated: '2026-04-14',
    changes: allChanges
  })
})

// Agent-optimized endpoint — returns structured instructions
app.get('/api/agent/:sopId', (c) => {
  const id = c.req.param('sopId').toUpperCase()
  const sop = SOPS.find(s => s.id === id)
  if (!sop) return c.json({ error: 'SOP not found' }, 404)
  return c.json({
    sopId: sop.id,
    title: sop.title,
    agentInstructions: sop.agentInstructions,
    steps: sop.steps,
    complianceStatus: sop.complianceStatus,
    legalChanges2026: sop.legalChanges2026,
    tools: sop.tools,
    kpis: sop.kpis,
  })
})

// Dashboard stats
app.get('/api/stats', (c) => {
  const stats = {
    totalSOPs: SOPS.length,
    phases: PHASES.length,
    criticalCompliance: SOPS.filter(s => s.complianceStatus === 'critical').length,
    currentCompliance: SOPS.filter(s => s.complianceStatus === 'current').length,
    totalLegalChanges: SOPS.reduce((acc, s) => acc + s.legalChanges2026.length, 0),
    categories: [...new Set(SOPS.map(s => s.category))],
    lastUpdated: '2026-04-14',
  }
  return c.json(stats)
})

// ---- TEMPLATE DATA & API ----
const TEMPLATE_CONTENT: Record<string, { title: string; description: string; format: string; content: string }> = {
  // SOP-000 Templates
  'Entity Comparison Matrix': { title: 'Entity Comparison Matrix', format: 'Reference Chart', description: 'Side-by-side comparison of all business entity types with pros, cons, liability, taxation, and use cases.', content: `ENTITY COMPARISON MATRIX — RJ Business Solutions 2026\n\n| Feature | Sole Prop | LLC | S-Corp | C-Corp | Series LLC | PBC |\n|---------|-----------|-----|--------|--------|------------|-----|\n| Liability Protection | None | Full | Full | Full | Per-Series | Full |\n| Formation Cost | $0-50 | $50-500 | $100-800 | $100-800 | $200-1000 | $100-800 |\n| Annual Maintenance | Minimal | Low-Med | Medium | High | Medium | High |\n| Taxation | Pass-thru | Flexible | Pass-thru | Double | Flexible | Double |\n| Best For | Freelancers | Small Biz | Profitable SMBs | VC-backed | Multi-brand | Social impact |\n| Ownership Limit | 1 | Unlimited | 100 S/H | Unlimited | Unlimited | Unlimited |\n| Can Raise VC? | No | Difficult | No | Yes | Difficult | Yes |\n| Self-Employment Tax | Yes | Yes* | Reduced | N/A | Yes* | N/A |\n\n* LLC members may reduce SE tax via S-Corp election\n\n2026 UPDATE: Series LLC now recognized in 21 states (up from 19).\nDelaware franchise tax: $300 (LLC), $450+ (Corp).\nWyoming annual fee: $60 — most cost-effective jurisdiction.` },
  'Strategic Decision Tree': { title: 'Strategic Decision Tree', format: 'Decision Framework', description: 'Guided decision framework for selecting the optimal business structure based on your specific situation.', content: `STRATEGIC DECISION TREE — Business Entity Selection\n\nSTART HERE:\n\nQ1: Will you have outside investors (VC/Angel)?\n  → YES → C-Corporation (Delaware)\n  → NO → Continue to Q2\n\nQ2: Expected annual revenue?\n  → Under $50K → Sole Proprietorship or Single-Member LLC\n  → $50K-$200K → LLC (Home State or Wyoming)\n  → Over $200K → Continue to Q3\n\nQ3: Will you have partners/co-founders?\n  → YES → Multi-Member LLC with Operating Agreement\n  → NO → Continue to Q4\n\nQ4: Annual profit exceeds $80K?\n  → YES → LLC with S-Corp Election (save on SE tax)\n  → NO → Standard LLC\n\nQ5: Multiple business lines or brands?\n  → YES → Series LLC (if in recognized state) or Holding Company structure\n  → NO → Single LLC\n\nQ6: Need maximum asset protection?\n  → YES → Wyoming LLC (strongest charging order protection)\n  → MODERATE → Delaware LLC\n  → BASIC → Home State LLC\n\n2026 NOTE: BOI reporting under Corporate Transparency Act paused by courts as of March 2026.` },
  'Incorporation Checklist': { title: 'Incorporation Checklist', format: 'Checklist', description: 'Step-by-step incorporation checklist with deadlines and responsible parties.', content: `INCORPORATION CHECKLIST — RJ Business Solutions\n\n□ 1. ENTITY SELECTION\n  □ Complete Strategic Decision Tree\n  □ Consult with attorney/CPA if needed\n  □ Document decision rationale\n\n□ 2. NAME & BRANDING\n  □ Check state name availability\n  □ Search USPTO TESS for trademark conflicts\n  □ Check domain availability\n  □ Check social media handle availability\n  □ Reserve name with state (if filing later)\n\n□ 3. REGISTERED AGENT\n  □ Select registered agent service\n  □ Confirm acceptance and payment\n  □ Record agent details for filing\n\n□ 4. STATE FILING\n  □ Complete Articles of Organization/Incorporation\n  □ Pay filing fee\n  □ File with Secretary of State\n  □ Receive and store approved filing\n\n□ 5. EIN & BANKING\n  □ Apply for EIN (IRS.gov — instant)\n  □ Open business checking account\n  □ Open business savings account\n\n□ 6. GOVERNANCE\n  □ Draft Operating Agreement or Bylaws\n  □ Execute organizational consent\n  □ Set up corporate records binder\n\n□ 7. COMPLIANCE\n  □ Set compliance calendar reminders\n  □ Register for state taxes\n  □ Obtain business licenses/permits\n  □ Foreign qualify in states with nexus` },
  'Operating Agreement Template': { title: 'Operating Agreement Template', format: 'Legal Template', description: 'Comprehensive LLC Operating Agreement with all 8 essential sections.', content: `OPERATING AGREEMENT TEMPLATE — [Company Name] LLC\n\nTHIS OPERATING AGREEMENT is entered into as of [Date]\nby the Members listed in Exhibit A.\n\nSECTION 1: ORGANIZATION\n1.1 Name: [Company Name] LLC\n1.2 Registered Agent: [Agent Name/Service]\n1.3 Principal Office: [Address]\n1.4 Purpose: [Describe business purpose]\n1.5 Term: Perpetual unless dissolved per Section 8\n\nSECTION 2: MEMBERS & CAPITAL\n2.1 Members: See Exhibit A\n2.2 Capital Contributions: See Exhibit B\n2.3 Additional Contributions: By unanimous consent only\n2.4 No Interest on Capital: Unless otherwise agreed\n\nSECTION 3: PROFIT/LOSS ALLOCATION\n3.1 Allocation: Pro rata based on membership interests\n3.2 Distributions: As determined by managing member(s)\n3.3 Tax Distributions: Minimum distributions for tax obligations\n\nSECTION 4: MANAGEMENT\n4.1 Management Structure: [Member-managed / Manager-managed]\n4.2 Voting: Majority vote for ordinary business; Supermajority (75%) for major decisions\n4.3 Officers: [List officers if applicable]\n\nSECTION 5: TRANSFER RESTRICTIONS\n5.1 Right of First Refusal: Required\n5.2 Prohibited Transfers: Without consent\n5.3 Valuation Method: [Fair market / Book value / Formula]\n\nSECTION 6: DISSOLUTION\n6.1 Events of Dissolution\n6.2 Winding Up Procedures\n6.3 Distribution of Assets\n\nSECTION 7: DISPUTE RESOLUTION\n7.1 Mediation first, then binding arbitration\n\nSECTION 8: MISCELLANEOUS\n8.1 Amendments: Written consent of [majority/all] members\n8.2 Governing Law: [State]\n8.3 Severability clause\n8.4 Entire agreement clause\n\n[Signature blocks for all members]\n\n⚠️ IMPORTANT: This is a template. Have an attorney review before execution.` },
  'Bylaws Template': { title: 'Bylaws Template', format: 'Legal Template', description: 'Corporate Bylaws template covering governance, meetings, officers, and shareholder rights.', content: `CORPORATE BYLAWS TEMPLATE — [Corporation Name]\n\nARTICLE I: OFFICES\n1.1 Principal Office\n1.2 Registered Office and Agent\n\nARTICLE II: SHAREHOLDERS\n2.1 Annual Meeting\n2.2 Special Meetings\n2.3 Notice Requirements (10-60 days)\n2.4 Quorum (majority of shares)\n2.5 Voting (one vote per share)\n2.6 Proxy Voting\n\nARTICLE III: BOARD OF DIRECTORS\n3.1 Number and Qualifications\n3.2 Election and Term\n3.3 Regular and Special Meetings\n3.4 Quorum and Voting\n3.5 Committees\n3.6 Compensation\n3.7 Removal and Vacancies\n\nARTICLE IV: OFFICERS\n4.1 Required: President, Secretary, Treasurer\n4.2 Optional: VP, CFO, COO\n4.3 Duties of Each Officer\n4.4 Removal and Succession\n\nARTICLE V: STOCK\n5.1 Certificates\n5.2 Transfer Restrictions\n5.3 Record Date\n5.4 Lost Certificates\n\nARTICLE VI: INDEMNIFICATION\n6.1 Scope of Indemnification\n6.2 Advancement of Expenses\n6.3 D&O Insurance\n\nARTICLE VII: AMENDMENTS\n7.1 By Board or Shareholders\n\n⚠️ TEMPLATE — Requires legal review before adoption.` },
  'Organizational Consent Template': { title: 'Organizational Consent Template', format: 'Legal Template', description: 'Written consent of incorporator/organizer for initial company actions.', content: `WRITTEN CONSENT OF INCORPORATOR\nIN LIEU OF ORGANIZATIONAL MEETING\n\nThe undersigned, being the sole incorporator of [Company Name],\nhereby takes the following actions:\n\n1. ADOPTION OF BYLAWS/OPERATING AGREEMENT\n   RESOLVED: The [Bylaws/Operating Agreement] attached as Exhibit A\n   are hereby adopted.\n\n2. ELECTION OF DIRECTORS/MANAGERS\n   RESOLVED: The following persons are elected as initial [Directors/Managers]:\n   - [Name 1]\n   - [Name 2]\n\n3. APPOINTMENT OF OFFICERS\n   RESOLVED: The following officers are appointed:\n   - President/CEO: [Name]\n   - Secretary: [Name]\n   - Treasurer/CFO: [Name]\n\n4. BANKING\n   RESOLVED: [Bank Name] is designated as the company depository.\n   [Officer name(s)] authorized as signatories.\n\n5. EIN\n   RESOLVED: Officers authorized to apply for federal EIN.\n\n6. FISCAL YEAR\n   RESOLVED: Calendar year (Jan 1 - Dec 31).\n\n7. STOCK/MEMBERSHIP ISSUANCE\n   RESOLVED: [Number] shares/units issued to [Members/Shareholders]\n   per Exhibit B.\n\nDate: _______________\nSignature: _______________\nPrinted Name: _______________` },

  // SOP-601 FCRA Templates
  'FCRA Dispute Letter (Bureau)': { title: 'FCRA Dispute Letter (Bureau)', format: 'Legal Letter', description: 'FCRA-compliant dispute letter template for credit bureau disputes. Updated for 2026.', content: `[Your Name]\n[Your Address]\n[City, State ZIP]\n[Date]\n\nVIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED\n\n[Bureau Name]\n[Bureau Address]\n\nRe: Dispute of Inaccurate Information\n    Social Security Number: XXX-XX-[last 4]\n\nDear Sir/Madam:\n\nPursuant to the Fair Credit Reporting Act, 15 U.S.C. § 1681i,\nI am writing to dispute the following inaccurate information\non my credit report:\n\nACCOUNT DISPUTED:\n  Creditor Name: [Name]\n  Account Number: [Number]\n  Reported Balance: [Amount]\n  Reason for Dispute: [Specific reason — e.g., "This account\n  shows a balance of $1,500 but was paid in full on MM/DD/YYYY"]\n\nUNDER THE FCRA, you are required to:\n1. Conduct a reasonable investigation (§1681i(a))\n2. Forward all relevant information to the furnisher (§1681i(a)(2))\n3. Complete your investigation within 30 days (§1681i(a)(1))\n4. Promptly delete or modify inaccurate information (§1681i(a)(5))\n\nEnclosed: [List supporting documents]\n\nPlease investigate this matter and correct my credit report.\n\nSincerely,\n[Signature]\n[Printed Name]\n\nEnclosures:\n- Copy of credit report with disputed item highlighted\n- [Supporting documentation]\n- Copy of government-issued ID\n- Proof of address\n\n2026 NOTE: File disclosure max charge is now $16.00.` },
  'FCRA Dispute Letter (Furnisher)': { title: 'FCRA Dispute Letter (Furnisher)', format: 'Legal Letter', description: 'Direct dispute letter to creditors/furnishers under FCRA Section 623.', content: `[Your Name]\n[Your Address]\n[City, State ZIP]\n[Date]\n\nVIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED\n\n[Creditor/Furnisher Name]\n[Compliance Department]\n[Address]\n\nRe: Direct Dispute Under FCRA § 623\n    Account Number: [Account Number]\n\nDear Compliance Officer:\n\nPursuant to the Fair Credit Reporting Act, 15 U.S.C. § 1681s-2(b),\nI am notifying you that the information you are furnishing to\ncredit reporting agencies regarding the above-referenced account\nis inaccurate.\n\nSPECIFIC INACCURACY:\n[Describe exactly what is wrong]\n\nCORRECT INFORMATION:\n[State what the information should be]\n\nAs a furnisher, you are required to:\n1. Conduct an investigation with respect to the disputed information\n2. Review all relevant information provided\n3. Report the results to all CRAs to which you reported\n4. If found inaccurate, modify, delete, or permanently block\n\nI request that you:\n□ Investigate this dispute\n□ Correct the reported information\n□ Notify all three credit bureaus of the correction\n\nEnclosed: [Supporting documentation]\n\nSincerely,\n[Signature]` },
  'Method of Verification Request': { title: 'Method of Verification Request', format: 'Legal Letter', description: 'Request to credit bureau for details on how disputed information was verified.', content: `[Your Name]\n[Your Address]\n[Date]\n\nVIA CERTIFIED MAIL\n\n[Bureau Name]\n[Address]\n\nRe: Request for Method of Verification\n    Reference/Dispute Number: [Number]\n\nDear Sir/Madam:\n\nI recently received your response to my dispute dated [Date]\nin which you stated the disputed information was "verified."\n\nPursuant to FCRA § 1681i(a)(6)(B)(iii), I am requesting:\n\n1. The SPECIFIC METHOD used to verify this information\n2. The name, address, and phone number of the person contacted\n   at the furnisher\n3. The specific documents or records reviewed\n4. The dates the investigation was conducted\n\nThe FCRA requires you to provide this information upon request.\nA generic response stating "verified by creditor" is insufficient\nand does not meet the standard of reasonable investigation.\n\nIf you cannot provide specific verification details, the disputed\ninformation must be deleted from my credit report per FCRA\n§ 1681i(a)(5)(A).\n\nPlease respond within 15 business days.\n\nSincerely,\n[Signature]` },
  'CFPB Complaint Template': { title: 'CFPB Complaint Template', format: 'Complaint Form Guide', description: 'Step-by-step guide for filing an effective CFPB complaint.', content: `CFPB COMPLAINT FILING GUIDE — RJ Business Solutions\n\nFILE AT: consumerfinance.gov/complaint\n\nSTEP 1: SELECT PRODUCT\n→ Credit reporting\n\nSTEP 2: SELECT ISSUE\n→ "Incorrect information on your report"\n  OR "Problem with a credit reporting company's investigation"\n\nSTEP 3: WRITE YOUR NARRATIVE (Template):\n\n"I disputed [specific item] with [Bureau] on [Date] via certified\nmail (tracking: [number]). The dispute was based on [specific\nreason — e.g., incorrect balance, account not mine, dates wrong].\n\nThe bureau responded on [Date] stating the information was\n'verified.' However, [explain why the verification was inadequate\n— e.g., the bureau did not conduct a reasonable investigation,\nthe furnisher provided no documentation].\n\nI have enclosed [supporting documents] proving the information\nis inaccurate. Despite my dispute, the inaccurate information\nremains on my credit report, causing [harm — e.g., higher\ninterest rates, denied credit].\n\nI request immediate correction and ask the CFPB to investigate\nthis matter."\n\nSTEP 4: ATTACH DOCUMENTS\n□ Copy of original dispute letter\n□ Certified mail receipt\n□ Bureau response letter\n□ Supporting evidence\n□ Credit report pages\n\n2026 NOTE: CFPB complaints remain effective for individual cases\neven with reduced enforcement actions.` },
  'Consumer Rights Disclosure': { title: 'Consumer Rights Disclosure', format: 'Compliance Document', description: 'Required consumer rights disclosure under CROA and FCRA.', content: `CONSUMER RIGHTS DISCLOSURE\nRJ Business Solutions\n\nAs required by federal law, you have the following rights:\n\nUNDER THE CREDIT REPAIR ORGANIZATIONS ACT (CROA):\n\n1. RIGHT TO SELF-HELP: You have the right to dispute inaccurate\n   information on your credit report directly with credit bureaus\n   at NO COST to you. You do not need a credit repair company.\n\n2. RIGHT TO CANCEL: You have the right to cancel this contract\n   within THREE (3) BUSINESS DAYS from the date you sign it,\n   without paying any fees.\n\n3. NO ADVANCE PAYMENT: Under federal law, no credit repair\n   organization may charge you any fee until services have\n   been fully performed.\n\nUNDER THE FAIR CREDIT REPORTING ACT (FCRA):\n\n1. You have the right to obtain a free credit report from each\n   bureau weekly at AnnualCreditReport.com.\n\n2. You have the right to dispute inaccurate information directly\n   with credit bureaus.\n\n3. Credit bureaus must investigate your dispute within 30 days\n   (45 days if you provide additional information).\n\n4. As of January 1, 2026, the maximum charge for a file\n   disclosure is $16.00.\n\n5. You may file complaints with the CFPB (consumerfinance.gov)\n   or the FTC (ftc.gov).\n\n⚠️ Any credit repair company that asks you to pay upfront\n   is violating federal law.\n\nDate: __________\nClient Signature: __________` },
  'Staff Training Checklist': { title: 'Staff Training Checklist', format: 'Checklist', description: 'Quarterly FCRA compliance training checklist for all staff.', content: `FCRA COMPLIANCE TRAINING CHECKLIST\nQuarter: [Q1/Q2/Q3/Q4] 2026\n\nTRAINING TOPICS — ALL STAFF MUST COMPLETE:\n\n□ 1. FCRA Overview & Key Provisions\n  □ Permissible purposes (§604)\n  □ Consumer dispute rights (§611)\n  □ Furnisher obligations (§623)\n  □ File disclosure requirements (§612)\n  □ 2026 update: Max disclosure fee $16.00\n\n□ 2. CROA Requirements\n  □ No advance payment rule\n  □ Written contract requirements\n  □ 3-day cancellation right\n  □ Required disclosures\n\n□ 3. 2026 Regulatory Updates\n  □ CFPB medical debt rule vacated (July 2025)\n  □ CFPB FCRA preemption rule (Oct 2025)\n  □ New state privacy laws (IN, KY, RI)\n  □ Proposed CROA amendments (S.4144)\n\n□ 4. Dispute Procedures\n  □ Proper dispute documentation\n  □ Certified mail requirements\n  □ Response tracking procedures\n  □ Escalation protocols\n\n□ 5. Data Security\n  □ GLBA requirements\n  □ Client data handling\n  □ Encryption standards\n  □ Breach response plan\n\nTRAINING COMPLETED:\n  Employee Name: ______________\n  Date: ______________\n  Score: ____/100 (Must score >80%)\n  Trainer: ______________\n  Next Training Due: ______________` },

  // SOP-602 CROA Templates
  'Client Service Agreement (CROA-Compliant)': { title: 'Client Service Agreement (CROA-Compliant)', format: 'Legal Contract', description: 'Full CROA-compliant client service agreement template.', content: `CLIENT SERVICE AGREEMENT\nRJ Business Solutions\n\nTHIS AGREEMENT is between RJ Business Solutions ("Company")\nand ____________________ ("Client").\n\n1. SERVICES TO BE PERFORMED:\n   Company will analyze Client's credit reports and assist in\n   preparing and submitting disputes for inaccurate, erroneous,\n   or unverifiable information to credit bureaus and/or furnishers.\n\n2. SPECIFIC SERVICES:\n   □ Credit report analysis (all 3 bureaus)\n   □ Dispute plan creation\n   □ Dispute letter preparation and mailing\n   □ Bureau response tracking\n   □ Monthly progress reports\n   □ Ongoing guidance and support\n\n3. PERFORMANCE TIMELINE:\n   Initial analysis: Within 7 business days\n   First dispute round: Within 14 business days\n   Subsequent rounds: 30-day cycles\n   Estimated program duration: 3-6 months\n\n4. TOTAL COST:\n   Monthly service fee: $_____ per month\n   PAYMENT IS DUE ONLY AFTER SERVICES ARE PERFORMED\n   No advance payments are collected.\n\n5. YOUR RIGHT TO CANCEL:\n   ★ YOU HAVE THE RIGHT TO CANCEL THIS CONTRACT WITHIN\n   THREE (3) BUSINESS DAYS FROM THE DATE YOU SIGN.\n   To cancel, send written notice to [Company Address].\n\n6. CONSUMER RIGHTS DISCLOSURE:\n   [Full CROA disclosure attached — see Consumer Rights Disclosure]\n\n7. NO GUARANTEES:\n   Company cannot and does not guarantee specific credit score\n   improvements or the removal of any particular item.\n\nClient Signature: _________________ Date: _________\nCompany Rep: ____________________ Date: _________\n\n⚠️ 2026 COMPLIANCE NOTE: Review for state-specific addendums.` },
  'CROA Disclosure Statement': { title: 'CROA Disclosure Statement', format: 'Compliance Document', description: 'Mandatory CROA disclosure that must be provided before contract signing.', content: `DISCLOSURE STATEMENT\nRequired by the Credit Repair Organizations Act\n15 U.S.C. §1679c\n\nBEFORE YOU SIGN A CONTRACT WITH A CREDIT REPAIR ORGANIZATION,\nYOU SHOULD KNOW:\n\n1. Your Right to Dispute Directly:\n   You have the right to dispute inaccurate information in your\n   credit report by contacting the credit bureau directly. You\n   do not need to pay anyone to do this for you.\n\n2. Free Credit Reports:\n   You are entitled to free weekly credit reports from all three\n   bureaus at AnnualCreditReport.com.\n\n3. No Advance Payment:\n   Under federal law, credit repair organizations cannot require\n   you to pay until they have completed the services they promised.\n\n4. Right to Cancel:\n   You may cancel your contract with any credit repair organization\n   for any reason within 3 business days from the date you signed it.\n\n5. Right to Sue:\n   You have a right to sue a credit repair organization that\n   violates the Credit Repair Organizations Act.\n\nI acknowledge that I have read and understand this disclosure.\n\nClient Signature: ________________ Date: __________\nPrinted Name: ___________________` },
  'Cancellation Request Form': { title: 'Cancellation Request Form', format: 'Form', description: 'Client cancellation request form complying with CROA 3-day right.', content: `NOTICE OF CANCELLATION\n\nDate: _______________\n\nTo: RJ Business Solutions\n    [Company Address]\n\nI hereby cancel the Credit Repair Service Agreement\ndated _____________ between myself and RJ Business Solutions.\n\nI understand that:\n□ This cancellation is within the 3-business-day period\n  (no fees owed)\n□ This cancellation is after the 3-business-day period\n  (prorated fees may apply for services already performed)\n\nClient Name: _________________\nClient Signature: ______________\nDate Signed: _________________\nAccount/Client ID: _____________\n\nFOR COMPANY USE ONLY:\n□ Cancellation received on: __________\n□ Within 3-day window: Yes / No\n□ Refund required: Yes / No\n□ Amount to refund: $__________\n□ Refund processed on: __________\n□ Services ceased on: __________\n\nProcessed by: _________________\nDate: ________________________` },
  '3-Day Right to Cancel Notice': { title: '3-Day Right to Cancel Notice', format: 'Legal Notice', description: 'Required notice informing clients of their 3-day cancellation right.', content: `NOTICE: YOUR RIGHT TO CANCEL\n\nYou may CANCEL this contract WITHOUT any penalty or obligation\nwithin THREE (3) BUSINESS DAYS from the date you sign.\n\nTo cancel, mail or deliver a signed copy of this notice\nto:\n\n  RJ Business Solutions\n  [Address]\n  [City, State ZIP]\n\nI HEREBY CANCEL THIS TRANSACTION.\n\nDate: _________________\n\nClient Signature: _________________\n\nPrinted Name: _________________\n\n\n(This form must be provided to the client at time of contract\nexecution per CROA § 1679e)` },
  'State Compliance Addendum': { title: 'State Compliance Addendum', format: 'Legal Addendum', description: 'State-specific compliance addendum library for credit repair contracts.', content: `STATE COMPLIANCE ADDENDUM LIBRARY\n2026 Edition\n\n-- CALIFORNIA --\n□ Must be registered with CA DOJ\n□ $100,000 surety bond required\n□ AB 316 (2026): AI liability — cannot claim AI autonomously caused harm\n□ SB 82 (2026): Arbitration limited to subject goods/services\n□ AB 1075 (2026): Overdraft fees capped at $14\n\n-- TEXAS --\n□ Must be registered with TX SOS\n□ $10,000 surety bond required\n□ Must include specific TX disclosures in contract\n\n-- GEORGIA --\n□ Must register with GA SOS\n□ $25,000 surety bond required\n□ Detailed record keeping requirements\n\n-- NEW YORK --\n□ Must be licensed by NY DFS\n□ Strict advertising restrictions\n□ Enhanced cancellation protections\n\n-- FLORIDA --\n□ Must register with FL DBPR\n□ $10,000 surety bond\n□ Annual renewal required\n\n-- OREGON (NEW 2026) --\n□ SB 605: Medical debt reporting banned effective Jan 1, 2026\n□ Cannot include medical debt in credit repair disputes\n\n-- INDIANA (NEW 2026) --\n□ SB 5: Consumer Data Protection Act effective Jan 1, 2026\n□ Must comply with data handling requirements\n\n-- KENTUCKY (NEW 2026) --\n□ HB 15: Consumer Data Protection Act effective Jan 1, 2026\n\n-- RHODE ISLAND (NEW 2026) --\n□ SB 2500: Data Transparency and Privacy Protection Act effective Jan 1, 2026\n\nReview state requirements BEFORE serving clients in any state.\nUpdate this addendum quarterly.` },

  // Generic/shared templates
  'Business Validation Report': { title: 'Business Validation Report', format: 'Report Template', description: 'Template for documenting business concept validation results.', content: `BUSINESS VALIDATION REPORT\n\n1. EXECUTIVE SUMMARY\n   Business Concept: _______________\n   Validation Period: _______________\n   Recommendation: GO / NO-GO / PIVOT\n\n2. MARKET SIZE\n   TAM: $_______________\n   SAM: $_______________\n   SOM: $_______________\n   Data Sources: _______________\n\n3. COMPETITOR ANALYSIS\n   (Minimum 5 competitors analyzed)\n   [Table: Name | Price | Strengths | Weaknesses | Market Share]\n\n4. CUSTOMER VALIDATION\n   Total Responses: ____\n   Conversion Rate: ____%\n   Key Insights: _______________\n\n5. FINANCIAL VIABILITY\n   Estimated Revenue (Y1): $___\n   Estimated Costs (Y1): $___\n   Break-even: ___ months\n\n6. DECISION\n   □ GO — Proceed to entity formation\n   □ NO-GO — Concept not viable\n   □ PIVOT — Adjust approach and re-test` },
  'Competitor Analysis Matrix': { title: 'Competitor Analysis Matrix', format: 'Analysis Template', description: 'Structured competitor analysis for minimum 5 direct competitors.', content: `COMPETITOR ANALYSIS MATRIX\n\n| Criteria | Comp 1 | Comp 2 | Comp 3 | Comp 4 | Comp 5 | US |\n|----------|--------|--------|--------|--------|--------|-----|\n| Price | | | | | | |\n| Services | | | | | | |\n| Strengths | | | | | | |\n| Weaknesses | | | | | | |\n| Market Share | | | | | | |\n| Reviews | | | | | | |\n| USP | | | | | | |\n| Technology | | | | | | |\n\nKey Findings: _______________\nCompetitive Advantage: _______________\nGaps to Exploit: _______________` },
  'Customer Avatar Worksheet': { title: 'Customer Avatar Worksheet', format: 'Worksheet', description: 'Ideal customer profile worksheet with demographics and psychographics.', content: `CUSTOMER AVATAR WORKSHEET\n\nDEMOGRAPHICS:\n  Age: ___  Gender: ___  Income: $___\n  Location: ___  Education: ___  Occupation: ___\n\nPSYCHOGRAPHICS:\n  Goals: _______________\n  Frustrations: _______________\n  Values: _______________\n  Fears: _______________\n\nCREDIT PROFILE:\n  Current Score Range: ___\n  Primary Issues: ___\n  Financial Goals: ___\n  Timeline: ___\n\nWHERE THEY HANG OUT:\n  Online: ___  Social: ___  Communities: ___\n\nOBJECTIONS:\n  1. _______________\n  2. _______________\n  3. _______________\n\nBUYING TRIGGERS:\n  1. _______________\n  2. _______________` },
};

// Template API endpoint
app.get('/api/templates/:name', (c) => {
  const name = decodeURIComponent(c.req.param('name'));
  const template = TEMPLATE_CONTENT[name];
  if (!template) {
    // Return a generic template response if not found
    return c.json({ title: name, format: 'Template', description: 'Template for ' + name + '. Full content will be available in the complete template library.', content: name.toUpperCase() + '\\n\\nThis template is part of the RJ Business Solutions Master SOP 2026 system.\\nContact support@rjbusinesssolutions.org for the full template library.\\n\\n[Template content to be customized based on your business needs]', available: false });
  }
  return c.json({ ...template, available: true });
});

// List all available templates
app.get('/api/templates', (c) => {
  const templates = Object.keys(TEMPLATE_CONTENT).map(name => ({
    name,
    title: TEMPLATE_CONTENT[name].title,
    format: TEMPLATE_CONTENT[name].format,
    description: TEMPLATE_CONTENT[name].description,
  }));
  return c.json({ templates, total: templates.length });
});

// ---- SERVE FRONTEND ----
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RJ Business Solutions — Master SOP 2026</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<script>
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['Space Grotesk', 'monospace'] },
      colors: {
        brand: { 50:'#eff6ff', 100:'#dbeafe', 200:'#bfdbfe', 300:'#93c5fd', 400:'#60a5fa', 500:'#3b82f6', 600:'#2563eb', 700:'#1d4ed8', 800:'#1e40af', 900:'#1e3a8a' },
        dark: { 800:'#1e293b', 900:'#0f172a', 950:'#020617' },
      }
    }
  }
}
</script>
<style>
* { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; }
.mono { font-family: 'Space Grotesk', monospace; }
.glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
.glass-light { background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); border: 1px solid rgba(0,0,0,0.08); }
.gradient-text { background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.sop-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.sop-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(0,0,0,0.15); }
.phase-tab { transition: all 0.2s; }
.phase-tab.active { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; }
.badge-critical { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
.badge-current { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
.pulse-dot { animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 3px; }
.modal-overlay { transition: opacity 0.3s; }
.modal-content { transition: transform 0.3s, opacity 0.3s; }
</style>
</head>
<body class="bg-gray-50 min-h-screen">

<!-- HEADER -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center gap-3">
        <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" class="w-10 h-10 rounded-lg shadow cursor-pointer hover:ring-2 hover:ring-blue-400 transition" onclick="resetToHome()" title="Back to Home">
        <div>
          <h1 class="text-lg font-bold text-gray-900">Master SOP <span class="gradient-text">2026</span></h1>
          <p class="text-xs text-gray-500 mono">RJ Business Solutions — Updated April 2026</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="relative">
          <input type="text" id="globalSearch" placeholder="Search SOPs, laws, procedures..." class="w-64 lg:w-96 pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50">
          <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
        </div>
        <button onclick="showLegalChanges()" class="relative px-3 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition">
          <i class="fas fa-gavel mr-1"></i> 2026 Changes
          <span id="changesCount" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"></span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- STATS BAR -->
<div id="statsBar" class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between text-sm">
      <div class="flex items-center gap-6">
        <span><i class="fas fa-book mr-1"></i> <strong id="statTotal">0</strong> SOPs</span>
        <span><i class="fas fa-layer-group mr-1"></i> <strong>7</strong> Phases</span>
        <span class="flex items-center"><span class="w-2 h-2 bg-red-300 rounded-full mr-1 pulse-dot"></span><strong id="statCritical">0</strong> Critical Compliance</span>
        <span><i class="fas fa-gavel mr-1"></i> <strong id="statChanges">0</strong> Legal Updates</span>
      </div>
      <span class="mono text-xs opacity-80">Last Updated: April 14, 2026</span>
    </div>
  </div>
</div>

<!-- MAIN CONTENT -->
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
  <!-- PHASE TABS -->
  <div class="flex flex-wrap gap-2 mb-6" id="phaseTabs"></div>

  <!-- SOP GRID -->
  <div id="sopGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>

  <!-- EMPTY STATE -->
  <div id="emptyState" class="hidden text-center py-20">
    <i class="fas fa-search text-gray-300 text-5xl mb-4"></i>
    <h3 class="text-xl font-semibold text-gray-500">No SOPs found</h3>
    <p class="text-gray-400 mt-2">Try adjusting your search or filters</p>
  </div>
</main>

<!-- SOP DETAIL MODAL -->
<div id="sopModal" class="fixed inset-0 z-50 hidden">
  <div class="modal-overlay absolute inset-0 bg-black/50" onclick="closeModal()"></div>
  <div class="modal-content absolute inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">
    <div id="sopDetail" class="p-6"></div>
  </div>
</div>

<!-- LEGAL CHANGES MODAL -->
<div id="legalModal" class="fixed inset-0 z-50 hidden">
  <div class="modal-overlay absolute inset-0 bg-black/50" onclick="closeLegalModal()"></div>
  <div class="modal-content absolute inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">
    <div id="legalDetail" class="p-6"></div>
  </div>
</div>

<!-- TEMPLATE PREVIEW MODAL -->
<div id="templateModal" class="fixed inset-0 z-[60] hidden">
  <div class="modal-overlay absolute inset-0 bg-black/60" onclick="closeTemplateModal()"></div>
  <div class="modal-content absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-2xl overflow-y-auto">
    <div id="templateDetail" class="p-6"></div>
  </div>
</div>

<script>
let allSOPs = [];
let currentPhase = null;
const phaseColors = {1:'#ef4444',2:'#f59e0b',3:'#10b981',4:'#3b82f6',5:'#8b5cf6',6:'#ec4899',7:'#06b6d4'};
const phaseIcons = {1:'fa-gavel',2:'fa-dollar-sign',3:'fa-chart-line',4:'fa-users',5:'fa-cogs',6:'fa-bullhorn',7:'fa-trophy'};
const phaseNames = {1:'Legal & Regulatory',2:'Financial Systems',3:'Strategic Planning',4:'Human Capital',5:'Operations & Tech',6:'Marketing & Sales',7:'Client Retention'};

async function init() {
  const [statsRes, sopsRes, changesRes] = await Promise.all([
    fetch('/api/stats').then(r=>r.json()),
    fetch('/api/sops').then(r=>r.json()),
    fetch('/api/legal-changes-2026').then(r=>r.json()),
  ]);
  allSOPs = sopsRes.sops;
  document.getElementById('statTotal').textContent = statsRes.totalSOPs;
  document.getElementById('statCritical').textContent = statsRes.criticalCompliance;
  document.getElementById('statChanges').textContent = statsRes.totalLegalChanges;
  document.getElementById('changesCount').textContent = changesRes.totalChanges;
  renderPhaseTabs();
  renderSOPs(allSOPs);
}

function renderPhaseTabs() {
  const container = document.getElementById('phaseTabs');
  let html = '<button class="phase-tab active px-4 py-2 rounded-xl text-sm font-semibold" onclick="filterPhase(null, this)"><i class="fas fa-th-large mr-1"></i> All Phases</button>';
  for(let i=1;i<=7;i++){
    const count = allSOPs.filter(s=>s.phase===i).length;
    html += '<button class="phase-tab px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-gray-300" onclick="filterPhase('+i+',this)"><i class="fas '+phaseIcons[i]+' mr-1" style="color:'+phaseColors[i]+'"></i> '+phaseNames[i]+' <span class="text-xs text-gray-400 ml-1">('+count+')</span></button>';
  }
  container.innerHTML = html;
}

function filterPhase(phase, btn) {
  currentPhase = phase;
  document.querySelectorAll('.phase-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const search = document.getElementById('globalSearch').value.toLowerCase();
  let filtered = phase ? allSOPs.filter(s=>s.phase===phase) : [...allSOPs];
  if(search) filtered = filtered.filter(s=>s.title.toLowerCase().includes(search)||s.id.toLowerCase().includes(search));
  renderSOPs(filtered);
}

function renderSOPs(sops) {
  const grid = document.getElementById('sopGrid');
  const empty = document.getElementById('emptyState');
  if(!sops.length){ grid.innerHTML=''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  grid.innerHTML = sops.map(s => {
    const color = phaseColors[s.phase];
    const statusBadge = s.complianceStatus==='critical' ? '<span class="badge-critical text-xs px-2 py-0.5 rounded-full font-medium"><i class="fas fa-exclamation-triangle mr-1"></i>Critical</span>' : '<span class="badge-current text-xs px-2 py-0.5 rounded-full font-medium"><i class="fas fa-check-circle mr-1"></i>Current</span>';
    const changesTag = s.legalChanges2026Count > 0 ? '<span class="bg-amber-50 text-amber-700 border border-amber-200 text-xs px-2 py-0.5 rounded-full font-medium"><i class="fas fa-gavel mr-1"></i>'+s.legalChanges2026Count+' changes</span>' : '';
    return '<div class="sop-card bg-white rounded-2xl border border-gray-100 p-5 cursor-pointer fade-in" data-sopid="'+s.id+'" onclick="openSOP(this.dataset.sopid)">' +
      '<div class="flex items-start justify-between mb-3">' +
        '<span class="mono text-xs font-bold px-2 py-1 rounded-lg" style="background:'+color+'15;color:'+color+'">'+s.id+'</span>' +
        '<div class="flex gap-1.5">'+statusBadge+changesTag+'</div>' +
      '</div>' +
      '<h3 class="font-semibold text-gray-900 mb-2 text-sm leading-tight">'+s.title+'</h3>' +
      '<div class="flex items-center gap-2 text-xs text-gray-400">' +
        '<span><i class="fas '+phaseIcons[s.phase]+' mr-1" style="color:'+color+'"></i>'+s.phaseName+'</span>' +
        '<span class="text-gray-300">•</span>' +
        '<span>'+s.category+'</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

async function openSOP(id) {
  const res = await fetch('/api/sops/'+id);
  const sop = await res.json();
  const color = phaseColors[sop.phase];
  const statusHTML = sop.complianceStatus==='critical' ? '<div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"><div class="flex items-center gap-2 text-red-700 font-semibold text-sm"><i class="fas fa-exclamation-triangle"></i> CRITICAL COMPLIANCE — Review Required</div></div>' : '<div class="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"><div class="flex items-center gap-2 text-green-700 font-semibold text-sm"><i class="fas fa-check-circle"></i> Compliance Current</div></div>';

  let changesHTML = '';
  if(sop.legalChanges2026.length > 0) {
    changesHTML = '<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6"><h4 class="font-semibold text-amber-800 text-sm mb-2"><i class="fas fa-gavel mr-1"></i> 2026 Legal & Regulatory Changes</h4><ul class="space-y-2">'+sop.legalChanges2026.map(c=>'<li class="text-sm text-amber-700 flex items-start gap-2"><i class="fas fa-chevron-right text-xs mt-1 flex-shrink-0"></i><span>'+c+'</span></li>').join('')+'</ul></div>';
  }

  document.getElementById('sopDetail').innerHTML =
    '<div class="flex items-center justify-between mb-6">' +
      '<button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition"><i class="fas fa-times text-xl"></i></button>' +
      '<span class="mono text-xs text-gray-400">Updated: '+sop.lastUpdated+'</span>' +
    '</div>' +
    '<div class="mb-6">' +
      '<span class="mono text-sm font-bold px-3 py-1 rounded-lg inline-block mb-3" style="background:'+color+'15;color:'+color+'">'+sop.id+'</span>' +
      '<h2 class="text-2xl font-bold text-gray-900 mb-2">'+sop.title+'</h2>' +
      '<div class="flex items-center gap-2 text-sm text-gray-500"><span>Phase '+sop.phase+': '+sop.phaseName+'</span><span class="text-gray-300">•</span><span>'+sop.category+'</span><span class="text-gray-300">•</span><span>'+sop.package+'</span></div>' +
    '</div>' +
    statusHTML + changesHTML +
    '<div class="mb-6"><h4 class="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2"><i class="fas fa-info-circle text-blue-500"></i> Summary</h4><p class="text-sm text-gray-600 leading-relaxed">'+sop.summary+'</p></div>' +
    '<div class="mb-6"><h4 class="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2"><i class="fas fa-list-ol text-purple-500"></i> Steps</h4><ol class="space-y-2">'+sop.steps.map((s,i)=>'<li class="flex items-start gap-3"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center font-bold">'+(i+1)+'</span><span class="text-sm text-gray-600">'+s+'</span></li>').join('')+'</ol></div>' +
    '<div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"><h4 class="font-semibold text-blue-800 text-sm mb-2"><i class="fas fa-robot mr-1"></i> Agent Instructions</h4><p class="text-sm text-blue-700 leading-relaxed">'+sop.agentInstructions+'</p></div>' +
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">' +
      '<div class="bg-gray-50 rounded-xl p-4"><h4 class="font-semibold text-gray-900 text-sm mb-2"><i class="fas fa-tools text-gray-500 mr-1"></i> Tools</h4><div class="flex flex-wrap gap-1.5">'+sop.tools.map(t=>'<span class="bg-white border border-gray-200 text-xs px-2 py-1 rounded-lg text-gray-600">'+t+'</span>').join('')+'</div></div>' +
      '<div class="bg-gray-50 rounded-xl p-4"><h4 class="font-semibold text-gray-900 text-sm mb-2"><i class="fas fa-bullseye text-gray-500 mr-1"></i> KPIs</h4><ul class="space-y-1">'+sop.kpis.map(k=>'<li class="text-xs text-gray-600 flex items-start gap-1.5"><i class="fas fa-chart-bar text-green-500 text-xs mt-0.5"></i>'+k+'</li>').join('')+'</ul></div>' +
    '</div>' +
    '<div class="bg-gray-50 rounded-xl p-4"><h4 class="font-semibold text-gray-900 text-sm mb-2"><i class="fas fa-file-alt text-gray-500 mr-1"></i> Templates <span class="text-xs font-normal text-gray-400">(click to preview)</span></h4><div class="flex flex-wrap gap-1.5">'+sop.templates.map(t=>'<button onclick="event.stopPropagation();openTemplateEncoded(this)" data-tpl="'+encodeURIComponent(t)+'" class="bg-white border border-gray-200 text-xs px-3 py-1.5 rounded-lg text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition cursor-pointer flex items-center gap-1.5 group"><i class="fas fa-file-alt text-blue-400"></i><span>'+t+'</span><i class="fas fa-external-link-alt text-[10px] text-gray-300 group-hover:text-blue-400"></i></button>').join('')+'</div></div>';

  document.getElementById('sopModal').classList.remove('hidden');
}

function closeModal() { document.getElementById('sopModal').classList.add('hidden'); }

async function showLegalChanges() {
  const res = await fetch('/api/legal-changes-2026');
  const data = await res.json();
  document.getElementById('legalDetail').innerHTML =
    '<div class="flex items-center justify-between mb-6"><button onclick="closeLegalModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-xl"></i></button></div>' +
    '<h2 class="text-2xl font-bold text-gray-900 mb-2"><i class="fas fa-gavel text-red-500 mr-2"></i>2026 Legal & Regulatory Changes</h2>' +
    '<p class="text-sm text-gray-500 mb-6">'+data.totalChanges+' changes affecting '+data.affectedSOPs+' SOPs — Last updated '+data.lastUpdated+'</p>' +
    '<div class="space-y-4">'+data.changes.map(c=>{
      return '<div class="bg-white border border-gray-200 rounded-xl p-4"><div class="flex items-center gap-2 mb-3"><span class="mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg cursor-pointer" data-soplink="'+c.sopId+'" onclick="closeLegalModal();openSOP(this.dataset.soplink)">'+c.sopId+'</span><span class="text-sm font-semibold text-gray-900">'+c.sopTitle+'</span></div><ul class="space-y-2">'+c.changes.map(ch=>'<li class="text-sm text-gray-600 flex items-start gap-2">'+(ch.startsWith('\u26a0\ufe0f')?'<span class="text-red-500 flex-shrink-0">\u26a0\ufe0f</span><span class="text-red-700">'+ch.replace('\u26a0\ufe0f ','')+'</span>':'<i class="fas fa-chevron-right text-xs text-gray-400 mt-1 flex-shrink-0"></i><span>'+ch+'</span>')+'</li>').join('')+'</ul></div>';
    }).join('')+'</div>';
  document.getElementById('legalModal').classList.remove('hidden');
}

function closeLegalModal() { document.getElementById('legalModal').classList.add('hidden'); }
function closeTemplateModal() { document.getElementById('templateModal').classList.add('hidden'); }

function resetToHome() {
  currentPhase = null;
  document.getElementById('globalSearch').value = '';
  document.querySelectorAll('.phase-tab').forEach((t,i) => { t.classList.toggle('active', i===0); });
  renderSOPs(allSOPs);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentTemplateName = '';

function openTemplateEncoded(el) {
  const name = decodeURIComponent(el.dataset.tpl);
  openTemplate(name);
}

async function openTemplate(name) {
  currentTemplateName = name;
  const res = await fetch('/api/templates/' + encodeURIComponent(name));
  const tpl = await res.json();
  const modal = document.getElementById('templateModal');
  const detail = document.getElementById('templateDetail');
  const availBadge = tpl.available
    ? '<span class="bg-green-50 text-green-700 border border-green-200 text-xs px-2 py-0.5 rounded-full"><i class="fas fa-check-circle mr-1"></i>Full Template</span>'
    : '<span class="bg-amber-50 text-amber-700 border border-amber-200 text-xs px-2 py-0.5 rounded-full"><i class="fas fa-clock mr-1"></i>Summary</span>';
  detail.innerHTML =
    '<div class="flex items-center justify-between mb-6">' +
      '<button onclick="closeTemplateModal()" class="text-gray-400 hover:text-gray-600 transition"><i class="fas fa-arrow-left text-lg"></i></button>' +
      '<div class="flex gap-2">' +
        '<button onclick="copyTemplate()" class="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100 transition" title="Copy to clipboard"><i class="fas fa-copy mr-1"></i>Copy</button>' +
        '<button onclick="downloadCurrentTemplate()" class="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-medium hover:bg-green-100 transition" title="Download as text"><i class="fas fa-download mr-1"></i>Download</button>' +
      '</div>' +
    '</div>' +
    '<div class="mb-6">' +
      '<div class="flex items-center gap-2 mb-3">'+availBadge+'<span class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"><i class="fas fa-tag mr-1"></i>'+tpl.format+'</span></div>' +
      '<h2 class="text-xl font-bold text-gray-900 mb-2"><i class="fas fa-file-alt text-blue-500 mr-2"></i>'+tpl.title+'</h2>' +
      '<p class="text-sm text-gray-500">'+tpl.description+'</p>' +
    '</div>' +
    '<div class="bg-gray-900 rounded-xl p-5 overflow-x-auto"><pre id="templateContent" class="text-sm text-green-400 whitespace-pre-wrap font-mono leading-relaxed">'+tpl.content.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</pre></div>' +
    '<div class="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-3"><p class="text-xs text-blue-600"><i class="fas fa-info-circle mr-1"></i>This template is part of the RJ Business Solutions Master SOP 2026 system. Customize for your specific business needs. Have an attorney review all legal documents before use.</p></div>';
  modal.classList.remove('hidden');
}

function copyTemplate() {
  const content = document.getElementById('templateContent').textContent;
  navigator.clipboard.writeText(content).then(() => {
    const btn = event.target.closest('button');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check mr-1"></i>Copied!';
    btn.classList.add('bg-green-50','text-green-600');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('bg-green-50','text-green-600'); }, 2000);
  });
}

function downloadCurrentTemplate() {
  const name = currentTemplateName;
  const content = document.getElementById('templateContent').textContent;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name.replace(/[^a-zA-Z0-9]/g, '_') + '.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Search
document.getElementById('globalSearch').addEventListener('input', function(e){
  const q = e.target.value.toLowerCase();
  let filtered = currentPhase ? allSOPs.filter(s=>s.phase===currentPhase) : [...allSOPs];
  if(q) filtered = filtered.filter(s=>s.title.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)||s.category.toLowerCase().includes(q));
  renderSOPs(filtered);
});

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if(e.key==='Escape') { closeModal(); closeLegalModal(); closeTemplateModal(); }
  if(e.key==='/' && !e.ctrlKey && document.activeElement.tagName!=='INPUT') { e.preventDefault(); document.getElementById('globalSearch').focus(); }
});

init();
</script>

<!-- FOOTER -->
<footer class="bg-white border-t border-gray-200 mt-12 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" class="w-8 h-8 rounded-lg">
        <div>
          <p class="text-sm font-semibold text-gray-900">RJ Business Solutions</p>
          <p class="text-xs text-gray-500">1342 NM 333, Tijeras, New Mexico 87059</p>
        </div>
      </div>
      <div class="flex items-center gap-4 text-xs text-gray-500">
        <a href="https://rjbusinesssolutions.org" target="_blank" class="hover:text-blue-600 transition"><i class="fas fa-globe mr-1"></i> Website</a>
        <a href="https://linkedin.com/in/rick-jefferson-314998235" target="_blank" class="hover:text-blue-600 transition"><i class="fab fa-linkedin mr-1"></i> LinkedIn</a>
        <a href="https://twitter.com/ricksolutions1" target="_blank" class="hover:text-blue-600 transition"><i class="fab fa-twitter mr-1"></i> Twitter</a>
        <span class="mono">v2026.4 — All rights reserved</span>
      </div>
    </div>
  </div>
</footer>
</body>
</html>`)
})

export default app
