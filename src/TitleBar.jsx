import React from 'react'
import sLogo from './images/sLogo.png'

const TitleBar = () => {
  return (
    <div id='titleBar'>
        <img src={sLogo}/>
        <h1>No te pierdas la aventura!</h1>
    </div>
  )
}

export default TitleBar