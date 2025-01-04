import React from 'react'

const Crud = () => {
  return (
    <div>
          <h2>Agregar profes</h2>
            <form action="" id='form' >
            <div>
                <p>Nombre</p> 
                
                <input   name='nombre' id='nombre' type="text" autoFocus/>
            </div>

            <div>
                <p>materia</p> 
                <input  name='materia' id='materia' type="text" />
            </div>
            <div>
                <p>cedula</p> 
                <input  name='cedula' id='cedula' type="text" />
            </div>
            <button id='enviar'>enviar</button>
            </form>

    </div>
  )
}

export default Crud