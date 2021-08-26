Feature: GameService
  Everybody wants to start the game

  Scenario: Games Can be started
    Given A stopped game state
    When I call the gameserver.start method
    Then the game state should be "UP"
    And the response should be "Game is UP"