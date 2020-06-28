import { handleActions } from 'redux-actions';

import { BASKET, ADD, DELETE, FETCH, RESET } from '../constants';

const initialState = {
  data: [],
  totalCost: 0,
  totalItems: 0
};

export default handleActions(
  {
    [BASKET + FETCH]: state => ({
      ...state,
      data: JSON.parse(localStorage.getItem('basket') || '[]'),
      totalCost: localStorage.getItem('basketTotalCost') || 0,
      totalItems: localStorage.getItem('basketTotalItems') || 0
    }),
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

      const totalCost = String(
        Number(state.totalCost) + Number(payload.discountPrice || payload.price)
      );
      const totalItems = String(Number(state.totalItems) + 1);

      localStorage.setItem('basket', JSON.stringify(data));
      localStorage.setItem('basketTotalCost', totalCost);
      localStorage.setItem('basketTotalItems', totalItems);

      return {
        ...state,
        data,
        totalCost,
        totalItems
      };
    },
    [BASKET + DELETE]: (state, { payload: { product, countToRemove } }) => {
      let data = [...state.data];
      const productIndex: number = data.indexOf(product);
      if (productIndex !== -1 && countToRemove !== product.count) {
        const newProduct = {
          ...product,
          count: product.count - countToRemove
        };
        data = data.map(item => {
          if (item.id === newProduct.id) {
            return newProduct;
          }
          return item;
        });
      } else if (productIndex !== -1 && countToRemove === product.count) {
        data = data.filter(item => item.id !== product.id);
      }
      const totalCost = String(
        Number(state.totalCost) -
          Number(product.discountPrice || product.price) * countToRemove
      );
      const totalItems = String(
        Number(state.totalItems) - Number(countToRemove)
      );

      localStorage.setItem('basket', JSON.stringify(data));
      localStorage.setItem('basketTotalCost', totalCost);
      localStorage.setItem('basketTotalItems', totalItems);

      return {
        ...state,
        data,
        totalCost,
        totalItems
      };
    },
    [BASKET + RESET]: state => {
      localStorage.removeItem('basket');
      localStorage.removeItem('basketTotalCost');
      localStorage.removeItem('basketTotalItems');

      return {
        ...state,
        ...initialState
      };
    }
  },
  initialState
);
