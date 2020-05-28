// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })


// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })


// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('login', (grant_type, email, password) => {
  var api_url = Cypress.env('bowie');
  cy.request({
    method: 'POST',
    url: api_url + '/student_auth/access_token',
    body: {
      grant_type: grant_type,
      email: email,
      password: password
    }
  })
    .then((resp) => {
      cy.setCookie('token', resp.body.data.last_issued_access_token)
    })
})

Cypress.Commands.add('bo_login', (email, password, permission) => {
  var api_url = Cypress.env('jarbas');
  cy.request({
    method: 'POST',
    url: api_url + '/login',
    body: {
      email: email,
      password: password
    }
  })
    .then((resp) => {
      window.localStorage.setItem('acl', JSON.stringify(permission))
      window.localStorage.setItem('token', resp.body.data.token)
      window.localStorage.setItem('user', resp.body.data.email)
    })
})

Cypress.Commands.add('create_question', () => {
  var api_url = Cypress.env('jaime');
  return cy.request({
    method: 'POST',
    url: api_url + '/query',
    headers: {'Cache-Control': 'no-cache'},
    body: {
      operationName:"CreateQuestion",
      variables:{
        payload:{
          authorId:"cadastrador.estrategia@gmail.com",
          topicIds:["60563625"],
          answerType:"MULTIPLE_CHOICE",
          statement:"Enunciado Teste",
          examIds:["61897073"],
          alternatives:[{
            body:"Alternativa A",
            correct:true,
            topicIds:["60563625"],
            position:"0"
          },
          {
            body:"Alternativa B",
            correct:false,
            topicIds:["60563625"],
            position:"1"}],
            labels:[]
          }
        },
        query:"mutation CreateQuestion($payload: QuestionInput!) {\n  createQuestion(input: $payload) {\n    data {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
  })
    .its("body")
})