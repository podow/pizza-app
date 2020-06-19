import React from 'react';
import App from 'next/app';
import Head from 'next/head';
// import Router from 'next/router';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from 'store';

import 'rc-slider/assets/index.css';
import 'nprogress/nprogress.css';

// Router.onRouteChangeStart = () => {};
// Router.onRouteChangeComplete = () => {};
// Router.onRouteChangeError = (e, url) => {};

class PizzaApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Pizza App" />
          <title>Pizza App</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(PizzaApp));
