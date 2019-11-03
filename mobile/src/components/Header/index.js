import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as NavigationService from '../../services/navigation';

import {
  Container,
  ShoppingCartContainer,
  ShoppingCartBadgeContainer,
  ShoppingCartText,
  Logo,
} from './styles';

function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo />

      <ShoppingCartContainer
        onPress={() => {
          NavigationService.navigate('Cart');
        }}
      >
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ShoppingCartBadgeContainer>
          <ShoppingCartText>{cartSize}</ShoppingCartText>
        </ShoppingCartBadgeContainer>
      </ShoppingCartContainer>
    </Container>
  );
}

export default Header;
