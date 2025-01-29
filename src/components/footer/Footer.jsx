
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


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
        <a href="https://www.facebook.com/profile.php?id=100079977856327"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/faustin-nshimiyimana842/"><FaLinkedin /></a>
        <a href="https://x.com/Nshimiy58198795"><FaXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Faustin F.S (S.W.E). All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer
