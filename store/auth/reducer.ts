import { handleActions } from 'redux-actions';
import status from '../status';

import { AUTH, FETCH, DONE, FAIL } from '../constants';

const initialState = {
  ...status,
  data: null,
  isAuthenticated: false
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
      data: null
    }),
    [AUTH + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: payload,
      success: true,
      isAuthenticated: true
    }),
    [AUTH + FETCH + FAIL]: state => ({
      ...state,
      ...status,
      failed: true,
      data: null,
      isAuthenticated: false
    })
  },
  initialState
);
