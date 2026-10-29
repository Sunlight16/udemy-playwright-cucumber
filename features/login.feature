Feature: Login Action
    As a User
    I want to login into application

    Scenario: Login with Valid Creds
        Given I visit a login page
        When I fill the login form with valid credentials
        Then I should see the home page

    Scenario: Login with Invalid Creds
        Given I visit a login page
        When I fill the login form with "<username>" and "<password>"
        Then I wait for 3 seconds

        Examples:
            | username | password |
            | invalidUser | invalidPass |
            | anotherInvalidUser | anotherInvalidPass |