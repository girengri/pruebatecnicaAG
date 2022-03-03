import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { listarRepositorioAsincrono } from "../actions/actionRepositorios";
import { Column, TableWithBrowserPagination } from "react-rainbow-components";
import { getReposByName } from "../selectors/getReposByName";
import { useFormik } from "formik";

export const ListaRepositorios = () => {
    const [buscado, setBuscado] = useState("");
    const cookie = new Cookies();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            searchText: "",
        },
        onSubmit: (data) => {
            console.log(data);
            setBuscado(data.searchText);
        },
    });

    const usuarioGithub = cookie.get("github");

    useEffect(() => {
        dispatch(listarRepositorioAsincrono(usuarioGithub));
    }, [dispatch, usuarioGithub]);

    const { repositorios } = useSelector((store) => store.repositorio);

    let datosFiltrados = getReposByName(buscado, repositorios);

    return (
        <div className=" row justify-content-center">
            <form className="row col-md-5" onSubmit={formik.handleSubmit}>
                <input
                    className="rounded-pill"
                    type="text"
                    placeholder="Escribir el nombre del repositorio a buscar"
                    onChange={formik.handleChange}
                    name="searchText"
                />
            </form>
            <TableWithBrowserPagination
                keyField="id"
                data={datosFiltrados}
                variant="listview"
                pageSize={5}
            >
                <Column header="Nombre" field="name" sortable />
                <Column header="Lenguaje" field="language" />
                <Column header="Branch" field="default_branch" />
                <Column header="Url" field="url" />
                <Column header="Descripcion" field="description" />
            </TableWithBrowserPagination>
        </div>
    );
};
