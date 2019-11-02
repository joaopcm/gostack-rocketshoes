import React from 'react';

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
  return (
    <Container>
      <Logo />

      <ShoppingCartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ShoppingCartBadgeContainer>
          <ShoppingCartText>5</ShoppingCartText>
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
