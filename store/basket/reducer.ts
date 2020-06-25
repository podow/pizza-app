import { handleActions } from 'redux-actions';

import { BASKET, ADD, DELETE } from '../constants';

const initialState = {
  data: [],
  total: 0
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
        total: state.total + Number(payload.discountPrice || payload.price)
      };
    },
    [BASKET + DELETE]: (state, { payload }) => ({
      ...state,
      data: state.data.filter(item => item.id !== payload.id),
      total: state.total - Number(payload.discountPrice || payload.price)
    })
  },
  initialState
);
