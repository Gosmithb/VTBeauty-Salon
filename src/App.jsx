import { Routes, Route } from "react-router-dom"
import configRoute from "./configRoute"
import Ayuda from "./pages/Ayuda";
import Guia from "./pages/Guia";
import Home from './pages/Home';
import InicioSesion from "./pages/InicioSesion";
import Productos from "./pages/Productos";
import Registrarse from "./pages/Registrarse";
import RegistroCita from "./pages/RegistroCita";
import Seguridad from "./pages/Seguridad";
import Servicios from "./pages/Servicios";

const App = () => {
  return (
    <Routes>
      {configRoute.map((ruta, i) => (
        <Route
          key={i}
          path={ruta.path}
          element={<ruta.page />}
        ></Route>
      ))}
    </Routes>
  )
}

export default App