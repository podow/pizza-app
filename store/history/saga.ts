import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchHistory, fetchHistoryDone, fetchHistoryFail } from './actions';

import { getAll } from './api';

function* fetchHistoryFlow({ payload }) {
  try {
    const response = yield call(getAll, payload);
    if (response) yield put(fetchHistoryDone(response));
  } catch (err) {
    console.error(err);
    yield put(fetchHistoryFail());
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchHistory, fetchHistoryFlow);
}
