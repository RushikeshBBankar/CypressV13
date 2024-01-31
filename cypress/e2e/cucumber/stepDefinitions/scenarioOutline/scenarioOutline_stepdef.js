import{Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given(/^user navigate to facebook website$/, function () {

        return console.log("@Given ---user navigate to facebook website ");
});

When(/^user validates the home title$/, function () {
        return console.log("@Then ---user user validates the home title");
       // return 'pending';
});

Then(/^user entered "([^"]*)" username$/, function (username) {
        return console.log("@Then ---user entered "+username+" username");
});

Then(/^user entered "([^"]*)" password$/, function (password) {
        return console.log("@Then ---user entered "+password+" password");
});


Then(/^user should "([^"]*)" successfully logged in$/, function (logInType) {
        return console.log("@Then ---user should "+logInType+" successfully logged in");
});



Then('user validates the captcha image', function (table) {

        var data = table.hashes()[0]
        return console.log("@Then ---user validates the captcha image"+"Country name: "+data['Country']+" and the code is "+data['Code']+" ")
});