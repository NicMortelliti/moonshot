class VehiclesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # GET '/vehicles'
  def index
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    render json: Vehicle.all
  end

  private

  def vehicle_params
    params.permit(:make, :model, :name, :pax_capacity, :image)
  end

  def find_vehicle
    Vehicle.find(params[:id])
  end
end
