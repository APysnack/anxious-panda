class Game < ApplicationRecord
  has_many :game_rooms, dependent: :destroy 
  has_many :cards, dependent: :destroy
end