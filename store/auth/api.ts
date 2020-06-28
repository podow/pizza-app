import axios from 'helpers/axios.config';

export const auth = data =>
  axios.post('/auth', data).then(({ data }) => data.data);
