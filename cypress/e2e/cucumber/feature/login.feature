Feature: Login Functionality

Scenario: Login and Logout with valid credentials
Given User is on the login page
When User login with valid credentials
When User click on the settings button
When User click on the logout button
Then User should be routed back to login page