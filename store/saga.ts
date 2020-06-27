import { all } from 'redux-saga/effects';

import products from './products/saga';
import orders from './order/saga';

export default function* rootSaga() {
  yield all([products(), orders()]);
}
