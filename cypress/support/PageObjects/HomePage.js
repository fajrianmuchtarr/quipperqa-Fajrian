class HomePage{

    getSortingAtoZ(){
        return cy.get('[data-test="product_sort_container"]')}

    getItemBackpack(){

           return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')}
       
    getShoppingCart(){

        return cy.get('.shopping_cart_link')}

    getCheckoutButton(){

        return cy.get('[data-test="checkout"]')}

    getFirstName(){

       return cy.get('[data-test="firstName"]')}

    getLastName(){

        return cy.get('[data-test="lastName"]')}

    getPostalCode(){

        return cy.get('[data-test="postalCode"]')}

    getContinueButton(){

        return cy.get('[data-test="continue"]')}

    getFinishButton(){

        return cy.get('[data-test="finish"]')}

        getBackToProduct(){

        return cy.get('[data-test="back-to-products"]')}
}
export default HomePage