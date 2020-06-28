import React from 'react';
import Link from 'next/link';

import { HeaderToggle, MainHeaderWrapper } from './style';

import { IMainHeaderProps } from 'interfaces/components/header';

import Basket from '../Basket';

const MainHeader: React.FC<IMainHeaderProps> = props => {
  const { toggleMenu, isMenuOpened } = props;

  return (
    <MainHeaderWrapper>
      <div className="header-logo">
        <Link href={{ pathname: '/' }}>
          <a>
            <img src="/static/images/logo-small.png" alt="logo" />
          </a>
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href={{ pathname: '/history' }}>
          <a style={{ marginRight: 12 }}>
            <img
              src="/static/images/icons/profile.png"
              alt=""
              style={{ width: 30 }}
            />
          </a>
        </Link>

        <Basket />
      </div>

      {/*<HeaderToggle*/}
      {/*  onClick={toggleMenu}*/}
      {/*  isMenuOpened={isMenuOpened}*/}
      {/*  className="header-toggle"*/}
      {/*>*/}
      {/*  <a>*/}
      {/*    <i />*/}
      {/*  </a>*/}
      {/*</HeaderToggle>*/}
    </MainHeaderWrapper>
  );
};

export default MainHeader;
