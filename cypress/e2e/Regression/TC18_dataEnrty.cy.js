/// <reference types="Cypress" />

describe('Check the page navigation',()=>{
        it('Verify page title',()=>{
                cy.visit('https://webdriveruniversity.com/')
                cy.url().should('include', 'webdriveruniversity')

                //page is open in new tab to avoids this use invoke "removeAttr"
                cy.get('#contact-us').invoke('removeAttr','target').click()
                cy.url().should('include','contactus') 
                cy.get('[name="first_name"]').type('firstName')
                cy.title().should('contain','WebDriver | Contact Us')
        })
})