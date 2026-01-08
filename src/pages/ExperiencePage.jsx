import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './ExperiencePage.css';
import PageMeta from '../components/PageMeta';

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const experiences = [
    {
      id: 1,
      title: 'Ingazi Ambassador',
      company: 'Ministry of Youth and Art',
      location: 'Rwanda',
      period: '08/2025 – Present',
      type: 'Current',
      highlights: [
        'Coordinated youth outreach programs to connect young talent with employment opportunities',
        'Managed participant data collection and tracking systems',
        'Facilitated connections between youth and potential employers',
      ],
      skills: ['Youth Development', 'Community Engagement', 'Data Management'],
    },
    {
      id: 2,
      title: 'Freelance Software Developer',
      company: 'Ingoga Technologies',
      location: 'Remote',
      period: '10/2025 – 12/2025',
      type: 'Contract',
      highlights: [
        'Engineered "Ubuzima Digital System (UDS)", a real-time queue management solution for hospitals',
        'Implemented WebSockets for instant updates on hospital screens',
        'Designed and deployed system to improve patient wait time management',
      ],
      skills: ['WebSockets', 'Real-time Systems', 'Healthcare Technology', 'Full-Stack Development'],
    },
    {
      id: 3,
      title: 'Software Developer Intern',
      company: 'Zaantu Ltd',
      location: 'Remote',
      period: '02/2025 – 08/2025',
      type: 'Internship',
      highlights: [
        'Developed features for "Appo-inventory-manager", a cross-platform business inventory application',
        'Ensured consistent performance and user experience across iOS and Android platforms',
        'Collaborated with team to deliver production-ready features',
      ],
      skills: ['Flutter', 'Cross-Platform Development', 'Mobile Development', 'Inventory Management'],
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'SaaS Portfolio Builder (Portfy)',
      role: 'Full-Stack Developer',
      tech: ['Django', 'React.js', 'PostgreSQL'],
      description: 'Engineered a full-stack SaaS platform enabling users to generate dynamic portfolio websites through simple data entry forms.',
      highlights: [
        'Developed backend APIs using Django REST Framework',
        'Built responsive React frontend with real-time preview',
        'Implemented user authentication and payment processing',
      ],
    },
    {
      id: 2,
      name: 'Ride-Sharing Platform (Safeboda)',
      role: 'Full-Stack Developer',
      tech: ['.NET Core', 'Blazor', 'C#', 'SQL Server'],
      description: 'Developed a two-sided marketplace application connecting riders with drivers, implementing complex backend logic for booking and matching.',
      highlights: [
        'Built two-sided marketplace with complex booking system using .NET Core',
        'Created seamless SPA frontend with Blazor for both rider and driver portals',
        'Implemented real-time location tracking and driver matching algorithms',
        'Ensured scalable architecture for handling multiple concurrent users',
      ],
    },
  ];

  return (
    <>
      <PageMeta
        title="Experience & Projects | Faustin Nshimiyimana"
        description="My professional experience, freelance projects, and portfolio of work."
        name="Experience"
      />

      <motion.div
        className="experience-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <section className="experience-hero">
          <motion.div
            className="experience-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Professional Experience</h1>
            <p>Crafting solutions that make an impact across diverse industries and technologies</p>
          </motion.div>
        </section>

        {/* Work Experience Section */}
        <section className="experience-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaBriefcase className="section-icon" />
              <h2>Work Experience</h2>
              <p>My professional journey and career highlights</p>
            </motion.div>

            <motion.div
              className="experience-timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                  variants={itemVariants}
                >
                  <div className="timeline-marker">
                    <div className="marker-icon">
                      <FaBriefcase />
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <h3>{exp.title}</h3>
                        <span className={`badge badge-${exp.type.toLowerCase()}`}>
                          {exp.type}
                        </span>
                      </div>

                      <div className="company-info">
                        <p className="company">{exp.company}</p>
                      </div>

                      <div className="experience-meta">
                        <div className="meta-item">
                          <FaCalendarAlt />
                          <span>{exp.period}</span>
                        </div>
                        <div className="meta-item">
                          <FaMapMarkerAlt />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="experience-highlights">
                        <h4>Key Achievements:</h4>
                        <ul>
                          {exp.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="experience-skills">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="projects-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaBriefcase className="section-icon" />
              <h2>Notable Projects</h2>
              <p>Significant projects that demonstrate my technical capabilities</p>
            </motion.div>

            <motion.div
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project) => (
                <motion.div key={project.id} className="project-card" variants={itemVariants}>
                  <div className="project-header">
                    <h3>{project.name}</h3>
                    <p className="project-role">{project.role}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <h4>Project Highlights:</h4>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h5>Technologies Used:</h5>
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="experience-cta">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Let's Work Together</h2>
            <p>Interested in discussing my experience or collaborating on a project?</p>
            <a href="/contact" className="btn btn-primary">
              Start a Conversation
            </a>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default ExperiencePage;
