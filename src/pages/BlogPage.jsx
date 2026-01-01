import React from 'react';
import { motion } from 'framer-motion';
import './BlogPage.css';

const BlogPage = () => {
  const articles = [
    {
      title: 'The Future of Web Design',
      date: 'March 15, 2024',
      category: 'Design',
      excerpt: 'Exploring emerging trends and technologies shaping web design.'
    },
    {
      title: 'Mastering User Experience',
      date: 'March 10, 2024',
      category: 'UX/UI',
      excerpt: 'Principles and best practices for creating intuitive interfaces.'
    },
    {
      title: 'Performance Optimization Tips',
      date: 'March 5, 2024',
      category: 'Development',
      excerpt: 'Techniques to improve website speed and user experience.'
    },
    {
      title: 'Design Systems Explained',
      date: 'February 28, 2024',
      category: 'Design',
      excerpt: 'Building scalable and maintainable design systems.'
    },
    {
      title: 'React Best Practices',
      date: 'February 20, 2024',
      category: 'Development',
      excerpt: 'Modern patterns for writing efficient React applications.'
    },
    {
      title: 'Color Theory for Digital',
      date: 'February 15, 2024',
      category: 'Design',
      excerpt: 'Using color psychology to enhance user engagement.'
    },
  ];

  return (
    <div className="blog-page">
      <motion.section
        className="blog-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <h1>Blog</h1>
          <p>Insights on design, development, and digital strategy</p>
        </div>
      </motion.section>

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="blog-image" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{article.date}</span>
                    <span className="blog-category">{article.category}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a href="#" className="blog-link">Read More →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
