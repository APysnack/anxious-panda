// src/components/GameRoom.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // Import useSearchParams from expo-router
import { GameRoomType } from '../../interfaces/models';

interface GameRoomProps {
  gameRoom: GameRoomType;
}

const GameRoom: React.FC<GameRoomProps> = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Hello</Text>
      <Text>Room ID: {id}</Text>
    </View>
  );
};

export default GameRoom;
