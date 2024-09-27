import React from 'react';
import { useSelector } from 'react-redux';
import { HomeContainer, WelcomeText } from './home.styles';

const HomeScreen = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <HomeContainer>
      <WelcomeText>Welcome, {user ? user.email : 'Guest'}!</WelcomeText>
    </HomeContainer>
  );
};

export default HomeScreen;
