import type { Questionnaire } from './types';

export const caiqLite: Questionnaire = {
  name: 'CSA CAIQ-Lite (BYOC)',
  slug: 'caiq-lite',
  version: '4.0',
  description:
    'Cloud Security Alliance CAIQ-Lite self-assessment tailored to Truly Agentic Bring-Your-Own-Cloud (BYOC) architecture, zero data egress, customer KMS custody, and fail-closed audit logging.',
  url: 'https://cloudsecurityalliance.org/research/cloud-controls-matrix/',
  enabled: true,
  sections: [
    {
      name: 'BYOC Architecture & Data Isolation',
      questions: [
        {
          id: 'AIS-01',
          question: 'Where is customer operational data processed and stored?',
          answer: 'yes',
          explanation:
            'Operational payloads (ERP rows, invoices, CRM exports, OAuth refresh tokens, and audit ledgers) remain exclusively inside the customer-owned AWS, GCP, or Azure VPC/VNet. Truly Agentic operates zero multi-tenant SaaS holding client business data.',
        },
        {
          id: 'AIS-02',
          question:
            'Are customer prompts, operational records, or telemetry used to train foundation models?',
          answer: 'yes',
          explanation:
            'No. Deployments connect exclusively to customer-controlled private VPC endpoints (AWS Bedrock PrivateLink, GCP Vertex AI Private Service Connect, or Azure OpenAI Private Endpoint) or contractual zero-data-retention configurations with model training disabled.',
        },
        {
          id: 'AIS-03',
          question: 'Is network access to the runtime isolated from public ingress?',
          answer: 'yes',
          explanation:
            'Terraform starters deploy runtimes into private VPC subnets with no public inbound exposure. Local BYOC containers bind strictly to 127.0.0.1 for private tunnel/VPC routing.',
        },
      ],
    },
    {
      name: 'Encryption & Key Custody',
      questions: [
        {
          id: 'CEK-01',
          question: 'Who retains cryptographic root key custody and secret lifecycle control?',
          answer: 'yes',
          explanation:
            'Customers retain root custody via AWS KMS/Secrets Manager, GCP Cloud KMS/Secret Manager, or Azure Key Vault. Agent runtimes receive only scoped short-lived credentials tied to OIDC workload identity.',
        },
        {
          id: 'CEK-02',
          question: 'Is data encrypted in transit and at rest with modern algorithms?',
          answer: 'yes',
          explanation:
            'Public web edges enforce HTTPS with TLS 1.2+ on Cloudflare; customer BYOC buckets, ledgers, and secrets vaults use customer-managed KMS encryption with automated key rotation enabled.',
        },
      ],
    },
    {
      name: 'Identity, Access & Approval Controls',
      questions: [
        {
          id: 'IAM-01',
          question:
            'Are AI agents prevented from sharing personal or root administrator credentials?',
          answer: 'yes',
          explanation:
            'Control 1 (AgentRegistry / isValidServiceAccount) validates scoped workload service accounts (svc-agent-*) in code and rejects personal email addresses, root accounts, and shared admin handles.',
        },
        {
          id: 'IAM-02',
          question: 'Are irreversible write actions separated from read and draft workflows?',
          answer: 'yes',
          explanation:
            'Control 2 (PolicyEngine) isolates read, propose, and write tiers across Five Levels of Agency (L1–L5), while Control 3 (ApprovalGate + Slack HMAC) requires sign-off from a named individual human approver (usr_*).',
        },
        {
          id: 'IAM-03',
          question:
            'Does Truly Agentic retain standing access to customer cloud accounts post-handover?',
          answer: 'yes',
          explanation:
            'No. Weeks 1–2 run strictly read-only on replicas/snapshots; Weeks 3–4 run shadow mode without mutating ERPs; temporary onboarding SSO/VPN leases auto-expire upon handover.',
        },
        {
          id: 'IAM-04',
          question: 'Does Truly Agentic store multi-tenant SaaS end-user passwords?',
          answer: 'na',
          explanation:
            'Not applicable. There is no multi-tenant SaaS control plane or hosted customer password database; authentication delegates to each customer IdP via OIDC/SAML or workload identity.',
        },
      ],
    },
    {
      name: 'Audit Logging & Fail-Closed Guarantees',
      questions: [
        {
          id: 'LOG-01',
          question: 'What happens when the audit logging sink is unreachable or errors?',
          answer: 'yes',
          explanation:
            'Control 5 enforces "No Log, No Action": GovernanceGateway commits a SHA-256 hash-chained pre_execution row before calling any downstream tool. Ledger errors abort execution cleanly with zero external mutations.',
        },
        {
          id: 'LOG-02',
          question: 'Are audit records protected against retrospective tampering?',
          answer: 'yes',
          explanation:
            'PostgreSQL trigger trg_audit_ledger_immutable raises an exception on UPDATE or DELETE, hash links validate via verifyAuditChainEntries, and Terraform starters configure S3 Object Lock / GCS Retention Lock WORM buckets.',
        },
        {
          id: 'LOG-03',
          question: 'Is there an independent third-party SOC 2 Type II or ISO 27001 audit report?',
          answer: 'partial',
          explanation:
            'Controls are engineered and mapped to SOC 2 TSC and ISO 27001:2022 Annex A ahead of formal audit, but Truly Agentic is currently Pre-SOC 2 (no third-party CPA attestation yet). Complete source/IaC review is available under Mutual NDA.',
        },
      ],
    },
    {
      name: 'Supply Chain, Disclosure & Authorized Testing',
      questions: [
        {
          id: 'IVS-01',
          question: 'How is build pipeline and MCP tool supply-chain integrity protected?',
          answer: 'yes',
          explanation:
            'Public governance kit CI pins GitHub Actions by commit SHA with minimal permissions, enforces TypeScript strict checks, and validates MCP tool schemas against pinned SHA-256 manifest digests.',
        },
        {
          id: 'TVM-01',
          question: 'How are vulnerability reports and active security tests authorized?',
          answer: 'yes',
          explanation:
            'Coordinated disclosure is published at https://trulyagentic.io/.well-known/security.txt (security@trulyagentic.io). Active security tests run only on synthetic harnesses or customer sandboxes after executing written Schedule B authorization.',
        },
      ],
    },
  ],
};
