# Truly Agentic Trust Center

Public static Trust Center for [Truly Agentic](https://trulyagentic.io), live at [https://trust.trulyagentic.io](https://trust.trulyagentic.io).

Provides enterprise security, Risk, CloudSec, and Legal reviewers with a zero-login overview of:

- **Bring-Your-Own-Cloud (BYOC) isolation** across AWS, GCP, and Azure
- **Transparent Pre-SOC 2 / Pre-ISO 27001 posture** with explicit status labels (`in-progress` / `planned`)
- **OWASP Top 10 for Agentic AI (2026) (`ASI01`–`ASI06`)** mapped to open-source TypeScript & SQL controls in [`trulyagentic/truly-agentic-governance-kit`](https://github.com/trulyagentic/truly-agentic-governance-kit)
- **Downloadable security questionnaires (PDF)** for CSA CAIQ-Lite (BYOC), OWASP Agentic AI (2026), MVSP (BYOC Profile), and an overall Compliance & Security Report
- **Website & communication subprocessor disclosures** explicitly isolated from customer BYOC runtimes

## Local Development & Verification

```bash
npm install
npm run check   # Astro & TypeScript strict validation
npm test        # Vitest schema, config integration & PDF generation tests
npm run lint    # ESLint + Prettier formatting check
npm run build   # Generates downloadable PDFs and builds static dist/
```

## NDA Security Package

Full architecture data-flow diagrams, control matrices, Terraform IAM review checklists, baseline Mutual NDA, Design Partner Pilot Agreement, and UAE PDPL / GDPR DPA templates are requested via [https://trulyagentic.io/trust#security-package](https://trulyagentic.io/trust#security-package) or **security@trulyagentic.io**.

## License & Attribution

Licensed under the MIT License — see [LICENSE](./LICENSE).  
Derived from the open-source MIT template created by [Fimil](https://github.com/Fimil-dev/trust-center).
