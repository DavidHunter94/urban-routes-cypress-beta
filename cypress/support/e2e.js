require("cypress-xpath");

// Ignorar errores JS del AUT (bug real de Urban Routes)
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("o is not a function")) {
    return false; // evita que Cypress falle el test
  }
});
