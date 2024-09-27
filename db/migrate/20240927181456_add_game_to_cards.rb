class AddGameToCards < ActiveRecord::Migration[7.1]
  def change
    add_reference :cards, :game, null: false, foreign_key: true
  end
end
