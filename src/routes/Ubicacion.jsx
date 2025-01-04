import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Ubicacion.css'
import mapa from '../ima/mapa-liceo.png'
const Ubicacion = () => {

// <img src={mapa} className='mx-2 mt-4 mb-10 w-3/4 mapa'  alt="ubicacion" />

  return (
    <div>
        <Navbar />
        <div className='container altura'>
            <h1 className='font-roboto text-center pt-10 text-5xl font-bold text-gray-800 my-5'>Ubicación Geográfica</h1>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>El Liceo Bolivariano "Dr. Fernando Garmendía Yépez", está ubicado al Suroeste de El Tocuyo, Parroquia Bolívar, Municipio Morán en la Avenida Principal con calle 1 de la Urbanización Nubia, teniendo las siguientes coordenadas:</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>190412,799 UTM del Ecuador Terrestre y 1,083,089 UTM al Meridiano de Greenwinch y es equivalente a la latitud de 09° 47' 50" norte y la longitud de 69° 47' 43" Oeste, con una altitud de 607metros sobre el nivel del mar.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Su codificación es (11) 007912823, código $1329D1305, nace con el nombre de Ciclo Básico El Tocuyo el cuatro (04) de Noviembre del año mil novecientos setenta y cuatro (1974), en los terrenos adyacentes al 134 Grupo de Artillería de Campaña "Cruz Carrillo". Con diez secciones de primer año y dos de segundo año, la institución cuenta para ese momento con treinta (30) Profesores.</p>
            <div className='flex justify-center my-10'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.636930086264!2d-69.79855788860212!3d9.796755990258083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7d70911ef4f953%3A0xf793d9ecb71d942f!2sLiceo%20Bolivariano%20Fernando%20Garmendia%20Yepez!5e0!3m2!1ses!2sve!4v1726446155191!5m2!1ses!2sve" width="800" height="600" style={{border:0, margin:0, padding:0,}} allowfullscreen="" loading="lazy" className='rounded'></iframe>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Ubicacion