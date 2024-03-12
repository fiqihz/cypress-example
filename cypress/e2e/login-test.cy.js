describe("Simple Login Test", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("TS-001 -> User login without input Username and Password", () => {
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-input-group > .oxd-text")
      .should("be.visible")
      .and("contain", "Required");
    cy.get(":nth-child(3) > .oxd-input-group > .oxd-text")
      .should("be.visible")
      .and("contain", "Required");
  });

  it("TS-002 -> User login input Username without input Password", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(".oxd-button").click();
    cy.get(".oxd-input-group > .oxd-text")
      .should("be.visible")
      .and("contain", "Required");
  });

  it("TS-003 -> User login without input username but input password", () => {
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(2) > .oxd-input-group > .oxd-text")
      .should("be.visible")
      .and("contain", "Required");
  });

  it("TS-004 -> User login input a correct username but incorrect password", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin1234");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });

  it("TS-005 -> User login input incorrect username but a correct password", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin123");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });

  it("TS-006 -> User login with correct username and password", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-brand-banner > img").should("be.visible");
  });
});
