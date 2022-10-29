class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :vehicle_id
      t.integer :origin_id
      t.integer :destination_id
      t.datetime :departure
      t.datetime :arrival

      t.timestamps
    end
  end
end
