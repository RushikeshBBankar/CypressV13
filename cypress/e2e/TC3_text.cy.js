
/// <reference types="Cypress" />

describe('Check the page navigation',()=>{
        it('Verify text',()=>{
                cy.visit('https://www.way2automation.com/way2auto_jquery/')
                cy.url().should('include', 'jquery')
                cy.title().should('contain','Welcome to the Test Site')
                cy.get('div#load_box > form#load_form > fieldset:nth-of-type(1) > label').then((label)=>{
                       cy.log( label.text());
                })

                cy.get('div#load_box > form#load_form > fieldset:nth-of-type(1) > label').should('contain.text','Name')
                cy.get('div#load_box > form#load_form > fieldset:nth-of-type(1) > label').should('have.text','Name:')
        })
})