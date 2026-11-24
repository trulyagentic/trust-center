import type { Questionnaire } from './types';

export const mvspByoc: Questionnaire = {
  name: 'MVSP (BYOC Profile)',
  slug: 'mvsp-byoc',
  version: '1.0',
  description:
    'Minimum Viable Secure Product (MVSP) vendor readiness baseline adapted for single-tenant Bring-Your-Own-Cloud (BYOC) AI governance deployments.',
  url: 'https://mvsp.dev/',
  enabled: true,
  sections: [
    {
      name: 'Business Controls',
      questions: [
        {
          id: 'MVSP-1.1',
          question: 'Do you maintain a documented vulnerability disclosure process?',
          answer: 'yes',
          explanation:
            'Published at https://trulyagentic.io/.well-known/security.txt and routed to security@trulyagentic.io with a 3-business-day initial response commitment.',
        },
        {
          id: 'MVSP-1.2',
          question: 'Is customer operational data segregated from other customers?',
          answer: 'yes',
          explanation:
            'Strongest possible physical & account segregation: each deployment runs inside the customer-owned AWS, GCP, or Azure account with zero shared multi-tenant data stores.',
        },
        {
          id: 'MVSP-1.3',
          question: 'Have you completed an independent annual penetration test or SOC 2 audit?',
          answer: 'partial',
          explanation:
            'Adversarial regression suites (ASI01–ASI06) run continuously in CI on synthetic harnesses, and full source/IaC artifacts are open for prospect CloudSec audit under Mutual NDA. Formal third-party CPA/pentest reports are planned alongside enterprise contract milestones.',
        },
        {
          id: 'MVSP-1.4',
          question: 'Is customer training, testing, or subprocessor disclosure transparent?',
          answer: 'yes',
          explanation:
            'Public Privacy Policy (trulyagentic.io/privacy) and this Trust Center list every web/email subprocessor explicitly and confirm zero customer data egress from BYOC environments.',
        },
      ],
    },
    {
      name: 'Application Design & Authentication Controls',
      questions: [
        {
          id: 'MVSP-2.1',
          question: 'Are user authentication and SSO federated to customer identity providers?',
          answer: 'yes',
          explanation:
            'Customer runtimes integrate with OIDC/SAML workload identity (Okta, Microsoft Entra ID, Google IAM, AWS IAM OIDC), while write approvals verify named Slack/Teams user identities.',
        },
        {
          id: 'MVSP-2.2',
          question: 'Are authorization checks enforced consistently on every sensitive action?',
          answer: 'yes',
          explanation:
            'Every tool execution passes sequentially through Control 1 (Identity/Registry), OWASP Scanner, Control 2 (PolicyEngine), Control 3 (ApprovalGate), and Control 5 (Fail-Closed Ledger).',
        },
        {
          id: 'MVSP-2.3',
          question: 'Do hosted web properties avoid unnecessary tracking cookies?',
          answer: 'yes',
          explanation:
            'trulyagentic.io and trust.trulyagentic.io serve zero advertising cookies, zero third-party ad pixels, and route analytics strictly through cookieless/consent-respecting telemetry.',
        },
      ],
    },
    {
      name: 'Application Implementation & Supply Chain Controls',
      questions: [
        {
          id: 'MVSP-3.1',
          question: 'Are secrets kept out of source repositories and encrypted at runtime?',
          answer: 'yes',
          explanation:
            'Secret hygiene checks ensure .env files remain gitignored, production web keys sit in encrypted Cloudflare Pages secret_text bindings, and BYOC runtime credentials stay inside customer Secrets Manager / Key Vault.',
        },
        {
          id: 'MVSP-3.2',
          question: 'Are dependency versions locked and GitHub CI actions pinned?',
          answer: 'yes',
          explanation:
            'Repositories use committed lockfiles (pnpm-lock.yaml / package-lock.json), automated dependency monitoring, and SHA-pinned GitHub Actions steps with minimal workflow token permissions.',
        },
        {
          id: 'MVSP-3.3',
          question: 'Are security headers and TLS 1.2+ enforced across public endpoints?',
          answer: 'yes',
          explanation:
            'All public endpoints on trulyagentic.io and trust.trulyagentic.io sit behind Cloudflare edge TLS 1.2+ with HSTS, X-Content-Type-Options, and strict CORS/origin validation.',
        },
      ],
    },
    {
      name: 'Operational Controls',
      questions: [
        {
          id: 'MVSP-4.1',
          question: 'Are immutable audit logs generated and exportable to customer SIEMs?',
          answer: 'yes',
          explanation:
            'PostgreSQL append-only hash chains prevent DELETE/UPDATE mutations and stream to customer-owned WORM buckets (S3 Object Lock / GCS Retention Lock) for SIEM ingestion.',
        },
        {
          id: 'MVSP-4.2',
          question:
            'Are customer backups and disaster recovery controlled by the customer cloud policy?',
          answer: 'yes',
          explanation:
            'Because runtime state lives inside the customer cloud account, automated database snapshots, WORM retention policies, and regional failover follow the customer CloudSec policy directly.',
        },
      ],
    },
  ],
};
