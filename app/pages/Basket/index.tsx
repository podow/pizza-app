import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { BasketPageWrapper, BasketList, BasketProduct } from './styles';

import { IProduct } from 'interfaces/components/products';

import { removeFromBasketAction } from 'store/basket/actions';

import { Container } from 'app/components/container';
import { Button } from 'app/components/Buttons';

const BasketPageContainer = () => {
  const dispatch = useDispatch();
  const { products, totalCost } = useSelector(state => ({
    products: state.basket.data,
    totalCost: state.basket.totalCost
  }));

  const removeClickHandler = (product: IProduct) => {
    dispatch(removeFromBasketAction(product));
  };

  return (
    <BasketPageWrapper>
      <Container isTight>
        <h2>Basket</h2>

        <BasketList>
          {products.length !== 0 ? (
            products.map((product: IProduct) => (
              <BasketProduct key={product.id}>
                <div className="half">
                  <div className="image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="description">
                    <h4>{product.name}</h4>
                    <span>1 PC / 6 pieces</span>
                  </div>
                  <div className="controls">
                    <div className="count">
                      <button>-</button>
                      {product.count}
                      <button>+</button>
                    </div>
                  </div>
                </div>
                <div className="half">
                  <div className="money">
                    <div className="price">
                      ${' '}
                      {(product.discountPrice || product.price) *
                        (product.count || 1)}
                    </div>
                  </div>
                  <div className="delete">
                    <div
                      className="remove"
                      onClick={() => removeClickHandler(product)}
                    />
                  </div>
                </div>
              </BasketProduct>
            ))
          ) : (
            <>
              <h2 style={{ marginTop: 34 }}>Empty!</h2>
              <p style={{ marginTop: 16 }}>Add some from menu</p>
            </>
          )}
        </BasketList>
        <footer>
          <Link href={{ pathname: '/' }}>
            <Button isWhite>Back to menu</Button>
          </Link>
          <div className="total">
            Total: <span className="money">$ {totalCost}</span>
          </div>
          <Button>Take order</Button>
        </footer>
      </Container>
    </BasketPageWrapper>
  );
};

export default BasketPageContainer;
