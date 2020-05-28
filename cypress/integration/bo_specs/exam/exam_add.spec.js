/// <reference types="Cypress" />

import '../../../support/commands'
import faker from 'faker'

describe('Backoffice Steps - Exam', function () {
  beforeEach(() => {
    this.fixtures = Cypress.env('fixtures');
    cy.bo_login(
      this.fixtures.bo_admin.email,
      this.fixtures.bo_admin.password,
      this.fixtures.bo_admin.permission
    )
    cy.visit(Cypress.env('bo_audio'))
  })

  it('Create Album', () => {
    cy.get('.q-btn-item')
      .first()
      .click()
    cy.url()
      .should('include', '/#/albuns/novo')

    // Album form
    cy.wait(3000)
    cy.get("[aria-label='Nome']")
      .type('New Album')
    cy.get("[aria-label='Descrição']")
      .type('Description Album Test')

    // cy.get('#file')
    //   .click()
    cy.get('.q-expansion-item__toggle-icon')
      .click()

    cy.get("[aria-label='Título da seção']")
      .type('Album Title Section')
    cy.get("[aria-label='Descrição da seção']")
      .type('Album Description Section')

    cy.get(".list-group-item")
      .first()
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 100, clientY: 200 })
      .trigger('mouseup', { force: true })

  //   var register = faker.random.number();
  //   cy.get(':nth-child(4) > .justify-between > :nth-child(2) > .q-field > .q-field__inner > .q-field__control')
  //     .type(register)

  //   cy.get('.full-width > .q-field > .q-field__inner > .q-field__control')
  //     .click()

  //   cy.get('.q-virtual-scroll__content')
  //     .contains(this.fixtures.exam.type)
  //     .click()

  //   // Exam pdf upload
  //   const fileName = 'exam.pdf';
  //   cy.fixture(fileName).then(fileContent => {
  //     cy.get('.filepond--browser').upload({ fileContent, fileName, mimeType: 'application/pdf' });
  //   });

  //   cy.get('.pdf-shadow--type')
  //     .contains(this.fixtures.exam.type)
  //   cy.get('#ok-button')
  //     .click()
  //   cy.get('.q-notification')
  //     .contains('Prova cadastrada com sucesso!')
  // })

  // it('exam form validation', () => {
  //   cy.get('#create-button')
  //     .click()
  //   cy.url()
  //     .should('include', '/#/provas/criar')

  //   cy.get('#ok-button')
  //     .click()
  //   cy.get('.q-notification')
  //     .contains('Corrija os erros antes de criar a prova')
  })
})