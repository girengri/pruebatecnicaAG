import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioSesion from "../containers/InicioSesion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { PanelRutasPrivadas } from "./PanelRutasPrivadas";
import { RegistroAplicacion } from "../components/RegistroAplicacion";

export const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/registroaplicacion"
                    element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <RegistroAplicacion />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/iniciarsesion"
                    element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <InicioSesion />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuthenticated={isLoggedIn}>
                            <PanelRutasPrivadas />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
