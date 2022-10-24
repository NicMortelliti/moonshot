class ReservationsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # POST /reservations
  def create
    reservation = @current_user.reservations.create!(reservation_params)
    render json: reservation
  end

  # DESTROY '/reservations/[:id]'
  def destroy
    reservation = find_reservation
    reservation.destroy
    head :no_content
  end

  # GET '/reservations'
  def index
    render json: @current_user.reservations
  end

  private

  def appointment_params
    params.permit(:user_id, :flight_id)
  end

  def find_reservation
    @current_user.reservations.find(params[:id])
  end

end
