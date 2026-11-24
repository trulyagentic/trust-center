import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { describe, it, expect, beforeAll } from 'vitest';

const DOWNLOADS_DIR = path.join(process.cwd(), 'public', 'downloads');

describe('PDF generation', () => {
  beforeAll(() => {
    execSync('npx tsx scripts/generate-pdfs.ts', {
      cwd: process.cwd(),
      stdio: 'pipe',
    });
  });

  it('should generate CSA CAIQ-Lite BYOC questionnaire PDF', () => {
    const file = path.join(DOWNLOADS_DIR, 'questionnaire-caiq-lite.pdf');
    expect(fs.existsSync(file)).toBe(true);
    expect(fs.statSync(file).size).toBeGreaterThan(1000);
  });

  it('should generate OWASP Agentic AI questionnaire PDF', () => {
    const file = path.join(DOWNLOADS_DIR, 'questionnaire-owasp-agentic.pdf');
    expect(fs.existsSync(file)).toBe(true);
    expect(fs.statSync(file).size).toBeGreaterThan(1000);
  });

  it('should generate MVSP BYOC questionnaire PDF', () => {
    const file = path.join(DOWNLOADS_DIR, 'questionnaire-mvsp-byoc.pdf');
    expect(fs.existsSync(file)).toBe(true);
    expect(fs.statSync(file).size).toBeGreaterThan(1000);
  });

  it('should generate compliance report PDF', () => {
    const file = path.join(DOWNLOADS_DIR, 'truly-agentic-compliance-report.pdf');
    expect(fs.existsSync(file)).toBe(true);
    expect(fs.statSync(file).size).toBeGreaterThan(1000);
  });

  it('compliance report should contain company name and exclude upstream vendor', () => {
    const buf = fs.readFileSync(path.join(DOWNLOADS_DIR, 'truly-agentic-compliance-report.pdf'));
    const text = buf.toString('latin1');
    expect(text).toContain('Truly Agentic');
    expect(text).not.toContain('Fimil');
  });

  it('compliance report should contain OWASP and ISO/IEC 27001 framework names', () => {
    const buf = fs.readFileSync(path.join(DOWNLOADS_DIR, 'truly-agentic-compliance-report.pdf'));
    const text = buf.toString('latin1');
    expect(text).toContain('OWASP');
    expect(text).toContain('ISO/IEC 27001');
  });

  it('questionnaire PDF should contain questionnaire name and summary', () => {
    const buf = fs.readFileSync(path.join(DOWNLOADS_DIR, 'questionnaire-caiq-lite.pdf'));
    const text = buf.toString('latin1');
    expect(text).toContain('CAIQ-Lite');
    expect(text).toContain('Response Summary');
  });
});
