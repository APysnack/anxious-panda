import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/index';
import {
  HomeContainer,
  WelcomeText,
  GameButton,
  GameButtonText,
} from './home.styles';
import GameRoomList from './GameRoomList';
import { fetchGames } from '../../store/gameSlice';
import { Game } from '../../interfaces/models';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <HomeContainer>
      <WelcomeText>Welcome, {user ? user.email : 'Guest'}!</WelcomeText>
      <ul>
        {games.map((game) => (
          <GameButton key={game.id} onPress={() => setSelectedGame(game)}>
            <GameButtonText>{game.name}</GameButtonText>
          </GameButton>
        ))}
      </ul>
      <GameRoomList selectedGame={selectedGame} />
    </HomeContainer>
  );
};

export default HomeScreen;
