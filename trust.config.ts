import { defineConfig } from './src/config/schema';
import { questionnaireMeta } from './src/questionnaires';

export default defineConfig({
  company: {
    name: 'Truly Agentic',
    legalName: 'Truly Agentic (Independent Engineering Practice — Anil Pervaiz)',
    logo: '/logo.svg',
    favicon: '/favicon.svg',
    website: 'https://trulyagentic.io',
    securityEmail: 'security@trulyagentic.io',
    privacyEmail: 'security@trulyagentic.io',
  },

  theme: {
    mode: 'dark',
    colors: {
      primary: '#2563EB',
    },
    fonts: {
      heading: 'IBM Plex Mono',
      body: 'IBM Plex Sans',
    },
  },

  frameworks: [
    {
      name: 'OWASP Top 10 for Agentic AI (2026)',
      status: 'in-progress',
      description:
        'Runtime controls mapped to ASI01–ASI06 in Governance Kit v0.1.0 paired with 15 zero-LLM deterministic static CI/SARIF rules covering ASI01–ASI10 in owasp-agentic-policy-pack v0.1.0 (synthetic lab benchmarked).',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'SOC 2 Type II',
      status: 'in-progress',
      description:
        'Pre-audit technical controls mapped to AICPA Trust Services Criteria (Security, Availability, Confidentiality). Not currently SOC 2 certified — formal third-party CPA examination planned alongside enterprise procurement.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'ISO/IEC 27001:2022',
      status: 'in-progress',
      description:
        'BYOC isolation, IAM separation, KMS custody, and append-only audit controls aligned to Annex A domains. Not currently ISO 27001 certified — source and Terraform IaC transparency provided under Mutual NDA.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'CSA STAR Level 1 (CAIQ-Lite)',
      status: 'in-progress',
      description:
        'Cloud Security Alliance CAIQ-Lite self-assessment tailored for single-tenant BYOC deployments published transparently on this Trust Center; formal CSA registry filing planned.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'UAE PDPL (Federal Decree-Law No. 45/2021)',
      status: 'in-progress',
      description:
        'Bring-Your-Own-Cloud (BYOC) execution keeps operational records inside the client UAE or regional cloud VPC, minimizing cross-border transfers. Baseline DPA template available under Mutual NDA.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'Dubai DESC ISR v3 Alignment',
      status: 'in-progress',
      description:
        'Workload identity isolation, segregation of read/propose/write duties, customer-managed KMS keys, and tamper-evident logging aligned to Dubai Electronic Security Center ISR domains.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'GDPR / UK GDPR',
      status: 'in-progress',
      description:
        'Zero advertising cookies on public web properties, EU-hosted transactional email (Ireland eu-west-1) and privacy-first analytics (EU Frankfurt), and zero multi-tenant SaaS customer storage.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
    {
      name: 'DORA / CMMC L2 Alignment',
      status: 'planned',
      description:
        'BYOC delivery preserves customer ICT portability, zero vendor lock-in, write-only WORM audit sinks, and customer-owned Git repository custody.',
      certifiedDate: null,
      auditBody: null,
      reportAvailable: false,
      lastVerified: 'November 2026',
    },
  ],

  controls: [
    {
      domain: 'Agentic AI & MCP Governance',
      icon: 'bot',
      items: [
        {
          title: 'Five Deterministic Runtime Controls (Open-Source Verified)',
          description:
            'Every tool invocation passes sequentially through Control 1 (Service Identity), OWASP ASI01/ASI04 Scanner, Control 2 (Read/Propose/Write Separation), Control 3 (Named Human Sign-Off), Control 4 (Budget Caps & Kill Switch), and Control 5 (Fail-Closed Ledger).',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'MCP Tool Poisoning & SHA-256 Rug-Pull Detection (ASI04)',
          description:
            'scanMcpToolDefinition inspects tool metadata for <IMPORTANT> or cross-tool shadowing directives and verifies canonical JSON SHA-256 hashes against pinned manifest baselines prior to runtime dispatch.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Indirect Prompt Injection Payload Scanner (ASI01)',
          description:
            'scanUntrustedPayload blocks HTML comment injections, role delimiter overrides, and zero-width obfuscation characters in incoming invoices, emails, and CRM payloads before policy evaluation.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Fail-Closed "No Log, No Action" Audit Choke-Point',
          description:
            'GovernanceGateway commits a SHA-256 hash-chained pre_execution row before calling any downstream ERP, CRM, or cloud API. PostgreSQL triggers block UPDATE/DELETE and log outages trigger hard aborts.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Instant Lease Kill Switch & Workflow Budget Caps',
          description:
            'Pre-flight spend reservations bound execution cost per workflow; AgentRegistry.suspend immediately halts active agent leases and records an immutable kill_switch audit event.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Staged Shadow-Mode Promotion Gate (shadow-mode-gate v0.1.0)',
          description:
            'Open-source shadow-mode-gate v0.1.0 enforces Weeks 1–2 Read-Only Observe and Weeks 3–4 Shadow Dry-Run (zero downstream mutations) with empirical accuracy gating (>=98% action match) before Level 3 Slack/Teams HMAC named-approver execution (4/4 Vitest specs passing on synthetic AP fixtures).',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Data Protection',
      icon: 'lock',
      items: [
        {
          title: 'Zero Multi-Tenant Customer Data Egress (BYOC)',
          description:
            'Truly Agentic operates no multi-tenant SaaS holding customer invoices, ERP rows, OAuth refresh tokens, or operational audit trails. All runtime state lives inside customer-owned AWS, GCP, or Azure subscriptions.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Private Zero-Retention Model Inference',
          description:
            'Reference deployments connect to private VPC model endpoints (AWS Bedrock PrivateLink, GCP Vertex AI Private Service Connect, Azure OpenAI Private Endpoint) with model training disabled.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Customer-Managed Encryption & Secret Custody',
          description:
            'AWS KMS (rotation enabled), GCP Cloud KMS, and Azure Key Vault keep root encryption keys under customer IAM control. Short-lived secrets inject via native Secrets Manager / Key Vault.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Immutable WORM Audit Retention Sinks',
          description:
            'Terraform starters configure AWS S3 Object Lock and GCP Cloud Storage bucket retention lock with write-only (s3:PutObject / storage.objectCreator) IAM boundaries.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Access Control',
      icon: 'key',
      items: [
        {
          title: 'Workload Service Account Enforcement',
          description:
            'AgentRegistry (isValidServiceAccount) permits only scoped service accounts (svc-agent-*) with explicit tool allowlists and rejects personal email identities or shared super-admin credentials.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Named Individual Slack/Teams Approval Gate',
          description:
            'Irreversible write actions pause for HMAC-SHA256 verified approval bound to exact (agentId, toolName, inputSha256, idempotencyKey) from a named individual user ID (usr_*), neutralizing duplicate-click replays.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Zero Standing Contractor Access Post-Handover',
          description:
            'Weeks 1–2 run read-only; Weeks 3–4 run shadow mode without ERP mutations; temporary onboarding SSO/VPN leases expire automatically upon engagement handover.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Infrastructure Security',
      icon: 'server',
      items: [
        {
          title: 'Private VPC Subnets & Loopback Docker Binding',
          description:
            'Production Terraform templates deploy compute inside private subnets without public ingress. Self-hosted Docker Compose binds PostgreSQL (5432) and Portkey OSS gateway (8787) strictly to 127.0.0.1.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Edge TLS 1.2+, WAF & Email Authentication',
          description:
            'Public web properties on trulyagentic.io and trust.trulyagentic.io enforce Cloudflare edge TLS 1.2+, HSTS, WAF, and DNS-authenticated email (SPF, DKIM, DMARC) across Zoho Mail and Resend EU.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Least-Privilege IaC Starters (Zero Wildcard Admin)',
          description:
            'AWS and GCP Terraform modules grant scoped Bedrock/Vertex invoke and write-only audit object permissions with zero AdministratorAccess, iam:*, or *:* wildcard grants.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Application Security',
      icon: 'code',
      items: [
        {
          title: 'Strict TypeScript Gates & Automated Adversarial Tests',
          description:
            'Governance Kit v0.1.0 enforces strict TypeScript compilation, Vitest unit tests (14/14 passing), and a 6-scenario adversarial attack-block suite on synthetic harnesses in CI.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Commit-SHA Pinned CI Actions & Frozen Lockfiles',
          description:
            'GitHub Actions workflows in the public Governance Kit pin third-party actions to immutable commit SHAs with minimal read permissions and committed lockfiles (pnpm-lock.yaml / package-lock.json).',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Deterministic OWASP ASI01–ASI10 Static CI & SARIF Gate',
          description:
            'Open-source owasp-agentic-policy-pack v0.1.0 runs 15 zero-LLM static rules with SARIF 2.1.0 export, Portkey zero-retention and Invariant guardrail baselines, and UAE PDPL / DESC ISR v3 mappings (7/7 Vitest specs passing).',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'GitHub Org Secret Scanning, Push Protection & Dependabot Auto-Fixes',
          description:
            'All six trulyagentic GitHub repositories have Dependabot automated security updates enabled with zero open alerts; all five public repositories enforce secret scanning, push protection, and main branch protection against force-push or deletion.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Independent Third-Party Penetration Testing',
          description:
            'Continuous synthetic regression testing runs in CI, while full source and Terraform IaC are open for prospect CloudSec review under NDA. Formal independent external penetration testing is scheduled alongside enterprise contracts.',
          status: 'planned',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Incident Response',
      icon: 'bell',
      items: [
        {
          title: 'Coordinated Vulnerability Disclosure (security.txt)',
          description:
            'RFC 9116 security.txt published at https://trulyagentic.io/.well-known/security.txt routing reports to security@trulyagentic.io with a 3-business-day initial response commitment.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'One-Command Agent Containment & Forensic Hash Replay',
          description:
            'Compromised or misbehaving agents halt immediately via AgentRegistry.suspend and external auditors verify ledger integrity end-to-end with verifyAuditChainEntries.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Business Continuity',
      icon: 'refresh',
      items: [
        {
          title: 'Customer-Owned Git Custody & Zero Platform Lock-In',
          description:
            'All workflows, Terraform modules, policy JSON rules, and ledger schemas live inside customer-owned Git repositories, ensuring uninterrupted operation independent of Truly Agentic.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Cross-Region Database Backup & Customer DR Alignment',
          description:
            'Persistence layers follow each customer cloud team’s snapshot schedule, WORM retention window, and regional failover policies.',
          status: 'partial',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Vendor Management',
      icon: 'building',
      items: [
        {
          title: 'Public Website & Comms Subprocessor Transparency',
          description:
            'All SaaS vendors used for public web hosting, transactional inquiry email, corporate mail, privacy-first analytics, and scheduling are inventoried below with DPA links and geographic locations.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Zero Unannounced Subprocessor Access to Client BYOC VPCs',
          description:
            'Third-party marketing, analytics, and email vendors have zero network path into customer BYOC agent runtimes, ERP data, or audit ledgers.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
      ],
    },
    {
      domain: 'Governance',
      icon: 'file-text',
      items: [
        {
          title: 'Mutual NDA Security Package & Pre-SOC 2 Matrix',
          description:
            'Architecture diagrams, CSA CAIQ-Lite / SOC 2 / ISO 27001 / UAE PDPL mappings, Terraform review guides, and baseline Mutual NDA + DPA templates are ready for prospect CloudSec and Legal review.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Mandatory Schedule B Written Testing Authorization',
          description:
            'Before any active security assessment runs in a customer sandbox, written scope authorization is required under UAE Federal Decree-Law No. 34 of 2021 and applicable computer misuse laws.',
          status: 'implemented',
          lastVerified: 'November 2026',
        },
        {
          title: 'Formal Third-Party GRC Audit Readiness',
          description:
            'Continuous pre-audit SOC 2 readiness tracked in TrustCloud (18/18 approved baseline policies, Docs-as-Code procedure links, and read-only Cloudflare + GitHub integrations). Not currently SOC 2 certified.',
          status: 'partial',
          lastVerified: 'November 2026',
        },
      ],
    },
  ],

  subprocessors: [
    {
      name: 'Cloudflare',
      purpose:
        'Static edge hosting, DNS, TLS 1.2+, and WAF for public web properties only (zero customer BYOC agent workloads)',
      location: 'Global Edge Network',
      dpaUrl: 'https://www.cloudflare.com/cloudflare-customer-dpa/',
    },
    {
      name: 'Resend',
      purpose:
        'Transactional inquiry & NDA security package confirmation emails (web contact forms only)',
      location: 'European Union (Ireland — eu-west-1)',
      dpaUrl: 'https://resend.com/legal/dpa',
    },
    {
      name: 'Zoho Mail',
      purpose:
        'Direct founder & security inbox handling (founder@, hello@, security@trulyagentic.io)',
      location: 'Global',
      dpaUrl: 'https://www.zoho.com/privacy/dpa.html',
    },
    {
      name: 'PostHog',
      purpose: 'Cookieless privacy-first telemetry on main marketing site (zero session replay)',
      location: 'European Union (Frankfurt)',
      dpaUrl: 'https://posthog.com/dpa',
    },
    {
      name: 'Cal.com',
      purpose: 'Introductory architecture & security review call scheduling',
      location: 'United States / European Union',
      dpaUrl: 'https://cal.com/privacy',
    },
    {
      name: 'GitHub',
      purpose:
        'Version control and CI execution for public Apache-2.0 Governance Kit and documentation repositories',
      location: 'United States',
      dpaUrl:
        'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
    },
    {
      name: 'TrustCloud',
      purpose:
        'Continuous pre-audit SOC 2 readiness monitoring via read-only Cloudflare and GitHub metadata integrations only',
      location: 'United States',
      dpaUrl: 'https://www.trustcloud.ai/legal/privacy/',
    },
  ],

  documents: {
    privacyPolicy: 'https://trulyagentic.io/privacy',
    termsOfService: null,
    masterSubscriptionAgreement: null,
    aiPentestAddendum: null,
    dataProcessingAgreement: null,
    serviceLevelAgreement: null,
    acceptableUsePolicy: null,
    cookiePolicy: null,
    securityPolicy: 'https://trulyagentic.io/security',
    subprocessors: 'https://trust.trulyagentic.io/#subprocessors',
  },

  contact: {
    heading: 'Request NDA Security Package or Architecture Review',
    description:
      'Need our full BYOC data-flow diagrams, pre-SOC 2 control matrix, Terraform IAM review guide, Mutual NDA, Pilot Agreement, or UAE PDPL/GDPR DPA baseline template? Submit a request or email security@trulyagentic.io.',
    cta: {
      label: 'Email security@trulyagentic.io',
      href: 'mailto:security@trulyagentic.io',
    },
    questionnaireUrl: 'https://trulyagentic.io/trust#security-package',
    prefilledQuestionnaireUrl:
      'https://trust.trulyagentic.io/downloads/truly-agentic-compliance-report.pdf',
    prefilledQuestionnaireLabel: 'Download Security & Compliance Report (PDF)',
  },

  seo: {
    title: 'Truly Agentic Trust Center',
    description:
      'Bring-Your-Own-Cloud (BYOC) agentic AI security controls, OWASP Agentic AI (ASI01–ASI06) defenses, pre-SOC 2 posture, and downloadable CSA CAIQ-Lite & MVSP assessments.',
  },

  lastReviewed: 'November 2026',
  subprocessorsLastUpdated: 'November 2026',
  questionnaires: questionnaireMeta,

  changelog: [
    {
      date: '2026-11-25',
      title: 'Cloudflare 2FA Enforcement, GitHub Security Hardening & OWASP Policy Pack v0.1.0',
      description:
        'Published owasp-agentic-policy-pack v0.1.0 (15 ASI01–ASI10 static CI rules + SARIF 2.1.0), cleared all Dependabot alerts to 0, enabled secret scanning/push protection/branch protection on public repos, and enforced Cloudflare account-wide 2FA.',
    },
    {
      date: '2026-11-24',
      title: 'Public Trust Center launched at trust.trulyagentic.io',
      description:
        'Published BYOC architecture diagram, transparent pre-SOC 2 posture, subprocessor list, and downloadable CSA CAIQ-Lite, OWASP Agentic AI, and MVSP PDFs.',
    },
    {
      date: '2026-11-23',
      title: 'Governance Kit v0.1.0 released under Apache-2.0',
      description:
        'Open-sourced Five Runtime Controls, OWASP ASI01/ASI04 MCP scanner, Slack HMAC approvals, append-only PostgreSQL ledger, and AWS/GCP Terraform starters (14/14 unit tests & 6/6 attack-block scenarios verified).',
    },
    {
      date: '2026-11-23',
      title: 'EU transactional security intake & mail authentication live',
      description:
        'Configured Resend EU (eu-west-1) with SPF, DKIM, and DMARC alignment for security package and audit intake forms.',
    },
    {
      date: '2026-11-23',
      title: 'Privacy Policy & RFC 9116 security.txt published',
      description:
        'Published transparent privacy notice (/privacy) and coordinated vulnerability disclosure policy (/.well-known/security.txt).',
    },
    {
      date: '2026-11-22',
      title: 'NDA Security Package & BYOC Terraform review templates completed',
      description:
        'Assembled Mutual NDA, Design Partner Pilot Agreement, UAE PDPL/GDPR DPA baseline, and CloudSec IAM review checklist.',
    },
  ],
});
