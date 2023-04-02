
import React from 'react';
import { useState } from 'react';

const Slide = () => {
    const [MouseY, setMouseY] = useState();
    const HanldeMouse= e =>{
        console.log(e.clientY);
        setMouseY(e.clientY)

    }
  return (
    <div className='slide' onMouseUpCapture={HanldeMouse} onMouseDownCapture={HanldeMouse}>
     <p className='console'> {MouseY}</p>
    </div>
  )
}

export default Slide
