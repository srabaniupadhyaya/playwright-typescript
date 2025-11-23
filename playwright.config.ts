import { defineConfig, devices } from '@playwright/test';

const viewPort1080 = {width: 1920, height: 1080};

/* import * as dotenv from 'dotenv';
import * as path from 'path';

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`;
dotenv.config({ path: path.resolve(__dirname, envFile) });*/

export default defineConfig({
  // testDir: './tests',
  // Test location
  testDir: './e2e/conduit-app-test/tests',

  // Global timeouts and parallelism
  timeout: 30000,
  fullyParallel: false,
  retries: 0,
  workers: 1,

  // Assertion settings
  expect:{
    timeout: 5000,
    // Visual testing defaults
    toHaveScreenshot:{
      threshold:0.01, // https://playwright.dev/docs/api/class-pageassertions //2 decimal places allowed else rounds upto 2 Dp
      maxDiffPixelRatio:0.01 //we can override the maxDiffPixelRation as per test necessity
    }
  },

  // Artifacts and reporting
  outputDir: 'outputs/test-results',
  reporter: [['html', { outputFolder: 'outputs/report-html', open: 'never' }]],

  // Shared test settings
  use: {
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    viewport: viewPort1080,  // Optional: applies your custom viewport

  },
  projects: [
    /* set up projects*/
    {
      name:'Sauce Auth', testMatch :'',
    },

    /* test projects*/
    {
      name:'Chrome Sauce',
      testMatch:'conduit-app-test/**/ui-*.spec.ts',
      use:{...devices['Desktop Chrome']} // viewport: { width: 1920, height: 1080 }, Optional: override default viewport

    },
    // Add more projects below for cross-browser or device testing
    // {
    //   name: 'Firefox UI',
    //   testMatch: 'conduit-app-test/**/ui-*.spec.ts',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     viewport: { width: 1920, height: 1080 },
    //   },
    // },

    // {
    //   name: 'setup',
    //   testMatch: /.*\.setup\.ts/,
    // },
    // {
    //   name: 'e2e',
    //   dependencies: ['setup'],
    //   testMatch: /.*\.spec\.ts/,
    //   use: {
    //     storageState: 'storageState.json',
    //   },
    // },

  ],
});
