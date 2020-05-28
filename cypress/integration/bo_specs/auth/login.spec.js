/// <reference types="Cypress" />

import '../../../support/commands'

describe('Accounts - Login', function () {
  it('Accounts Perfil login', () => {
    cy.visit(Cypress.env('acc_perfil'))
    this.fixtures = Cypress.env('fixtures');
    cy.get("[type='text']")
      .type(this.fixtures.acc_user.email)
    cy.get("[type='password']")
      .type(this.fixtures.acc_user.password)
    cy.get("[type='submit']")
      .click()
    cy.url()
      .should('include', '/meus-dados')
  })

})


