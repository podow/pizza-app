import { handleActions } from 'redux-actions';
import status from '../status';

import { HISTORY, FETCH, DONE, FAIL } from '../constants';

const initialState = {
  ...status,
  data: []
};

export default handleActions(
  {
    [HISTORY + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      data: null
    }),
    [HISTORY + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: payload,
      success: true
    }),
    [HISTORY + FETCH + FAIL]: state => ({
      ...state,
      ...status,
      failed: true,
      data: null
    })
  },
  initialState
);
