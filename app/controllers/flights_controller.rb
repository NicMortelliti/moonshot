class FlightsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/flights'
  def create
    flight = Flight.create!(flight_params)
    render json: flight, status: :created
  end

  # DESTROY '/flights/[:id]'
  def destroy
    flight = find_flight
    flight.destroy
    head :no_content
  end

  # GET '/flights'
  def index
    flights = Flight.all.select { |flight| flight.reservation.count < flight.vehicle.pax_capacity }
    render json: flights
  end

  private

  def flight_params
    params.permit(:origin, :destination, :departure, :arrival, :origin_image, :destination_image)
  end

  def find_flight
    Flight.find(params[:id])
  end
end
