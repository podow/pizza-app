import { createAction } from 'redux-actions';

import { ORDER, FETCH, DONE, FAIL, ONE, ADD } from '../constants';

export const fetchOrders = createAction(ORDER + FETCH);
export const fetchOrdersDone = createAction(ORDER + DONE);
export const fetchOrdersFail = createAction(ORDER + FAIL);

export const fetchOrder = createAction(ORDER + FETCH + ONE);
export const fetchOrderDone = createAction(ORDER + FETCH + ONE + DONE);
export const fetchOrderFail = createAction(ORDER + FETCH + ONE + FAIL);

export const createOrder = createAction(ORDER + ADD + FETCH);
export const createOrderDone = createAction(ORDER + ADD + FETCH + DONE);
export const createOrderFail = createAction(ORDER + ADD + FETCH + FAIL);
