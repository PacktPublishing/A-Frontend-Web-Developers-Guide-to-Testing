/// <reference types="cypress" />

const { waitForServer } = require("selenium-webdriver/http/util")
const now = new Date(Date.UTC(2017, 2, 14)).getTime()

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
  })
  it('set timer',() => {
cy.clock(now)
    cy.get('#tick-div').click().should('have.text', '1489449600')
cy.tick(10000) // 10 seconds passed
cy.get('#tick-div').click().should('have.text', '1489449610')
cy.wait(2000)
cy.clock()
cy.tick(60000)
cy.clock().invoke('restore')
})

  /* ==== Test Created with Cypress Studio ==== */
  it('cy_studio_demo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
    cy.get('.dropdown-toggle').click();
    cy.get('#_ > a').click();
    /* ==== End Cypress Studio ==== */
  });
})
