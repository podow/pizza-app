import axios from 'helpers/axios.config';

export const getAll = userId =>
  axios.get(`/history/${userId}`).then(({ data }) => data.data);
