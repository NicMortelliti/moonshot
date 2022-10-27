class Location < ApplicationRecord
  validates :name, presence: true
  validates :icao, presence: true, length: { is: 3 }
  validates :type, presence: true

  has_many :flights
end
