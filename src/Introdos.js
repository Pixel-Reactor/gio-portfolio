import React, { useState ,useEffect} from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Introdos = () => {
  const navigate= useNavigate()
const[underline1,setUnderline1]=useState({
  'textDecoration':'underline',
  'transitionProperty':' all',
  'transitionDuration':'0.8s'  ,
})
const[underline2,setUnderline2]=useState({
  'textDecoration':'none'
})
const[underline3,setUnderline3]=useState({
  'textDecoration':'none'
})
const[underline4,setUnderline4]=useState({
  'textDecoration':'none'
})
const[submenu,setSubmenu]=useState({
  'height': '0px',
  'display': 'flex',
  'flexDirection': 'column',
  'overflow': 'hidden',
  'transition': 'all 1s',
  
})

  return (
  
    <div className='header'>
    
    <div className='name'>
    <p> Giovanna <br></br> Tringolo</p>
    <p>Realizadora Audiovisual</p>
    </div>
      <div className='nav'>
       <div> <p 
        onMouseOver={()=>{
        setUnderline1({'textDecoration':'underline'})
        setUnderline2({'textDecoration':'none'})
        setUnderline3({'textDecoration':'none'})
        setUnderline4({'textDecoration':'none'})
        setSubmenu({...submenu,'height':'0px'})
      }}
        
        style={underline1} onClick={()=>{navigate("/")}}> Bio</p>
</div>
      <div> <p onMouseOver={
       ()=>{setUnderline2({'textDecoration':'underline'})
            setUnderline3({'textDecoration':'none'})
            setUnderline1({'textDecoration':'none'})
            setUnderline4({'textDecoration':'none'})
            setSubmenu({...submenu,'height':'50px'})
           
          }
      
      } style={underline2}> Galeria </p>
      <div  style={submenu}>
      <p className='sub' onClick={()=>{ navigate("/fotos")}}> Fotos</p>
      
      </div>
      
      </div>
       

<div> <p onMouseOver={
       ()=>{setUnderline3({'textDecoration':'underline'})
            setUnderline1({'textDecoration':'none'})
            setUnderline2({'textDecoration':'none'})
            setUnderline4({'textDecoration':'none'})
            setSubmenu({...submenu,'height':'0px'})
          }} style={underline3} onClick={()=>{ navigate("/publicidad")}}> Publicidad</p></div>
       
       
      
    

     
     
      </div>
  </div>
   
   
  )
}

export default Introdos