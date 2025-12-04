import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws } from 'react-icons/fa';
import { SiAmazonec2, SiAwslambda, SiAmazondynamodb } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Serverless Data Processing & Email Automation System',
      description: 'Designed and deployed a fully serverless data processing pipeline that automated email notifications using AWS cloud services. The project streamlined data collection through EC2, implemented event-driven processing with Lambda and DynamoDB Streams, and configured Amazon SES for instant email delivery. This solution reduced manual effort and enabled real-time communication with users, demonstrating expertise in serverless architecture and AWS service integration.',
      technologies: ['AWS EC2', 'Lambda', 'DynamoDB', 'DynamoDB Streams', 'Amazon SES', 'Node.js', 'IAM', 'CloudWatch'],
      highlights: [
        'Automated real-time email notifications',
        'Event-driven serverless architecture',
        'Reduced manual processing effort',
        'Scalable and cost-effective solution'
      ],
      icon: <SiAwslambda />,
      color: '#2196F3'
    },
    {
      title: 'AI Image Analyzer with AWS Rekognition',
      description: 'Built an intelligent image analysis system leveraging AWS Rekognition for automatic object detection, facial analysis, and content moderation. The application processes images uploaded to S3, triggers Lambda functions for analysis, stores results in DynamoDB, and provides real-time insights through a web dashboard. This project showcases the power of AWS AI/ML services in building production-ready computer vision applications.',
      technologies: ['AWS Rekognition', 'S3', 'Lambda', 'DynamoDB', 'API Gateway', 'CloudFront', 'Python', 'React'],
      highlights: [
        'Automatic object and face detection',
        'Content moderation and safety checks',
        'Real-time image analysis dashboard',
        'Serverless and highly scalable'
      ],
      icon: <FaAws />,
      color: '#1976D2'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world AWS solutions demonstrating cloud architecture and automation expertise
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="project-header" style={{ borderColor: project.color }}>
                  <div className="project-icon" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                    {project.icon}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <div className="project-content">
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <h4>Key Features</h4>
                    <ul>
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag" style={{ borderColor: project.color, color: project.color }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-footer">
                  <motion.a
                    href="https://github.com/chetan080808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> View on GitHub
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="project-link secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Learn More
                  </motion.a>
                </div>

                <div className="project-architecture">
                  <h4>Architecture Flow</h4>
                  <div className="architecture-diagram">
                    {index === 0 ? (
                      <div className="flow-steps">
                        <div className="flow-step">
                          <SiAmazonec2 />
                          <span>EC2 App</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                          <SiAmazondynamodb />
                          <span>DynamoDB</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                          <SiAwslambda />
                          <span>Lambda</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                          <FaAws />
                          <span>SES</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flow-steps">
                        <div className="flow-step">
                          <FaAws />
                          <span>S3 Upload</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                          <SiAwslambda />
                          <span>Lambda</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                          <FaAws />
                          <span>Rekognition</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                          <SiAmazondynamodb />
                          <span>Results</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
