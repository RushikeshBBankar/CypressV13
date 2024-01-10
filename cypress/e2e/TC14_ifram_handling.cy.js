/// <reference types="Cypress" />

describe("Handling Iframe & Modals",()=>{

    it("Handle webdriveruni ifram and model",()=>{

        cy.visit('https://webdriveruniversity.com/') 
        cy.get('#iframe').invoke('removeAttr','target').click()
        
        cy.get('#frame').then($iframe => {
            const body =$iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedtext) =>{
            const text = $expectedtext.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as');
        })
        cy.get('@modal').contains('Close').click()
    })

})