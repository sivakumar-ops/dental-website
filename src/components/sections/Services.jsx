import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      id: 1,
      number: '01',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6V12C4 16.42 7.58 20.74 12 22C16.42 20.74 20 16.42 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Oral Surgery',
      description: 'Safe surgical and simple extractions, including cystic enucleation, performed with precision and patient comfort in focus.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca128c8e27e93e7826b606_Rectangle%209%20(1).jpg',
      link: '/our-services'
    },
    {
      id: 2,
      number: '02',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8 2 4 4 4 7V11C4 14 7 17 12 18C17 17 20 14 20 11V7C20 4 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Root Canal Treatment',
      description: 'Gentle, precise procedures that relieve pain, eliminate infection, and preserve your natural tooth structure.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca12965e259ddd4b1fedfa_Rectangle%2011%20(1).jpg',
      link: '/our-services'
    },
    {
      id: 3,
      number: '03',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Pediatric Dental Care',
      description: 'Friendly, preventive care for children, focused on healthy development and positive dental experiences.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca12965e259ddd4b1fedfa_Rectangle%2011%20(1).jpg',
      link: '/our-services'
    },
    {
      id: 4,
      number: '04',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6V12C4 16.42 7.58 20.74 12 22C16.42 20.74 20 16.42 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V18M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Dental Implants',
      description: 'Conventional and immediate-loading implants designed to restore function, aesthetics, and long-term oral stability.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64aeadb9136790cbb09e7d2c_Cosmetic%20Dentistry.jpg',
      link: '/our-services'
    },
    {
      id: 5,
      number: '05',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Aesthetic Dentistry',
      description: 'Subtle cosmetic treatments that enhance your smile while preserving a natural, balanced appearance.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64aeadb9136790cbb09e7d2c_Cosmetic%20Dentistry.jpg',
      link: '/our-services'
    },
    {
      id: 6,
      number: '06',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 8L12 4L20 8V16L12 20L4 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 14L12 18L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Crowns & Bridges',
      description: 'Durable, well-fitted restorations that improve strength, alignment, and smile harmony.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca12965e259ddd4b1fedfa_Rectangle%2011%20(1).jpg',
      link: '/our-services'
    },
    {
      id: 7,
      number: '07',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8 2 5 5 5 9C5 13 8 17 12 22C16 17 19 13 19 9C19 5 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L10 10L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Tooth Whitening',
      description: 'Professional whitening solutions that safely brighten your smile without damaging enamel.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca12965e259ddd4b1fedfa_Rectangle%2011%20(1).jpg',
      link: '/our-services'
    },
    {
      id: 8,
      number: '08',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="8" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8V6C7 4.9 7.9 4 9 4H15C16.1 4 17 4.9 17 6V8" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="14" r="1" fill="currentColor"/>
          <circle cx="15" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Braces',
      description: 'Clear, metal, and ceramic braces tailored to suit your comfort, lifestyle, and alignment goals.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca128c8e27e93e7826b606_Rectangle%209%20(1).jpg',
      link: '/our-services'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className={styles.services} ref={ref} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="services-heading" className={styles.sectionTitle}>
              Our Core Services
            </h2>
            <p className={styles.sectionDescription}>
              From preventive care to advanced treatments, we offer comprehensive dental solutions tailored to your needs.
            </p>
          </div>
          <Link to="/our-services" className={styles.viewAllButton}>
            View All Services
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              className={styles.serviceCard}
              variants={itemVariants}
            >
              <div className={styles.serviceContent}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3 className={styles.serviceTitle}>
                  <Link to={service.link}>{service.title}</Link>
                </h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Link to={service.link} className={styles.learnMoreLink}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className={styles.serviceImageWrapper}>
                <img
                  src={service.image}
                  alt=""
                  className={styles.serviceImage}
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className={styles.imageOverlay}></div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
