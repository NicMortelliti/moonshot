class Flight < ApplicationRecord
  validates :vehicle_id, present
  validates :origin, present, length: { in: 2..254 }
  validates :destination, present, length: { in: 2..254 }
  validates :origin_image, present
  validates :destination_image, present
  validates :departure, present
  validates :arrival, present

  has_many :reservations
  has_many :users, through: :reservations
  belongs_to :vehicle
end
