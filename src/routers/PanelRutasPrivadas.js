import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UsuariosRegistrados } from "../components/UsuariosRegistrados";
import { Principal } from "../containers/Principal";

export const PanelRutasPrivadas = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/usuariosregistrados" element={<UsuariosRegistrados />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};
