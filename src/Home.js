import React from 'react'
import img from './Images/carolinario.jpeg'
import { useState } from 'react'
const Home = () => {
    const [load, setload] = useState({
        width: '100%',
        height: '100%',
        opacity:'0',
        transition:'all 1s',
    });
    const HandleLoad = () =>{
        setload({
            ...load,opacity:'1'
        })
    }
  return (
    <div className={load}>
   <div className='home'>
   <div className='text' >
    <p>GIOVANNA TRINGOLO</p>
    <p>Realizadora AudioVisual</p>
   </div>
   </div>
    
    </div>
  )
}

export default Home