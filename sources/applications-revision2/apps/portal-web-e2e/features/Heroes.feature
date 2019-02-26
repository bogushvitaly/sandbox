Feature: Heroes
  As a user
  I want to see all the heroes already present on Tour of Heroes
  So I can add another and read about a lot of them and learn more about them

  Background:
    Given I am on the heroes page

  Scenario: Successful adding a new hero
    When I type "Tenth Hero" in the add hero bar
    And I click the add button
    Then I see "Tenth Hero" in the heroes list

  Scenario: Successful deleting hero from the heroes list
    When I click the "Fifth Hero" delete button
    Then I do not see the "Fifth Hero" in the heroes list

  Scenario: Successful transition on the hero detail page from the heroes page
    When I click the "First Hero" button
    And I transitioned to the "First Hero" hero details page
