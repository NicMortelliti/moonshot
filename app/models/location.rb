class Location < ApplicationRecord
  validates :name, presence: true
  validates :icao, presence: true, length: { is: 4 }
  validates :macro_place, presence: true

  has_many :origins, class_name: 'Flight', foreign_key: 'origin_id'
  has_many :destinations, class_name: 'Flight', foreign_key: 'destination_id'

  # Set order of objects to ascending by departure date/time
  default_scope { order(name: :asc) }
end
