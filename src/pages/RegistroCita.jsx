import { useState } from "react";
import InputComponent from "../components/InputComponent";

const RegistroCita = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [servicio, setServicio] = useState('');

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('llega');
    // setFormularioValido('');
    // if (usuario.valido === 'true' && nombre.valido === 'true' && password.valido === 'true' && password2.valido === 'true' && correo.valido === 'true' && telefono.valido === 'true') {
    //   setFormularioValido('true');
    //   if (formularioValido === 'true') {
    //     addDoc(collection(db, 'usuarios'), {
    //       usuario: usuario.campo,
    //       nombre: nombre.campo,
    //       password: password.campo,
    //       correo: correo.campo,
    //       telefono: telefono.campo
    //     });
    //     console.log('Se supone que el usuario se subio');

    //     //Limpiar campos despues de actualizar tabla
    //     setUsuario({ campo: '', valido: 'null' });
    //     setNombre({ campo: '', valido: 'null' });
    //     setPassword({ campo: '', valido: 'null' });
    //     setPassword2({ campo: '', valido: 'null' });
    //     setCorreo({ campo: '', valido: 'null' });
    //     setTelefono({ campo: '', valido: 'null' });
    //   }



    // } else {
    //   setFormularioValido('false');
    //   console.log('setFormulario false');
    // }

  }


  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit} method="POST">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]">
                  Nombre
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Nombre"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {/* <InputComponent
                  estado={nombre}
                  setEstado={setNombre}
                  tipo="text"
                  placeholder="Nombre"
                  name="nombre"
                  leyendaError="Nombre invalido, no debe contener caracteres especiales"
                  expresionRegular={expresiones.nombre}
                  
                /> */}
                
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Apellido"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="guest"
              className="mb-3 block text-base font-medium text-[#07074D]">
              Servicio Requerido
            </label>
            <div className="max-w-2xl mx-auto">
              <select id="services" className="rounded-md border border-[#e0e0e0] font-medium text-[#6B7280] font-medium text-base rounded-lg block w-full py-3 px-6 focus:border-[#6A64F1]">
                <option defaultValue={'default'}>Selecciona un servicio...</option>
                <option value="CorteCabello">Corte de cabello</option>
                <option value="PinturaCabello">Pintura para cabello</option>
                <option value="Manicura">Manicura</option>
                <option value="Pedicura">Pedicura</option>
              </select>
            </div>

          </div>


          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]">
                  Fecha
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]">
                  Hora
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div>
            <button
            // type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Crear cita
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistroCita;
