import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';
import './EducationPage.css';
import PageMeta from '../components/PageMeta';

const EducationPage = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const education = [
    {
      id: 1,
      institution: 'University of Rwanda',
      location: 'Kigali, Rwanda',
      degree: 'Bachelor of Information Technology',
      expectedGraduation: 'Expected: 2027',
      description: 'Comprehensive program covering software development, database management, and system architecture.',
      highlights: [
        'Full-stack web development',
        'Mobile application development',
        'Database design and management',
        'Software engineering principles',
      ],
    },
  ];

  const certificates = [
    {
      id: 1,
      title: 'Intensive Software Engineering Training Program',
      issuer: 'THE GYM Rwanda',
      icon: <FaCertificate />,
      skills: ['Advanced programming', 'Best practices', 'Project management'],
    },
    {
      id: 2,
      title: '2nd Place Winner - Hello Tractor E-commerce Hackathon',
      issuer: 'Hello Tractor',
      icon: <FaAward />,
      skills: ['Problem-solving', 'Team collaboration', 'Innovation'],
    },
    {
      id: 3,
      title: 'Certificate in Web Development',
      issuer: 'Professional Development',
      icon: <FaCertificate />,
      skills: ['Frontend development', 'Backend development', 'Responsive design'],
    },
    {
      id: 4,
      title: 'English Proficiency Certificate',
      issuer: 'RDB / EF Education',
      icon: <FaCertificate />,
      skills: ['Professional communication', 'Technical writing', 'Language proficiency'],
    },
  ];

  return (
    <>
      <PageMeta
        title="Education & Certifications | Faustin Nshimiyimana"
        description="My educational background, degree programs, and professional certifications."
        name="Education"
      />

      <motion.div
        className="education-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <section className="education-hero">
          <motion.div
            className="education-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Education & Certifications</h1>
            <p>Building a strong foundation in technology and continuous professional growth</p>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="section-icon" />
              <h2>Academic Background</h2>
              <p>My formal education and academic achievements</p>
            </motion.div>

            <motion.div
              className="education-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.div key={edu.id} className="education-card" variants={itemVariants}>
                  <div className="education-card-header">
                    <div className="education-card-info">
                      <h3>{edu.degree}</h3>
                      <h4>{edu.institution}</h4>
                      <p className="location">{edu.location}</p>
                      <span className="graduation-date">{edu.expectedGraduation}</span>
                    </div>
                  </div>
                  <p className="education-description">{edu.description}</p>
                  <div className="highlights">
                    <h5>Key Areas of Study:</h5>
                    <ul>
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certificates-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaAward className="section-icon" />
              <h2>Professional Certifications & Awards</h2>
              <p>Industry recognized certifications and achievements</p>
            </motion.div>

            <motion.div
              className="certificates-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certificates.map((cert) => (
                <motion.div key={cert.id} className="certificate-card" variants={itemVariants}>
                  <div className="certificate-icon">{cert.icon}</div>
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <div className="cert-skills">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="education-cta">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to collaborate on your project?</h2>
            <p>Let's discuss how my education and experience can benefit your team</p>
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default EducationPage;
