import { Image, View } from 'react-native';
import React from 'react';
import {
  ClassCardType,
  RaceCardType,
  WeaponCardType,
} from '@/app/interfaces/models';
import {
  CardContainer,
  StatContainer,
  CardText,
  StatSection,
  ImageContainer,
} from './Card.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SERVER_URL = 'http://localhost:3000';

interface CardProps {
  card: RaceCardType | WeaponCardType | ClassCardType;
  selectedCard: RaceCardType | WeaponCardType | ClassCardType;
}

const Card: React.FC<CardProps> = ({ card, selectedCard }) => {
  const isSelected = card?.id === selectedCard?.id;

  return (
    <CardContainer isSelected={isSelected}>
      <ImageContainer>
        <CardText>{card.name}</CardText>
        <Image
          source={{ uri: SERVER_URL + card.frontImageUrl || '' }}
          style={{ width: 100, height: 150 }}
          resizeMode='contain'
        />
      </ImageContainer>

      <StatContainer>
        {[
          { label: card.data.strength, icon: 'flame', color: 'red' },
          { label: card.data.agility, icon: 'flash', color: 'blue' },
          { label: card.data.intellect, icon: 'book', color: 'green' },
          { label: card.data.health, icon: 'heart', color: 'red' },
        ].map(({ label, icon, color }, index) => (
          <StatSection key={index}>
            <Ionicons name={icon} size={20} color={color} />
            <CardText>{label}</CardText>
          </StatSection>
        ))}
      </StatContainer>
    </CardContainer>
  );
};

export default Card;
