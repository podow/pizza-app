import styled from 'styled-components';
import { device } from 'app/breakpoints';
import { animatedArrows } from 'app/globalStyle';

export const SliderWrapper = styled.div<{ fillContent?: boolean }>`
  height: 100%;
  position: relative;
  margin-left: ${props => (props.fillContent ? '-25px' : '0')};
  margin-right: ${props => (props.fillContent ? '-25px' : '0')};

  .glide__arrows_bottom {
    top: -65px;
    left: 200px;
    display: flex;
    justify-content: flex-end;

    ${animatedArrows}

    @media ${device.mobileS} {
      padding: 0 25px;
    }
  }
`;

export const GlideArrows = styled.div`
  position: absolute;
  top: 50%;
  z-index: 9;
  width: 100%;
  left: 0;
  right: 0;
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  ${animatedArrows}
`;

export const GlideArrow = styled.a`
  position: absolute;
  display: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &.left {
    left: 15px;
  }

  &.right {
    right: 15px;
  }

  img {
    height: 20px;
  }
`;

export const GlideTrack = styled.div<{ showHidden?: boolean }>`
  height: 100%;
  overflow: ${props => (props.showHidden ? 'visible' : 'hidden')};

  p {
    width: 60%;
  }
`;

export const GlideSlides = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
`;

export const GlideSlide = styled.li`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
`;

export const DisabledSliderList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  @media ${device.tablet} {
    flex-wrap: unset;
  }
`;
