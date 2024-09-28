import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GameRoomType } from '../../interfaces/models';
import useActionCable from '../../utils/useActionCable';
import useChannel from '../../utils/useChannel';
import withAuth from '@/app/utils/withAuth';

interface GameRoomProps {
  gameRoom: GameRoomType;
}

const GameRoom: React.FC<GameRoomProps> = () => {
  const [users, setUsers] = useState<string[]>([]);
  const { id } = useLocalSearchParams();
  const { actionCable } = useActionCable();
  const { subscribe, unsubscribe } = useChannel(actionCable);

  useEffect(() => {
    subscribe(
      { channel: 'GameRoomChannel', room_id: id },
      {
        received: (data: any) => {
          console.log(data);
          if (data.type === 'user_list') {
            setUsers(data.users);
          } else {
            console.log(data.message);
          }
        },
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Room ID: {id}</Text>
      <Text>Connected Users:</Text>
      {users.map((user, index) => (
        <Text key={index}>{user}</Text>
      ))}
      <Button title='Send Message' onPress={() => {}} />
    </View>
  );
};

export default withAuth(GameRoom);
