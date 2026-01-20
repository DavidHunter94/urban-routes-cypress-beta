const UrbanRoutesPage = require("../pages/UrbanRoutesPage");

describe("Urban Routes - Flujo beta (hasta verificación telefónica)", () => {

  const page = new UrbanRoutesPage();

  beforeEach(() => {
    cy.fixture("data").then((data) => {
      cy.visit(data.urban_routes_url);
      cy.wrap(data).as("data");
    });
  });

  it("Debe completar ruta, tarifa y verificación telefónica", function () {

    const data = this.data;

    // Ruta
    page.setRoute(data.address_from, data.address_to);
    page.getFrom().should("eq", data.address_from);
    page.getTo().should("eq", data.address_to);

    // Tarifa
    page.clickTaxiButton();
    page.selectComfortTariff();
    cy.get(".tcard.active .tcard-title")
      .should("have.text", "Comfort");

    // Teléfono + código SMS
    page.fillPhoneAndVerify(data.phone_number);

    // (Beta) — No continuamos a pago ni extras
    cy.log("Flujo beta completado hasta verificación telefónica");
  });

});
