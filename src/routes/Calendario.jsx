import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";
import 'dayjs/locale/es'; // Importa el locale en español
import axios from 'axios'; // Importa axios
import './Calendario.css';
import Navbar from './Navbar'
import Footer from './Footer'

// Configuración del localizador
dayjs.locale('es'); // Establece el locale a español
const localizer = dayjsLocalizer(dayjs);

const Calendario = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // Estado para controlar la visibilidad
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/calendario/get-events');
        const formattedEvents = response.data.map(event => ({
          id: event.id,
          title: event.title,
          description: event.description,
          start: new Date(event.start.seconds * 1000), // Convertir a milisegundos
          end: new Date(event.end.seconds * 1000)      // Convertir a milisegundos
        }));
        console.log('Eventos formateados:', formattedEvents); // Verifica el formato
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };
  
    fetchEvents();
  }, []);
  
  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Dia',
    list: 'Lista',
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowDetails(true); // Muestra la tarjeta de detalles
  };

  const handleSelectSlot = () => {
    // No hacer nada al seleccionar un día
  };

  const handleClose = () => {
    setShowDetails(false); // Cierra la tarjeta
    setSelectedEvent(null); // Resetea el evento seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Si la fecha de fin está vacía, establecerla como el día siguiente de la fecha de inicio
    const end = endDate ? dayjs(endDate).endOf('day').toDate() : dayjs(startDate).add(1, 'day').toDate();

    const newEvent = {
      start: dayjs(startDate).toDate(),
      end: end,
      title,
      description,
    };

    try {
      // Guardar el evento en la base de datos
      await axios.post('http://localhost:5000/calendario/save', newEvent); // Cambia la URL según tu API
      setEvents([...events, newEvent]); // Agrega el nuevo evento al estado
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error('Error al guardar el evento:', error);
    }
  };

  return (
    <div className="">

      <Navbar />
      <div className="container d-flex flex-column  justify-content-center align-items-center">
        <div className="text-center"    >
        <h1 className='font-roboto text-center pt-10 text-5xl font-bold text-gray-800 my-5'>Calendario de actividades</h1>
        <h3 className="pb-3">Aquí puedes ver todas las actividades.</h3></div>
        <Calendar 
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: '80%' }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable={true}
          defaultView="month"
          messages={messages}
        />
      </div>
      <div className="container d-flex justify-content-center my-4" style={{minHeight: '300px'}}>
        {showDetails && selectedEvent && (
          <div className="" style={{ maxWidth: '500px' }}>
         
            <a
 
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-300 via-blue-500 to-red-600"
  ></span>

  <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
      {selectedEvent.title}
      </h3>
    </div>
    <button onClick={handleClose} style={{ float: 'right', border: 'none', background: 'none', cursor: 'pointer' }}>
                <span style={{ fontSize: '20px', color: 'red' }}>X</span>
              </button>
  </div>

  <div class="mt-4">
    <p class="text-pretty text-sm text-gray-500">
    {selectedEvent.description}
    </p>
  </div>

  <dl class="mt-6 flex gap-4 sm:gap-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Fecha de inicio</dt>
      <dd class="text-xs text-gray-500"> {dayjs(selectedEvent.start).format('DD/MM/YYYY HH:mm')}</dd>
    </div>

    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Fecha de fin</dt>
      <dd class="text-xs text-gray-500">{dayjs(selectedEvent.end).format('DD/MM/YYYY HH:mm')}</dd>
    </div>
  </dl>
</a>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default Calendario;
