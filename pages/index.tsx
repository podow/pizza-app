import React from 'react';
import { NextPage } from 'next';

import Wrapper from '../layout';
import MainPageContainer from 'app/pages/Main';

import { getAll } from 'store/products/api';
import { fetchProductsDone } from 'store/products/actions';

const MainPage: NextPage = () => {
  return (
    <Wrapper>
      <MainPageContainer />
    </Wrapper>
  );
};

MainPage.getInitialProps = async ({ store }: any) => {
  try {
    const response = await getAll();
    if (response) {
      store.dispatch(fetchProductsDone(response));
    }
  } catch (err) {
    console.error(err);
  }
};

export default MainPage;
