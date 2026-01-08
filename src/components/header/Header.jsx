import './header.css';
import CTA from './CTA';
import ME from '../../assets/mg2.png';
import HeaderSocial from './HeaderSocial';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation'; // New import

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>NSHIMIYIMANA Faustin</h1>
          <h3 className='text-light'>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Fullstack Developer",
                1000,
                "Web Designer",
                1000,
                "UI/UX Designer",
                1000,
                "SEO Specialist",
                1000,
                "AI/ML Enthusiast",
                1000,
                "Longlife learner",
                1000,
              ]}
              speed={30}
              deletionSpeed={70}
              repeat={Infinity}
            />
          </h3>
          <CTA />
          <HeaderSocial />

          <div className="me">
            <img src={ME} alt="profilePC" />
          </div>  
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </motion.div>
  );
}

export default Header;