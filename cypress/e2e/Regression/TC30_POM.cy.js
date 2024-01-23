import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SettingsPage from "../pages/settingspage";

describe('POM Test',function(){
 
        beforeEach(function(){
            cy.fixture('ConduitData').as('data')
        })
     
        const landingPage = new LandingPage()
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const settingsPage = new SettingsPage()
     
        it('Conduit Login using POM',function(){
            cy.visit('https://react-redux.realworld.io/')
            landingPage.clickSignInButton()
            loginPage.enterEmail(this.data.validEmail)
            loginPage.enterPassword(this.data.validPassword)
            loginPage.clickSignIn()
            homePage.checkYourFeedIsVisible()
            homePage.clickSettingsButton()
            settingsPage.clickLogOutButton()
        })
    })