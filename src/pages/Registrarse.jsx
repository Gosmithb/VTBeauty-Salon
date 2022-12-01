import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useState } from "react";
import InputComponent from "../components/InputComponent";

const Registrarse = () => {

  const [usuario, setUsuario] = useState({ campo: '', valido: 'null' });
  const [nombre, setNombre] = useState({ campo: '', valido: 'nul' });
  const [password, setPassword] = useState({ campo: '', valido: 'null' });
  const [password2, setPassword2] = useState({ campo: '', valido: 'null' });
  const [correo, setCorreo] = useState({ campo: '', valido: 'null' });
  const [telefono, setTelefono] = useState({ campo: '', valido: 'null' });


  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/ // 9 a 10 numeros.
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, valido: 'false' };
        });

      } else {
        setPassword2((prevState) => {
          return ({ ...prevState, valido: 'true' });
        });
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.valido === 'true' && nombre.valido === 'true' && password.valido === 'true' && password2.valido === 'true' && correo.valido === 'true' && telefono.valido === 'true') {
      console.log(usuario, nombre, password, password2, correo, telefono);

      addDoc(collection(db, 'usuarios'), {
        usuario: usuario.campo,
        nombre: nombre.campo,
        password: password.campo,
        correo: correo.campo,
        telefono: telefono.campo
      });
      console.log('Se supone que el usuario se subio');

      //Limpiar campos despues de actualizar tabla
      setUsuario({ campo: '', valido: 'null' });
      setNombre({ campo: '', valido: 'null' });
      setPassword({ campo: '', valido: 'null' });
      setPassword2({ campo: '', valido: 'null' });
      setCorreo({ campo: '', valido: 'null' });
      setTelefono({ campo: '', valido: 'null' });

      toast.success("Usuario creado con exito!", {
        position: toast.POSITION.TOP_CENTER
      });




    } else {
      toast.error("Favor de llenar correctamente todos los campos!", {
        position: toast.POSITION.TOP_LEFT
      });
    }

  }






  return (
    <div className="font-sans">

      <div className="relative min-h-screen flex flex-col sm:justify-center items-center ">
        <div className="relative sm:max-w-sm w-full">
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-50 my-3 shadow-md">
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Registrate
            </label>
            <form className="mt-10" onSubmit={handleSubmit}>
              {/* Usuario */}
              <div>
                <InputComponent
                  estado={usuario}
                  setEstado={setUsuario}
                  tipo="text"
                  placeholder="Usuario"
                  name="usuario"
                  leyendaError="El usuario tiene que ser de 4 a 16 digitos, letras y guion bajo"
                  expresionRegular={expresiones.usuario}
                  classProps="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"

                />
              </div>

              {/* Nombre */}
              <div className="mt-7">
                <InputComponent
                  estado={nombre}
                  setEstado={setNombre}
                  tipo="text"
                  placeholder="Nombre"
                  name="nombre"
                  leyendaError="Nombre invalido, solo debe contener letras y espacios"
                  expresionRegular={expresiones.nombre}
                  classProps="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"

                />
              </div>

              {/* Telefono */}
              <div className="mt-7">
                <InputComponent
                  estado={telefono}
                  setEstado={setTelefono}
                  tipo="text"
                  placeholder="Telefono"
                  name="telefono"
                  leyendaError="Numero Invalido"
                  expresionRegular={expresiones.telefono}
                  classProps="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"

                />
              </div>

              {/* Correo */}
              <div className="mt-7">
                <InputComponent
                  estado={correo}
                  setEstado={setCorreo}
                  tipo="text"
                  placeholder="Correo"
                  name="correo"
                  leyendaError="Formato invalido: Example@example.com"
                  expresionRegular={expresiones.correo}
                  classProps="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"

                />
              </div>

              {/* Contraseña */}
              <div className="mt-7">
                <InputComponent
                  estado={password}
                  setEstado={setPassword}
                  tipo="password"
                  placeholder="Contraseña"
                  name="password"
                  leyendaError="Contraseña no valida"
                  expresionRegular={expresiones.password}
                  classProps="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"

                />
              </div>

              {/* Confirmar contraseña */}
              <div className="mt-7">
                <InputComponent
                  estado={password2}
                  setEstado={setPassword2}
                  tipo="password"
                  placeholder="Confirmar contraseña"
                  name="password2"
                  leyendaError="Contraseña no coincide"
                  funcion={validarPassword2}
                  classProps="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"

                />
              </div>




              <div className="mt-7">
                <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Registrar
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Registrate con
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                  Facebook
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2" >¿Ya tienes una cuenta?</label>
                  <Link to='/iniciosesion' className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Iniciar sesion
                  </Link>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registrarse;