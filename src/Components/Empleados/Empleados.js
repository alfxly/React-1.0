import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import './Empleados.css'; 

const Empleados = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);
  
    const openDeleteModal = () => setIsDeleteModalOpen(true);
    const closeDeleteModal = () => setIsDeleteModalOpen(false);
  
    const handleSaveClick = (e) => {
      e.preventDefault();
      closeEditModal();
      toast.success('Empleado actualizado correctamente');
    };
  
    const handleDeleteConfirm = () => {
      closeDeleteModal();
      toast.success('Empleado eliminado correctamente');
    };
  
    return (
      <div>
        <Toaster position="top-right" expand={true} />
        
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
                  <li><a href="/registrar-empleado">Registrar Empleado</a></li>
                  <li><a href="/empleados">Modificar Empleados</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Productos</a>
                <ul className="dropdown-content">
                  <li><a href="/registrar-productos">Registrar Producto</a></li>
                  <li><a href="/productos">Modificar Productos</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="Solicitud.html">Servicios</a>
              </li>
            </ul>
          </nav>
          <div className="perfil">
            <a href="Perfil.html">
              <img src="IMG/usuario.png" alt="Icono de perfil" className="user-icon" />
            </a>
          </div>
        </header>
  
        <main>
          <section className="employees-section">
            <h1>EMPLEADOS</h1>
            <table className="employees-table">
              <thead>
                <tr>
                  <th>TIPO DOC.</th>
                  <th>DOCUMENTO</th>
                  <th>ROL</th>
                  <th>ESTADO</th>
                  <th>NOMBRE</th>
                  <th>APELLIDOS</th>
                  <th>TELÉFONO</th>
                  <th>CORREO</th>
                  <th>DIRECCIÓN</th>
                  <th>CONTRASEÑA</th>
                  <th>EDITAR</th>
                  <th>ELIMINAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cédula</td>
                  <td>102388554</td>
                  <td>Veterinario</td>
                  <td>Activo</td>
                  <td>Juan</td>
                  <td>Perez</td>
                  <td>30200000</td>
                  <td>juan.perez@gmail.com</td>
                  <td>calle 123</td>
                  <td>thth</td>
                  <td><button className="edit-btn" onClick={openEditModal}>✏️</button></td>
                  <td><button className="delete-btn" onClick={openDeleteModal}>🗑️</button></td>
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
              <li><a href="#"><i className="icon-whatsapp"><img src="IMG/whatsapp.png" alt="Icono de perfil" /></i></a></li>
              <li><a href="#"><i className="icon-instagram"><img src="IMG/instagram.png" alt="Icono de perfil" /></i></a></li>
              <li><a href="#"><i className="icon-maps"><img src="IMG/marcador.png" alt="Icono de perfil" /></i></a></li>
            </ul>
          </div>
        </footer>
  
        {isEditModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeEditModal}>&times;</span>
              <h2>Actualizar Empleado</h2>
              <form>
                <label htmlFor="estado">Estado</label>
                <select id="estado">
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
                <button type="submit" onClick={handleSaveClick}>Guardar</button>
              </form>
            </div>
          </div>
        )}
  
        {isDeleteModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeDeleteModal}>&times;</span>
              <h2>¿Seguro que desea eliminar este Empleado?</h2>
              <button className="confirm-delete" onClick={handleDeleteConfirm}>Eliminar</button>
              <button className="cancel-delete" onClick={closeDeleteModal}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Empleados;