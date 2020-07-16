/// <reference types="cypress" />

import { data } from "cypress/types/jquery"
import { Login } from '../Page/Login'

describe('Login Page  E2E Tests', () => {

    beforeEach(()=>{
        new Login().navigate();

    })

    it('VALID USER & INVALID PASSWORD', () => {

        cy.fixture('login').then((testdata) => {
          cy.get('#username').type(testdata.un)
            cy.get('#password').type('serosjs')
            cy.get('.login__form_action_container [type="submit"]').click()
            cy.get('#error-for-password').should('contain','not the right password. Please try again or ')

            
        })

    })

    it('INVALID USER & INVALID PASSWORD', () => {

        cy.get('#username').type('ssss')
            cy.get('#password').type('sssss')
            cy.get('.login__form_action_container [type="submit"]').click()
            cy.get('#error-for-username').should('contain','Please enter a valid username')


    })

    it('VALID USER & VALID PASSWORD', () => {

        cy.fixture('login').then((testdata) => {
          cy.get('#username').type(testdata.un)
            cy.get('#password').type(testdata.pw)
            cy.get('.login__form_action_container [type="submit"]').click()
            cy.get('.profile-rail-card__actor-link').should('have.attr','data-control-name','identity_welcome_message')

        })

    })





    it('BLANCK USER&PASSWORD', () => {

        
        cy.get('.login__form_action_container [type="submit"]').click()
        cy.get('#error-for-username').should('contain','Please enter an email address or phone number')

    })

    it('CHECK FORGET PASSWORD ?', () => {

        
        cy.get('.btn__tertiary--medium').should('contain','Forgot password')
        cy.get('.btn__tertiary--medium').click()
        cy.get('#reset-password-submit-button').should('contain','Find account')

        })

        it('CHECK JOIN US ', () => {

        
            cy.get('#join_now').should('contain','Join now')
            cy.get('#join_now').click()
            cy.get('#join-form-submit').should('contain','Agree & Join')


        })





    
    
    

    


})