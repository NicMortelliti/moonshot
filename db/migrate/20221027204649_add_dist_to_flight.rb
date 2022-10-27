class AddDistToFlight < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :distance, :bigint
  end
end
