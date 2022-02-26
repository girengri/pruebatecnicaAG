import { typesRepositorios } from "../types/types";

//Listar
export const listarRepositorioAsincrono = (github) => {
    return async (dispatch) => {
        const resp = await fetch(`https://api.github.com/users/${github}/repos`);
        const data = await resp.json();
        console.log(data);
        dispatch(listarRepositorioSincrono(data));
    };
};

export const listarRepositorioSincrono = (repositorios) => {
    return {
        type: typesRepositorios.listar,
        payload: repositorios,
    };
};
