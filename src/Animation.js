import React, { useState,useEffect } from 'react'

const Animation = () => {
    const [start, setstart] = useState(
        {
            'position':'absolute',
            'top':'0',
            'left':'0',
            'width':'100vw',
            'height':'100vh',
            'backgroundImage': 'linear-gradient(60deg,rgb(255, 255, 255),rgb(38, 90, 94))',
            'opacity':'1',
            'transition':'all 2s',
            'display':'flex',
            'flexDirection':'column',
            'justifyContent':'center',
            'zIndex':'1000000'
        });
        const [intro, setintro] = useState({
            'position':'absolute',
            'top':'0',
            'left':'0px',
            'width': '100vw',
            'height': '100vh',
            'backgroundImage': 'linear-gradient(60deg,rgb(255, 255, 255),rgb(38, 90, 94))',
            'overflow': 'hidden',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'opacity':'1',
            'transition':'all 1s',
            'display':'flex', 
            'flexDirection':'column',
            'justifyContent':'center',
         
            
            
        });
        const [tecleo, settecleo] = useState({
            'position':'absolute',
            'top':'0',
            'left':'0px',
            'opacity':'1',
            'overflow': 'hidden',
            'display':'none',
            'transition':'all 1s',
            'width':'100vw',
            'height':'100vh',
            'fontFamily':'Major Mono Display',
            'color':'black',
            'fontSize':'40px',
            'flexWrap':'wrap',
            'justifyContent':'center',
            'alignItems':'center',
            'backgroundImage': 'linear-gradient(60deg,rgb(255, 255, 255),rgb(38, 90, 94))',
            });
    const array=[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','G','i','o','v','a','n','n','a',' ',' ','T','r','i','n','g','o','l','o'];
    const[newArray,setnewArray]=useState([]);
           
 
 
        const [cont, setcont] = useState(0);
        const [contname, setContname] = useState(0);
        const[contador,setContador]=useState(0)
        const img= require.context('./galleria');
        const Paths=img.keys();
         let cambio=cont
        
         useEffect(() => { 
         
          setContador(contador+1)
        
         
            const tec = setTimeout(() => {
           
              setnewArray([...newArray,`${array[contador]}`])
            }, 100);
            if(contador===array.length){
              clearTimeout(tec);
              settecleo({...tecleo,
                  'opacity':'0'
                })
                setstart({...start,
                  'opacity':'0'
                })
              setTimeout(() => {
                setstart({...start,'display':'none'})
              },1000 );
            }
           }, [newArray]);
        
         
         
         
        useEffect(() => {
            const timer= setTimeout(() => {  
                  if(cont<Paths.length-1){  
                  setcont(cont+1)}
                  else{
                  clearTimeout(timer);
                  setintro({'display':'none'})
                  setintro({...intro,'opacity':'0'})
                  setTimeout(() => {
                        
                        settecleo({...tecleo,'display':'flex'});
                      
               
                }, 1000);
              
               const activacion= setTimeout(() => {
                     
                     clearTimeout(activacion);
                     
                     
                }, 1000);
              }   
             }, 200);
          }, [cambio]);
        
          return (
    <div style={start}>
       <div style={tecleo}><p style={{'padding':'50px'}}>{newArray}</p></div>
      <div style={intro}>  
     
      <div className='fotosgiointro'>
      <div className='divintrouno'><img src={require(`./galleria${Paths[cont].slice(1)}`)}/></div>
      <div className='divintrodos'> </div>
    
    </div>
    


    </div>
   
    </div>
  )
}

export default Animation
