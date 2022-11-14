class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :flight

  has_one :flight
  has_one :origin, through: :flight
  has_one :destination, through: :flight
end
