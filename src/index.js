import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Gestion from './routes/Gestion';
import Crud from './routes/Crud';
import Profesores from './routes/Profesor';
import HorarioTable from './routes/HorarioTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Home/Blog';
import Inicio from './routes/Inicio';
import Home from './routes/Home';
import Reseña from './routes/Reseña';
import Ubicacion from './routes/Ubicacion';
import DeberesDerechos from './routes/DeberesDerechos';
import ReglamentoEscolar from './routes/ReglamentoEscolar';
import EditarHorario from './routes/EditarHorario';
import Horarios from './routes/Horarios';
import Login from './routes/Login';
import Calendario from './routes/Calendario';
import GestionCalendario from './routes/GestionCalendario';
import Organigrama from './routes/Organigrama';
import Inscripciones from './routes/Inscripciones';
import GestionPreguntas from './routes/GestionPreguntas';
import PreguntasFrecuentes from './routes/PreguntasFrecuentes';
import GestionContactos from './routes/GestionContactos';
import Contacto from './routes/Contacto';

const isAuth = localStorage.getItem('token');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/gestion" element={isAuth ? <Gestion /> : <Navigate to="/login" />} />
      <Route path="/gestion/horario" element={isAuth ? <HorarioTable /> : <Navigate to="/login" />} />
      <Route path="/" element={<Home />} />
      <Route path="/horario" element={<Horarios />} />
      <Route path="/inscripciones" element={<Inscripciones />} />
      <Route path="/contactos" element={<Contacto />} />
      <Route path="/reseña" element={<Reseña />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/derechos-derechos" element={<DeberesDerechos />} />
      <Route path="/reglamento-escolar" element={<ReglamentoEscolar />} />
      <Route path="/edit-horario" element={<EditarHorario />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/gestion/calendario" element={isAuth ? <GestionCalendario /> : <Navigate to="/login" />} />
      <Route path="/gestion/contactos" element={isAuth ? <GestionContactos /> : <Navigate to="/login" />} />
      <Route path="/gestion/preguntas-frecuentes" element={isAuth ? <GestionPreguntas /> : <Navigate to="/login" />} />
      <Route path="/login" element={isAuth ? <Navigate to="/gestion" /> : <Login />} />
    </Routes>
  </BrowserRouter>
);
