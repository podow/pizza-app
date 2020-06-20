import { createAction } from 'redux-actions';

import { PRODUCTS, FETCH, DONE, FAIL } from '../constants';

export const fetchProducts = createAction(PRODUCTS + FETCH);
export const fetchProductsDone = createAction(PRODUCTS + FETCH + DONE);
export const fetchProductsFail = createAction(PRODUCTS + FETCH + FAIL);
