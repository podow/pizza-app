import { all } from 'redux-saga/effects';

import products from './products/saga';
import orders from './order/saga';
import auth from './auth/saga';
import history from './history/saga';

export default function* rootSaga() {
  yield all([products(), orders(), auth(), history()]);
}
