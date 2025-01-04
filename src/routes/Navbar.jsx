import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import owl from '../ima/buho2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-gray-800" style={{ background: '#6F2C3E' }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img className="h-8 w-auto" src={owl} alt="" style={{minWidth:'30px'}}/>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center mb-0 gap-6 text-base text-center">
                  <li>
                    <Link to="/" className="text-white transition no-underline"> Inicio </Link>
                  </li>
                  <li>
                    <Link to="/horario" className="text-white transition no-underline"> Horarios </Link>
                  </li>
                  <li>
                    <Link to="/calendario" className="text-white transition no-underline"> Calendario </Link>
                  </li>
                  <li>
                    <Link to="/reseña" className="text-white transition no-underline"> Reseña Histórica </Link>
                  </li>
                  <li>
                    <Link to="/reglamento-escolar" className="text-white transition no-underline"> Reglamento Escolar </Link>
                  </li>
                  <li>
                    <Link to="/preguntas-frecuentes" className="text-white transition no-underline"> Preguntas Frecuentes </Link>
                  </li>
                  <li>
                    <Link to="/derechos-derechos" className="text-white transition no-underline"> Deberes y Derechos del Estudiante </Link>
                  </li>
                  <li>
                    <Link to="/ubicacion" className="text-white transition no-underline"> Ubicación </Link>
                  </li>
                  <li>
                    <Link to="/contactos" className="text-white transition no-underline"> Contactos </Link>
                  </li>
                </ul>
              </nav>

              {/* Menú hamburguesa para pantallas pequeñas */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  {/* Ícono de hamburguesa */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable */}
        {isMenuOpen && (
          <nav className="md:hidden" style={{ background: '#e5e7eb' }}>
            <ul className="flex flex-col items-center   text-white">
              <li>
                <Link to="/" className="block py-2 text-decoration-none text-black"> Inicio </Link>
              </li>
              <li>
                <Link to="/horario" className="block py-2 text-decoration-none text-black"> Horarios </Link>
              </li>
              <li>
                <Link to="/calendario" className="block py-2 text-decoration-none text-black"> Calendario </Link>
              </li>
              <li>
                <Link to="/reseña" className="block py-2 text-decoration-none text-black"> Reseña Histórica </Link>
              </li>
              <li>
                <Link to="/reglamento-escolar" className="block py-2 text-decoration-none text-black"> Reglamento Escolar </Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="block py-2 text-decoration-none text-black"> Preguntas Frecuentes </Link>
              </li>
              <li>
                <Link to="/derechos-derechos" className="block py-2 text-decoration-none text-black"> Deberes y Derechos del Estudiante </Link>
              </li>
              <li>
                <Link to="/ubicacion" className="block py-2 text-decoration-none text-black"> Ubicación </Link>
              </li>
              <li>
                <Link to="/contactos" className="block py-2 text-decoration-none text-black"> Contactos </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
