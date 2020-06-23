import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  perView?: number;
  withoutArrows?: boolean;
  fillContent?: boolean;
  showHidden?: boolean;
  bottomArrows?: boolean;
  mainPeek?: number;
  peek?: number;
  gap?: number;
  trackAddStyles?: object;
  sliderType?: string;
  disable?: boolean;
}

export interface IState {
  slides: JSX.Element[];
  previewIndex?: number;
  currentSlide?: number;
}
