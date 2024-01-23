/// <reference types="Cypress" />

describe("DropDown buttons ",()=>{

    it("validate the the drop down button with select tag",()=>{
        cy.visit('/')
        
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click() 
        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS')


    })
    it('Handling Static DropDown',()=>{
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 100%').should('have.value','100%')
    })
 
    it('Handling Dynamic DropDown',()=>{
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Inlagd Sill').click()
    })
 
    it('Handling Multiple DropDown',()=>{
        cy.visit('https://demo.mobiscroll.com/select/multiple-select')
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Electronics & Computers').click()
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click()
    })
})