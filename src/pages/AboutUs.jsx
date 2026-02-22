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
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroDescription}>
              Expert Care. Honest Approach.
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
              <h3>Thoughtful Care for Every Smile</h3>
              <p>
                With Dentovate, you receive complete dental care supported by modern technology, strict hygiene protocols, and ethical treatment planning. From routine check-ups to complex procedures, we focus on comfort, clarity, and long-term oral health.
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
              <h3>Transparent Communication</h3>
              <p>
                We believe clarity builds trust. From diagnosis to treatment planning and costs, everything is explained openly and honestly. Clear timelines, upfront estimates, and honest guidance help you feel confident throughout your care.
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
