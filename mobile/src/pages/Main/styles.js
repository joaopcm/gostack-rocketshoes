import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const ProductList = styled.FlatList``;

export const Container = styled.View`
  background: ${colors.dark};
  margin-top: 20px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImages = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  height: 42px;
  border-radius: 4px;
  margin-top: auto;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmount = styled.View`
  height: 100%;
  padding: 0 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 4px;
`;
