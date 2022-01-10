class SocialMedia{

getTwitter(){

    return cy.get('.social_twitter > a')}

getLinkedin(){

    return cy.get('.social_linkedin > a')}

getFacebook(){

    return cy.get('.social_facebook > a')}
    
}

export default SocialMedia