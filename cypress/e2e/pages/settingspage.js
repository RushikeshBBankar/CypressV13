class SettingsPage{
        getLogOutButton(){return 'Or click here to logout.'}

        clickLogOutButton(){
                cy.contains(this.getLogOutButton()).click()
        }
}

export default SettingsPage