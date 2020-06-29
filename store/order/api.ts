import * as globalAxios from 'axios';
import axios from 'helpers/axios.config';

export const getAll = () =>
  axios.get('/order/index').then(({ data }) => data.data);

export const getById = id =>
  axios.get(`/order/view/${id}`).then(({ data }) => data.data);

export const create = data =>
  globalAxios.default.post('/order', data).then(({ data }) => data.data);
