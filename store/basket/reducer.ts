import { handleActions } from 'redux-actions';

import { BASKET, ADD, DELETE } from '../constants';

const initialState = {
  data: []
};

export default handleActions(
  {
    [BASKET + ADD]: (state, { payload }) => ({
      ...state,
      data: [...state.data, payload]
    }),
    [BASKET + DELETE]: (state, { payload }) => ({
      ...state,
      data: state.data.filter(item => item.id !== payload.id)
    })
  },
  initialState
);
