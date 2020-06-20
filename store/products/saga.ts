import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchProducts, fetchProductsDone, fetchProductsFail } from './actions';

import { getAll } from './api';

function* fetchProductsFlow() {
  try {
    const response = yield call(getAll);
    if (response) yield put(fetchProductsDone(response));
  } catch (err) {
    console.error(err);
    yield put(fetchProductsFail());
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchProducts, fetchProductsFlow);
}
