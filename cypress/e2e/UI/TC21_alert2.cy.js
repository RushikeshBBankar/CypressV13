describe('Advanced UI Elements',()=>{
 
        it('Simple alert',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.contains('Click for JS Alert').click()
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('I am a JS Alert')
            })
            cy.get('#result').should('contain','You successfully clicked an alert')
            
        })
     
        it('Confirmation alert - Ok button',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.contains('Click for JS Confirm').click()
            cy.on('window:confirm',(str)=>{
                expect(str).to.equal('I am a JS Confirm')
            })
            cy.get('#result').should('contain','You clicked: Ok')
        })
     
        it('Confirmation alert - Cancel button',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.contains('Click for JS Confirm').click()
            cy.on('window:confirm',(str)=>{
                expect(str).to.equal('I am a JS Confirm')
                return false
            })
            cy.get('#result').should('contain','You clicked: Cancel')
        })
     
        it('Prompt Alert',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then(($win)=>{
                cy.stub($win,'prompt').returns('Hello Alert')
                cy.contains('Click for JS Prompt').click()        
            })
            cy.get('#result').should('contain','You entered: Hello Alert')
        })
    })