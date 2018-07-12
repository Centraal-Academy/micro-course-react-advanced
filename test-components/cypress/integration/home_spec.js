
/* eslint-env jest */
/*  global cy */

describe('My First Test', function () {
  it("clicking 'type' navigates to a new url", function () {
    cy.visit('http://localhost:8000/')
    const homeButton = cy.get('.Button').first()
    homeButton.click()
    cy.url().should('include', '/profile')
  })
})
