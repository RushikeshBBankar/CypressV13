/// <reference types="Cypress" />
 
describe('Advanced UI Elements',()=>{
 
        it('Iframes',()=>{
            cy.visit('https://the-internet.herokuapp.com/iframe')
            cy.get('#mce_0_ifr').within(($iframe)=>{
                const frame = $iframe.contents().find('#tinymce')
                cy.wrap(frame).clear().type('hello')
            })
        })
    })