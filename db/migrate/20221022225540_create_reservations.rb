class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.string :user_id
      t.string :flight_id

      t.timestamps
    end
  end
end
