import React from 'react'
import './about.css'
import ME from '../../assets/image4.jpg'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
function About() {
  return (
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
              <small>5+ experience</small>
            </article>
            <article className='about__card'>
              < FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5+</small>
            </article>
            <article className='about__card'>
              < IoLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt cumque sint rem, odit qui aliquam accusamus inventore dolorem facilis ipsum dignissimos illum ut sed, laudantium dolores illo aliquid officiis aut!</p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About
