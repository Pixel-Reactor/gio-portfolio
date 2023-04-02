import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Contact from './Contact';
const Main = () => {
   const navigate= useNavigate();
   const[modalonoff,setModalonoff]=useState({
      'position':' absolute',
      'min-width':'100vw ',
      'min-height':'100vh',
      'display': 'flex',
      'top': '0',
      'left': '0',
      'margin': 'auto',
      'background-color': 'rgb(245, 244, 243)',
      'z-index': '1000000',
      'font-family': 'Alumni Sans Pinstripe, sans-serif',
      'color':'orange',
      'alignItems':'center',
      'justifyContent': 'center',
      'textAlign':' center',
      'text-transform':'uppercase',
      'letter-spacing': '6px',
      'font-size': '20px',
      'font-weight': '900',
      'height': '50px',
   
    
   })
   const[style,setStyle]=useState({
      'border-bottom':'1px solid orange',
      'width':'40vw',
      'transition':'all 1s'
   })
   useEffect(() => {
     setTimeout(() => {
      setStyle({...style,'width':'100vw'})
      ;
      setTimeout(() => {
         
      }, 1000);
   }, 2000);
   }, []);
   
  return (
    <div className='bio' >
    
       <div className='fondogio'>
       <img className='bioback' src={require('./fotos/pngegg.png')}/>
       <div className='camara'> <img  src={require('./fotos/giogiogio.png')}/></div>
       
        </div> 
        <span class="loader"></span>
        <div className='description'>
         <p>Realización  Audiovisual, <br></br>
            Fotografía y edición de contenido

         </p>
         <Contact />
         </div>
      </div>
    

   
  )
}

export default Main