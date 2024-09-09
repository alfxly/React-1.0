import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Solicitud.css'; 

function Solicitud() {
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
    <section className="service-requests">
      <h2>SOLICITUDES DE SERVICIO</h2>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>DIRECCIÓN</th>
            <th>FECHA</th>
            <th>HORA</th>
            <th>ACEPTAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XXXXXXXXX</td>
            <td>XXXXX</td>
            <td>XX/XX/XX</td>
            <td>00:00</td>
            <td><button className="btn accept" onclick="confirmService()">✔</button></td>
            <td><button className="btn reject" onclick="rejectService()">✖</button></td>
          </tr>
          <tr>
            <td>XXXXXXXXX</td>
            <td>XXXXX</td>
            <td>XX/XX/XX</td>
            <td>00:00</td>
            <td><button className="btn accept" onclick="confirmService()">✔</button></td>
            <td><button className="btn reject" onclick="rejectService()">✖</button></td>
          </tr>
          <tr>
            <td>XXXXXXXXX</td>
            <td>XXXXX</td>
            <td>XX/XX/XX</td>
            <td>00:00</td>
            <td><button className="btn accept" onclick="confirmService()">✔</button></td>
            <td><button className="btn reject" onclick="rejectService()">✖</button></td>
          </tr>
          <tr>
            <td>XXXXXXXXX</td>
            <td>XXXXX</td>
            <td>XX/XX/XX</td>
            <td>00:00</td>
            <td><button className="btn accept" onclick="confirmService()">✔</button></td>
            <td><button className="btn reject" onclick="rejectService()">✖</button></td>
          </tr>
        </tbody>
      </table>
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
  <div className="overlay" />
</div>
    );
  }
  
  export default Solicitud;
  