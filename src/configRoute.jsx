import Ayuda from "./pages/Ayuda";
import Guia from "./pages/Guia";
import Home from './pages/Home';
import InicioSesion from "./pages/InicioSesion";
import Productos from "./pages/Productos";
import Registrarse from "./pages/Registrarse";
import RegistroCita from "./pages/RegistroCita";
import Seguridad from "./pages/Seguridad";
import Servicios from "./pages/Servicios";

export default [
    {
        path: '/',
        page: Home
    },
    {
        path: '/registrocita',
        page: RegistroCita
    },
    {
        path: '/servicios',
        page: Servicios
    },
    {
        path: '/productos',
        page: Productos
    },
    {
        path: '/ayuda',
        page: Ayuda
    },
    {
        path: '/guia',
        page: Guia
    },
    {
        path: '/seguridad',
        page: Seguridad
    },
    {
        path: '/iniciosesion',
        page: InicioSesion
    },
    {
        path: '/registrarse',
        page: Registrarse
    },

]