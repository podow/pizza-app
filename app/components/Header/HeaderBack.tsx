import React from 'react';

import { Container } from '../container';

import {
  HeaderBackWrapper,
  HeaderBackSub,
  HeaderBackTitle,
  HeaderBackClose
} from './style';

interface Props {
  handleClose: () => void;
}

const HeaderBack: React.FC<Props> = ({ handleClose }) => {
  return (
    <HeaderBackWrapper>
      <Container>
        <HeaderBackSub>
          <HeaderBackTitle>
            Вернуться к старой{' '}
            <a href="https://old.nova-city.kz">версии сайта.</a>
          </HeaderBackTitle>
          <HeaderBackClose onClick={handleClose}>Закрыть</HeaderBackClose>
        </HeaderBackSub>
      </Container>
    </HeaderBackWrapper>
  );
};

export default HeaderBack;
