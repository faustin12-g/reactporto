
import './experience.css'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
             </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
             <div>
             <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
             </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
              <div>
              <h4>mySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details '>
              <TbRosetteDiscountCheckFilled className='experience__details-icon'/>
              <div>
              <h4>django</h4>
              <small className='text-light'>Intermediate</small>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  )
}

export default Experience
