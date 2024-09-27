class Card < ApplicationRecord
  belongs_to :game
  validates :name, presence: true
  validates :category, presence: true
end
