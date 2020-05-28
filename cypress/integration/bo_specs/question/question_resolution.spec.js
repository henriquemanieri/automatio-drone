/// <reference types="Cypress" />

import '../../../support/commands'

describe('Backoffice Steps - Questions', function () {
  beforeEach(() => {
    this.fixtures = Cypress.env('fixtures');
  })

  it('foward question', () => {
    cy.bo_login(
      this.fixtures.bo_moderator.email,
      this.fixtures.bo_moderator.password,
      this.fixtures.bo_moderator.permission
    )
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/encaminhar')

    cy.create_question()
      .then((res) => {
        const question_id = JSON.parse(res.data.createQuestion.data.id)
        console.log(question_id)
        cy.get('.q-field__native')
          .type(question_id)
          .type('{enter}')
      })

    cy.get(':nth-child(1) > .router-link-exact-active > .q-card > .justify-between > :nth-child(1) > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__check')
      .click()

    cy.get('#create-button')
      .click()

    cy.get('#person')
      .type(this.fixtures.bo_teacher.email)

    cy.get('.q-item__label')
      .contains(this.fixtures.bo_teacher.email)
      .click()

    cy.get('.q-btn')
      .contains('Atribuir ao docente')
      .click()

    cy.get('.q-notification')
      .contains('Questão encaminhada para "' + this.fixtures.bo_teacher.email + '"')
  })

  it('send resolution', () => {
    cy.bo_login(
      this.fixtures.bo_teacher.email,
      this.fixtures.bo_teacher.password,
      this.fixtures.bo_teacher.permission
    )
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/encaminhadas-para-mim')

    cy.get('.q-card__section')
      .first()
      .click()

    cy.get('.q-tab')
      .contains('Cadastro de solução')
      .click({ force: true })

    cy.get(':nth-child(2) > :nth-child(1) > .q-editor > .q-editor__content')
      .type('Solução curta...')

    cy.get(':nth-child(2) > .column.q-my-md > .q-editor > .q-editor__content')
      .type('Solução completa...')
    cy.get('#incomming-button')
      .click()

    cy.get('.q-notification')
      .contains('Questão enviada para aprovação')
  })

  it('aprove resolution', () => {
    cy.bo_login(
      this.fixtures.bo_moderator.email,
      this.fixtures.bo_moderator.password,
      this.fixtures.bo_moderator.permission
    )
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/aprovar')

    cy.get(':nth-child(1) > .q-card > :nth-child(5) > a > .q-btn')
      .click()

    cy.get('#approve-button')
      .click()

    cy.get('.q-notification')
      .contains('Questão aprovada com sucesso')
  })

  it('reprove resolution', () => {
    cy.bo_login(
      this.fixtures.bo_moderator.email,
      this.fixtures.bo_moderator.password,
      this.fixtures.bo_moderator.permission
    )
    cy.visit(Cypress.env('bo_questions') + '/#/questoes/aprovar')

    cy.get(':nth-child(1) > .q-card > :nth-child(5) > a > .q-btn')
      .click()

    cy.get('#reject-button')
      .click()

    cy.get('.q-card > :nth-child(2) > .q-editor > .q-editor__content')
      .type('Solução reparovada!')

    cy.get('.q-mt-lg > .q-field > .q-field__inner > .q-field__control > :nth-child(2) > .material-icons')
      .click()

    cy.get('.q-mt-lg > .q-field > .q-field__inner > .q-field__control')
      .type(this.fixtures.bo_teacher.email)

    cy.get('.q-item__section')
      .contains(this.fixtures.bo_teacher.email)
      .click()

    cy.get('.q-btn')
      .contains('Enviar para o professor')
      .click()

    cy.get('.q-notification')
      .contains('Questão reprovada com sucesso')
  })
})