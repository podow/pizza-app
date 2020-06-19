import styled, { keyframes } from 'styled-components';

export const loading = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const LoaderBlock = styled.div`
  .loader {
    position: relative;
    width: 100%;
    height: 100vh;

    &::before {
      content: '';
      background: url('/static/images/icons/loading.svg');
      display: block;
      width: 108px;
      margin: 0;
      height: 108px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);

      animation: ${loading} 1s linear infinite;
    }
  }
`;

export const BtnLoaderBlock = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  &::before {
    content: '';
    background: url('/static/images/icons/loading.svg');
    background-size: 100%;
    display: block;
    width: 20px;
    margin: 0;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    animation: ${loading} 1s linear infinite;
  }
`;
