import '@shelex/cypress-allure-plugin';

Cypress.Commands.add("WebdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textLocator) =>{

        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(textLocator)
        // For the assertion "Should" and "contains" both should same job for us
        //But "contains" is more simplified 
        //Because ".comtains"  search inside the entire element for specific text
   
})

Cypress.Commands.add("demoCypress",()=>{
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('verifyCountry',(country_code)=>{
        switch(country_code){
                case '/in/':
                        return 'India'
                case '/uk/':
                        return 'United Kingdom'
                case '/ae/':
                        return 'United Arab Emirates'
                case '/ca/':
                        return 'Canada'
                default:
                        return 'United Arab Emirates'
        }
})