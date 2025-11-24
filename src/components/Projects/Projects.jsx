import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';
import hospitalImg from '../../assets/projects/hospital_management.png';
import faceImg from '../../assets/projects/face_recognition.png';
import realEstateImg from '../../assets/projects/real_estate.png';
import webGrowImg from '../../assets/projects/web_grow_solutions.png';
import jobPortalImg from '../../assets/projects/job_portal.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description:
        'A comprehensive hospital management system that streamlines data handling across departments with role-based login and full admin control over doctors and patients.',
      tech: ['Java', 'Spring Boot', 'Spring JPA', 'Spring MVC', 'Thymeleaf', 'Hibernate', 'MySQL'],
      image: hospitalImg,
      span: styles.span2
    },
    {
      id: 2,
      title: 'Face Recognition Attendance System',
      description:
        'An automated attendance system that identifies individuals using facial recognition technology and logs attendance in real time.',
      tech: ['Python', 'OpenCV', 'Flask', 'Pandas', 'HTML5', 'CSS3'],
      image: faceImg,
      span: styles.span1
    },
    {
      id: 3,
      title: 'Real Estate Application',
      description:
        'A fully responsive real estate platform built with a mobile-first design. Includes authentication, protected routes, real-time Firebase sync, smooth UI animations, and toast notifications.',
      tech: ['React', 'Firebase', 'Vite', 'Tailwind CSS'],
      image: realEstateImg,
      span: styles.span2
    },
    {
      id: 4,
      title: 'Web Grow Solutions',
      description:
        'A modern business website featuring dynamic, API-driven content. Built for speed and responsiveness using React and Vite, with a Node.js and Express.js backend for data handling.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js'],
      image: webGrowImg,
      span: styles.span1
    },
    {
      id: 5,
      title: 'Job Portal',
      description:
        'A complete job portal application featuring job posting, advanced search filters, and a secure authentication system. Designed with a clean and responsive user interface.',
      tech: ['React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
      image: jobPortalImg,
      span: styles.span1
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>Featured Projects</h2>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.card} ${project.span}`}
            >
              {/* Image Background */}
              <div className={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.image} 
                />
                <div className={styles.overlay} />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.contentInner}>
                  <div className={styles.links}>
                    <div className={styles.linkGroup}>
                      <a href="#" className={styles.iconLink}>
                        <Github size={20} />
                      </a>
                      <a href="#" className={styles.iconLink}>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className={styles.title}>
                    {project.title}
                  </h3>
                  
                  <p className={styles.description}>
                    {project.description}
                  </p>

                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className={styles.techTag}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
