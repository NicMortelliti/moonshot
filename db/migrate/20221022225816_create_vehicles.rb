class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.string :name
      t.integer :pax_capacity

      t.timestamps
    end
  end
end
