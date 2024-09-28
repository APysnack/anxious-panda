class RemoveColumnsFromCards < ActiveRecord::Migration[7.1]
  def change
    remove_column :cards, :game_type, :string
    remove_column :cards, :description, :string
    remove_column :cards, :type, :string
    remove_column :cards, :category, :string
  end
end
