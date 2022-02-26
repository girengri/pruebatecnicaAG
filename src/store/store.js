import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerRepositorios } from "../reducers/reducerRepositorios";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    repositorio: reducerRepositorios,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
