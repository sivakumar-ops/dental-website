import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.heroContent}>
          {/* Text Content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdn.prod.website-files.com/64abad8fc8dff88b9569d457/64ad64b0f236a44c35738eda_Award-Winning-icon.png"
                alt=""
                className={styles.badgeIcon}
                loading="eager"
                aria-hidden="true"
              />
              <h2 className={styles.badgeText}>Award-Winning Dentist</h2>
            </motion.div>

            <h1 id="hero-heading" className={styles.heroTitle}>
              Experience gentle and comprehensive dentistry
            </h1>

            <p className={styles.heroDescription}>
              Our experienced team of dentists and friendly staff work together to create a 
              comfortable and welcoming environment for everyone who walks through our doors.
            </p>

            <motion.div
              className={styles.ctaWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact-us" className={styles.ctaButton}>
                Book Consultation
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className={styles.imageGrid}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="https://cdn.prod.website-files.com/64abad8fc8dff88b9569d457/64c9fecc7ff2b8ff0723917b_smile%202.webp"
                alt="Happy patient smiling after dental treatment"
                className={styles.heroImage}
                loading="eager"
              />
            </div>
            <div className={styles.imageWrapper}>
              <img
                src="https://cdn.prod.website-files.com/64abad8fc8dff88b9569d457/64c9fdd71d03386b73022041_smile%20(1).jpg"
                alt="Professional dental consultation"
                className={styles.heroImage}
                loading="lazy"
              />
            </div>
            <div className={styles.imageWrapper}>
              <img
                src="https://cdn.prod.website-files.com/64abad8fc8dff88b9569d457/64c9fecc5899ce72c08b6c9a_dentist-home%20(1).webp"
                alt="State-of-the-art dental facility"
                className={styles.heroImage}
                loading="lazy"
              />
            </div>

            {/* Testimonial Card */}
            <motion.div
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className={styles.testimonialText}>
                "I have been a patient at Dental for several years, and I can confidently say 
                that it is the best dental clinic I have ever visited."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Emily S.</strong>
                <div className={styles.rating}>
                  <img
                    src="https://cdn.prod.website-files.com/64abad8fc8dff88b9569d457/64b8ea60e7ffc183dd1987a0_rating.svg"
                    alt="5 star rating"
                    loading="lazy"
                  />
                  <span>(5.0) 10k+ ratings on google</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className={styles.bgDecoration} aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
