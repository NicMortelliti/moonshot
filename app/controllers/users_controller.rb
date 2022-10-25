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

  # PATCH '/appointments/[:id]'
  def update
    user = find_user
    # Only allow users or admins to update profile
    if user == @current_user || @current_user.admin == true
      user.update(user_params)
      render json: user, status: :created
    else
      render :user_not_found_response
    end
  end

  # DELETE '/users/[:id]'
  def destroy
    user = find_user

    # Only allow users or admins to delete profile
    if user == @current_user || @current_user.admin == true
      user.delete
      head :no_content
    else
      render :user_not_found_response
    end
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
end
