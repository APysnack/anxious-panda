class CreateGameRooms < ActiveRecord::Migration[7.1]
  def change
    create_table :game_rooms do |t|
      t.string :name

      t.timestamps
    end
  end
end
