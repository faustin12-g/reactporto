import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function HeaderSocial() {
  return (
    <div className='header__socials'> 
    <a href="https://www.linkedin.com/in/faustin-nshimiyimana842/" target='_blank'><FaLinkedin/></a>
    <a href="https://github.com/faustin12-g" target='_blank'><FaGithub/></a>
    <a href="https://x.com/Nshimiy58198795" target='_blank'><FaXTwitter/></a>
      
    </div>
  )
}

export default HeaderSocial
