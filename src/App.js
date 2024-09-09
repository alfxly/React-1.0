import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio';
import RegistrarEmpleado from './Components/Empleados/RegistrarEmpleado';
import Empleados from './Components/Empleados/Empleados';
import RegistrarProducto from './Components/Productos/RegistrarProducto';
import Productos from './Components/Productos/Productos';
import Solicitud from './Components/Servicios/Solicitud';
import Perfil from './Components/Perfil/Perfil';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrar-empleado" element={<RegistrarEmpleado />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/registrar-producto" element={<RegistrarProducto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
