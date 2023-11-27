import React from 'react'

export const TopMenuBar = ({logo}) => {
  return (
    <div className='topMenuBar'>
      <img className='logo' src={logo} alt='logo'/>
      <a>Idioma</a>
      <a className='rDivider'>Excursiones</a>
      <a>Sobre nosotros</a>
      <a>Menu</a>
    </div>
  )
}
