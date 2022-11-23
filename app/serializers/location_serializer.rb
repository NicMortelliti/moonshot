class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :macro_place, :icao
end
