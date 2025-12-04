import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaGitAlt, FaPython, FaLinux } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins, SiPrometheus, SiGrafana } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AWS Services',
      skills: [
        { name: 'Amazon EC2', level: 90 },
        { name: 'Amazon S3', level: 90 },
        { name: 'AWS IAM', level: 88 },
        { name: 'Amazon VPC', level: 85 },
        { name: 'AWS Lambda', level: 80 }
      ]
    },
    {
      title: 'DevOps & Automation',
      skills: [
        { name: 'Terraform', level: 85 },
        { name: 'Jenkins', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Git/GitHub', level: 90 }
      ]
    },
    {
      title: 'Monitoring',
      skills: [
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 80 },
        { name: 'CloudWatch', level: 90 }
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 82 },
        { name: 'Shell Scripting', level: 88 },
        { name: 'Linux', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
