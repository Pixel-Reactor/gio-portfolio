import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Fotos = (props) => {
  const navigate = useNavigate();
  const [carolina, setcarolina] = useState('LA CAROLINA');
  const [omar, setomar] = useState('OUMAR');
  const [venecia, setvenecia] = useState('VENECIA');
  const [delirio, setdelirio] = useState('DELIRIOS DE DISEÑO');


  return (
    <div className='maincontainer'>
      <header className='pd20'><h1>Galeria Fotos - Albumes </h1> </header>
      <main className='container'>
       <div className='portada'>
          <div className='carolinaframe'><div onMouseEnter={() => setcarolina(<div className='btngreen' onClick={() => { navigate('/galeria'); props.gallery('carolina') }}>ABRIR GALERIA</div>)} onMouseLeave={() => setcarolina('CAROLINA')} className="fxcntcnt galleryname">{carolina}</div></div></div>
          <div className='portada'>
            <div className='omarframe'><div onMouseEnter={() => setomar(<div className='btngreen' onClick={() => { navigate('/galeria'); props.gallery('omar') }} >ABRIR GALERIA</div>)} onMouseLeave={() => setomar('OMAR')} className="fxcntcnt galleryname">{omar}</div></div></div>
          <div className='portada'>
            <div className='veneciaframe'><div onMouseEnter={() => setvenecia(<div className='btngreen' onClick={() => { navigate('/galeria'); props.gallery('venecia') }}>ABRIR GALERIA</div>)} onMouseLeave={() => setvenecia('VENECIA')} className="fxcntcnt galleryname">{venecia}</div></div></div>
          <div className='portada'>
            <div className='delirioframe'><div onMouseEnter={() => setdelirio(<div className='btngreen' onClick={() => { navigate('/galeria'); props.gallery('delirio') }}>ABRIR GALERIA</div>)} onMouseLeave={() => setdelirio('DELIRIO')} className="fxcntcnt galleryname">{delirio}</div></div></div> 
        



      </main>

    </div>

  )
}

export default Fotos