import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import {
  BasketLink,
  BasketWrapper,
  BasketProductList,
  EmptyBasketWrapper
} from './styles';

import BasketProductItem from './BasketProductItem';

const Basket = () => {
  const products = useSelector(state => state.basket.data);

  return (
    <BasketWrapper>
      <Link href={{ pathname: '/basket' }}>
        <BasketLink>
          <span>Basket</span>
          <img src="/static/images/icons/icon-basket.svg" alt="Basket" />
        </BasketLink>
      </Link>
      <div className="dropdown">
        {products.length !== 0 ? (
          <>
            <BasketProductList>
              {products.map(({ id, image, name, price, discountPrice }) => (
                <BasketProductItem
                  image={image.url}
                  name={name}
                  price={discountPrice || price}
                  count={1}
                  key={id}
                />
              ))}
            </BasketProductList>
            <div className="total">Итого: 20$</div>
          </>
        ) : (
          <EmptyBasketWrapper>
            <img src="/static/images/empty-box.png" alt="Empty" />
            <h3>Empty!</h3>
            <p>You can add something from menu :)</p>
          </EmptyBasketWrapper>
        )}
      </div>
    </BasketWrapper>
  );
};

export default Basket;
