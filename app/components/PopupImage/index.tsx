import React, { useState } from 'react';
import {
  ThumbnailPopupWrapper,
  ImagePopupOverlay,
  ImagePopupWrapper,
  ImagePopupCaption,
  CloseBtn
} from './styles';
import { ModalPortal } from '../Modal';

interface Props {
  src: string;
  thumbSrc?: string;
  alt?: string;
  caption?: string;
  onShow?: () => any;
  onClose?: () => any;
  showClose?: boolean;
}

const PopupImage: React.FC<Props> = ({
  src,
  thumbSrc,
  alt,
  caption,
  onShow,
  onClose,
  showClose
}) => {
  const [show, setShow] = useState(false);

  const showImage = () => {
    setShow(true);
    if (onShow) {
      onShow();
    }
  };

  const closeImage = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <ThumbnailPopupWrapper onClick={showImage}>
        <img src={thumbSrc || src} alt={alt} />
      </ThumbnailPopupWrapper>
      <ModalPortal>
        {show ? (
          <ImagePopupOverlay onClick={closeImage} onTouchEnd={closeImage}>
            {showClose && (
              <CloseBtn onClick={closeImage}>
                <img src="/static/images/icons/icon-close.svg" alt="" />
              </CloseBtn>
            )}
            <ImagePopupWrapper>
              <img src={src} alt={alt} />
              {caption && <ImagePopupCaption>{caption}</ImagePopupCaption>}
            </ImagePopupWrapper>
          </ImagePopupOverlay>
        ) : null}
      </ModalPortal>
    </>
  );
};

PopupImage.defaultProps = {
  showClose: true
};

export default PopupImage;
