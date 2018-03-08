
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import promise from 'redux-promise';
const middlewarePromise=applyMiddleware(promise);
const store = createStore(reducers, applyMiddleware(logger),middlewarePromise);
 
export default store;
