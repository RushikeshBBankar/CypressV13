/// <reference types="Cypress" />
 
describe('Fixtures test',function(){
 
        beforeEach(function(){
            cy.fixture('ConduitData').as('data')
        })
     
        it('Conduit - Valid Credentials',function(){
            cy.visit('https://react-redux.realworld.io/')
            cy.contains('Sign in').click()
            cy.get('input[type="email"]').type(this.data.validEmail)
            cy.get('input[type="password"]').type(this.data.validPassword)
            cy.get('button[type="submit"]').click()
            cy.contains('Settings').click()
            cy.contains('Or click here to logout.').click()
        })
     
        it('Conduit - Invalid Credentials',function(){
            cy.visit('https://react-redux.realworld.io/')
            cy.contains('Sign in').click()
            cy.get('input[type="email"]').type(this.data.invalidEmail)
            cy.get('input[type="password"]').type(this.data.invalidPassword)
            cy.get('button[type="submit"]').click()
            cy.get('.error-messages').should('contain','email or password is invalid')
        })
    })