import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Ubicacion.css'

const Reseña = () => {

/*
    <div>
            <h2>DEL PROFESOR GUÍA: DEBERES Y ATRIBUCIONES            </h2>
            <p>Artículo 14.- El docente que ejerce las funciones de guía de una sección deberá:</p>
            <h3>PARA CON LOS ALUMNOS</h3>
            <p>a.- Contribuir a desarrollar en los alumnos hábitos de convivencia, orden, respeto, pulcritud, control emocional, colaboración con el grupo y cualquier otra cualidad o virtud que eleve su personalidad y desarrollo formativo.</p>
            <p>b.- Estudiar las deficiencias que se evidencien en el rendimiento escolar de los estudiantes bajo su guía, con el fin de intentar elevar dicho rendimiento a niveles apropiados.</p>
            <p>c.- Supervisar constantemente el desempeño de la sección a fin de coordinar junto con el Departamento de orientación los correctivos o acciones a emprender con el propósito de mejorar dicho desempeño.</p>
            <p>d.- Entrevistarse individualmente con los alumnos de su sección que ameriten atención especial. e.- Dar a conocer en su sección asignada el proyecto educativo y reglamento interno del plantel.</p>
            <p>d.- Entrevistarse individualmente con los alumnos de su sección que ameriten atención especial. e.- Dar a conocer en su sección asignada el proyecto educativo y reglamento interno del plantel.</p>
            <p>9.- Dedicar, al menos, una hora mensual a ejercer funciones de guía e interactuar con los alumnos de la sección que representa.</p>
            
        </div>
*/

  return (
    <div>
        <Navbar />
        <div className='container altura'>
            <h1 className='font-roboto text-center pt-10 text-5xl font-bold text-gray-800 my-5'>Reseña histórica de la Institución</h1>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>El día diez (10) de Octubre del año mil novecientos setenta y siete (1977), comienzan las clases en la sede actual con una edificación de 19 aulas, 3 laboratorios de ciencias, 5 Laboratorio de educación para el Trabajo, 2 baterias de baño, 1 dirección, 2 subdirecciones, 5 seccionales, 2 coordinaciones, 5 pasillos y 8 jardines internos, además posee un anexo donde funcionan dos laboratorios para Educación para el Trabajo.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Para el año escolar 1987-1988 se realiza la creación del primer año de Ciencias, convirtiéndose en Ciclo Diversificado, un año después se logra por prosecución la creación de dos secciones de segundo año de Ciencias. Para el año escolar 1989-1990, se crea un primer año de Humanidades.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>A partir del año escolar 2005-2006, se obtuvo la denominación de Liceo Bolivariano "Dr. Fernando Garmendia Yépez", espacio para la producción y la productividad en donde se fortalece el valor de él trabajo con la filosofía de "Aprender haciendo y enseñar produciendo" enmarcado en el desarrollo de los valores de Paz, Tolerancia, diálogo, convivencia, solidaridad, dentro de la institución y su entorno.</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>Así mismo se integra a la comunidad en los procesos pedagógicos para la formación integral, en este mismo año escolar se reciben los equipos y materiales para el Laboratorio de Desarrollo Endógeno e iniciando sus funciones en el próximo año escolar (2006-2007).</p>
            <p className='font-roboto text-lg leading-6 text-gray-600 my-2 text-justify px-2'>En el año 2007 comienza a funcionar el Centro Bolivariano de Informática y Telemática (CBIT) y el Centro de Recursos para el Aprendizaje (CRA).</p>
         
        </div>

        
        <Footer />
    </div>
  )
}

export default Reseña