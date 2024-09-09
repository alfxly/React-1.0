import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Perfil.css';


const Perfil = () => {
    const [profilePreview, setProfilePreview] = useState(null);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [formData, setFormData] = useState({
      nombre: '',
      celular: '',
      correo: '',
      direccion: '',
    });
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setProfilePreview(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Solo se permiten archivos JPG o PNG');
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const openUpdateModal = () => {
      setUpdateModalOpen(true);
    };
  
    const closeUpdateModal = () => {
      setUpdateModalOpen(false);
    };
  
    const saveUpdate = () => {
      setUpdateModalOpen(false);
      setSuccessAlertOpen(true);
    };
  
    const closeSuccessAlert = () => {
      setSuccessAlertOpen(false);
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
                  <li><a href="RegistrarProducto.html">Registrar Producto</a></li>
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
          <section className="profile-info">
            <h2>Información del perfil</h2>
            <div className="profile-photo">
              {profilePreview && (
                <img src={profilePreview} alt="Foto de perfil" />
              )}
              <button onClick={() => document.getElementById('profileImage').click()}>Subir foto</button>
              <input
                type="file"
                id="profileImage"
                accept=".jpg, .png"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
  
            <form>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
  
              <label htmlFor="celular">Celular:</label>
              <input
                type="text"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleInputChange}
              />
  
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
              />
  
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
  
              <button type="button" onClick={openUpdateModal}>
                Actualizar Información
              </button>
            </form>
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
              <li><a href="#"><img src="IMG/whatsapp.png" alt="Icono WhatsApp" /></a></li>
              <li><a href="#"><img src="IMG/instagram.png" alt="Icono Instagram" /></a></li>
              <li><a href="#"><img src="IMG/marcador.png" alt="Icono Marcador" /></a></li>
            </ul>
          </div>
        </footer>
  
        {/* Modal para actualizar información */}
        {updateModalOpen && (
          <div id="updateModal" className="modal">
            <div className="modal-content">
              <h2>Actualizar Información</h2>
              <form>
                <label htmlFor="newNombre">Nuevo Nombre:</label>
                <input
                  type="text"
                  id="newNombre"
                  name="newNombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
  
                <label htmlFor="newCelular">Nuevo Celular:</label>
                <input
                  type="text"
                  id="newCelular"
                  name="newCelular"
                  value={formData.celular}
                  onChange={handleInputChange}
                />
  
                <label htmlFor="newCorreo">Nuevo Correo:</label>
                <input
                  type="email"
                  id="newCorreo"
                  name="newCorreo"
                  value={formData.correo}
                  onChange={handleInputChange}
                />
  
                <label htmlFor="newDireccion">Nueva Dirección:</label>
                <input
                  type="text"
                  id="newDireccion"
                  name="newDireccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                />
  
                <div className="button-container">
                  <button type="button" className="cancel-btn" onClick={closeUpdateModal}>
                    Cancelar
                  </button>
                  <button type="button" className="save-btn" onClick={saveUpdate}>
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
  
        {/* Alerta de éxito */}
        {successAlertOpen && (
          <div id="successAlert" className="modal">
            <div className="modal-content">
              <h2>¡Actualización Exitosa!</h2>
              <p>La información ha sido actualizada correctamente.</p>
              <button onClick={closeSuccessAlert}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Perfil;