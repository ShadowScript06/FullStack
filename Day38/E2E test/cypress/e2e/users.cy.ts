describe("Users API E2E", () => {
  const user = { name: "Charlie", email: "charlie@test.com" };

  
  it("creates a new user", () => {
    cy.request("POST", "/users", {
      name: "Alice",
      email: "alice@test.com",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });
  });

  it("lists all users", () => {
    cy.request("GET", "/users").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });
});