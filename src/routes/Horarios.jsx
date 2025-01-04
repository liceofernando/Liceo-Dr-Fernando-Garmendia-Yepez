import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Horarios = () => {
  const [horario, setHorario] = useState({
    lunes700AM: '',
    lunes745AM: '',
    lunes830AM: '',
    lunes915AM: '',
    lunes1000AM: '',
    lunes1045AM: '',
    lunes1130AM: '',
    martes700AM: '',
    martes745AM: '',
    martes830AM: '',
    martes915AM: '',
    martes1000AM: '',
    martes1045AM: '',
    martes1130AM: '',
    miercoles700AM: '',
    miercoles745AM: '',
    miercoles830AM: '',
    miercoles915AM: '',
    miercoles1000AM: '',
    miercoles1045AM: '',
    miercoles1130AM: '',
    jueves700AM: '',
    jueves745AM: '',
    jueves830AM: '',
    jueves915AM: '',
    jueves1000AM: '',
    jueves1045AM: '',
    jueves1130AM: '',
    viernes700AM: '',
    viernes745AM: '',
    viernes830AM: '',
    viernes915AM: '',
    viernes1000AM: '',
    viernes1045AM: '',
    viernes1130AM: '',
  });
  
  const [añoSeleccionado, setAñoSeleccionado] = useState('1er');
  const [seccionSeleccionada, setSeccionSeleccionada] = useState('a');
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setHorario({
      ...horario,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
    const cargarHorario = async () => {
      setCargando(true);
      try {
        const response = await axios.get(`http://localhost:5000/horarios/update/${añoSeleccionado}/${seccionSeleccionada}`);
        const data = response.data;

        // Asegúrate de que todos los campos estén presentes
        const horarioCompleto = {
          lunes700AM: data.data.lunes700AM || '',
          lunes745AM: data.data.lunes745AM || '',
          lunes830AM: data.data.lunes830AM || '',
          lunes915AM: data.data.lunes915AM || '',
          lunes1000AM: data.data.lunes1000AM || '',
          lunes1045AM: data.data.lunes1045AM || '',
          lunes1130AM: data.data.lunes1130AM || '',
          martes700AM: data.data.martes700AM || '',
          martes745AM: data.data.martes745AM || '',
          martes830AM: data.data.martes830AM || '',
          martes915AM: data.data.martes915AM || '',
          martes1000AM: data.data.martes1000AM || '',
          martes1045AM: data.data.martes1045AM || '',
          martes1130AM: data.data.martes1130AM || '',
          miercoles700AM: data.data.miercoles700AM || '',
          miercoles745AM: data.data.miercoles745AM || '',
          miercoles830AM: data.data.miercoles830AM || '',
          miercoles915AM: data.data.miercoles915AM || '',
          miercoles1000AM: data.data.miercoles1000AM || '',
          miercoles1045AM: data.data.miercoles1045AM || '',
          miercoles1130AM: data.data.miercoles1130AM || '',
          jueves700AM: data.data.jueves700AM || '',
          jueves745AM: data.data.jueves745AM || '',
          jueves830AM: data.data.jueves830AM || '',
          jueves915AM: data.data.jueves915AM || '',
          jueves1000AM: data.data.jueves1000AM || '',
          jueves1045AM: data.data.jueves1045AM || '',
          jueves1130AM: data.data.jueves1130AM || '',
          viernes700AM: data.data.viernes700AM || '',
          viernes745AM: data.data.viernes745AM || '',
          viernes830AM: data.data.viernes830AM || '',
          viernes915AM: data.data.viernes915AM || '',
          viernes1000AM: data.data.viernes1000AM || '',
          viernes1045AM: data.data.viernes1045AM || '',
          viernes1130AM: data.data.viernes1130AM || '',
        };
        
    
        setHorario(horarioCompleto);
        console.log('Horario cargado:', response.data);
        console.log('Horario cargado:', response.data.data.lunes700);
        console.log('Horario cargado:', horarioCompleto);
         
      } catch (error) {
        console.error('Error al cargar el horario:', error);
      } finally {
        setCargando(false);
      }
    };
  
    cargarHorario();
  }, [añoSeleccionado, seccionSeleccionada]);
  
  return (
    <div className="">
      <Navbar />
      <div className="container">
      <h1 className="mt-10 font-bold text-center">Horario</h1>
      <h2 className="text-x2 mb-10 text-center">Aquí puedes ver tu horario de clases.</h2>
        <div className="flex justify-center">
          <p>Selecciona el año</p>
        </div>
        <div className="flex justify-center p-1 mx-2 my-4 rounded space-x-1">
          {['1er', '2do', '3er', '4to', '5to'].map((año) => (
            <button
              key={año}
              onClick={() => setAñoSeleccionado(año)}
              className={`px-4 py-2 text-gray-800 rounded border-2 text-lg font-medium ${
                añoSeleccionado === año ? 'bg-white border-gray-300' : 'bg-gray-300 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {año} Año
            </button>
          ))}
        </div>

        <div className=''>

          <div className="flex justify-center">
           <p>Selecciona la sección</p>
          </div>
        <div className="flex justify-center  space-x-1">
        <div className="inline-flex p-1 mx-2 mb-4 rounded space-x-1 bg-gray-300 ">
          <button
            onClick={() => setSeccionSeleccionada('a')}
            className={`px-4 py-2 text-gray-800 rounded ${
              seccionSeleccionada === 'a' ? 'bg-white' : 'bg-gray-300 hover:bg-gray-200'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setSeccionSeleccionada('b')}
            className={`px-4 py-2 text-gray-800 rounded ${
              seccionSeleccionada === 'b' ? 'bg-white' : 'bg-gray-300 hover:bg-gray-200'
            }`}
          >
            B
          </button>
          <button
            onClick={() => setSeccionSeleccionada('c')}
            className={`px-4 py-2 text-gray-800 rounded ${
              seccionSeleccionada === 'c' ? 'bg-white' : 'bg-gray-300 hover:bg-gray-200'
            }`}
          >
            C
          </button>
          <button
            onClick={() => setSeccionSeleccionada('d')}
            className={`px-4 py-2 text-gray-800 rounded ${
              seccionSeleccionada === 'd' ? 'bg-white' : 'bg-gray-300 hover:bg-gray-200'
            }`}
          >
            D
          </button>
          <button
            onClick={() => setSeccionSeleccionada('e')}
            className={`px-4 py-2 text-gray-800 rounded ${
              seccionSeleccionada === 'e' ? 'bg-white' : 'bg-gray-300 hover:bg-gray-200'
            }`}
          >
            E
          </button>
        </div>
        </div>
</div>

        <div className="w-full flex justify-center mb-4">
          <div className="rounded-md border border-gray-200 overflow-auto mb-8 w-[850px]">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr className="text-base">
                  <th className="pr-1 pl-4 py-2 font-medium text-gray-900" style={{ width: '180px' }}>Hora</th>
                  <th className="px-2 py-2 font-medium text-gray-900">Lunes</th>
                  <th className="px-2 py-2 font-medium text-gray-900">Martes</th>
                  <th className="px-2 py-2 font-medium text-gray-900">Miércoles</th>
                  <th className="px-2 py-2 font-medium text-gray-900">Jueves</th>
                  <th className="px-2 py-2 font-medium text-gray-900">Viernes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { inicio: '7:00AM', fin: '7:45AM' },
                  { inicio: '7:45AM', fin: '8:30AM' },
                  { inicio: '8:30AM', fin: '9:15AM' },
                  { inicio: '9:15AM', fin: '10:00AM' },
                  { inicio: '10:00AM', fin: '10:45AM' },
                  { inicio: '10:45AM', fin: '11:30AM' },
                  { inicio: '11:30AM', fin: '12:15PM' }
                ].map((hora, index) => (
                  <tr key={index}>
                    <td className="pr-1 pl-4 py-1 text-gray-900">{`${hora.inicio} - ${hora.fin}`}</td>
                    <td>
                       {horario[`lunes${hora.inicio.replace(':', '')}`]}
                    </td>
                    <td>
                      {horario[`martes${hora.inicio.replace(':', '')}`]}
                    </td>
                    <td>
                      {horario[`miercoles${hora.inicio.replace(':', '')}`]}
                    </td>
                    <td
                    >
                      {horario[`jueves${hora.inicio.replace(':', '')}`]}
                    </td>
                    <td>
                      {horario[`viernes${hora.inicio.replace(':', '')}`]}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
          <p className="mb-2 text-lg text-justify">
          En esta sección de horarios académicos del liceo. Aquí podrás encontrar toda la información necesaria sobre los horarios de clases, organizados por año y sección. Nuestro objetivo es facilitar a los estudiantes y sus familias el acceso a la programación escolar, asegurando que estén siempre informados sobre las actividades diarias.
          </p>
          <p className="mb-2 text-lg text-justify">Selecciona el año y la sección correspondiente para visualizar el horario específico. Cada horario incluye detalles sobre las asignaturas, los días de la semana y los horarios de inicio y finalización de las clases. Mantente al día con tus actividades académicas y planifica tu tiempo de manera efectiva.</p>
          <p className="mb-5 text-lg text-justify">Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con la administración del liceo.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Horarios;
