import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub,
  FaApple, FaAndroid, FaGooglePlay
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { 
  SiRedux, SiJavascript, SiHtml5, SiCss3, 
  SiTailwindcss, SiSpringboot, SiFirebase, 
  SiMongodb, SiMysql, SiPostman, SiTypescript,
  SiNextdotjs, SiStripe, SiPostgresql, SiFramer
} from 'react-icons/si';
import { TbApi, TbBroadcast, TbPlugConnected } from 'react-icons/tb';
import { Smartphone, Radio, Tv, Layers } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Mobile & Cross-Platform',
      icon: <Smartphone size={20} />,
      badge: 'Core Focus',
      description: 'Production iOS, Android & TV applications with native bridges',
      items: [
        { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'iOS & Swift', icon: <FaApple />, color: '#F5F5F7' },
        { name: 'Android & Kotlin', icon: <FaAndroid />, color: '#3DDC84' },
        { name: 'TV Apps (Apple/Android)', icon: <Tv size={28} />, color: '#A855F7' },
        { name: 'App Store / Play Releases', icon: <FaGooglePlay />, color: '#00E676' }
      ]
    },
    {
      category: 'Real-Time, Media & Telemetry',
      icon: <Radio size={20} />,
      badge: 'Specialized',
      description: 'Sub-second audio/video pipelines, background services & push protocols',
      items: [
        { name: 'WebRTC (P2P / AntMedia)', icon: <TbBroadcast />, color: '#38BDF8' },
        { name: 'WebSockets Pipelines', icon: <TbPlugConnected />, color: '#F43F5E' },
        { name: 'iOS CallKit & Alarms', icon: <FaApple />, color: '#E2E8F0' },
        { name: 'Firebase FCM & APNs', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'GPS Geofencing', icon: <Layers size={28} />, color: '#10B981' }
      ]
    },
    {
      category: 'Web & Front-End Architecture',
      icon: <FaReact size={20} />,
      badge: 'Modern Web',
      description: 'High-performance responsive SPAs, SSR, and dynamic animations',
      items: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
        { name: 'Redux Toolkit', icon: <SiRedux />, color: '#764ABC' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Framer Motion', icon: <SiFramer />, color: '#F59E0B' },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript />, color: '#F7DF1E' }
      ]
    },
    {
      category: 'Backend & Enterprise Integrations',
      icon: <FaNodeJs size={20} />,
      badge: 'APIs & Billing',
      description: 'Microservices, automated billing engines, and accounting sync',
      items: [
        { name: 'Node.js & Express', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Stripe & POS Payments', icon: <SiStripe />, color: '#635BFF' },
        { name: 'QuickBooks API', icon: <TbApi />, color: '#2CA01C' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'RESTful APIs', icon: <TbApi />, color: '#009688' },
        { name: 'Java', icon: <FaJava />, color: '#007396' }
      ]
    },
    {
      category: 'Databases & DevOps Tools',
      icon: <FaGitAlt size={20} />,
      badge: 'Infrastructure',
      description: 'Relational & NoSQL databases, version control, and API testing',
      items: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Firebase Firestore', icon: <SiFirebase />, color: '#FFA000' },
        { name: 'Git & GitHub', icon: <FaGithub />, color: '#F05032' },
        { name: 'Postman & VS Code', icon: <SiPostman />, color: '#FF6C37' }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <div className={styles.topBadge}>
            <span>Technical Capabilities</span>
          </div>
          <h2 className={styles.heading}>Skills & Technology Stack</h2>
          <p className={styles.subtext}>
            Proven stack across cross-platform mobile development, real-time media protocols, and enterprise integrations.
          </p>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.skillCard} ${index === 0 ? styles.featuredCard : ''}`}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.iconCircle}>
                  {group.icon}
                </div>
                <div>
                  <div className={styles.titleRow}>
                    <h3 className={styles.skillCategory}>{group.category}</h3>
                    <span className={styles.categoryBadge}>{group.badge}</span>
                  </div>
                  <p className={styles.categoryDesc}>{group.description}</p>
                </div>
              </div>

              <div className={styles.skillIcons}>
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className={styles.iconWrapper} 
                    title={item.name}
                    style={{ '--hover-color': item.color }}
                  >
                    <div className={styles.icon} style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className={styles.iconName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
