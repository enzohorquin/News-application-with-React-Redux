import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import  rootSaga  from '../sagas/index';

const logger = createLogger(); 
const saga = createSagaMiddleware(); 
export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga,logger)
); 

saga.run(rootSaga); 

export default store;