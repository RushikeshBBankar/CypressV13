describe('Hookes',()=> {

    before(() => {
         // runs once before all tests
         cy.log("Run once before all test in the block");
      })
      
      beforeEach(() => {
        cy.log("Run before each all test in the block");
        // runs before every test block
      })
      
      afterEach(() => {
        cy.log("Run after each all test in the block");
        // runs after each test block
      })
      
      after(() => {
        cy.log("Run once after all test in the block");
        // runs once all tests are done
      })
      it("Example test 1",()=> {
          cy.log("example test one")
      })
      it("Example test 2",()=> {
        cy.log("example test TWO")
    })
      

})