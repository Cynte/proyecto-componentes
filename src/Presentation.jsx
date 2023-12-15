import React, { useState, useEffect } from 'react'
import sLogo from './images/sLogo.png'
import cal from './images/icn-calendario.png'

export const Presentation = ({images}) => {

  const [step, setStep] = useState(0)

  const stepChangeHandler = (event) => {
    setStep(parseInt(event.target.value))
  }

  const getBackgrounds = (images) =>{
    const imgArray = images.map((imageUrl, index)=>(
        <div key={index} className='background' style={{backgroundImage: `url(${imageUrl})`, opacity: index === step ? 1 : 0}}/>
    ))
    return imgArray
  }

  useEffect(() => {

    const intervalId = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='container'>
      <div className='scheduler'>
          <div id='titleBar'>
              <img src={sLogo}/>
              <h1>No te pierdas la aventura!</h1>
          </div>
          <p>Reservá de manera rápida y simple. Estás a pocos pasos de una gran experiencia.</p>
          <div className='datePicker'>
            <input type='text' readOnly='readonly' value='Seleccione fecha de llegada'/>
            <img src={cal}/>
          </div>
          <div className='datePicker'>
            <input type='text' readOnly='readonly' value='Seleccione fecha de salida'/>
            <img src={cal}/>
          </div>
          <div className='schedulerBtnWrapper'>
            <button className='schedulerBtn'>Ver excursiones</button>
          </div>
      </div>
      {getBackgrounds(images)}
      <input className='slider' hidden='true' type='range' min='0' max={images.length - 1} step='0' value={step} onChange={stepChangeHandler}/>
    </div>
  )
}
