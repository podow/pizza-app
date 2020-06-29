import styled, { css } from 'styled-components';
import { device } from '../../breakpoints';

const ModalWrapperOpen = css`
  opacity: 1;
  visibility: visible;
`;

const ModalContentOpen = css`
  opacity: 1;
  transform: scale(1) translate3d(0, 0, 0);
`;

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  z-index: 55;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: opacity 0.3s;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
  ${props => props.isOpen && `${ModalWrapperOpen}`}
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  background-color: #fff;
  position: absolute;
  padding: 20px 25px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backface-visibility: hidden;
  transition: all 0.3s;
  opacity: 0;
  width: 100%;

  @media ${device.tablet} {
    position: relative;
    border-radius: 8px;
    padding: 40px 60px;
    max-width: 90%;
    width: auto;
    transform: scale(0.9) translate3d(0, 50px, 0);
  }

  ${props => props.isOpen && `${ModalContentOpen}`}
`;

export const ModalBody = styled.div``;

export const CloseModalButton = styled.a`
  cursor: pointer;
  display: block;
  width: 20px;
  height: 20px;
  background: url('/static/images/icons/icon-close.svg') 50% 0 no-repeat;
  background-size: 100%;
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: auto;
  left: auto;
  z-index: 9999;
  @media (min-width: 992px) {
    display: block;
    width: 20px;
    height: 20px;
    top: 23px;
    right: 24px;
  }
`;
