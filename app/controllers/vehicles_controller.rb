class VehiclesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/vehicles'
  def create
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    vehicle = Vehicle.create!(vehicle_params)
    render json: vehicle, status: :created
  end

  # DESTROY '/vehicles/[:id]
  def destroy
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    vehicle = find_vehicle
    vehicle.destroy
    head :no_content
  end

  # GET '/vehicles'
  def index
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    render json: Vehicle.all
  end

  # PATCH '/vehicles/[:id]
  def update
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    vehicle = find_vehicle
    if vehicle
      vehicle.update(vehicle_params)
      render json: vehicle, status: :created
    else
      render json: { error: 'Vehicle not found' }, status: :not_found
    end
  end

  private

  def vehicle_params
    params.permit(:make, :model, :name, :pax_capacity, :image)
  end

  def find_vehicle
    Vehicle.find(params[:id])
  end
end
