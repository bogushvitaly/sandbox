Feature: Dashboard Page
    As a user
    I want to access to dashboard, see the top heroes and look for one specific hero
    So I can see my favorite heroes

  Background:
    Given I am on Tour of Heroes
    And I see the dashboard

  Scenario Outline: I click on Narco in the top heroes grid (<hiptest-uid>)
    When I click on "<heroName>" button from top heroes grid
    Then I am on the "<heroName>" hero details page

    Examples:
      | heroName | hiptest-uid |
      | Narco |  |
      | Magneta |  |

  Scenario Outline: I look for Narco with the search (<hiptest-uid>)
    Given I see the search bar
    When I write "<searchChars>" in the search bar
    Then I can see "<heroName>" button in the search result

    Examples:
      | heroName | searchChars | hiptest-uid |
      | Narco | Na |  |
      | Magenta | Gne |  |

  Scenario: I go to the Narco details page from search results
    Given I see "<heroName>" button in the search result
    When I click on the "<heroName>" button from the search result
    Then I am on the "<heroName>" hero details page
