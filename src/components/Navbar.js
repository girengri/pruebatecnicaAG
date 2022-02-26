import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Principal</Link>
            <Link to="/usuariosregistrados">Usuarios Registrados</Link>
        </nav>
    );
};
