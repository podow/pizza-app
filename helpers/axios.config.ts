import { Store } from 'redux';
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

let store: null | Store = null;

export const setHelpersStore = newStore => {
  store = newStore;
};

const axiosConfig: AxiosInstance & AxiosRequestConfig = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    // Language: 'ru',
    accept: 'application/json',
    // authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
});

axiosConfig.interceptors.request.use(request => {
  // store && store.dispatch(incrementApi());
  const requestConfig = { ...request };
  return requestConfig;
});

axiosConfig.interceptors.response.use(
  config => {
    // store && store.dispatch(decrementApi());
    return config;
  },
  error => {
    // store && store.dispatch(decrementApi());
    throw error;
  }
);

export default axiosConfig;
