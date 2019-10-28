import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Items"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 199,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Items"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 199,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Items"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 199,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Items"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 199,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
