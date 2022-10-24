class VehiclesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/vehicles'
  def create
    vehicle = Vehicle.create!(vehicle_params)
    render json: vehicle, status: :created
  end

  private

  def vehicle_params
    params.permit(:make, :model, :name, :pax_capacity, :image)
  end
end
