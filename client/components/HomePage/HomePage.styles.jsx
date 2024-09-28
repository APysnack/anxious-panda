import styled from 'styled-components/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  color: red;
`;

export const GameButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  align-items: center;
`;

export const GameButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const SignOutButton = styled(TouchableOpacity)`
  background-color: #ff4d4d;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
`;

export const SignOutButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
