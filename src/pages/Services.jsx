import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services - Dental 128';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive dental services including preventive, cosmetic, and restorative dentistry. Expert care for all your oral health needs.');
    }
  }, []);

  const allServices = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6V12C4 16.42 7.58 20.74 12 22C16.42 20.74 20 16.42 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Oral Surgery',
      description: 'Safe surgical and simple extractions, including cystic enucleation, performed with precision and patient comfort in focus.',
      image: '/services/1.jpeg',
      features: ['Simple Extractions', 'Surgical Extractions', 'Cystic Enucleation', 'Minimal Discomfort']
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6V12C4 16.42 7.58 20.74 12 22C16.42 20.74 20 16.42 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V18M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Dental Implants',
      description: 'Conventional and immediate-loading implants designed to restore function, aesthetics, and long-term oral stability.',
      image: '/services/4.png',
      features: ['Conventional Implants', 'Immediate-Loading', 'Implant Support', 'Long-term Solution']
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8 2 4 4 4 7V11C4 14 7 17 12 18C17 17 20 14 20 11V7C20 4 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Root Canal Treatment',
      description: 'Gentle, precise procedures that relieve pain, eliminate infection, and preserve your natural tooth structure.',
      image: '/services/2.jpg',
      features: ['Pain Relief', 'Infection Removal', 'Tooth Preservation', 'Gentle Precision']
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Pediatric Dental Care',
      description: 'Friendly, preventive care for children, focused on healthy development and positive dental experiences.',
      image: '/services/3.png',
      features: ['Preventive Care', 'Child-Friendly', 'Habit Guidance', 'Positive Experience']
    },
    {
      id: 5,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Aesthetic Dentistry',
      description: 'Subtle cosmetic treatments that enhance your smile while preserving a natural, balanced appearance.',
      image: '/services/5.jpg',
      features: ['Cosmetic Enhancement', 'Natural Look', 'Smile Balance', 'Confidence Boost']
    },
    {
      id: 6,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M4 8L12 4L20 8V16L12 20L4 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 14L12 18L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Crowns & Bridges',
      description: 'Durable, well-fitted restorations that improve strength, alignment, and smile harmony.',
      image: '/services/6.png',
      features: ['Crown Placement', 'Bridge Installation', 'Durable Solution', 'Smile Harmony']
    },
    {
      id: 7,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8 2 5 5 5 9C5 13 8 17 12 22C16 17 19 13 19 9C19 5 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L10 10L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Tooth Whitening',
      description: 'Professional whitening solutions that safely brighten your smile without damaging enamel.',
      image: '/services/7.png',
      features: ['Safe Whitening', 'Enamel Protection', 'Even Results', 'Quick Process']
    },
    {
      id: 8,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="8" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8V6C7 4.9 7.9 4 9 4H15C16.1 4 17 4.9 17 6V8" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="14" r="1" fill="currentColor"/>
          <circle cx="15" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Braces',
      description: 'Clear, metal, and ceramic braces tailored to suit your comfort, lifestyle, and alignment goals.',
      image: '/services/8.jpg',
      features: ['Clear Braces', 'Metal Braces', 'Ceramic Options', 'Custom Treatment']
    },
    {
      id: 9,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="8" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8V6C7 4.9 7.9 4 9 4H15C16.1 4 17 4.9 17 6V8" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="14" r="1" fill="currentColor"/>
          <circle cx="15" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Aligners',
      description: 'Dental aligners are clear, removable, and customized plastic trays designed to straighten teeth comfortably without metal wires or brackets, acting as a discreet alternative to braces.',
      image: '/services/4a.jpg',
      features: ['Clear & Invisible', 'Removable Trays', 'Comfortable Fit', 'Customized Treatment']
    }
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Everything Your Smile Needs, in One Place</h1>
            <p className={styles.heroDescription}>
              Dentovate offers comprehensive dental care in one convenient location. From routine treatments to advanced procedures, our services are designed to keep your smile healthy, comfortable and confident at every stage of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {allServices.map((service, index) => (
              <motion.article
                key={service.id}
                className={styles.flipCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.flipCardImage}
                      loading="lazy"
                    />
                    <h3 className={styles.flipCardTitle}>{service.title}</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className={styles.iconCircle}>
                      <span className={styles.icon}>{service.icon}</span>
                    </div>
                    <h3 className={styles.flipCardTitle}>{service.title}</h3>
                    <p className={styles.flipCardDescription}>{service.description}</p>
                    <ul className={styles.featureList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M13.33 4L6 11.33L2.67 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact-us" className={styles.learnMoreBtn}>
                      Book Consultation
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Book your consultation today and take the first step toward a healthier, 
              more beautiful smile.
            </p>
            <Link to="/contact-us" className={styles.ctaButton}>
              Schedule Appointment
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
