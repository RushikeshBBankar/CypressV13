/// <reference types="Cypress" />

describe('Check the page navigation',()=>{
        it('Verify text',()=>{
                cy.visit('https://www.way2automation.com/way2auto_jquery/')
                cy.url().should('include', 'jquery')
                cy.get('#load_box').find('input').its('length').then((ElementLength)=>{
                        cy.log(ElementLength)
                })
                cy.get('#load_box > form > fieldset').children('input').its('length').then((ElementLength)=>{
                        cy.log(ElementLength)
                })
         })
})