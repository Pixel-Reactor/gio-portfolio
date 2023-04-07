import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import covid from './videos/ahora-depende-de-vos.mp4'
import navidad from './videos/Navidad Argentina, SL.mp4'
import back1 from './videos/Backstage01.mp4'
import back2 from './videos/Backstage02.mp4'
import back3 from './videos/Backstage03.mp4'
import calden from './videos/Calden.mp4'
import cover1 from './Images/cover1.jpg'
import cover2 from './Images/cover2.jpg'
import cover4 from './Images/cover4.jpg'
import cover5 from './Images/cover5.jpg'
import cover3 from './Images/cover3.jpg'
import tres from './Images/3.jpg'
const Videos = (props) => {
  const [selection, setselection] = useState(covid);

  const messagesEndRef = useRef()
  useEffect(() => {

    messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });


  }, []);


  return (
    <div className='pd20 maincontainer'>

      <header className='headergallery'>
        <h1>Galeria Videos </h1>
      </header>
      <div className="containervideo">
        <video key={selection} width="95%" height="300" autoPlay muted controls >
        <source src={selection} type="video/mp4" />
        </video>
      </div>
      <h2>Otros</h2>
      <div className="fxcntcnt videos">

        <video className={selection === covid ? 'videosel' : 'video'} onClick={() => setselection(covid)} width="150px" height="300" poster={cover1} muted  >
          <source src={covid} type="video /mp4" />
        </video>
        <video className={selection === navidad ? 'videosel' : 'video'} onClick={() => setselection(navidad)} width="150px" height="300" poster={cover2} muted  >
          <source src={navidad} type="video/mp4" />
        </video>
        <video className={selection === back1 ? 'videosel' : 'video'} onClick={() => setselection(back1)} width="150px" height="300" poster={tres} muted  >
          <source src={back1} type="video/mp4" />
        </video>
        <video className={selection === back2 ? 'videosel' : 'video'} onClick={() => setselection(back2)} width="150px"  poster={cover4} height="300" muted  >
          <source src={back2} type="video/mp4" />
        </video>
        <video className={selection === back3 ? 'videosel' : 'video'} onClick={() => setselection(back3)} width="150px" height="300"  poster={cover5} muted  >
          <source src={back3} type="video /ogg" />
        </video>
        <video className={selection === calden ? 'videosel' : 'video'} onClick={() => setselection(calden)} width="150px" height="300" poster={cover3} muted  >
          <source src={calden} type="video /ogg" />
        </video>


      </div>
      <div ref={messagesEndRef} />
    </div>
  )
}

export default Videos