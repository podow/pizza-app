import { handleActions } from 'redux-actions';

import { BASKET, ADD, DELETE } from '../constants';

const initialState = {
  data: [],
  totalCost: 0,
  totalItems: 0
};

export default handleActions(
  {
    [BASKET + ADD]: (state, { payload }) => {
      const data = [...state.data];
      let productAlreadyInBasket = false;

      state.data.forEach(product => {
        if (product.id === payload.id) {
          productAlreadyInBasket = true;
          product.count = product.count + 1;
        }
      });

      if (!productAlreadyInBasket) {
        data.push(payload);
      }

      return {
        ...state,
        data,
        totalCost:
          state.totalCost + Number(payload.discountPrice || payload.price),
        totalItems: state.totalItems + 1
      };
    },
    [BASKET + DELETE]: (state, { payload }) => ({
      ...state,
      data: state.data.filter(item => item.id !== payload.id),
      totalCost:
        state.totalCost - Number(payload.discountPrice || payload.price),
      totalItems: state.totalItems - payload.count
    })
  },
  initialState
);
