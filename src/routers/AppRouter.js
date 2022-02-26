import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { RegistroAplicacion } from "../components/RegistroAplicacion";
import { UsuariosRegistrados } from "../components/UsuariosRegistrados";
import InicioSesion from "../containers/InicioSesion";
import { Principal } from "../containers/Principal";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/usuariosregistrados" element={<UsuariosRegistrados />} />
                <Route path="/iniciarsesion" element={<InicioSesion />} />
                <Route path="/registroaplicacion" element={<RegistroAplicacion />} />
            </Routes>
        </BrowserRouter>
    );
};
