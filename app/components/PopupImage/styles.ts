import styled from 'styled-components';
import { device } from 'app/breakpoints';

export const ThumbnailPopupWrapper = styled.div`
  cursor: pointer;
`;

export const ImagePopupOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  z-index: 999;
  @media ${device.tablet} {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ImagePopupWrapper = styled.div`
  @media ${device.tablet} {
    max-width: 50%;
  }
`;

export const ImagePopupCaption = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
`;
