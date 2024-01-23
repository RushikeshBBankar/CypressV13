/// <reference types="Cypress" />
 
describe('Xpath Functionality',()=>{
 
        it('Login Test using Conduit by Xpath locators',()=>{
            cy.visit('https://react-redux.realworld.io/')
            cy.xpath('//a[normalize-space()="Sign in"]').click()
            cy.xpath('//input[@placeholder="Email"]').type('cypressdemo@gmail.com')
            cy.xpath('//input[@placeholder="Password"]').type('cypressdemo')
            cy.xpath('//button[normalize-space()="Sign in"]').click()
        })
    })