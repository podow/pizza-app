import React from 'react';
import dynamic from 'next/dynamic';

const MainSlider = dynamic(() => import('./MainSlider'));
const ProductsBlock = dynamic(() => import('./ProductsBlock'));

const MainPageContainer = () => (
  <>
    <MainSlider />
    <ProductsBlock />
  </>
);

export default MainPageContainer;
