
import CV from '../../assets/FaustinCV=3.pdf'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
      <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
      <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        
      </div>
    </motion.div>  
  )
}

export default CTA;
