import { defineConfig, devices } from '@playwright/test';
import { config } from './config/config';
import { storageStatePath } from './src/links/path';
// import dotenv from 'dotenv';
// dotenv.config();

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'my-results', open: 'always' }],
    ['blob'],
    ['list', { printSteps: true, outputFolder: '' }],
    ['dot']
  ],
  globalTimeout: 18000000,
  timeout: 20000,
  grepInvert: /@regression/,
  // globalSetup: 'globalSetup.ts',
  // globalTeardown: 'globalTearDown.ts',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    baseURL: config.baseUrl,
    // storageState:storageStatePath,
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "e2e - chromium",
    //   testMatch: 'src/setup/**/*.setup.ts',
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     screenshot: { mode: 'only-on-failure', fullPage: true },
    //     video: "on",
    //     browserName: 'chromium',
    //     viewport: { width: 1600, height: 1080 },
    //     trace: 'on',
    //   },
    // }
    {
      name: 'setup',
      testMatch: '**/setup/*.config.ts',
      use: {
        viewport: {
          height: 1600,
          width: 700
        }
      }
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          slowMo: 50,
        },
      },
      dependencies: ['setup'],
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
