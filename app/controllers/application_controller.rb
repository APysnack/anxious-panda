class ApplicationController < ActionController::Base
  # csrf is needed for cookie-based authentication but not jwt
  protect_from_forgery with: :null_session
  before_action :set_current_user
  include JwtDecoder 

  private

  def set_current_user
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      Current.user = decode_jwt(token)  # Use the shared method
    end
  rescue JWT::DecodeError
    render json: { error: 'Unauthorized' }, status: :unauthorized
  end
end
