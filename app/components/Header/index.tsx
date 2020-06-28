import React, { Component } from 'react';
import Router from 'next/router';

import { Container } from '../container';
import HeaderMobile from './HeaderMobile';
import SubHeader from './SubHeader';
import MainHeader from './MainHeader';
import HeaderBack from './HeaderBack';

import { HeaderWrapper } from './style';

interface IState {
  isMenuOpened: boolean;
  backMenuOpened: boolean;
}

interface IProps {
  backMenuOpened: boolean;
  setBackMenuOpened: () => void;
}

class Header extends Component<IProps, IState> {
  state: Readonly<IState> = {
    isMenuOpened: false,
    backMenuOpened: true
  };

  toggleMenu = () => {
    this.setState(state => ({
      isMenuOpened: !state.isMenuOpened
    }));
  };

  componentDidUpdate() {
    // @ts-ignore
    Router.onRouteChangeStart = () => {
      this.setState({
        isMenuOpened: false
      });
    };
  }

  render() {
    return (
      <HeaderWrapper>
        {this.props.backMenuOpened && (
          <HeaderBack handleClose={this.props.setBackMenuOpened} />
        )}
        <div>
          <Container>
            <MainHeader
              toggleMenu={this.toggleMenu}
              isMenuOpened={this.state.isMenuOpened}
            />
          </Container>
        </div>
        {/*<SubHeader />*/}
        <HeaderMobile isMenuOpened={this.state.isMenuOpened} />
      </HeaderWrapper>
    );
  }
}

export default Header;
