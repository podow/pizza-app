import React from 'react';

import { BasketProduct } from './styles';

import { IProduct } from 'interfaces/components/products';

interface IProps {
  product: IProduct;
  onRemove: () => void;
}

const BasketItem: React.FC<IProps> = ({
  product: { image, name, count, discountPrice, price },
  onRemove
}) => (
  <BasketProduct>
    <div className="half">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="description">
        <h4>{name}</h4>
        <span>1 PC / 6 pieces</span>
      </div>
      <div className="controls">
        <div className="count">
          <button>-</button>
          {count}
          <button>+</button>
        </div>
      </div>
    </div>
    <div className="half">
      <div className="money">
        <div className="price">$ {(discountPrice || price) * (count || 1)}</div>
      </div>
      <div className="delete">
        <div className="remove" onClick={onRemove} />
      </div>
    </div>
  </BasketProduct>
);

export default BasketItem;
