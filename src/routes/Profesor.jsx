import  { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {useDropzone} from 'react-dropzone'
import './Profesor.css'

const Profesores = () => {

    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const edadInput = document.getElementById("edad");
    const materiaInput = document.getElementById("materia");
    const cedulaInput = document.getElementById("cedula");
    const idInput = document.getElementById("id");

    const [profesores, setProfesores] = useState([]);
    const [profesor, setProfesor] = useState({
        nombre: '',
        correo: '',
        edad: '',
        materia: '',
        cedula: '',
      });
      const [profesorIdBuscado, setProfesorIdBuscado] = useState('');

      const [img, setImg] = useState(null);
      const [errorMsg, setErrorMsg] = useState(''); 

      const onDrop = useCallback(acceptedFiles => {
        const acceptedFileTypes = ['image/jpeg', 'image/png', 'image/webp'];
      const isImage = acceptedFiles.every((file) => acceptedFileTypes.includes(file.type));

      if (!isImage) {
        setErrorMsg('Solo se aceptan archivos de imagen (JPEG, PNG, WEBP)');
        return;
      }
      if (acceptedFiles.length > 1) {
        setErrorMsg('Solo se puede enviar una imagen a la vez.');
        return;
      }
        console.log(acceptedFiles[0])
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        accept: {
          'image/*': ['.jpeg', '.jpg', '.png', '.webp'], // Accepted image extensions
        },
      });
    

      const handleInputChange = (event) => {
        setProfesor({
          ...profesor,
          [event.target.name]: event.target.value,
        })
    }


    useEffect(() => {
        const fetchProfesores = async () => {
            try {
                const response = await axios.get('http://localhost:4000/profesores');
                setProfesores(response.data);
            } catch (error) {
                console.error('Error al obtener los profesores:', error);
            }
        };

        fetchProfesores();
    }, []);

    const enviarProfesor = async () => {
        try {
            const response = await axios.post('http://localhost:4000/send-profesor', profesor);
            console.log("Profesor agregado:", response.data);
            setProfesor({
                nombre: '',
                correo: '',
                edad: '',
                materia: '',
                cedula: '',
            })
            console.log(profesor);
            borrarTexto();
        } catch (error) {
            console.error('error:',error);
        }
    }

    //subir imagen
    const enviarImg = async () => {
        const formData = new FormData();
        formData.append('img', img); // Agregar la imagen al FormData
        
        try {
          const response = await axios.post('http://localhost:4000/upload-img', formData, {
            headers: {
              'Content-Type': 'multipart/form-data' // Especificar el tipo de contenido como multipart/form-data
            }
          });
          console.log(img)
          console.log("Imagen agregada:", response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      const registrarProfesor = async () => {
        try {
          const formData = new FormData();
      
          // Agregar datos del profesor al FormData
          for (const key in profesor) {
            formData.append(key, profesor[key]);
          }
      
          // Agregar la imagen al FormData
          formData.append('img', acceptedFiles[0]);
      
          // Enviar la solicitud al servidor
          const response = await axios.post('http://localhost:4000/registar-profesor', formData, {
            headers: {
              'Content-Type': 'multipart/form-data' // Especificar el tipo de contenido
            }
          });
      
          console.log("Profesor registrado:", response.data);
          // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito al usuario
      
          // Reinicia los campos del formulario
          setProfesor({
            nombre: '',
            correo: '',
            edad: '',
            materia: '',
            cedula: '',
          });
          setImg(null); // Reinicia la imagen seleccionada
        } catch (error) {
          console.error('Error al registrar profesor:', error);
          // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario
        }
      }
      

    const handleInputImg = (event) => {
        setImg(event.target.files[0]);
    }
    const eliminarProfesor = async (idProfesor) => {
        try {
            await axios.delete(`http://localhost:4000/profesores/${idProfesor}`);
            console.log('Profesor eliminado correctamente');
            
        } catch (error) {
            console.error('Error al eliminar el profesor:', error);
        }
    };

    const buscarProfesor = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/get-profesor/${profesorIdBuscado}`);
            const profesorEncontrado = response.data;
            
            // Actualizar el estado con una función de callback para asegurar que los cambios se han aplicado
            nombreInput.value = profesorEncontrado.nombre;
            correoInput.value = profesorEncontrado.correo;
            edadInput.value = profesorEncontrado.edad;
            materiaInput.value = profesorEncontrado.materia;
            cedulaInput.value = profesorEncontrado.cedula;
            console.log(profesorEncontrado);
        } catch (error) {
            console.error('Error al buscar el profesor:', error);
        }
    };
    
    const modificarProfesor = async (idProfesor, profesor) => {
        try {
            const response = await axios.put(`http://localhost:4000/edit-profesores/${idProfesor}`, profesor);
            console.log('Profesor actualizado correctamente:', response.data);
        } catch (error) {
            console.error('Error al actualizar el profesor:', error);
        }
    };

    
    const handleActualizarProfesor = (idProfesor) => {
        const nombre = nombreInput.value;
        const correo = correoInput.value;
        const edad = edadInput.value;
        const materia = materiaInput.value;
        const cedula = cedulaInput.value;

        const datosProfesor = {
            nombre,
            correo,
            edad,
            materia,
            cedula
        };

        // Llama a la función para modificar el profesor con los nuevos datos
        modificarProfesor(idProfesor, datosProfesor);
    };
    

    function borrarTexto() {
        const nombreInput = document.getElementById("nombre");
        nombreInput.value = "";
      
        const correoInput = document.getElementById("correo");
        correoInput.value = "";
      
        const edadInput = document.getElementById("edad");
        edadInput.value = "";

        const materiaInput = document.getElementById("materia");
        materiaInput.value = "";

        const cedulaInput = document.getElementById("cedula");
        cedulaInput.value = "";
      }
    
  return (
    <div>
        <h2>Agregar profes</h2>
        <p>{}</p>
            <div>
                <p>Nombre y apellido</p> 
                
                <input onChange={handleInputChange}  name='nombre' id='nombre' type="text" autoFocus/>
            </div>
            <div>
                <p>correo</p> 
                <input onChange={handleInputChange} name='correo' id='correo' type="text" />
            </div>
            <div>
                <p>edad</p> 
                <input onChange={handleInputChange} name='edad' id='edad' type="text" />
            </div>
            <div>
                <p>materia</p> 
                <input onChange={handleInputChange} name='materia' id='materia' type="text" />
            </div>
            <div>
                <p>cedula</p> 
                <input onChange={handleInputChange} name='cedula' id='cedula' type="text" />
            </div>
            <div>
                <p>img</p> 
               {/* <input onChange={handleInputImg} name='img' id='img' type="file" />*/}
               <div style={{ display: 'flex', background: '#333', width: '450px', height: '250px', borderRadius: '5px', alignItems: 'center', justifyContent: 'center', color: 'white' }} {...getRootProps()}>
      <input {...getInputProps()} />
      <div style={{ border: '5px dashed #ddd', borderRadius: '5px', height: '90%', width: '94%' }}>
        {isDragActive ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <p>Suelta la imagen aquí...</p>
          </div>
        ) : (
          <div style={{ width: '100%', height: '100%', alignItems: 'center' }}>
          
            {acceptedFiles[0] && !errorMsg ? (
              <div style={{ display: 'flex', justifyContent: 'center', height: '90%', alignItems: 'center' }}>
                <img style={{ height: '125px', borderRadius: '5px' }} src={URL.createObjectURL(acceptedFiles[0])} alt="" />
              </div>
            ) : (
              <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                <p>Suelta la imagen</p>
                <p>o</p>
                <button style={{ padding: '20px', borderRadius: '5px', background: '#9742F2', border: 'none', cursor: 'pointer' }}>
                  Selecciona el archivo
                </button>
              </div>
            )}
             <div style={{height:"25px"}}>
           {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>} {/* Display error message */}
           </div>
          </div>
        )}
      </div>
    </div>
                <button onClick={() => registrarProfesor()}>subir imagen papa</button>
            </div>
            <div>
                <p>id</p> 
                <input
                    onChange={(event) => setProfesorIdBuscado(event.target.value)}
                    value={profesorIdBuscado}
                    name='id'
                    id='id'
                    type="text"
                />

            </div>
            <button onClick={enviarProfesor}>enviar</button>
            <button onClick={buscarProfesor}>Buscar</button>
            <button onClick={() => eliminarProfesor(idInput.value)}>Eliminar</button>
            <button onClick={() => handleActualizarProfesor(idInput.value)}>modificar</button>

        <div id="profesores">
        <h2>Lista de Profesores</h2>
            <div id="profesores">
                {profesores.map((profesor) => (
                    <div key={profesor.id}>
                        <p>Nombre: {profesor.data.nombre}</p>
                        <input type="text" value={profesor.data.nombre} onChange={handleInputChange}/>
                        <p>Correo: {profesor.data.correo}</p>
                        <p>Edad: {profesor.data.edad}</p>
                        <p>Materia: {profesor.data.materia}</p>
                        <p>Cédula: {profesor.data.cedula}</p>
                        <p>id: {profesor.id}</p>
                        <button onClick={() => eliminarProfesor(profesor.id)}>eliminar</button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Profesores
