/// <reference types="cypress" />



export class Login {
    navigate() {
        cy.visit('https://www.linkedin.com/home')
        cy.viewport('macbook-15')
        cy.contains('Sign in').click()
        return this;
    }
}