import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchSlides, fetchSlidesDone, fetchSlidesFail } from './actions';

import { getSlides } from './api';

function* fetchSlidesFlow() {
  try {
    const response = yield call(getSlides);
    if (response) yield put(fetchSlidesDone(response));
  } catch (err) {
    console.error(err);
    yield put(fetchSlidesFail());
  }
}

export default function* projectFlatRootSaga() {
  yield takeLatest(fetchSlides, fetchSlidesFlow);
}
