import { View, Text } from 'react-native';
import React from 'react';

const Card = () => {
  const cardInfo = {
    imageUrl:
      'https://static.wikia.nocookie.net/ondorwis/images/4/46/Dwarf.jpg/revision/latest?cb=20190722150707',
    cardBackImage:
      'https://i.pinimg.com/236x/e3/c0/30/e3c0303bd55533912981137b2eb9a157.jpg',
    name: 'Dwarf',
    health: 100,
    strength: 8,
    agility: 7,
    intellect: 5,
  };

  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

export default Card;
