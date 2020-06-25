import axios from 'helpers/axios.config';

export const getSlides = () =>
  axios.get('/slider').then(({ data }) => data.data);
