import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';
import middleware from './middleware';


/*
 * Code
 */
const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const appliedMiddlewares = applyMiddleware(middleware);
const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
