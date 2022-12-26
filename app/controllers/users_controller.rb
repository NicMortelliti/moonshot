class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :conflict
  end

  # GET /me
  def show
    if @current_user
      render json: @current_user
    else
      render :not_authorized_response
    end
  end

  # GET /users
  def index
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    users = User.all
    render json: users, status: :ok
  end

  # PATCH '/users/[:id]'
  def update
    return unless @current_user

    @current_user.update(user_params)
    render json: @current_user, status: :ok
  end

  # DELETE '/users/[:id]'
  def destroy
    @current_user.delete
    render json: {}, status: :ok
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
          .with_defaults(admin: false)
  end

  def find_user
    User.find_by(id: params[:id])
  end

  def user_not_found_response
    render json: { error: 'User not found' }, status: :not_found
  end

  def not_authorized_response
    render json: { error: 'Not authorized' }, status: :not_authorized
  end
end
