import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDelete,
  ProductDetails,
  ProductAmount,
  ProductControlButton,
  EmptyContainer,
  EmptyText,
  ProductTitle,
  ProductPrice,
  ProductControls,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

import colors from '../../styles/colors';
import { formatPrice } from '../../utils/format';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  function handleIncrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function handleDecrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <>
      {products.length === 0 ? (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Carrinho vazio</EmptyText>
        </EmptyContainer>
      ) : (
        <Container>
          <Products>
            {products.map(product => (
              <Product key={String(product.id)}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.formatedPrice}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => handleRemove(product.id)}>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton
                    onPress={() => handleDecrement(product)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductAmount editable={false}>
                    {product.amount}
                  </ProductAmount>
                  <ProductControlButton
                    onPress={() => handleIncrement(product)}
                  >
                    <Icon
                      name="add-circle-outline"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </Container>
      )}
    </>
  );
}
