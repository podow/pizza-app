import { handleActions } from 'redux-actions';

import { BASKET, ADD, DELETE } from '../constants';

const initialState = {
  data: [],
  total: 0
};

export default handleActions(
  {
    [BASKET + ADD]: (state, { payload }) => ({
      ...state,
      data: [...state.data, payload],
      totalCost: state.total + payload.price
    }),
    [BASKET + DELETE]: (state, { payload }) => ({
      ...state,
      data: state.data.filter(item => item.id !== payload.id),
      totalCost: state.total - payload.price
    })
  },
  initialState
);
