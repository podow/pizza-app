import React from 'react';
import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';

interface IProps {
  filterProp?: boolean;
  beforeText?: string;
  afterText?: string;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  isNotRounded?: boolean;
  extraPadding?: boolean;
  extraPaddingUnique?: boolean;
}

export const ErrorBlock = styled.p`
  padding-top: 5px;
  padding-bottom: 5px;
  color: #733122;
`;

const priceBefore = css`
  width: auto;
  height: auto;
  position: absolute;
  top: 15px;
  left: 10px;
  color: #979797;
`;

const priceAfter = css`
  width: auto;
  height: auto;
  position: absolute;
  right: 10px;
  top: 15px;
  color: #979797;
`;

const ExtraBorders = css`
  border-top-left-radius: 6px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const ExtraPaddingUnique = css`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const Select = styled(ReactSelect)<IProps>`
  height: 100%;
  .react-select__control {
    width: ${props => (props.isFullWidth ? '100%' : '250px')};
    height: ${props => (props.isFullHeight ? '100%' : '45px')};
    border-color: #c8c8c8;
    border-radius: ${props => (props.isNotRounded ? '0px' : '6px')};
    ${props => props.extraPadding && `${ExtraBorders}`};
    ${props => props.extraPaddingUnique && `${ExtraPaddingUnique}`};
    outline: none;
    box-shadow: none;
    @media (max-width: 768px) {
      width: 100%;
      height: 45px;
    }
    @media (max-width: 425px) {
      height: 60px;
    }
  }
  .react-select__option:active {
    background-color: #be6c2f;
  }
  .react-select__option--is-focused {
    background-color: white;
    color: black;
  }
  .react-select__option--is-selected {
    background-color: #be6c2f;
    color: #ffffff;
  }
  .react-select__option {
    &:hover {
      background-color: #be6c2f;
      color: #ffffff;
    }
  }
  .react-select__indicator-separator {
    display: none;
  }
`;

export const FormStyle = props => (
  <Select classNamePrefix="react-select" {...props} />
);

export default FormStyle;

export const InputField = styled.input<IProps>`
  padding: ${props => (props.filterProp ? '19px 50px 20px 35px' : '20px 10px')};
  border: 1px solid #dadada;
  border-radius: ${props => (props.isNotRounded ? '0px' : '6px')};
  ${props => props.extraPaddingUnique && `${ExtraPaddingUnique}`};
  outline: none;
  text-align: ${props => (props.filterProp ? 'center' : 'left')};
  height: ${props => (props.isFullHeight ? '100%' : '45px')};
  width: 100%;
  @media (max-width: 768px) {
    height: ${props => (props.isFullHeight ? '100%' : '45px')};
  }
`;

export const TextAreaStyled = styled.textarea<IProps>`
  padding: ${props => (props.filterProp ? '19px 50px 20px 35px' : '20px 10px')};
  border: 1px solid #dadada;
  border-radius: ${props => (props.isNotRounded ? '0px' : '6px')};
  ${props => props.extraPaddingUnique && `${ExtraPaddingUnique}`};
  outline: none;
  text-align: ${props => (props.filterProp ? 'center' : 'left')};
  height: ${props => (props.isFullHeight ? '100%' : '45px')};
  width: 100%;
  resize: none;
  @media (max-width: 768px) {
    height: ${props => (props.isFullHeight ? '100%' : '45px')};
  }
`;

export const PriceFromFieldBlock = styled.div<IProps>`
  position: relative;
  &:before {
    content: '${props => props.beforeText}';
    ${priceBefore};
    top: ${props => props.isFullHeight && '22px'};
    @media (max-width: 768px) {
      top: 15px;
    }
    @media (max-width: 425px) {
      top: 15px
    }
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
  &::after {
    content: '${props => props.afterText}';
    ${priceAfter};
    top: ${props => props.isFullHeight && '22px'};
    @media (max-width: 768px) {
      top: 15px;
    }
    @media (max-width: 425px) {
      top: 15px;
    }
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;

export const PriceToFieldBlock = styled.div<IProps>`
  position: relative;
  &::before {
    content: '${props => props.beforeText}';
    ${priceBefore};
    top: ${props => props.isFullHeight && '22px'};
    @media (max-width: 768px) {
      top: 15px;
    }
    @media (max-width: 425px) {
      top: 15px
    }
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
  &::after {
    content: '${props => props.afterText}';
    ${priceAfter};
    top: ${props => props.isFullHeight && '22px'};
    @media (max-width: 768px) {
      top: 15px;
    }
    @media (max-width: 425px) {
      top: 15px;
    }
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;

export const InputPhoneWrapper = styled.div<{
  isFullWidth?: boolean;
  isFullHeight?: boolean;
}>`
  position: relative;

  input[type='tel'] {
    padding: 20px 10px 20px 35px;
    border-radius: 6px;
    outline: none;
    position: relative;
    border: 1px solid #dadada;
    width: ${props => props.isFullWidth && '100%'};
    height: ${props => (props.isFullHeight ? '100%' : '45px')};
    @media (max-width: 425px) {
      width: 100%;
    }
  }

  &::before {
    content: '+';
    font-size: 18px;
    color: #be6c2f;
    position: absolute;
    top: 12px;
    right: auto;
    bottom: auto;
    left: 17px;
    z-index: 5;
    font-family: 'Rubik-Medium', sans-serif;
  }
`;
