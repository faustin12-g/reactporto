import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';
import PortfyImage from '../assets/Portfy.png';
import SafeBodaImage from '../assets/SafeBoda.png';
import UDSImage from '../assets/uds.png';

const HomePage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const featuredProjects = [
    {
      id: 1,
      title: 'Portfy',
      description: 'Empowering creators to build stunning personal portfolio websites. Users enter their descriptions and instantly generate professional portfolio pages.',
      image: PortfyImage,
      link: 'https://portfy-sigma.vercel.app',
      tech: 'React, Django, Tailwind CSS',
    },
    {
      id: 2,
      title: 'SafeBoda',
      description: 'Real-time rider booking platform with live car tracking and safety features. Connect riders with verified drivers seamlessly and securely.',
      image: SafeBodaImage,
      link: 'https://safeboda-hfekeqfkhfeuanh2.southafricanorth-01.azurewebsites.net/',
      tech: 'Blazor, C#, Docker, GitHub Actions',
    },
    {
      id: 3,
      title: 'UDS - AI-Powered Healthcare',
      description: 'Transforming patient care with real-time analytics, AI-driven diagnostics, telemedicine, and seamless health record management.',
      image: UDSImage,
      link: 'https://www.ubuzima.digital/',
      tech: 'Node.js, JavaScript, WebSocket, ML',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-label">
              <span className="label-line"></span>
              <span className="label-text">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              Creative Designer & Developer
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              I craft elegant, purposeful digital experiences that inspire and engage. Specializing in web design, UI/UX, and modern development.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Background */}
          <div className="hero-bg">
            <div className="bg-gradient"></div>
            <div className="bg-accent"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-preview">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured Work
          </motion.h2>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} className="card-image" />
                  <div className="card-overlay">
                    <a href={project.link} target="_blank" rel="noreferrer" className="card-link">
                      View Project →
                    </a>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <motion.p
                    className={`card-description ${expandedId === project.id ? 'expanded' : 'collapsed'}`}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="card-tech">
                    <span className="card-tech-label">Built with:</span>
                    <span className="card-tech-stack">{project.tech}</span>
                  </div>
                  <button 
                    className="card-see-more"
                    onClick={() => toggleExpand(project.id)}
                  >
                    {expandedId === project.id ? 'See Less ▲' : 'See More ▼'}
                  </button>
                  <a href={project.link} target="_blank" rel="noreferrer" className="card-cta">
                    Learn More ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="view-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/projects" className="btn btn-text">
              View All Projects
              <span className="arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to start your next project?</h2>
          <p>Let's collaborate to create something extraordinary</p>
          <Link to="/contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
