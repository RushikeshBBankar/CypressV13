/// <reference types="Cypress" />
 
describe('Api bad request',()=>{
        it('Testing bad Request',()=>{
                cy.request({
                        method: 'GET',
                        url: 'https://reqres.in/api/users/@',
                        failOnStatusCode: false
                }).then((response)=>{
                        expect(response.status).to.be.eq(404)
                })
        })
})