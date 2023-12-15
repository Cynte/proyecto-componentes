import React from 'react'
import spanish from './images/spanishLogo.png'
import english from './images/englishLogo.png'

export const TopMenuBar = ({logo}) => {
  return (
    <div className='topMenuBar'>
      <img className='logo' src={logo} alt='logo'/>
      <img className='flag' src={spanish}/>
      <input className='slider' type='range' min='0' max='1'/>
      <img className='flag' src={english}/>
      <a className='rDivider'>Excursiones</a>
      <a>Sobre nosotros</a>
      <a>Menu</a>
    </div>
  )
}
