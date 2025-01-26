import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testMatch:["tests/login.test.ts"],
    use:{
        headless:false,
        screenshot:"on",
        video:"on"
    },

    reporter:[["dot"],["json",{
        outputFile:"jsonReports/jsonReport.json"
    }],["html",{
        open:"never"
    }]]
      
});
