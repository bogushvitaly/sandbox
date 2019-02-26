Feature: Initial State
  As a user
  I want to see Tour of Heroes fully load
  So that I can navigate through the Tour of Heroes

  Scenario: Successful loading of the initial page
    Given I am on the dashboard page
    And I see the "Tour of Heroes" in the title
    And I see the dashboard button
    And I see the heroes button
    And I see the dashboard view

  Scenario: Successful transition to the heroes page from the initial page
    Given I am on the dashboard page
    When I click the heroes button
    Then I transitioned to the heroes page

  Scenario: Successful transition to the dashboard page from the heroes page
    Given I am on the heroes page
    When I click the dashboard button
    Then I transitioned to the dashboard page
