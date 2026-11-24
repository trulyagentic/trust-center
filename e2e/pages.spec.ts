import { test, expect, type Page } from '@playwright/test';

const PAGES = [
  '/',
  '/questionnaires/caiq-lite/',
  '/questionnaires/owasp-agentic/',
  '/questionnaires/mvsp-byoc/',
];

const INDEX_SECTIONS = [
  '#compliance',
  '#controls',
  '#architecture',
  '#subprocessors',
  '#documents',
  '#questionnaires',
];

const PDFS = [
  '/downloads/truly-agentic-compliance-report.pdf',
  '/downloads/questionnaire-caiq-lite.pdf',
  '/downloads/questionnaire-owasp-agentic.pdf',
  '/downloads/questionnaire-mvsp-byoc.pdf',
];

function trackConsoleErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(String(err)));
  return errors;
}

test.describe('trust-center pages', () => {
  for (const pagePath of PAGES) {
    test(`loads ${pagePath} (2xx, titled, no console errors)`, async ({ page }) => {
      const errors = trackConsoleErrors(page);
      const resp = await page.goto(pagePath, { waitUntil: 'domcontentloaded' });
      expect(resp, `no response for ${pagePath}`).not.toBeNull();
      expect(resp!.status(), `status for ${pagePath}`).toBeLessThan(400);
      await expect(page).toHaveTitle(/\S+/);
      const real = errors.filter((e) => !/posthog|analytics|favicon/i.test(e));
      expect(real, `console errors on ${pagePath}: ${real.join(' | ')}`).toHaveLength(0);
    });
  }

  test('index renders all config-driven sections', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    for (const sel of INDEX_SECTIONS) {
      await expect(page.locator(sel), `missing section ${sel}`).toHaveCount(1);
    }
  });

  test('index has SEO title + description meta', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Truly Agentic Trust Center/i);
    const desc = page.locator('head meta[name="description"]');
    await expect(desc).toHaveAttribute('content', /\S+/);
  });

  test('questionnaire pages expose a PDF download link', async ({ page }) => {
    await page.goto('/questionnaires/caiq-lite/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('a[href$=".pdf"]').first()).toBeVisible();
  });
});

test.describe('trust-center downloads', () => {
  for (const pdf of PDFS) {
    test(`PDF resolves: ${pdf}`, async ({ request, baseURL }) => {
      const resp = await request.get(new URL(pdf, baseURL).toString());
      expect(resp.status(), `status for ${pdf}`).toBe(200);
      expect(resp.headers()['content-type'] || '').toMatch(/pdf|octet-stream/);
    });
  }
});
