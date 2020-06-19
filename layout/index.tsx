// @ts-nocheck
import React, { Fragment, useState, useEffect, ReactNode } from 'react';
import Head from 'next/head';

import { WrapperStyle, Main } from './style';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';

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

  const handleClose = () => {
    setBackMenuOpened(false);
    localStorage.setItem('backMenu', 'false');
  };

  useEffect(() => {
    if (localStorage.getItem('backMenu') === 'false' && backMenuOpened)
      setBackMenuOpened(false);
  }, [backMenuOpened]);
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
        <Footer />
      </WrapperStyle>
    </Fragment>
  );
};

export default Wrapper;
