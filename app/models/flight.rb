class Flight < ApplicationRecord
  validates :vehicle_id, presence: true
  validates :origin, presence: true
  validates :destination, presence: true
  validates :departure, presence: true
  validates :arrival, presence: true

  def reservations_remaining
    vehicle.pax_capacity - reservations.count
  end

  has_many :reservations
  has_many :users, through: :reservations
  belongs_to :origin, class_name: 'Location'
  belongs_to :destination, class_name: 'Location'
  belongs_to :vehicle

  # Set order of objects to ascending by departure date/time
  default_scope { order(departure: :asc) }
end
