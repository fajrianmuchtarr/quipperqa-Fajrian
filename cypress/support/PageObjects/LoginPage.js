class LoginPage{

    getUsernameBox(){
        return  cy.get('[data-test="username"]')}

   getPasswordBox(){
    return cy.get('[data-test="password"]')}

   getLoginButton(){
    return cy.get('[data-test="login-button"]')}
}

export default LoginPage
