import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mg2.png'
import HeaderSocial from './HeaderSocial'
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Start hidden and slightly below
      animate={{ opacity: 1, y: 0 }}   // Animate to visible and normal position
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 bg-white shadow-lg rounded-xl"
    >
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
    </motion.div>
  )
}

export default Header
