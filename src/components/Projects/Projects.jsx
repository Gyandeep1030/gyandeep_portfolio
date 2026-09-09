import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Smartphone, Sparkles, FileText, Code2 } from 'lucide-react';
import styles from './Projects.module.css';

// Real simulator screenshots from user's system
import bostonThumb from '../../assets/case-studies/boston_payroll_thumb.png';
import bostonScreens from '../../assets/case-studies/boston_payroll_screens.png';
import eventosThumb from '../../assets/case-studies/eventos_arena_thumb.png';
import eventosScreens from '../../assets/case-studies/eventos_arena_screens.png';
import medsOverview from '../../assets/case-studies/meds_overview.png';
import seetbeltOverview from '../../assets/case-studies/seetbelt_overview.png';

// Original projects
import hospitalImg from '../../assets/projects/hospital_management.png';
import faceImg from '../../assets/projects/face_recognition.png';
import realEstateImg from '../../assets/projects/real_estate.png';
import webGrowImg from '../../assets/projects/web_grow_solutions.png';
import jobPortalImg from '../../assets/projects/job_portal.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const allProjects = [
    {
      id: 'boston-payroll',
      title: 'Boston Payroll',
      subtitle: 'Enterprise Payroll & Tax Compliance Mobile Platform',
      categories: ['Mobile Apps', 'Enterprise & Systems'],
      platform: 'React Native • TypeScript • Stripe & QuickBooks',
      description:
        'Enterprise mobile administration platform featuring real-time multi-tenant telemetry, automated QuickBooks Online bi-directional sync, and itemized invoicing with Stripe checkout.',
      tech: ['React Native', 'TypeScript', 'Stripe API', 'QuickBooks', 'iOS & Android'],
      thumbnail: bostonThumb,
      previewImage: bostonScreens,
      isMobileApp: true,
      github: 'https://github.com/Gyandeep1030',
      featured: true
    },
    {
      id: 'eventos-arena',
      title: 'Eventos Arena',
      subtitle: 'Two-Sided Convention & Event Mobile Platform',
      categories: ['Mobile Apps'],
      platform: 'React Native • Vector Maps • Cloud Sync',
      description:
        'Convention companion featuring vector venue floor plans, cryptographic QR digital passes for queue-free access, 1-on-1 B2B matchmaking, and APNs/FCM push updates.',
      tech: ['React Native', 'Vector Maps', 'QR Passes', 'APNs / FCM', 'Cloud Sync'],
      thumbnail: eventosThumb,
      previewImage: eventosScreens,
      isMobileApp: true,
      github: 'https://github.com/Gyandeep1030',
      featured: true
    },
    {
      id: 'meds-pos',
      title: 'Meds',
      subtitle: 'Healthcare POS & Pharmaceutical Inventory',
      categories: ['Mobile Apps', 'Enterprise & Systems'],
      platform: 'React Native • Redux Toolkit • WebSockets',
      description:
        'Retail pharmacy point-of-sale and drug inventory platform featuring barcode search, batch-level SKU expiration tracking, GPS geofenced attendance, and real-time WebSockets dispatch.',
      tech: ['React Native', 'Redux Toolkit', 'WebSockets', 'GPS Geofencing', 'POS Engine'],
      thumbnail: medsOverview,
      previewImage: medsOverview,
      isMobileApp: true,
      github: 'https://github.com/Gyandeep1030',
      featured: true
    },
    {
      id: 'seetbelt-app',
      title: 'SeetBelt (Careh PA)',
      subtitle: 'Family Safety & WebRTC Emergency SOS',
      categories: ['Mobile Apps'],
      platform: 'React Native • Swift & Kotlin Daemons',
      description:
        'Mission-critical family safety app with one-touch emergency SOS, background GPS tracking, sub-second WebRTC P2P audio/video calling, and lock-screen alarm penetration.',
      tech: ['React Native', 'WebRTC', 'iOS CallKit', 'Android Alarms', 'GPS Tracking'],
      thumbnail: seetbeltOverview,
      previewImage: seetbeltOverview,
      isMobileApp: true,
      github: 'https://github.com/Gyandeep1030',
      featured: true
    },
    {
      id: 'hospital-mgmt',
      title: 'Hospital Management System',
      subtitle: 'Role-Based Clinical Administration',
      categories: ['Web Applications', 'Enterprise & Systems'],
      platform: 'Spring Boot • Hibernate • MySQL',
      description:
        'Streamlines hospital operations across departments with role-based authentication, patient records, doctor scheduling, and MySQL database persistence.',
      tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Thymeleaf'],
      thumbnail: hospitalImg,
      isMobileApp: false,
      github: 'https://github.com/Gyandeep1030',
      featured: false
    },
    {
      id: 'face-recognition',
      title: 'Face Recognition Attendance System',
      subtitle: 'Computer Vision & Automated Logging',
      categories: ['AI & Machine Learning'],
      platform: 'Python • OpenCV • Flask',
      description:
        'Automated real-time attendance verification using deep facial feature detection, OpenCV image processing, Flask backend services, and automated Pandas attendance logs.',
      tech: ['Python', 'OpenCV', 'Flask', 'Pandas', 'NumPy'],
      thumbnail: faceImg,
      isMobileApp: false,
      github: 'https://github.com/Gyandeep1030',
      featured: false
    },
    {
      id: 'real-estate',
      title: 'Real Estate Application',
      subtitle: 'Property Marketplace with Firebase',
      categories: ['Web Applications'],
      platform: 'React.js • Tailwind CSS • Firebase',
      description:
        'Mobile-first real estate listing platform with authentication, protected routes, real-time Firestore database sync, responsive UI cards, and smooth toast notifications.',
      tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Vite'],
      thumbnail: realEstateImg,
      isMobileApp: false,
      github: 'https://github.com/Gyandeep1030',
      featured: false
    },
    {
      id: 'web-grow',
      title: 'Web Grow Solutions',
      subtitle: 'Corporate Platform & REST Backend',
      categories: ['Web Applications'],
      platform: 'React.js • Node.js & Express',
      description:
        'Corporate agency web platform engineered for high performance and responsiveness, featuring dynamic API-driven content, reusable components, and Node.js backend.',
      tech: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'REST API'],
      thumbnail: webGrowImg,
      isMobileApp: false,
      github: 'https://github.com/Gyandeep1030',
      featured: false
    },
    {
      id: 'job-portal',
      title: 'Job Portal Application',
      subtitle: 'Applicant Tracking & Listings Platform',
      categories: ['Web Applications'],
      platform: 'React.js • Node.js & Express',
      description:
        'Interactive career portal featuring recruiter job postings, applicant tracking, multi-criteria filtering, responsive UI designs, and JWT authentication.',
      tech: ['React.js', 'Node.js', 'Express', 'JavaScript', 'CSS3'],
      thumbnail: jobPortalImg,
      isMobileApp: false,
      github: 'https://github.com/Gyandeep1030',
      featured: false
    }
  ];

  const categories = ['All', 'Mobile Apps', 'Web Applications', 'Enterprise & Systems', 'AI & Machine Learning'];

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.categories.includes(activeFilter));

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
          <p className={styles.subtext}>
            A curated showcase of cross-platform mobile apps, enterprise cloud integrations, full-stack web platforms, and automated machine learning tools.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
            >
              {cat}
              {cat === 'All' && <span className={styles.filterCount}>({allProjects.length})</span>}
            </button>
          ))}
        </div>

        {/* Responsive Balanced Project Grid */}
        <motion.div 
          layout
          className={styles.projectGrid}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={styles.projectCard}
              >
                {/* Clean Card Thumbnail Header */}
                <div 
                  className={styles.cardImageWrapper}
                  onClick={() => project.isMobileApp && setSelectedProject(project)}
                  style={{ cursor: project.isMobileApp ? 'pointer' : 'default' }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={styles.cardThumbnail}
                    loading="lazy"
                  />
                  <div className={styles.imageGradientOverlay} />
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <span className={styles.platformLabel}>{project.platform}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  {/* Tech Stack Pills */}
                  <div className={styles.techStack}>
                    {project.tech.map((t, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className={styles.cardFooter}>
                    {project.isMobileApp ? (
                      <>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className={styles.primaryActionBtn}
                        >
                          <Eye size={15} />
                          <span>Inspect Screens</span>
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconActionBtn}
                          title="View on GitHub"
                        >
                          <Github size={17} />
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryActionBtn}
                        >
                          <Code2 size={15} />
                          <span>Source Code</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconActionBtn}
                          title="Explore Project Details"
                        >
                          <ExternalLink size={17} />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio PDF Direct Access Footer Banner */}
        <div className={styles.portfolioBanner}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerIconBox}>
              <FileText size={24} />
            </div>
            <div>
              <h4 className={styles.bannerTitle}>Need Complete Technical Architecture & Case Studies?</h4>
              <p className={styles.bannerSubtitle}>
                Download the comprehensive 8-page Mobile • Web • TV Portfolio document with architectural diagrams, POS state machines, and full mobile mockups.
              </p>
            </div>
          </div>
          <a
            href="/Gyandeep Kumar — Mobile • Web • TV Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bannerBtn}
          >
            <Sparkles size={16} />
            <span>Open Portfolio PDF</span>
          </a>
        </div>
      </div>

      {/* High-Resolution Mobile Screenshot Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalBackdrop}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <p className={styles.modalSubtitle}>{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={styles.closeBtn}
                  title="Close viewer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className={styles.modalImageWrapper}>
                <img
                  src={selectedProject.previewImage}
                  alt={`${selectedProject.title} App Screenshots`}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalFooter}>
                <span className={styles.modalHint}>
                  Showing high-resolution screens & telemetry workflows. Scroll to inspect details.
                </span>
                <a
                  href="/Gyandeep Kumar — Mobile • Web • TV Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalPdfBtn}
                >
                  <FileText size={15} />
                  <span>View in Full Portfolio PDF</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
