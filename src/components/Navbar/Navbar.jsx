import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Laptop, Home, User, Briefcase, Code, Mail, Download, Sparkles } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Case Studies', id: 'projects', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'About', id: 'about', icon: User },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={`${styles.container} ${isScrolled ? styles.glass : ''}`}>
        <div 
          className={styles.logo}
          onClick={() => scrollToSection('home')}
        >
          <Laptop className={styles.logoIcon} size={22} />
          <div className={styles.logoTextGroup}>
            <span className={styles.brandName}>GYANDEEP</span>
            <span className={styles.brandBadge}>Mobile • Web • TV</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={styles.navLink}
              >
                {link.name}
              </button>
            </li>
          ))}
          <li className={styles.actionButtons}>
            <a 
              href="/Gyandeep Kumar — Mobile • Web • TV Portfolio.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioPdfBtn}
              title="View Complete Mobile • Web • TV Portfolio PDF"
            >
              <span>Portfolio PDF</span>
            </a>
            <a 
              href="/resume.pdf" 
              download="Gyandeep_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
              title="Download Resume"
            >
              <span>Resume</span>
              <Download size={15} />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={styles.mobileLink}
                >
                  <span className={styles.linkContent}>
                    <IconComponent size={20} className={styles.linkIcon} />
                    <span>{link.name}</span>
                  </span>
                  <motion.span
                    className={styles.arrow}
                    initial={{ x: -8, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              );
            })}
            <motion.a
              href="/Gyandeep Kumar — Mobile • Web • TV Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className={`${styles.mobileLink} ${styles.mobilePortfolioBtn}`}
            >
              <span className={styles.linkContent}>
                <Sparkles size={20} className={styles.linkIcon} />
                <span>Portfolio PDF</span>
              </span>
              <motion.span
                className={styles.arrow}
                initial={{ x: -8, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Gyandeep_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.05 }}
              className={`${styles.mobileLink} ${styles.mobileResumeBtn}`}
            >
              <span className={styles.linkContent}>
                <Download size={20} className={styles.linkIcon} />
                <span>Resume</span>
              </span>
              <motion.span
                className={styles.arrow}
                initial={{ x: -8, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 + 0.1 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
