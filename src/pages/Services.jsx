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
      icon: '🔪',
      title: 'Oral Surgery',
      description: 'Safe surgical and simple extractions, including cystic enucleation, performed with precision and patient comfort in focus.',
      features: ['Simple Extractions', 'Surgical Extractions', 'Cystic Enucleation', 'Minimal Discomfort']
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Dental Implants',
      description: 'Conventional and immediate-loading implants designed to restore function, aesthetics, and long-term oral stability.',
      features: ['Conventional Implants', 'Immediate-Loading', 'Implant Support', 'Long-term Solution']
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Root Canal Treatment',
      description: 'Gentle, precise procedures that relieve pain, eliminate infection, and preserve your natural tooth structure.',
      features: ['Pain Relief', 'Infection Removal', 'Tooth Preservation', 'Gentle Precision']
    },
    {
      id: 4,
      icon: '👶',
      title: 'Pediatric Dental Care',
      description: 'Friendly, preventive care for children, focused on healthy development and positive dental experiences.',
      features: ['Preventive Care', 'Child-Friendly', 'Habit Guidance', 'Positive Experience']
    },
    {
      id: 5,
      icon: '✨',
      title: 'Aesthetic Dentistry',
      description: 'Subtle cosmetic treatments that enhance your smile while preserving a natural, balanced appearance.',
      features: ['Cosmetic Enhancement', 'Natural Look', 'Smile Balance', 'Confidence Boost']
    },
    {
      id: 6,
      icon: '👑',
      title: 'Crowns & Bridges',
      description: 'Durable, well-fitted restorations that improve strength, alignment, and smile harmony.',
      features: ['Crown Placement', 'Bridge Installation', 'Durable Solution', 'Smile Harmony']
    },
    {
      id: 7,
      icon: '⚡',
      title: 'Tooth Whitening',
      description: 'Professional whitening solutions that safely brighten your smile without damaging enamel.',
      features: ['Safe Whitening', 'Enamel Protection', 'Even Results', 'Quick Process']
    },
    {
      id: 8,
      icon: '🦷',
      title: 'Braces',
      description: 'Clear, metal, and ceramic braces tailored to suit your comfort, lifestyle, and alignment goals.',
      features: ['Clear Braces', 'Metal Braces', 'Ceramic Options', 'Custom Treatment']
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
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
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
