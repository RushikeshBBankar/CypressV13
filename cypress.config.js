const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config),
      allureWriter(on, config);
            return config;
    },
    baseUrl:`https://webdriveruniversity.com/`,
  },
  chromeWebSecurity: false,
});
