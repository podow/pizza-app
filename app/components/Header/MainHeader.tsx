import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

import { HeaderToggle, MainHeaderWrapper, HeaderControls } from './style';

import { IMainHeaderProps } from 'interfaces/components/header';
import { toggleModal } from 'store/common/actions';

import Basket from '../Basket';
import AuthModal from './AuthModal';

const MainHeader: React.FC<IMainHeaderProps> = props => {
  const { toggleMenu, isMenuOpened } = props;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const cabinetClickHandler = () => {
    if (isAuthenticated) {
      Router.push('/history');
    } else {
      dispatch(toggleModal({ name: 'authModal', open: true }));
    }
  };

  return (
    <MainHeaderWrapper>
      <div className="header-logo">
        <Link href={{ pathname: '/' }}>
          <a>
            <img src="/static/images/logo-small.png" alt="logo" />
          </a>
        </Link>
      </div>

      <HeaderControls>
        <button onClick={cabinetClickHandler}>Cabinet</button>
        <Basket />
      </HeaderControls>

      <HeaderToggle
        onClick={toggleMenu}
        isMenuOpened={isMenuOpened}
        className="header-toggle"
      >
        <a>
          <i />
        </a>
      </HeaderToggle>

      <AuthModal />
    </MainHeaderWrapper>
  );
};

export default MainHeader;
