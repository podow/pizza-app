import { handleActions } from 'redux-actions';
import status from '../status';

import { ORDER, FETCH, DONE, FAIL, ONE, ADD } from '../constants';

const initialState = {
  fetch: {
    ...status,
    data: null
  },
  create: {
    ...status,
    data: null
  }
};

export default handleActions(
  {
    [ORDER + FETCH]: state => ({
      ...state,
      fetch: {
        ...status,
        loading: true,
        data: null
      }
    }),
    [ORDER + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      fetch: {
        ...status,
        data: payload,
        success: true
      }
    }),
    [ORDER + FETCH + FAIL]: state => ({
      ...state,
      fetch: {
        ...status,
        failed: true,
        data: null
      }
    }),
    [ORDER + ONE + FETCH]: state => ({
      ...state,
      fetch: {
        ...status,
        loading: true,
        data: null
      }
    }),
    [ORDER + FETCH + ONE + DONE]: (state, { payload }) => ({
      ...state,
      fetch: {
        ...status,
        data: payload,
        success: true
      }
    }),
    [ORDER + FETCH + ONE + FAIL]: state => ({
      ...state,
      fetch: {
        ...status,
        failed: true,
        data: null
      }
    }),
    [ORDER + ADD + FETCH]: state => ({
      ...state,
      create: {
        ...status,
        loading: true,
        createStatus: null
      }
    }),
    [ORDER + ADD + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      create: {
        ...status,
        success: true,
        createStatus: payload
      }
    }),
    [ORDER + ADD + FETCH + FAIL]: (state, { payload }) => ({
      ...state,
      create: {
        ...status,
        failed: true,
        createStatus: payload
      }
    })
  },
  initialState
);
