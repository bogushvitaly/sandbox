Feature: Hero Details Page
  As a user
  I want to see my favorite heroes details

  Background:
    Given I transitioned to the "First Hero" hero details page

  Scenario: Successful name editing and transition to dashboard page using the save button
    When I type "Third Hero Updated" in the name bar
    And I click the save button
    Then I transitioned to the dashboard page
    And I see the "Third Hero Updated" in the top heroes grid

  Scenario: Successful transition to the dashboard page using the back button
    When I click the back button
    Then I transitioned to the dashboard page
