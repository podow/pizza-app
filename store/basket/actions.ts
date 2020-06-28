import { createAction } from 'redux-actions';

import { BASKET, ADD, DELETE, FETCH, RESET } from '../constants';

export const addToBasketAction = createAction(BASKET + ADD);
export const removeFromBasketAction = createAction(BASKET + DELETE);
export const fetchBasketAction = createAction(BASKET + FETCH);
export const resetBasketAction = createAction(BASKET + RESET);
