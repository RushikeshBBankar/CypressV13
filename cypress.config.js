const { defineConfig } = require("cypress");
const cucumber =require('cypress-cucumber-preprocessor').default
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  screenshotsFolder: "cypress/reports/mochareports/assets",
  "reporter":"cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir": "cypress/reports/mocha",
      "quiet": true,
      "overwrite":false,
      "html": false,
      "json": true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
      on('file:preprocessor',cucumber())
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      

    },
   // specPattern:"cypress/e2e/cucumber/feature/*.feature",
    baseUrl: `https://webdriveruniversity.com/`,
    userName:`cypressdemo@gmail.com`,
    password: `cypressdemo`,
  },
  
  setupNodeEvents(on, config) {
    require('@cypress/grep/src/plugin')(config);
    return config;
  },
  chromeWebSecurity: false,
});
