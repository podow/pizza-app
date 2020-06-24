import { createAction } from 'redux-actions';

import { BASKET, ADD, DELETE } from '../constants';

export const addToBasketAction = createAction(BASKET + ADD);
export const removeFromBasketAction = createAction(BASKET + DELETE);
