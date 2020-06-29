import Router from 'next/router';
import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchAuth, fetchAuthDone, fetchAuthFail } from './actions';

import { auth, signUp } from './api';

function* fetchAuthFlow({ payload: { data, type } }) {
  try {
    const response = yield call(type === 'login' ? auth : signUp, data);
    localStorage.setItem(
      'user',
      JSON.stringify({
        phone: response.phone,
        access_token: response.access_token,
        auth_key: response.auth_key
      })
    );
    if (response) {
      if (response.code && response.code != 200) {
        yield put(fetchAuthFail(response.msg));
      } else {
        yield put(fetchAuthDone(response));
        Router.push('/history');
      }
    }
  } catch (err) {
    console.error(err);
    yield put(fetchAuthFail());
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchAuth, fetchAuthFlow);
}
