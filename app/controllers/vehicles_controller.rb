class VehiclesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/vehicles'
  def create
    vehicle = Vehicle.create!(vehicle_params)
    render json: vehicle, status: :created
  end

  # DESTROY '/vehicles/[:id]
  def destroy
    vehicle = find_vehicle
    vehicle.destroy
    head :no_content
  end

  private

  def vehicle_params
    params.permit(:make, :model, :name, :pax_capacity, :image)
  end

  def find_vehicle
    Vehicle.find(params[:id])
  end
end
