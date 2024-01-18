/// <reference types="Cypress" />

describe("Radio buttons ",()=>{

    it("validate the the radio button",()=>{
        cy.visit('https://webdriveruniversity.com/')
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
        cy.get('#radio-buttons').find("[type='radio']").first().click()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).click()
    })

    it("validate the specific To check perticular radio button ",()=>{
        cy.visit('https://webdriveruniversity.com/')
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
        
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('[value="lettuce"]').check().should('be.checked')     

    })

})