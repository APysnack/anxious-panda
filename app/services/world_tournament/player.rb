class WorldTournament::Player
  attr_accessor :user, :health, :agility, :strength, :intellect

  def initialize(user)
    @user = user
    @health = 0
    @agility = 0
    @strength = 0
    @intellect = 0 
  end
end
