import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Gestion = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem("token");
  
    // Actualizar la página
    window.location.reload();
  };
  

  return (
    <div>
       <div className="container max-w-3xl px-4 mx-auto sm:px-8 pt-5">
      <div className="py-8">
        
        <div className='card text-center '>
            <div className='card-body row p-5 d-flex justify-content-center align-items-center'>
             <h1 className='mb-5'>Gestion de la pagina</h1>
            <div className='d-flex justify-content-center flex-column gap-4 w-25 px-0'>
           <Link to="/edit-horario"> <button
                className="  w-100 rounded-lg bg-black px- py-3 font-medium text-white sm:w-auto"
                style={{maxWidth:'380px'}}
              >
                Modificar horario
              </button></Link>
           <Link to="/gestion/calendario"> <button
                className=" w-100  rounded-lg bg-black px- py-3 font-medium text-white sm:w-auto"
style={{maxWidth:'380px'}}
              >
                Modificar Calendario
              </button></Link>
           <Link to="/gestion/preguntas-frecuentes"> <button
                className=" w-100  rounded-lg bg-black px- py-3 font-medium text-white sm:w-auto"
style={{maxWidth:'380px'}}
              >
                Modificar Preguntas Frecuentes
              </button></Link>
           <Link to="/gestion/contactos"> <button
                className=" w-100  rounded-lg bg-black px- py-3 font-medium text-white sm:w-auto"
style={{maxWidth:'380px'}}
              >
                Modificar Contactos
              </button></Link>
            <button
            onClick={handleLogout}
            className="px-4 py-2 bg-danger  mr-2 text-white font-bold rounded hover:bg-blue-600 mb-10"
          >
            Cerrar Sección
          </button>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Gestion