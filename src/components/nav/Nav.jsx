import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from 'react';

function Nav() {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><FaHome/>  <p>Home</p></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><FaUser/>  <p>About</p></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}><FaHeartbeat/>  <p>Services</p></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><FaLaptopCode/>  <p>Experience</p></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><MdOutlineMessage/> <p>Contact</p></a>
      
    </nav>
  )
}

export default Nav
