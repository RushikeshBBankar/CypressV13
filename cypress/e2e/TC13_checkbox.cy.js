/// <reference types="Cypress" />

describe("Verify checkboxs via webdriveruni",()=>{

    it("Check and validaet the check box", ()=>{
        cy.visit('https://webdriveruniversity.com/') 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
        
        //method 1
       
       
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        //.should('be.checked') //validate the check box is selected or not

        //method 2

        cy.get('#checkboxes > :nth-child(1) > input').as('option1')
        cy.get('@option1').check().should('be.checked')

    })
    it("UnCheck and validaet the check box ", ()=>{
        cy.visit('https://webdriveruniversity.com/') 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
    
        cy.get(':nth-child(5) > input').as('option3')
        cy.get('@option3').uncheck().should('not.be.checked')

    })

    it.only("Multiple Check box and validaet the check box ", ()=>{
        cy.visit('https://webdriveruniversity.com/') 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
       cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')
    })

})