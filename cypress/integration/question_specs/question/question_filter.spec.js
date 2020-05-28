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

  it('question search by subject', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Matéria')
      .click()
    cy.get('.col > .bg-white > .w-full')
    cy.get('.px-2 > :nth-child(2) > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.flex-col > .overflow-y-scroll')
      .contains('Administração Geral')
  })

  it('question search by organizer', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Banca')
      .click()
    cy.get('.col > .bg-white > .w-full')
    cy.get('.px-2 > :nth-child(1) > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('ACAFE')
  })

  it('question search by area', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Área')
      .click()
    cy.get('.col > .bg-white > .w-full')
    cy.get('[data-index="0"] > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('Bancária')
  })

  it('question search by institution', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Órgão')
      .click()
    cy.get('.col > .bg-white > .w-full')
      .type('Banco do Brasil')
      .type('{enter}')
    cy.get('div.flex')
      .contains('Banco do Brasil')
    cy.get('.col > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('Banco do Brasil')
  })

  it('question search by year', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Ano')
      .click()
    cy.get('[data-index="0"] > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('2020')
  })

  it('question search by formation area', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Formação')
      .click()
    cy.get('.col > .bg-white > .w-full')
    cy.get('[data-index="0"] > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('Administração')
  })

  it('question search by difficulty', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Dificuldade')
      .click()
    cy.get('[data-index="0"] > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('Muito fácil')
  })

  it('question search by formation', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Escolaridade')
      .click()
    cy.get('[data-index="0"] > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('Nível superior')
  })

  it('question search by  office', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Cargo')
      .click()
    cy.get('.col > .bg-white > .w-full')
      .type(this.fixtures.question.office)
      .type('{enter}')
    cy.get('div.flex')
      .contains(this.fixtures.question.office)
    cy.get('.col > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains(this.fixtures.question.office)
  })

  it('question search by region', () => {
    cy.visit(Cypress.env('questions') + '/questoes/buscar')
    cy.get('.flex')
      .contains('Região')
      .click()
    cy.get('[data-index="0"] > div.flex > .cursor-pointer')
      .click()
    cy.get('.bg-white.h-full > .p-5 > .bg-blue-6')
      .click()
    cy.get('.pt-1 > .flex-row')
      .contains('Federal')
  })
})