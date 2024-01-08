/// <reference types="Cypress" />

describe("test Contact us from via WebdriverUni",()=>{

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    
    })
    before(function(){
        cy.fixture('example').then(function(data){
            // this.data = data;
            //if some time its command not use so we use onother command
            globalThis.data = data;

        })
    })
    //pass Test with all cridential
    it("Should be able to submit a succesful submition via contact us from",()=>{
        
      cy.WebdriverUni_ContactForm_Submition(data.first_name, data.last_name, data.email, "This is My basic information", 'h1', 'Thank You for your Message!')
    }) 
    
    it("Should  not be able to submit a succesful submition via contact us from",()=>{
       
        cy.WebdriverUni_ContactForm_Submition(data.first_name, data.last_name, " ", "This is My basic information", 'body', 'Error: Invalid email address')
        //getting Succesful Error message all filed Required and Email add mising
    })
})