
/// <reference types="Cypress" />

describe("verify children, find",()=>{
        beforeEach(() => {
            cy.visit('/')
            cy.get('#data-table').invoke('removeAttr','target').click()
        })
            it("children() to get the children of DOM element",()=>{ 
                 cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
            })
            it("closest() to validate teh closest ancestor DOM element",()=>{
                cy.get('.traversal-badge').closest('ul').should('have.class','list-group') 
                 
            })
            it("eq() To retrieve a specific element based on Index",()=>{
                cy.get('.traversal-drinks-list>*').eq(2).should('contain','Milk') 
                 
            })
            it("filter() to retrieve DOm elements that match a specific selector",()=>{
                cy.get('.btn-group-toggle>*').filter('.active').should('contain','Button-1') 
                 
            })
            it("find() to retrieve Dom element of a given selectors",()=>{
                cy.get('.traversal-pagination').find('li').find('a').should('have.length',7) 
                 
            })
            it("first() to retrieve the first DOM element within elements",()=>{
                cy.get('.traversal-table>tbody>tr>td').first().should('contain','Andy') 
                 
            })
            it("last() to retrieve the last DOM element within elements",()=>{ 
                cy.get('.traversal-table>tbody>tr>td').last().should('contain','Scott')
            })
            it("nextAll() to get all of the next sibling DOM element within element",()=>{ 
                 cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length','3')
            })
            it("nextUntil() to get all of the next sibling DOM elements within element until another element ",()=>{
                cy.get('#coffee').nextUntil('Milk')
                 
            })
            it("not() to remove DOM element from the set of element",() =>{
                cy.get('.traversal-button-states>button').not('.disabled').should('not.have.class','disabled')
            })
            it("parent() to get parent DOM element of element",() =>{
                cy.get('.traversal-mark').parent().should('contain','Lorem ipsum dolor sit amet')
            })
        
        
            it("parents() to get parent DOM element of element",() =>{
                cy.get('.traversal-cite').parents().should('match','blockquote')
            })
        
            it("prev() To get previous sibling DOM element within element",() =>{
                cy.get('#sugar').prev().contains('Espresso')
            })
        
            it("prevAll() To get all privious sibling DOM element withn elemt",() =>{
               cy.get('.sales').prevAll().should('have.length',2)
            })
        
            it("prevUntil() To get all privious sibling DOM element withn element until other element",() =>{
                cy.get('#veggie').prevUntil().should('have.length',6)
            })
            it("siblings() to get all sibling DOM element of elementt",() =>{
                cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
             })
         
        
        
        })