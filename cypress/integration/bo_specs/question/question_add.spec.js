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

  it('question add', () => {
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/listagem')
    cy.url()
      .should('include', '/#/questoes/listagem')
    cy.get('#create-button')
      .click()
    cy.url()
      .should('include', '/#/questoes/criar')

    // Question form
    cy.wait(1000)
    cy.get('.q-field__control')
      .type('BB')
    cy.wait(1000)
    cy.get('.q-item__label')
      .contains(this.fixtures.exam.title)
      .click()
    cy.get('#add-exam')
      .click()
    cy.get('.q-notification')
      .contains('Prova vinculada com sucesso.')

    // Add title
    cy.get('.q-editor__content')
      .type(this.fixtures.question.title)

    // Add alternatives
    cy.get('#add-alternative')
      .click()
    cy.get('[data-index="0"] > .q-expansion-item > .q-expansion-item__container > .q-item')
      .click()
    cy.get('.q-mt-md > .q-editor > .q-editor__content')
      .type(this.fixtures.question.alternative_1)
    cy.get(':nth-child(4) > :nth-child(1) > .q-checkbox')
      .click()

    cy.get('#add-alternative')
      .click()
    cy.get('[data-index="1"] > .q-expansion-item > .q-expansion-item__container > .q-item')
      .click()
    cy.get('[data-index="1"] > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > .q-mt-md > .q-editor > .q-editor__content')
      .type(this.fixtures.question.alternative_1)
    cy.get('#ok-button')
      .click()
    cy.wait(1000)
    cy.get('.q-notification')
      .contains('Questão cadastrada com sucesso!')
    cy.url()
      .should('include', '/#/questoes/editar')
  })

  it('question form validation', () => {
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/listagem')
    cy.get('#create-button')
      .click()
    cy.url()
      .should('include', '/#/questoes/criar')

    // Question form
    cy.wait(1000)
    cy.get('#ok-button')
      .click()
    cy.get('.q-notification')
      .contains('Corrija os erros antes de criar a questão')
    cy.get('.q-notifications__list--top.items-center > :nth-child(2)')
      .contains('Você precisa ter pelo menos 1 alternativa correta')
    cy.get('.q-notifications__list--top.items-center > :nth-child(3)')
      .contains('Você precisa ter pelo menos 2 alternativas')
    cy.get('.q-notifications__list--top.items-center > :nth-child(4)')
      .contains('A questão precisa de um enunciado')
  })
})