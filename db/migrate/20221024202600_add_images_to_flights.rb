class AddImagesToFlights < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :origin_image, :string
    add_column :flights, :destination_image, :string
  end
end
