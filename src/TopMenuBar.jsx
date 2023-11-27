import React from 'react'
import logo from './images/logoAbleton.jpeg'

export const TopMenuBar = () => {
  return (
    <div className='topMenuBar'>
      <img className='logo' src={logo} alt='logo'/>
      <a>Live</a>
      <a>Push</a>
      <a>Link</a>
      <a>Shop</a>
      <a>Packs</a>
      <a>Helps</a>
      <a>More +</a>
      <a className='rSide'>Try Live for free</a>
      <a>Account</a>
      <a>Log Out</a>
    </div>
  )
}
