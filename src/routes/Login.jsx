import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {

    const[usuario,setUsuario]= useState({
        email:'',
        password:''
    });

    const handleLogin = (event) => {
        setUsuario({
          ...usuario,
          [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Formulario enviado:", usuario);

        try {
            const response = await axios.post('http://localhost:5000/sesion/login', usuario)
    
            const token= response.data.token;
            // Almacenar el token en localStorage
            if (token) {
              localStorage.setItem("token", token);
              
              window.location.reload();
            }else{
              Swal.fire({
                background:'rgba(0, 0, 0, 0.92)',
                color:'aliceblue',
                icon: 'error',
                title: 'Usuario o contraseña incorrectos',
                confirmButtonColor:'#EB193C',
                confirmButtonText:'Aceptar'
              })
            }
            console.log("Sesión iniciada:", localStorage.token);
           } catch (error) {
            console.log(error)
           }
      };

      const dev = async (event) => {
        event.preventDefault();
        console.log(usuario)

      };    

  return (
    <div>
        <section className="">
  <div className="items-center px-5 py-12 lg:px-20">
    <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
           <div className='text-center'>
              <h1>Inicia sesión</h1>
           </div>
      <div className="mt-8">
        <div className="mt-6">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-600">Correo</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Tu correo"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={handleLogin}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-neutral-600">Contraseña</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Tu contraseña"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={handleLogin}
                />
              </div>
            </div>
{/* 
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="block ml-2 text-sm text-neutral-600">Remember me</label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
              </div>
            </div>
*/}
            <div>
              <button onClick={handleSubmit} type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Iniciar sesión
              </button>

            </div>
          </form>
         
    
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login