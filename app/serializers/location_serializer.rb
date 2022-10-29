class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :macro_place

  # has_many :flights
end
