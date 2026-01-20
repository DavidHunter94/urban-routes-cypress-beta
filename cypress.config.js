const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cnt-8e355124-9291-423d-928e-fa63c26ae195.containerhub.tripleten-services.com?lng=es",
    supportFile: "cypress/support/e2e.js"
  }
});
