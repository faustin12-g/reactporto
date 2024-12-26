import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
     <h5>What I offer</h5>
     <h2>Services</h2>
     <div className="container services__container">
      <article className='service '>
        <div className="service__head">
           <h3>UI/UX</h3>
        </div>
        <ul className='service__list'>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>I very experienced in user-interface design. I have been worked on several projects</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'r adipisicing.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'r adipisicing.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'r adipisicing.</p>
          </li>
        </ul>
      </article>

      <article className='service '>
        <div className="service__head">
           <h3>Web development</h3>
        </div>
        <ul className='service__list'>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'r adipisicing.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'r adipisicing.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'r adipisicing.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>
      </article>
      <article className='service '>
        <div className="service__head">
           <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'ur adipisicing.</p>
          </li> className='service-icon'
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'ur adipisicing.</p>
          </li> className='service-icon'
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Lorem ipsum dolor sit amet consectet className='service-icon'ur adipisicing.</p>
          </li> className='service-icon'
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>
      </article>
     </div>
    </section>
  )
}

export default Services
