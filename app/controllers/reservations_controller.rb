class ReservationsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 
  # POST /reservations
  def create
    reservation = @current_user.reservation.create!(reservation_params)
    render json: reservation
  end

  private

  def appointment_params
    params.permit(:user_id, :flight_id)
  end
end
