import React from 'react';
import { motion } from 'framer-motion';
import './BlogPage.css';
import Blog1 from '../assets/blog-1-design-systems.jpg';
import Blog2 from '../assets/blog-2-user-psychology.png';
import Blog3 from '../assets/blog-3-performance.png';
import Blog4 from '../assets/blog-4-accessibility.jpg';
import Blog5 from '../assets/blog-5-digital-strategy.svg';
import Blog6 from '../assets/blog-6-web-trends.png.webp';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Design Systems: Building Scalable Digital Products',
      date: 'January 8, 2025',
      category: 'Design',
      image: Blog1,
      excerpt: 'Learn how to create a comprehensive design system that scales across your entire product. Discover the principles behind successful design systems and how they transform team productivity.',
      content: 'A well-crafted design system is the foundation of any successful digital product. It provides consistency, improves collaboration between designers and developers, and significantly speeds up the development process. In this comprehensive guide, we\'ll explore the key components that make design systems effective and how to implement them in your organization.',
      link: 'https://roadmap.sh/system-design'
    },
    {
      id: 2,
      title: 'Understanding User Psychology: Design for Human Behavior',
      date: 'January 1, 2025',
      category: 'UX/UI',
      image: Blog2,
      excerpt: 'Unlock the secrets of user psychology and apply them to your designs. Understand how users think, behave, and make decisions to create interfaces that feel intuitive and engaging.',
      content: 'User psychology is the cornerstone of great UX design. By understanding how people perceive, process, and respond to information, designers can create experiences that resonate deeply with users. This article explores cognitive biases, mental models, and behavioral patterns that influence design decisions.',
      link: 'https://www.userflow.com/blog/18-user-psychology-concepts-for-successful-ux-design'
    },
    {
      id: 3,
      title: 'Web Performance Optimization: Speed is a Feature',
      date: 'December 20, 2024',
      category: 'Development',
      image: Blog3,
      excerpt: 'Discover proven techniques to optimize your website\'s performance. Fast-loading websites lead to better user engagement, improved SEO, and higher conversion rates.',
      content: 'Performance optimization is not just about technical metrics—it\'s about creating a better experience for your users. Every millisecond matters. In this guide, we cover image optimization, code splitting, lazy loading, and other strategies to make your website blazingly fast.',
      link: 'https://www.tableau.com/kpi/what-is-kpi-dashboard'
    },
    {
      id: 4,
      title: 'Web Accessibility: Design for Everyone',
      date: 'December 10, 2024',
      category: 'Design',
      image: Blog4,
      excerpt: 'Creating accessible websites is both a moral imperative and a business necessity. Learn how to design and develop digital experiences that work for everyone, regardless of ability.',
      content: 'Web accessibility ensures that everyone can access and use digital content, regardless of their abilities. From color contrast to keyboard navigation, there are many factors to consider when designing for accessibility. This guide provides actionable strategies for improving your website\'s accessibility.',
      link: 'https://www.interaction-design.org/literature/topics/inclusive-design'
    },
    {
      id: 5,
      title: 'Digital Strategy: From Vision to Reality',
      date: 'December 1, 2024',
      category: 'Strategy',
      image: Blog5,
      excerpt: 'Transform your business vision into a actionable digital strategy. Learn the frameworks and processes that successful companies use to stay ahead in the digital landscape.',
      content: 'A strong digital strategy is essential for modern businesses. It aligns technology with business goals, guides product development, and ensures sustainable growth. This article breaks down the key components of a successful digital strategy and how to implement it.',
      link: 'https://kissflow.com/digital-transformation/create-digital-transformation-roadmap-guide/'
    },
    {
      id: 6,
      title: 'The Evolution of Web Design: Trends Shaping 2025',
      date: 'November 20, 2024',
      category: 'Design',
      image: Blog6,
      excerpt: 'Stay ahead of the curve with insights on emerging web design trends. From AI integration to immersive experiences, discover what\'s next in the world of web design.',
      content: 'The web design landscape is constantly evolving. New technologies, design patterns, and user expectations emerge regularly. In this article, we explore the trends that are shaping web design in 2025 and how you can leverage them in your projects.',
      link: 'https://www.geeksforgeeks.org/blogs/future-scope-of-web-designing/'
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
          <h1>Blog & Insights</h1>
          <p>Expert insights on design, development, and digital transformation that will change how you think about digital products</p>
        </div>
      </motion.section>

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="blog-image-wrapper">
                  <img src={article.image} alt={article.title} className="blog-image" />
                  <span className="blog-category-badge">{article.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a href={article.link} target="_blank" rel="noreferrer" className="blog-link">Read Full Article →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-cta">
        <div className="container">
          <motion.div
            className="newsletter-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated with Latest Insights</h2>
            <p>Subscribe to get the latest articles delivered to your inbox</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
