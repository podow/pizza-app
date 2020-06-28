import React from 'react';
import { NextPage } from 'next';

import Wrapper from '../layout';
import BasketPageContainer from 'app/pages/Basket';

const BasketPage: NextPage = () => {
  return (
    <Wrapper title="Basket">
      <BasketPageContainer />
    </Wrapper>
  );
};

export default BasketPage;
