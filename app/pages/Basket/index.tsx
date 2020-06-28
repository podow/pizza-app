import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { BasketPageWrapper, BasketList } from './styles';

import { IProduct } from 'interfaces/components/products';

import { toggleModal } from 'store/common/actions';
import {
  addToBasketAction,
  removeFromBasketAction,
  resetBasketAction
} from 'store/basket/actions';
import { createOrder } from 'store/order/actions';

import { Container } from 'app/components/container';
import { Button } from 'app/components/Buttons';
import OrderModal from './OrderModal';
import OrderResultModal from './OrderResultModal';
import DeliveryItem from './DeliveryItem';
import BasketItem from './BasketItem';

const BasketPageContainer = () => {
  const dispatch = useDispatch();
  const { products, totalCost, create } = useSelector(state => ({
    products: state.basket.data,
    totalCost: state.basket.totalCost,
    create: state.order.create
  }));

  const removeClickHandler = (product: IProduct) => {
    dispatch(removeFromBasketAction({ product, countToRemove: product.count }));
  };

  const handleSubmitOrder = () => {
    dispatch(toggleModal({ name: 'orderModal', open: true }));
  };

  const handleSubmitOrderModal = values => {
    dispatch(
      createOrder({
        user_data: values,
        order_data: {
          products,
          totalCost: Number(totalCost) + 5
        }
      })
    );

    dispatch(toggleModal({ name: 'orderModal', open: false }));
    dispatch(toggleModal({ name: 'orderResultModal', open: true }));
    dispatch(resetBasketAction());
  };

  const changeCountHandler = (product: IProduct, type: string) => {
    if (type === '+') {
      dispatch(addToBasketAction(product));
    } else {
      dispatch(removeFromBasketAction({ product, countToRemove: 1 }));
    }
  };

  return (
    <BasketPageWrapper>
      <Container isTight>
        <h2>Basket</h2>

        <BasketList>
          {products.length !== 0 ? (
            <>
              {products.map((product: IProduct) => (
                <BasketItem
                  key={product.id}
                  product={product}
                  onRemove={() => removeClickHandler(product)}
                  onCountChange={type => changeCountHandler(product, type)}
                />
              ))}
              <DeliveryItem />
            </>
          ) : (
            <>
              <h2 style={{ marginTop: 34 }}>Empty!</h2>
              <p style={{ marginTop: 16 }}>Add some from menu</p>
            </>
          )}
        </BasketList>
        <footer>
          <Link href={{ pathname: '/' }}>
            <a>
              <Button isWhite>Back to menu</Button>
            </a>
          </Link>
          <div className="total">
            Total:{' '}
            <span className="money">
              $ {totalCost > 0 ? Number(totalCost) + 5 : totalCost} / €{' '}
              {Number(totalCost > 0 ? Number(totalCost) + 5 : totalCost) * 0.88}
            </span>
          </div>
          <Button disabled={products.length <= 0} onClick={handleSubmitOrder}>
            Take order
          </Button>
        </footer>
      </Container>

      <OrderModal
        name="orderModal"
        onSubmit={values => handleSubmitOrderModal(values)}
      />

      <OrderResultModal name="orderResultModal" state={create} />
    </BasketPageWrapper>
  );
};

export default BasketPageContainer;
