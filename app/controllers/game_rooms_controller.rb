class GameRoomsController < ApplicationController
  def index
    @game_rooms = GameRoom.where(game_id: permitted_params[:game_id])
    render json: @game_rooms
  end

  private

  def permitted_params
    params.permit(:game_id)
  end
end
