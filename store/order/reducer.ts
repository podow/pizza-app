import { handleActions } from 'redux-actions';
import status from '../status';

import { ORDER, FETCH, DONE, FAIL, ONE, ADD } from '../constants';

const initialState = {
  ...status,
  data: null,
  createStatus: null
};

export default handleActions(
  {
    [ORDER + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      data: null
    }),
    [ORDER + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: payload,
      success: true
    }),
    [ORDER + FETCH + FAIL]: state => ({
      ...state,
      ...status,
      failed: true,
      data: null
    }),
    [ORDER + ONE + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      data: null
    }),
    [ORDER + FETCH + ONE + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: payload,
      success: true
    }),
    [ORDER + FETCH + ONE + FAIL]: state => ({
      ...state,
      ...status,
      failed: true,
      data: null
    }),
    [ORDER + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      createStatus: null
    }),
    [ORDER + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      success: true,
      createStatus: payload
    }),
    [ORDER + FETCH + FAIL]: (state, { payload }) => ({
      ...state,
      ...status,
      failed: true,
      createStatus: payload
    })
  },
  initialState
);
