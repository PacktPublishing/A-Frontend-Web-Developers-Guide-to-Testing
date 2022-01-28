
/// <reference types="cypress" />
describe("Docket Post Test", () => {
	it("Should create a Todo item", () => {
		cy.request({
			method: "POST",
			url: "https://docket-test.herokuapp.com/api/Todo/",
			headers: {
				token: "e093eca7-5c8d-4ed4-baaf-ee317489e80b",
			},
			body: {
				Body: "Walk cat",
			},
		})
			.its("status")
			.should("be.ok");
	});
});

describe("Docket Post Test 2", () => {
	it("Should create a Todo item", () => {
		cy.request({
			method: "POST",
			url: "https://docket-test.herokuapp.com/api/Todo/",
			headers: {
				token: "e093eca7-5c8d-4ed4-baaf-ee317489e80b",
			},
			body: {
				Body: "Barclays Demo",
			},
		})
			.its("status")
			.should("be.ok");
	});
});

describe("Docket Post Test 3", () => {
	it("Should create a Todo item", () => {
		cy.request({
			method: "POST",
			url: "https://docket-test.herokuapp.com/api/Todo/",
			headers: {
				token: "e093eca7-5c8d-4ed4-baaf-ee317489e80b",
			},
			body: {
				Body: "Perfecto Demo",
			},
		})
			.its("status")
			.should("be.ok");
	});
});

