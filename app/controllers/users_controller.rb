class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unauthorized
  end

  # GET /me
  def show
    render json: @current_user
  end

  # GET /users
  def index
    # Break out of this method if user isn't an admin
    return unless @current_user.admin

    users = User.all
    render json: users, status: :ok
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
          .with_defaults(admin: false)
  end
end
