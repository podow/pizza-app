import { combineReducers } from 'redux';

import products from './products/reducer';
import common from './common/reducer';

export default combineReducers({
  common,
  products
});
