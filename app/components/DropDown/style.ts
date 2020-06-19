import styled from 'styled-components';
import { device } from 'app/breakpoints';

export const DropDownMenu = styled.div<{ ml: boolean }>`
  position: relative;
  cursor: pointer;
  padding-right: 10px;
  margin-left: ${props => props.ml === true && 'auto'};
  &::after {
    content: '';
    position: absolute;
    bottom: auto;
    left: auto;
    right: 0px;
    top: 11px;
    width: 15px;
    height: 10px;
    background: url('/static/images/icons/Dropdown.svg') no-repeat center;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
  @media ${device.laptopL} {
    display: block;
  }
`;

export const DropDownMenuList = styled.div<{ opened: boolean }>`
  z-index: 99;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.09);
  background-color: #fff;
  border-radius: 0px 0px 8px 8px;
  opacity: ${props => (props.opened === true ? 1 : 0)};
  max-height: ${props => (props.opened === true ? '300px' : '0px')};
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: 0.3s all;
  div {
    padding: 8px 10px;
    font-size: 14px;
    &:hover {
      color: #fff;
      background-color: #be6c2f;
    }
  }
`;

export const DropDownMenuValue = styled.div<{ highlighted?: boolean }>`
  color: ${props => (props.highlighted ? '#be6c2f' : '#a0a0a0')};
  font-size: 14px;
  padding: 8px 10px;
`;
