import styled from 'styled-components';
import { device } from 'app/breakpoints';

export const ImageSliderWrapper = styled.section`
  height: 400px;
`;

export const TopSlide = styled.figure<{ bgImage: string }>`
  background: url(${props => props.bgImage}) no-repeat;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: 0 50%;
  cursor: pointer;

  @media (max-width: 425px) {
    margin: 0 15px;
    border-radius: 8px;
    background-position: center;
  }
`;

export const ImageSliderTitleWrapper = styled.div`
  position: absolute;
  z-index: 2;
  color: #ffffff;
  bottom: 25%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  background-color: transparent;
  border-radius: 8px;
  font-family: 'Rubik-Medium', sans-serif;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #be6c2f;
    opacity: 0.9;
    z-index: -1;
    border-radius: 8px;
    @media (max-width: 425px) {
      height: 100%;
      opacity: 1;
    }
  }
  @media (max-width: 425px) {
    width: 95%;
    bottom: 30px;
    left: 10px;
    height: auto;
    div {
      padding: 20px;
    }
  }
  @media ${device.tablet} {
    left: calc((100% - 700px) / 2);
    height: auto;
    max-width: 520px;
  }
  @media ${device.laptop} {
    left: 25px;
    width: 520px;
    padding: 20px 30px 20px;
  }
  @media ${device.laptopL} {
    left: calc((100% - 1170px) / 2);
  }
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    left: calc((100% - 1070px) / 2);
  }
`;

export const ImageSliderTitle = styled.h1`
  padding-bottom: 10px;
`;
