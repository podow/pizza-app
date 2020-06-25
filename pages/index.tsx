import React from 'react';
import { NextPage } from 'next';

import Wrapper from '../layout';
import MainPageContainer from 'app/pages/Main';

import { getAll } from 'store/products/api';
import { getSlides } from 'store/slider/api';
import { fetchProductsDone } from 'store/products/actions';
import { fetchSlidesDone } from 'store/slider/actions';

const MainPage: NextPage = () => {
  return (
    <Wrapper>
      <MainPageContainer />
    </Wrapper>
  );
};

MainPage.getInitialProps = async ({ store }: any) => {
  try {
    const [products, slides] = await Promise.all([getAll(), getSlides()]);
    if (products) {
      store.dispatch(fetchProductsDone(products));
    }
    if (slides) {
      store.dispatch(fetchSlidesDone(slides));
    }
  } catch (err) {
    console.error(err);
  }
};

export default MainPage;
