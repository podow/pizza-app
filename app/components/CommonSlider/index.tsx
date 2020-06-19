import React, { Component, Fragment } from 'react';
import Glide from '@glidejs/glide';
import { isMobile } from 'react-device-detect';
import { GlideTrack, SliderWrapper, DisabledSliderList } from './style';

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
    this.id = this.uniqueId();
  }

  uniqueId = () =>
    `id_${(new Date().getTime() / Math.random())
      .toString(16)
      .replace('.', '')}`;

  initSlider = () => {
    const {
      children,
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
            <li
              className="glide__slide"
              key={i}
              data-slide={i}
              style={{ width: 365, marginRight: 10 }}
            >
              {el}
            </li>
          ))
        },
        () => {
          this.slider = new Glide(`#${this.id}`, {
            autoplay: false,
            peek: mainPeek ? mainPeek : 100,
            animationDuration: 1000,
            type: sliderType || 'slider',
            animationTimingFunc: 'ease',
            startAt: isMobile ? 0 : 1,
            focusAt: isMobile ? '0' : '1',
            perView: perView || 2,
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
            style={{
              position: 'relative',
              marginRight: fillContent ? '-25px' : 0,
              marginLeft: fillContent ? '-25px' : 0
            }}
            className="disc_slider"
            id={this.id}
          >
            {!withoutArrows && (
              <div className="glide__arrows" data-glide-el="controls">
                <a
                  style={{
                    display: 'block',
                    marginRight: '20px',
                    cursor: 'pointer'
                  }}
                  className="glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                >
                  <img
                    src="/static/images/icons/slider-left-arrow.svg"
                    alt=""
                  />
                </a>
                <a
                  style={{ display: 'block', cursor: 'pointer' }}
                  className="glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                >
                  <img
                    src="/static/images/icons/slider-right-arrow.svg"
                    alt=""
                  />
                </a>
              </div>
            )}
            <GlideTrack>
              <div
                style={{
                  overflow: showHidden ? 'visible' : 'hidden',
                  ...trackAddStyles
                }}
                className="glide__track"
                data-glide-el="track"
              >
                <ul
                  style={{
                    display: 'flex',
                    listStyle: 'none'
                  }}
                  className="glide__slides"
                >
                  {slides}
                </ul>
              </div>
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
