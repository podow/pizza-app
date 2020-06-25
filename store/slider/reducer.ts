import { handleActions } from 'redux-actions';
import status from '../status';

import { SLIDER, FETCH, DONE, FAIL } from '../constants';
import { slidesAdapter } from './adapter';

const initialState = {
  ...status,
  data: null
};

export default handleActions(
  {
    [SLIDER + FETCH]: state => ({
      ...state,
      ...status,
      loading: true,
      data: null
    }),
    [SLIDER + FETCH + DONE]: (state, { payload }) => ({
      ...state,
      ...status,
      data: slidesAdapter(payload),
      success: true
    }),
    [SLIDER + FETCH + FAIL]: state => ({
      ...state,
      ...status,
      failed: true,
      data: null
    })
  },
  initialState
);
