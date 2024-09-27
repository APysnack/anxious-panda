import React from 'react';
import { Game } from '../../interfaces/models';

interface GameRoomListProps {
  selectedGame: Game | null;
}

function GameRoomList({ selectedGame }: GameRoomListProps) {
  return <div>{selectedGame ? selectedGame.name : 'No game selected'}</div>;
}

export default GameRoomList;
