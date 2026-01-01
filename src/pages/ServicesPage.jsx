import React from 'react';
import { motion } from 'framer-motion';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    { title: 'Web Design', description: 'Beautiful, responsive web design' },
    { title: 'UI/UX Design', description: 'User-centered design solutions' },
    { title: 'Development', description: 'Full-stack web development' },
    { title: 'Branding', description: 'Complete brand identity design' },
    { title: 'Consulting', description: 'Digital strategy consultation' },
    { title: 'Optimization', description: 'Performance & SEO optimization' },
  ];

  return (
    <div className="services-page">
      <motion.section
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <h1>Services</h1>
          <p>Professional design and development services</p>
        </div>
      </motion.section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
