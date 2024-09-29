class Deck
  def initialize(game, sub_type = nil)
    @game = game
    @sub_type = sub_type
    @cards = generate_deck.to_a
    shuffle! 
  end

  def shuffle!
    @cards.shuffle!
  end

  def draw_cards(x)
    return [] if x <= 0 
    drawn_cards = @cards.shift(x)
    drawn_cards || []
  end

  private

  def generate_deck
    if @sub_type
      Card.all.where(game: @game, sub_type: @sub_type)
    else
      Card.all.where(game: @game)
    end
  end
end
