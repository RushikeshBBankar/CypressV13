/// <reference types="Cypress" />

describe('Multi-Country application test',()=>{
        const country_code = ['/in/','/ae/','/uk/','/in/','/ca/']

        it('should test application behavior for country',()=>{
                country_code.forEach((country)=>{
                        cy.visit(`https://www.apple.com${country}`)
                         cy.url().should('include',country)
                         cy.get('#globalnav-list').should('be.visible')
                         //cy.wait(10000)
                        // cy.verifyCountry(country).then((text)=>{
                        //         cy.get('.as-globalfooter-mini').scrollIntoView('a[class*=as-globalfooter-mini-locale-link]').should('have.text',text)
                        // })
                })
        })
})