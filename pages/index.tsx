import React from 'react';
import { NextPage } from 'next';

import Wrapper from '../layout';
import { Container } from '../app/components/container';

const MainPage: NextPage = () => {
  return (
    <Wrapper>
      <Container>Hello world</Container>
    </Wrapper>
  );
};

export default MainPage;
