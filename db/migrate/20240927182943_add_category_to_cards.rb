class AddCategoryToCards < ActiveRecord::Migration[7.1]
  def change
    add_column :cards, :category, :string
  end
end
