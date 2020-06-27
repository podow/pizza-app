import { takeLatest, call, put } from 'redux-saga/effects';

import {
  fetchOrders,
  fetchOrdersDone,
  fetchOrdersFail,
  fetchOrder,
  fetchOrderDone,
  fetchOrderFail,
  createOrder,
  createOrderDone,
  createOrderFail
} from './actions';

import { getAll, getById, create } from './api';

function* fetchProductsFlow() {
  try {
    const response = yield call(getAll);
    if (response) yield put(fetchOrdersDone(response));
  } catch (err) {
    console.error(err);
    yield put(fetchOrdersFail());
  }
}

function* fetchOneProductFlow({ payload }) {
  try {
    const response = yield call(getById, payload);
    if (response) yield put(fetchOrderDone(response));
  } catch (err) {
    console.error(err);
    yield put(fetchOrderFail());
  }
}

function* createOrderFlow({ payload }) {
  try {
    const response = yield call(create, payload);
    if (response) yield put(createOrderDone(response));
  } catch (err) {
    console.error(err);
    yield put(createOrderFail(err));
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchOrders, fetchProductsFlow);
  yield takeLatest(fetchOrder, fetchOneProductFlow);
  yield takeLatest(createOrder, createOrderFlow);
}
