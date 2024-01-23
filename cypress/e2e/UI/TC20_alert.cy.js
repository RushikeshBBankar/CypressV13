/// <reference types="Cypress" />

describe("Handle alert check boc in js",()=>{

    it("Validate js confirm alert box work correctly with the text",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.url().should('include','Popup-Alerts')
        cy.get('#button1').click()
        
        cy.on('window:alert',(str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Validate js confirm alert box work correctly on click ok ",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.url().should('include','Popup-Alerts')
        cy.get('#button4').click()
       // you get alert message  press a button ok 
        cy.on('window:alert',(str) => {
            return true;//It menace you click on ok buttons
           
            // return false;
           //it menace you click on cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it("Validate js confirm alert box work correctly on click Cancel ",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        
        cy.get('#button4').click()

       cy.on('window:confirm',(str) =>{
           return false;            
       }) 
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it("Validate js confirm alert box using stub ",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        
        const stub = cy.stub()
        cy.on('window:confirm',stub)

        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })

})