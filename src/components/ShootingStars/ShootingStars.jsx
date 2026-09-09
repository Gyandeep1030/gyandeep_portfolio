import React, { useMemo } from 'react';
import styles from './ShootingStars.module.css';

const ShootingStars = () => {
  const stars = useMemo(() => [
    { top: '12%', left: '8%', delay: '0.4s', duration: '3.2s' },
    { top: '25%', left: '28%', delay: '1.2s', duration: '2.8s' },
    { top: '5%', left: '52%', delay: '2.5s', duration: '3.5s' },
    { top: '38%', left: '74%', delay: '0.8s', duration: '4.1s' },
    { top: '18%', left: '88%', delay: '3.1s', duration: '2.6s' },
    { top: '42%', left: '16%', delay: '1.9s', duration: '3.8s' },
    { top: '8%', left: '40%', delay: '4.2s', duration: '3.0s' },
    { top: '30%', left: '62%', delay: '2.1s', duration: '2.9s' },
    { top: '48%', left: '82%', delay: '3.6s', duration: '4.4s' },
    { top: '15%', left: '95%', delay: '0.2s', duration: '3.6s' }
  ], []);

  return (
    <div className={styles.shootingStars}>
      {stars.map((star, i) => (
        <span 
          key={i} 
          className={styles.star} 
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration
          }} 
        />
      ))}
    </div>
  );
};

export default ShootingStars;
