import * as globalAxios from 'axios';

export const auth = data =>
  globalAxios.default.post('/auth', data).then(({ data }) => data.data);
