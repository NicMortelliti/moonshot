class Location < ApplicationRecord
  validates :name, presence: true
  validates :icao, presence: true, length: { is: 4 }
  validates :type, presence: true

  has_many :flights
end
