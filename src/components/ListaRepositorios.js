import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { listarRepositorioAsincrono } from "../actions/actionRepositorios";
import { Column, TableWithBrowserPagination } from "react-rainbow-components";

export const ListaRepositorios = () => {
    const cookie = new Cookies();
    const dispatch = useDispatch();

    const usuarioGithub = cookie.get("github");

    useEffect(() => {
        dispatch(listarRepositorioAsincrono(usuarioGithub));
    }, [dispatch, usuarioGithub]);

    const { repositorios } = useSelector((store) => store.repositorio);

    return (
        <TableWithBrowserPagination
            keyField="id"
            data={repositorios}
            variant="listview"
            pageSize={5}
        >
            <Column header="Nombre" field="name" />
            <Column header="Lenguaje" field="language" />
            <Column header="Branch" field="default_branch" />
            <Column header="Url" field="url" />
            <Column header="Descripcion" field="description" />
        </TableWithBrowserPagination>
    );
};
