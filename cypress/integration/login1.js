import Login from '../support/PageObjects/LoginPage'

it ('LoginPage', function(){

const login=new Login();

cy.visit(Cypress.env('url'))

login.getUsernameBox()
.type(Cypress.env('username1'))

login.getPasswordBox()
.type(Cypress.env('password1'))

login.getLoginButton()
.click()
})