import styled from 'styled-components';
import { darkHover, mainColor, mainTransitionTime } from 'app/variables';

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
