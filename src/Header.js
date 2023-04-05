import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  const [Selected] = useState({
    width: '15px',
    height: '15px',
    backgroundColor: 'green',
    borderRadius: '100%',
    marginLeft: '10px',
    animation: 'flashes 2s infinite',
    transition: 'all 1s',
    transform:'translateY(-2px)'
    
  });
  const [NotSelected] = useState({
    width: '15px',
    height: '15px',
    backgroundColor: 'gray',
    borderRadius: '100%',
    marginLeft: '10px',
    transition: 'all 1s',
    transform:'translateY(-2px)'
  });
  const [Sel, setSel] = useState('bio');
  return (
    <div className='header'>
      <div className='profile'></div>
      <ul>
        <li className='fxcntcnt' onClick={() => { setSel('bio'); props.nav('bio'); navigate('/') }}><p className='liheaderp'>SOBRE MI</p>  <div style={Sel === 'bio' ? Selected : NotSelected} className='bdw fxcntcnt'></div> </li>
        <li className='fxcntcnt' onClick={() => { setSel('fotos'); props.nav('fotos'); navigate('/fotos') }}>GALLERIA FOTOS <div style={Sel === 'fotos' ? Selected : NotSelected} /></li>
        <li className='fxcntcnt' onClick={() => { setSel('videos'); props.nav('videos'); navigate('/videos') }}>GALLERIA VIDEOS <div style={Sel === 'videos' ? Selected : NotSelected} /></li>



      </ul>
    </div>
  )
}

export default Header