import axios from 'helpers/axios.config';

export const getAll = () => axios.get('/history').then(({ data }) => data.data);
