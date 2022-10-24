class FlightsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST '/flights'
  def create
    flight = Flight.create!(flight_params)
    render json: flight, status: :created
  end

  private

  def flight_params
    params.permit(:origin, :destination, :departure, :arrival, :origin_image, :destination_image)
  end
end
