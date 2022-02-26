import React from "react";
import { AgregarUsuarios } from "../components/AgregarUsuarios";
import { ListaRepositorios } from "../components/ListaRepositorios";
import Cookies from "universal-cookie";

export const Principal = () => {
    const cookie = new Cookies();
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <h6>Cedula del Candidato : {cookie.get("cedula")}</h6>
                    <h6>Nombre del Candidato : {cookie.get("nombre")}</h6>
                    <h6>Fecha de Nacimiento : {cookie.get("fecha")}</h6>
                    <h6>Correo del Candidato : {cookie.get("correo")}</h6>
                    <h6>Nombre de Usuario en Github : {cookie.get("github")}</h6>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3">
                    <h2>
                        <AgregarUsuarios />
                    </h2>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12">
                    <h2>Repositorios Github</h2> <hr />
                    <ListaRepositorios />
                </div>
            </div>
        </div>
    );
};
