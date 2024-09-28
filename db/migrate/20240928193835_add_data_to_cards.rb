class AddDataToCards < ActiveRecord::Migration[7.1]
  def change
    add_column :cards, :data, :jsonb, default: {}
  end
end
