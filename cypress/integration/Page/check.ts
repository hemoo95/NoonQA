/// <reference types="cypress" />



export class check {
    error_pw() {
        cy.get('#error-for-password').should('contain','not the right password. Please try again or ')

    }   

    error_un() {
        cy.get('#error-for-username').should('contain','Please enter a valid username')

    }   

    check_oppend() {
        cy.get('.profile-rail-card__actor-link').should('have.attr','data-control-name','identity_welcome_message')

    } 
    
    blank_click() {
        cy.get('#error-for-username').should('contain','Please enter an email address or phone number')

    } 

    f_pw() {
        cy.get('.btn__tertiary--medium').should('contain','Forgot password')
        cy.get('.btn__tertiary--medium').click()
        cy.get('#reset-password-submit-button').should('contain','Find account')
    } 

    join_chick() {
        cy.get('#join_now').should('contain','Join now')
            cy.get('#join_now').click()
            cy.get('#join-form-submit').should('contain','Agree & Join')
    } 

}