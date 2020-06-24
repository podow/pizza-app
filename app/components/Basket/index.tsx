import React from 'react';
import Link from 'next/link';

import { BasketLink, BasketWrapper, BasketProductList } from './styles';

import BasketProductItem from './BasketProductItem';

const Basket = () => {
  return (
    <BasketWrapper>
      <Link href={{ pathname: '/basket' }}>
        <BasketLink>
          <span>Basket</span>
          <img src="/static/images/icons/icon-basket.svg" alt="Basket" />
        </BasketLink>
      </Link>
      <div className="dropdown">
        <BasketProductList>
          <BasketProductItem
            image="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png"
            name="test"
            price="10"
            count={1}
          />
          <BasketProductItem
            image="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png"
            name="test"
            price="10"
            count={1}
          />
          <BasketProductItem
            image="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png"
            name="test"
            price="10"
            count={1}
          />
        </BasketProductList>
        <div className="total">Итого: 20$</div>
      </div>
    </BasketWrapper>
  );
};

export default Basket;
