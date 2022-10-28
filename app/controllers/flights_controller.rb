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
    # Filter flights on origin
    flights = Flight.all.select { |flight| flight.origin.name.downcase.include?(flight_params[:origin].downcase) }

    # Filter resulting flights on destination
    flights = flights.select { |flight| flight.destination.name.downcase.include?(flight_params[:destination].downcase) }
    # Filter flights on destination
    #flights = flights.all.select { |flight| flight.destination == flight_params.destination }

    # Filter flights on departure date
    #flights = flights.all.select { |flight| flight.departure == flight_params.departure }

    # Filter flights on number of open reservations

    render json: flights
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

  def flight_params
    params.permit(:origin, :destination, :departure, :return, :num_pax)
  end

  def create_flight_params
    params.permit(:origin, :destination, :departure, :arrival, :origin_image, :destination_image)
  end

  def find_flight
    Flight.find(params[:id])
  end
end
