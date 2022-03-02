import { typesUsuarios } from "../types/types";

const initialState = {
    usuarios: [],
};

export const usuariosReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUsuarios.registrar:
            return {
                usuarios: [action.payload],
            };

        case typesUsuarios.listaru:
            return {
                usuarios: [...action.payload],
            };
        default:
            return state;
    }
};
