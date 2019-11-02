import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  ShoppingCartContainer,
  ShoppingCartBadgeContainer,
  ShoppingCartText,
  Logo,
} from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo />

      <ShoppingCartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ShoppingCartBadgeContainer>
          <ShoppingCartText>{cartSize}</ShoppingCartText>
        </ShoppingCartBadgeContainer>
      </ShoppingCartContainer>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
