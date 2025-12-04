import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-icon">
              <FaBriefcase />
            </div>
            <div>
              <h3>Cloud Support Engineer</h3>
              <h4>Hexaware Technologies</h4>
              <p className="experience-meta">
                <FaCalendar /> February 2024 - Present | <FaMapMarkerAlt /> Mumbai, Maharashtra
              </p>
            </div>
          </div>

          <div className="experience-content">
            <p>Delivering end-to-end support for AWS and DevOps infrastructure, ensuring high availability and reliability for business-critical applications.</p>
            
            <h4>Key Responsibilities</h4>
            <ul>
              <li>Built and managed EC2 instances, S3 buckets, IAM roles, and VPC networking</li>
              <li>Monitored AWS resources via CloudWatch and reduced downtime by 20%</li>
              <li>Supported 30+ AWS/DevOps tickets weekly with 95%+ SLA compliance</li>
              <li>Implemented infrastructure automation using Terraform</li>
              <li>Set up comprehensive monitoring with CloudWatch, Grafana, and Prometheus</li>
            </ul>

            <h4>Key Achievements</h4>
            <div className="achievements">
              <div className="achievement-item">
                <FaCheckCircle /> 99.9% uptime maintained
              </div>
              <div className="achievement-item">
                <FaCheckCircle /> 20% reduction in downtime
              </div>
              <div className="achievement-item">
                <FaCheckCircle /> 30+ weekly tickets resolved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
