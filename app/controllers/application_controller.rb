class ApplicationController < ActionController::Base
  # csrf is needed for cookie-based authentication but not jwt
  protect_from_forgery with: :null_session
  before_action :set_current_user

  private

  def set_current_user
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      decoded = JWT.decode(token, Rails.application.credentials.devise[:jwt_secret_key], true, algorithm: 'HS256')
      Current.user = User.find(decoded[0]['id'])
    end
  rescue JWT::DecodeError
    render json: { error: 'Unauthorized' }, status: :unauthorized
  end
end
