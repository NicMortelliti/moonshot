class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin_id, :destination_id, :departure, :arrival, :reservations_remaining

  has_one :origin
  has_one :destination
  has_one :vehicle
end
