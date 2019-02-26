Feature: Dashboard Page
  As a user
  I want to access to dashboard, see the top heroes and look for one specific hero
  So I can see my favorite heroes

  Background:
    Given I am on the dashboard page
    And I see the dashboard view

  Scenario Outline: Successful transition to the hero detail page from the top heroes grid (<hiptest-uid>)
    When I click the "<heroName>" button from the top heroes grid
    Then I transitioned to the "<heroName>" hero details page

    Examples:
      | heroName    | hiptest-uid |
      | First Hero  |             |
      | Second Hero |             |

  Scenario Outline: Searching item using search bar (<hiptest-uid>)
    Given I see the search bar
    When I write "<searchChars>" in the search bar
    Then I see the "<heroName>" button in the search result

    Examples:
      | heroName    | searchChars | hiptest-uid |
      | First Hero  | Firs        |             |
      | Second Hero | Sec         |             |

  Scenario: Successful transition to the hero detail page through the search bar
    Given I see the "First Hero" button in the search result
    When I click on the "First Hero" button from the search result
    Then I transitioned to the "First Hero" hero details page
