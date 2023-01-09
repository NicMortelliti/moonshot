class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # Create (login) user session
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ['Invalid username or password'] }, status: :unauthorized
    end
  end

  # Destroy (logout) user session
  def destroy
    session.delete :user_id
    render json: {messages: ['Successfully logged out'] }, status: :ok
  end
end
