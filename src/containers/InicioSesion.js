import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  loginEmailAndPassword,
  loginFacebook,
  loginGoogle,
} from "../actions/actionLogin";
import { Link } from "react-router-dom";
import styles from "../styles/iniciosesion.module.css";

const InicioSesion = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      correo: "",
      contraseña: "",
    },
    onSubmit: ({ correo, contraseña }) => {
      dispatch(loginEmailAndPassword(correo, contraseña));
    },
    validationSchema: Yup.object({
      correo: Yup.string()
        .email("No es un email valido")
        .required("El email es obligatorio"),
      contraseña: Yup.string().required("La contraseña es obligatoria"),
    }),
  });

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <div className={styles.bglogin}>
      <div>
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1645924148/icons8-octocat-50_rqfhob.png"
          alt="logo"
          className={styles.logoprincipal} 
        />
      </div>

      <form
        className={styles.centrarSesionLogin}
        onSubmit={formik.handleSubmit}
      >
        <h2>Inicia sesión</h2>
        <div className={styles.itemlogin}>
          <input
            id="correo"
            name="correo"
            type="text"
            onChange={formik.handleChange}
            placeholder="Dirección de correo electrónico"
            className={styles.itemcajas}
            autoComplete="off"
          />
        </div>
        <p className={styles.erroresFormik}>{formik.errors.correo}</p>

        <div className={styles.itemlogin}>
          <input
            id="contraseña"
            name="contraseña"
            type="password"
            onChange={formik.handleChange}
            placeholder="Contraseña"
            className={styles.itemcajas}
            autoComplete="off"
          />
        </div>
        <p className={styles.erroresFormik}>{formik.errors.contraseña}</p>
        <div className={styles.itemlogin}>
          <button className={styles.btnlogin} type="submit">
            Iniciar sesión
          </button>
        </div>
        <div className={styles.itemlogin}>
          <button className={styles.btnlogin} onClick={() => handleGoogle()}>
            Iniciar sesión con Google
          </button>
        </div>
        <div className={styles.itemlogin}>
          <button className={styles.btnlogin} onClick={() => handleFacebook()}>
            Iniciar sesión con Facebook
          </button>
        </div>
        <p className={styles.itemlogin.coloritemlogin}>
          ¿Primera vez en Git Innova?
          <span className={styles.contenedorRegistro}>
            <Link className={styles.registrate} to="/registroaplicacion">
              Registrate
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default InicioSesion;
