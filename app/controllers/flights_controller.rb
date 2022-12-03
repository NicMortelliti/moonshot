class FlightsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/flights'
  def create
    return unless @current_user.admin # Break out of this method if user isn't an admin

    flight = Flight.create!(create_flight_params)
    render json: flight, status: :created
  end

  # DESTROY '/flights/[:id]'
  def destroy
    return unless @current_user.admin # Break out of this method if user isn't an admin

    flight = find_flight
    flight.destroy
    head :no_content
  end

  # Get '/origins/'
  def origins
    origins = Flight.all.uniq { |flight| flight.origin_id } # Only return flights with unique origins
    origins = origins.map { |flight| flight.origin } # Only return the associated origin data
    render json: origins, status: :ok
  end

  # GET '/destinations/[:id]'
  def destinations_from
    destinations = Flight.all.select { |flight| flight.origin_id == search_params[:origin].to_i }
    destinations = destinations.uniq { |flight| flight.destination_id } # Only return flights with unique destinations
    destinations = destinations.map { |flight| flight.destination } # Only return the associated destination data
    render json: destinations, status: :ok
  end

  # GET '/flights'
  def index
    flights = Flight.all.select { |flight| flight.origin_id == search_params[:origin].to_i }
    flights = flights.select { |flight| flight.destination_id == search_params[:destination].to_i }

    flights = flights.select do |flight| # Remove flights that don't have enough open seats left
      (flight.reservations.count + search_params[:num_passengers].to_i) <= flight.vehicle.pax_capacity
    end

    # Remove flights that the user is already booked on from the return object
    user_reservations = @current_user.reservations.pluck(:flight_id)
    flights = flights.reject { |flight| user_reservations.include? flight.id.to_s }

    if flights.length > 0
      render json: flights, status: :ok
    else
      render json: { error: "Sorry, we didn't find any flights with that search criteria." }, status: :not_found
    end
  end

  # PATCH '/flights/[:id]'
  def update
    return unless @current_user.admin # Break out of this method if user isn't an admin

    flight = find_flight
    if flight
      flight.update(create_flight_params)
      render json: flight, status: :created
    else
      render json: { error: 'Flight not found' }, status: :not_found
    end
  end

  private

  def search_params
    params.permit(:origin, :destination, :num_passengers)
  end

  def create_flight_params
    params.permit(:origin, :destination, :departure, :arrival, :origin_image, :destination_image)
  end

  def find_flight
    Flight.find(params[:id])
  end
end
