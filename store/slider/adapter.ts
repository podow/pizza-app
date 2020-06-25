import { ISlide } from 'interfaces/components/slider';

export const slideAdapter = (slide: ISlide) => ({
  ...slide,
  image: process.env.API_HOST + slide.image
});

export const slidesAdapter = (slides: ISlide[]) =>
  slides.map(slide => slideAdapter(slide));
