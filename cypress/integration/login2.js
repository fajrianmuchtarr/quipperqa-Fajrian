import Login from '../support/PageObjects/LoginPage'

it ('LoginPage', function(){

const login=new Login();

cy.visit(Cypress.env('url'))

login.getUsernameBox()
.type(Cypress.env('username2'))

login.getPasswordBox()
.type(Cypress.env('password2'))

login.getLoginButton()
.click()

cy.get('[data-test="error"]')
.should('be.visible')
})