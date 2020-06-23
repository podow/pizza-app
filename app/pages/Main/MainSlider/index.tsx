import React, { Fragment } from 'react';

import {
  ImageSliderWrapper,
  TopSlide,
  ImageSliderTitleWrapper,
  ImageSliderTitle
} from './styles';

import CommonSlider from 'app/components/CommonSlider';

const MainSlider = () => {
  const slides = [
    {
      id: 1,
      photo:
        'https://cdn.dodostatic.net/static/Img/Banners/g_1591703510_348d606bc795452c80df0d0ea2860970.jpeg',
      title: 'test',
      description: 'test'
    },
    {
      id: 2,
      photo:
        'https://cdn.dodostatic.net/static/Img/Banners/g_1591703510_348d606bc795452c80df0d0ea2860970.jpeg',
      title: 'test 2',
      description: 'test 2'
    }
  ];

  return (
    <ImageSliderWrapper>
      <CommonSlider sliderType="carousel" perView={1}>
        {slides &&
          slides.map(el => (
            <Fragment key={el.id}>
              <TopSlide bgImage={el.photo}>
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
