import React from 'react';

import { BasketProductItemWrapper } from './styles';

interface IProps {
  image?: string;
  name: string;
  price: string | number;
  count?: number;
  onRemove: () => void;
}

const BasketProductItem: React.FC<IProps> = ({
  image,
  name,
  price,
  count,
  onRemove
}) => (
  <BasketProductItemWrapper>
    <div className="image">
      <img src={image} alt={name} />
    </div>
    <div className="description">
      <h4>{name}</h4>
      <span>{price}$</span>
    </div>
    <div className="controls">
      <div className="remove" onClick={onRemove} />
      <div className="count">{count}</div>
    </div>
  </BasketProductItemWrapper>
);

export default BasketProductItem;
