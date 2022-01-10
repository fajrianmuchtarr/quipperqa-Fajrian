import Login from '../support/PageObjects/LoginPage';
import HomePage from'../support/PageObjects/HomePage';

it ('Sortingname1', function(){

const login=new Login();
const homepage=new HomePage();

cy.visit(Cypress.env('url'))

login.getUsernameBox()
.type(Cypress.env('username1'))

login.getPasswordBox()
.type(Cypress.env('password1'))

login.getLoginButton()
.click()

homepage.getItemBackpack()
.click()

homepage.getShoppingCart()
.click()

homepage.getCheckoutButton()
.click()

homepage.getFirstName()
.type('qa')
.should('have.value','qa')

homepage.getLastName()
.type('1')
.should('have.value','1')

homepage.getPostalCode()
.type('1450')
.should('have.value', '1450')

homepage.getContinueButton()
.click()

cy.contains('Sauce Labs Backpack')
.should('be.visible')

homepage.getFinishButton()
.click()

cy.contains('THANK YOU FOR YOUR ORDER')
.should('be.visible')

homepage.getBackToProduct()
.click()

})