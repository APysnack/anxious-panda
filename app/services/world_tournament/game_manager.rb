class WorldTournament::GameManager
  attr_accessor :users, :game_state, :race_deck, :weapon_deck, :player_1, :player_2

  def initialize(user_1 = User.first, user_2 = User.second)
    @game = Game.find_by(name: "World Tournament")
    @player_1 = WorldTournament::Player.new(user_1)
    @player_2 = WorldTournament::Player.new(user_2)
    @players = [@player_1, @player_2]
    @race_deck = initialize_deck("Race")
    @class_deck = initialize_deck("Class")
    @weapon_deck = initialize_deck("Weapon")
    @game_state = initialize_game_state
    @game_state[:current_player] = select_first_player.user
  end

  def initialize_deck(sub_type)
    Deck.new(@game, sub_type)
  end

  private

  def initialize_game_state
    {
      current_player: nil, 
      current_turn: 0,
      starter_race_cards: @race_deck.draw_cards(6),
      starter_weapon_cards: @weapon_deck.draw_cards(6),
      starter_class_cards: @class_deck.draw_cards(6),
    }
  end

  def select_first_player
    @players.sample
  end
end
