import React from 'react'
import sLogo from './images/sLogo.png'

export const Presentation = ({images}) => {


  return (
    <>
    <div className='scheduler'>
        <div id='titleBar'>
            <img src={sLogo}/>
            <h1>No te pierdas la aventura!</h1>
        </div>
        <p>Reservá de manera rápida y simple. Estás a pocos pasos de una gran experiencia.</p>
    </div>
    <img className='backgroundImage' src={images[1]}/>
    </>
  )
}
