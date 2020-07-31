import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
