import { defineConfig, devices } from '@playwright/test';

const viewPort1080 = {width: 1920, height: 1080};

// import * as dotenv from 'dotenv';
// import * as path from 'path';

// const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`;
// dotenv.config({ path: path.resolve(__dirname, envFile) });

const viewPort2080 = {width: 1920, height: 1080};
export default defineConfig({
  // testDir: './tests',
  testDir: './e2e/conduit-app-test/tests',
  timeout: 30000,
  fullyParallel: false,
  retries: 0,
  workers: 1,

  expect:{
    timeout: 5000,
    /**
     * Visual testing defaults
     * 2 decimal places allowed else rounds upto 2 Dp
     * we can override the maxDiffPixelRation per test if necessary
     */
    toHaveScreenshot:{
      threshold:0.01, // https://playwright.dev/docs/api/class-pageassertions
      maxDiffPixelRatio:0.01
    }
  },

  /* Folder for test artifacts */
  // outputDir: 'outputs/test-results'
  // reporter:[]

  use: {
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
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
      use:{...devices['Desktop Chrome'],viewport:viewPort1080}

    },
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
    // {
    //   name: 'independentchrome',
    //   use: { 
    //     browserName: 'chromium',
    //     channel: 'chrome', // Ensures tests run in Google Chrome
    //   },
    //   testMatch: /.*\.spec\.ts/, // Runs only `.spec.ts` test files
    // },

  ],
});
