/// <reference types="Cypress" />

describe('verify the Xpath ',()=>{
        it('Verify text',()=>{
                cy.visit('https://www.google.co.in/')
                cy.xpath("//textarea[@id='APjFqb']").type('Rushikesh')
                
         })
})