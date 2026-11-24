# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this Trust Center or any Truly Agentic property, please report it responsibly.

- **Email**: [security@trulyagentic.io](mailto:security@trulyagentic.io)
- **RFC 9116 disclosure file**: `https://trulyagentic.io/.well-known/security.txt`

Please include:

- Description of the issue and affected URL/component
- Steps to reproduce cleanly without impacting unrelated services
- Assessment of security impact

We acknowledge initial reports within **3 business days** and coordinate remediation before public disclosure.

## Scope

This repository builds a static Astro Trust Center site (`https://trust.trulyagentic.io`) with no backend server, database, or user authentication. Relevant areas include:

- **Supply chain**: Dependencies managed in `package.json` / `package-lock.json`
- **Build-time sanitization**: Config and PDF inputs in `trust.config.ts` and `src/questionnaires/`
- **CI/CD workflow security**: Actions in `.github/workflows/`
