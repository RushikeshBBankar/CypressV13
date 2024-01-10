/// <reference types="Cypress" />

describe("Handling tables validation",()=>{

        it("table data count",()=>{

                cy.visit('https://money.rediff.com/indices?src=moneyhome_bseIndices_more')

                cy.get('#showMoreLess').click()
                //Total rows
                cy.get('#dataTable tbody tr').should('have.length', 14)
                //Total cal
                cy.get('#dataTable tbody tr:first-child td').should('have.length', 5)

                //Data from row single row
                cy.get('#dataTable tbody tr').eq(5).within(()=>{
                        cy.get('td').then((ele)=>{
                                cy.log(ele.text())
                        })
                })
        })
})    