import { combineReducers } from 'redux';

import common from './common/reducer';
import slider from './slider/reducer';
import products from './products/reducer';
import basket from './basket/reducer';

export default combineReducers({
  common,
  slider,
  products,
  basket
});
