class GameRoomChannel < ApplicationCable::Channel
  include JwtDecoder

  def subscribed
    @current_user = decode_jwt(params[:jwt]) 
    if @current_user
      stream_from game_room 
      broadcaster.send("game_state", game_manager.game_state)
    end
  end

  def unsubscribed
  end

  private

  def game_room
    "game_room_#{params[:room_id]}"
  end
  
  def broadcaster
    @broadcaster ||= Broadcaster.new(game_room)
  end

  def game_manager
    @game_manager ||= WorldTournament::GameManager.new()
  end
end
