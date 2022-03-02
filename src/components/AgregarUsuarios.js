import React from "react";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { registroUsuarioAsincrono } from "../actions/actionUsuarios";
import styles from "../styles/agregarusuarios.module.css";
import { useForm } from "../hooks/useForm";
import { listarRepositorioAsincrono } from "../actions/actionRepositorios";

export const AgregarUsuarios = () => {
    const cookie = new Cookies();
    const dispatch = useDispatch();

    const [values, handleInputChange, , reset] = useForm({
        cedula: "",
        nombre: "",
        fecha: "",
        correo: "",
        github: "",
    });

    const { cedula, nombre, fecha, correo, github } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        cookie.set("cedula", `${values.cedula}`, { path: "/" });
        cookie.set("nombre", `${values.nombre}`, { path: "/" });
        cookie.set("fecha", `${values.fecha}`, { path: "/" });
        cookie.set("correo", `${values.correo}`, { path: "/" });
        cookie.set("github", `${values.github}`, { path: "/" });
        const data = {
            cedula,
            nombre,
            correo,
            github,
            fechar: new Date(),
        };
        dispatch(registroUsuarioAsincrono(data));
        dispatch(listarRepositorioAsincrono(data.github));
        reset();
    };
    return (
        <div>
            <h3 className="text-center">Agregar Candidato</h3>
            <form id="myform" className="form-group" onSubmit={handleSubmit}>
                <div>
                    <input
                        id="inputCedula"
                        className="form-control mt-2"
                        placeholder="C.C"
                        name="cedula"
                        autoComplete="off"
                        type="number"
                        onChange={handleInputChange}
                        value={cedula}
                        required
                    />
                </div>

                <input
                    id="inputNombre"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Nombre(s) y Apellido(s)"
                    name="nombre"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={nombre}
                    required
                />

                <label className={styles.labelfecha} htmlFor="inputFecha">
                    Fecha de Nacimiento
                </label>
                <input
                    id="inputFecha"
                    type="date"
                    className="form-control mt-2"
                    placeholder="Fecha de Nacimiento"
                    name="fecha"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={fecha}
                    required
                />

                <input
                    id="inputCorreo"
                    type="email"
                    className="form-control mt-2"
                    placeholder="Correo electronico"
                    name="correo"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={correo}
                    required
                />

                <div>
                    <input
                        id="inputGithub"
                        type="text"
                        className="form-control mt-2"
                        placeholder="Nombre de usuario en Github"
                        name="github"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={github}
                        required
                    />
                </div>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button type="submit" className="btn btn-primary">
                        Registrar Usuario
                    </button>
                </div>
            </form>
        </div>
    );
};
