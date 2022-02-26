import React from "react";
import { useFormik } from "formik";
import Cookies from "universal-cookie";

export const AgregarUsuarios = () => {
    const cookie = new Cookies();

    const formik = useFormik({
        initialValues: {
            cedula: "",
            nombre: "",
            fecha: "",
            correo: "",
            github: "",
        },
        onSubmit: (data) => {
            cookie.set("cedula", `${data.cedula}`, { path: "/" });
            cookie.set("nombre", `${data.nombre}`, { path: "/" });
            cookie.set("fecha", `${data.fecha}`, { path: "/" });
            cookie.set("correo", `${data.correo}`, { path: "/" });
            cookie.set("github", `${data.github}`, { path: "/" });
            window.location.href = "./";
            document.getElementById("myform").reset();
        },
    });
    return (
        <div>
            <h3 className="text-center">Agregar Candidato</h3>
            <form id="myform" className="form-group" onSubmit={formik.handleSubmit}>
                <input
                    id="inputCedula"
                    type="number"
                    className="form-control mt-2"
                    placeholder="C.C"
                    name="cedula"
                    required
                    autoComplete="off"
                    onChange={formik.handleChange}
                />

                <input
                    id="inputNombre"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Nombre(s) y Apellido(s)"
                    name="nombre"
                    autoComplete="off"
                    onChange={formik.handleChange}
                />

                <input
                    id="inputFecha"
                    type="date"
                    className="form-control mt-2"
                    placeholder="Fecha de Nacimiento"
                    name="fecha"
                    autoComplete="off"
                    onChange={formik.handleChange}
                />

                <input
                    id="inputCorreo"
                    type="email"
                    className="form-control mt-2"
                    placeholder="Correo electronico"
                    name="correo"
                    autoComplete="off"
                    onChange={formik.handleChange}
                />

                <input
                    id="inputGithub"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Nombre de usuario en Github"
                    name="github"
                    required
                    autoComplete="off"
                    onChange={formik.handleChange}
                />

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button type="submit" className="btn btn-dark">
                        Registrar Usuario
                    </button>
                </div>
            </form>
        </div>
    );
};
