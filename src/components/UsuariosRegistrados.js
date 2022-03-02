import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  actualizarUsuarioASincrono,
  eliminarUsuarioASincrono,
  listarUsuariosAsincrono,
} from "../actions/actionUsuarios";
import { useForm } from "../hooks/useForm";

export const UsuariosRegistrados = () => {
  const [insertarModal, setInsertarModal] = useState(false);

  const [values, handleInputChange, setValues] = useForm({
    cedula: "",
    nombre: "",
    correo: "",
    github: "",
  });

  const { nombre, correo, github } = values;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarUsuariosAsincrono());
  }, [dispatch]);

  const { usuarios } = useSelector((store) => store.usuario);

  const handleClickModificar = (usuario) => {
    setInsertarModal(true);
    setValues(usuario);
  };

  const cerrarModal = () => {
    setInsertarModal(false);
  };
  return (
    <React.Fragment>
      <Container>
        <table className="table text-center mt-3">
          <thead>
            <tr>
              <th scope="col">Cedula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Usuario Github</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuar, index) => (
              <tr key={index}>
                <td>{usuar.cedula}</td>
                <td>{usuar.nombre}</td>
                <td>{usuar.correo}</td>
                <td>{usuar.github}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm float-end mx-2"
                    onClick={() => handleClickModificar(usuar)}
                  >
                    Modificar
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(eliminarUsuarioASincrono(usuar.cedula))
                    }
                    className="btn btn-danger btn-sm float-end"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      <Modal isOpen={insertarModal}>
        <ModalBody>
          <div>
            <h3>Modificar Pelicula</h3>
          </div>
          <FormGroup>
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Correo:</label>
            <input
              id="inputCorreo"
              type="email"
              className="form-control mt-2"
              name="correo"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={correo}
            />
          </FormGroup>

          <FormGroup>
            <label>Usuario Github:</label>
            <input
              id="inputGithub"
              type="text"
              className="form-control mt-2"
              name="github"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={github}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => dispatch(actualizarUsuarioASincrono(values))}
          >
            Modificar
          </Button>
          <Button color="danger" onClick={() => cerrarModal()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
