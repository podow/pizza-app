import React from 'react';
import dynamic from 'next/dynamic';

import { Container } from 'app/components/container';

const ProductsBlock = dynamic(() => import('./ProductsBlock'));

const MainPageContainer = () => (
  <>
    <Container>Hello world</Container>
    <ProductsBlock />
  </>
);

export default MainPageContainer;
