import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaServer, FaChartLine, FaUserTie } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaAws />,
      title: 'AWS Infrastructure',
      description: 'Multi-account AWS management with expertise in EC2, S3, IAM, VPC, RDS, and Lambda services'
    },
    {
      icon: <FaServer />,
      title: 'DevOps Automation',
      description: 'Building CI/CD pipelines with Jenkins, Terraform IaC, and Docker containerization'
    },
    {
      icon: <FaChartLine />,
      title: 'Performance Optimization',
      description: 'Proactive monitoring with CloudWatch, Grafana, and Prometheus to ensure system reliability'
    },
    {
      icon: <FaUserTie />,
      title: 'Incident Management',
      description: 'Handling 30+ tickets weekly with 95%+ SLA compliance through structured troubleshooting'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <span className="highlight">Cloud Support Engineer at Hexaware Technologies</span> with 
              a genuine passion for cloud computing. What started as fascination with AWS free-tier labs 
              has evolved into a professional journey of building and maintaining business-critical infrastructure.
            </p>
            <p>
              Through proactive monitoring and root cause analysis, I've achieved
              <span className="highlight"> 99.9% uptime</span> for production applications while reducing 
              system downtime by <span className="highlight">20%</span>.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
