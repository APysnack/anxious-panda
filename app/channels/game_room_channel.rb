class GameRoomChannel < ApplicationCable::Channel
  include JwtDecoder

  USERS = []

  def subscribed
    @current_user = decode_jwt(params[:jwt]) 
    if @current_user
      stream_from "game_room_#{params[:room_id]}"
    end
  end

  def unsubscribed

  end

  def send_message(data)
    ActionCable.server.broadcast("game_room_#{data['room_id']}", message: data['message'])
  end

  private

  def broadcast_users
    ActionCable.server.broadcast("game_room_#{params[:room_id]}", {
      type: 'user_list',
      users: USERS.map { |user_id| User.find(user_id).name } 
    })
  end
end
