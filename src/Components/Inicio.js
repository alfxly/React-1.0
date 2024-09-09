import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Inicio.css'; 

function Inicio() {
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
                  <li><a href="/registrar-empleado">Registrar Empleado</a></li>
                  <li><a href="/empleados">Modificar Empleados</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Productos</a>
                <ul className="dropdown-content">
                  <li><a href="/registrar-producto">Registrar Producto</a></li>
                  <li><a href="/productos">Modificar Productos</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/solicitud">Servicios</a>
              </li>
            </ul>
          </nav>
          <div className="perfil">
            <a href="/perfil">
              <img src="IMG/usuario.png" alt="Icono de perfil" className="user-icon" />
            </a>
          </div>
        </header>
  
        <main>
          <section className="welcome-section">
            <h1>Bienvenido, (nombre administrador)</h1>
            <img src="IMG/Animales.png" alt="Imagen de animales" />
            <p>Bienvenido a la página del administrador. Aquí podrás gestionar a los empleados, productos, servicios y tu perfil de usuario.</p>
          </section>
  
          <section className="description-section">
            <h2>Funciones Disponibles</h2>
            <ul>
              <li><strong>Inicio:</strong> Es la vista donde te encuentras.</li>
              <li><strong>Empleados:</strong> Aquí podrás registrar nuevos empleados y modificar sus datos.</li>
              <li><strong>Productos:</strong> Aquí podrás registrar productos y modificar los existentes.</li>
              <li><strong>Servicios:</strong> Aquí aceptarás o rechazarás el servicio puerta a puerta.</li>
              <li><strong>Perfil:</strong> Aquí verás tus datos y podrás poner una foto de perfil.</li>
            </ul>
          </section>
        </main>
  
        <footer>
          <div className="enlaces">
            <h3>Enlaces de página</h3>
            <ul>
              <li><a href="/inicio">Inicio</a></li>
              <li><a href="/empleados">Empleados</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/solicitud">Servicios</a></li>
              <li><a href="/perfil">Perfil</a></li>
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
      </div>
    );
  };

  
  export default Inicio;
  