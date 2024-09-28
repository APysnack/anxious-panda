import React, { useEffect, useState } from 'react';
import { GameRoomType, GameType } from '@/app/interfaces/models';
import { fetchGameRooms } from '@/app/store/gameRoomSlice';
import { AppDispatch } from '@/app/store/index';
import { useDispatch } from 'react-redux';
import { Link, Href } from 'expo-router';
import { View, Text } from 'react-native';

const GAME_ROOM_1 = '/games/1' as Href;

interface GameRoomListProps {
  selectedGame: GameType | null;
}

function GameRoomList({ selectedGame }: GameRoomListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [gameRooms, setGameRooms] = useState<GameRoomType[]>([]);

  useEffect(() => {
    if (selectedGame) {
      dispatch(fetchGameRooms(selectedGame.id))
        .then((result) => {
          if (Array.isArray(result.payload)) {
            setGameRooms(result.payload);
          } else {
            console.error('Unexpected payload structure:', result.payload);
            setGameRooms([]);
          }
        })
        .catch((error) => {
          console.error('Failed to fetch game rooms:', error);
        });
    }
  }, [selectedGame, dispatch]);

  return (
    <View>
      {selectedGame ? (
        <>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {selectedGame.name}
          </Text>
          {gameRooms.length > 0 ? (
            gameRooms.map((room) => (
              <View key={room.id}>
                <Link href={GAME_ROOM_1}>
                  <Text>{room.name}</Text>
                </Link>
              </View>
            ))
          ) : (
            <Text>No game rooms available</Text>
          )}
        </>
      ) : (
        <Text>No game selected</Text>
      )}
    </View>
  );
}

export default GameRoomList;
