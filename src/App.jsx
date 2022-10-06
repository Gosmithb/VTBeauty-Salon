import { Routes, Route } from "react-router-dom"
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
      <Route path='/home' element={<Home />} />
      <Route path='/registrocita' element={<RegistroCita />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/home' element={<Home />} />
      <Route path='/ayuda' element={<Ayuda />} />
      <Route path='/guia' element={<Guia />} />
      <Route path='/guia' element={<Guia />} />
      <Route path='/seguridad' element={<Seguridad />} />
      <Route path='/iniciosesion' element={<InicioSesion />} />
      <Route path='/registrarse' element={<Registrarse />} />
    </Routes>
  )
}

export default App