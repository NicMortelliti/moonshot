class Reservation < ApplicationRecord
  validates :user_id, present
  validates :flight_id, present

  belongs_to :user
  belongs_to :flight
end
