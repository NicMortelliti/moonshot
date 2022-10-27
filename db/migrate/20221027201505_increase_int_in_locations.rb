class IncreaseIntInLocations < ActiveRecord::Migration[6.1]
  def up
    change_column :locations, :dist_to_sun, :bigint
  end
end
