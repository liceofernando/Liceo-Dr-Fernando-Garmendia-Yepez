import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Ubicacion.css'

const Inscripciones = () => {


  return (
    <div>
        <Navbar />
        <div className='container altura'>
            <h1 className='font-roboto text-center pt-10 text-5xl font-bold text-gray-800 my-5'>Inscripciones</h1>
            <h3>En esta sección encontrarás los requisitos necesarios para que los alumnos se inscriban en nuestro liceo. Asegúrate de revisar cada uno de ellos para facilitar tu proceso de inscripción. ¡Estamos aquí para ayudarte en cada paso del camino!</h3>
            <h2 className='mt-5 mb-3'>Requisitos de Inscripción:</h2>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Planilla de inscripción, ficha acumulativa.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Carpeta marrón oficio.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Constancia de promoción.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Partida de nacimiento del estudiante (original y dos copias).</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Cuatro copias ampliadas de C.I. del estudiante.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Dos copias ampliadas de C.I. del representante.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Cuatro fotos tipo carnet del estudiante actualizada.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Dos fotos tipo carnet del representante.</p>
        </div>

        
        <Footer />
    </div>
  )
}

export default Inscripciones