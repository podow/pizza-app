import * as globalAxios from 'axios';

export const getAll = () =>
  globalAxios.default
    .get('/get-history', {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('token')
      }
    })
    .then(({ data }) => data.data);
