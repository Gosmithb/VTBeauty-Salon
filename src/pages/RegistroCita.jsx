import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { useState } from "react";
import InputComponent from "../components/InputComponent";

const RegistroCita = () => {

  const [nombre, setNombre] = useState({ campo: '', valido: '' });
  const [apellido, setApellido] = useState({ campo: '', valido: '' });
  const [fecha, setFecha] = useState({ campo: null, valido: '' });
  const [hora, setHora] = useState({ campo: null, valido: '' });
  const [formularioValido, setFormularioValido] = useState('');
  const [servicio, setServicio] = useState({ campo: '', valido: '' });

  const serviciosDisponibles = [
    'Corte de cabello',
    'Pintura para cabello',
    'Manicura',
    'Pedicura'
  ];

  const add = serviciosDisponibles.map(add => add);

  const handleSetServicio = (e) => {
    setServicio({ campo: serviciosDisponibles[e.target.value], valido: 'true' });
  };

  const handleSetFecha = (e) => {
    setFecha({ campo: e.target.value, valido: 'true' });
  };

  const handleSetHora = (e) => {
    setHora({ campo: e.target.value, valido: 'true' });
  };

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nombre);
    console.log(apellido);
    console.log(servicio);
    console.log(fecha);
    console.log(hora);


    if (nombre.valido === 'true' && apellido.valido === 'true' && servicio.valido === 'true' && fecha.valido === 'true' && hora.valido === 'true') {
      addDoc(collection(db, 'citas'), {
        nombre: nombre.campo,
        apellido: apellido.campo,
        servicio: servicio.campo,
        fecha: fecha.campo,
        hora: hora.campo
      });
      console.log('Se supone que el usuario se subio');

      //Limpiar campos despues de actualizar tabla
      setNombre({ campo: '', valido: 'null' });
      setApellido({ campo: '', valido: 'null' });
      setServicio({ campo: '', valido: 'null' });
      setFecha({ campo: '', valido: 'null' });
      setHora({ campo: '', valido: 'null' });




    } else {
      setFormularioValido('false');
      console.log('setFormulario false');
    }
    setFormularioValido('');

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
                <InputComponent
                  estado={nombre}
                  setEstado={setNombre}
                  tipo="text"
                  placeholder="Nombre"
                  name="nombre"
                  leyendaError="Solo debe contener letras y espacio"
                  expresionRegular={expresiones.nombre}
                  classProps="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                />

              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]">
                  Apellido
                </label>
                <InputComponent
                  estado={apellido}
                  setEstado={setApellido}
                  tipo="text"
                  placeholder="Apellido"
                  name="apellido"
                  leyendaError="Solo debe contener letras y espacio"
                  expresionRegular={expresiones.nombre}
                  classProps="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

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
              <select
                onChange={e => handleSetServicio(e)}
                className="rounded-md border border-[#e0e0e0] font-medium text-[#6B7280] font-medium text-base rounded-lg block w-full py-3 px-6 focus:border-[#6A64F1]">
                <option defaultValue={'default'}>Selecciona un servicio...</option>
                {
                  add.map((service, key) => <option key={key} value={key}>{service}</option>)
                }
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
                  onChange={(e) => handleSetFecha(e)}
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
                  onMouseOut={(e) => handleSetHora(e)}
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
              type="submit"
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
