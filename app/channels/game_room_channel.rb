class GameRoomChannel < ApplicationCable::Channel
  include JwtDecoder

  USERS = []

  def subscribed
    @current_user = decode_jwt(params[:jwt]) 
    if @current_user
      USERS << @current_user['id'] unless USERS.include?(@current_user['id'])  
      stream_from "game_room_#{params[:room_id]}"
      broadcast_users
    end
  end

  def unsubscribed
    USERS.delete(@current_user['id']) if @current_user
    broadcast_users
  end

  def send_message(data)
    ActionCable.server.broadcast("game_room_#{data['room_id']}", message: data['message'])
  end

  private

  def broadcast_users
    ActionCable.server.broadcast("game_room_#{params[:room_id]}", {
      type: 'user_list',
      users: USERS.map { |user_id| User.find(user_id).email } 
    })
  end
end
