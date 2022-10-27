class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :icao
      t.string :macro_place

      t.timestamps
    end
  end
end
