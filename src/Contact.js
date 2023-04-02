import React from 'react'
import { useState,useEffect } from 'react';

const Contact = (props) => {
    const[contact,setContact]=useState({
        
        'width':'200px',
        'height':'300px',
        'top': '0px',
        'left': '0px',
        'transition': 'all 1s',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent':'flexStart',
        'alignItems': 'center',
        'transition': 'all 1s',
      })
      const[whats,setWhats]=useState({
        'position':'relative',
        
        'width':'50px',
        'height':'50px',
        'borderRadius':'100%',
        'top':'-50px',
        'right':'0px',
        'textAlign':'center',
        'display':'flex',
        'justifyItems':'center',
        'alignItems':'center',
        'transition':'all 1s',
        'opacity':'0',
        'zIndex':'0'
       

      })
      const[inst,setInst]=useState({
        
        'width':'50px',
        'height':'50px',
        'borderRadius':'100%',
        'position':'relative',
        'textAlign':'center',
        'top':'-50px',
        'right':'0px',
        'display':'flex',
        'justifyItems':'center',
        'alignItems':'center',
        'transition':'all 1s',
        'opacity':'0',
        'zIndex':'0'
       
      })
      const[mail,setMail]=useState({
        
        'position':'relative',
        'width':'50px',
        'height':'50px',
        'borderRadius':'100%',
        'top':'-70px',
        'left':'0px',
        'textAlign':'center',
        'zIndex':'0',
       
        'display':'flex',
        'justifyItems':'center',
        'alignItems':'center',
        'transition':'all 1s',
        'opacity':'0'
        
        
      })
      useEffect(() => {
        if(props.pos===1){
         setContact({...contact,'left':'50px'})
        }else{
         setContact({...contact,'left':'2000px'})
     }
   
     }, [props]);
  return (
    <div style={contact} onMouseLeave={
      ()=>{
        setWhats(
        {...whats,'right':'0px','top':'-80px','opacity':'0'}
        )
        setInst(
          {...inst,'right':'0px','top':'-80px','opacity':'0'}
          )
          setMail(
            {...mail,'left':'0px','top':'-70px','opacity':'0'}
            )
      }
      }
        
        onMouseEnter={
      ()=>{setWhats(
        {...whats,'top':'30px','right':'60px','opacity':'1'}
        )
        setInst(
          {...inst,'right':'0px','top':'-0px','opacity':'1'}
          )
          setMail(
            {...mail,'left':'60px','top':'-70px','opacity':'1'}
            )
        }
      }
        
        >
      
        <div className='button'>
        <p>Contáctame</p>
        </div> 
        <div style={whats}><a href="https://wa.me/34623417504"><img className='temporizador' src={require('./icons/whatsapp.png')}/></a></div>
        <div style={inst}><a href="https://www.linkedin.com/in/gio-tringolo/"><img className='temporizadorwhats' src={require('./icons/linkedin.png')}/></a></div>
        <div style={mail}><a href="mailto:gio.tringolo@gmail.com"><img className='temporizadorgmail' src={require('./icons/gmail.png')}/></a></div>
    </div>
  )
}

export default Contact
