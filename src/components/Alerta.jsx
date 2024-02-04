import React from 'react'


const alerta = ({children}) => {
  return (
        <div className=' bg-red-400 p-2 text-center text-white font-normal mb-3 rounded-md'>
              <p>{children}</p>
        </div>  
  
  )
}

export default alerta

