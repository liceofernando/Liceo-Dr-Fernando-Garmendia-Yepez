import  { useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import './Modal.css'

const ModalCrearPreguntaFrecuente = () => {
    
    const [profesorCrear, setProfesor] = useState({
        pregunta: "",
        respuesta: ""
      });

      const nombreRef= useRef(null)
      const correoRef= useRef(null)
      const codigoMateria1Ref= useRef(null)
      const codigoMateria2Ref= useRef(null)
      const sobreMiRef= useRef(null)
      const rollRef= useRef(null)
      

    
  
      const registrarProfesor = async () => {
        console.log(profesorCrear)
        if (!profesorCrear.pregunta || !profesorCrear.respuesta ){
            Swal.fire({
                title: "Campos incompletos",
                text: "Por favor llene todos los campos",
                icon: "warning",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
                customClass: {
                  container: 'custom-swal-container' // Agrega una clase personalizada al contenedor de la alerta
                }
              });
        }else{
            try {
                
                const response = await axios.post('http://localhost:5000/gestion/preguntas-frecuentes/registrar', profesorCrear).then(
                    Swal.fire({
                        title: "Registrado",
                        text: "Profesor registrado con exito",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ok",
                        customClass: {
                          container: 'custom-swal-container' // Agrega una clase personalizada al contenedor de la alerta
                        }
                      }).then((result) => {
                        if (result.isConfirmed) {
                          borrarTexto();
                        }
                      })
                )
              console.log("Personal registrado:", response.data);
            } catch (error) {
              console.error('Error al registrar personal:', error);
            }
        }
      }

    const handleInputChange = (event) => {
        setProfesor({
          ...profesorCrear,
          [event.target.name]: event.target.value,
        })
    }

  

    function borrarTexto() {
        setProfesor({
            pregunta: "",
            respuesta: ""
        });
    
        if (nombreRef.current) {
            nombreRef.current.value = "";
        }
    
        if (sobreMiRef.current) {
            sobreMiRef.current.value = "";
        }
    }
    

      //Funcion para evitar que el form se envie y se colapse cuando se manda sin datos en los inputs
      const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se envíe el formulario
        // Aquí puedes agregar tu código para procesar los datos del formulario
      };


  return (
    <>
          <div className="w-full ">
        <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-center text-gray-500 mt-0 mb-2">Registrar Pregunta Frecuente</h3>
        <form onSubmit={handleSubmit} className="pl-8 pr-8">
            <div className="mb-2">
            <label htmlFor="pregunta" className="block  text-sm text-gray-600">
                Pregunta
            </label>
            <input
    ref={nombreRef}
    onChange={handleInputChange}
    type="text" 
    autoFocus
    id="pregunta"
    name="pregunta"
    className="class-input text-sm w-full px-4 py-1 border border-black rounded-lg focus:border-black"
/>
            </div>
    
   
            <div>
            <label htmlFor="respuesta" className="block text-sm text-gray-600">
                Respuesta
            </label>
            <textarea
    ref={sobreMiRef}
    onChange={handleInputChange}
    style={{ height: "300px" }}
    id="respuesta"
    name="respuesta"
    className="class-input text-sm w-full px-2 py-1 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500  focus:border-black"
/>
            </div>
         
            <button
            onClick={registrarProfesor}
            className=" w-32 bg-gradient-to-r bg-black hover:bg-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-2 "
            >
            Registro
            </button>
        </form>
        </div>
        </div>
    </>
  )
}

export default ModalCrearPreguntaFrecuente