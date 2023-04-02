import React, { useState ,useEffect} from 'react'
import video from './videos/video-uni.mp4';
import covid from './videos/no-te-descuides-ahora-depende-de-vos.mp4'
import navidad from './videos/Navidad Argentina, SL.mp4'
import ahora from './videos/ahora-depende-de-vos.mp4';

const Publicidad = () => {
   const[normal,setNormal]=useState({
    'width':'200px'
   })
   const[show,setShow]=useState(video)
   useEffect(() => {
   
   }, [show]);
   
  return (
    
    <div className='publicidad'>
 
      <video width="95%" height="300" autoPlay muted controls >
      <source src={show} type="video/mp4"/>
     </video>
      
      <div className='videogallery'>
      <video  onClick={()=>setShow(covid)}   muted controls >
      <source src={covid} type="video/mp4"/>
     </video>
     <video  onClick={()=>setShow(navidad)} muted controls >
      <source src={navidad} type="video/mp4"/>
     </video>
     <video    muted controls >
      <source onClick={()=>setShow(ahora)} src={ahora} type="video/mp4"/>
     </video>
     </div>
      </div>
  )
}

export default Publicidad
