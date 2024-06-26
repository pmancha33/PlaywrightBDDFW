Feature: As a user I expect to be able t Navigate to the Login Page

    @dev
    @smoke
    @regression
    Scenario: As a user I expect to be able to navigate to login page
        Given I am on the "login" page
        Then the "Login" page should contain the "Login" button