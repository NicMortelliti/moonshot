class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  private

  def authorize
    @current_user = Patient.find_by(id: session[:user_id])
    render json: { errors: ['Not Authorized'] }, status: :unauthorized unless @current_user
  end
end
