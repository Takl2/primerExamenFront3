import React, { useState } from 'react'

const Card = ({estilo, banda}) =>{
    const [visible,setVisible] = useState(true)

    const handleChange = ()=>{
        setVisible(!visible)
    }


  return (
    <>
        {
            visible ? (<div className='card'>
            <h2>Hola, estas escuchando</h2>
            <p>{estilo}</p>
            <p>{banda}</p>
            <button style={{color :"black"}} onClick={handleChange}>Eliminar</button>
        </div>

            ):(undefined)
        }
    
    </>
  )
}

export default Card