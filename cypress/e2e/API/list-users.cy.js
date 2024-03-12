describe("Users API", () => {
  it("Get a list of users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
    }).then((response) => {
      expect(response.status).equal(200);
      const data = response.body;
      expect(data).to.have.property("total").and.is.equal(12);
      expect(data.data[0]).to.have.property("id").and.is.equal(7);
    });
  });

  it("Get a single user", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      const data = response.body;
      expect(response.status).equal(200);
      expect(data.data)
        .to.have.property("email")
        .and.is.equal("janet.weaver@reqres.in");
      expect(data.data).to.have.property("first_name").and.is.equal("Janet");
    });
  });
});
