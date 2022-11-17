class ReservationSerializer < ActiveModel::Serializer
  attributes :id

  has_one :flight
  has_one :origin, through: :flight
  has_one :destination, through: :flight
  has_one :vehicle, through: :flight
end
