class CreateCards < ActiveRecord::Migration[7.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.text :description
      t.string :game_type
      t.string :type 

      t.timestamps
    end
  end
end
