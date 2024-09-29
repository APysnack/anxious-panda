class AddImagesToCards < ActiveRecord::Migration[7.1]
  def change
    add_column :cards, :front_image, :string
    add_column :cards, :back_image, :string
  end
end
