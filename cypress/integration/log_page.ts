/// <reference types="cypress" />

import { data } from "cypress/types/jquery"

describe('test1', () => {

    beforeEach(()=>{
        cy.visit('https://www.linkedin.com/home')
        cy.viewport('macbook-15')
        cy.contains('Sign in').click()

    })

    
    it('valid pass & user', () => {

        cy.fixture('uexample').as('logo')  // load data from users.json
        cy.fixture('@logo').then((logo) => {
          // load data from logo.png
          cy.get('username').type(logo.username)
            cy.get('password').type(logo.password)
            cy.contains('Sign in').click()
        })

    })

    it('valid user & invalid pass', () => {

        cy.fixture('uexample').as('logo')  // load data from users.json
        cy.fixture('@logo').then((logo) => {
          // load data from logo.png
          cy.get('username').type(logo.username)
            cy.get('password').type('password')
            cy.contains('Sign in').click()
        })
       
    })

    it('invalid user & invalid pass', () => {

        cy.get('username').type('usernam')
         cy.get('password').type('858585s')
         cy.contains('Sign in').click()

       
    })

    it('blank username & password', () => {
        cy.contains('Sign in').click()

       
    })
    


})