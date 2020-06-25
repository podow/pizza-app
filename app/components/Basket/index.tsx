import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import {
  BasketLink,
  BasketWrapper,
  BasketProductList,
  EmptyBasketWrapper
} from './styles';

import { IProduct } from 'interfaces/components/products';

import { removeFromBasketAction } from 'store/basket/actions';

import BasketProductItem from './BasketProductItem';

const Basket = () => {
  const dispatch = useDispatch();
  const { products, totalCost, totalItems } = useSelector(state => ({
    products: state.basket.data,
    totalCost: state.basket.totalCost,
    totalItems: state.basket.totalItems
  }));

  const removeClickHandler = (item: IProduct) => {
    dispatch(removeFromBasketAction(item));
  };

  return (
    <BasketWrapper>
      <Link href={{ pathname: '/basket' }}>
        <BasketLink>
          <span>Basket</span>
          {totalItems || (
            <img src="/static/images/icons/icon-basket.svg" alt="Basket" />
          )}
        </BasketLink>
      </Link>
      <div className="dropdown">
        {products.length !== 0 ? (
          <>
            <BasketProductList>
              {products.map((item: IProduct) => (
                <BasketProductItem
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.discountPrice || item.price}
                  count={item.count}
                  onRemove={() => removeClickHandler(item)}
                />
              ))}
            </BasketProductList>
            <div className="total">Total: {totalCost}$</div>
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
