import{Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('User is on the login page',()=>{
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
})

When('User login with valid credentials',()=>{
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
})

When('User click on the settings button',()=>{
        cy.contains('Settings').click()
})

When('User click on the logout button',()=>{
        cy.contains('Or click here to logout.').click()
})      

Then('User should be routed back to login page',()=>{
        cy.title().should('eq','Conduit')
})