class FlightsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/flights'
  def create
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    flight = Flight.create!(create_flight_params)
    render json: flight, status: :created
  end

  # DESTROY '/flights/[:id]'
  def destroy
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    flight = find_flight
    flight.destroy
    head :no_content
  end

  # GET '/flights'
  def index
    flights = Flight.all.select { |flight| flight.origin_id == search_flight_params[:origin].to_i }
    flights = flights.select { |flight| flight.destination_id == search_flight_params[:destination].to_i }

    render json: flights, status: :ok
  end

  # PATCH '/flights/[:id]'
  def update
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    flight = find_flight
    if flight
      flight.update(create_flight_params)
      render json: flight, status: :created
    else
      render json: { error: 'Flight not found' }, status: :not_found
    end
  end

  private

  def search_flight_params
    params.permit(:origin, :destination)
  end

  def create_flight_params
    params.permit(:origin, :destination, :departure, :arrival, :origin_image, :destination_image)
  end

  def find_flight
    Flight.find(params[:id])
  end
end
