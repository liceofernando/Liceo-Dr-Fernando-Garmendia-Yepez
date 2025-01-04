import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";
import 'dayjs/locale/es'; // Importa el locale en español
import axios from 'axios'; // Importa axios
import './Calendario.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert2

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
    
    const end = endDate ? dayjs(endDate).endOf('day').toDate() : dayjs(startDate).add(1, 'day').toDate();

    const newEvent = {
      start: dayjs(startDate).toDate(),
      end: end,
      title,
      description,
    };

    try {
      await axios.post('http://localhost:5000/calendario/save', newEvent);
      setEvents([...events, newEvent]);
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error('Error al guardar el evento:', error);
    }
  };

  const handleDelete = async () => {
    const { value: confirm } = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás recuperar este evento!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar'
    });

    if (confirm) {
      try {
        await axios.delete(`http://localhost:5000/calendario/delete/${selectedEvent.id}`); // Cambia la URL según tu API
        setEvents(events.filter(event => event.id !== selectedEvent.id)); // Elimina el evento del estado
        handleClose(); // Cierra la tarjeta
        Swal.fire('Eliminado!', 'Tu evento ha sido eliminado.', 'success');
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
        Swal.fire('Error!', 'No se pudo eliminar el evento.', 'error');
      }
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="container py-5 d-flex justify-content-center">
        <Calendar 
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: 500 }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable={true}
          defaultView="month"
          messages={messages}
        />
      </div>
      <div className="container d-flex justify-content-center my-4">
        {showDetails && selectedEvent && (
          <div className="card" style={{ maxWidth: '500px' }}>
            <a
              href="#"
              className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-300 via-blue-500 to-red-600"></span>
              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {selectedEvent.title}
                  </h3>
                </div>
                <button onClick={handleClose} style={{ float: 'right', border: 'none', background: 'none', cursor: 'pointer' }}>
                  <span style={{ fontSize: '20px', color: 'red' }}>X</span>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-pretty text-sm text-gray-500">
                  {selectedEvent.description}
                </p>
              </div>
              <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">Fecha de inicio</dt>
                  <dd className="text-xs text-gray-500"> {dayjs(selectedEvent.start).format('DD/MM/YYYY HH:mm')}</dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">Fecha de fin</dt>
                  <dd className="text-xs text-gray-500">{dayjs(selectedEvent.end).format('DD/MM/YYYY HH:mm')}</dd>
                </div>
              </dl>
              <button onClick={handleDelete} className="mt-4 w-full rounded-lg bg-red-500 text-white py-2">
                Eliminar Evento
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="container d-flex justify-content-center my-5">
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="#" className="space-y-4">
            <h3 className="text-center">Añadir Evento</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="">Título del evento</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-1"
                  type="text"
                  placeholder="Título" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required
                />
              </div>
              <div>
                <label htmlFor="">Descripción del evento</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-1"
                  type="text"
                  placeholder="Descripción"
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required
                />
              </div>
              <div>
                <label htmlFor="">Fecha de Inicio</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-1"
                  type="date"
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)} 
                  required
                />
              </div>
              <div>
                <label htmlFor="">Fecha de Fin</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-1"
                  type="date" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)} 
                />
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <Link to="/gestion"><button
                className="w-full rounded-lg bg-danger px-5 py-3 mr-2 font-medium text-white sm:w-auto"
              >
                Atrás
              </button></Link>
              <button
                className="w-full rounded-lg bg-black px-5 py-3 ml-2 font-medium text-white sm:w-auto"
                onClick={handleSubmit}
              >
                Añadir
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calendario;
