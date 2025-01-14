import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mg2.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>NSHIMIYIMANA Faustin</h1>
        <h5 className='text-light'>Fullstack</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="profilePC " />
          </div>  
          <a href="#contact" className='scroll__down'>Scroll Down </a>
      </div>
    </header>
  )
}

export default Header
