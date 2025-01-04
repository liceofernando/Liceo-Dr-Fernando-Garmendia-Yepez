import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import ChooseEle from './ChooseEle';
import StartCoursesImg from './../../ima/4.jpg'
import FaqAcc from '../Faq/FaqAcc';
import { Card } from 'react-bootstrap';
import Blog1Img from './../../ima/5.jpg';
import Blog2Img from './../../ima/6.jpg';
import Blog3Img from './../../ima/7.jpg';
import Blog4Img from './../../ima/7.jpg';
import Blog5Img from './../../ima/7.jpg';

const blogs = [
  {
      id: 1,
      img: [Blog1Img],
      title: 'Horarios 1° Año',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
  },
  {
      id: 2,
      img: [Blog2Img],
      title: 'Horarios 2° Año',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
  },
  {
      id: 3,
      img: [Blog3Img],
      title: 'Horarios 3° Año',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
  },
  {
    id: 4,
    img: [Blog3Img],
    title: 'Horarios 4° Año',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
}, {
    id: 5,
    img: [Blog3Img],
    title: 'Horarios 5° Año',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
}
];

function Home() {
  return (
    <div className='home-page'>
     <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
     <div className='container d-flex flex-column align-items-center'>
     <h2>Bienvenido</h2>
     <h1 className='text-center fw-semibold'>Liceo Bolivariano Dr Fernando Garmendia Yepez</h1>
     <div className='d-flex flex-column flex-sm-row align-items-center'>
      <Link to="/crud">
       <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Registrarse</button>
      </Link>
      <Link to="/gestion">
         <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Manager</button>
      </Link>
     </div>
     </div>
     </header>
     <div className="py-5">
      <ChooseEle />
     </div>

     <div className='py-5 bg-light'>
      <div className="container">
        <div className='row d-flex align-items-center justify-content-around'>
          <div className='col-lg-5'>
          <h2 className='text-capitalize'>2024 Inscripciones septiembre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
          <Link to="/">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Mas Inf+</button>
          </Link>

          </div>
           <div className='col-lg-5 mt-5 mt-lg-0'>
           <img src={StartCoursesImg} className='img-fluid' alt="" />

           </div>
        </div>
        </div>
     </div>
     <div className="py-5">
      <FaqAcc />
     </div>
     <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Horarios</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/Blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Mas</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home