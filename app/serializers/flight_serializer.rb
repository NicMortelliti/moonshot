class FlightSerializer < ActiveModel::Serializer
  attributes :departure, :arrival, :origin, :destination

  has_one :vehicle
end
