class VehicleSerializer < ActiveModel::Serializer
  attributes :image, :make, :model, :name, :pax_capacity
end
