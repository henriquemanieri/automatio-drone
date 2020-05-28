/// <reference types="Cypress" />

import '../../../support/commands'

describe('Student Steps - Login', function () {
  it('student login', () => {
    cy.visit(Cypress.env('questions'))
    this.fixtures = Cypress.env('fixtures');
    cy.get('a')
      .contains('Acesso de fundadores')
      .click()
    cy.get('.mt-2')
      .first()
      .type(this.fixtures.student.email)
    cy.get('.mt-8')
      .last()
      .type(this.fixtures.student.password)
    cy.get('form > .filed')
      .click()
    cy.url()
      .should('include', '/questoes/buscar')
  })

  afterEach(() => {
    cy.visit(Cypress.env('profile') + '/app/perfil/change-personal-data')
    cy.get('.logout')
      .click()
  })
})


