import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ShoppingCartContainer,
  ShoppingCartBadgeContainer,
  ShoppingCartText,
  Logo,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />

      <ShoppingCartContainer>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ShoppingCartBadgeContainer>
          <ShoppingCartText>5</ShoppingCartText>
        </ShoppingCartBadgeContainer>
      </ShoppingCartContainer>
    </Container>
  );
}
