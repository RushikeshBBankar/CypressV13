/// <reference types="Cypress" />

describe("DropDown buttons ",()=>{

    it("validate the the drop down button",()=>{
        //Url Save in a cypress.config.js. "baseURL"
        cy.visit('/')
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS')


    })

    it("validate the the drop down button without select tag ",()=>{
        //Url Save in a cypress.config.js. "baseURL"
        cy.visit('https://www.goibibo.com/')
        

    })
})