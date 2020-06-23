import React from 'react';
import Link from 'next/link';

import { HeaderToggle, MainHeaderWrapper } from './style';

import { IMainHeaderProps } from 'interfaces/components/header';

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
      <HeaderToggle
        onClick={toggleMenu}
        isMenuOpened={isMenuOpened}
        className="header-toggle"
      >
        <a>
          <i />
        </a>
      </HeaderToggle>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
