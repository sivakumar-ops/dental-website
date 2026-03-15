import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Dentovate';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Dentovate\'s award-winning dental team committed to providing exceptional care and creating positive experiences for our patients.');
    }
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Main Content Section */}
      <section className={styles.mainContent}>
        <div className="container">
          <motion.div
            className={styles.contentWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.highlightedTitle}>
              Expert Care. Honest Approach. Thoughtful Care for Every Smile
            </h2>
            <div className={styles.mainTextWrapper}>
              <p className={styles.mainText}>
                With Dentovate, you receive complete dental care supported by modern technology, strict hygiene protocols, and ethical treatment planning. From routine check-ups to complex procedures, we focus on comfort, clarity, and long-term oral health. Our experienced dental team combines strong clinical expertise with a gentle, patient-first approach, ensuring every treatment is clearly explained and delivered with care. We take the time to understand individual needs and tailor solutions accordingly. With a calm environment, transparent communication, and well-equipped facilities, every visit is designed to be reassuring, efficient, and truly worthwhile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Care Different Section */}
      <section className={styles.differentSection}>
        <div className="container">
          <div className={styles.differentHeader}>
            <h2 className={styles.differentTitle}>What Makes Our Care Different</h2>
          </div>

          <div className={styles.differentGrid}>
            <motion.div
              className={styles.differentCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.differentIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2C8.48 2 4 6.48 4 12C4 17.52 8.48 22 14 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 14 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C16.21 16 18 14.21 18 12C18 9.79 16.21 8 14 8Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.differentCardTitle}>Patient-Centric Planning</h3>
              <p className={styles.differentCardDescription}>
                Every treatment at our clinic begins with understanding you. We listen carefully to your concerns, explain findings in clear language, and walk you through all suitable treatment options. Your comfort, lifestyle, and long-term oral health guide every recommendation.
              </p>
            </motion.div>

            <motion.div
              className={styles.differentCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.differentIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.5 11.5L20 7V4C20 3.45 19.55 3 19 3H5C4.45 3 4 3.45 4 4V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V17L24.5 21.5C25.05 22.05 26 21.65 26 21V13.5C26 12.95 25.55 12.5 25 12.5L24.5 11.5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 3V7H6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.differentCardTitle}>State-of-the-Art Dental Technology</h3>
              <p className={styles.differentCardDescription}>
                We use modern dental technology to deliver accurate diagnoses and precise treatments with minimal discomfort. Advanced imaging and digital tools allow us to plan procedures efficiently, reduce chair time, and improve treatment predictability.
              </p>
            </motion.div>

            <motion.div
              className={styles.differentCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.differentIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2C8.48 2 4 6.48 4 12C4 17.52 8.48 22 14 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 14 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 8V14L19 17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.differentCardTitle}>Experienced Clinical Team</h3>
              <p className={styles.differentCardDescription}>
                Our dentists combine strong clinical expertise with a gentle, patient-friendly approach. Years of hands-on experience enable us to manage both routine and complex treatments with confidence and care. We prioritise clear communication, empathy, and attention to detail.
              </p>
            </motion.div>

            <motion.div
              className={styles.differentCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.differentIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 2V8H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.differentCardTitle}>High Sterilisation Standards</h3>
              <p className={styles.differentCardDescription}>
                Patient safety is a top priority at our clinic. We follow strict sterilisation and infection-control protocols aligned with international guidelines. All instruments are thoroughly cleaned, disinfected, and sterilised, while treatment areas are sanitised between every patient.
              </p>
            </motion.div>

            <motion.div
              className={styles.differentCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.differentIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.24 4.79 4.81 7 3.5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8.5 10.5L12 14L19 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.differentCardTitle}>Transparent Communication</h3>
              <p className={styles.differentCardDescription}>
                We believe clarity builds trust. From diagnosis to treatment planning and costs, everything is explained openly and honestly. Patients are encouraged to ask questions and take informed decisions without pressure. Clear timelines, upfront estimates, and honest guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className={styles.stats}>
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
      </section> */}
    </div>
  );
};

export default AboutUs;
