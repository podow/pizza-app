import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  ImageSliderWrapper,
  TopSlide,
  ImageSliderTitleWrapper,
  ImageSliderTitle
} from './styles';

import CommonSlider from 'app/components/CommonSlider';

const MainSlider = () => {
  const slides = useSelector(state => state.slider.data);

  return (
    <ImageSliderWrapper>
      <CommonSlider sliderType="carousel" perView={1}>
        {slides &&
          slides.map(el => (
            <Fragment key={el.id}>
              <TopSlide bgImage={el.image}>
                {el.title && el.description && (
                  <ImageSliderTitleWrapper>
                    <div>
                      <ImageSliderTitle>{el.title}</ImageSliderTitle>
                      <p>{el.description}</p>
                    </div>
                  </ImageSliderTitleWrapper>
                )}
              </TopSlide>
            </Fragment>
          ))}
      </CommonSlider>
    </ImageSliderWrapper>
  );
};

export default MainSlider;
