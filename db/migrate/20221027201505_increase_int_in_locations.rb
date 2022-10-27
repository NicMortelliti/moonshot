class IncreaseIntInLocations < ActiveRecord::Migration[6.1]
  def change
    change_column :locations, :dist_to_sun, :bigint
  end
end
