import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Fotos = (props) => {
    const navigate = useNavigate()
    console.log(props.loc)
    const [start, setstart] = useState({
        opacity: '0',
        transition: 'all 2s'
    });
    useEffect(() => {
        if (props.loc === 'contactos') {
            setstart({
                opacity: '1'
            })
        } else {
            setstart({
                opacity: '0'
            })
        }
    }, [props.loc]);
    return (
        <div style={start} className='maincontainer'>
            <h1>Contactos </h1>
            <div className='headergallery'>

            </div>
        </div>
    )
}

export default Fotos