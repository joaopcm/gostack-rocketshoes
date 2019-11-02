import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const Products = styled.View``;

export const Product = styled.View`
  margin-top: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 15px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  padding: 8px;
  border-radius: 4px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  background: #eeeeee;
`;

export const ProductControlButton = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  height: 26px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-size: 32px;
  font-weight: bold;
`;

export const Order = styled(RectButton)`
  margin-top: 30px;
  height: 42px;
  width: 100%;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
  color: #999;
`;
