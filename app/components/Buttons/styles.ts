import styled, { css } from 'styled-components';

interface IProps {
  isFullWidth?: boolean;
  isWhite?: boolean;
  isSubscribeBlock?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const fromWhiteToBrown = css`
  background: linear-gradient(to right, #be6c2f 50%, #ffffff 50%);
`;

const fromBrownToLightbrown = css`
  background: linear-gradient(to right, #db7b34 50%, #be6c2f 50%);
`;

const fromBrownToWhite = css`
  background: linear-gradient(to right, #ffffff 50%, #be6c2f 50%);
`;

export const ButtonStyle = styled.button<IProps>`
  width: ${props =>
    props.isFullWidth
      ? '100%'
      : props.size === 'lg'
      ? '300px'
      : props.size === 'sm'
      ? '150px'
      : '250px'};
  ${props =>
    props.isWhite
      ? `${fromWhiteToBrown}`
      : props.isSubscribeBlock
      ? `${fromBrownToWhite}`
      : `${fromBrownToLightbrown}`};
  border: ${props => (props.isWhite ? '2px solid #be6c2f' : 'none')};
  height: ${props =>
    props.size === 'lg' ? '80px' : props.size === 'sm' ? '40px' : '60px'};
  border-radius: 6px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;
  font-family: 'Rubik-Medium', sans-serif;
  padding: 0 7px;
  &:hover {
    background-position: left bottom;
  }
  &:focus {
    outline: none;
  }
  &:not([disabled]):active {
    transform: translateY(4px);
    border-color: #c65605;
  }
`;

export const ButtonLabel = styled.span<IProps>`
  text-align: center;
  font-size: 16px !important;
  color: ${props =>
    props.isWhite ? '#be6c2f !important' : '#ffffff !important'};
  transition: all 0.2s ease-out;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${props =>
      props.isSubscribeBlock ? '#be6c2f !important' : '#ffffff !important'};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  button {
    border-radius: 0;
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:not(:first-child) {
      border-left: 0;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;
