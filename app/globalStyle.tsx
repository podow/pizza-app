import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Rubik-Regular;
    src: url("/static/fonts/Rubik-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: Rubik-Medium;
    src: url("/static/fonts/Rubik-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: GothamPro;
    src: url("/static/fonts/GothamPro-Bold.ttf") format("truetype");
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
  input {
    outline: none;
  }

  #nprogress .bar {
    background: #be6c2f !important;
  }
  
  #modal {
    font-family: 'Rubik-Regular', sans-serif;
  }

  .icon-marker {
    margin-top: -110px !important;
    margin-left: -40px !important;
    width: 80px !important;
    height: 80px !important;

    &-body {
      background-color: #fff;
      height: inherit;
      border-radius: 50%;
      border: 5px solid #fff;
      position: relative;
      &:after {
        content: '';
        z-index: -1;
        transform: translateX(-50%);
        top: calc(100% - 8px);
        position: absolute;
        right: auto;
        bottom: auto;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-top: 30px solid #fff;
      }

      &__img {
        width: 100%;
        height: 100%;
        border: 3px solid #be6c2f;
        border-radius: 50%;
      }
    }

    &:hover {
      .icon-marker-body {
        border-color: #be6c2f;
        &:after {
          border-top-color: #be6c2f;
        }

        &__img {
          border-color: #fff;
        }
      }
    }
  }
`;

interface FlexBlockProp {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'
    | 'center';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
}

interface LinkTagProp {
  active?: boolean;
  withBottomBorder?: boolean;
}

export const FlexBlock = styled.div<FlexBlockProp>`
  display: flex;
  flex-direction: ${props => props.direction && props.direction};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align};
`;

export const BlockHoverAnimation = css`
  transform: translateY(-5px);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 30px;
  cursor: pointer;
`;

export const animatedArrows = css`
  a:first-child {
    transition: all 0.5s;

    &:hover {
      transform: translateX(-3px);
      transition: transform 0.5s;
    }
  }

  a:nth-child(2) {
    transition: all 0.5s;

    &:hover {
      transform: translateX(3px);
      transition: transform 0.5s;
    }
  }
`;

const LinkTagBottomLineAnimation = css`
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #be6c2f;
    bottom: -10px;
    left: 0;
    animation: fadeDown 0.3s ease;
  }

  @keyframes fadeDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const LinkTag = styled.a<LinkTagProp>`
  color: #5b5b5b;
  transition: 0.5s all;
  position: relative;
  cursor: pointer;
  ${props =>
    props.active &&
    `color: #be6c2f;
     font-weight: bold;`}
  &:hover {
    color: #be6c2f;
    ${props => props.withBottomBorder && `${LinkTagBottomLineAnimation}`}
  }
`;

export const FormBlock = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default GlobalStyle;
