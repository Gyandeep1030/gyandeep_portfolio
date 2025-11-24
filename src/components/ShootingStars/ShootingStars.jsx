import React from 'react';
import styles from './ShootingStars.module.css';

const ShootingStars = () => {
  return (
    <div className={styles.shootingStars}>
      {[...Array(10)].map((_, i) => (
        <span key={i} className={styles.star} style={{
          top: `${Math.random() * 50}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }} />
      ))}
    </div>
  );
};

export default ShootingStars;
