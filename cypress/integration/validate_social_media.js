import Login from '../support/PageObjects/LoginPage'
import SocialMedia from '../support/PageObjects/SocialMedia'

it ('Validate_social_media', function(){

const login=new Login();
const navbar=new SocialMedia();

cy.visit(Cypress.env('url'))

login.getUsernameBox()
.type(Cypress.env('username1'))

login.getPasswordBox()
.type(Cypress.env('password1'))

login.getLoginButton()
.click()

navbar.getFacebook()
.click()
.should('have.attr' , 'href' , 'https://www.facebook.com/saucelabs');

navbar.getLinkedin()
.click()
.should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')

navbar.getTwitter()
.click()
.should('have.attr', 'href' , 'https://twitter.com/saucelabs')

})


