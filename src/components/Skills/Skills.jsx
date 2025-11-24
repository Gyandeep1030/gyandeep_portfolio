import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { 
  SiRedux, SiJavascript, SiHtml5, SiCss3, SiBootstrap, 
  SiTailwindcss, SiGreensock, SiSpringboot, SiFirebase, 
  SiMongodb, SiMysql, SiPostman 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    {
      category: 'Front-End',
      items: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' }
      ]
    },
    {
      category: 'Back-End',
      items: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'REST APIs', icon: <TbApi />, color: '#009688' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'VS Code', icon: <VscVscode />, color: '#007ACC' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' }
      ]
    },
    {
      category: 'Other Languages',
      items: [
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' }
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
          <h2 className={styles.heading}>Technical Skills</h2>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.skillCard} ${styles[`area${index + 1}`]}`}
            >
              <h4 className={styles.skillCategory}>{skillGroup.category}</h4>
              <div className={styles.skillIcons}>
                {skillGroup.items.map((item, i) => (
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
