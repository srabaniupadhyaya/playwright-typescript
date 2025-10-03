import { defineConfig, devices } from '@playwright/test';

const viewPort1080 = {width: 1920, height: 1080};

// import * as dotenv from 'dotenv';
// import * as path from 'path';

// const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`;
// dotenv.config({ path: path.resolve(__dirname, envFile) });


export default defineConfig({
  // testDir: './tests',
  testDir: './e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  use: {
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    /* set up projects*/
    {
      name:'Conduit Auth', testMatch :'',
    },

    /* test projects*/
    {
      name:'Desktop Chrome Conduit',
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
