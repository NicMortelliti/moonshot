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
  # TODO Sort results in ascending order according to departure date
  def index
    reservations = @current_user.reservations.flight.order('departure')
    if reservations.empty?
      render json: reservations, status: :ok
    else
      render json: { error: 'No reservations found.' }, status: :not_found
    end
  end

  # PATCH '/reservations/[:id]'
  def update
    reservation = find_reservation
    if reservation
      reservation.update(reservation_params)
      render json: reservation, status: :created
    else
      render json: { error: 'Reservation not found' }, status: :not_found
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
