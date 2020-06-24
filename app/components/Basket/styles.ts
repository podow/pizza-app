import styled from 'styled-components';
import { darkHover, mainColor, mainTransitionTime } from 'app/variables';
import { triangle } from '../../mixins';

export const BasketWrapper = styled.div`
  position: relative;

  &:hover {
    .dropdown {
      display: block;
    }
  }

  .dropdown {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px #dedede;

    // display: none;
    padding: 0 16px;
    width: 250px;

    position: absolute;
    top: 50px;
    right: 0;
    z-index: 999;

    &:after {
      content: '';
      ${triangle('20px', { top: '-10px', right: '0' })}
    }

    ul {
      padding: 24px 0 16px;
    }

    .total {
      padding: 16px 0 24px;
      border-top: 1px solid #dedede;
    }
  }
`;

export const BasketLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition-property: border-color, background, color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #fff;
  min-width: 90px;
  border-radius: 8px;
  padding: 0px 12px;
  overflow: hidden;
  background-color: ${mainColor};
  transition: background-color ${mainTransitionTime};

  &:hover {
    background-color: ${darkHover};
  }

  span:after {
    content: '';
    border-right: 1px solid #eee;
    margin-left: 6px;
    margin-right: 6px;
  }

  img {
    width: 16px;
  }
`;
