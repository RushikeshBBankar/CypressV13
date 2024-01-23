/// <reference types="Cypress" />
 
const neatCsv = require('neat-csv')
 
describe('Csv test',function(){
 
    var table;
 
    beforeEach(function(){
        cy.fixture('ConduitCsv.csv')
        .then(neatCsv)
        .then(data=>{
            table = data
        })
    })
 
    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(table[0].username)
        cy.get('input[type="password"]').type(table[0].password)
        cy.get('button[type="submit"]').click()
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })
 
    it('Conduit - Invalid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(table[1].username)
        cy.get('input[type="password"]').type(table[1].password)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})