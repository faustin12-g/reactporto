import './portofolio.css'
import IMG1 from '../../assets/prop.png'
import IMG2 from '../../assets/logo.png'
import IMG4 from '../../assets/TOOGEDA.png'
import { motion } from 'framer-motion'



const data = [
  {
    id:1,
    image:IMG1,
    title: 'Online Property Management',
    github:'https://github.com/faustin12-g/improved-property-management-system-with-ui-djangoninjas',
    demo: 'https://faustin12.pythonanywhere.com/'

  },
  {
    id:2,
    image:IMG2,
    title: 'School management online',
    github:'https://github.com/faustin12-g/Quality-gap',
    demo: 'https://quality-gap.vercel.app/'

  },
  {
    id:3,
    image:IMG4,
    title: 'Meet, communicate and train together',
    github:'https://github.com/faustin12-g/English_Study_App',
    demo: 'https://github.com/faustin12-g/English_Study_App'

  },
]
function Portofolio() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portofolio__item'>
          <div className="portofolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portofolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
    </motion.div>
  )
}

export default Portofolio
