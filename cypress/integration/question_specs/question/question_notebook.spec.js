/// <reference types="Cypress" />

import '../../../support/commands'

describe('Student Steps - Questions', function () {
  beforeEach(() => {
    this.fixtures = Cypress.env('fixtures');
    cy.login(
      this.fixtures.student.grant_type,
      this.fixtures.student.email,
      this.fixtures.student.password
    )
  })

  it('add question notebook', () => {
    cy.visit(Cypress.env('questions') + '/cadernos/listagem')
    cy.get('button')
      .contains('Criar caderno')
      .click()
    cy.get('input')
      .type(this.fixtures.student.notebook.title)
    cy.get('button')
      .contains('Criar caderno')
      .click()
    cy.get('.z-60')
      .contains('Caderno adicionado com sucesso')
  })

  it('add question to a notebook', () => {
    // Search questions
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Matéria')
      .click()
    cy.get('.col > .bg-white > .w-full')
    cy.get('.px-2 > :nth-child(2) > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('button')
      .contains('buscar questões')
      .click()

    // Add question to question book
    cy.wait(3000)
    cy.get('button')
      .contains('opções da questão')
      .first()
      .click()
    cy.get('.pt-0 > .text-gray-6')
      .click()

    cy.get('#notebook-card-header')
      .contains('check_box_outline_blank')
      .click()

    cy.get('button')
      .contains('Adicionar questão ao caderno')
      .click()
    cy.get('.z-60')
      .contains('Questão adicionada com sucesso')
  })

  it('remove a question notebook', () => {
    cy.visit(Cypress.env('questions') + '/cadernos/listagem')
    cy.get('.mt-5 > .uppercase')
      .first()
      .click()
    cy.get('.list-none')
      .contains('delete')
      .click()
    cy.get('#modal-default-btnright')
      .click()
    cy.get('.z-60')
      .contains('Caderno deletado com sucesso')
  })
})