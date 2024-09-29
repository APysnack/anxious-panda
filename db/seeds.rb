require_relative 'seed_data/world_tournament_cards/race_cards'
require_relative 'seed_data/world_tournament_cards/weapon_cards'
require_relative 'seed_data/world_tournament_cards/class_cards'

User.find_or_create_by(email: 'purleedef@gmail.com') do |u|
  u.password = 'password'
end

User.find_or_create_by(email: 'test@gmail.com') do |u|
  u.password = 'password'
end

world_tournament = Game.find_or_create_by(name: 'World Tournament')
monopoly = Game.find_or_create_by(name: 'Monopoly')

[wt_race_cards, wt_weapon_cards, wt_class_cards].each do |cards|
  cards.each do |card|
    Card.find_or_create_by(game: world_tournament, name: card[:name], sub_type: card[:sub_type]) do |wt_card|
      wt_card.data = card[:data]
      wt_card.front_image = card[:front_image] if card[:front_image].present?
    end
  end
end