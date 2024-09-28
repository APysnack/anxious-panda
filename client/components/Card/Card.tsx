import { Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  CardContainer,
  CardImage,
  CardStats,
  CardBackImage,
  CardName,
} from './Card.styles';

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
      <CardContainer>
        {flipped ? (
          <CardBackImage source={{ uri: cardInfo.cardBackImage }} />
        ) : (
          <>
            <CardName>{cardInfo.name}</CardName>
            <CardImage source={{ uri: cardInfo.imageUrl }} />

            <CardStats>
              <Text>Strength: {cardInfo.strength}</Text>
              <Text>Agility: {cardInfo.agility}</Text>
              <Text>Intellect: {cardInfo.intellect}</Text>
            </CardStats>
          </>
        )}
      </CardContainer>
    </TouchableOpacity>
  );
};

export default Card;
