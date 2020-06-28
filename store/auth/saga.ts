import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchAuth, fetchAuthDone, fetchAuthFail } from './actions';

import { auth } from './api';

function* fetchAuthFlow({ payload }) {
  try {
    const response = yield call(auth, payload);
    if (response) yield put(fetchAuthDone(response));
  } catch (err) {
    console.error(err);
    yield put(fetchAuthFail());
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchAuth, fetchAuthFlow);
}
