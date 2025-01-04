import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const Horario5e = () => {

    const [horarioCargado, setHorarioCargado] = useState([])
    const [horario, setHorario] = useState([])
    const [refreshHorario, setRefreshHorario] = useState(false);

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

    const btnGuardar = useRef();


    const handleChangeModificar = (event) => {
        const { name, value } = event.target;
        if (name === 'id') {
          setHorario(prevState => ({
            ...prevState,
            id: value,
          }));
        } else {
          setHorario(prevState => ({
            ...prevState,
            data: {
              ...prevState.data,
              [name]: value,
            }
          }));
        }
      }

      const guardarHorario = async () => {
        console.log(horario);
        
        try {
            const response = await axios.post('http://localhost:5000/add-horario-5toE', horario.data);
            console.log("Horario agregado: Horario agregado correctamente:", response.data);
            setHorarioCargado({
                lunes700: "", lunes745: "", lunes830: "", lunes915: "", lunes1000: "", lunes1045: "", lunes1130: "", martes700:'', martes745:'', martes830: '', martes915: '', martes1000: '', martes1045: '', martes1130: '', miercoles700: '', miercoles745: '', miercoles830: '', miercoles915:'', miercoles1000:'', miercoles1045: '', miercoles1130: '', jueves700: '', jueves745: '', jueves830: '', jueves915: '', jueves1000: '', jueves1045: '', jueves1130: '', viernes700: '', viernes745: '', viernes830: '', viernes915: '', viernes1000: '', viernes1045: '', viernes1130: '',
            })
            console.log(horarioCargado);

            
          //  borrarTexto();
        } catch (error) {
            console.error('error:',error);
        }
       }

       useEffect(() => {
        const fetchHorario = async () => {
         
          try {
            const response = await axios.get('http://localhost:5000/ver-horario-5toE');
            // Ordenar las materias por el número de semestre
            setHorarioCargado(...response.data)
            console.log(horarioCargado);
            setRefreshHorario(false);

            inputLunes700.current.disabled = true;
            inputLunes745.current.disabled = true;
            inputLunes830.current.disabled = true;
            inputLunes915.current.disabled = true;
            inputLunes1000.current.disabled = true;
            inputLunes1045.current.disabled = true;
            inputLunes1130.current.disabled = true;
            inputMartes700.current.disabled = true;
            inputMartes745.current.disabled = true;
            inputMartes830.current.disabled = true;
            inputMartes915.current.disabled = true;
            inputMartes1000.current.disabled = true;
            inputMartes1045.current.disabled = true;
            inputMartes1130.current.disabled = true;
            inputMiercoles700.current.disabled = true;
            inputMiercoles745.current.disabled = true;
            inputMiercoles830.current.disabled = true;
            inputMiercoles915.current.disabled = true;
            inputMiercoles1000.current.disabled = true;
            inputMiercoles1045.current.disabled = true;
            inputMiercoles1130.current.disabled = true;
            inputJueves700.current.disabled = true;
            inputJueves745.current.disabled = true;
            inputJueves830.current.disabled = true;
            inputJueves915.current.disabled = true;
            inputJueves1000.current.disabled = true;
            inputJueves1045.current.disabled = true;
            inputJueves1130.current.disabled = true;
            inputViernes700.current.disabled = true;
            inputViernes745.current.disabled = true;
            inputViernes830.current.disabled = true;
            inputViernes915.current.disabled = true;
            inputViernes1000.current.disabled = true;
            inputViernes1045.current.disabled = true;
            inputViernes1130.current.disabled = true;
            
            btnGuardar.current.disabled = true;
          } catch (error) {
            console.error('Error al obtener los materias:', error);
          }
        };
    
        fetchHorario();
      }, [refreshHorario]);



      const modificarHorario = async () => {
        console.log(horarioCargado.id);
        console.log(horario)
        
        try {
            const response = await axios.put(`http://localhost:5000/update-horario-5toE/${horarioCargado.id}`, horario.data);
            console.log("Horario modificado:", response.data);
            console.log(horarioCargado);
            setRefreshHorario(true);
            Swal.fire({
              title: "Horario actualizado",
              text: "El horario actualizado correctamente",
              icon: "success"
            });
            borrarTexto();
        } catch (error) {
            console.error('error:',error);
        } 
       }

       const modificarOnClick = () => {
        console.log(horarioCargado);

        inputLunes700.current.value = horarioCargado.data.lunes700;
        inputLunes745.current.value = horarioCargado.data.lunes745;
        inputLunes830.current.value = horarioCargado.data.lunes830;
        inputLunes915.current.value = horarioCargado.data.lunes915;
        inputLunes1000.current.value = horarioCargado.data.lunes1000;
        inputLunes1045.current.value = horarioCargado.data.lunes1045;
        inputLunes1130.current.value = horarioCargado.data.lunes1130;
        inputMartes700.current.value = horarioCargado.data.martes700;
        inputMartes745.current.value = horarioCargado.data.martes745;
        inputMartes830.current.value = horarioCargado.data.martes830;
        inputMartes915.current.value = horarioCargado.data.martes915;
        inputMartes1000.current.value = horarioCargado.data.martes1000;
        inputMartes1045.current.value = horarioCargado.data.martes1045;
        inputMartes1130.current.value = horarioCargado.data.martes1130;
        inputMiercoles700.current.value = horarioCargado.data.miercoles700;
        inputMiercoles745.current.value = horarioCargado.data.miercoles745;
        inputMiercoles830.current.value = horarioCargado.data.miercoles830;
        inputMiercoles915.current.value = horarioCargado.data.miercoles915;
        inputMiercoles1000.current.value = horarioCargado.data.miercoles1000;
        inputMiercoles1045.current.value = horarioCargado.data.miercoles1045;
        inputMiercoles1130.current.value = horarioCargado.data.miercoles1130;
        inputJueves700.current.value = horarioCargado.data.jueves700;
        inputJueves745.current.value = horarioCargado.data.jueves745;
        inputJueves830.current.value = horarioCargado.data.jueves830;
        inputJueves915.current.value = horarioCargado.data.jueves915;
        inputJueves1000.current.value = horarioCargado.data.jueves1000;
        inputJueves1045.current.value = horarioCargado.data.jueves1045;
        inputJueves1130.current.value = horarioCargado.data.jueves1130;
        inputViernes700.current.value = horarioCargado.data.viernes700;
        inputViernes745.current.value = horarioCargado.data.viernes745;
        inputViernes830.current.value = horarioCargado.data.viernes830;
        inputViernes915.current.value = horarioCargado.data.viernes915;
        inputViernes1000.current.value = horarioCargado.data.viernes1000;
        inputViernes1045.current.value = horarioCargado.data.viernes1045;
        inputViernes1130.current.value = horarioCargado.data.viernes1130;

        inputLunes700.current.disabled = false;
        inputLunes745.current.disabled = false;
        inputLunes830.current.disabled = false;
        inputLunes915.current.disabled = false;
        inputLunes1000.current.disabled = false;
        inputLunes1045.current.disabled = false;
        inputLunes1130.current.disabled = false;
        inputMartes700.current.disabled = false;
        inputMartes745.current.disabled = false;
        inputMartes830.current.disabled = false;
        inputMartes915.current.disabled = false;
        inputMartes1000.current.disabled = false;
        inputMartes1045.current.disabled = false;
        inputMartes1130.current.disabled = false;
        inputMiercoles700.current.disabled = false;
        inputMiercoles745.current.disabled = false;
        inputMiercoles830.current.disabled = false;
        inputMiercoles915.current.disabled = false;
        inputMiercoles1000.current.disabled = false;
        inputMiercoles1045.current.disabled = false;
        inputMiercoles1130.current.disabled = false;
        inputJueves700.current.disabled = false;
        inputJueves745.current.disabled = false;
        inputJueves830.current.disabled = false;
        inputJueves915.current.disabled = false;
        inputJueves1000.current.disabled = false;
        inputJueves1045.current.disabled = false;
        inputJueves1130.current.disabled = false;
        inputViernes700.current.disabled = false;
        inputViernes745.current.disabled = false;
        inputViernes830.current.disabled = false;
        inputViernes915.current.disabled = false;
        inputViernes1000.current.disabled = false;
        inputViernes1045.current.disabled = false;
        inputViernes1130.current.disabled = false;

        btnGuardar.current.disabled = false;
       }

       const borrarTexto = () => {
        inputLunes700.current.value = '';
        inputLunes745.current.value = '';
        inputLunes830.current.value = '';
        inputLunes915.current.value = '';
        inputLunes1000.current.value = '';
        inputLunes1045.current.value = '';
        inputLunes1130.current.value = '';
        inputMartes700.current.value = '';
        inputMartes745.current.value = '';
        inputMartes830.current.value = '';
        inputMartes915.current.value = '';
        inputMartes1000.current.value = '';
        inputMartes1045.current.value = '';
        inputMartes1130.current.value = '';
        inputMiercoles700.current.value = '';
        inputMiercoles745.current.value = '';
        inputMiercoles830.current.value = '';
        inputMiercoles915.current.value = '';
        inputMiercoles1000.current.value = '';
        inputMiercoles1045.current.value = '';
        inputMiercoles1130.current.value = '';
        inputJueves700.current.value = '';
        inputJueves745.current.value = '';
        inputJueves830.current.value = '';
        inputJueves915.current.value = '';
        inputJueves1000.current.value = '';
        inputJueves1045.current.value = '';
        inputJueves1130.current.value = '';
        inputViernes700.current.value = '';
        inputViernes745.current.value = '';
        inputViernes830.current.value = '';
        inputViernes915.current.value = '';
        inputViernes1000.current.value = '';
        inputViernes1045.current.value = '';
        inputViernes1130.current.value = '';
       }
  return (
    <div>

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
  



         <div className="px-4 mx-auto w-full">
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
          <input className="border px-2 py-1 border-gray-500 rounded form-input" type="text"
           name="lunes700"
           id="lunes700"
           onChange={handleChangeModificar}
           ref={inputLunes700}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded form-input" type="text"
          name="lunes745"
          id="lunes745"
          onChange={handleChangeModificar}
          ref={inputLunes745}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"
          name="lunes830"
          id="lunes830"
          onChange={handleChangeModificar}
          ref={inputLunes830}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="lunes915"
          id="lunes915"
          onChange={handleChangeModificar}
          ref={inputLunes915}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
         
          name="lunes1000"
          id="lunes1000"
         
          onChange={handleChangeModificar}
          ref={inputLunes1000}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name='lunes1045'
          id='lunes1045'
          onChange={handleChangeModificar}
          ref={inputLunes1045}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          
           name="lunes1130"
           id="lunes1130"
          
           onChange={handleChangeModificar}
           ref={inputLunes1130}
          />
        </label>
       
       
        <div className="flex flex-col items-start justify-between sm:items-center sm:flex-row">
         
        </div>
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Martes</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="martes700"
          id="martes700"
          onChange={handleChangeModificar}
          ref={inputMartes700}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="martes745"
          id="martes745"
          onChange={handleChangeModificar}
          ref={inputMartes745}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
            
            name="martes830"
            id="martes830"
           
            onChange={handleChangeModificar}
            ref={inputMartes830}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          
          name="martes915"
          id="martes915"
         
          onChange={handleChangeModificar}
          ref={inputMartes915}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          
          name="martes1000"
          id="martes1000"
         
          onChange={handleChangeModificar}
          ref={inputMartes1000}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          
          name='martes1045'
          id='martes1045'
         
          onChange={handleChangeModificar}
          ref={inputMartes1045}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="martes1130"
          id="martes1130"
          onChange={handleChangeModificar}
          ref={inputMartes1130}
          />
        </label>
       
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Miercoles</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="miercoles700"
          id="miercoles700"
          onChange={handleChangeModificar}
          ref={inputMiercoles700}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="miercoles745"
          id="miercoles745"
          onChange={handleChangeModificar}
          ref={inputMiercoles745}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="miercoles830"
          id="miercoles830"
          onChange={handleChangeModificar}
          ref={inputMiercoles830}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="miercoles915"
          id="miercoles915"
          onChange={handleChangeModificar}
          ref={inputMiercoles915}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name='miercoles1000'
          id='miercoles1000'
          onChange={handleChangeModificar}
          ref={inputMiercoles1000}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name='miercoles1045'
          id='miercoles1045'
          onChange={handleChangeModificar}
          ref={inputMiercoles1045}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name='miercoles1130'
          id='miercoles1130'
          onChange={handleChangeModificar}
          ref={inputMiercoles1130}
          />
        </label>
       
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Jueves</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className=" rounded px-2 py-1 form-input border border-gray-500 " type="text"  
                   name="jueves700"
          id="jueves700"
                    onChange={handleChangeModificar}
          ref={inputJueves700}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                   name="jueves745"
          id="jueves745"
                    onChange={handleChangeModificar}
          ref={inputJueves745}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                   name="jueves830"
          id="jueves830"
                    onChange={handleChangeModificar}
          ref={inputJueves830}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                   name="jueves915"
          id="jueves915"
                    onChange={handleChangeModificar}
          ref={inputJueves915}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
         
          name="jueves1000"
          id="jueves1000"
          
          onChange={handleChangeModificar}
          ref={inputJueves1000}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="jueves1045"
          id="jueves1045"
          onChange={handleChangeModificar}
          ref={inputJueves1045}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="jueves1130"
          id="jueves1130"
          onChange={handleChangeModificar}
          ref={inputJueves1130}
          />
        </label>
       
       </div>
       <div>
       <h3 className="mb-2 text-xl font-light text-gray-800 ">Viernes</h3>
       <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:00am a 7:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                    name="viernes700"
          id="viernes700"
                    onChange={handleChangeModificar}
                    ref={inputViernes700}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 7:45am a 8:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                    name="viernes745"
          id="viernes745"
                    onChange={handleChangeModificar}
         ref={inputViernes745}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 8:30am a 9:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                    name="viernes830"
          id="viernes830"
                    onChange={handleChangeModificar}
          ref={inputViernes830}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 9:15am a 10:00am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
                    name='viernes915'
          id="viernes915"
                    onChange={handleChangeModificar}
          ref={inputViernes915}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:00am a 10:45am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="viernes1000"
          id="viernes1000"
          onChange={handleChangeModificar}
          ref={inputViernes1000}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 10:45am a 11:30am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="viernes1045"
          id="viernes1045"
          onChange={handleChangeModificar}
          ref={inputViernes1045}
          />
        </label>
        <label className="block my-2">
          <span className="block mb-1 text-xs font-medium text-gray-700">De 11:30am a 12:15am</span>
          <input className="border px-2 py-1 border-gray-500 rounded  form-input" type="text"  
          name="viernes1130"
          id="viernes1130"
          onChange={handleChangeModificar}
          ref={inputViernes1130}
          />
        </label>
       
       
       </div>
      </form>
<div className='w-full flex justify-center pb-2 pt-4'>
<button className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0 text-center'
           onClick={modificarOnClick}
           >Modificar horario
           </button>
<button className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0 text-center'
           onClick={modificarHorario}
           ref={btnGuardar}
           >Guardar cambios
           </button>
</div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Horario5e