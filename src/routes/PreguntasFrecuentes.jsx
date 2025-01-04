import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Ubicacion.css'
import { useState, useEffect } from "react"
import axios from 'axios'

const PublicPregunetasFrecuentes = () => {
 

  const [openIndex, setOpenIndex] = useState(null);
  const [profesores, setProfesores] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    const fetchProfesores = async () => {
        try {
            const response = await axios.get('https://backend-liceo.onrender.com/gestion/preguntas-frecuentes/');
            setProfesores(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error al obtener los profesores:', error);
        }
    };

    fetchProfesores();
  }, []);
  console.log(profesores)


  return (
    <>
        <Navbar />
      <div id="inicio" className="container altura">
       
        <div className="contenido mb-8">
          <section className="section-profesores">
          <h1 className='font-roboto text-center pt-10 text-5xl font-bold text-gray-800 my-5'>Preguntas Frecuentes</h1>
            <p className="text-center text-gray-600 mb-8 px-8">
    A continuación, se presentan algunas de las preguntas más comunes que tienen los estudiantes y futuros estudiantes de la universidad, junto con sus respuestas. Estas preguntas abarcan diversos temas, desde el proceso de admisión y las opciones de alojamiento, hasta los recursos disponibles para el apoyo académico y la salud mental. Nuestro objetivo es proporcionar información clara y útil para ayudarte a tomar decisiones informadas durante tu trayectoria académica. Si tienes más preguntas o necesitas información adicional, no dudes en contactar a las áreas correspondientes de la universidad.
</p>

            <div className="max-w-3xl mx-auto">
              {profesores.map((contacto, index) => (
                <div key={contacto.id} className="mb-2">
                  {/* Header del Acordeón */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-4 py-2  text-white font-semibold rounded-t-lg flex justify-between items-center text-lg"
                    style={{ backgroundColor: "#6f2c3e" }}
                  >
                    <span>{contacto.data.pregunta}</span>
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>

                  {/* Contenido del Acordeón */}
                  {openIndex === index && (
                    <div className="px-4 py-2  text-gray-700 rounded-b-lg"
                    style={{ backgroundColor: "#f2f3f4" }}
                    >
                      <p>{contacto.data.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default PublicPregunetasFrecuentes;
