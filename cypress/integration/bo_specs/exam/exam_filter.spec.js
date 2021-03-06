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

  it('exam filter by organizer', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get('.q-mb-xl > :nth-child(1) > .q-field > .q-field__inner > .q-field__control')
      .type(this.fixtures.exam.organizer)
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.organizer)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Banca:' + this.fixtures.exam.organizer)
  })

  it('exam filter by institution', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container')
      .type('BB')
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.institution)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Órgão/instituição:' + this.fixtures.exam.institution)
  })

  it('exam filter by area', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get('.q-mb-xl > :nth-child(3) > .q-field > .q-field__inner > .q-field__control')
      .type(this.fixtures.exam.area)
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.area)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Área:' + this.fixtures.exam.area)
  })

  it('exam filter by office', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get(':nth-child(4) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container')
      .type(this.fixtures.exam.office)
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.office)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Cargo:' + this.fixtures.exam.office)
  })

  it('exam filter by formation', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get(':nth-child(5) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container')
      .type(this.fixtures.exam.formation)
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.formation)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Escolaridade:' + this.fixtures.exam.formation)
  })

  it('exam filter by year', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get(':nth-child(6) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container')
      .type(this.fixtures.exam.year)
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.year)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Ano:' + this.fixtures.exam.year)
  })

  it('exam filter by formation area', () => {
    cy.get('.q-btn')
      .contains('Adicionar filtros')
      .click()
    cy.get(':nth-child(7) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container')
      .type(this.fixtures.exam.formation_area)
      .wait(1000)
      .type(' ')
    cy.get('.q-virtual-scroll__content')
      .contains(this.fixtures.exam.formation_area)
      .last()
      .click()
    cy.get('.fixed-bottom > .q-btn')
      .contains('Adicionar')
      .click({ force: true })
    cy.get(':nth-child(2) > .q-chip')
      .contains('Área de formação:' + this.fixtures.exam.formation_area)
  })
})