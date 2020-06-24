import { combineReducers } from 'redux';

import products from './products/reducer';
import common from './common/reducer';
import basket from './basket/reducer';

export default combineReducers({
  common,
  products,
  basket
});
