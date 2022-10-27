class Flight < ApplicationRecord
  validates :vehicle_id, presence: true
  validates :origin, presence: true, length: { in: 2..254 }
  validates :destination, presence: true, length: { in: 2..254 }
  validates :origin_image, presence: true
  validates :destination_image, presence: true
  validates :departure, presence: true
  validates :arrival, presence: true

  has_many :reservations
  has_many :users, through: :reservations
  has_many :locations
  belongs_to :vehicle
end
