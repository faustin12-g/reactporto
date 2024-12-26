import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'


function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'> Faustin</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://twitter.com"><FaFacebookF /></a>
        <a href="https://linkedin.com"><FaFacebookF/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Faustin F.S (S.W.E). All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer
