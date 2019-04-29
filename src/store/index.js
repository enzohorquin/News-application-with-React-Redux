import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger(); 
export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger)
); 

export default store;