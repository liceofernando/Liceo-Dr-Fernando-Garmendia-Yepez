import  { useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import './Modal.css'

const ModalCrearContacto = () => {
    
    const [profesor, setProfesor] = useState({
        dependencia: "",
        correo: ""
      });

      const nombreRef= useRef(null)
      const correoRef= useRef(null)
      const codigoMateria1Ref= useRef(null)
      const codigoMateria2Ref= useRef(null)
      const sobreMiRef= useRef(null)
      const rollRef= useRef(null)
      

    
  
      const registrarProfesor = async () => {
        console.log(profesor)
        if (!profesor.dependencia || !profesor.correo ){
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
                
                const response = await axios.post('http://localhost:5000/gestion/contacto/registrar', profesor).then(
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
          ...profesor,
          [event.target.name]: event.target.value,
        })
    }

  

    const borrarTexto = () => {
        if (nombreRef.current) {
            nombreRef.current.value = ""; // Asegúrate de que nombreRef no sea null
        }
    
        if (correoRef.current) {
            correoRef.current.value = ""; // Asegúrate de que sobreMiRef no sea null
        }
    };
    
      //Funcion para evitar que el form se envie y se colapse cuando se manda sin datos en los inputs
      const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se envíe el formulario
        // Aquí puedes agregar tu código para procesar los datos del formulario
      };


  return (
    <>
          <div className="w-full ">
        <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-center text-gray-500 mt-0 mb-2">Registrar Contacto</h3>
        <form onSubmit={handleSubmit} className="pl-8 pr-8">
            <div className="mb-2">
            <label htmlFor="dependencia" className="block  text-sm text-gray-600">
                Departamento
            </label>
            <input
            ref={nombreRef}
                onChange={handleInputChange}
                type="text" autoFocus
                id="dependencia"
                name="dependencia"
                className="class-input text-sm w-full px-4 py-1 border  rounded-lg focus:border-cyan-500"
            />
            </div>
    
   
            <div>
            <label htmlFor="correo" className="block text-sm text-gray-600">
                Correo
            </label>
            <input
                ref={correoRef}
                onChange={handleInputChange}
                type="text"
                id="correo"
                name="correo"
                className="class-input text-sm w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            </div>
         
            <button
            onClick={registrarProfesor}
            className=" mt-4 w-32 bg-gradient-to-r bg-black hover:bg-gray-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-2 "
            >
            Registro
            </button>
        </form>
        </div>
        </div>
    </>
  )
}

export default ModalCrearContacto