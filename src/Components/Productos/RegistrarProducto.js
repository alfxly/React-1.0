import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './RegistrarProducto.css'; 

const RegistrarProducto = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      categoria: 'Veterinaria',
      descripcion: '',
      cantidad: '',
      precio: '',
      estado: 'disponible'
    });
  
    const [showAlert, setShowAlert] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(formData);
  
      setShowAlert(true);
  
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
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
  
        <br/><br/>
  
        <section className="form-section">
          <div className="form-container">
            <h2>Registrar Producto</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre Producto:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="categoria">Categoría:</label>
              <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="Veterinaria">Veterinaria</option>
                <option value="Agotado">Agotado</option>
              </select>
  
              <label htmlFor="descripcion">Descripción:</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="cantidad">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="precio">Precio:</label>
              <input
                type="text"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                required
              />
  
              <label htmlFor="estado">Estado:</label>
              <select
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              >
                <option value="disponible">Disponible</option>
                <option value="agotado">Agotado</option>
              </select>
  
              <div className="buttons">
                <button type="button" className="cancel-btn">Cancelar</button>
                <button type="submit" className="submit-btn">Guardar</button>
              </div>
            </form>
  
            {showAlert && (
              <div className="alert-overlay active">
                <div className="alert alert-success">
                  Producto registrado con éxito
                </div>
              </div>
            )}
          </div>
        </section>
  
        <br /><br />
  
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
              <li><a href="#"><img src="IMG/whatsapp.png" alt="Icono de WhatsApp" /></a></li>
              <li><a href="#"><img src="IMG/instagram.png" alt="Icono de Instagram" /></a></li>
              <li><a href="#"><img src="IMG/marcador.png" alt="Icono de Maps" /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  };
  
  export default RegistrarProducto;