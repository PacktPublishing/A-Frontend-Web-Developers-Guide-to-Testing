/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://www.packtpub.com')
  })

  it('cy.viewport() - set the viewport size and dimension', () => {

    cy.get('.wrapper').should('be.visible')
    cy.viewport(320, 480) 
   // the navbar should have collapsed since our screen is smaller
    cy.get('.subscribe_cta_link.hidden-xs > .subscribe_cta').should('not.be.visible')
    cy.get('.wrapper').should('be.visible').click()
   // cy.get('.wrapper').find('a.subscribe_cta_link.hidden-xs > .subscribe_cta').should('be.visible')

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999)

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
  
      // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(200).within.apply()

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  })

  it('set timer',() => {
  cy.visit('http://www.packtpub.com')
  cy.tick(10000)
  cy.clock().invoke('restore')
})
})
