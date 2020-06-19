import styled from 'styled-components';
import { device } from 'app/breakpoints';
import { animatedArrows } from 'app/globalStyle';

export const SliderWrapper = styled.div`
  .glide__arrows {
    position: absolute;
    top: -60px;
    right: 40px;
    left: auto;
    display: flex;

    @media ${device.laptop} {
      right: calc((100% - 1070px) / 2);
    }

    @media ${device.laptopL} {
      right: calc((100% - 1170px) / 2);
    }

    ${animatedArrows}
  }
  .glide__arrow--left,
  .glide__arrow--right {
    padding: 0 !important;
  }

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

export const GlideTrack = styled.div`
  p {
    width: 60%;
  }
`;

export const SliderItem = styled.div`
  @media ${device.mobileS} {
    margin-inline-start: 25px;
    margin-inline-end: 25px;
  }
  @media ${device.tablet} {
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
  div {
    h3 {
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }
`;

export const DisabledSliderList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  @media ${device.tablet} {
    flex-wrap: unset;
  }
`;
