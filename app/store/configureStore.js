import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

const middleware = applyMiddleware(thunkMiddleware);

export default function configureStore() {

  let store = createStore(reducers, middleware);

  return store;
}