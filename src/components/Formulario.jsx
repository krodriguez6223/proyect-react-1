//rafce
//rfce

import { useState, useEffect } from 'react'
import Alerta from './alerta';

const Formulario = ({setPacientes, pacientes}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomase] = useState('');
  const[ error, setError] = useState(false)

  const generarid = () => {
    const fecha = Date.now().toString(20)
    const random = Math.random().toString(20).substring(2)
    
    return  fecha + random;
  }

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    //validacion del formulario
    if ([nombre, propietario, email, alta, sintomas].includes('') ) {
      setError(true);
      return
    }
    setError(false)

    //Objeto paciecnte

    const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
        id: generarid()
    }

    setPacientes([...pacientes, objetoPaciente])

    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomase('');

  }

  

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento paciente</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>administralo</span></p>

      <form 
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded-lg py-10 px-5 mx-5'
          >

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="mascota">Nombre mascota
          </label>

          <input
            id='mascota'
            type="text"
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="propietario">Nombre propietario
          </label>

          <input
            id='propietario'
            type="text"
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} 
            />
            
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="email">Email
            
          </label>

          <input
            id='email'
            type="email"
            placeholder='Email contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="alta">Alta
          </label>

          <input
            id='alta'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            />

        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor="sintomas">Síntomas
          </label>

          <textarea
            id='sintomas'
            type="date"
            placeholder='describe los sintomas...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={sintomas}
            onChange={(e) => setSintomase(e.target.value)}
            />

        </div>

        { error && 
           <Alerta>Todos los campos son obligatorios</Alerta>
        }
        <input type="submit"
          className='bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-colors w-full p-3 text-white uppercase font-bold rounded-md'
          value="Agregar paciente"
          
          />
      </form>

    </div>

)
}

export default Formulario
