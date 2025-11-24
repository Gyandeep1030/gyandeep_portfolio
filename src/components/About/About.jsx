import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const education = [
    {
      degree: 'Masters of Computer Application (MCA)',
      institution: 'KR Mangalam University',
      period: '2023 – 2025',
      description: 'Pursuing advanced studies in computer applications.'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'PDM University',
      period: '2020 – 2023',
      description: 'Graduated with a strong foundation in computer science.'
    },
    {
      degree: '12th Grade (CBSE Board)',
      institution: 'Govt Co-ed Sr. Sec School, New Delhi',
      period: '2020',
      description: 'Completed higher secondary education.'
    }
  ];

  const experience = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Qspider',
      location: 'Gurugram',
      period: 'Aug 2024 – Dec 2024',
      description: [
        'Developed and maintained responsive web applications using React.js, HTML5, CSS3, and JavaScript.',
        'Built and optimized RESTful APIs using Node.js.',
        'Used Git and GitHub for version control and collaboration.'
      ]
    },
    {
      role: 'Java Developer Intern',
      company: 'Octa Net Services Pvt. Ltd',
      location: 'Remote',
      period: 'June 2024 – Aug 2024',
      description: [
        'Designed & developed a web E-commerce application from scratch with back-end on Spring Boot, Hibernate, MySQL and front-end on Thymeleaf, HTML5, CSS3, Bootstrap.',
        'Added features such as user registration, book tracking, and history tracking using Java.'
      ]
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>About Me</h2>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.content}>
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.section}
          >
            <h3 className={styles.subHeading}>Who I Am</h3>
            <p className={styles.text}>
              I am a passionate Full Stack Developer with a strong foundation in computer science principles. 
              I specialize in building scalable web applications using modern technologies like React, Node.js, and Spring Boot. 
              With a keen eye for detail and a drive for excellence, I enjoy solving complex problems and creating user-centric solutions.
            </p>
          </motion.div>

          {/* Split Section for Education and Experience */}
          <div className={styles.splitSection}>
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.column}
            >
              <h3 className={styles.columnHeading}>Education</h3>
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.expHeader}>
                        <div>
                          <h4 className={styles.role}>{edu.degree}</h4>
                          <p className={styles.company}>{edu.institution}</p>
                        </div>
                        <div className={styles.period}>
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className={styles.text} style={{ marginBottom: 0, textAlign: 'left' }}>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.column}
            >
              <h3 className={styles.columnHeading}>Professional Experience</h3>
              <div className={styles.timeline}>
                {experience.map((exp, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.expHeader}>
                        <div>
                          <h4 className={styles.role}>{exp.role}</h4>
                          <p className={styles.company}>{exp.company} | {exp.location}</p>
                        </div>
                        <div className={styles.period}>
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ul className={styles.expList}>
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
