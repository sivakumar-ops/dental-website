import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Team from '../components/sections/Team';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Dental 128';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our award-winning dental team committed to providing exceptional care and creating positive experiences for our patients.');
    }
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>About Dental 128</h1>
            <p className={styles.heroDescription}>
              We are dedicated to providing exceptional dental care with a personal touch. 
              Our experienced team combines advanced technology with compassionate service 
              to ensure every patient receives the best possible care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 24L22 30L34 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive, compassionate dental care that exceeds expectations 
                and helps our patients achieve optimal oral health and beautiful smiles.
              </p>
            </motion.div>

            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8V24L32 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>
                We believe in honesty, integrity, and transparency. Every patient is treated 
                with respect and receives personalized care tailored to their unique needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.statNumber}>10k+</div>
              <div className={styles.statLabel}>Happy Patients</div>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Satisfaction Rate</div>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Emergency Care</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
