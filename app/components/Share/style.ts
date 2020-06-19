import styled from 'styled-components';
import { device } from 'app/breakpoints';

export const ShareBlock = styled.div`
  margin-block-end: 4em;
  margin-block-start: 2em;
`;

export const ShareBlockTitle = styled.h2``;

export const ShareBlockCopy = styled.div`
  border: 1px solid #be6c2f;
  border-radius: 100px;
  max-width: 220px;
  height: 55px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-inline-start: 1em;
  padding-inline-end: 1em;

  p {
    color: #be6c2f;
    margin-inline-end: 0.5em;
    margin-inline-start: 1em;
    display: none;

    @media ${device.mobileL} {
      display: block;
    }
  }

  &:before {
    content: '';
    display: block;
    background: url('/static/images/icons/share-copy.svg');
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ShareBlockIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  a {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px;
    position: relative;
    border: 1px solid #be6c2f;
    margin-left: 18px;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
