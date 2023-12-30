import React from 'react'
import { TopMenuBar } from './TopMenuBar'
import logo from './images/KaluKosten.png'
import ChangingBackgrounds from './ChangingBackgrounds'

const images = [
    require('./images/22dff515-fe8c-477f-ad68-38337835983d.jpg')
  ]

export const Trips = () => {
  return (
    <div>
        <TopMenuBar logo={logo}/>
        <ChangingBackgrounds images={images}/>
    </div>
  )
}