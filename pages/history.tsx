import React from 'react';
import { NextPage } from 'next';

import Wrapper from '../layout';
import HistoryContainer from 'app/pages/History';

const HistoryPage: NextPage = () => {
  return (
    <Wrapper title="History">
      <HistoryContainer />
    </Wrapper>
  );
};

export default HistoryPage;
