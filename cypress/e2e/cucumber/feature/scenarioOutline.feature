Feature: Login
        In order to preform successful Login
        As a user
        I want to enter correct username and password


        Background:
                Given user navigate to facebook website
                When user validates the home title


        Scenario Outline: In order to verify login to facebook

                Then user entered "<username>" username
                Then user entered "<password>" password
                Then user should "<loginStatus>" successfully logged in

                Examples:
                        | username | password | loginStatus |
                        | rahul    | Pass@123 | be          |
                        | raj      | Pass@1   | not         |
                        | rajani   | Pass@7   | be          |
