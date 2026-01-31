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
      icon: '🦷',
      title: 'Preventive Dentistry',
      description: 'Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.',
      features: ['Dental Cleanings', 'Oral Examinations', 'Fluoride Treatments', 'Sealants']
    },
    {
      id: 2,
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Smile makeovers, teeth whitening, porcelain veneers, and more to enhance the appearance of your smile.',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Restorative Dentistry',
      description: 'Dental implants, crowns, bridges, and dentures to restore the function and aesthetics of your teeth.',
      features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Root Canal Therapy']
    },
    {
      id: 4,
      icon: '🏥',
      title: 'General Dentistry',
      description: 'Comprehensive oral health care for patients of all ages with personalized treatment plans.',
      features: ['Routine Checkups', 'Cavity Fillings', 'Gum Disease Treatment', 'Oral Cancer Screening']
    },
    {
      id: 5,
      icon: '💉',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
      features: ['Single Implants', 'Multiple Implants', 'All-on-4', 'Implant-Supported Dentures']
    },
    {
      id: 6,
      icon: '🦴',
      title: 'Dental Surgery',
      description: 'Surgical procedures to address complex dental issues and improve oral health.',
      features: ['Wisdom Teeth Removal', 'Tooth Extractions', 'Bone Grafting', 'Gum Surgery']
    },
    {
      id: 7,
      icon: '🔗',
      title: 'Teeth Braces',
      description: 'Orthodontic treatment to straighten teeth and correct bite issues for a healthier smile.',
      features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Bite Correction']
    },
    {
      id: 8,
      icon: '🛡️',
      title: 'Teeth Protection',
      description: 'Protective treatments to prevent damage and maintain optimal oral health.',
      features: ['Mouthguards', 'Night Guards', 'Fluoride Varnish', 'Dental Sealants']
    },
    {
      id: 9,
      icon: '📏',
      title: 'Alignment',
      description: 'Advanced alignment solutions for straighter teeth and improved bite function.',
      features: ['Invisalign', 'Clear Aligners', 'Orthodontics', 'Bite Adjustment']
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
            <h1 className={styles.heroTitle}>Our Comprehensive Services</h1>
            <p className={styles.heroDescription}>
              We offer a wide range of dental services to address all of your oral health needs. 
              From routine cleanings to advanced procedures, our expert team is here to help.
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
