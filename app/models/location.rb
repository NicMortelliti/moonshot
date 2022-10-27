class Location < ApplicationRecord
  validates :name, presence: true
  validates :icao, presence: true, length: { is: 4 }
  validates :macro_place, presence: true

  has_many :flights, foreign_key: 'origin'
  has_many :flights, foreign_key: 'destination'
end
