class AddImageToVehicle < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :image, :string
  end
end
