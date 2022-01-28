
/// <reference types="cypress" />
describe("Docket Delete Test", () => {
	it("Should delete a specific Todo", () => {
		cy.request({
			method: "DELETE",
			url: "https://docket-test.herokuapp.com/api/Todo/2",
			headers: {
				token: "e093eca7-5c8d-4ed4-baaf-ee317489e80b",
			},
		})
			.its("status")
			.should("be.ok");
	});
});

