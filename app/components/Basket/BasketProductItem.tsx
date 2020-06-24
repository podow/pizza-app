import React from 'react';

import { BasketProductItemWrapper } from './styles';

interface IProps {
  image?: string;
  name: string;
  price: string | number;
  count: number;
}

const BasketProductItem: React.FC<IProps> = ({ image, name, price, count }) => (
  <BasketProductItemWrapper>
    <div className="image">
      <img src={image} alt={name} />
    </div>
    <div className="description">
      <h4>{name}</h4>
      <span>{price}$</span>
    </div>
    <div className="controls">
      <div className="remove" />
      <div className="count">{count}</div>
    </div>
  </BasketProductItemWrapper>
);

export default BasketProductItem;
