import type { Questionnaire } from './types';

export const owaspAgentic: Questionnaire = {
  name: 'OWASP Agentic AI (2026)',
  slug: 'owasp-agentic',
  version: '2026',
  description:
    'Mapping of OWASP Top 10 for Agentic Applications (ASI01–ASI06) and Truly Agentic Five Runtime Controls to open-source TypeScript, PostgreSQL, and Terraform code in trulyagentic/truly-agentic-governance-kit v0.1.0.',
  url: 'https://genai.owasp.org/',
  enabled: true,
  sections: [
    {
      name: 'Goal Hijack & Context Integrity (ASI01 & ASI06)',
      questions: [
        {
          id: 'ASI01-1',
          question:
            'Does the gateway sanitize and inspect untrusted documents/emails before agent execution?',
          answer: 'yes',
          explanation:
            'scanUntrustedPayload in src/mcp-scanner.ts blocks HTML comment injections, role delimiter overrides, zero-width obfuscation characters, and instruction-hijack strings before policy evaluation.',
        },
        {
          id: 'ASI01-2',
          question: 'Are policy boundaries enforced deterministically outside model prompts?',
          answer: 'yes',
          explanation:
            'Language models never self-police boundaries. GovernanceGateway routes all tool invocations through deterministic TypeScript gates prior to execution.',
        },
        {
          id: 'ASI06-1',
          question: 'Are untrusted payload hashes captured in an immutable audit trail?',
          answer: 'yes',
          explanation:
            'Pre-execution audit entries store canonical input_sha256 digests chained via prev_hash -> entry_hash in PostgreSQL (db/migrations/001_audit_ledger.sql), preventing silent history tampering.',
        },
      ],
    },
    {
      name: 'Excessive Agency & Privilege Control (ASI02 & ASI03)',
      questions: [
        {
          id: 'ASI02-1',
          question:
            'Are agent actions segmented across read, propose, and write authorization tiers?',
          answer: 'yes',
          explanation:
            'PolicyEngine maps tools across Five Levels of Agency (L1–L5) and enforces deterministic monetary ceilings, allowlisted currencies, IBAN country prefixes, and vendor domain checks.',
        },
        {
          id: 'ASI02-2',
          question: 'Do write-tier actions require named human approval and replay protection?',
          answer: 'yes',
          explanation:
            'ApprovalGate binds approval tickets to exact (agentId, toolName, inputSha256, idempotencyKey), verifies Slack HMAC-SHA256 signatures, accepts only individual user IDs (usr_*), and blocks duplicate click replays.',
        },
        {
          id: 'ASI03-1',
          question: 'Are agent identities locked to company-provisioned service accounts?',
          answer: 'yes',
          explanation:
            'AgentRegistry enforces registered svc-agent-* identities with explicit per-tool allowlists and rejects shared super-admin keys or personal emails.',
        },
        {
          id: 'ASI03-2',
          question: 'Can compromised or runaway agent leases be halted immediately?',
          answer: 'yes',
          explanation:
            'Control 4 includes pre-flight spend budget reservation (reserveBudget) and instant lease suspension (suspend), emitting an immutable kill_switch audit ledger entry.',
        },
      ],
    },
    {
      name: 'MCP Supply Chain & Execution Safety (ASI04 & ASI05)',
      questions: [
        {
          id: 'ASI04-1',
          question:
            'Are MCP tool descriptions scanned for poisoning directives and schema drift ("rug pulls")?',
          answer: 'yes',
          explanation:
            'scanMcpToolDefinition inspects MCP tool metadata for <IMPORTANT> or cross-tool shadowing directives and verifies canonical JSON SHA-256 digests against pinned baselines (config/mcp-pins.example.json).',
        },
        {
          id: 'ASI05-1',
          question: 'Are tool invocations guarded against arbitrary code/shell evaluation?',
          answer: 'yes',
          explanation:
            'GovernanceGateway avoids dynamic eval/shell interpolation and strictly validates typed tool parameter schemas prior to execution.',
        },
        {
          id: 'ASI05-2',
          question: 'Do all automated test scenarios run cleanly without live customer data?',
          answer: 'yes',
          explanation:
            'All 14 Vitest specs and all 6 demo:attack scenarios execute cleanly in CI against synthetic lab fixtures with zero customer data or production credentials.',
        },
      ],
    },
  ],
};
