import { typesRepositorios } from "../types/types";

const initialState = {
    repositorios: [],
};

export const reducerRepositorios = (state = initialState, action) => {
    switch (action.type) {
        case typesRepositorios.listar:
            return {
                repositorios: action.payload,
            };

        default:
            return state;
    }
};
