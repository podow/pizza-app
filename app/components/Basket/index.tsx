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

import {
  addToBasketAction,
  removeFromBasketAction
} from 'store/basket/actions';

import BasketProductItem from './BasketProductItem';
import DeliveryItem from './DeliveryItem';

const Basket = () => {
  const dispatch = useDispatch();
  const { products, totalCost, totalItems } = useSelector(state => ({
    products: state.basket.data,
    totalCost: state.basket.totalCost,
    totalItems: state.basket.totalItems
  }));

  const removeClickHandler = (item: IProduct) => {
    dispatch(
      removeFromBasketAction({ product: item, countToRemove: item.count })
    );
  };

  const changeCountHandler = (product: IProduct, type: string) => {
    if (type === '+') {
      dispatch(addToBasketAction(product));
    } else {
      dispatch(removeFromBasketAction({ product, countToRemove: 1 }));
    }
  };

  return (
    <BasketWrapper>
      <Link href={{ pathname: '/basket' }}>
        <BasketLink>
          <span>Basket</span>
          {totalItems && totalItems > 0 ? (
            totalItems
          ) : (
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
                  onCountChange={type => changeCountHandler(item, type)}
                />
              ))}
              <DeliveryItem />
            </BasketProductList>
            <div className="total">
              Total: $ {Number(totalCost) + 5} / €{' '}
              {Number(Number(totalCost) + 5) * 0.88}
            </div>
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
