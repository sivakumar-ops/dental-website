import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Banner Section */}
      <div className={styles.banner}>
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
          alt="Our dental team collaborating with bright smiles"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className={styles.bannerBadge}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L8.5 4.5L12.5 4.75L9.5 7.25L10.25 11.25L7 9.25L3.75 11.25L4.5 7.25L1.5 4.75L5.5 4.5L7 1Z" fill="currentColor"/>
              </svg>
              Award-Winning Dental Care
            </span> */}
            <h1 id="hero-heading" className={styles.bannerTitle}>
              Your Smile, Our Priority
            </h1>
            <p className={styles.bannerSubtitle}>
              A team of dedicated professionals committed to delivering exceptional dental care with a personal touch
            </p>
            <div className={styles.bannerCta}>
              <Link to="/contact-us" className={styles.bannerButton}>
                Book Your Consultation
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/our-services" className={styles.bannerButtonSecondary}>
                Our Services
              </Link>
            </div>
            {/* <div className={styles.bannerStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10k+</span>
                <span className={styles.statLabel}>Happy Patients</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9</span>
                <span className={styles.statLabel}>Google Rating</span>
              </div>
            </div> */}
          </motion.div>
        </div>
        <div className={styles.bannerScroll}>
          <span>Scroll to explore</span>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollDot}></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          {/* Why Choose Us Section */}
          <motion.div
            className={styles.whyChooseUs}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.whyChooseUsHeader}>
              <span className={styles.sectionTag}>Why Choose Us</span>
              <h2 className={styles.whyChooseUsTitle}>What Makes Dentovate Truly Different</h2>
              <p className={styles.whyChooseUsSubtitle}>Experience dental care that puts your comfort and health first</p>
            </div>

            <div className={styles.whyChooseUsGrid}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src="/home/1.jpeg" alt="Patient-Centric Planning" className={styles.flipCardImage} />
                    <h3 className={styles.flipCardTitle}>Patient-Centric Planning</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.flipCardTitle}>Patient-Centric Planning</h3>
                    <p className={styles.flipCardDescription}>
                      Every treatment begins with listening. We explain options clearly, respect your comfort levels, and tailor care to your dental and lifestyle needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src="/home/3.jpeg" alt="State-of-the-Art Dental Technology" className={styles.flipCardImage} />
                    <h3 className={styles.flipCardTitle}>State-of-the-Art Technology</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.flipCardTitle}>State-of-the-Art Technology</h3>
                    <p className={styles.flipCardDescription}>
                      We use modern imaging and precision tools to ensure accurate diagnosis, minimally invasive care, and predictable treatment outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src="/home/4.jpg" alt="Experienced Clinical Team" className={styles.flipCardImage} />
                    <h3 className={styles.flipCardTitle}>Experienced Clinical Team</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.flipCardTitle}>Experienced Clinical Team</h3>
                    <p className={styles.flipCardDescription}>
                      Our specialists combine expertise with a gentle approach, ensuring the right dentist handles each need for effective treatments.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src="/home/images-3.jpeg" alt="High Sterilisation Standards" className={styles.flipCardImage} />
                    <h3 className={styles.flipCardTitle}>High Sterilisation Standards</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.flipCardTitle}>High Sterilisation Standards</h3>
                    <p className={styles.flipCardDescription}>
                      International sterilisation protocols and strict hygiene practices keep your safety uncompromised at every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className={styles.bgDecoration} aria-hidden="true"></div>
      <div className={styles.bgDecorationLeft} aria-hidden="true"></div>
    </section>
  );
};

export default Hero;