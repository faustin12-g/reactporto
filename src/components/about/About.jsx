import React from 'react'
import './about.css'
import ME from '../../assets/image4.jpg'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImge" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              < FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ experience</small>
            </article>
            <article className='about__card'>
              < FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>N/A</small>
            </article>
            <article className='about__card'>
              < IoLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3 + Outstanding portofolioes</small>
            </article>
          </div>
          <p>I am a full-stack developer specializing in React, Tailwind CSS, and Django. I build modern, responsive websites and web applications with clean designs and smooth user experiences. From frontend styling to backend logic, I ensure everything works seamlessly. I also offer UI/UX design services, focusing on user-friendly interfaces and efficient workflows.</p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
        
      </div>
    </section>
  </motion.div>
  )
}

export default About
