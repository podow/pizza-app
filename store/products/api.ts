import axios from 'helpers/axios.config';

export const getAll = () => axios.get('/products').then(({ data }) => data);

export const getOneById = id =>
  axios.get(`/products/${id}`).then(({ data }) => data);
