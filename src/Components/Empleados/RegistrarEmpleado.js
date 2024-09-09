import React, { useState } from 'react';
import './RegistrarEmpleado.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import logo from '../../assets/images/logo.png';

function RegistrarEmpleado() {
  const validarRegistro = (event) => {
    event.preventDefault();

    // Aquí agregarás la validación con tu API para verificar si el empleado ya está registrado
    // Si el empleado ya está registrado, mostrar el modal de error
    // mostrarModal('modal-error');

    // Si el registro es exitoso, mostrar el modal de éxito
    mostrarModal('modal-success');
  };

  const mostrarModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  };

  const cerrarModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  };

  const handleClickOutsideModal = (event) => {
    const modalSuccess = document.getElementById('modal-success');
    const modalError = document.getElementById('modal-error');
    if (event.target === modalSuccess) {
      modalSuccess.style.display = 'none';
    }
    if (event.target === modalError) {
      modalError.style.display = 'none';
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClickOutsideModal);
    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, []);

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
            <li className="dropdown">
              <a href="#">Servicios</a>
              <ul className="dropdown-content">
                <li><a href="Solicitud.html">Solicitud de Servicios</a></li>
              </ul>
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
        <section className="form-section">
          <div className="form-container">
            <form>
              <h2>Registrar Empleados</h2>
              <label htmlFor="tipo-doc">Tipo Doc</label>
              <select id="tipo-doc" required>
                <option value="cc">Cédula</option>
                <option value="ce">Cédula Extranjera</option>
              </select>

              <label htmlFor="documento">Documento</label>
              <input type="text" id="documento" required />

              <label htmlFor="rol">Rol</label>
              <select id="rol" required>
                <option value="veterinario">Veterinario</option>
                <option value="empleado">Empleado</option>
              </select>

              <label htmlFor="estado">Estado</label>
              <select id="estado" required>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>

              <label htmlFor="nombre">Nombre Empleado</label>
              <input type="text" id="nombre" required />

              <label htmlFor="apellidos">Apellidos Empleado</label>
              <input type="text" id="apellidos" required />
            </form>
          </div>

          <div className="form-container">
            <form>
              <h2>Datos de Contacto</h2>
              <label htmlFor="correo">Correo Electrónico</label>
              <input type="email" id="correo" required />

              <label htmlFor="celular">Celular</label>
              <input type="tel" id="celular" required />

              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" required />

              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" id="contrasena" required />

              <div className="buttons">
                <button type="reset">Cancelar</button>
                <button type="submit" onClick={validarRegistro}>Guardar</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="enlaces">
          <h3>Enlaces de página</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Empleados</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Perfil</a></li>
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

      {/* Modal para empleado registrado con éxito */}
      <div id="modal-success" className="modal">
        <div className="modal-content">
          <h2>Éxito</h2>
          <p>El empleado ha sido registrado con éxito.</p>
          <button className="close-btn" onClick={() => cerrarModal('modal-success')}>Cerrar</button>
        </div>
      </div>

      {/* Modal para empleado ya registrado */}
      <div id="modal-error" className="modal modal-error">
        <div className="modal-content">
          <h2>Error</h2>
          <p>El empleado ya está registrado.</p>
          <button className="close-btn" onClick={() => cerrarModal('modal-error')}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarEmpleado;
