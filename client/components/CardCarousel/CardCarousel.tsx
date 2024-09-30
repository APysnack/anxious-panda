import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons
import {
  RaceCardType,
  WeaponCardType,
  ClassCardType,
} from '@/app/interfaces/models';
import Card from '../Card/Card';
import {
  Container,
  GestureContainer,
  SelectButton,
} from './CardCarousel.styles';

type CardCarouselProps = {
  cards: RaceCardType[] | WeaponCardType[] | ClassCardType[];
};

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleNextCard = () => {
    setVisibleCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousCard = () => {
    setVisibleCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleSelectCard = () => {
    setSelectedCard(cards[visibleCardIndex]);
  };

  const onSwipe = (event: any) => {
    if (event.nativeEvent.translationX > 50) {
      handlePreviousCard();
    } else if (event.nativeEvent.translationX < -50) {
      handleNextCard();
    }
  };

  return (
    <Container>
      <PanGestureHandler onGestureEvent={onSwipe}>
        <GestureContainer>
          <Card card={cards[visibleCardIndex]} selectedCard={selectedCard} />
        </GestureContainer>
      </PanGestureHandler>
      <SelectButton onPress={handleSelectCard}>
        <Text>Select</Text>
      </SelectButton>
    </Container>
  );
};

export default CardCarousel;
