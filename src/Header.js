import React,{useState} from 'react'

const Header = () => {
  const [Selected, setSelected] = useState({
    width: '10px',
    height: '10px',
    backgroundColor: 'green',
    borderRadius: '100%',
    marginLeft:'10px',
    animation:'flashes 2s infinite',
    transition:'all 1s'
});
const [NotSelected, setNotSelected] = useState({
  width: '10px',
  height: '10px',
  backgroundColor: 'gray',
    borderRadius: '100%',
  marginLeft:'10px',
  transition:'all 1s'
});
  const [Sel, setSel] = useState('bio');
  return (
    <div className='header'>
      <div className='profile'></div>
      <ul>
        <li className='fxcntcnt' onClick={()=>setSel('bio')}>SOBRE MI <div className='fxcntcnt' style={Sel=== 'bio' ?  Selected : NotSelected} ></div> </li>
        <li className='fxcntcnt' onClick={()=>setSel('fotos')}>GALLERIA FOTOS <div style={Sel=== 'fotos' ?  Selected : NotSelected} /></li>
        <li className='fxcntcnt' onClick={()=>setSel('videos')}>GALLERIA VIDEOS <div style={Sel=== 'videos' ?  Selected : NotSelected} /></li>

        <li className='fxcntcnt' onClick={()=>setSel('contactos')}>CONTACTOS <div style={Sel=== 'contactos' ?  Selected : NotSelected} /></li>
      </ul>
    </div>
  )
}

export default Header