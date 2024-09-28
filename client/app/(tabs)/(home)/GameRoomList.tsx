import React, { useEffect, useState } from 'react';
import { GameType, GameRoomType } from '../../interfaces/models';
import { fetchGameRooms } from '../../store/gameRoomSlice';
import { AppDispatch } from '../../store/index';
import { useDispatch } from 'react-redux';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

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
                <Link href={`/game-room?id=${room.id}`}>
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
