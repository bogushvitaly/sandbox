Feature: Messages
  As a user
  I wan't to see the massages
  So that I have a reminder

  Scenario: Clearing messages from the dashboard page
    Given I am on the dashboard page
    And I see the messages view
    When I click the clear button
    Then I do not see the messages view

  Scenario: Clearing messages from the heroes page
    Given I am on the heroes page
    And I see the messages view
    When I click the clear button
    Then I do not see Messages view

  Scenario: Clearing messages from the hero details page
    Given I am on the "First Hero" detail page
    And I see the messages view
    When I click the clear button
    Then I do not see the messages view
