class Reservation < ApplicationRecord
  validates :user_id, presence: true
  validates :flight_id, presence: true

  belongs_to :user
  belongs_to :flight
end
