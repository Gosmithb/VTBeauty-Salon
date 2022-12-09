import Ayuda from "./pages/Ayuda";
import Guia from "./pages/Guia";
import Home from './pages/Home';
import Productos from "./pages/Productos";
import RegistroCita from "./pages/RegistroCita";
import Seguridad from "./pages/Seguridad";
import Servicios from "./pages/Servicios";

//Mediator 
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
]