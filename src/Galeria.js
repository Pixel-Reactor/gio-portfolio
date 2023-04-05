import React from 'react'
import { useState, useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
const Galeria = (props) => {
    const messagesEndRef = useRef()
    const navigate = useNavigate();
    const [carpeta, setcarpeta] = useState('');
    const [fotos, setfotos] = useState('');
    const [pos, setpos] = useState(0);
    const omar = require.context('./Omar')
    const lacarolina = require.context('./lacarolina');
    const venecia = require.context('./Venecia');
    const delirio = require.context('./delirio');

    console.log(props.gallery)
useEffect(() => {
    setcarpeta(props.gallery) ;
    if(props.gallery === 'omar'){
        setfotos(omar.keys());
        setcarpeta('./Omar')
    }
    if(props.gallery === 'carolina'){
        setfotos(lacarolina.keys());
        setcarpeta('./lacarolina')
    }
    if(props.gallery === 'venecia'){
        setfotos(venecia.keys());
        setcarpeta('./Venecia')
    }
    if(props.gallery === 'delirio'){
        setfotos(delirio.keys());
        setcarpeta('./delirio')
    }


}, []);
useEffect(() => {
    messagesEndRef.current.scrollIntoView({behavior:"smooth", block: "end"});

}, [pos]);


    return (
        <div className="maincontainer">
            <header><h1 className='pd20 headergallery'>{props.gallery}  <img onClick={()=>navigate('/fotos')} src={require('./icons/replay.png')} width={'30px'} alt=":(" /></h1></header>
            <div className=" container ">
            <div className='fxcntcnt arrowleft' onClick={()=>{pos-1 < 0 ? setpos(fotos.length -1) : setpos(pos - 1)}} ><img onClick={()=>{pos-1 < 0 ? setpos(fotos.length-1) : setpos(pos - 1)}} src={require('./icons/arrow-left.png')} alt="" /></div>
            {fotos ? <img src={require(`${carpeta}/${fotos[pos].slice(2)}`)} width={'200px'} alt=':('/> : 'Ooops.. No hay nada que mostrar.. por favor,vuelve a intentarlo '} 
            <div className='fxcntcnt arrowright' onClick={()=>{pos+1 > fotos.length -1? setpos(0) : setpos(pos+1)}}><img onClick={()=>pos+1 > fotos.length -1? setpos(0) : setpos(pos+1)} src={require('./icons/arrow-left.png')} alt="" />	</div>

            </div>
       <div className="minigallery">{
        fotos? fotos.map((item,index) => <img className={pos === index ? 'minipicsel' : 'minipicnotsel'} onClick={()=>setpos(index)} src={require(`${carpeta}/${item.slice(2)}`)} width={'50px'} />) : '...'
        }</div><div ref={messagesEndRef} />
        </div>
      

    )
}

export default Galeria