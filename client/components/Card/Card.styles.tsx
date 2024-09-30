import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const CardContainer = styled(TouchableOpacity)<{ isSelected: boolean }>`
  width: 95%;
  border: ${({ isSelected }) => (isSelected ? '2px solid green' : 'none')};
  border-radius: 12px;
  padding: 16px;
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: row;
  align-items: center;
`;

export const StatContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  padding-left: 10px;
`;

export const StatSection = styled(View)`
  align-items: center;
`;

export const CardText = styled(Text)`
  color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 4px;
`;

export const ImageContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
