// Create final store using all reducers and applying middleware
import { createBrowserHistory } from 'history';
// Redux utility functions
// import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
// Import all reducers
import * as reducers from 'reducers';
// import sagas from '../sagas/';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
export const history = createBrowserHistory();
const reducer = combineReducers({ ...reducers });

// const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(history);

const store = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
  // applyMiddleware(sagaMiddleware, routingMiddleware),
  applyMiddleware(routingMiddleware),
  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(connectRouter(history)(reducer));

// sagaMiddleware.run(sagas);

export default store;
