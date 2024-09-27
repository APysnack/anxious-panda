import React, { useEffect, useState } from 'react';
import { GameType, GameRoomType } from '../../interfaces/models';
import { fetchGameRooms } from '../../store/gameRoomSlice';
import { AppDispatch } from '../../store/index';
import { useDispatch } from 'react-redux';
import { Link } from 'expo-router';

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
    <div>
      {selectedGame ? (
        <>
          <h3>{selectedGame.name}</h3>
          <ul>
            {gameRooms.length > 0 ? (
              gameRooms.map((room) => (
                <li key={room.id}>
                  <Link href={`/game-room?id=${room.id}`}>{room.name}</Link>
                </li>
              ))
            ) : (
              <li>No game rooms available</li>
            )}
          </ul>
        </>
      ) : (
        'No game selected'
      )}
    </div>
  );
}

export default GameRoomList;
