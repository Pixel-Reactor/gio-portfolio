import React from 'react'
import { useNavigate } from 'react-router-dom';
const Fotos = (props) => {
  const navigate = useNavigate()
  console.log(props.loc)

  return (
    <div className='pd20 maincontainer'>

      <header className='headergallery'>
        <h1>Galeria Videos </h1>
      </header>
      <div className="container">
        video
      </div>
    </div>
  )
}

export default Fotos