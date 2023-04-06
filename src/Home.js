import React from 'react'
import { useState } from 'react'
const Home = () => {
    const [load, setload] = useState({
        width: '100%',
        height: '100%',
        opacity:'0',
        transition:'all 1s',
    });
  
  return (
    <>
   <div className='home'>
   <div className='text' >
    <p>GIOVANNA TRINGOLO BORSELLINO</p>
    <p>Realizadora AudioVisual</p>
   </div>
   </div>
   <div className='camaracontainer'>
   <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>REC 🔴</span>
   </div>
   </>
   
  )
}

export default Home