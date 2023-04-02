import React ,{useState,useEffect}from 'react'

const SlideAndroid = () => {
const [touchstart, settouchstart] = useState();
const [touchend, settouchend] = useState();
const HandleToucStart = e =>{
    e.preventDefault();
settouchstart(`${e.touches[0].pageX}`);

}
const HandleTouchEnd = e =>{
    e.preventDefault();
    settouchend(`${e.changedTouches[0].pageX}`);
    
    }
  return (
    <div className='android'  onTouchEnd={HandleTouchEnd} onTouchStart={HandleToucStart}>
        <p>Touch Start{touchstart}</p>
        <p>Touch End{touchend}</p>
        </div>
  )
}

export default SlideAndroid