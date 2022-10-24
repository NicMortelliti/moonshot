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

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
          .with_defaults(admin: false)
  end
end
