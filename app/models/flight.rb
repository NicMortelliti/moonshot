class Flight < ApplicationRecord
  validates :vehicle_id, presence: true
  validates :origin, presence: true
  validates :destination, presence: true
  validates :departure, presence: true
  validates :arrival, presence: true

  has_many :reservations
  has_many :users, through: :reservations
  has_many :locations
  belongs_to :vehicle
end
