import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { logoutAsincrono } from "../actions/actionLogin";

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAsincrono());
        navigate("/iniciarsesion");
    };
    return (
        <nav className={styles.contenedorNav}>
            <img
                src="https://res.cloudinary.com/girengri/image/upload/v1645924148/icons8-octocat-50_rqfhob.png"
                alt="logo"
            />

            <div className={styles.contenedorLinks}>
                <Link className={styles.links} to="/">
                    Principal
                </Link>
                <Link className={styles.links} to="/usuariosregistrados">
                    Usuarios Registrados
                </Link>

                <span className={styles.cerrarsesion} onClick={() => handleLogout()}>
                    Cerrar sesion
                </span>
            </div>
        </nav>
    );
};
