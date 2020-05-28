/// <reference types="Cypress" />

import '../../../support/commands'

var Chance = require('chance');
var chance = new Chance();



describe('Accounts - Regiter', function () {
  it('Accounts Perfil Register', () => {

    var random_name = chance.name();
    var random_cpf = chance.cpf();
    var random_phone = chance.phone({ country: "br", mobile: true });
    var random_email = chance.email();
    var password = 12345;

    // Create user on perfil acc
    cy.visit(Cypress.env('acc_perfil'))
    cy.get("[type='button']:contains('QUERO ME CADASTRAR')")
      .click()
    cy.url()
      .should('include', '/cadastro')
    cy.get("[type='text']")
      .eq(0)
      .type(random_name)
    cy.get("[type='text']")
      .eq(1)
      .type(random_cpf)
    cy.get("[type='text']")
      .eq(2)
      .type(random_phone)
    cy.get("[type='text']")
      .eq(3)
      .type(random_email)
    cy.get("[type='password']")
      .eq(0)
      .type(password)
    cy.get("[type='password']")
      .eq(1)
      .type(password)
    cy.get("[type='submit']")
      .click()
    cy.get("[src='/img/success-register.35abf2d2.svg']")
      .first()
      .should('be.visible')
      
    // login user on Landing Page Cast
    cy.visit(Cypress.env('ld_cast'))
    cy.get("[data-action='desktop_action_login']")
      .click()
    cy.get('#email')
      .type(random_email)
    cy.get('#password')
      .type(password)
    cy.get(".MuiButton-label:contains('ENTRAR NA MINHA CONTA')")
      .click()
    cy.get("[data-action='account']")
      .should('be.visible')
      .click()
    cy.get("[data-action='kill_session']")
      .click()
  })

  it('Register Cast Landing Page', () => {

    var random_name = chance.name();
    var random_cpf = chance.cpf();
    var random_phone = chance.phone({ country: "br", mobile: true });
    var random_email = chance.email();
    var password = 12345;
    
    cy.visit(Cypress.env('ld_cast'))
    cy.get("[data-action='desktop_action_register']")
      .click()
    cy.get('#name')
      .type(random_name) 
    cy.get('#cpf')
      .type(random_cpf)
    cy.get('#phone')
      .type(random_phone)
    cy.get('#email')
      .type(random_email)
    cy.get('#password')
      .type(password)
    cy.get('#confirm_password')
      .type(password)
    cy.get('.MuiButton-label')
      .click()
    cy.get(".MuiButton-label:contains('COMEÇAR A USAR')")
      .click()
  })

})


