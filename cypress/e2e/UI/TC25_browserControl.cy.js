/// <reference types="Cypress" />
 
describe('@dev Advanced UI Elements',()=>{
 
        it('Browser Controls',()=>{
            cy.visit('https://react-redux.realworld.io/')
            cy.contains('Sign in').click()
            cy.go('back')
            cy.go('forward')
            cy.go(-1)
            cy.go(1)
            cy.get('input[type="email"]').type('cypress')
            cy.reload()
        })
    })