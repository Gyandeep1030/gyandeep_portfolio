import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Briefcase, GraduationCap, CheckCircle2, Sparkles 
} from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const stats = [
    { 
      value: '15+', 
      label: 'Projects Completed', 
      sub: 'Mobile • Web • TV Apps' 
    },
    { 
      value: '2+', 
      label: 'Years Experience', 
      sub: 'Full Stack & Mobile Development' 
    },
    { 
      value: '10+', 
      label: 'Modern Tech Stacks', 
      sub: 'React Native • Node • Cloud' 
    },
    { 
      value: '100%', 
      label: 'Commitment to Quality', 
      sub: 'Clean Code & Reliable Delivery' 
    },
  ];

  const education = [
    {
      degree: 'Masters of Computer Application (MCA)',
      institution: 'KR Mangalam University',
      period: '2023 – 2025',
      status: 'Completed',
      description: 'Advanced studies in computer applications focusing on scalable software architecture, distributed cloud systems, and modern mobile/web engineering.'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'PDM University',
      period: '2020 – 2023',
      status: 'Graduated',
      description: 'Solid computer science foundation covering data structures & algorithms (DSA), object-oriented programming (OOP), relational databases, and web technologies.'
    },
    {
      degree: '12th Grade (CBSE Board)',
      institution: 'Govt Co-ed Sr. Sec School, New Delhi',
      period: '2020',
      status: 'Completed',
      description: 'Senior secondary education with focus on mathematics, computer science fundamentals, analytical reasoning, and scientific principles.'
    }
  ];

  const experience = [
    {
      role: 'React Native Developer',
      company: 'Oodles Technologies',
      location: 'Gurugram',
      period: 'Dec 2025 – Present',
      description: [
        'Architecting and developing scalable cross-platform mobile applications using React Native with optimized component structures and modular codebase.',
        'Implementing secure RESTful API integrations, asynchronous data handling, and advanced state management for high-performance mobile experiences.',
        'Optimizing application performance through efficient rendering strategies, memory management, and debugging using modern development tools.'
      ]
    },
    {
      role: 'React Developer',
      company: 'Anteris Software Solutions',
      location: 'Full-time',
      period: 'Jan 2025 – Nov 2025',
      description: [
        'Developed and maintained scalable single-page applications using React.js, implementing reusable components and modern ES6+ standards.',
        'Integrated backend services via REST APIs, seamless data synchronization and optimized UI rendering.',
        'Improved application responsiveness and performance through code-splitting, lazy loading, and efficient state management techniques.'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Qspider',
      location: 'Gurugram',
      period: 'Aug 2024 – Dec 2024',
      description: [
        'Built responsive web applications using React.js, Redux, and modern JavaScript, ensuring cross-browser compatibility.',
        'Designed and consumed RESTful APIs using Node.js, improving data flow efficiency between client and server.',
        'Enhanced application performance by optimizing component re-rendering and implementing API response caching.'
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
          <div className={styles.topBadge}>
            <span>Background & Development Impact</span>
          </div>
          <h2 className={styles.heading}>About Gyandeep</h2>
          <div className={styles.underline} />
        </motion.div>

        {/* Enhanced High-Value Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={styles.statCard}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statSub}>{stat.sub}</span>
            </motion.div>
          ))}
        </div>

        <div className={styles.content}>
          {/* Professional & Generic Who I Am Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.narrativeSection}
          >
            <div className={styles.narrativeHeader}>
              <div className={styles.narrativeBadge}>
                <Sparkles size={14} className={styles.badgeIcon} />
                <span>Who I Am</span>
              </div>
              <h3 className={styles.subHeading}>
                Passionate Developer Crafting <span className="text-gradient">Modern Digital Experiences</span>
              </h3>
              <p className={styles.leadText}>
                I am a passionate <strong className={styles.highlightWhite}>Full Stack & Mobile Developer</strong> dedicated to building high-performance, accessible, and user-centric digital products across <strong className={styles.highlightWhite}>Mobile, Web, and TV</strong> platforms. With a solid foundation in computer science and extensive hands-on experience across modern ecosystems like React, React Native, TypeScript, and Node.js, I thrive on turning complex requirements into clean, intuitive, and reliable applications.
              </p>
              <p className={styles.leadText} style={{ marginTop: '1.15rem' }}>
                My development approach pairs clean, maintainable architecture with a relentless focus on performance and end-user experience. Whether building scalable APIs, integrating real-time features, or crafting pixel-perfect responsive user interfaces, I take pride in delivering robust end-to-end solutions and collaborating effectively within innovative development teams.
              </p>
            </div>
          </motion.div>

          {/* Education & Experience Columns */}
          <div className={styles.splitSection}>
            {/* Experience Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.column}
            >
              <div className={styles.columnHeadingGroup}>
                <Briefcase size={22} className={styles.colIcon} />
                <h3 className={styles.columnHeading}>Experience</h3>
              </div>

              <div className={styles.timeline}>
                {experience.map((exp, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.expHeader}>
                        <div>
                          <h4 className={styles.role}>{exp.role}</h4>
                          <p className={styles.company}>{exp.company} • {exp.location}</p>
                        </div>
                        <div className={styles.periodBadge}>
                          <Calendar size={14} />
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

            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.column}
            >
              <div className={styles.columnHeadingGroup}>
                <GraduationCap size={24} className={styles.colIcon} />
                <h3 className={styles.columnHeading}>Education</h3>
              </div>

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
                        <div className={styles.periodBadge}>
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className={styles.eduDesc}>{edu.description}</p>
                      <div className={styles.statusTag}>
                        <CheckCircle2 size={13} />
                        <span>{edu.status}</span>
                      </div>
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
