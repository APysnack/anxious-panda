class Broadcaster
  def initialize(channel)
    @channel = channel
  end

  def send(type, message)
    ActionCable.server.broadcast(@channel, {
      type: type,
      message: message
    })
  end
end
