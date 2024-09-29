class Card < ApplicationRecord
  belongs_to :game
  validates :name, presence: true

  def front_image_url
    return '' unless front_image
    ActionController::Base.helpers.asset_path(front_image)
  end

  def back_image_url
    ActionController::Base.helpers.asset_path("Dwarf.jpg")
  end
end
