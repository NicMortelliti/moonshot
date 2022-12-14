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
    if reservation
      reservation.destroy
      render json: @current_user.reservations
    else
      render json: { error: 'Reservation not found' }, status: :not_found
    end
  end

  # GET '/reservations'
  def index
    user = @current_user
    reservations = user.reservations.order('flight_id::integer ASC')
    if reservations.empty?
      render json: { error: 'No reservations found.' }, status: :not_found
    else
      render json: reservations, status: :ok
    end
  end

  private

  def reservation_params
    params.permit(:user_id, :flight_id)
  end

  def find_reservation
    @current_user.reservations.find(params[:id])
  end
end
