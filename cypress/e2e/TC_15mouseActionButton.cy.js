/// <reference types="Cypress" />

describe("test mouse actions ",()=>{

    it("Scroll element into vew",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click() 
    })
    it("i should be able to drag abd drop a draggable item",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click() 

        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    })

    it("Double Click on Iteam",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click() 
        cy.get('#double-click').dblclick()
    })
    it("Should be able to hold down left click button on the given iteam",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click() 
        
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color','rgb(0, 255, 0)')
        })
    })
})