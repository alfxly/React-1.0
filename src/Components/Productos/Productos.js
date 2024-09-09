import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Productos.css';

const Productos = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [deleteSuccessModalVisible, setDeleteSuccessModalVisible] = useState(false);

  const openModal = (modalSetter) => {
    modalSetter(true);
  };

  const closeModal = (modalSetter) => {
    modalSetter(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo Claw Guardians" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li className="dropdown">
              <a href="#">Empleados</a>
              <ul className="dropdown-content">
                <li><a href="RegistrarEmpleado.html">Registrar Empleado</a></li>
                <li><a href="Empleados.html">Modificar Empleados</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Productos</a>
              <ul className="dropdown-content">
                <li><a href="RegistraProducto.html">Registrar Producto</a></li>
                <li><a href="Productos.html">Modificar Productos</a></li>
              </ul>
            </li>
            <li><a href="Solicitud.html">Servicios</a></li>
          </ul>
        </nav>
        <div className="perfil">
          <a href="Perfil.html">
            <img src="IMG/usuario.png" alt="Icono de perfil" className="user-icon" />
          </a>
        </div>
      </header>

      <main>
        <section className="product-section">
          <h2>PRODUCTOS</h2>
          <table>
            <thead>
              <tr>
                <th>CODIGO P.</th>
                <th>NOMBRE</th>
                <th>CATEGORIA</th>
                <th>DESCRIPCION</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th>ESTADO</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>XXXXXXX</td>
                <td>XXXXX</td>
                <td>XX/XX/XX</td>
                <td>0</td>
                <td>0,000</td>
                <td>XXXX</td>
                <td>
                  <button className="edit-btn" onClick={() => openModal(setEditModalVisible)}>✏️</button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => openModal(setDeleteModalVisible)}>🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <div className="enlaces">
          <h3>Enlaces de página</h3>
          <ul>
            <li><a href="IndexAdmin.html">Inicio</a></li>
            <li><a href="Empleados.html">Empleados</a></li>
            <li><a href="Productos.html">Productos</a></li>
            <li><a href="Solicitud.html">Servicios</a></li>
            <li><a href="Perfil.html">Perfil</a></li>
          </ul>
        </div>
        <div className="informacion">
          <h3>Información</h3>
          <ul>
            <li><a href="#">Políticas de privacidad</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
          </ul>
        </div>
        <div className="contacto">
          <h3>Contáctanos</h3>
          <ul>
            <li><a href="#"><img src="IMG/whatsapp.png" alt="Icono de perfil" /></a></li>
            <li><a href="#"><img src="IMG/instagram.png" alt="Icono de perfil" /></a></li>
            <li><a href="#"><img src="IMG/marcador.png" alt="Icono de perfil" /></a></li>
          </ul>
        </div>
      </footer>

      {/* Modals */}
      {editModalVisible && (
        <div id="editModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal(setEditModalVisible)}>&times;</span>
            <h2>Actualizar Producto</h2>
            <form>
              <label htmlFor="nombre">Nombre del Producto</label>
              <input type="text" id="nombre" />

              <label htmlFor="cantidad">Cantidad</label>
              <input type="number" id="cantidad" />

              <label htmlFor="precio">Precio</label>
              <input type="text" id="precio" />

              <label htmlFor="estado">Estado</label>
              <select id="estado">
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>

              <button type="submit" onClick={(e) => { e.preventDefault(); closeModal(setEditModalVisible); openModal(setSuccessModalVisible); }}>Guardar</button>
            </form>
          </div>
        </div>
      )}

      {deleteModalVisible && (
        <div id="deleteModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal(setDeleteModalVisible)}>&times;</span>
            <h2>¿Seguro que desea eliminar este producto?</h2>
            <button className="confirm-delete" onClick={() => { closeModal(setDeleteModalVisible); openModal(setDeleteSuccessModalVisible); }}>Eliminar</button>
            <button className="cancel-delete" onClick={() => closeModal(setDeleteModalVisible)}>Cancelar</button>
          </div>
        </div>
      )}

      {successModalVisible && (
        <div id="successModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal(setSuccessModalVisible)}>&times;</span>
            <h2>¡Guardado con éxito!</h2>
            <p>El producto ha sido actualizado correctamente.</p>
            <button className="confirm" onClick={() => closeModal(setSuccessModalVisible)}>Aceptar</button>
          </div>
        </div>
      )}

      {deleteSuccessModalVisible && (
        <div id="deleteSuccessModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal(setDeleteSuccessModalVisible)}>&times;</span>
            <h2>¡Eliminado con éxito!</h2>
            <p>El producto ha sido eliminado correctamente.</p>
            <button className="confirm" onClick={() => closeModal(setDeleteSuccessModalVisible)}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
