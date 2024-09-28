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

const Card = () => {
  const cardInfo = {
    imageUrl:
      'https://static.wikia.nocookie.net/ondorwis/images/4/46/Dwarf.jpg',
    cardBackImage:
      'https://i.pinimg.com/236x/e3/c0/30/e3c0303bd55533912981137b2eb9a157.jpg',
    name: 'Dwarf',
    health: 100,
    strength: 8,
    agility: 7,
    intellect: 5,
  };

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
        {flipped ? (
          <CardBackImage source={{ uri: cardInfo.cardBackImage }} />
        ) : (
          <CardContent>
            <HeartContainer>
              <CardText>{cardInfo.health}</CardText>
              <Icon name='heart' size={12} color='red' />
            </HeartContainer>

            <CardText>{cardInfo.name}</CardText>
            <CardImage source={{ uri: cardInfo.imageUrl }} />

            <CardStats>
              <CardText>Strength: {cardInfo.strength}</CardText>
              <CardText>Agility: {cardInfo.agility}</CardText>
              <CardText>Intellect: {cardInfo.intellect}</CardText>
            </CardStats>
          </CardContent>
        )}
      </CardContainer>
    </TouchableOpacity>
  );
};

export default Card;
