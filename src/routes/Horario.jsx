import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

const Horario = () => {

    const [horario, setHorario] = useState()
    const [horarioCargado, setHorarioCargado] = useState({
      id: '', // Puedes usar esto para almacenar el ID del documento del horario si es necesario
      data: {
          // Horarios para cada franja horaria de cada día de la semana
          lunes700: '',
          lunes745: '',
          lunes830: '',
          lunes915: '',
          lunes1000: '',
          lunes1045: '',
          lunes1130: '',
          
          martes700: '',
          martes745: '',
          martes830: '',
          martes915: '',
          martes1000: '',
          martes1045: '',
          martes1130: '',
          
          miercoles700: '',
          miercoles745: '',
          miercoles830: '',
          miercoles915: '',
          miercoles1000: '',
          miercoles1045: '',
          miercoles1130: '',
          
          jueves700: '',
          jueves745: '',
          jueves830: '',
          jueves915: '',
          jueves1000: '',
          jueves1045: '',
          jueves1130: '',
          
          viernes700: '',
          viernes745: '',
          viernes830: '',
          viernes915: '',
          viernes1000: '',
          viernes1045: '',
          viernes1130: ''
      }
  });

    const [secciones, setSecciones] = useState([]);
    const [añoSeleccionado, setAñoSeleccionado] = useState('1er Año');
    const [seccionSeleccionada, setSeccionSeleccionada] = useState('a');
    const [cargando, setCargando] = useState(false);

    const inputLunes700 = useRef();
    const inputLunes745 = useRef();
    const inputLunes830 = useRef();
    const inputLunes915 = useRef(); 
    const inputLunes1000 = useRef(); 
    const inputLunes1045 = useRef(); 
    const inputLunes1130 = useRef(); 
    const inputMartes700 = useRef();
    const inputMartes745 = useRef();
    const inputMartes830 = useRef();
    const inputMartes915 = useRef();
    const inputMartes1000 = useRef();
    const inputMartes1045 = useRef();
    const inputMartes1130 = useRef();
    const inputMiercoles700 = useRef();
    const inputMiercoles745 = useRef();
    const inputMiercoles830 = useRef();
    const inputMiercoles915 = useRef();
    const inputMiercoles1000 = useRef();
    const inputMiercoles1045 = useRef();
    const inputMiercoles1130 = useRef();
    const inputJueves700 = useRef();
    const inputJueves745 = useRef();
    const inputJueves830 = useRef();
    const inputJueves915 = useRef();
    const inputJueves1000 = useRef();
    const inputJueves1045 = useRef();
    const inputJueves1130 = useRef();
    const inputViernes700 = useRef();
    const inputViernes745 = useRef();
    const inputViernes830 = useRef();
    const inputViernes915 = useRef();
    const inputViernes1000 = useRef();
    const inputViernes1045 = useRef();
    const inputViernes1130 = useRef();  


    const fetchHorario = async (año, seccion) => {
        setCargando(true);
        try {
            const response = await axios.get(`/api/horarios/${año}/${seccion}`);
            setHorarioCargado(response.data);
        } catch (error) {
            console.error('Error al obtener el horario:', error);
        } finally {
            setCargando(false);
        }
    };

    const fetchSecciones = async (año) => {
        setCargando(true);
        try {
            const response = await axios.get(`/api/secciones/${año}`);
            setSecciones(response.data);
            // Establecer la sección por defecto para el primer año
            setSeccionSeleccionada(response.data[0]);
            fetchHorario(año, response.data[0]);
        } catch (error) {
            console.error('Error al obtener las secciones:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        fetchSecciones(añoSeleccionado);
    }, [añoSeleccionado]);

    useEffect(() => {
        if (secciones.length > 0) {
            fetchHorario(añoSeleccionado, seccionSeleccionada);
        }
    }, [seccionSeleccionada]);

    useEffect(() => {
        fetchSecciones('1er Año');
    }, []);

    const handleAñoChange = (año) => {
        setAñoSeleccionado(año);
    };

    const handleSeccionChange = (seccion) => {
        setSeccionSeleccionada(seccion);
    };

    return (
        <div className="">
            <Navbar />
            <div className='container'>
                <h1 className="mt-10 font-bold text-center">Horario</h1>
                <h2 className="text-x2 text-center">Aquí puedes ver tu horario de clases.</h2>
                <div className="">
                    <div>
                        <div className="flex justify-center">
                            <p>Selecciona el año</p>
                        </div>
                        <div className="flex justify-center p-1 mx-2 my-4 rounded space-x-1">
                            {['1er Año', '2do Año', '3er Año', '4to Año', '5to Año'].map(año => (
                                <button
                                    key={año}
                                    onClick={() => handleAñoChange(año)}
                                    className={`px-4 py-2 text-gray-800 rounded border-2 text-lg font-medium ${
                                        añoSeleccionado === año
                                            ? 'bg-white border-gray-300'
                                            : 'bg-gray-300 border-gray-300 hover:bg-gray-200'
                                    }`}
                                >
                                    {año}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <p className='mb-1 ml-2'>Selecciona la sección</p>
                    </div>
                    <div className="inline-flex p-1 mx-2 mb-4 rounded space-x-1 bg-gray-300">
                        {secciones.map(seccion => (
                            <button
                                key={seccion}
                                onClick={() => handleSeccionChange(seccion)}
                                className={`px-4 py-2 text-gray-800 rounded ${
                                    seccionSeleccionada === seccion
                                        ? 'bg-white'
                                        : 'bg-gray-300 hover:bg-gray-200'
                                }`}
                            >
                                {seccion}
                            </button>
                        ))}
                    </div>
                </div>
                {cargando ? (
                    <div className="flex justify-center mt-4">
                        <p>Cargando...</p>
                    </div>
                ) : (
                    horarioCargado && horarioCargado.data ? (
                        <div className='w-full flex justify-center'>
                            <div className="rounded-md border border-gray-200 overflow-auto mb-8 w-[850px]">
                                <div className="overflow-x-auto rounded-t-lg">
                                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                        <thead className="ltr:text-left rtl:text-right">
                                            <tr className='text-base'>
                                                <th className="whitespace-nowrap pr-1 pl-4 py-2 font-medium text-gray-900">Hora</th>
                                                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Lunes</th>
                                                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Martes</th>
                                                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Miércoles</th>
                                                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Jueves</th>
                                                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Viernes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {['700', '745', '830', '915', '1000', '1045', '1130'].map((hora) => (
                                                <tr key={hora}>
                                                    <td className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer text-gray-900">
                                                        {`${hora.substring(0, 2)}:${hora.substring(2, 4)}AM - ${hora.substring(0, 2)}:${hora.substring(2, 4)}AM`}
                                                    </td>
                                                    <td className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer text-gray-900">
                                                        {horarioCargado.data[`lunes${hora}`]}
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                                                        {horarioCargado.data[`martes${hora}`]}
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                                                        {horarioCargado.data[`miercoles${hora}`]}
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                                                        {horarioCargado.data[`jueves${hora}`]}
                                                    </td>
                                                    <td className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                                                        {horarioCargado.data[`viernes${hora}`]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p>No hay horario cargado</p>
                        </div>
                    )
                )}
            </div>
            <Footer />
        </div>
  )
}

export default Horario