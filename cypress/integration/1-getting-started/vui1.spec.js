describe("Cypress test with Visual Regression", () => {
  it("Example test", () => {
    cy.visit("https://demo.lambdatest.com/");
    cy.screenshot();
  });
});