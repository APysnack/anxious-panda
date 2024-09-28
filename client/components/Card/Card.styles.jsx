import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const CardContainer = styled(LinearGradient)`
  border-radius: 10px;
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2em;
`;

export const HeartContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 1em;
  gap: 0.2em;
`;

export const CardImage = styled.Image`
  width: 90%;
  height: 50%;
  border-radius: 10px;
  border: black 3px solid;
`;

export const CardContent = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const CardStats = styled.View`
  display: flex;
  gap: 0.2em;
  align-items: center;
  color: white;
`;

export const CardText = styled.Text`
  color: white;
  font-family: 'Georgia';
`;

export const CardBackImage = styled.Image`
  width: 100%;
  height: 100%;
`;
