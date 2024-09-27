import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GameRoomType } from '../../interfaces/models';
import useActionCable from '../../utils/useActionCable';
import useChannel from '../../utils/useChannel';

interface GameRoomProps {
  gameRoom: GameRoomType;
}

const GameRoom: React.FC<GameRoomProps> = () => {
  const { id } = useLocalSearchParams();
  const { actionCable } = useActionCable('ws://localhost:3000/cable');
  const { subscribe, unsubscribe, send } = useChannel(actionCable);

  useEffect(() => {
    subscribe(
      { channel: 'GameRoomChannel', room_id: id },
      {
        received: (x: any) => console.log(x),
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Hello</Text>
      <Text>Room ID: {id}</Text>
      <Button title='Send Message' onPress={() => {}} />
    </View>
  );
};

export default GameRoom;
