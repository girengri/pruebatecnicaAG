import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../actions/actionRegister";
import styles from "../styles/iniciosesion.module.css";

export const RegistroAplicacion = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      contraseña1: "",
      contraseña2: "",
    },
    onSubmit: ({ correo, contraseña1, nombre }) => {
      dispatch(registroEmailPasswordNombre(correo, contraseña1, nombre));
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      correo: Yup.string()
        .email("No es un email valido")
        .required("El email es obligatorio"),
      contraseña1: Yup.string()
        .required("La contraseña es obligatoria")
        .min(5, "La contraseña debe tener al menos 5 caracteres")
        .oneOf([Yup.ref("contraseña2")], "Las contraseñas no son iguales"),
      contraseña2: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("contraseña1")], "Las contraseñas no son iguales"),
    }),
  });
  return (
    <div className={styles.bglogin}>
      <div>
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1645924148/icons8-octocat-50_rqfhob.png"
          alt="logo"
          className={styles.logoprincipal}
        />
      </div>

      <form className={styles.centrarSesion} onSubmit={formik.handleSubmit}>
        <h2>Crear cuenta</h2>
        <div className={styles.itemlogin}>
          <input
            id="nombre"
            name="nombre"
            type="text"
            onChange={formik.handleChange}
            placeholder="Nombre"
            className={styles.itemcajas}
            autoComplete="off"
          />
        </div>
        <p className={styles.erroresFormik}>{formik.errors.nombre}</p>

        <div className={styles.itemlogin}>
          <input
            id="correo"
            name="correo"
            type="text"
            onChange={formik.handleChange}
            placeholder="Correo electronico"
            className={styles.itemcajas}
            autoComplete="off"
          />
        </div>
        <p className={styles.erroresFormik}>{formik.errors.correo}</p>

        <div className={styles.itemlogin}>
          <input
            id="contraseña1"
            name="contraseña1"
            type="password"
            onChange={formik.handleChange}
            placeholder="Contraseña"
            className={styles.itemcajas}
            autoComplete="off"
          />
        </div>
        <p className={styles.erroresFormik}>{formik.errors.contraseña1}</p>

        <div className={styles.itemlogin}>
          <input
            id="contraseña2"
            name="contraseña2"
            type="password"
            onChange={formik.handleChange}
            placeholder="Repetir contraseña"
            className={styles.itemcajas}
            autoComplete="off"
          />
        </div>
        <p className={styles.erroresFormik}>{formik.errors.contraseña2}</p>

        <div className={styles.itemlogin}>
          <button className={styles.btnlogin} type="submit">
            Registrar
          </button>
        </div>

        <p className={styles.itemlogin.coloritemlogin}>
          ¿Ya tienes una cuenta?
          <span className={styles.contenedorRegistro}>
            <Link className={styles.registrate} to="/iniciarsesion">
              Iniciar sesión
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};
