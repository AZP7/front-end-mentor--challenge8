import React from 'react'
import '../Header/Header.css'
import logo from '../assets/images/logo.svg'


function Header({score}) {
    
  return (
          <header className='header d-flex justify-content-between border border-2 ps-4 pe-4 pt-3 pb-3'>
                <img src={logo} className='LogoImage' alt="Logo"/>

                <div className="score d-flex align-items-center justify-content-center flex-column border border-2 border-light">
                    <span>SCORE</span>
                    <span>{score}</span>  
                </div>
          </header>
)
}

export default Header