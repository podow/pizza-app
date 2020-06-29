// @ts-nocheck
import React, { Fragment, useState, useEffect, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

import { WrapperStyle, Main } from './style';

import { fetchBasketAction } from 'store/basket/actions';
import { checkAuth } from 'store/auth/actions';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import { toggleModal } from '../store/common/actions';

interface IProps {
  children: ReactNode;
  title?: string;
  color?: string;
  gtmHead?: string;
  gtmBody?: string;
}

const Wrapper: React.FC<IProps> = props => {
  const { children, title, color } = props;
  const [backMenuOpened, setBackMenuOpened] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleClose = () => {
    setBackMenuOpened(false);
    localStorage.setItem('backMenu', 'false');
  };

  useEffect(() => {
    if (localStorage.getItem('backMenu') === 'false' && backMenuOpened) {
      setBackMenuOpened(false);
    }

    dispatch(fetchBasketAction());

    if (!isAuthenticated) {
      dispatch(checkAuth());
    } else {
      dispatch(toggleModal({ name: 'authModal', open: false }));
    }
  }, [backMenuOpened, isAuthenticated]);
  return (
    <Fragment>
      <Head>
        <title>{(title && `Pizza App | ${title}`) || 'Pizza App'}</title>
        <link rel="stylesheet" href="../static/reset.css" />
      </Head>
      <WrapperStyle>
        <Header
          backMenuOpened={backMenuOpened}
          setBackMenuOpened={() => handleClose()}
        />
        <Main backMenuOpened={backMenuOpened} color={color}>
          {children}
        </Main>
        {/*<Footer />*/}
      </WrapperStyle>
    </Fragment>
  );
};

export default Wrapper;
