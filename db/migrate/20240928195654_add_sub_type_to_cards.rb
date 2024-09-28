class AddSubTypeToCards < ActiveRecord::Migration[7.1]
  def change
    add_column :cards, :sub_type, :string
  end
end
