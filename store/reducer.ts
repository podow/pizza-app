import { combineReducers } from 'redux';

import common from './common/reducer';
import slider from './slider/reducer';
import products from './products/reducer';
import basket from './basket/reducer';
import order from './order/reducer';
import auth from './auth/reducer';

export default combineReducers({
  common,
  slider,
  products,
  basket,
  order,
  auth
});
