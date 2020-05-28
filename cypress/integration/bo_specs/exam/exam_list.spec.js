/// <reference types="Cypress" />

import '../../../support/commands'

describe('Backoffice Steps - Exam', function () {
  beforeEach(() => {
    this.fixtures = Cypress.env('fixtures');
    cy.bo_login(
      this.fixtures.bo_user.email,
      this.fixtures.bo_user.password,
      this.fixtures.bo_user.permission
    )
    cy.visit(Cypress.env('bo_questions') + '/#/provas/listagem')
  })

  it('exams list', () => {
    cy.get('.text-h4')
      .contains('Provas')
  })
})