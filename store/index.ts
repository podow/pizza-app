import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware, Task } from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

import { setHelpersStore } from '../helpers/axios.config';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}): Store {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const store: Store & { sagaTask: Task } = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  setHelpersStore(store);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
