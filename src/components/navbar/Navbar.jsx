import React from 'react'
import './navbar.css'
import dollar from '../../assets/dollar.svg'
import eye from '../../assets/eye.png'

const list=["Sign In", "Legal","Licenses","Security","Careers","Press","Support","Status","Code Blog"]

const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div  className='.navbar-image-dollar'>
      <img src={dollar} alt="dollar"/>
      </div>
      <div className='navbar-text'>
        {list.map((data)=>{
          return (
            <span className='sp-text'>{data}</span>
          )
        })}
      </div>
      <img src={eye} alt="eye" className='navbar-image-eye'/>
    </div>
  )
}

export default Navbar