/// <reference types="Cypress" />

// This is my first test case
describe('Check the page navigation',()=>{
        it('Verify url',()=>{
                cy.visit('https://webdriveruniversity.com/')
                cy.url().should('include', 'webdriveruniversity')
        })
})