Feature: Login Functionality

Scenario: Login and Logout with valid credentials
Given Log2 User is on the login page
When Log2 User login with valid credentials
When Log2 User click on the settings button
When Log2 User click on the logout button
Then Log2 User should be routed back to login page