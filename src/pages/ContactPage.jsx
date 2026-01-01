import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be submitted to Web3Forms
  };

  return (
    <div className="contact-page">
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <h1>Let's Connect</h1>
          <p>Ready to start your next project? Let's talk.</p>
        </div>
      </motion.section>

      <section className="contact-section">
        <div className="container">
          {/* Contact Options */}
          <div className="contact-options">
            <motion.article
              className="contact-option"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>nshimiefaustinpeace@gmail.com</h5>
              <a href="mailto:nshimiefaustinpeace@gmail.com" target="_blank" rel="noreferrer">
                Send Me an Email
              </a>
            </motion.article>

            <motion.article
              className="contact-option"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <RiMessengerLine className="contact-option-icon" />
              <h4>Messenger</h4>
              <h5>Fau Stin</h5>
              <a href="https://m.me/fau.stin.743442" target="_blank" rel="noreferrer">
                Send a Message
              </a>
            </motion.article>

            <motion.article
              className="contact-option"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <BsWhatsapp className="contact-option-icon" />
              <h4>WhatsApp</h4>
              <h5>+250 791 894 346</h5>
              <a href="https://api.whatsapp.com/send?phone=+250791894346" target="_blank" rel="noreferrer">
                Send a Message
              </a>
            </motion.article>
          </div>

          {/* Contact Form Grid */}
          <div className="contact-grid">
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send a Message</h2>
              <form action="https://api.web3forms.com/submit" method="POST" autoComplete="off" target="_top" className="contact-form">
                <input type="hidden" name="access_key" value="dab53f7c-aa02-4afd-97fa-1afeb66cc55a" />
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="What's your name?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message?"
                    rows="6"
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </motion.div>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Contact Info</h2>
              <div className="info-block">
                <h4>Email</h4>
                <a href="mailto:nshimiefaustinpeace@gmail.com">nshimiefaustinpeace@gmail.com</a>
              </div>
              <div className="info-block">
                <h4>Phone</h4>
                <p>+250 791 894 346</p>
              </div>
              <div className="info-block">
                <h4>Location</h4>
                <p>Kigali, Rwanda</p>
              </div>
              <div className="info-block">
                <h4>Follow</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/faustin-nshimiyimana-928a6237b/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://x.com/Nshimiy58198795" target="_blank" rel="noreferrer" className="social-link">X</a>
                  <a href="https://github.com/faustin12-g" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
                  <a href="https://www.facebook.com/fau.stin.743442" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
                  <a href="https://www.instagram.com/peacef123/" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
