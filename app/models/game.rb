class Game < ApplicationRecord
  has_many :game_rooms, dependent: :destroy 
end