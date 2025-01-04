import React from 'react'
import { Card } from 'react-bootstrap';

function ChooseEle() {
  return (
    <div>
    <div className="container">
        <h2 className='text-center mb-5'>Porque Elegir Nuestra Unidad Educativa ?</h2>
        <div className='row g-4'>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <div className='mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-bullseye" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center text-capitalize mb-3'>
                         Misión
                        </Card.Title>
                        <Card.Text className='text-center'>
                        Pretende la ejecución de un plan educativo viable y sustentable en concordancia con los
                        lineamientos y política educativa nacionales adaptado a las necesidades de la comunidad
                        brindando una formación y atención integral para mejorar y fortalecer la calidad de vida de
                        la comunidad para el desarrollo endógeno local y regional, con una visión nacional
                        consustanciada con valores de convivencia corresponsabilidad, equidad y justicia social.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <div className='mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                   </svg>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center text-capitalize mb-3'>
                           Visión
                        </Card.Title>
                        <Card.Text className='text-center'>
                        Egresar un ciudadano transformador y cooperativo, con valores capaz de construir una
                        patria libre, soberana e independiente para establecer una sociedad democrática,
                        participativa y protagónica; que consolide la paz, armonía, independencia, la solidaridad, el
                        bien común, la integridad territorial y que pueda defenderse en el campo laboral con un
                        oficio determinado, para su bien y su entorno.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <div className='mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-book-fill" viewBox="0 0 16 16">
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center text-capitalize mb-3'>
                            Reseña Historica
                        </Card.Title>
                        <Card.Text className='text-center'>
                        El día diez (10) de Octubre del año mil novecientos setenta y siete (1977), comienzan las
                        clases en la sede actual con una edificación de 19 aulas, 3 laboratorios de ciencias, 5
                        Laboratorio de educación para el Trabajo, 2 baterias de baño, 1 dirección, 2 subdirecciones,5 seccionales, 2 coordinaciones, 5 pasillos y 8 jardines internos, además posee un anexo donde funcionan dos laboratorios para Educación para el Trabajo
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
</div>
  )
}

export default ChooseEle