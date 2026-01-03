import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectsPage.css';
import UKImage from '../assets/UK.png';
import SafeBodaImage from '../assets/SafeBoda.png';
import propAppImage from '../assets/propApp.png';
import PortfyImage from '../assets/Portfy.png';
import PennImage from '../assets/Penn.svg';
import NexusImage from '../assets/Nexus.png';
import UDSImage from '../assets/uds.png';
import PageMeta from '../components/PageMeta';

const ProjectsPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const projects = [
    {
      id: 1,
      title: 'Umuturage Kw\'isonga (UK)',
      category: 'Civic Tech',
      description: 'A citizen-focused platform that lets you report public service issues, track your complaints in real time, and receive updates via email. Empowering citizens, enabling responsive institutions, and promoting transparency for a more accountable Rwanda.',
      image: UKImage,
      liveLink: 'https://uksonga.pythonanywhere.com/',
      tech: 'Django, Bootstrap',
    },
    {
      id: 2,
      title: 'SafeBoda',
      category: 'Ride Sharing',
      description: 'Real-time rider booking platform with live car tracking and safety features. Connect riders with verified drivers seamlessly and securely.',
      image: SafeBodaImage,
      liveLink: 'https://safeboda-hfekeqfkhfeuanh2.southafricanorth-01.azurewebsites.net/',
      tech: 'Blazor, C#, Docker, GitHub Actions',
    },
    {
      id: 3,
      title: 'propApp',
      category: 'E-Commerce',
      description: 'An intuitive marketplace connecting buyers and sellers. Citizens can easily browse, buy, or rent products while owners can publish listings with detailed information.',
      image: propAppImage,
      liveLink: 'https://faustin12.pythonanywhere.com/',
      tech: 'Django, Python',
    },
    {
      id: 4,
      title: 'Portfy',
      category: 'Portfolio Builder',
      description: 'Empowering creators to build stunning personal portfolio websites. Users enter their descriptions and instantly generate professional portfolio pages.',
      image: PortfyImage,
      liveLink: 'https://portfy-sigma.vercel.app',
      tech: 'React, Django, Tailwind CSS',
    },
    {
      id: 5,
      title: 'Penn University Clone',
      category: 'Educational',
      description: 'A pixel-perfect recreation of Penn University\'s official website with responsive design and modern web standards.',
      image: PennImage,
      liveLink: 'https://penn-theta.vercel.app/',
      tech: 'React, Tailwind CSS',
    },
    {
      id: 6,
      title: 'Nexus',
      category: 'School Management',
      description: 'All-in-one school management software designed to streamline administration, teaching, and student engagement for modern educational institutions.',
      image: NexusImage,
      liveLink: 'https://quality-gap.vercel.app/',
      tech: 'Node.js, React, Tailwind CSS',
    },
    {
      id: 7,
      title: 'UDS - AI-Powered Healthcare',
      category: 'Healthcare Tech',
      description: 'Transforming patient care with real-time analytics, AI-driven diagnostics, telemedicine, and seamless health record management—empowering providers and patients for smarter, more personalized healthcare.',
      image: UDSImage,
      liveLink: 'https://www.ubuzima.digital/',
      tech: 'Node.js, JavaScript, WebSocket, ML',
    },
  ];

  return (
    <>
      <PageMeta
        title="Projects | Faustin Nshimiyimana - Web Development & Design"
        description="Explore Faustin Nshimiyimana's portfolio of innovative web projects. Full-stack development, React applications, and UI/UX design work."
        keywords="projects, portfolio, web development, React, Django, UI/UX design, case studies"
        url="https://nshimiyimana.me/projects"
      />
      <div className="projects-page">
        <motion.section
          className="projects-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="container">
            <h1>My Projects</h1>
            <p>Premium web design and development case studies</p>
          </div>
      </motion.section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="view-project-btn">
                      View Project
                      <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <motion.p
                    className={`project-description ${expandedId === project.id ? 'expanded' : 'collapsed'}`}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="project-tech">
                    <span className="tech-label">Built with:</span>
                    <span className="tech-stack">{project.tech}</span>
                  </div>
                  <button 
                    className="see-more-btn"
                    onClick={() => toggleExpand(project.id)}
                  >
                    {expandedId === project.id ? 'See Less ▲' : 'See More ▼'}
                  </button>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link">
                    Visit Live Site
                    <span className="icon">↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ProjectsPage;
