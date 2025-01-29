import { motion } from 'framer-motion'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'



function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
    <section id='contact'>
       <h5>Get in touch</h5>
       <h2>Contact me</h2>
       <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>
          Emial
        </h4>
        <h5>nshimiefaustinpeace@gmail.com</h5>
        <a href="mailto:nshimiefaustinpeace@gmail.com" target='__blank'>Send Me an Email</a>
        </article>
        <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4>
          Messanger
        </h4>
        <h5>Fau Stin</h5>
        <a href="https://m.me/fau.stin" target='__blank'>Send a Message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>
        Whatsapp
        </h4>
        <h5>0784291604</h5>
        <a href="https://api.whatsapp.com/send?pnone+250784291604" target='__blank'>Send a Message</a>
        </article>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" autocomplete="off" target="_top">
          <input type="hidden" name="access_key" value="dab53f7c-aa02-4afd-97fa-1afeb66cc55a" />
          <input type="text" name='name' placeholder="What's your name?" required/>
          <input type="email" name='email' placeholder='Your Email?' required/>
          <textarea name="message" rows="7" placeholder='Your Message?'></textarea>
          <button type='submit' className='btn btn-primary' id='send'>Send</button>
        </form>
       </div>
    </section>
    </motion.div>
  )
}

export default Contact
