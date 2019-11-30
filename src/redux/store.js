import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development' && !middlewares.includes(logger)) {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
