/// <reference types="cypress" />



export class Login {
    navigate() {
        cy.visit('https://www.linkedin.com/home')
        cy.viewport('macbook-15')
        cy.contains('Sign in').click()
        return this;
    }

    fill_password(term : string) {
        cy.get('#password').type(`${term}`)

        
        

    }



    fill_username(term : string) {
        cy.get('#username').type(`${term}`)
       
    }

    click_login_button() {

       const clk = cy.get('.login__form_action_container [type="submit"]')
       clk.click()
       

    }


}