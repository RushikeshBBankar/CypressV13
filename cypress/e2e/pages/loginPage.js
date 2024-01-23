class LoginPage{

        getEmail(){
                return 'input[type="email"]'

        }

        getPassword(){
                return 'input[type="password"]'
        }

        getSignInButton(){
                return 'button[type="submit"]'

        }

        enterEmail(emailValue){
                cy.get(this.getEmail()).type(emailValue)
        }

        enterPassword(passwordValue){
                cy.get(this.getPassword()).type(passwordValue)
        }

        clickSignIn(){
                cy.get(this.getSignInButton()).click()
        }
}

export default LoginPage