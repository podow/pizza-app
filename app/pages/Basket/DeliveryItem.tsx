import React from 'react';

import { BasketProduct } from './styles';

const DeliveryItem = () => (
  <BasketProduct>
    <div className="half">
      <div className="image">
        <img src="/static/images/delivery.jpeg" alt="Delivery" />
      </div>
      <div className="description">
        <h4>Delivery</h4>
      </div>
      <div className="controls">
        <div className="count">1</div>
      </div>
    </div>
    <div className="half">
      <div className="money">
        <div className="price">$ 5</div>
      </div>
    </div>
  </BasketProduct>
);

export default DeliveryItem;
