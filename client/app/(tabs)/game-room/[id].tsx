import React, { useEffect, useState } from 'react';
import { Text, Button, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GameRoomType } from '../../interfaces/models';
import useActionCable from '../../utils/useActionCable';
import useChannel from '../../utils/useChannel';
import withAuth from '@/app/utils/withAuth';
import { toCamelCase } from '@/app/utils/utils';
import CardCarousel from '@/components/CardCarousel/CardCarousel';

interface GameRoomProps {
  gameRoom: GameRoomType;
}

const GameRoom: React.FC<GameRoomProps> = () => {
  const [gameState, setGameState] = useState({
    currentPlayer: '',
    currentTurn: 0,
    starterRaceCards: [],
    starterClassCards: [],
    starterWeaponCards: [],
  });
  const [headline, setHeadline] = useState<string>('');
  const [users, setUsers] = useState<string[]>([]);
  const { id } = useLocalSearchParams();
  const { actionCable } = useActionCable();
  const { subscribe, unsubscribe } = useChannel(actionCable);
  useEffect(() => {
    subscribe(
      { channel: 'GameRoomChannel', room_id: id },
      {
        received: (data: any) => {
          if (data.type === 'game_state') {
            const convertedGameState = toCamelCase(data.message);
            setGameState((prevState) => ({
              ...prevState,
              ...convertedGameState,
            }));
          } else if (data.type == 'user_list') {
            setUsers(data.users);
          } else {
            setHeadline(data.message);
          }
        },
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);

  return (
    <ScrollView>
      <Text>{headline}</Text>
      <Text>Room ID: {id}</Text>
      <Text>Connected Users:</Text>
      {users.map((user, index) => (
        <Text key={index}>{user}</Text>
      ))}
      <Button title='Send Message' onPress={() => {}} />

      {gameState?.starterRaceCards?.length > 0 && (
        <CardCarousel cards={gameState.starterRaceCards} />
      )}

      {gameState?.starterClassCards?.length > 0 && (
        <CardCarousel cards={gameState.starterClassCards} />
      )}

      {gameState?.starterWeaponCards?.length > 0 && (
        <CardCarousel cards={gameState.starterWeaponCards} />
      )}
    </ScrollView>
  );
};

export default withAuth(GameRoom);
