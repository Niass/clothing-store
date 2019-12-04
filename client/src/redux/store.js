import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga  from './root-saga'
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development' && !middlewares.includes(logger)) {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default { store, persistor };
