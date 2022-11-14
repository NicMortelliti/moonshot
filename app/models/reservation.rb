class Reservation < ApplicationRecord
  validates :user_id, presence: true
  validates :flight_id, presence: true
  validate :reservation_count_within_limit, on: :create

  def reservation_count_within_limit
    unless flight.vehicle.pax_capacity > flight.reservations.count
      errors.add(:reservations, 'Exceeded passenger limit')
    end
  end

  belongs_to :user
  belongs_to :flight
  has_one :origin, through: :flight
  has_one :destination, through: :flight
end
