import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    setProducts(data);
  }

  useEffect(() => {
    async function fetchProducts() {
      await loadProducts();
    }

    fetchProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={20} color="#fff" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
