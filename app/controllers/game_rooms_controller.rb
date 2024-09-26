class GameRoomsController < ApplicationController
  def index
    @game_rooms = GameRoom.all
    render json: @game_rooms
  end

  def create
    puts "SANITYCHECK"
    render json: { message: "YEET" }
  end
end
