describe("Users API", () => {
  it("TS-001 -> Get a list of users", () => {
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

  it("TS-002 -> Get a single user", () => {
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

  it("TS-003 -> Create new user", () => {
    const user = {
      name: "kurniawan",
      job: "SDET",
    };
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: user,
    }).then((response) => {
      expect(response.body).to.have.property("name").and.is.equal(user.name);
      expect(response.body).to.have.property("job").and.is.equal(user.job);
    });
  });

  it("TS-004 -> Update data of existing user", () => {
    const user = {
      name: "morpheus",
      job: "zion resident",
    };
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: user,
    }).then((response) => {
      expect(response.body).to.have.property("name").and.is.equal(user.name);
      expect(response.body).to.have.property("job").and.is.equal(user.job);
    });
  });

  it("TS-005 -> Delete existing user", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      expect(response.status).equal(204);
    });
  });
});
