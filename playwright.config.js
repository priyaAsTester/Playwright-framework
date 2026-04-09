// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    trace: 'on-first-retry',
    // ✅ FIX 1: Use an absolute-safe relative path consistent with rootDir
    storageState: './auth.json',
  },

  projects: [
    // ✅ FIX 2: Dedicated setup project — runs auth BEFORE any test project
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.spec\.js/,
      // No storageState here — this project CREATES the auth file
      use: { storageState: undefined },
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // storageState is inherited from global `use` above
      },
      // ✅ FIX 3: Declare explicit dependency so auth always runs first
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      dependencies: ['setup'],
    },
  ],
});