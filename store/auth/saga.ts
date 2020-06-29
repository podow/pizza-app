import Router from 'next/router';
import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchAuth, fetchAuthDone, fetchAuthFail } from './actions';

import { auth, signUp } from './api';

function* fetchAuthFlow({ payload: { data, type } }) {
  try {
    const response = yield call(type === 'login' ? auth : signUp, data);

    if (response && response.msg) {
      yield put(fetchAuthFail(response.msg));
    } else {
      localStorage.setItem(
        'user',
        JSON.stringify({
          phone: type === 'register' ? response.data.phone : response.phone,
          access_token:
            type === 'register'
              ? response.data.access_token
              : response.access_token,
          auth_key:
            type === 'register' ? response.data.auth_key : response.auth_key
        })
      );
      yield put(fetchAuthDone(response));
      Router.push('/history');
    }
  } catch (err) {
    console.error(err);
    yield put(fetchAuthFail(err.message));
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchAuth, fetchAuthFlow);
}
