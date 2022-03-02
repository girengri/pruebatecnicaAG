import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { typesUsuarios } from "../types/types";

//Crear (METODO POST)
export const registroUsuarioAsincrono = (usuario) => {
    // console.log(usuario);
    return (dispatch) => {
        addDoc(collection(dataBase, "pruebasalida"), usuario)
            .then((resp) => {
                dispatch(registroUsuarioSincrono(usuario));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const registroUsuarioSincrono = (usuario) => {
    return {
        type: typesUsuarios.registrar,
        payload: usuario,
    };
};

//Leer (METODO GET)
export const listarUsuariosAsincrono = () => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "pruebasalida");
        const consulta = query(coleccion, orderBy("fechar", "desc"));
        const datos = await getDocs(consulta);

        const usu = [];
        datos.forEach((doc) => {
            usu.push({
                ...doc.data(),
            });
        });
        dispatch(listarUsuariosSincrono(usu));
    };
};

export const listarUsuariosSincrono = (usuarios) => {
    return {
        type: typesUsuarios.listaru,
        payload: usuarios,
    };
};

//Eliminar (METODO DELETE)
export const eliminarUsuarioASincrono = (cedula) => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "pruebasalida");
        const consulta = query(coleccion, where("cedula", "==", cedula));
        const datos = await getDocs(consulta);
        datos.forEach((docu) => {
            deleteDoc(doc(dataBase, "pruebasalida", docu.id));
        });
        dispatch(eliminarUsuarioSincrono(cedula));
        dispatch(listarUsuariosAsincrono());
    };
};

export const eliminarUsuarioSincrono = (cedula) => {
    return {
        type: typesUsuarios.eliminar,
        payload: cedula,
    };
};

//Actualizar (METODO PUT)
export const actualizarUsuarioASincrono = (usuario) => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "pruebasalida");
        const consulta = query(coleccion, where("cedula", "==", usuario.cedula));
        const datos = await getDocs(consulta);
        datos.forEach((docu) => {
            const nuevoscampos = {
                nombre: usuario.nombre,
                correo: usuario.correo,
                github: usuario.github,
            };
            updateDoc(doc(dataBase, "pruebasalida", docu.id), nuevoscampos);
        });
        dispatch(listarUsuariosAsincrono());
    };
};
