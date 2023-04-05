import React from 'react'
import gmail from './icons/gmail.png'
import whats from './icons/whatsapp.png'
import li from './icons/linkedin.png'
const Enlaces = () => {
  return (
    <div className='enlaces'>
        <ul>
        <a href="mailto:gio.tringolo@gmail.com "> <li  ><img src={gmail} width={'100%'} alt="gmail"  /></li></a>
       <a href="https://www.linkedin.com/in/gio-tringolo/"> <li><img src={li} width={'100%'} alt="linkedin"  /></li></a>
       <a href="https://wa.me/34623417504"> <li><img src={whats} width={'100%'} alt="gmail"  /></li> </a>
        </ul>
    </div>
  )
}

export default Enlaces