/// <reference types="Cypress" />
import data from '../fixtures/example.json';


describe("test Contact us from via WebdriverUni", () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    })

    //pass Test with all credential
    it("Should be able to submit a successful submission via contact us from", () => {
        cy.WebdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "This is My basic information", 'h1', 'Thank You for your Message!')
    })

    it("Should  not be able to submit a successful submission via contact us from", () => {
        cy.WebdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "This is My basic information", 'body', 'Error: Invalid email address')
        //getting Successful Error message all filed Required and Email add missing
    })
})