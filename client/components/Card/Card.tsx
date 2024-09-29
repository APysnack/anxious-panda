import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  CardContainer,
  CardImage,
  CardStats,
  CardBackImage,
  CardText,
  CardContent,
  HeartContainer,
} from './Card.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { RaceCardType, WeaponCardType } from '@/app/interfaces/models';

interface CardProps {
  card: RaceCardType | WeaponCardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  console.log(card);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prevState) => !prevState);
  };

  return (
    <TouchableOpacity onPress={handleFlip}>
      <CardContainer
        colors={['#4d4a4a', '#1C1C1C']} // You can adjust these colors for the gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <CardText>{card.name}</CardText>
      </CardContainer>
    </TouchableOpacity>
  );
};

export default Card;
