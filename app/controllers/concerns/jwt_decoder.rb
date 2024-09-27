# app/controllers/concerns/jwt_decoder.rb
module JwtDecoder
  extend ActiveSupport::Concern

  included do
  end

  def decode_jwt(token)
    return nil unless token.present?
  
    decoded = JWT.decode(token, Rails.application.credentials.devise[:jwt_secret_key], true, { algorithm: 'HS256' })
    user_id = decoded[0]['id']
    User.find_by(id: user_id)
  rescue JWT::ExpiredSignature
    nil 
  rescue JWT::DecodeError
    nil
  end
end
