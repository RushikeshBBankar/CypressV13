class LandingPage{
        getSignIn(){
                return 'Sign in'
        }

        clickSignInButton(){
                cy.contains(this.getSignIn()).click()
        }
}
export default LandingPage