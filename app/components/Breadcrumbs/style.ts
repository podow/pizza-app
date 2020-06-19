import styled from 'styled-components';

export const Breadcrumbs = styled.ul<{ isHided: boolean }>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 425px) {
    display: ${props => props.isHided && 'none'};
  }
  margin-block-start: 1em;
  margin-block-end: 1em;

  li {
    margin-right: 10px;
    a {
      position: relative;
      padding-left: 15px;
      font-size: 14px;
      line-height: 33px;
      color: #000000;
      cursor: pointer;
      transition: 0.3s all;
      &:hover {
        color: #be6c2f;
      }
    }

    &:before {
      content: '';
      display: block;
      height: 18px;
      width: 12px;
      background: url('/static/images/icons/Arrow-brown.svg') no-repeat;
      background-size: 60%;
      position: absolute;
      top: 9px;
    }
  }
`;
