import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';
import AboutImage from '../assets/About.jpeg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>About Me</h1>
          <p className="subtitle">Designer, Developer & Creative Problem Solver</p>
        </div>
      </motion.section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>My Journey</h2>
              <p>I'm a passionate designer and developer with expertise in creating beautiful, functional digital experiences. With years of experience in web design, UI/UX, and full-stack development, I've helped numerous clients bring their visions to life.</p>
              <p>My approach combines strategic thinking, creative design, and technical excellence to deliver solutions that exceed expectations.</p>
            </motion.div>

            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={AboutImage} alt="Faustin" className="about-image" />
            </motion.div>
          </div>

          <div className="about-stats-wrapper">
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="stat">
                <h3>7</h3>
                <p>Completed Projects</p>
              </div>
              <div className="stat">
                <h3>3</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </motion.div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
