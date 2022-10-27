class AddDistanceToSunToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :dist_to_sun, :integer
  end
end
