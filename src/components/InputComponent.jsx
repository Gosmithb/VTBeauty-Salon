import { faCircleCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const InputComponent = ({ estado, setEstado, tipo, placeholder, name, leyendaError, expresionRegular, funcion }) => {
    const handlesetEstado = (e) => {
        setEstado({ ...estado, campo: e.target.value });

    };

    const handleValidacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                setEstado({ ...estado, valido: 'true' });

            } else {
                setEstado({ ...estado, valido: 'false' });
            }
        }

        if (funcion) {
            funcion();
        }

    };

    const handleOnBlur = () => {

    };


    return (
        <div>
            <input
                type={tipo}
                placeholder={placeholder}
                id={name}
                value={estado.campo}
                onChange={handlesetEstado}
                onKeyUp={handleValidacion}
                onBlur={handleOnBlur}
                valido={estado.valido}
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
            />
            {/* Falta icono de validacion en labels */}
            {/* <label
                icon={estado.valido === 'true' ? faCircleCheck : faTimesCircle}
                valido={estado.valido}>
            </label> */}
            {/*
            position: absolute;
            right: 10px;
            bottom: 14px;
            z-index: 100;
            font-size: 16px;
            opacity: 0; */}
            {/* <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError> */}
        </div>
    )
}

export default InputComponent;