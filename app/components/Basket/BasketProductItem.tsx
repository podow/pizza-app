import React from 'react';

import { BasketProductItemWrapper } from './styles';

interface IProps {
  image?: string;
  name: string;
  price: string | number;
  count?: number;
  onRemove: () => void;
  onCountChange: (type) => void;
}

const BasketProductItem: React.FC<IProps> = ({
  image,
  name,
  price,
  count,
  onRemove,
  onCountChange
}) => (
  <BasketProductItemWrapper>
    <div className="image">
      <img src={image} alt={name} />
    </div>
    <div className="description">
      <h4>{name}</h4>
      <span>
        $ {price} / € {Number(price) * 0.88}
      </span>
    </div>
    <div className="controls">
      <div className="remove" onClick={onRemove} />
      <div className="count">
        <button onClick={() => onCountChange('-')}>-</button>
        {count}
        <button onClick={() => onCountChange('+')}>+</button>
      </div>
    </div>
  </BasketProductItemWrapper>
);

export default BasketProductItem;
