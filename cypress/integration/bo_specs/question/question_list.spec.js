/// <reference types="Cypress" />

import '../../../support/commands'

describe('Backoffice Steps - Questions', function () {
  beforeEach(() => {
    this.fixtures = Cypress.env('fixtures');
    cy.bo_login(
      this.fixtures.bo_user.email,
      this.fixtures.bo_user.password,
      this.fixtures.bo_user.permission
    )
  })

  it('questions list', () => {
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/listagem')
    cy.url()
      .should('include', '/#/questoes/listagem')
    cy.get('.text-h4')
      .contains('Lista de questões')
  })
})