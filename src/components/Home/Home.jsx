import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import ShootingStars from '../ShootingStars/ShootingStars';
import styles from './Home.module.css';

const Home = () => {
  const corePillars = [
    'React Native',
    'React.js',
    'TypeScript',
    'iOS & Android',
    'Node.js',
    'REST APIs',
    'Redux Toolkit'
  ];

  return (
    <section id="home" className={styles.home}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <ShootingStars />
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <h1 className={styles.title}>
            Creative Developer for <br />
            <span className="text-gradient">Mobile, Web & TV</span>
          </h1>
          
          <p className={styles.description}>
            I develop high-performance <span className={styles.highlight}>React Native (iOS & Android)</span> mobile applications 
            and scalable <span className={styles.highlight}>React.js web platforms</span>, crafting intuitive user experiences 
            with clean architecture and robust <span className={styles.highlight}>cloud & API integrations</span>.
          </p>

          {/* Quick Skill Tags */}
          <div className={styles.pillContainer}>
            {corePillars.map((pillar, i) => (
              <span key={i} className={styles.pillTag}>
                {pillar}
              </span>
            ))}
          </div>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              Featured Case Studies
              <ArrowRight size={18} className={styles.arrowIcon} />
            </a>
            <a 
              href="/Gyandeep Kumar — Mobile • Web • TV Portfolio.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <FileText size={18} />
              Portfolio PDF
            </a>
            <a 
              href="/resume.pdf" 
              download="Gyandeep_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tertiaryBtn}
              title="Download Resume"
            >
              <Download size={17} />
              Resume
            </a>
          </div>

          <div className={styles.socials}>
            <a 
              href="https://github.com/Gyandeep1030" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gyandeep1030/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:Gyandeep1030@gmail.com" 
              className={styles.socialLink}
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.imageWrapper}
        >
          <div className={styles.imageContainer}>
            <div className={styles.glow} />
            <img 
              src="/profile.jpg" 
              alt="Gyandeep Kumar" 
              className={styles.profileImg}
            />
            
            {/* Floating badges with core engineering strengths */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`${styles.floatingBadge} ${styles.badgeTop}`}
            >
              📱 React Native (iOS & Android)
            </motion.div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`${styles.floatingBadge} ${styles.badgeMiddle}`}
            >
              ⚡ React.js & Modern TypeScript
            </motion.div>
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className={`${styles.floatingBadge} ${styles.badgeBottom}`}
            >
              🚀 Scalable Full Stack & APIs
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
