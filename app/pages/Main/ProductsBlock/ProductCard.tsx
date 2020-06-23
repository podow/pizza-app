import React from 'react';
import cn from 'classnames';

import { ProductsSectionItem } from './styles';

import { IProduct } from 'interfaces/components/products';

import { Button } from 'app/components/Buttons';

const ProductCard: React.FC<{ item: IProduct; onClick: () => void }> = ({
  item: { name, image, description, price, discountPrice },
  onClick
}) => (
  <ProductsSectionItem onClick={onClick}>
    <main>
      <figure>
        <img src={image} alt={name} title={name} />
      </figure>
      <h2>{name}</h2>
      <p>{description}</p>
    </main>
    <footer>
      <div>
        <span>
          <span
            className={cn({
              'old-price': discountPrice
            })}
          >
            {price}$
          </span>
          {discountPrice && <span>{discountPrice}$</span>}
        </span>
      </div>
      <div>
        <Button size="sm">Add to card</Button>
      </div>
    </footer>
  </ProductsSectionItem>
);

export default ProductCard;
