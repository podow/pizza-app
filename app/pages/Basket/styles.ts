import styled from 'styled-components';
import { mainColor, mainTransitionTime } from 'app/variables';
import { device } from 'app/breakpoints';

export const BasketPageWrapper = styled.div`
  padding-top: 44px;
  padding-bottom: 120px;

  h2 {
    font-size: 36px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: unset;
    }

    .total {
      font-size: 26px;
      padding: 18px 0;

      .money {
        color: ${mainColor};
      }
    }
  }
`;

export const BasketList = styled.ul`
  margin: 30px 0px 24px;
  border-top: 1px solid #f1f2f5;
`;

export const BasketProduct = styled.li`
  display: flex;
  width: 100%;
  transform: translateZ(0px);
  min-height: 96px;
  transition: all 0.2s ease 0s;
  border-bottom: 1px solid rgb(241, 242, 245);
  padding: 16px 0px;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-wrap: unset;
  }

  .half {
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;

    @media ${device.tablet} {
      display: contents;
    }
  }

  .image {
    width: 67px;
    position: relative;
    margin-right: 12px;
    flex: 0 0 auto;
  }

  .description {
    width: calc(85% - 133px);
    padding-right: 12px;
    align-self: center;
    flex: 0 0 auto;

    @media ${device.tablet} {
      width: calc(85% - 233px);
    }

    h4 {
      font-size: 22px;
      line-height: 23px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    span {
      margin-top: 4px;
      font-size: 12px;
      line-height: 1.4;
      color: rgb(115, 121, 140);
    }
  }

  .controls {
    width: 98px;
    padding-top: 13px;
    flex: 0 0 auto;
    margin: 0px 12px;

    .count {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 40px;

      button {
        cursor: pointer;
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${mainColor};
        color: ${mainColor};
        border-radius: 10px;
        background-color: transparent;
        transition: all ${mainTransitionTime};

        &:hover {
          background-color: ${mainColor};
          color: #fff;
        }
      }
    }
  }

  .money {
    width: 15%;
    padding-top: 16px;
    text-align: right;
    font-size: 21px;
    color: rgb(0, 0, 0);
    flex: 0 0 auto;
  }

  .delete {
    width: 20px;
    margin-left: 12px;
    padding-top: 16px;
    text-align: right;
    cursor: pointer;
    flex: 0 0 auto;

    .remove {
      cursor: pointer;
      background-image: url('/static/images/icons/icon-trash.svg');
      height: 16px;
      width: 16px;
    }
  }
`;

export const ModalForm = styled.form`
  max-width: 600px;

  @media ${device.tablet} {
    width: 600px;
  }

  footer {
    text-align: right;
  }

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
