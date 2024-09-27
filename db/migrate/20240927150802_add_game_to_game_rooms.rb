class AddGameToGameRooms < ActiveRecord::Migration[7.1]
  def change
    add_reference :game_rooms, :game, null: false, foreign_key: true
  end
end
