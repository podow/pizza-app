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
    overflow-y: auto;
    padding: 0 16px;
    width: 250px;
    max-height: 300px;

    position: absolute;
    top: 50px;
    right: 0;
    z-index: 999;

    .total {
      padding: 16px 0 24px;
      border-top: 1px solid #dedede;
    }
  }
`;

export const BasketProductList = styled.ul`
  padding: 24px 0 16px;
`;

export const BasketProductItemWrapper = styled.li`
  display: flex;

  &:not(:first-child) {
    border-top: 1px solid;
    padding-top: 6px;
  }

  .image {
    flex: 1;
    margin-right: 4px;
  }

  .description {
    flex: 3;

    span {
      font-size: 14px;
    }
  }

  .controls {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    .remove {
      cursor: pointer;
      background-image: url('/static/images/icons/icon-trash.svg');
      height: 12px;
      width: 12px;
    }

    .count {
      font-size: 14px;
    }
  }
`;

export const EmptyBasketWrapper = styled.div`
  padding: 16px 0;
  text-align: center;

  img {
    max-width: 150px;
  }

  p {
    font-size: 12px;
    margin-top: 8px;
  }
`;
