import './services.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'

function Services() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
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
          <p>UI/UX Strategy & Research.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>User Interface (UI) Design.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>User Experience (UX) Design.</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Branding & Visual Design.</p>
          </li>
        </ul>
      </article>

      <article className='service '>
        <div className="service__head">
           <h3>Web development</h3>
        </div>
        <ul className='service__list'>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Frontend Development: Responsive web design+SEO
             </p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Backend Development: APIs, DB Design, Authentication&authorization</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon' />
          <p>Full-Stack Development: Integration of frontend & backend systems</p>
          </li>
          <li className='service__item'> <BiCheck className='service-icon'/>
          <p>Website Maintenance & Optimization.</p>
          </li>
        </ul>
      </article>
     </div>
    </section>
    </motion.div>
  )
}

export default Services
