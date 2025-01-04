import React from 'react'
import './HorarioTable.css'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios';

const HorarioTable = () => {

    const [horario, setHorario] = useState()
    const [horarioCargado, setHorarioCargado] = useState({
        id: '',
        data:{
            lunes700: '',
            lunes745: '',
            lunes830: '',
            lunes915: '',
            lunes1000: '',
            lunes1045: '',
            lunes1130: '',
        }
    })

    const inputLunes700 = useRef();
    const inputLunes745 = useRef();
    const inputLunes830 = useRef();
    const inputLunes915 = useRef(); 
    const inputLunes1000 = useRef(); 
    const inputLunes1045 = useRef(); 
    const inputLunes1130 = useRef(); 
    const inputMartes700 = useRef();
    const inputMartes745 = useRef();
    const inputMartes830 = useRef();
    const inputMartes915 = useRef();
    const inputMartes1000 = useRef();
    const inputMartes1045 = useRef();
    const inputMartes1130 = useRef();
    const inputMiercoles700 = useRef();
    const inputMiercoles745 = useRef();
    const inputMiercoles830 = useRef();
    const inputMiercoles915 = useRef();
    const inputMiercoles1000 = useRef();
    const inputMiercoles1045 = useRef();
    const inputMiercoles1130 = useRef();
    const inputJueves700 = useRef();
    const inputJueves745 = useRef();
    const inputJueves830 = useRef();
    const inputJueves915 = useRef();
    const inputJueves1000 = useRef();
    const inputJueves1045 = useRef();
    const inputJueves1130 = useRef();
    const inputViernes700 = useRef();
    const inputViernes745 = useRef();
    const inputViernes830 = useRef();
    const inputViernes915 = useRef();
    const inputViernes1000 = useRef();
    const inputViernes1045 = useRef();
    const inputViernes1130 = useRef();  


    const handleChange = (event) => {
        setHorario({...horario, [event.target.name]: event.target.value});
    }
    const handleChangeModificar = (event) => {
        const { name, value } = event.target;
        if (name === 'id') {
          setHorarioCargado(prevState => ({
            ...prevState,
            id: value,
          }));
        } else {
          setHorarioCargado(prevState => ({
            ...prevState,
            data: {
              ...prevState.data,
              [name]: value,
            }
          }));
        }
      }
      

    useEffect(() => {
        const fetchHorario = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-horario-5toE');
                setHorarioCargado(...response.data);
                console.log(horarioCargado);
            } catch (error) {
                console.error('error:',error);
            }
        }
        fetchHorario();
    }, [])

   const guardarHorario = async () => {
    console.log(horario);
    
    try {
        const response = await axios.post('http://localhost:5000/send-horario-5toE', horario);
        console.log("Profesor agregado:", response.data);
        setHorario({
            materia: '',
            año: '',
            profesor: '',
            hora: '',
        })
        console.log(horario);
        borrarTexto();
    } catch (error) {
        console.error('error:',error);
    }
   }

   const borrarTexto = () => {
    inputLunes700.current.value = '';
    inputLunes745.current.value = '';
    inputLunes830.current.value = '';
    inputLunes915.current.value = '';
    inputLunes1000.current.value = '';
    inputLunes1045.current.value = '';
    inputLunes1130.current.value = '';
   }

   const modificarHorario = async () => {
    console.log(horarioCargado.id);
    
    try {
        const response = await axios.put(`http://localhost:4000/update-horario-5toE/${horarioCargado.id}`, horarioCargado.data);
        console.log("Profesor agregado:", response.data);
        console.log(horarioCargado);
    } catch (error) {
        console.error('error:',error);
    }
   }

  
  return (
    <div>
      <section class="bg-gray-50">
        <h1 className='text-center py-4'>Horario 5to E</h1>
       {
        horarioCargado && horarioCargado.data 
        ? (
          <div className='w-full flex justify-center '>
          <div className=" rounded-md border border-gray-200 overflow-auto mb-8 w-[850px]" >
           <div className="overflow-x-auto rounded-t-lg">
           <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
         <thead className="ltr:text-left rtl:text-right">
           <tr>
             <th className="whitespace-nowrap pr-1 pl-4 py-2 text-xs font-medium text-gray-900">Hora</th>
             <th className="whitespace-nowrap px-2 py-2 font-medium text-xs text-gray-900">Lunes</th>
             <th className="whitespace-nowrap px-2 py-2 font-medium text-xs text-gray-900">Martes</th>
             <th className="whitespace-nowrap px-2 py-2 font-medium text-xs text-gray-900">Miércoles</th>
             <th className="whitespace-nowrap px-2 th-des py-2 text-xs font-medium text-gray-900">Jueves</th>
             <th className=" whitespace-nowrap px-2 py-2 font-medium text-xs text-gray-900 ">Viernes</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
          
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   7:00AM - 7:45AM
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   {horarioCargado?.data?.lunes700}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                  {horarioCargado?.data?.martes700}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                  {horarioCargado?.data?.miercoles700}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                  {horarioCargado?.data?.jueves700}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                  {horarioCargado?.data?.viernes700}
               </td>
             </tr>
          
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                  7:45AM - 8:30AM
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   {horarioCargado?.data?.lunes745}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.martes745}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.miercoles745}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                   {horarioCargado?.data?.jueves745}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                   {horarioCargado?.data?.viernes745}
               </td>
             </tr>
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                 8:30AM - 9:15AM
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   {horarioCargado?.data?.lunes830}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.martes830}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.miercoles830}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                   {horarioCargado?.data?.jueves830}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                  {horarioCargado?.data?.viernes830}
               </td>
             </tr>
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                  9:15am - 10:00am
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   {horarioCargado?.data?.lunes915}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.martes915}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.miercoles915}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                   {horarioCargado?.data?.jueves915}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                   {horarioCargado?.data?.viernes915}
               </td>
             </tr>
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                 10:00AM - 10:45AM
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   {horarioCargado?.data?.lunes1000}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.martes1000}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.miercoles1000}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                   {horarioCargado?.data?.jueves1000}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                   {horarioCargado?.data?.viernes1000}
               </td>
             </tr>
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                10:45AM - 11:30AM
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                  {horarioCargado?.data?.lunes1045}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                  {horarioCargado?.data?.martes1045}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                  {horarioCargado?.data?.miercoles1045}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                  {horarioCargado?.data?.jueves1045}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                  {horarioCargado?.data?.viernes1045}
               </td>
             </tr>
             <tr  >
               {/**Horario */}
             <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
               11:30am - 12:15pm
                   </td>
               {/**Lunes */}
               <td 
               className="whitespace-nowrap pr-1 pl-4 py-1 cursor-pointer  text-gray-900">
                   {horarioCargado?.data?.lunes1130}
                   </td>
                   {/**Martes */}
               <td 
                className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.martes1130}
               </td>
               {/**Miercoles */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">
                   {horarioCargado?.data?.miercoles1130}
                   </td>
               {/**Jueves */}
               <td 
               className="whitespace-nowrap px-2 py-1 cursor-pointer text-xs text-gray-700">   
                   {horarioCargado?.data?.jueves1130}
               </td>
               {/**Viernes */}
               <td
                className=" td-des px-2 text-xs py-1 cursor-pointer text-gray-700">
                   {horarioCargado?.data?.viernes1130}
               </td>
             </tr>
         </tbody>
       </table>
     </div>
       </div>
          </div>
        ) : (
            <div>
                <p>No hay horario cargado</p>
            </div>
       )
       }
  
           

           
  <div className="px-4 mx-auto w-[700px]">
    <div
      className="w-full wi100 px-0 pt-2 pb-6 mx-auto mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"
    >
      <h2 className="mb-5 text-xxl font-light text-left text-gray-800 sm:text-center">Modificar horario</h2>
      <div className='w-full'>
      <form className="pb-1  flex flex-wrap w-full gap-2 justify-evenly">
       <div className='mt-0' >
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Lunes</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border border-gray-500 rounded form-input" type="text"
           ref={inputLunes700}
           name="lunes700"
           id="lunes700"
          value={horarioCargado.data.lunes700} 
           onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border border-gray-500 rounded form-input" type="text"
          ref={inputLunes745}
          name="lunes745"
          id="lunes745"
          value={horarioCargado.data.lunes745} 
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"
          ref={inputLunes830}
          name="lunes830"
          id="lunes830"
          value={horarioCargado.data.lunes830}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputLunes915}
          name="lunes915"
          id="lunes915"
          value={horarioCargado.data.lunes915}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputLunes1000}
          name="lunes1000"
          id="lunes1000"
          value={horarioCargado.data.lunes1000}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputLunes1045}
          name='lunes1045'
          id='lunes1045'
          value={horarioCargado.data.lunes1045}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
           ref={inputLunes1130}
           name="lunes1130"
           id="lunes1130"
           value={horarioCargado.data.lunes1130}
           onChange={handleChangeModificar}
          />
        </label>
       
       
        <div className="flex flex-col items-start justify-between sm:items-center sm:flex-row">
         
        </div>
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Martes</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMartes700}
          name="martes700"
          id="martes700"
        value={horarioCargado.data.martes700} 
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMartes745}
          name="martes745"
          id="martes745"
          value={horarioCargado.data.martes745} 
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
            ref={inputMartes830}
            name="martes830"
            id="martes830"
            value={horarioCargado.data.martes830}
            onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMartes915}
          name="martes915"
          id="martes915"
          value={horarioCargado.data.martes915}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMartes1000}
          name="martes1000"
          id="martes1000"
          value={horarioCargado.data.martes1000}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMartes1045}
          name='martes1045'
          id='martes1045'
          value={horarioCargado.data.martes1045}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMartes1130}
          name="martes1130"
          id="martes1130"
          value={horarioCargado.data.martes1130}
          onChange={handleChangeModificar}
          />
        </label>
       
      
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Miercoles</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles700}
          name="miercoles700"
          id="miercoles700"
          value={horarioCargado.data.miercoles700}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles745}
          name="miercoles745"
          id="miercoles745"
          value={horarioCargado.data.miercoles745}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles830}
          name="miercoles830"
          id="miercoles830"
          value={horarioCargado.data.miercoles830}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles915}
          name="miercoles915"
          id="miercoles915"
          value={horarioCargado.data.miercoles915}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles1000}
          name='miercoles1000'
          id='miercoles1000'
          value={horarioCargado.data.miercoles1000}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles1045}
          name='miercoles1045'
          id='miercoles1045'
          value={horarioCargado.data.miercoles1045}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputMiercoles1130}
          name='miercoles1130'
          id='miercoles1130'
          value={horarioCargado.data.miercoles1130}
          onChange={handleChangeModificar}
          />
        </label>
      
       
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Jueves</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className=" rounded  form-input border border-gray-500 " type="text"  
          ref={inputJueves700}
          name="jueves700"
          id="jueves700"
          value={horarioCargado.data.jueves700}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputJueves745}
          name="jueves745"
          id="jueves745"
          value={horarioCargado.data.jueves745}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputJueves830}
          name="jueves830"
          id="jueves830"
          value={horarioCargado.data.jueves830}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputJueves915}
          name="jueves915"
          id="jueves915"
          value={horarioCargado.data.jueves915}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputJueves1000}
          name="jueves1000"
          id="jueves1000"
          value={horarioCargado.data.jueves1000}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputJueves1045}
          name="jueves1045"
          id="jueves1045"
          value={horarioCargado.data.jueves1045}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputJueves1130}
          name="jueves1130"
          id="jueves1130"
          value={horarioCargado.data.jueves1130}
          onChange={handleChangeModificar}
          />
        </label>
       
       
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Viernes</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes700}
          name="viernes700"
          id="viernes700"
          value={horarioCargado.data.viernes700}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes745}
          name="viernes745"
          id="viernes745"
          value={horarioCargado.data.viernes745}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes830}
          name="viernes830"
          id="viernes830"
          value={horarioCargado.data.viernes830}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes915}
          name='viernes915'
          id="viernes915"
          value={horarioCargado.data.viernes915}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes1000}
          name="viernes1000"
          id="viernes1000"
          value={horarioCargado.data.viernes1000}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes1045}
          name="viernes1045"
          id="viernes1045"
          value={horarioCargado.data.viernes1045}
          onChange={handleChangeModificar}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border border-gray-500 rounded  form-input" type="text"  
          ref={inputViernes1130}
          name="viernes1130"
          id="viernes1130"
          value={horarioCargado.data.viernes1130}
          onChange={handleChangeModificar}
          />
        </label>
       
       
       </div>
      </form>
<div className='w-full flex justify-center pb-2 pt-4'>
<button className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0 text-center'
           onClick={guardarHorario}
           >Guardar
           </button>
</div>
      </div>
    </div>
  </div>
  
</section>
    </div>
  )
}

export default HorarioTable