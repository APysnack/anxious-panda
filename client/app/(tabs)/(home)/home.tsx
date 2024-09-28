import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/index';
import {
  HomeContainer,
  WelcomeText,
  GameButton,
  GameButtonText,
  SignOutButton,
  SignOutButtonText,
} from './home.styles';
import GameRoomList from './GameRoomList';
import { fetchGames } from '../../store/gameSlice';
import { GameType } from '../../interfaces/models';
import { Text } from 'react-native';
import { clearUser } from '@/app/store/userSlice';
import { useRouter } from 'expo-router';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const handleSignOut = () => {
    dispatch(clearUser());
    router.push('/');
  };

  return (
    <HomeContainer>
      {user && (
        <SignOutButton onPress={handleSignOut}>
          <SignOutButtonText>Sign Out</SignOutButtonText>
        </SignOutButton>
      )}
      <WelcomeText>Welcome, {user ? user.email : 'Guest'}!</WelcomeText>
      {games.map((game) => (
        <GameButton key={game.id} onPress={() => setSelectedGame(game)}>
          <GameButtonText>{game.name}</GameButtonText>
        </GameButton>
      ))}
      <GameRoomList selectedGame={selectedGame} />
    </HomeContainer>
  );
};

export default HomeScreen;
