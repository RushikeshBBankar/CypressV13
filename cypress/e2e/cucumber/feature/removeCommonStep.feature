Feature: Login
        In order to preform successful Login
        As a user
        I want to enter correct username and password


        Background:
                Given user navigate to facebook website
                When user validates the home title


        Scenario: In order to verify login to facebook

                Then user entered "valid" username
                Then user entered "valid" password
                Then user should "be" successfully logged in

        @dev
        Scenario: In order to verify login to facebook as invalid user

                Then user entered "invalid" username
                Then user entered "invalid" password
                Then user should "not" successfully logged in