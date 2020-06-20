import { handleActions } from 'redux-actions';
import status from '../status';

import { PRODUCTS, FETCH, DONE, FAIL } from '../constants';
import { productsAdapter } from './adapter';

const initialState = {
  ...status,
  data: null
};

export default handleActions(
  {
    [PRODUCTS + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      data: null
    }),
    [PRODUCTS + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: productsAdapter(payload),
      success: true
    }),
    [PRODUCTS + FETCH + FAIL]: state => ({
      ...state,
      ...status,
      failed: true,
      data: null
    })
  },
  initialState
);
