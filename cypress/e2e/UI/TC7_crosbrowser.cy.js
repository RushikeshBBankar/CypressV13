

/// <reference types="Cypress" />

describe('Check the page navigation',()=>{
        it('Verify text',()=>{
                cy.visit('https://www.wikipedia.org/')
                cy.get('a').contains('Commons').click()
                //after click it navigates to different domain. To avoid the fail test case add a "chromeWebSecurity: false" in a cypress.config.js
                cy.get('.mainpage-welcome-sitename').should('contain.text','Commons')
               
         })
})