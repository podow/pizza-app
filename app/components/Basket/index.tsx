import React from 'react';
import Link from 'next/link';

import { BasketLink } from './styles';

const Basket = () => {
  return (
    <Link href={{ pathname: '/basket' }}>
      <BasketLink>
        <span>Basket</span>
        <img src="/static/images/icons/icon-basket.svg" alt="Basket" />
      </BasketLink>
    </Link>
  );
};

export default Basket;
