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

  it('associate subject to a new question', () => {
    cy.create_question()
      .then((res) => {
        const question_id = JSON.parse(res.data.createQuestion.data.id)
        console.log(question_id)
        cy.visit(Cypress.env('bo_questions') + '/#/questoes/editar/' + question_id)
      })

    // Associate subject to queestion title
    cy.get('#add-subject-statement')
      .click()
    cy.xpath('/html/body/div[3]/div[2]/div/div[2]/div[2]/div[1]/div/div/div[1]/div[4]/div/div')
      .click()
    cy.get('.q-card > .q-card__actions > .q-btn')
      .contains('Associar')
      .click({ force: true })
    cy.get('.q-notification')
      .contains('Matéria/assuntos vinculado com sucesso.')

    // Associate subject to queestion alternatives
    cy.get('.q-expansion-item')
      .contains('Alternativa A')
      .click()
    cy.get('[data-index="0"] > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > .q-my-md > #add-subject-alternative')
      .click()
    cy.xpath('/html/body/div[3]/div[2]/div/div[2]/div[2]/div[1]/div/div/div[1]/div[4]/div/div')
      .click()
    cy.get('.q-card > .q-card__actions > .q-btn')
      .contains('Associar')
      .click({ force: true })
    cy.get('.q-notification')
      .contains('Matéria/assuntos vinculado com sucesso.')

    cy.get('#ok-button')
      .click()
  })

  it('removes associate subject from a question', () => {
    cy.create_question()
      .then((res) => {
        const question_id = JSON.parse(res.data.createQuestion.data.id)
        console.log(question_id)
        cy.visit(Cypress.env('bo_questions') + '/#/questoes/editar/' + question_id)
      })

    // Remove associate subject from question title
    cy.get('.col-12 > .full-width.column > .q-banner > .q-banner__actions > .material-icons')
      .click()
    cy.get('.q-notification')
      .contains('Matéria/assuntos desvinculado com sucesso.')

    cy.wait(2000)
    // Remove associate subject from question alternatives
    cy.get('.q-expansion-item')
      .contains('Alternativa A')
      .click()
    cy.get('.q-my-md > .q-banner > .q-banner__actions > .material-icons')
      .first()
      .click()
    cy.wait(2000)
    cy.get('.q-notification')
      .contains('Matéria/assuntos desvinculado com sucesso.')

    cy.get('#ok-button')
      .click()
  })
})