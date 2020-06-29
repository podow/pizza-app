import { handleActions } from 'redux-actions';
import status from '../status';

import { AUTH, FETCH, DONE, FAIL, LOGOUT } from '../constants';

const initialState = {
  ...status,
  data: {},
  isAuthenticated: false,
  errorMessage: null
};

export default handleActions(
  {
    [AUTH]: state => {
      const data = JSON.parse(localStorage.getItem('user') || '{}');
      return {
        ...state,
        ...status,
        data,
        isAuthenticated: Object.keys(data).length !== 0
      };
    },
    [AUTH + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      data: {}
    }),
    [AUTH + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: payload,
      success: true,
      isAuthenticated: true,
      errorMessage: null
    }),
    [AUTH + FETCH + FAIL]: (state, { payload }) => ({
      ...state,
      ...status,
      failed: true,
      data: null,
      isAuthenticated: false,
      errorMessage: payload
    }),
    [LOGOUT]: () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      return {
        ...initialState
      };
    }
  },
  initialState
);
