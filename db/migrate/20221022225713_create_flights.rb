class CreateFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :flights do |t|
      t.string :vehicle_id
      t.string :origin
      t.string :destination
      t.datetime :departure
      t.datetime :arrival

      t.timestamps
    end
  end
end
