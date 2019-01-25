Feature: Heroes
    As a user
    I want to see all the heroes already present on Tour of Heroes
    So I can add another and read about a lot of them and learn more about them

  Background:
    Given I am on the toh heroes page

  Scenario: I add Varian Wrynn as a hero
    When I write "Varin Wrynn" in the add bar
    And I click on the add button
    Then I can see "Varin Wrynn" in the heroes list

  Scenario: I delete Narco from the hero list
    When I click on the "Narco" delete button
    Then I can't see "Narco" in the heroes list anymore

  Scenario: I go on Narco detail page from heroes page
    When I click on the "Narco" button
    And I am on the "Narco" hero details page
