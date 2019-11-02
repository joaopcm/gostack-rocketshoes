import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
});
