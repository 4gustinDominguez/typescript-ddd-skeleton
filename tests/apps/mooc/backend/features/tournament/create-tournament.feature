Feature: Create a new course
  In order to have tournament in the platform
  As a user with admin permissions
  I want to create a new tournament

  Scenario: A valid non existing tournament
    Given I send a PUT request to "/tournament/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "id": "benidorm",
      "name": "benidorm tournament F7"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: A invalid name param
    Given I send a PUT request to "/tournament/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "name": 444234
    }
    """
    Then the response status code should be 422
