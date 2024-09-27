class GameRoomsController < ApplicationController
  def index
    @game_rooms = GameRoom.all.where(game_id: params["game_id"])
    render json: @game_rooms
  end
end
