import HomePage from '../support/PageObjects/HomePage';
import Login from '../support/PageObjects/LoginPage'

it ('Sorting_ZA', function(){

const login=new Login();
const homepage=new HomePage();

cy.visit(Cypress.env('url'))

login.getUsernameBox()
.type(Cypress.env('username1'))

login.getPasswordBox()
.type(Cypress.env('password1'))

login.getLoginButton()
.click()

homepage.getSorting()
.select('hilo')

cy.get('#item_5_title_link > .inventory_item_name')
.should('be.visible')
})