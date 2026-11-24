import { defineConfig, devices } from '@playwright/test';

/**
 * Trust-center e2e. Two profiles selected by E2E_TARGET:
 *   - local (default): Playwright builds + serves the static site on :4321.
 *   - prod: runs against the live https://trust.trulyagentic.io (no webServer).
 */
const isProd = process.env.E2E_TARGET === 'prod';
const baseURL =
  process.env.E2E_BASE_URL || (isProd ? 'https://trust.trulyagentic.io' : 'http://localhost:4321');

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: isProd
    ? undefined
    : {
        command: 'npm run build && npm run preview -- --port 4321 --host',
        url: 'http://localhost:4321',
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
