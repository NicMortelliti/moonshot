class Reservation < ApplicationRecord
  validates :user_id, presence: true
  validates :flight_id, presence: true
  validates_uniqueness_of :user_id, scope: :flight_id
  validate :reservation_count_within_limit, on: :create

  def reservation_count_within_limit
    errors.add(:reservations, 'Exceeded passenger limit') unless flight.vehicle.pax_capacity > flight.reservations.count
  end

  belongs_to :user
  belongs_to :flight
  has_one :origin, through: :flight
  has_one :destination, through: :flight
  has_one :vehicle, through: :flight
end
