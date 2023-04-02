import React ,{useEffect,useState}from 'react'

const Countdown = () => {
    const[segundo,setSegundo]=useState(10)
    //let seg= 60;
   
       useEffect(() => {

        const timer = setTimeout(() => {
               setSegundo(segundo-1)
             
               if(segundo===0){clearTimeout(timer)}
           }, 1000);


       }, [segundo]);
    
 
    
  return (

    <div>
        <div className='temporizador'>{segundo} sec</div>
    </div>
  )
}

export default Countdown
