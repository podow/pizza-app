import React, { Component, Fragment } from 'react';
import Glide from '@glidejs/glide';

import {
  GlideArrows,
  GlideArrow,
  GlideTrack,
  GlideSlides,
  GlideSlide,
  SliderWrapper,
  DisabledSliderList
} from './style';

import { getUniqueStr } from 'helpers';

import { IProps, IState } from 'interfaces/components/sliders';
import { Container } from '../container';

class CommonSlider extends Component<IProps, IState> {
  slider;
  id;
  constructor(props: IProps) {
    super(props);
    this.slider = null;
    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    this.initSlider();
    this.id = `id_${getUniqueStr()}`;
  }

  initSlider = () => {
    const {
      children,
      gap,
      peek,
      perView,
      mainPeek,
      sliderType,
      disable
    } = this.props;

    if (children && Array.isArray(children) && children.length) {
      this.setState(
        {
          slides: children.map((el, i) => (
            <GlideSlide key={i} data-slide={i}>
              {el}
            </GlideSlide>
          ))
        },
        () => {
          this.slider = new Glide(`#${this.id}`, {
            autoplay: false,
            peek: mainPeek ? mainPeek : 100,
            animationDuration: 1000,
            type: sliderType || 'slider',
            animationTimingFunc: 'ease',
            startAt: 0,
            focusAt: '0',
            perView: perView || 2,
            gap: gap || 30,
            breakpoints: {
              550: {
                perView: 1,
                peek: {
                  before: peek ? peek : 0,
                  after: peek ? peek : 0
                }
              }
            }
          });
          if (!disable) {
            this.slider.mount();
          }
        }
      );
    }
  };

  render() {
    const { slides } = this.state;
    const {
      withoutArrows,
      fillContent,
      showHidden,
      bottomArrows,
      trackAddStyles,
      disable
    } = this.props;
    return (
      <Fragment>
        {!disable ? (
          <SliderWrapper
            id={this.id}
            className="disc_slider"
            fillContent={fillContent}
          >
            {!withoutArrows && (
              <GlideArrows data-glide-el="controls">
                <GlideArrow className="left" data-glide-dir="<">
                  <img
                    src="/static/images/icons/slider-left-arrow.svg"
                    alt=""
                  />
                </GlideArrow>
                <GlideArrow className="right" data-glide-dir=">">
                  <img
                    src="/static/images/icons/slider-right-arrow.svg"
                    alt=""
                  />
                </GlideArrow>
              </GlideArrows>
            )}
            <GlideTrack
              showHidden={showHidden}
              style={trackAddStyles}
              data-glide-el="track"
            >
              <GlideSlides>{slides}</GlideSlides>
            </GlideTrack>

            {bottomArrows && (
              <div className="glide__arrows_bottom" data-glide-el="controls">
                <a
                  style={{
                    display: 'inline',
                    marginRight: '30px',
                    cursor: 'pointer'
                  }}
                  className="glide__arrows_bottom glide__arrow--left"
                  data-glide-dir="<"
                >
                  <img
                    src="/static/images/icons/slider-left-arrow.svg"
                    alt=""
                  />
                </a>
                <a
                  style={{ display: 'inline', cursor: 'pointer' }}
                  className="glide__arrows_bottom glide__arrow--right"
                  data-glide-dir=">"
                >
                  <img
                    src="/static/images/icons/slider-right-arrow.svg"
                    alt=""
                  />
                </a>
              </div>
            )}
          </SliderWrapper>
        ) : (
          <Container>
            <div>
              <DisabledSliderList>{slides}</DisabledSliderList>
            </div>
          </Container>
        )}
      </Fragment>
    );
  }
}

export default CommonSlider;
