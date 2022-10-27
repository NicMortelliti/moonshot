class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :vehicle_id
      t.string :origin_id
      t.string :destination_id
      t.datetime :departure
      t.datetime :arrival

      t.timestamps
    end
  end
end
