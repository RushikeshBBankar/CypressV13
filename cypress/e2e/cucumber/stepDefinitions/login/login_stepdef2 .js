import{Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import data from '../../../../fixtures/ConduitData.json'

Given('Log2 User is on the login page',()=>{
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
})

When('Log2 User login with valid credentials',()=>{
        cy.get('input[type="email"]').type(data.validEmail)
        cy.get('input[type="password"]').type(data.validPassword)
        cy.get('button[type="submit"]').click()
})

When('Log2 User click on the logout button',()=>{
        cy.contains('Or click here to logout.').click()
})      

Then('Log2 User should be routed back to login page',()=>{
        cy.title().should('eq','Conduit')
})
When('Log2 User click on the settings button', () => {
        cy.contains('Settings').click()
  // Write code here that turns the phrase above into concrete actions
})
