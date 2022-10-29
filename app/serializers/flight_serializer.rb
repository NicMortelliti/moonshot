class FlightSerializer < ActiveModel::Serializer
  attributes :id, :origin_id

  has_one :origin
  has_one :destination
end
