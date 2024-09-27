class GameRoomsController < ApplicationController
  def index
    @game_rooms = GameRoom.all
    render json: @game_rooms
  end
end
