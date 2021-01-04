import { applyMiddleware, createStore } from "redux";
import album from "./modules/album/reducer";
import createSagaMiddleware from "redux-saga";

import rootreducer from "./modules/rootreducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootreducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
