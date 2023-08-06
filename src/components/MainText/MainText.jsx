import React from 'react'
import './mainText.css'
import cash from '../../assets/CASH.svg'
import phone from '../../assets/intro-phone 1.svg'
import app from '../../assets/APP.svg'

const MainText = () => {
  return (
    <div className='main-text'>
        <img src={cash} alt="cash"/>
        <img src={phone} alt="phone" className='phone'/>
        <img src={app} alt="app" className='app-text'/>
    </div>
  )
}

export default MainText