import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ShootingStars from '../ShootingStars/ShootingStars';
import styles from './Home.module.css';

const Home = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className={styles.badge}
          >
            Available for work
          </motion.div>
          
          <h1 className={styles.title}>
            Hi, I'm <br />
            <span className="text-gradient">Gyandeep Kumar</span>
          </h1>
          
          <p className={styles.description}>
            A passionate <span className={styles.highlight}>Full Stack Developer</span> crafting 
            beautiful, accessible, and performant web experiences with modern technologies.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              View Projects
              <ArrowRight size={18} className={styles.arrowIcon} />
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>

          <div className={styles.socials}>
            <a 
              href="https://github.com/Gyandeep1030" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gyandeep1030/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:Gyandeep1030@gmail.com" 
              className={styles.socialLink}
            >
              <Mail size={24} />
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
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`${styles.floatingBadge} ${styles.badgeTop}`}
            >
              🚀 React Developer
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`${styles.floatingBadge} ${styles.badgeBottom}`}
            >
              💻 Problem Solver
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
