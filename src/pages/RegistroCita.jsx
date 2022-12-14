import "react-toastify/dist/ReactToastify.css";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../firebase/firebase';
import { toast } from 'react-toastify';
import { useState } from "react";
import InputComponent from "../components/InputComponent";

const RegistroCita = () => {

  const [nombre, setNombre] = useState({ campo: '', valido: '' });
  const [apellido, setApellido] = useState({ campo: '', valido: '' });
  const [fecha, setFecha] = useState({ campo: '', valido: '' });
  const [hora, setHora] = useState({ campo: '', valido: '' });
  const [servicio, setServicio] = useState({ campo: '', valido: '' });
  const [fechaCita, setFechaCita] = useState([]);
  const [horaCita, setHoraCita] = useState([]);

  const serviciosDisponibles = [
    'Corte de cabello',
    'Pintura para cabello',
    'Manicura',
    'Pedicura'
  ];

  // const obtenerFechaActual = () => {
  //   let date = new Date()

  //   let day = date.getDate()
  //   let month = date.getMonth() + 1
  //   let year = date.getFullYear()

  //   if (month < 10) {
  //     setFechaActual(`${year}-0${month}-${day}`);
  //   } else {
  //     setFechaActual(`${year}-${month}-${day}`);

  //   }
  // };

  const add = serviciosDisponibles.map(add => add);

  const handleSetServicio = (e) => {
    setServicio({ campo: serviciosDisponibles[e.target.value], valido: 'true' });
  };

  const handleSetFecha = (e) => {
    setFecha({ campo: String(e.target.value), valido: 'true' });
  };

  const handleSetHora = (e) => {
    setHora({ campo: e.target.value, valido: 'true' });
  };

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  };
  // console.log(citasCreadas);

  const handleSubmit = (e) => {
    e.preventDefault();



    if (nombre.valido === 'true' && apellido.valido === 'true' && servicio.valido === 'true' && fecha.valido === 'true' && hora.valido === 'true') {
      // addDoc(collection(db, 'citas'), {
      //   nombre: nombre.campo,
      //   apellido: apellido.campo,
      //   servicio: servicio.campo,
      //   fecha: fecha.campo,
      //   hora: hora.campo
      // });


      

      const fechaOcupada = fechaCita.includes(fecha.campo);
      const horaOcupada = horaCita.includes(hora.campo);

      setFechaCita([...fechaCita, fecha.campo]);
      setHoraCita([...horaCita, hora.campo]);

      if (!fechaOcupada) {
        toast.success("Cita creada con exito!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      if (fechaOcupada) {
        toast.error("Fecha ya ocupada, seleccione otra por favor", {
          position: toast.POSITION.TOP_CENTER
        });
        setHoraCita([]);
        setFechaCita([]);
      }

      // //Limpiar campos despues de actualizar tabla
      setNombre({ campo: '', valido: '' });
      setApellido({ campo: '', valido: '' });


    } else {
      toast.error("Favor de llenar correctamente todos los campos", {
        position: toast.POSITION.TOP_CENTER
      });

    }

    if (!nombre.valido) {
      toast.error("Falta ingresar nombre", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    if (!apellido.valido) {
      toast.error("Falta ingresar apellido", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    if (servicio.valido === false) {
      toast.error("Favor de elegir un servicio", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    if (!fecha.valido) {
      toast.error("Favor de elegir una fecha valida", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    if (!hora.valido) {
      toast.error("Favor de elegir una hora", {
        position: toast.POSITION.TOP_CENTER
      });
    }


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
                  min="2022-12-09"
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
                  min="07:00"
                  max="05:00"
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
