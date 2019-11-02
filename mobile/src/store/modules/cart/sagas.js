import { select, put, call, all, takeLatest } from 'redux-saga/effects';
import { Platform, ToastAndroid, Alert } from 'react-native';
import api from '../../../services/api';
import * as NavigationService from '../../../services/navigation';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import { formatPrice } from '../../../utils/format';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(
        'Quantidade solicitada fora de estoque.',
        ToastAndroid.SHORT
      );
    } else {
      Alert.alert('Atenção!', 'Quantidade solicitada fora de estoque.');
    }
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));

    NavigationService.navigate('Cart');

    return;
  }

  const response = yield call(api.get, `/products/${id}`);

  const data = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPrice(response.data.price),
  };

  yield put(addToCartSuccess(data));

  NavigationService.navigate('Cart');
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(
        'Quantidade solicitada fora de estoque.',
        ToastAndroid.SHORT
      );
    } else {
      Alert.alert('Atenção!', 'Quantidade solicitada fora de estoque.');
    }
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
