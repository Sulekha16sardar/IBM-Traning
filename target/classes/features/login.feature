Feature: Search

@smoke
Scenario : Testing multi scenario case1
Given Testing multi scenario 

@smoke

Scenario Outline: Validate Search functionality
        Given user is in Search page
        When user enters "<product>" product
        And Click on Search button
        Then Product "<product>" should be displayed
        Examples:
      | product |
      | iPhone  |
      | MacBook Air  |
      | MacBook Pro  |