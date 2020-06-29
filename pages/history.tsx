import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import * as Cookies from 'js-cookie';

import { getAll } from 'store/history/api';
import { fetchHistoryDone } from 'store/history/actions';
import { toggleModal } from 'store/common/actions';

import Wrapper from '../layout';
import HistoryContainer from 'app/pages/History';

const HistoryPage: NextPage = () => (
  <Wrapper title="History">
    <HistoryContainer />
  </Wrapper>
);

HistoryPage.getInitialProps = async ({ store, req, res }: any) => {
  if (!store.getState().auth.isAuthenticated) {
    if (req) {
      res.writeHead(302, { Location: '/' });
      res.end();
    } else {
      Router.push('/');
    }
    store.dispatch(toggleModal({ name: 'authModal', open: true }));
  } else {
    try {
      const userId = Cookies.get('user_id');
      const history = await getAll(userId);
      if (history) {
        store.dispatch(fetchHistoryDone(history));
      }
    } catch (err) {
      console.error(err);
    }
  }
};

export default HistoryPage;
