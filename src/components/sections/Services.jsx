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
      title: 'Oral Surgery',
      description: 'Safe surgical and simple extractions, including cystic enucleation, performed with precision and patient comfort in focus.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca128c8e27e93e7826b606_Rectangle%209%20(1).jpg',
      link: '/our-services'
    },
    {
      id: 2,
      number: '02',
      title: 'Dental Implants',
      description: 'Conventional and immediate-loading implants designed to restore function, aesthetics, and long-term oral stability.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64aeadb9136790cbb09e7d2c_Cosmetic%20Dentistry.jpg',
      link: '/our-services'
    },
    {
      id: 3,
      number: '03',
      title: 'Root Canal Treatment',
      description: 'Gentle, precise procedures that relieve pain, eliminate infection, and preserve your natural tooth structure.',
      image: 'https://cdn.prod.website-files.com/64abad8fc8dff88b9569d4f3/64ca12965e259ddd4b1fedfa_Rectangle%2011%20(1).jpg',
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
