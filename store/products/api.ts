import axios from 'helpers/axios.config';

export const getAll = () => axios.get('/good').then(({ data }) => data.data);
