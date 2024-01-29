import { useState } from 'react'

function App() {

const sumar = () =>{
  const valor1 = 25;
  const valor2 = 255;
 
  return valor1 + valor2;
}


  return (
  <div>
      <h3>{'Hola mundo dev'.toUpperCase()} </h3>
      <p>el valor de la suma es de: {sumar()}</p>
     
  </div>
  )
}

export default App
