import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import PageMeta from '../components/PageMeta';

const NotFoundPage = () => {
  return (
    <>
      <PageMeta
        title="404 Not Found | Faustin Nshimiyimana"
        description="This page doesn't exist. Return to Faustin Nshimiyimana's portfolio to explore projects, about, and services."
        keywords="404, not found, error, page not found"
        url="https://nshimiyimana.me/404"
      />
      <div className="not-found-page">
        <div className="not-found-container">
          <motion.div
            className="not-found-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="error-code"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              404
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Page Not Found
            </motion.h1>

            <motion.p
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </motion.p>

            <motion.p
              className="error-submessage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              But don't worry, you can always find what you're looking for on my portfolio.
            </motion.p>

            <motion.div
              className="error-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View My Projects
              </Link>
            </motion.div>

            <motion.div
              className="error-illustration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
