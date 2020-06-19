import { createStore, Store, applyMiddleware } from "redux";
import rootReducer, { ApplicationStates } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationStates> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga)

export default store;
