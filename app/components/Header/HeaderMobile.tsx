import React from 'react';
import Link from 'next/link';

import {
  MobileHeaderWrapper,
  MobileHeaderContent,
  MobileHeaderBackground,
  MobileHeaderMenu
} from './style';

import { Container } from '../container';

const HeaderMobile: React.FC<{ isMenuOpened: boolean }> = props => {
  const { isMenuOpened } = props;
  return (
    <MobileHeaderWrapper isMenuOpened={isMenuOpened}>
      <MobileHeaderContent isMenuOpened={isMenuOpened}>
        <Container>
          <MobileHeaderMenu>
            <li>
              <Link
                href={{ pathname: '/filter?room_type=1' }}
                as="/filter?room_type=1"
              >
                <a>Жилая недвижимость</a>
              </Link>
            </li>
            <li>
              <Link
                href={{ pathname: '/filter?room_type=2' }}
                as="/filter?room_type=2"
              >
                <a>Комерческая недвижимость</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/news', query: { category_id: 2 } }}>
                <a>Новости компании</a>
              </Link>
            </li>
          </MobileHeaderMenu>
        </Container>
      </MobileHeaderContent>

      <MobileHeaderBackground />
    </MobileHeaderWrapper>
  );
};

export default HeaderMobile;
