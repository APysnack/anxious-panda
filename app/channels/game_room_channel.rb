class GameRoomChannel < ApplicationCable::Channel
  def subscribed
    puts params
    stream_from "game_room_#{params[:room_id]}"
  end

  def send_message(data)
    ActionCable.server.broadcast("game_room_#{data['room_id']}", message: data['message'])
  end
end
