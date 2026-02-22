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
            {/* <motion.div
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
            </motion.div> */}

            <h1 id="hero-heading" className={styles.heroTitle}>
              Smiles Built on Precision 
            </h1>

            <p className={styles.heroDescription}>
              From preventive care to comprehensive advanced treatments, we blend modern dental technology with a warm, patient-first approach you can trust.
            </p>

            <motion.div
              className={styles.ctaWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact-us" className={styles.ctaButton}>
                Begin Your Dental Care
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            className={styles.whyChooseUs}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.whyChooseUsHeader}>
              <h2 className={styles.whyChooseUsTitle}>Why Choose Us</h2>
              <p className={styles.whyChooseUsSubtitle}>What Makes Dentovate Truly Different</p>
            </div>

            <div className={styles.whyChooseUsGrid}>
              <div className={styles.whyChooseUsCard}>
                <div className={styles.whyChooseUsIcon}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2C8.48 2 4 6.48 4 12C4 17.52 8.48 22 14 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 14 2ZM14 20C9.58 20 6 16.42 6 12C6 7.58 9.58 4 14 4C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20Z" fill="currentColor"/>
                    <path d="M14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C16.21 16 18 14.21 18 12C18 9.79 16.21 8 14 8ZM14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12C16 13.1 15.1 14 14 14Z" fill="currentColor"/>
                    <path d="M14 18C11.24 18 9 15.76 9 13H7C7 16.31 9.69 19 13 19H15C18.31 19 21 16.31 21 13C21 10.35 19.19 8.13 16.71 7.56L15.67 7.29C14.78 7.04 14 6.43 14 5.44V5L12.44 5.72C10.53 6.43 9.15 8.08 8.73 10H6.27C6.82 7.03 9.24 4.67 12.31 4.1L13.37 3.82C14.83 3.44 16 2.23 16 0.67V0.5L14.5 1.24C10.66 2.74 8 6.72 8 11C8 11.86 8.12 12.68 8.35 13.45L8 14.5C7.67 15.74 8.26 17.08 9.43 17.47L10.5 17.84C9.79 18.88 9.75 20.31 10.4 21.38L11.4 22.91C12.19 24.08 13.62 24.31 14.71 23.6L16.38 22.47C17.32 21.83 17.67 20.58 17.28 19.5L16.5 18C17.35 17.78 18.14 17.39 18.83 16.86L18.5 15.5C18.13 14.13 16.94 13.26 15.5 13.26H15C15.72 12.47 16.22 11.5 16.41 10.44L17 8.5C16.45 8.8 15.85 9 15.22 9.12L14 9.5V11C14 11.55 14.45 12 15 12H16C16.55 12 17 11.55 17 11V9.56L17.5 9.38C18.45 9.13 19.25 8.5 19.67 7.63L21 5C20.45 5.5 19.81 5.9 19.1 6.19L18.5 5C17.94 4.43 17 4 16 4C15 4 14.06 4.43 13.5 5L12.9 6.19C11.25 6.86 10 8.5 10 10.36V11C10 12.65 11.35 14 13 14H14V15C14 16.1 14.9 17 16 17H17C18.1 17 19 16.1 19 15V13.69L21.31 12.75C22.48 12.26 23 10.96 22.5 9.81L21.5 7.5C21.18 6.68 20.47 6.07 19.6 6L18.5 6.19C17.5 5.69 16.36 5.5 15.25 5.66L14.67 4.63C14.1 4.17 13.37 4 12.63 4H12C10.9 4 10 4.9 10 6V7.5C10 7.78 10.05 8.05 10.14 8.3L9.5 9.5C9.14 10.21 9.21 11.05 9.69 11.69L10 12.19V12C10 11.45 9.55 11 9 11C8.45 11 8 11.45 8 12V13C8 13.55 8.45 14 9 14H9.5L9 15.5C8.65 16.68 9.03 17.98 9.95 18.9L11 20C10.12 20.59 9.5 21.65 9.5 22.75V24H11.5V22.75C11.5 22.33 11.7 21.95 12 21.66L13 21C13.35 20.81 13.76 20.73 14.17 20.8L15 21C15.28 21.1 15.6 21.13 15.91 21.07L17 20.5C17.64 20.28 18.33 20.36 18.92 20.72L20 21.5C20.31 21.69 20.67 21.79 21.04 21.79H22V19.79H21.04C20.55 19.79 20.1 19.57 19.8 19.19L18.5 17.5C19.18 16.81 19.5 15.86 19.5 14.88V13C19.5 11.62 18.88 10.35 17.85 9.59L17 8.95C17.3 8.27 17.35 7.5 17.12 6.78L16.5 5C16.3 5.35 16.06 5.67 15.78 5.95L15 6.5C14.4 6.14 13.71 6 13 6H12C11.56 6 11.14 6.11 10.76 6.31L10 6.65V8C10 8.55 10.45 9 11 9H12C12.55 9 13 8.55 13 8V7.06L14 6.69C14.58 6.44 15.2 6.35 15.8 6.44L17 6.69C17.35 6.77 17.71 6.72 18.03 6.56L19.5 5.94C19.7 5.85 19.85 5.68 19.92 5.47L20.5 3.5C20.57 3.22 20.54 2.92 20.41 2.66L19.5 2C19.28 2.17 19.03 2.31 18.75 2.4L17.5 2.75C17.04 2.48 16.53 2.31 16 2.23V2M14 4.08C14.55 4.14 15 4.59 15 5.15V6H14.5V5.5C14.5 5.22 14.28 5 14 5C13.72 5 13.5 5.22 13.5 5.5V6H13V5.15C13 4.59 13.45 4.14 14 4.08M10 7.5C10.55 7.5 11 7.95 11 8.5V9H10V8.5C10 7.95 10.45 7.5 10 7.5M14 10C14.55 10 15 10.45 15 11V12H14V11C14 10.45 14.45 10 14 10M17 14.5C17 15.33 17.67 16 18.5 16C19.33 16 20 15.33 20 14.5C20 13.67 19.33 13 18.5 13C17.67 13 17 13.67 17 14.5M9.5 15C9.5 14.17 10.17 13.5 11 13.5C11.83 13.5 12.5 14.17 12.5 15C12.5 15.83 11.83 16.5 11 16.5C10.17 16.5 9.5 15.83 9.5 15M18.5 17.5C18.5 18.33 17.83 19 17 19C16.17 19 15.5 18.33 15.5 17.5C15.5 16.67 16.17 16 17 16C17.83 16 18.5 16.67 18.5 17.5Z" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                <h3 className={styles.whyChooseUsCardTitle}>Patient-Centric Planning</h3>
                <p className={styles.whyChooseUsCardDescription}>
                  Every treatment begins with listening. We explain options clearly, respect your comfort levels, and tailor care to your dental and lifestyle needs.
                </p>
              </div>

              <div className={styles.whyChooseUsCard}>
                <div className={styles.whyChooseUsIcon}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M24.5 11.5L20 7V4C20 3.45 19.55 3 19 3H5C4.45 3 4 3.45 4 4V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V17L24.5 21.5C25.05 22.05 26 21.65 26 21V13.5C26 12.95 25.55 12.5 25 12.5L24.5 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 3V7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.whyChooseUsCardTitle}>State-of-the-Art Dental Technology</h3>
                <p className={styles.whyChooseUsCardDescription}>
                  We use modern imaging and precision tools to ensure accurate diagnosis, minimally invasive care, and predictable treatment outcomes.
                </p>
              </div>

              <div className={styles.whyChooseUsCard}>
                <div className={styles.whyChooseUsIcon}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2C8.48 2 4 6.48 4 12C4 17.52 8.48 22 14 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 8V14L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22L9 19C9 16.79 10.79 15 13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.whyChooseUsCardTitle}>Experienced Clinical Team</h3>
                <p className={styles.whyChooseUsCardDescription}>
                  We have strong clinical expertise with a gentle approach, ensuring the right specialist handles each need, so treatments are both effective and reassuring.
                </p>
              </div>

              <div className={styles.whyChooseUsCard}>
                <div className={styles.whyChooseUsIcon}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2V8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.whyChooseUsCardTitle}>High Sterilisation Standards</h3>
                <p className={styles.whyChooseUsCardDescription}>
                  International sterilisation protocols and strict hygiene practices keep your safety uncompromised at every step.
                </p>
              </div>
            </div>
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
            {/* <motion.div
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <p className={styles.testimonialText}>
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
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className={styles.bgDecoration} aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
