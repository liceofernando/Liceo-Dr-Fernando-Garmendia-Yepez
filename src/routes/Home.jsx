import React from 'react'
import './Home.css';
import logo from '../ima/liceologo.webp';
import Footer from '../routes/Footer';
import Navbar from './Navbar';
import tecno from '../ima/tecno.jpg';
import mision from '../ima/mision.jpg';
import vision from '../ima/vision.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
<Navbar />
<section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Bienvenido al Liceo Bolivariano
            <br className="hidden lg:inline-block" /> Dr. Fernando Garmendia Yépez
          </h1>
          <p className="mb-8 leading-relaxed">
            Somos un liceo comprometido con la excelencia técnica y el cuidado integral de nuestros educandos. Ofrecemos un ambiente de aprendizaje enriquecedor y oportunidades para que los educandos alcancen su máximo potencial.
          </p>
          <div className="flex justify-center">
            <Link to="/reseña">
            <button className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none btn-more rounded text-lg" style={{}}>
              Conoce más
            </button>
            </Link>
            <Link to="/inscripciones">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Inscripciones
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center  rounded" alt="hero" src={logo} />
        </div>
      </div>
    </section>

    {/* mision */}
<section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-5">
          <img className="object-cover object-center rounded" alt="hero" src={mision} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center ml-5">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            Nuestra misión
          </h2>
          <p className="mb-8 leading-relaxed">
          Pretende la ejecución de un plan educativo viable y sustentable en concordancia con los lineamientos y política educativa nacionales adaptado a las necesidades de la comunidad brindando una formación y atención integral para mejorar y fortalecer la calidad de vida de la comunidad para el desarrollo endógeno local y regional, con una visión nacional consustanciada con valores de convivencia corresponsabilidad, equidad y justicia social.
          </p>
         
        </div>
      </div>
    </section>

    {/* vision */}
<section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            Nuestra visión
          </h2>
          <p className="mb-8 leading-relaxed">
          Egresar un ciudadano transformador y cooperativo, con valores capaz de construir una patria libre, soberana e independiente para establecer una sociedad democrática, participativa y protagónica; que consolide la paz, armonía, independencia, la solidaridad, el bien común, la integridad territorial y que pueda defenderse en el campo laboral con un oficio determinado, para su bien y su entorno. 
          </p>
         
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={vision} />
        </div>
      </div>
    </section>



    {/* programas */}
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Nuestro Programa</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Ofrecemos dos tipos de programas académicos para que nuestros estudiantes puedan desarrollar sus habilidades y alcanzar sus metas.
          </p>
        
        </div>
        <div className="flex flex-wrap -m-4">
        




  <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8 w-100">
      <div className="flex flex-wrap justify-center align-middle max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none w-100">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg card-style">
          <div className="flex-shrink-0">
            <img src={tecno} className="object-cover w-full h-48" alt="" />
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <div className="block mt-2">
                <p className="text-xl font-semibold nodeco no-underline text-neutral-600">Programa de Tecnología</p>
                <p className="mt-3 text-base no-underline text-gray-500">El programa tiene como objetivo ejecutar un plan educativo viable y sustentable, alineado con las políticas educativas nacionales y adaptado a las necesidades de la comunidad</p>
              </div>
            </div>
            <div className="flex items-center mt-6">
            
            </div>
          </div>
        </div>
      
    </div>
  </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Home