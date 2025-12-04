import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const floatingIcons = [
    { Icon: FaAws, color: '#2196F3', delay: 0 },
    { Icon: FaDocker, color: '#2496ED', delay: 0.2 },
    { Icon: SiKubernetes, color: '#326CE5', delay: 0.4 },
    { Icon: SiTerraform, color: '#7B42BC', delay: 0.6 },
    { Icon: FaGitAlt, color: '#F05032', delay: 0.8 },
    { Icon: SiJenkins, color: '#D24939', delay: 1.0 }
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="floating-icons">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            className={`floating-icon icon-${index + 1}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{
              duration: 1.5,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
            style={{ color }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Chetan Namane
          </motion.h1>
          
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Cloud Support Engineer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Specializing in AWS, DevOps, and Cloud Infrastructure. Delivering 99.9% uptime 
            for business-critical applications at Hexaware Technologies.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#contact" className="cta-button primary">
              Get In Touch
            </a>
            <a href="#projects" className="cta-button secondary">
              View Projects
            </a>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="https://www.linkedin.com/in/chetan-namane/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/chetan080808" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Weekly Tickets</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20%</span>
            <span className="stat-label">Downtime Reduced</span>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
