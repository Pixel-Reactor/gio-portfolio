import React, { useState } from 'react'

export default function Prueba() {
  const img= require.context('./galleria');
  const Paths=img.keys()
  const[cont,setCont]=useState(0)
 
  return (
    <div className='pruebados' >
      <img className='fotouno'  />
      <img  className='fotodos' onClick={()=>{setCont(cont+1)}} src={require(`./galleria${Paths[3].slice(1)}`)} />
    </div>
  )
}

