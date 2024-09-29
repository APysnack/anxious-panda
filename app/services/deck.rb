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
    cards = @sub_type ? Card.where(game: @game, sub_type: @sub_type) : Card.where(game: @game)
    cards.map do |card|
      {
        id: card.id,
        name: card.name,
        front_image_url: card.front_image_url,
        back_image_url: card.back_image_url
      }
    end
  end
end
