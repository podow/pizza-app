import styled, { css, keyframes } from 'styled-components';
import { device } from 'app/breakpoints';

const pulse = keyframes`
  0% {
    transform: scale(0.5);
    opacity: .3
  }

  30% {
    opacity: .5
  }

  40% {
    opacity: .8
  }

  50% {
    transform: scale(1);
    opacity: 1
  }

  60% {
    opacity: 8;
  }

  80% {
    opacity: .5
  }

  100% {
    transform: scale(0.5);
    opacity: .3
  }
`;

export const HeaderWrapper = styled.header`
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
`;

const HeaderToggleChange = css`
  &::before {
    transform: rotate(-45deg) translate3d(0, -3px, 0) !important;
  }
  &:after {
    transform: rotate(45deg) !important;
  }
`;

export const MainHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px;

  @media ${device.mobileS} {
    justify-content: space-between;
  }

  .header-logo {
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 425px) {
      width: 30%;
    }
    @media ${device.laptop} {
      width: 120px;
      height: auto;
    }
  }

  .header-phone {
    padding-left: 60px;
    padding-right: 20px;
    display: block;
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.laptop} {
      display: block;
    }
  }

  .header-request-call {
    margin-top: 10px;
    color: #747474;
    position: relative;
    border-bottom: 1px solid #747474;
    cursor: pointer;
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.laptop} {
      display: block;
    }
  }
  .header-city-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .header-city {
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.laptop} {
      display: block;
    }
  }
  .live-button {
    margin-right: 20px;
    margin-bottom: 3px;
    background-color: #f05454;
    width: 115px;
    height: 23px;
    font-size: 12px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    padding-right: 10px;
    transition: all 0.3s;
    div {
      width: 14px;
      height: 14px;
      border: 1px solid #fff;
      border-radius: 50%;
      display: flex;
      align-self: center;
      justify-content: center;

      div {
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        animation: ${pulse} 4s infinite forwards;
      }
    }
    &:hover {
      transition: all 0.3s;
      box-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
    }
    @media ${device.mobileM} {
      margin-right: 30px;
    }
    @media ${device.mobileL} {
      margin-bottom: 0;
    }
  }
`;

export const HeaderToggle = styled.div<{ isMenuOpened: boolean }>`
  cursor: pointer;
  display: none: // TODO: remove
  a {
    width: 25px;
    height: 19px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${props => props.isMenuOpened && `${HeaderToggleChange}`};
    &::before {
      content: '';
      background-color: #be6c2f;
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 5px;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      transform-origin: 100% 0;
    }
    &::after {
      content: '';
      background-color: #be6c2f;
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 5px;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      transform-origin: 100% 0;
    }
  }

  i {
    content: '';
    background-color: #be6c2f;
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    opacity: ${props => props.isMenuOpened && '0'};
    transform: ${props => props.isMenuOpened && 'translate3d(30px, 0, 0)'};
  }
  @media ${device.laptop} {
    display: none;
  }
`;

export const WithDropDownLink = styled.a`
  cursor: default;
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 12px;
    top: 24px;
    right: -24px;
    background: url('/static/images/icons/Dropdown.svg') no-repeat center;
    transition: 0.5s all;
  }
`;

export const WithDropDownContent = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  z-index: 99;
  min-width: 165px;
  background-color: #fff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  li {
    color: #a0a0a0;
    white-space: nowrap;
    &:hover {
      background-color: #be6c2f;
      color: #ffffff;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    a {
      padding: 20px !important;
    }
    a:hover {
      color: #ffffff !important;
    }
  }
`;

export const WithDropDown = styled.li`
  position: relative;
  &:hover > ${WithDropDownContent} {
    display: block;
  }
  &:hover > ${WithDropDownLink}::after {
    transform: rotate(-180deg);
    background: url('/static/images/icons/Dropdown-brown.svg') no-repeat center;
  }
`;

export const SubHeaderWrapper = styled.div`
  background-color: #ffffff;
  .sub-header-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sub-header-menu li a {
    color: #000000;
    transition: 0.3s all;
    padding: 20px 0px;
    display: block;
  }
  .sub-header-menu li a:hover {
    color: #be6c2f;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`;

const OpenMenu = css`
  opacity: 1;
  visibility: visible;
`;

const OpenMenuAnimation = css`
  transform: translate3d(0, 0, 0);
`;

export const MobileHeaderWrapper = styled.nav<{ isMenuOpened: boolean }>`
  position: absolute;
  top: 100%;
  right: auto;
  bottom: auto;
  left: 0;
  display: block;
  width: 100%;
  height: calc(100vh - 62px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  z-index: 1;
  ${props => props.isMenuOpened && `${OpenMenu}`}
`;

export const MobileHeaderContent = styled.div<{ isMenuOpened: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #be6c2f;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform: translate3d(-50px, 0px, 0);
  transform: translate3d(-50px, 0px, 0);
  ${props => props.isMenuOpened && `${OpenMenuAnimation}`}
`;

export const MobileHeaderMenu = styled.ul`
  padding-top: 10px;
  li {
    margin-left: -25px;
    margin-right: -25px;
    padding: 0 20px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 22px;
    a {
      color: #ffffff;
      display: block;
      line-height: 1.2;
      padding: 15px 20px 15px 0;
    }
  }
`;

export const MobileHeaderBackground = styled.i`
  background-color: rgba(69, 114, 180, 0.5);
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const HeaderBackWrapper = styled.div`
  padding: 15px 0;
  background-color: #fff;
`;

export const HeaderBackSub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBackTitle = styled.div`
  a {
    color: #be6c2f;
    text-decoration: underline;
  }
`;

export const HeaderBackClose = styled.div`
  padding-right: 25px;
  background: url('/static/images/icons/icon-close.svg') no-repeat;
  background-size: 15%;
  background-position: 95%;
  cursor: pointer;
`;

export const ModalTitle = styled.h3`
  padding-bottom: '20px';
  text-align: 'center';
  font-size: '44px';
`;

export const ModalSubtitle = styled.p`
  padding-bottom: '20px';
  text-align: 'center';
  font-size: '22px';
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;

  & > a,
  & > button {
    margin-right: 12px;
    width: 30px;
    height: 30px;
    background-image: url('/static/images/icons/profile.png');
    background-size: cover;
    text-indent: -9999px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const AuthModalWrapper = styled.div`
  min-width: 380px;

  form {
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }

    footer {
      text-align: right;
    }
  }
`;
