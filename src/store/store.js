import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/reducerLogin";
import { registerReducer } from "../reducers/reducerRegister";
import { reducerRepositorios } from "../reducers/reducerRepositorios";
import { usuariosReducer } from "../reducers/reducerUsuarios";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    repositorio: reducerRepositorios,
    usuario: usuariosReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
