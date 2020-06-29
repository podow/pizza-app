import React from 'react';
import { NextPage } from 'next';

import { getAll } from 'store/history/api';
import { fetchHistoryDone } from 'store/history/actions';

import Wrapper from '../layout';
import HistoryContainer from 'app/pages/History';

const HistoryPage: NextPage = () => {
  return (
    <Wrapper title="History">
      <HistoryContainer />
    </Wrapper>
  );
};

HistoryPage.getInitialProps = async ({ store }: any) => {
  try {
    const history = await getAll();
    if (history) {
      store.dispatch(fetchHistoryDone(history));
    }
  } catch (err) {
    console.error(err);
  }
};

export default HistoryPage;
