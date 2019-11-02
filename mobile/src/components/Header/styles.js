import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ShoppingCartContainer = styled.TouchableOpacity`
  position: relative;
`;

export const ShoppingCartBadgeContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -5px;
  margin-right: -6px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${colors.primary};
`;

export const ShoppingCartText = styled.Text`
  font-size: 10px;
  line-height: 18px;
  color: #fff;
`;
