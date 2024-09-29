import { TouchableOpacity, Image } from 'react-native';
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

const SERVER_URL = 'http://localhost:3000';

interface CardProps {
  card: RaceCardType | WeaponCardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prevState) => !prevState);
  };

  return (
    <TouchableOpacity onPress={handleFlip}>
      <CardContainer
        colors={['#4d4a4a', '#1C1C1C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {flipped ? (
          <Image
            source={{ uri: SERVER_URL + card.backImageUrl || '' }}
            style={{ width: 100, height: 150 }}
          />
        ) : (
          <Image
            source={{ uri: SERVER_URL + card.frontImageUrl || '' }}
            style={{ width: 100, height: 150 }}
          />
        )}
      </CardContainer>
    </TouchableOpacity>
  );
};

export default Card;
