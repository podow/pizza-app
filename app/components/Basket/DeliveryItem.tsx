import React from 'react';

import { BasketProductItemWrapper } from './styles';

const DeliveryItem = () => (
  <BasketProductItemWrapper>
    <div className="image">
      <img src="/static/images/delivery.jpeg" alt="Delivery" />
    </div>
    <div className="description">
      <h4>Delivery</h4>
      <span>$ 5 / € {5 * 0.88}</span>
    </div>
    <div className="controls">
      <div className="remove" style={{ opacity: 0, cursor: 'default' }} />
      <div className="count">1</div>
    </div>
  </BasketProductItemWrapper>
);

export default DeliveryItem;
