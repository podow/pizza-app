import styled, { css } from 'styled-components';

const CheckboxStyle = css`
  display: none;
  box-sizing: border-box;
  padding: 0;
  outline: none;
  overflow: visible;
`;

const SquareCheckbox = css`
  input {
    &[type='checkbox'] {
      & + label {
        width: calc(100% - 5px);
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: bold;
        background-color: #f1f2ea;
        border-radius: 4px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
      }
      & + label[for='roominess_studio'] {
        margin-right: 40px;
      }
      &:checked + label {
        background-color: #be6c2f;
        color: #fff;
      }
    }
  }
`;

const StandartCheckbox = css`
  input {
    &[type='checkbox'] {
      & + label {
        font-size: 16px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        padding-left: 25px;
        margin-right: 20px;
        &:before {
          content: '';
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 2px;
          background-color: transparent;
          border: 2px solid gray;
          margin-right: 5px;
          position: absolute;
          top: 0px;
          right: auto;
          bottom: auto;
          left: 0;
        }
        &::after {
          display: block;
          width: 12px;
          height: 10px;
          background: url('/static/images/icons/icon-check.svg') 50% 0 no-repeat;
          background-size: 100%;
          position: absolute;
          top: 4px;
          right: auto;
          bottom: auto;
          left: 3px;
        }
      }
    }
    &:checked + label {
      &:after {
        content: '';
      }
      &::before {
        background-color: #be6c2f;
        border-color: #be6c2f;
      }
    }
  }
`;

export const MainWrapper = styled.div<{ isSquare?: boolean }>`
  width: 100%;
  ${props => (props.isSquare ? `${SquareCheckbox}` : `${StandartCheckbox}`)}
`;

export const CheckboxWrapper = styled.input<{ isSquare?: boolean }>`
  ${CheckboxStyle}
`;
