import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import {persistStore} from "redux-persist"; // This allows the browser to cache data
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
