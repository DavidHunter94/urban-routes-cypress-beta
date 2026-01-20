class UrbanRoutesPage {

  // ========== LOCATORS ==========
  fromField = "#from";
  toField = "#to";
  botonTaxi = "//button[text()='Pedir un taxi']";

  btnPhone = ".np-button";
  phoneInput = "#phone";
  codeInput = "#code";

  messageField = "#comment";
  botonPedirTaxiFinal = "button.smart-button";

  modalConductor = ".order-header-content";
  modalTitle = ".order-header-title";

  // ========== RUTA ==========
  setRoute(from, to) {
    cy.get(this.fromField)
      .should("exist")
      .click({ force: true })
      .clear({ force: true })
      .type(from, { force: true, delay: 50 });

    cy.get(this.toField)
      .should("exist")
      .click({ force: true })
      .clear({ force: true })
      .type(to, { force: true, delay: 50 });
  }

  getFrom() {
    return cy.get(this.fromField).invoke("val");
  }

  getTo() {
    return cy.get(this.toField).invoke("val");
  }

  // ========== TARIFA ==========
  clickTaxiButton() {
    cy.xpath(this.botonTaxi).click({ force: true });
  }

  selectComfortTariff() {
    cy.contains(".tcard-title", "Comfort")
      .parents(".tcard")
      .click({ force: true });
  }

  // ========== TELÉFONO + CÓDIGO SMS ==========
  fillPhoneAndVerify(phone) {

    // Abrir modal teléfono
    cy.get(this.btnPhone).click({ force: true });

    // Quitar label flotante (bug UI real)
    cy.get("label[for='phone']").then($label => {
      if ($label.length) {
        cy.wrap($label).invoke("remove");
      }
    });

    // Escribir teléfono + Enter
    cy.get(this.phoneInput)
      .should("exist")
      .scrollIntoView()
      .clear({ force: true })
      .type(phone + "{enter}", { force: true, delay: 50 });

    // Obtener código SMS desde la UI (workaround estable)
    cy.get("body", { timeout: 15000 })
      .invoke("text")
      .then((text) => {

        const match = text.match(/\b\d{4}\b/);

        if (!match) {
          throw new Error("No se pudo obtener el código SMS desde la UI");
        }

        const code = match[0];

        // Quitar label flotante del código
        cy.get("label[for='code']").then($label => {
          if ($label.length) {
            cy.wrap($label).invoke("remove");
          }
        });

        // Escribir código + Enter
        cy.get(this.codeInput)
          .should("exist")
          .scrollIntoView()
          .clear({ force: true })
          .type(code + "{enter}", { force: true, delay: 50 });
      });

    // Cerrar modal si existe
    cy.get("body").then($body => {
      if ($body.find(".close-button").length) {
        cy.get(".close-button").first().click({ force: true });
      }
    });
  }

  // ========== MENSAJE ==========
  writeDriverMessage(message) {
    cy.get(this.messageField)
      .should("exist")
      .click({ force: true })
      .clear({ force: true })
      .type(message, { force: true, delay: 50 });
  }

  // ========== CONFIRMAR ==========
  clickFinalTaxiButton() {
    cy.get(this.botonPedirTaxiFinal)
      .scrollIntoView()
      .click({ force: true });
  }

  waitForDriverModal() {
    cy.get(this.modalConductor, { timeout: 30000 }).should("be.visible");
    cy.get(this.modalTitle, { timeout: 30000 })
      .should("contain.text", "El conductor llegará");
  }
}

module.exports = UrbanRoutesPage;
